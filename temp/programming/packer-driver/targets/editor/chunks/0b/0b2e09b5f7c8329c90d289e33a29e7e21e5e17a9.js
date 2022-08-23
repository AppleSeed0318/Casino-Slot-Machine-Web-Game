System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ReelController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13d39+I52RAg5j1bd6orJFP", "ReelController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelController", ReelController = (_dec = ccclass('ReelController'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class ReelController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "stops", _descriptor, this);
        }

        start() {}

        moveNextStatus() {
          var len = this.node.childrenCount;
          var self = this;

          for (var i = 0; i < len; i++) {
            var pos = this.node.children[i].position;

            if (i == len - 1) {
              cc.tween(this.node.children[i]).to(0.1, {
                position: cc.v3(0, pos.y - 76, 0)
              }).call(() => {
                self.movingFinished();
              }).start();
            } else {
              cc.tween(this.node.children[i]).to(0.1, {
                position: cc.v3(0, pos.y - 76, 0)
              }).start();
            }
          }
        }

        movingFinished() {
          var len = this.node.childrenCount;

          for (var i = 0; i < len; i++) {
            var pos = this.node.children[i].position;
            console.log(pos);
            if (pos.y < -10) this.node.children[i].setPosition(cc.v3(0, (len - 1) * 76, 0));
          }

          this.moveNextStatus();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stops", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b2e09b5f7c8329c90d289e33a29e7e21e5e17a9.js.map