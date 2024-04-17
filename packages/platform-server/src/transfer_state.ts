/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {DOCUMENT} from '@angular/common';
import {APP_ID, Provider, TransferState} from '@angular/core';

import {BEFORE_APP_SERIALIZED} from './tokens';

export const TRANSFER_STATE_SERIALIZATION_PROVIDERS: Provider[] = [
  {
    provide: BEFORE_APP_SERIALIZED,
    useFactory: serializeTransferStateFactory,
    deps: [DOCUMENT, APP_ID, TransferState],
    multi: true,
  },
];

function serializeTransferStateFactory(doc: Document, appId: string, transferStore: TransferState) {
  return () => {
    // The `.toJSON` here causes the `onSerialize` callbacks to be called.
    // These callbacks can be used to provide the value for a given key.
    const content = transferStore.toJson();

    if (transferStore.isEmpty) {
      // The state is empty, nothing to transfer,
      // avoid creating an extra `<script>` tag in this case.
      return;
    }

    const script = doc.createElement('script');
    script.id = appId + '-state';
    script.setAttribute('type', 'application/json');
    script.textContent = content;

    // It is intentional that we add the script at the very bottom. Angular CLI script tags for
    // bundles are always `type="module"`. These are deferred by default and cause the transfer
    // transfer data to be queried only after the browser has finished parsing the DOM.
    doc.body.appendChild(script);
  };
}
