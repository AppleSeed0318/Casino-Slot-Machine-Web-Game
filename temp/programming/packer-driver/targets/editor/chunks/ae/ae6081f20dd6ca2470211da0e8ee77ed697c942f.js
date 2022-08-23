System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, assert, clamp01, _dec, _class, _class2, _crd, ccclass, property, AudioManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      assert = _cc.assert;
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
        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new AudioManager();
          return this._instance;
        }
        /**Manager initialization*/


        init(audioSource) {
          AudioManager._audioSource = audioSource;
        }
        /**
        * Play music
        * @param {Boolean} loop Whether to loop
        */


        playMusic(loop) {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.loop = loop;

          if (!audioSource.playing) {
            audioSource.playing();
          }
        }
        /**
        * Play a sound effect
        * @param {String} name The name of the sound effect
        * @param {Number} volumeScale Playback volume multiplier
        */


        playSound(name, volumeScale = 1) {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!'); // Note that the second parameter "volumeScale" is a multiple of the playback volume, the final playback volume is "audioSource.volume * volumeScale"

          audioSource.playOneShot(audioClip, volumeScale);
        } // Set the music volume


        setMusicVolume(flag) {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          flag = clamp01(flag);
          audioSource.volume = flag;
        }

      }, _class2._instance = void 0, _class2._audioSource = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae6081f20dd6ca2470211da0e8ee77ed697c942f.js.map