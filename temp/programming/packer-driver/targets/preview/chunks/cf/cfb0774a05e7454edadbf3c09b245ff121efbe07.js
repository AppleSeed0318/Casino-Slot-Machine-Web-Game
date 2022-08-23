System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ReelController;

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

      _cclegacy._RF.push({}, "13d39+I52RAg5j1bd6orJFP", "ReelController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelController", ReelController = (_dec = ccclass('ReelController'), _dec2 = property({
        type: Number
      }), _dec(_class = (_class2 = class ReelController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "round", _descriptor, this);
        }

        start() {
          this.trunReel(this.round, () => {
            cc.log('i finished hahaha');
          });
        }

        update(deltaTime) {}

        trunReel(round, callback) {
          console.log('start reel', this.node.children[0], this.node.children[1]);
          cc.tween(this.node.children[0]).repeat(round, cc.tween().to(0, {
            position: cc.v3(0, 912, 0)
          }).to(1, {
            position: cc.v3(0, 0, 0)
          }).to(1, {
            position: cc.v3(0, -906, 0)
          })).call(callback()).start();
          cc.tween(this.node.children[1]).repeat(round, cc.tween().to(0, {
            position: cc.v3(0, 0, 0)
          }).to(1, {
            position: cc.v3(0, -906, 0)
          }).to(0, {
            position: cc.v3(0, 912, 0)
          }).to(1, {
            position: cc.v3(0, 0, 0)
          })).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "round", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cfb0774a05e7454edadbf3c09b245ff121efbe07.js.map