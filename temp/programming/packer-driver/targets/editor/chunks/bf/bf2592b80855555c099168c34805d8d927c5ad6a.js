System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, settingController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9eab1cf7hxHB5abYRT0rQCz", "settingController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("settingController", settingController = (_dec = ccclass('settingController'), _dec(_class = class settingController extends Component {
        start() {}

        update(deltaTime) {}

        showPanel() {
          this.node.active = true;
        }

        hdePanel() {
          this.node.active = false;
        }

        onClickBack() {
          this.hidePanel();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf2592b80855555c099168c34805d8d927c5ad6a.js.map