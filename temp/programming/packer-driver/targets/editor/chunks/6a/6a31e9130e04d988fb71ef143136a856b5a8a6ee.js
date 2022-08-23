System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioSource, clamp01, _dec, _class, _class2, _crd, ccclass, property, AudioManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
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
        constructor(...args) {
          super(...args);
          this.__audioSource = null;
        }

        onLoad() {
          this._audioSource = this.node.getComponent(AudioSource);
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new AudioManager();
          return this._instance;
        }

        playMusic(loop) {
          this.audioSource.loop = loop;

          if (!this.audioSource.playing) {
            this.audioSource.playing();
          }
        }

        playSound(clip, volumeScale = 1) {
          this.audioSource.playOneShot(clip, volumeScale);
        }

        setMusicVolume(flag) {
          flag = clamp01(flag);
          this.audioSource.volume = flag;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a31e9130e04d988fb71ef143136a856b5a8a6ee.js.map