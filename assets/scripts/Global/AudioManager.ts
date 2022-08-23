import { _decorator, Component, Node } from 'cc';
import { AudioClip, AudioSource, assert, warn, clamp01, resources } from "cc";
const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export class AudioManager  extends Component {

    private static _instance: AudioManager;
    private static _audioSource?: AudioSource;

 	init (audioSource: AudioSource) {
        AudioManager._audioSource = audioSource;
    }

    public static get instance () {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new AudioManager();
        return this._instance;
    }

    playMusic (loop: boolean) {

        this._audioSource.loop = loop;
        if (!this._audioSource.playing) {
            this._audioSource.playing();
        }
    }

    playSound (clip, volumeScale: number = 1 ) {

        this._audioSource.playOneShot(clip, volumeScale);
    }

    setMusicVolume (flag: number) {

        flag = clamp01(flag);
        this._audioSource.volume = flag;
    }

}