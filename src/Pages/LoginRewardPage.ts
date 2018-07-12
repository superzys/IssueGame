class LoginRewardPage extends eui.Component {
	constructor() {
		super();
		// this.Cstage = cStage;
		this.name = "LoginRewardPage";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/LoginRewardPage.exml";
	}

	private uiCompHandler(): void {
		console.log("\t\tGoodsUI uiCompHandler");
		UICenter.getInstance().LocFitPage(this);

		this.Btn_GainReward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// this.verticalCenter
		var dsListHeros: Array<Object> = UserManger.getInstance().userInfoObj.GetLoginReward();


		this.List_Reward.dataProvider = new eui.ArrayCollection(dsListHeros);
        this.List_Reward.itemRenderer = CmpDayReward;
		// let stageW = this.Cstage.stageWidth;
		// let stageH = this.Cstage.stageHeight;
		// let oldW = this.width;
		// let oldH = this.height;
		// this.width = stageW;
		// this.height = stageH;

		// for (let i = 0; i < this.numChildren; i++) {
		// 	let child: egret.DisplayObject = this.getChildAt(i);
		// 	if (child.x > 0) {
		// 		child.x = child.x / oldW * this.width;
		// 	}
		// 	if (child.y > 0) {
		// 		child.y = child.y / oldH * this.height;
		// 	}
		// }
	}

	// private Cstage: egret.Stage;
	private Btn_GainReward: eui.Button;
	private List_Reward: eui.List;
	protected createChildren(): void {
		super.createChildren();

	}

	onButtonClick(): void {
		this.SendMsgToServer();
	}
	async SendMsgToServer() {
		let reqNet: WxLoginRewardReqNet = new WxLoginRewardReqNet();

		reqNet.SessonId = UserManger.getInstance().userInfoObj.UserGameInfo.SessonId;
		let Msg = JSON.stringify(reqNet);
		var getData = await HttpFetch.getInstance().HttpPost("GainLoginReward", Msg);
		if (getData != undefined) {
			var resNet = JSON.parse(getData);
			if (resNet.msg != undefined) {
				var resNetObj = JSON.parse(resNet.msg);
				UserManger.getInstance().userInfoObj.UserGameInfo.RemainSignNumToday--;
				UserManger.getInstance().userInfoObj.UserGameInfo.SignedNum++;
				UserManger.getInstance().userInfoObj.UserGameInfo.Gold = resNetObj.UserGoldNum;
			}
		}
		//关闭本界面
		UICenter.getInstance().RemoveOnePage("LoginRewardPage");
	}
}
