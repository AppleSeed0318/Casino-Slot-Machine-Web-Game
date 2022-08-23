System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, Global;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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

      _export("Global", Global = (_dec = ccclass('Global'), _dec2 = property({
        type: Component
      }), _dec3 = property({
        type: Number
      }), _dec4 = property({
        type: Number
      }), _dec5 = property({
        type: Number
      }), _dec6 = property({
        type: Number
      }), _dec7 = property({
        type: Number
      }), _dec8 = property({
        type: Number
      }), _dec9 = property({
        type: Number
      }), _dec10 = property({
        type: Number
      }), _dec11 = property({
        type: [cc.String]
      }), _dec(_class = (_class2 = class Global extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Instance", _descriptor, this);

          _initializerDefineProperty(this, "winCount", _descriptor2, this);

          _initializerDefineProperty(this, "totalPlayed", _descriptor3, this);

          _initializerDefineProperty(this, "entires", _descriptor4, this);

          _initializerDefineProperty(this, "entireLevel", _descriptor5, this);

          _initializerDefineProperty(this, "ways", _descriptor6, this);

          _initializerDefineProperty(this, "coinValue", _descriptor7, this);

          _initializerDefineProperty(this, "totalWinPrice", _descriptor8, this);

          _initializerDefineProperty(this, "soundStatus", _descriptor9, this);

          _initializerDefineProperty(this, "reelPattern", _descriptor10, this);
        }

        onLoad() {
          console.log('onload = ');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Instance", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winCount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "totalPlayed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "entires", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "entireLevel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ways", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1024;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "coinValue", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "totalWinPrice", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "soundStatus", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "reelPattern", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb6f0f4bcfbaa8b349833155436eceffdad401bb.js.map