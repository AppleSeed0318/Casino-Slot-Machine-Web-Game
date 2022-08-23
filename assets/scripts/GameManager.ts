import { _decorator, Component, Node, Canvas } from 'cc';
const { ccclass, property } = _decorator;

import {settingController} from './settingController';
import {InfoController} from './InfoController';
import {SettingDetailController} from './SettingDetailController';
import {LogoController} from './LogoController';


import {loadingController} from './loadingController';

@ccclass('GameManager')
export class GameManager extends Component {

	
	@property({type: settingController})
 	public settingPanel: settingController|null = null;

 	@property({type: InfoController})
 	public infoPanel: InfoController|null = null;

    @property({type: SettingDetailController})
    public settingDetailPanel: SettingDetailController|null = null;

 	@property({type: loadingController})
 	public loadingPanel: loadingController|null = null;

    @property({type: LogoController})
    public logoPanel: LogoController|null = null;

 	@property({type: Node})
 	public btnMenu: Node|null = null;

    onLoad() {

        let _canvas = Canvas.node;
        let _rateR = 1080.0/600;
        let _rateV = window.innerHeight/window.innerWidth;
        
        console.log("winSize: rateR: "+_rateR+" rateV: "+_rateV, window.innerHeight);

    }

    start() {
    	this.loadingPanel.showPanel();
    }

    update(deltaTime: number) {
        
    }

    hideAllPanels() {
    	this.settingPanel.hidePanel();
    	this.infoPanel.hidePanel();
        this.settingDetailPanel.hidePanel();
    	this.btnMenu.active = true;
    }

    showSettingPanel() {
    	this.hideAllPanels();
    	this.settingPanel.showPanel();
    	this.btnMenu.active = false;
    }

    showSettingDetail() {
        this.hideAllPanels();
        this.settingDetailPanel.showPanel();
        this.btnMenu.active = false;
    }

    showInfoPanel() {
    	this.hideAllPanels();
    	this.infoPanel.showPanel();
    	this.btnMenu.active = false;
    }

    trunRound() {
        this.hideAllPanels();
        this.infoPanel.showPanel();
        this.btnMenu.active = false;
    }
}

