System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, LogoController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "268a195vKZLUK8ubg00CtiX", "LogoController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LogoController", LogoController = (_dec = ccclass('LogoController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class LogoController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "effect", _descriptor, this);

          _initializerDefineProperty(this, "axeLeft", _descriptor2, this);

          _initializerDefineProperty(this, "axeRight", _descriptor3, this);
        }

        start() {
          this.showEffect();
          this.showAxeAnim();
        }

        update(deltaTime) {}

        showPanel() {
          this.node.active = true;
        }

        hidePanel() {
          this.node.active = false;
        }

        showEffect() {
          cc.tween(this.effect).repeatForever(cc.tween().delay(3).to(1, {
            position: cc.v3(-270, 0, 0)
          }).to(1, {
            position: cc.v3(270, 0, 0)
          }).to(0, {
            position: cc.v3(-270, 0, 0)
          }).delay(2)).start();
        }

        showAxeAnim() {
          cc.tween(this.axeLeft).delay(8).to(0, {
            angle: -20
          }).to(0.2, {
            angle: 20
          }).to(0.2, {
            angle: -20
          }).to(0.2, {
            angle: 20
          }).to(0.2, {
            angle: -20
          }).to(0.2, {
            angle: 20
          }).to(0.2, {
            angle: -20
          }).to(0.2, {
            angle: 20
          }).to(0.2, {
            angle: -20
          }).to(0.1, {
            angle: 0
          }).start();
          cc.tween(this.axeRight).delay(8).to(0, {
            angle: 20
          }).to(0.2, {
            angle: -20
          }).to(0.2, {
            angle: 20
          }).to(0.2, {
            angle: -20
          }).to(0.2, {
            angle: 20
          }).to(0.2, {
            angle: -20
          }).to(0.2, {
            angle: 20
          }).to(0.2, {
            angle: -20
          }).to(0.2, {
            angle: 20
          }).to(0.1, {
            angle: 0
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "effect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "axeLeft", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "axeRight", [_dec4], {
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
//# sourceMappingURL=d78c03817fefb75786e751bb2433ae1bda14bcf8.js.map