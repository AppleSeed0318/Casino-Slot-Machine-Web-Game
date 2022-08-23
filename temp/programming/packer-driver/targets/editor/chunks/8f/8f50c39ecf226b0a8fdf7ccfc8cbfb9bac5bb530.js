System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, EditBox, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, SettingDetailController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d13ebIY0J1IFogow476yTS2", "SettingDetailController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SettingDetailController", SettingDetailController = (_dec = ccclass('SettingDetailController'), _dec2 = property({
        type: EditBox
      }), _dec3 = property({
        type: EditBox
      }), _dec4 = property({
        type: EditBox
      }), _dec5 = property({
        type: EditBox
      }), _dec(_class = (_class2 = class SettingDetailController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "totalPlayed", _descriptor, this);

          _initializerDefineProperty(this, "entryLevel", _descriptor2, this);

          _initializerDefineProperty(this, "ways", _descriptor3, this);

          _initializerDefineProperty(this, "coinValue", _descriptor4, this);
        }

        start() {
          showAllValue();
        }

        update(deltaTime) {}

        showAllValue() {
          this.totalPlayed.string = cc.gb.user.totalPlayed;
          this.entryLevel.string = cc.gb.user.entireLevel;
          this.ways.string = cc.gb.user.ways;
          this.coinValue.string = cc.gb.user.coinValue;
        }

        showPanel() {
          this.node.active = true;
        }

        hidePanel() {
          this.node.active = false;
        }

        onChangeTotalPlayed(offset) {
          cc.gb.user.totalPlayed -= -offset;
          console.log(cc.gb.user.totalPlayed);
          this.showAllValue();
        }

        onChangeEntryLevel(offset) {
          cc.gb.user.entireLevel -= -offset;
          this.showAllValue();
        }

        onChangeWays(offset) {
          cc.gb.user.ways -= -offset;
          this.showAllValue();
        }

        onChangeCoinValue(offset) {
          cc.gb.user.coinValue -= -offset;
          this.showAllValue();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "totalPlayed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "entryLevel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ways", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "coinValue", [_dec5], {
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
//# sourceMappingURL=8f50c39ecf226b0a8fdf7ccfc8cbfb9bac5bb530.js.map