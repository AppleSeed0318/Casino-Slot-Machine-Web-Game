System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, _dec, _class, _crd, ccclass, property, logoAnim;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
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
          tween(this.node).to(2, {
            scale: 2,
            position: cc.v2(10, 10),
            rotation: 90
          }).repeatForever().start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=893cbcbec513368e54b2dcd4470ddd0ccdd57bab.js.map