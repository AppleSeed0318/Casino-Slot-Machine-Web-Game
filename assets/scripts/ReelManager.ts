import { _decorator, Component, Node, AudioSource, AudioClip, assert, game } from 'cc';
const { ccclass, property } = _decorator;

import {ReelController} from './ReelController';
import {AudioManager} from './Global/AudioManager';


@ccclass('ReelManager')
export class ReelManager extends Component {

	public static Instance = null;

 	@property({type: ReelController})
	protected reel: ReelController[] = [];

    @property({type: AudioClip})
    public reelSound: AudioClip|null = null;

    _audioSource: AudioSource = null!

	onLoad() {
		this.Instance = this;

        const audioSource = this.node.getComponent(AudioSource)! ;
        assert(audioSource);
        this._audioSource = audioSource;
        

        game.addPersistRootNode(this.node);


        AudioManager.instance.init(this._audioSource);
	}

    start() {

    }

    update(deltaTime: number) {
        
    }

    onRunReal() {

        for (var i = 0; i < this.reel.length; i ++) {
            if(this.reel[i].getPlaying()) return ;
        }

        //AudioManager.instance.init(this.node.getComponent(AudioSource));

        //console.log(AudioManager.instance);


        //AudioManager.instance.playSound(this.reelSound);

        console.log(AudioManager.instance);

    	for (var i = 0; i < this.reel.length; i ++) {

            this.reel[i].setCount(10+i);
    		this.reel[i].onRunEvent();
	    }
    }
}

