System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Global;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "936d4P1iw1Cq5myHfko/G7C", "Global", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Global", Global = (_dec = ccclass('Global'), _dec(_class = class Global extends Component {
        onLoad() {
          cc.gb = {};
          cc.gb.user = {
            winCount: 0,
            totalPlayed: 0,
            entires: 0,
            entireLevel: 0,
            ways: 1024,
            coinValue: 0,
            totalWinPrice: 0
          };
          cc.gb.gameEnv = {
            soundStatus: true,
            reelPattern: []
          };
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89fe8b71bbb145f25f421f641e361cccfdf4feff.js.map