/**
 * 通关了一章节的时候 
 * 下一章节是否需要付费解锁
 */
class Dg_ChapterDone extends eui.Component {
	public constructor(cpData: ChapterData, curPlot: PlotData, fun: Function, tar: eui.Component) {
		super();
		this.cpData = cpData;
		this.curPlot = curPlot;
		this.CallFun = fun;
		this.funtar = tar;
		this.name = "Dg_ChapterDone";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Dialog/Dg_ChapterDone.exml";
	}

	private uiCompHandler(): void {
		UICenter.getInstance().LocFitPage(this);
		this.isDone = false;

		let isLockNext = UserManger.getInstance().IsLockNextChapter(this.cpData._id);
		this.NexChapterState = isLockNext;
		this.Btn_JumpChapter.visible = isLockNext <= 1;
		this.Btn_Share_InGame.visible = isLockNext > 1;
		this.Btn_Return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickReturn, this);
		this.Btn_Share_InGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickShare, this);
		this.Btn_JumpChapter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickNextChapter, this);
	}
	private cpData: ChapterData;
	private curPlot: PlotData;
	private CallFun: Function;
	private funtar: eui.Component;
	protected isDone: boolean;
	private NexChapterState: number;

	private Btn_Share_InGame: eui.Button;
	private Btn_JumpChapter: eui.Button;
	private Btn_Return: eui.Button;


	protected createChildren(): void {
		super.createChildren();

	}
	Btn_ClickShare(): void {
		if (!this.isDone) {
			this.isDone = true;

			UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
			if (this.CallFun != undefined) {
				this.CallFun.call(this.funtar);
			}

		}
	}

	Btn_ClickReturn(): void {
		if (!this.isDone) {
			this.isDone = true;

			UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
			UICenter.getInstance().RemoveOnePage("GamePage");

		}
	}

	Btn_ClickNextChapter() {
		if (!this.isDone) {
			this.isDone = true;

			this.Deal_SendReqNextStep();

		}
	}
	async Deal_SendReqNextStep() {
		if (this.NexChapterState == 1) {

			let unlockChapterReq: WxGainChapterRewardReqNet = new WxGainChapterRewardReqNet();
			unlockChapterReq.SessonId = UserManger.getInstance().userInfoObj.UserGameInfo.SessonId;
			unlockChapterReq.PlotId = this.curPlot._id + "";
			unlockChapterReq.ChapterId = this.cpData._id + "";
			let Msg = JSON.stringify(unlockChapterReq);
			var getData = await HttpFetch.getInstance().HttpPost("GainChapterReward", Msg);


			if (getData != undefined) {
				var ResObj = JSON.parse(getData);
				if (ResObj.msg != undefined) {
					var gainPlotObj = JSON.parse(ResObj.msg);
					if (gainPlotObj.error != undefined) {
						console.log("通关错误" + gainPlotObj.error);
					} else {
						let obj: WxGainChapterRewardResNet = gainPlotObj;
						UserManger.getInstance().userInfoObj.UserGameInfo.Gold = obj.UserGoldNum;
						if (obj.IsSuccess) {
							UserManger.getInstance().userInfoObj.UserGameInfo.ChapterId++;
							UserManger.getInstance().userInfoObj.UserGameInfo.PlotId = obj.PlotId;
						}
						UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
						if (this.CallFun != undefined) {
							this.CallFun.call(this.funtar);
						}
						return;
					}
				}
			}


		} else if (this.NexChapterState == 0) {//通关过
			UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
			if (this.CallFun != undefined) {
				this.CallFun.call(this.funtar);
			}
		}
		else { //需要 充值 分享啥的

		}
	}


}