System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, AudioSource, clamp01, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
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

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property({
        type: AudioClip
      }), _dec(_class = (_class2 = (_class3 = class AudioManager extends Component {
        constructor() {
          super(...arguments);
          this._audioSource = null;

          _initializerDefineProperty(this, "reel", _descriptor, this);

          this._self = null;
        }

        onLoad() {
          this._audioSource = this.node.getComponent(AudioSource);
          this._self = this;
          console.log('=-=-1-=-=', this._self, this._self.reel);
          console.log('=-=-2-=-=', this, this.reel);
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

        playReel() {
          this.playSound(this.reel);
        }

        playSound(clip, volumeScale) {
          if (volumeScale === void 0) {
            volumeScale = 1;
          }

          console.log('=-=-3-=-=', this._self, this._self.reel);
          console.log('=-=-4-=-=', this, this.reel);

          this._audioSource.playOneShot(clip, volumeScale);
        }

        setMusicVolume(flag) {
          flag = clamp01(flag);
          this._audioSource.volume = flag;
        }

      }, _class3._instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20c81eb15a152432df87ea90fd3dae8849057de2.js.map