import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerStatusController')
export class PlayerStatusController extends Component {

	@property({type: Label})
 	public totalPlayed: Label|null = null;

    start() {

    }

    update(deltaTime: number) {
        this.totalPlayed.string = cc.gb.gameEnv.totalPlayedPattern[cc.gb.user.totalPlayed];
    }

    onChangeTotalPlayed(evt) {
        var offset:Number = 1;
        if(evt.currentTarget._name == 'btn-minus') offset = -1;

        var length = cc.gb.gameEnv.totalPlayedPattern.length;
        cc.gb.user.totalPlayed += offset + length;
        cc.gb.user.totalPlayed %= length;

    }
}

