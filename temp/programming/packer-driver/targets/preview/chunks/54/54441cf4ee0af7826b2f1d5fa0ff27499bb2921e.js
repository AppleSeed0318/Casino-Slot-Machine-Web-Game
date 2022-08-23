System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, ReelManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ff72Y4pJRCp4CBm0bI9icc", "ReelManager", undefined);

      ({
        ccclass,
        property
      } = _decorator); //import {reelController} from './reelController';

      _export("ReelManager", ReelManager = (_dec = ccclass('ReelManager'), _dec(_class = class ReelManager extends Component {
        //@property({type: reelController})
        //protected reel: reelController[] = [];
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54441cf4ee0af7826b2f1d5fa0ff27499bb2921e.js.map