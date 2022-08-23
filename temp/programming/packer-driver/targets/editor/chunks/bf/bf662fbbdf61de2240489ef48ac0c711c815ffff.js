System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, assert, clamp01, AudioManager, _crd;

  _export("AudioManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      assert = _cc.assert;
      clamp01 = _cc.clamp01;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a0745+DShL7Jhv4DE//lZz", "AudioManager", undefined);

      _export("AudioManager", AudioManager = class AudioManager {
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

      });

      AudioManager._instance = void 0;
      AudioManager._audioSource = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf662fbbdf61de2240489ef48ac0c711c815ffff.js.map