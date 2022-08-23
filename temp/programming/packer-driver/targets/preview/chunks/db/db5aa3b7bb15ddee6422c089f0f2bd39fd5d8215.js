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
        start() {
          this.trunReel();
        }

        update(deltaTime) {}

        trunReel() {
          console.log('start reel', this.node.children[0], this.node.children[1]);
          cc.tween(this.node.children[0]).to(1, {
            position: cc.v3(0, 0, 0)
          }).to(1, {
            position: cc.v3(0, -906, 0)
          }).repeat(4).start();
          cc.tween(this.node.children[1]).to(1, {
            position: cc.v3(0, -906, 0)
          }).to(0, {
            position: cc.v3(0, 912, 0)
          }).to(1, {
            position: cc.v3(0, 0, 0)
          }).repeat(4).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db5aa3b7bb15ddee6422c089f0f2bd39fd5d8215.js.map