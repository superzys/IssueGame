class Dg_RightAnswer extends eui.Component {
	public constructor(cpData: ChapterData, plotData: PlotData, fun: Function, tar: eui.Component) {
		super();
		this.plotData = plotData;
		this.cpData = cpData;
		this.GetGoldNum = plotData.RewardGoldNum;
		this.CallFun = fun;
		this.funtar = tar;
		this.name = "Dg_RightAnswer";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Dialog/Dg_RightAnswer.exml";
	}

	private uiCompHandler(): void {
		UICenter.getInstance().LocFitPage(this);
		this.isDone = false;

		this.Lab_Gold.text = "+" + this.GetGoldNum;


		this.Btn_Continue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickLockTip, this);
	}

	private GetGoldNum: number;
	private plotData: PlotData;
	private cpData: ChapterData;
	private CallFun: Function;
	private funtar: eui.Component;
	protected isDone: boolean;
	private Btn_Continue: eui.Button;
	private Lab_Gold: eui.Label;

	protected createChildren(): void {
		super.createChildren();

	}
	Btn_ClickLockTip() {
		if (!this.isDone) {
			this.isDone = true;

			this.Deal_SendReqGainPlog();
		}
	}
	async Deal_SendReqGainPlog() {
		let GainRewardReq: WxGainPlotRewardReqNet = new WxGainPlotRewardReqNet();
		GainRewardReq.SessonId = UserManger.getInstance().userInfoObj.UserGameInfo.SessonId;
		GainRewardReq.PlotId = this.plotData._id + "";
		GainRewardReq.ChapterId = this.cpData._id + "";
		let Msg = JSON.stringify(GainRewardReq);
		var getData = await HttpFetch.getInstance().HttpPost("GainPlotReward", Msg);

		if (getData != undefined) {
			var ResObj = JSON.parse(getData);
			if (ResObj.msg != undefined) {
				var gainPlotObj = JSON.parse(ResObj.msg);
				if (gainPlotObj.error != undefined) {
					console.log("通关错误" + gainPlotObj.error);
				} else {

					UserManger.getInstance().userInfoObj.UserGameInfo.Gold = (gainPlotObj as WxGainPlotRewardResNet).UserGoldNum;
					UICenter.getInstance().RemoveOnePage("Dg_RightAnswer");
					if (this.CallFun != undefined) {
						this.CallFun.call(this.funtar);
					}
					return;
				}
			}
		}
	}
}