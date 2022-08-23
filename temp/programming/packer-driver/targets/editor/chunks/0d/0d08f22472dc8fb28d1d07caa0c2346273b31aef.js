System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, assert, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
      assert = _cc.assert;
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
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "reelStart", _descriptor, this);
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new AudioManager();
          return this._instance;
        }

        init(audioSource) {
          AudioManager._audioSource = audioSource;
        }

        playMusic(loop) {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.loop = loop;

          if (!audioSource.playing) {
            audioSource.playing();
          }
        }

        playSound(name, volumeScale = 1) {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.playOneShot(this.reelStart, volumeScale);
        }

      }, _class3._instance = void 0, _class3._audioSource = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d08f22472dc8fb28d1d07caa0c2346273b31aef.js.map