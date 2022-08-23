import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loadingController')
export class loadingController extends Component {

	@property({type: cc.Node})
 	public loadingSprite: cc.Node|null = null;

    start() {
    	console.log('loadingEffect = ', this.loadingSprite);
		cc.tween(this.loadingSprite)
            .repeatForever(
                cc.tween()
                .to(0, { angle: 0 })
                .to(1.5, { angle: 360 })
            ).start();



        this.scheduleOnce(function() {
		    // Here this refers to component
		    this.hidePanel();
		}, 5);
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
    	console.log('showEffect = ', this.node);
        cc.tween(this.node).tag(112)
            .repeatForever(
                cc.tween()
                .delay(3)
                .to(0.3, { position: cc.v3(270, 0, 0)})
                .to(0, { position: cc.v3(-270, 0, 0)})
                .delay(2)
            ).start();
    }
}

