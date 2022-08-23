import { _decorator, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ReelController')
export class ReelController extends Component {


    @property({type: Prefab})
    protected stops: Prefab[] = [];

    private _firstDelay: number = 0;
    private _count: number = 0;
    private _finished: number = 0;
    private _speed: number = 0.05;
    private _pump: number = 0.1;
    private _playing: bool = false;

    onLoad() {
        

    }

    start() {

        for (var i = 0; i < 1000; i ++) {

            var len = this.node.children.length;
            var a = Math.floor(Math.random() * 1000) % len;
            var b = Math.floor(Math.random() * 1000) % len;

            var posA = this.node.children[a].position.y;
            var posB = this.node.children[b].position.y;

            this.node.children[a].position.y = posB;
            this.node.children[b].position.y = posA;
        }

    }

    setStartDelay(delay) {
        this._firstDelay = delay;
    }

    setCount(count) {
        this._count = count;
    }

    onRunEvent() {
    console.log(this._playing);
        if(this._playing) {
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
        for (var i = 0; i < len; i ++) {
            var pos = this.node.children[i].position;

                if (this._count == 1) {
                    cc.tween(this.node.children[i])
                        .delay(this._firstDelay)
                        .to(this._speed, { position: cc.v3(0, pos.y-106, 0) })
                        .to(this._pump, { position: cc.v3(0, pos.y-76, 0) })
                        .call(() => {
                            self.movingFinished();
                        })
                    .start();
                } else {
                    cc.tween(this.node.children[i])
                        .delay(this._firstDelay)
                        .to(this._speed, { position: cc.v3(0, pos.y-76, 0) })
                        .call(() => {
                            self.movingFinished();
                        })
                    .start();
                }

        }

        this._firstDelay = 0;
    }

    movingFinished() {

        this._finished ++;
        var len = this.node.children.length;
        
        if (this._finished < len) return ;
        
        for (var i = 0; i < len; i ++) {
            var pos = this.node.children[i].position;
            //console.log (pos);
            if(pos.y < -10)  this.node.children[i].setPosition(cc.v3(0, len * 76 - 76, 0));
        }

        for (var i = 0; i < len; i ++) {
            //console.log('---------');
            //console.log (this.node.children[i].position);
        }

        this._count --;
        if(this._count > 0) this.moveNextStatus();
        else this.rollingFinished();
    }

    rollingFinished() {
        var len = this.node.children.length;
        for (var i = 0; i < len; i ++) {

            var anim = this.node.children[i].getComponent(cc.Animation);
            if  (anim != null) anim.play();
        }
        this._playing = false;
    }

}

