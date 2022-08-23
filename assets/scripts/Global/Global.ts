import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Global')
export class Global extends Component {

	public static Instance = this;

	onLoad(){
        cc.gb = {};
        cc.gb.user = {
        	winCount: 0,
        	totalPlayed: 0,
        	entires: 0,
        	entireLevel: 0,
        	ways: 1024,
        	coinValue: 0,
        	totalWinPrice: 0,
        };

        cc.gb.gameEnv = {
        	soundStatus: true,
        	reelPattern: [
        		['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf'],
        		['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf'],
        		['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf'],
        		['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf'],
        		['9', '10', 'a', 'bonus', 'cat', 'deer', 'j', 'k', 'owl', 'q', 'rabbit', 'wild', 'wolf'],
        	],
        	totalPlayedPattern: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 300, 400, 600],
        };
    }

}

