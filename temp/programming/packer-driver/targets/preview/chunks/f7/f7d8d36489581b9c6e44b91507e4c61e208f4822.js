System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ReelController, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, ReelManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReelController(extras) {
    _reporterNs.report("ReelController", "./ReelController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      ReelController = _unresolved_2.ReelController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ff72Y4pJRCp4CBm0bI9icc", "ReelManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelManager", ReelManager = (_dec = ccclass('ReelManager'), _dec2 = property({
        type: _crd && ReelController === void 0 ? (_reportPossibleCrUseOfReelController({
          error: Error()
        }), ReelController) : ReelController
      }), _dec(_class = (_class2 = (_class3 = class ReelManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "reel", _descriptor, this);
        }

        onLoad() {
          this.Instance = this;
        }

        start() {}

        update(deltaTime) {}

        onRunReal() {
          for (var i = 0; i < this.reel.length; i++) {
            this.reel[i].setStartDelay(i * 0.1);
            this.reel[i].setCount(30);
            this.reel[i].moveNextStatus();
          }
        }

      }, _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reel", [_dec2], {
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
//# sourceMappingURL=f7d8d36489581b9c6e44b91507e4c61e208f4822.js.map