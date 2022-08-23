import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LogoController')
export class LogoController extends Component {

	@property({type: Node})
 	public effect: Node|null = null;

 	@property({type: Node})
 	public axeLeft: Node|null = null;

 	@property({type: Node})
 	public axeRight: Node|null = null;

    start() {
    	this.showEffect();
    	this.showAxeAnim();
    }

    update(deltaTime: number) {
        
    }

    showPanel() {
        this.node.active = true;
    }

    hidePanel() {
        this.node.active = false;
    }

    showEffect() {

        cc.tween(this.effect)
            .repeatForever(
                cc.tween()
                .delay(3)
                .to(1, { position: cc.v3(-270, 0, 0)})
                .to(1, { position: cc.v3(270, 0, 0)})
                .to(0, { position: cc.v3(-270, 0, 0)})
                .delay(2)
            ).start();
    }

    showAxeAnim() {

        cc.tween(this.axeLeft)
        	.delay(8)
            .to(0.1, { angle: -20 })
            .to(0.3, { angle: 20 })
            .to(0.3, { angle: -20 })
            .to(0.3, { angle: 20 })
            .to(0.3, { angle: -20 })
            .to(0.3, { angle: 20 })
            .to(0.3, { angle: -20 })
            .to(0.3, { angle: 20 })
            .to(0.3, { angle: -20 })
            .to(0.1, { angle: 0 })
            .start();

        cc.tween(this.axeRight)
        	.delay(8)
            .to(0.1, { angle: 20 })
            .to(0.3, { angle: -20 })
            .to(0.3, { angle: 20 })
            .to(0.3, { angle: -20 })
            .to(0.3, { angle: 20 })
            .to(0.3, { angle: -20 })
            .to(0.3, { angle: 20 })
            .to(0.3, { angle: -20 })
            .to(0.3, { angle: 20 })
            .to(0.1, { angle: 0 })
            .start();
    }
}

