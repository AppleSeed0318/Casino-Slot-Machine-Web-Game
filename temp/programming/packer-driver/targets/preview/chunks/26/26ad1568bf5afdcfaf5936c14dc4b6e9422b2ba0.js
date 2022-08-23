System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, settingController, InfoController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsettingController(extras) {
    _reporterNs.report("settingController", "./settingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoController(extras) {
    _reporterNs.report("InfoController", "./InfoController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      settingController = _unresolved_2.settingController;
    }, function (_unresolved_3) {
      InfoController = _unresolved_3.InfoController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "035c0Ewv69K+6IjOyA61uRP", "GameManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: _crd && settingController === void 0 ? (_reportPossibleCrUseOfsettingController({
          error: Error()
        }), settingController) : settingController
      }), _dec3 = property({
        type: _crd && InfoController === void 0 ? (_reportPossibleCrUseOfInfoController({
          error: Error()
        }), InfoController) : InfoController
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "settingPanel", _descriptor, this);

          _initializerDefineProperty(this, "infoPanel", _descriptor2, this);

          _initializerDefineProperty(this, "btnMenu", _descriptor3, this);
        }

        start() {}

        update(deltaTime) {}

        hideAllPanels() {
          this.settingPanel.hidePanel();
          this.infoPanel.hidePanel();
          this.btnMenu.active = true;
        }

        showSettingPanel() {
          this.hideAllPanels();
          this.settingPanel.showPanel();
          this.btnMenu.active = false;
        }

        showInfoPanel() {
          this.hideAllPanels();
          this.infoPanel.showPanel();
          this.btnMenu.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "settingPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "infoPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnMenu", [_dec4], {
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
//# sourceMappingURL=26ad1568bf5afdcfaf5936c14dc4b6e9422b2ba0.js.map