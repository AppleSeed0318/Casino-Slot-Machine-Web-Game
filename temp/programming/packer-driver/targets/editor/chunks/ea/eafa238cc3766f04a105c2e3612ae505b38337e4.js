System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, assert, clamp01, audioManager, _crd;

  _export("audioManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      assert = _cc.assert;
      clamp01 = _cc.clamp01;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a0745+DShL7Jhv4DE//lZz", "AudioManager", undefined);

      _export("audioManager", audioManager = class audioManager {
        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new audioManager();
          return this._instance;
        }
        /**Manager initialization*/


        init(audioSource) {
          audioManager._audioSource = audioSource;
        }
        /**
        * Play music
        * @param {Boolean} loop Whether to loop
        */


        playMusic(loop) {
          const audioSource = audioManager._audioSource;
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
          const audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!'); // Note that the second parameter "volumeScale" is a multiple of the playback volume, the final playback volume is "audioSource.volume * volumeScale"

          audioSource.playOneShot(audioClip, volumeScale);
        } // Set the music volume


        setMusicVolume(flag) {
          const audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          flag = clamp01(flag);
          audioSource.volume = flag;
        }

      });

      audioManager._instance = void 0;
      audioManager._audioSource = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eafa238cc3766f04a105c2e3612ae505b38337e4.js.map