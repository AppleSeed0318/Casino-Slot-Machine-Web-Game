System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PlayerStatusController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "693e5ydirlEmrgqWlxr/L6H", "PlayerStatusController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerStatusController", PlayerStatusController = (_dec = ccclass('PlayerStatusController'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = class PlayerStatusController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "totalPlayed", _descriptor, this);
        }

        start() {}

        update(deltaTime) {
          this.totalPlayed.string = cc.gb.gameEnv.totalPlayedPattern[cc.gb.user.totalPlayed];
        }

        onChangeTotalPlayed(evt) {
          var offset = 1;
          if (evt.currentTarget._name == 'btn-minus') offset = -1;
          var length = cc.gb.gameEnv.totalPlayedPattern.length;
          cc.gb.user.totalPlayed += offset + length;
          cc.gb.user.totalPlayed %= length;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "totalPlayed", [_dec2], {
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
//# sourceMappingURL=71786e1f8456a22033ec5387555dce4823f2a256.js.map