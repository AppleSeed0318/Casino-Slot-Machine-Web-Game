System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3, _crd, ccclass, property, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
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
      }), _dec3 = property({
        type: AudioClip
      }), _dec4 = property({
        type: AudioClip
      }), _dec5 = property({
        type: AudioClip
      }), _dec6 = property({
        type: AudioClip
      }), _dec7 = property({
        type: AudioClip
      }), _dec8 = property({
        type: AudioClip
      }), _dec9 = property({
        type: AudioClip
      }), _dec10 = property({
        type: AudioClip
      }), _dec11 = property({
        type: AudioClip
      }), _dec(_class = (_class2 = (_class3 = class AudioManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "coinsWin", _descriptor, this);

          _initializerDefineProperty(this, "coinsInsert", _descriptor2, this);

          _initializerDefineProperty(this, "jackpotWin", _descriptor3, this);

          _initializerDefineProperty(this, "lineWin", _descriptor4, this);

          _initializerDefineProperty(this, "reelStart", _descriptor5, this);

          _initializerDefineProperty(this, "reelRoll", _descriptor6, this);

          _initializerDefineProperty(this, "reelStop", _descriptor7, this);

          _initializerDefineProperty(this, "gameOver", _descriptor8, this);

          _initializerDefineProperty(this, "coinsInsert", _descriptor9, this);

          _initializerDefineProperty(this, "coinsInsert", _descriptor10, this);
        }

        start() {}

        update(deltaTime) {}

        onLoad() {
          AudioManager.instance = this;
        }

        playCoinsWin() {
          cc.audioEngine.playMusic(this.coinsWin, false);
        }

        playCoinsInsert() {
          cc.audioEngine.playEffect(this.coinsInsert, false);
        }

        playJackpotWin() {
          cc.audioEngine.playEffect(this.jackpotWin, false);
        }

        playLineWin() {
          cc.audioEngine.playEffect(this.lineWin, false);
        }

        playReelStart() {
          cc.audioEngine.playEffect(this.reelStart, false);
        }

        playReelRoll() {
          this.playSound(this.reelRoll);
        }

        playReelStop() {
          cc.audioEngine.playEffect(this.reelStop, false);
        }

        playGameOver() {
          cc.audioEngine.playEffect(this.gameOver, false);
        }

        playSound(audioClip) {
          //audio play
          if (!audioClip) {
            return;
          }

          cc.audioEngine.playMusic(audioClip, false);
        }

      }, _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinsWin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinsInsert", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jackpotWin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lineWin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "reelStart", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "reelRoll", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "reelStop", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameOver", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "coinsInsert", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "coinsInsert", [_dec11], {
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
//# sourceMappingURL=859048b427925ef8017578712e5006f52c784d5d.js.map