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
	private Lab_Gold: eui.Label;
	private Gp_Choosed: eui.Group;
	private Gp_Show: eui.Group;
	protected createChildren(): void {
		super.createChildren();

	}

	private data: ChapterData;
	//当前章节的所有关卡
	private AllPlotsObj: AllPlots;
	//当前打第几关
	private CurPlotIndex: number;
	private CurPlot: PlotData;

	private allFontArr: string[];

	private ChoosedCmpArr: Cmp.CmpChooseFontBox[];
	private AllShowFontCmpArr: Cmp.CmpShowFontBox[];
	/**
	 * 显示本章节内容;
	 */
	ShowGameData(): void {
		this.ChoosedCmpArr = [];
		this.AllShowFontCmpArr = [];
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
			this.CurPlot = this.AllPlotsObj.All[this.CurPlotIndex];
			this.StartShowUI();
		}
	}
	StartShowUI(): void {

		this.Lab_Gold.text = UserManger.getInstance().userInfoObj.UserGameInfo.Gold + "";
		this.ShowTalkContent();
		this.AddShowChooseAnswers();
		this.AddAllOptinsFontCmp();
	}
	ShowTalkContent(): void {
		// this.data.
		var dsListHeros: Array<Object> = this.CurPlot.DialogsArr;

		this.List_Talks.dataProvider = new eui.ArrayCollection(dsListHeros);
		this.List_Talks.itemRenderer = CmpOneTalk;
	}

	/**
	 * 添加显示选择答案的组件;
	 */
	AddShowChooseAnswers(): void {
		while (this.Gp_Choosed.numChildren > 0) {
			this.Gp_Choosed.removeChildAt(0);
		}
		this.ChoosedCmpArr = [];
		for (let i = 0; i < this.CurPlot.RightAnsArr.length; i++) {
			let oneCmp = new Cmp.CmpChooseFontBox();
			this.Gp_Choosed.addChild(oneCmp);
			oneCmp.InitCmp(i, this.ChooseFontCmpClick, this);
			this.ChoosedCmpArr.push(oneCmp);
		}
	}
	AddAllOptinsFontCmp(): void {
		while (this.Gp_Show.numChildren > 0) {
			this.Gp_Show.removeChildAt(0);
		}
		this.AllShowFontCmpArr = [];
		this.allFontArr = [];

		let WrongAnsArr: string[] = this.CurPlot.WrongAnsArr.concat();
		let MorNum: number = this.CurPlot.OptionNum - this.CurPlot.RightAnsArr.length - this.CurPlot.WrongAnsArr.length;

		if (MorNum > 0) {
			while (MorNum > 0) {
				WrongAnsArr.shift();
				MorNum--;
			}
		}
		this.allFontArr = this.CurPlot.RightAnsArr.concat(WrongAnsArr);
		this.allFontArr.sort(function () {
			return 0.5 - Math.random();
		});
		let optNum = Math.min(this.allFontArr.length, this.CurPlot.OptionNum);
		for (let i = 0; i < optNum; i++) {
			let oneCmp = new Cmp.CmpShowFontBox();
			this.Gp_Show.addChild(oneCmp);
			oneCmp.SetFont(i, this.allFontArr[i], this.ShowFontCmpClick, this);
			this.AllShowFontCmpArr.push(oneCmp);
		}
	}
	ShowFontCmpClick(idx: number): void {
		console.log("click " + idx);
		let oneCmp = this.AllShowFontCmpArr[idx];
		let str: string = this.allFontArr[idx];
		oneCmp.IsChoosed(true);
		for (let i = 0; i < this.ChoosedCmpArr.length; i++) {
			let chsdCmp = this.ChoosedCmpArr[i];
			if (chsdCmp.IsEmpty()) {
				chsdCmp.SetFont(str, idx);
				break;
			}
		}
		this.CheckIsWin();
	}
	/**
	 * 把选中的点取消掉 
	 * 还回去 下面的显示列表;
	 */
	ChooseFontCmpClick(idx: number, chooseIdx: number): void {

		let oneCmp = this.ChoosedCmpArr[idx];
		oneCmp.SetFont("");
		let showCmp = this.AllShowFontCmpArr[chooseIdx];
		showCmp.IsChoosed(false);
	}

	CheckIsWin(): void {
		let isHasWrong: boolean = false;
		for (let i = 0; i < this.ChoosedCmpArr.length; i++) {
			let chsdCmp = this.ChoosedCmpArr[i];
			if (chsdCmp.IsEmpty()) {
				return;
			}
			if (this.CurPlot.RightAnsArr[i] != chsdCmp.GetCurFont()) {
				isHasWrong = true;
			}
		}
		//到这里基本就是 全都有答案了
		let group: eui.Component = undefined;
		if (isHasWrong) {
			group = new Dg_WrongAnswer(this.Deal_RestartThisPlot, this);
		} else {
			//判断后面还有关卡吗
			if ((this.CurPlotIndex + 1) >= this.AllPlotsObj.All.length) {//通关
				group = new Dg_ChapterDone(this.data, this.CurPlot, this.Deal_NextChapter, this);
			} else {

				let isPassed = UserManger.getInstance().IsPassedThePlot(this.data._id, this.CurPlot._id);
				if (isPassed) {
					this.Deal_ContinuePlot();
					return;
				}
				//如果是第一次破关的话
				group = new Dg_RightAnswer(this.data, this.CurPlot, this.Deal_ContinuePlot, this);
			}
		}

		UICenter.getInstance().AddOnePage(group);
	}
	/**
	 * 点击提示的话。 扣钱判断
	 */
	BtnClick_ShowTip(): void {
		if (UserManger.getInstance().userInfoObj.UserGameInfo.Gold >= this.CurPlot.TipCostGold) {//钱够
			this.Deal_SendReqCostTip();//不等服务器返回直接  进行提示

			let getIndex: number = Math.floor((0.5 + Math.random()) * (this.CurPlot.RightAnsArr.length-1));
			let tipStr: string = this.CurPlot.RightAnsArr[getIndex];
			let chsdCmp = this.ChoosedCmpArr[getIndex];
			//找到这个答案的位置
			for (let i = 0; i < this.AllShowFontCmpArr.length; i++) {
				let showCmp = this.AllShowFontCmpArr[i];
				if (showCmp.GetCurFont() == tipStr) {
					//是这个的话
					chsdCmp.SetFont(tipStr, i);
					showCmp.IsChoosed(true);
					break;
				}
			}
			 UserManger.getInstance().userInfoObj.UserGameInfo.Gold -= this.CurPlot.TipCostGold;
			this.Lab_Gold.text = UserManger.getInstance().userInfoObj.UserGameInfo.Gold + "";
		} else {
			console.log("钱不够");
		}
	}
	async Deal_SendReqCostTip() {

	}
	BtnClick_ShareGame(): void {

	}
	BtnClick_ReStart(): void {
		this.Deal_RestartThisPlot();
	}
	Deal_RestartThisPlot() {
		for (let i = 0; i < this.ChoosedCmpArr.length; i++) {
			let chsdCmp = this.ChoosedCmpArr[i];
			chsdCmp.SetFont("");
		}
		for (let i = 0; i < this.AllShowFontCmpArr.length; i++) {
			let showCmp = this.AllShowFontCmpArr[i];
			showCmp.IsChoosed(false);
		}
	}
	Deal_ContinuePlot() {

		this.CurPlotIndex++;
		this.CurPlot = this.AllPlotsObj.All[this.CurPlotIndex];
		console.log("下一关" +this.CurPlotIndex + "plot id " + this.CurPlot._id);
		this.StartShowUI();
	}
	Deal_NextChapter(): void {

		this.AllPlotsObj = UserManger.getInstance().GetNextChapter(this.data._id);
		if (this.AllPlotsObj != undefined) {
			this.CurPlotIndex = 0;
			this.CurPlot = this.AllPlotsObj.All[this.CurPlotIndex];
			this.data = UserManger.getInstance().GetChapterData(this.AllPlotsObj._id);

			console.log("下一章节" +this.CurPlotIndex + "plot id " + this.CurPlot._id);
			this.StartShowUI();
		}
	}

}
