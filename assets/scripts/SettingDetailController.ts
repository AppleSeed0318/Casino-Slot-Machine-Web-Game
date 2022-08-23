import { _decorator, Component, Node, EditBox } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SettingDetailController')
export class SettingDetailController extends Component {

	
	@property({type: EditBox})
 	public totalPlayed: EditBox|null = null;

 	@property({type: EditBox})
 	public entryLevel: EditBox|null = null;

 	@property({type: EditBox})
 	public ways: EditBox|null = null;

 	@property({type: EditBox})
 	public coinValue: EditBox|null = null;


    start() {
        this.showAllValue();
    }

    update(deltaTime: number) {
        this.showAllValue();
    }

    showAllValue() {
        this.totalPlayed.string = cc.gb.gameEnv.totalPlayedPattern[cc.gb.user.totalPlayed];
        this.entryLevel.string = cc.gb.user.entireLevel;
        this.ways.string = cc.gb.user.ways;
        this.coinValue.string = cc.gb.user.coinValue;
    }

    showPanel() {
        this.node.active = true;
    }

    hidePanel() {
        this.node.active = false;
    }

    onChangeTotalPlayed(evt) {
        var offset:Number = 1;
        if(evt.currentTarget._name == 'minus') offset = -1;

        var offset:Number = 1;
        if(evt.currentTarget._name == 'btn-minus') offset = -1;

        var length = cc.gb.gameEnv.totalPlayedPattern.length;
        cc.gb.user.totalPlayed += offset + length;
        cc.gb.user.totalPlayed %= length;
    }

    onChangeEntryLevel(evt) {
        var offset:Number = 1;
        if(evt.currentTarget._name == 'minus') offset = -1;

        cc.gb.user.entireLevel += offset;
    }

    onChangeWays(evt) {
        var offset:Number = 1;
        if(evt.currentTarget._name == 'minus') offset = -1;

        cc.gb.user.ways += offset;
    }

    onChangeCoinValue(evt) {
        var offset:Number = 1;
        if(evt.currentTarget._name == 'minus') offset = -1;

        cc.gb.user.coinValue += offset;
    }
}

