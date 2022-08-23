import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('logoAnim')
export class logoAnim extends Component {

    start() {

    	this.showEffect();
    }

    update(deltaTime: number) {
        
    }

    showEffect() {
    	console.log('showEffect = ', this.node);
        cc.tween(this.node)
            .repeatForever(
                cc.tween()
                .delay(3)
                .to(1, { position: cc.v3(-270, 0, 0)})
                .to(1, { position: cc.v3(270, 0, 0)})
                .to(0, { position: cc.v3(-270, 0, 0)})
                .delay(2)
            ).start();
    }
}

