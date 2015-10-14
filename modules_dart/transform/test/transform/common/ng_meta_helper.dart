library angular2.test.transform.common.ng_meta_helper;

import 'package:angular2/src/core/compiler/directive_metadata.dart';
import 'package:angular2/src/core/change_detection/change_detection.dart';
import 'package:angular2/src/core/metadata/view.dart' show ViewEncapsulation;

export 'package:angular2/src/core/compiler/directive_metadata.dart';
export 'package:angular2/src/core/change_detection/change_detection.dart';
export 'package:angular2/src/core/metadata/view.dart' show ViewEncapsulation;
export 'package:angular2/src/transform/common/model/ng_deps_model.pb.dart';
export 'package:angular2/src/transform/common/ng_meta.dart';

CompileDirectiveMetadata createComponentMetadataForTest(
    {String name: 'TestMetadata',
    moduleUrl: 'asset:angular2/test/test.dart',
    selector: '[test]',
    String template: 'Test'}) {
  return createDirectiveMetadataForTest(
      name: name,
      moduleUrl: moduleUrl,
      selector: selector,
      template: new CompileTemplateMetadata(
          encapsulation: ViewEncapsulation.Emulated, template: template));
}

CompileDirectiveMetadata createDirectiveMetadataForTest(
    {String name: 'TestMetadata',
    String moduleUrl: 'asset:angular2/test/test.dart',
    String selector: '[test]',
    CompileTemplateMetadata template: null}) {
  return CompileDirectiveMetadata.create(
      type: new CompileTypeMetadata(name: name, moduleUrl: moduleUrl),
      isComponent: false,
      dynamicLoadable: true,
      selector: selector,
      exportAs: null,
      changeDetection: ChangeDetectionStrategy.Default,
      inputs: [],
      outputs: [],
      host: {},
      lifecycleHooks: [],
      template: template);
}
