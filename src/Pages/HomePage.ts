class HomePage extends eui.Component {
	constructor() {
		super();
		this.name = "HomePage";
		// this.Cstage = cStage;
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/HomePage.exml";
	}
	private uiCompHandler(): void {

		UICenter.getInstance().LocFitPage(this);

		this.Btn_StartGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_StartGame, this);
		this.Btn_Rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_OpenRank, this);
		this.Btn_MoreGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_OpenMore, this);
	}
	// private Cstage: egret.Stage;
	private Btn_Talk: eui.Button;
	private Btn_StartGame: eui.Button;
	private Btn_Rank: eui.Button;
	private Btn_MoreGame: eui.Button;

	protected createChildren(): void {
		super.createChildren();

	}

	BtnClick_StartGame(): void {
		if (UserManger.getInstance().userInfoObj.UserGameInfo != null) {
			let group: eui.Component = new ChapterPage();
			UICenter.getInstance().AddOnePage(group);
		} else {
			console.log("尚未登录");
		}
	}


	BtnClick_OpenRank(): void {
		if (UserManger.getInstance().userInfoObj.UserGameInfo != null) {
			let group: eui.Component = new RankPage();
			UICenter.getInstance().AddOnePage(group);
		} else {
			console.log("尚未登录");
		}
	}


	BtnClick_OpenMore(): void {
		if (UserManger.getInstance().userInfoObj.UserGameInfo != null) {
			let group: eui.Component = new MoreFunPage();
			UICenter.getInstance().AddOnePage(group);
		} else {
			console.log("尚未登录");
		}
	}
}