System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, loadingController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45178gSAFlL84EJnReGghap", "loadingController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loadingController", loadingController = (_dec = ccclass('loadingController'), _dec(_class = class loadingController extends Component {
        start() {}

        update(deltaTime) {}

        showEffect() {
          console.log('showEffect = ', this.node);
          cc.tween(this.node).tag(112).repeatForever(cc.tween().delay(3).to(1, {
            position: cc.v3(-270, 0, 0)
          }).to(1, {
            position: cc.v3(270, 0, 0)
          }).to(0, {
            position: cc.v3(-270, 0, 0)
          }).delay(2)).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4c4568d5f2052a456850790dd69e44f45b1b452.js.map