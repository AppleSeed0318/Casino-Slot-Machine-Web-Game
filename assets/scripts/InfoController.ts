import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('InfoController')
export class InfoController extends Component {

	@property({type: Node})
 	public infoPage: Node[] = [];

 	@property currentPage: Number = 0;



    start() {

    }

    update(deltaTime: number) {
        
    }

    showPanel() {
        this.node.active = true;
    }

    hidePanel() {
        this.node.active = false;
    }

    nextInfo() {
    	this.currentPage ++;
    	this.currentPage %= this.infoPage.length;
    	this.showActivePage();
    }

    prevInfo() {
    	this.currentPage = (this.currentPage + this.infoPage.length - 1) % this.infoPage.length;
    	this.showActivePage();
    }

    showActivePage() {

		for (var i = 0; i < this.infoPage.length; i ++) {
    		this.infoPage[i].active = false;
    	}

    	this.infoPage[this.currentPage].active = true;
    }

}

