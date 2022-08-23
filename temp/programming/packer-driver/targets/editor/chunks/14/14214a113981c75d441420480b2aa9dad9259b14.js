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

          this._firstDelay = 0;
          this._count = 0;
          this._finished = 0;
          this._speed = 0.05;
          this._playing = false;
        }

        onLoad() {}

        start() {
          var posA = this.node.children[0].position.y;
          var posB = this.node.children[1].position.y;
          this.node.children[0].position.y = posB;
          this.node.children[1].position.y = posA;
        }

        setStartDelay(delay) {
          this._firstDelay = delay;
        }

        setCount(count) {
          this._count = count;
        }

        onRunEvent() {
          console.log(this._playing);

          if (this._playing) {
            return;
          }

          this._playing = true;
          this.moveNextStatus();
        }

        getPlaying() {
          return this._playing;
        }

        moveNextStatus() {
          this._finished = 0;
          var len = this.node.children.length;
          var self = this;

          for (var i = 0; i < len; i++) {
            var pos = this.node.children[i].position;
            cc.tween(this.node.children[i]).delay(this._firstDelay).to(this._speed, {
              position: cc.v3(0, pos.y - 76, 0)
            }).call(() => {
              self.movingFinished();
            }).start();
          }

          this._firstDelay = 0;
        }

        movingFinished() {
          this._finished++;
          var len = this.node.children.length;
          if (this._finished < len) return;

          for (var i = 0; i < len; i++) {
            var pos = this.node.children[i].position; //console.log (pos);

            if (pos.y < -10) this.node.children[i].setPosition(cc.v3(0, len * 76 - 76, 0));
          }

          for (var i = 0; i < len; i++) {//console.log('---------');
            //console.log (this.node.children[i].position);
          }

          this._count--;
          if (this._count > 0) this.moveNextStatus();else this.rollingFinished();
        }

        rollingFinished() {
          var len = this.node.children.length;

          for (var i = 0; i < len; i++) {
            var anim = this.node.children[i].getComponent(cc.Animation);
            if (anim != null) anim.play();
          }

          this._playing = false;
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
//# sourceMappingURL=14214a113981c75d441420480b2aa9dad9259b14.js.map