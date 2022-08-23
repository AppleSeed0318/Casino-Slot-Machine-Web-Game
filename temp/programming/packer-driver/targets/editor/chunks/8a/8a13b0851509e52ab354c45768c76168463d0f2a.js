System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, InfoController;

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

      _cclegacy._RF.push({}, "1d19bCWA/pKdZB9ygV17xeT", "InfoController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InfoController", InfoController = (_dec = ccclass('InfoController'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = class InfoController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "infoPage", _descriptor, this);

          this.currentPage = 1;
        }

        start() {}

        update(deltaTime) {}

        nextInfo() {
          currentPage++;
          currentPage %= this.infoPage.length;
          this.showActivePage();
        }

        prevInfo() {
          currentPage = (currentPage + this.infoPage.length - 1) % this.infoPage.length;
          this.showActivePage();
        }

        showActivePage() {
          for (var i = 0; i < this.infoPage.length; i++) {
            this.infoPage[i].active = false;
          }

          this.infoPage[currentPage].active = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "infoPage", [_dec2], {
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
//# sourceMappingURL=8a13b0851509e52ab354c45768c76168463d0f2a.js.map