/**
 * 游戏界面
 */
class GamePage extends eui.Component {
	constructor(cData: ChapterData) {
		super();
		this.data = cData;
		this.name = "GamePage";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/GamePage.exml";
	}
	private uiCompHandler(): void {
		UICenter.getInstance().LocFitPage(this);
		console.log("\t\tGamePage show ");

		this.ShowGameData();
		this.Btn_Tip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ShowTip, this);
		this.Btn_ShareTIp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ShareGame, this);
		this.Btn_ReStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ReStart, this);
	}
	private Btn_Tip: eui.Button;
	private Btn_ShareTIp: eui.Button;
	private Btn_ReStart: eui.Button;
	private List_Talks: eui.List;

	protected createChildren(): void {
		super.createChildren();

	}

	private data: ChapterData;
	//当前章节的所有关卡
	private AllPlotsObj: AllPlots;
	//当前打第几关
	private CurPlotIndex: number;
	private CurPlot: PlotData;
	/**
	 * 显示本章节内容;
	 */
	ShowGameData(): void {
		if (this.data != undefined) {
			this.AllPlotsObj = UserManger.getInstance().GetAllPlotObjInChapter(this.data._id);
			let UserGameInfo: LoginResNet = UserManger.getInstance().userInfoObj.UserGameInfo;
			let curCpAllPlotArr: AllPlots = UserManger.getInstance().GetAllPlotObjInChapter(this.data._id);
			this.CurPlotIndex = 0;
			if (UserGameInfo.ChapterId == this.data._id) {//是当前关节的话 要记录玩家进度
				let curPlotId: number = parseInt(UserGameInfo.PlotId);
				for (let i = 0; i < curCpAllPlotArr.All.length; i++) {
					if (curCpAllPlotArr.All[i]._id == curPlotId) {
						this.CurPlotIndex = i;
						break;
					}
				}
			} else {

			}
			this.CurPlot = this.AllPlotsObj[this.CurPlotIndex];
			this.ShowTalkContent();
		}
	}
	ShowTalkContent(): void {
		// this.data.
		var dsListHeros: Array<Object> = this.CurPlot.DialogsArr;

		this.List_Talks.dataProvider = new eui.ArrayCollection(dsListHeros);
		this.List_Talks.itemRenderer = CmpOneTalk;
	}
	BtnClick_ShowTip(): void {

	}
	BtnClick_ShareGame(): void {

	}
	BtnClick_ReStart(): void {

	}
}
