System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, settingController, InfoController, SettingDetailController, LogoController, loadingController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsettingController(extras) {
    _reporterNs.report("settingController", "./settingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoController(extras) {
    _reporterNs.report("InfoController", "./InfoController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingDetailController(extras) {
    _reporterNs.report("SettingDetailController", "./SettingDetailController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogoController(extras) {
    _reporterNs.report("LogoController", "./LogoController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadingController(extras) {
    _reporterNs.report("loadingController", "./loadingController", _context.meta, extras);
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
    }, function (_unresolved_4) {
      SettingDetailController = _unresolved_4.SettingDetailController;
    }, function (_unresolved_5) {
      LogoController = _unresolved_5.LogoController;
    }, function (_unresolved_6) {
      loadingController = _unresolved_6.loadingController;
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
        type: _crd && SettingDetailController === void 0 ? (_reportPossibleCrUseOfSettingDetailController({
          error: Error()
        }), SettingDetailController) : SettingDetailController
      }), _dec5 = property({
        type: _crd && loadingController === void 0 ? (_reportPossibleCrUseOfloadingController({
          error: Error()
        }), loadingController) : loadingController
      }), _dec6 = property({
        type: _crd && LogoController === void 0 ? (_reportPossibleCrUseOfLogoController({
          error: Error()
        }), LogoController) : LogoController
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "settingPanel", _descriptor, this);

          _initializerDefineProperty(this, "infoPanel", _descriptor2, this);

          _initializerDefineProperty(this, "settingDetailPanel", _descriptor3, this);

          _initializerDefineProperty(this, "loadingPanel", _descriptor4, this);

          _initializerDefineProperty(this, "logoPanel", _descriptor5, this);

          _initializerDefineProperty(this, "btnMenu", _descriptor6, this);
        }

        onLoad() {
          console.log('screenSize', window.innerHeight, window.innerWidth);
        }

        start() {
          this.loadingPanel.showPanel();
        }

        update(deltaTime) {}

        hideAllPanels() {
          this.settingPanel.hidePanel();
          this.infoPanel.hidePanel();
          this.settingDetailPanel.hidePanel();
          this.btnMenu.active = true;
        }

        showSettingPanel() {
          this.hideAllPanels();
          this.settingPanel.showPanel();
          this.btnMenu.active = false;
        }

        showSettingDetail() {
          this.hideAllPanels();
          this.settingDetailPanel.showPanel();
          this.btnMenu.active = false;
        }

        showInfoPanel() {
          this.hideAllPanels();
          this.infoPanel.showPanel();
          this.btnMenu.active = false;
        }

        trunRound() {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "settingDetailPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "logoPanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnMenu", [_dec7], {
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
//# sourceMappingURL=46ab1fefdab26f235a7002eac165f53a51a9aff1.js.map