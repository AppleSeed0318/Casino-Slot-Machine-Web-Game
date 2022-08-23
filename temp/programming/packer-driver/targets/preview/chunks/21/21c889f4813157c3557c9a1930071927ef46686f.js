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
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21c889f4813157c3557c9a1930071927ef46686f.js.map