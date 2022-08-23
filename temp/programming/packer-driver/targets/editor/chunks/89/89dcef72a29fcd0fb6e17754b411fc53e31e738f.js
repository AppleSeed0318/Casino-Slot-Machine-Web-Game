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
          for (var i = 0; i < this.node.childrenCount; i++) {
            cc.tween(this.node.children[0]).to(1, {
              position: -20
            }).to(0.3, {
              position: 20
            }).to(0.3, {
              position: -20
            }).to(0.3, {
              position: 20
            }).to(0.3, {
              position: -20
            }).to(0.3, {
              position: 20
            }).to(0.3, {
              position: -20
            }).to(0.3, {
              position: 20
            }).to(0.3, {
              position: -20
            }).to(0.1, {
              position: 0
            }).start();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89dcef72a29fcd0fb6e17754b411fc53e31e738f.js.map