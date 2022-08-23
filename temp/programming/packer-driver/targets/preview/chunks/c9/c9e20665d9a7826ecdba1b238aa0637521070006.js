System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, logoAnim;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c246nMC0VGOYwIH0nNKWAu", "logoAnim", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("logoAnim", logoAnim = (_dec = ccclass('logoAnim'), _dec(_class = class logoAnim extends Component {
        start() {
          this.showEffect();
        }

        update(deltaTime) {}

        showEffect() {
          console.log('showEffect = ', this.node);
          cc.tween(this.node).repeatForever(cc.tween().to(1, {
            position: cc.v3(0, 0, 0)
          }).to(1, {
            position: cc.v3(100, 100, 0)
          }).to(1, {
            angle: -45
          }).to(1, {
            angle: 0
          })).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9e20665d9a7826ecdba1b238aa0637521070006.js.map