System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, ReelController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13d39+I52RAg5j1bd6orJFP", "ReelController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelController", ReelController = (_dec = ccclass('ReelController'), _dec(_class = class ReelController extends Component {
        start() {}

        update(deltaTime) {}

        trunReel() {
          cc.tween(this.node).to(0.1, {
            angle: -20
          }).to(0.3, {
            angle: 20
          }).to(0.3, {
            angle: -20
          }).to(0.3, {
            angle: 20
          }).to(0.3, {
            angle: -20
          }).to(0.3, {
            angle: 20
          }).to(0.3, {
            angle: -20
          }).to(0.3, {
            angle: 20
          }).to(0.3, {
            angle: -20
          }).to(0.1, {
            angle: 0
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2cf6c2686b5903b8b381023aa98b36079e5059e.js.map