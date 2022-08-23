System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, loadingController;

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

      _cclegacy._RF.push({}, "45178gSAFlL84EJnReGghap", "loadingController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loadingController", loadingController = (_dec = ccclass('loadingController'), _dec2 = property({
        type: cc.Node
      }), _dec(_class = (_class2 = class loadingController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loadingSprite", _descriptor, this);
        }

        start() {
          console.log('showEffect = ', this.loadingSprite);
          cc.tween(this.loadingSprite).repeatForever(cc.tween().to(1, {
            position: cc.v3(100, 100, 100),
            rotation: 360
          })).start();
        }

        update(deltaTime) {}

        showEffect() {
          console.log('showEffect = ', this.node);
          cc.tween(this.node).tag(112).repeatForever(cc.tween().delay(3).to(0.3, {
            position: cc.v3(270, 0, 0)
          }).to(0, {
            position: cc.v3(-270, 0, 0)
          }).delay(2)).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingSprite", [_dec2], {
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
//# sourceMappingURL=1cb510d8ef5f8cb5d6b8bd44d567fcdd4130e18f.js.map