import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('settingController')
export class settingController extends Component {


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

    onClickBack() {
        this.hidePanel();
    }
}

