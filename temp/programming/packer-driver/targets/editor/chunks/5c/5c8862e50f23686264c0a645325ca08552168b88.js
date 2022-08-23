System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, Global;

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

      _export("Global", Global = (_dec = ccclass('Global'), _dec(_class = (_class2 = class Global extends Component {
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
            reelPattern: [['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf'], ['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf'], ['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf'], ['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf'], ['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf']],
            totalPlayedPattern: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 300, 400, 600]
          };
        }

      }, _class2.Instance = _class2, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c8862e50f23686264c0a645325ca08552168b88.js.map