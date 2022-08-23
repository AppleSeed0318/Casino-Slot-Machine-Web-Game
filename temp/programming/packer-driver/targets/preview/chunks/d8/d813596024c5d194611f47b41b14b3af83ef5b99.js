System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, clamp01, _dec, _class, _class2, _crd, ccclass, property, AudioManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      clamp01 = _cc.clamp01;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a0745+DShL7Jhv4DE//lZz", "AudioManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec(_class = (_class2 = class AudioManager extends Component {
        init(audioSource) {
          audioManager._audioSource = audioSource;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new AudioManager();
          return this._instance;
        }

        playMusic(loop) {
          this._audioSource.loop = loop;

          if (!this._audioSource.playing) {
            this._audioSource.playing();
          }
        }

        playSound(clip, volumeScale) {
          if (volumeScale === void 0) {
            volumeScale = 1;
          }

          this._audioSource.playOneShot(clip, volumeScale);
        }

        setMusicVolume(flag) {
          flag = clamp01(flag);
          this._audioSource.volume = flag;
        }

      }, _class2._instance = void 0, _class2._audioSource = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d813596024c5d194611f47b41b14b3af83ef5b99.js.map