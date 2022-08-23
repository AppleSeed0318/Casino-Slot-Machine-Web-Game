import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreController')
export class ScoreController extends Component {

	@property({type: Label})
 	public grand: Label|null = null;

 	@property({type: Label})
 	public major: Label|null = null;

 	@property({type: Label})
 	public minor: Label|null = null;

 	@property({type: Label})
 	public mini: Label|null = null;

    start() {

    }

    update(deltaTime: number) {
        this.showScore();
    }	

    showScore(){

    	var pattern = cc.gb.gameEnv.totalPlayedPattern;
        this.grand.string = pattern[cc.gb.user.totalPlayed]*1000;
        this.major.string = pattern[cc.gb.user.totalPlayed]*250;
        this.minor.string = pattern[cc.gb.user.totalPlayed]*50;
        this.mini.string = pattern[cc.gb.user.totalPlayed]*10;
    }	
    
}

