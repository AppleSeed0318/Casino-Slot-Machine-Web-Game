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
          this.showAllValue();
        }

        update(deltaTime) {
          this.showAllValue();
        }

        showAllValue() {
          this.totalPlayed.string = cc.gb.gameEnv.totalPlayedPattern[cc.gb.user.totalPlayed];
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

        onChangeTotalPlayed(evt) {
          var offset = 1;
          if (evt.currentTarget._name == 'minus') offset = -1;
          cc.gb.user.totalPlayed += offset;
        }

        onChangeEntryLevel(evt) {
          var offset = 1;
          if (evt.currentTarget._name == 'minus') offset = -1;
          cc.gb.user.entireLevel += offset;
        }

        onChangeWays(evt) {
          var offset = 1;
          if (evt.currentTarget._name == 'minus') offset = -1;
          cc.gb.user.ways += offset;
        }

        onChangeCoinValue(evt) {
          var offset = 1;
          if (evt.currentTarget._name == 'minus') offset = -1;
          cc.gb.user.coinValue += offset;
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
//# sourceMappingURL=a6fd57ced2aa90973ffca1e219101d22061066a9.js.map