class UserManger {
	public constructor() {
	}
	private static instance: UserManger;
	public static getInstance(): UserManger {
		if (this.instance == null) {
			this.instance = new UserManger();
		}
		return this.instance;
	}
	public userInfoObj: UserInfo = new UserInfo();
	//存储每个章节关卡对象。
	public AllCpPlotArr: AllPlots[] = [];
	public AllPlotArr: PlotData[] = [];
	public AllChaptersInfo: AlLChapters;
	public allPlotObj: AllPlots;
	// var param
	public SetUserInfo(userObj): void {
		this.userInfoObj.WxUserInfo = userObj;

	}
	public SetUserGameInfo(userObj): void {
		//存下userID
		egret.localStorage.setItem("WxIssue_UserId", userObj.UserId);
		this.userInfoObj.UserGameInfo = userObj;

	}
	public InitPlotData(): void {
		this.allPlotObj = RES.getRes("IssueData_json");
		this.AllChaptersInfo = RES.getRes("ChapterData_json");

		for (let i = 0; i < this.allPlotObj.All.length; i++) {

			let onePlot: PlotData = this.allPlotObj.All[i];
			this.AllPlotArr[onePlot._id] = onePlot;
		}
		for (let i = 0; i < this.AllChaptersInfo.All.length; i++) {
			if (this.AllCpPlotArr[i] == undefined) {
				this.AllCpPlotArr[i] = new AllPlots();
				this.AllCpPlotArr[i]._id = i;
				this.AllCpPlotArr[i].All = [];
			}
			let curChapter: AllPlots = this.AllCpPlotArr[i];
			let OneChapter: ChapterData = this.AllChaptersInfo.All[i];
			for (let j = 0; j < OneChapter.PlotIDArr.length; j++) {
				curChapter.All.push(this.AllPlotArr[OneChapter.PlotIDArr[j]]);
			}
		}
	}
	public GetAllPlotObjInChapter(chapterId: number): AllPlots {
		if (this.AllCpPlotArr[chapterId] != undefined) {
			return this.AllCpPlotArr[chapterId];
		}
		return undefined;
	}
	public GetChapterData(chapterId: number): ChapterData {
		if (this.AllChaptersInfo.All[chapterId] != undefined) {
			return this.AllChaptersInfo.All[chapterId];
		}
		return undefined;
	}
	public IsLastChapter(): boolean {
		if ((this.userInfoObj.UserGameInfo.ChapterId + 1) >= this.AllCpPlotArr.length) {//没关卡了
			return true;
		}
		return false;
	}
	public GetNextChapter(): AllPlots {
		if ((this.userInfoObj.UserGameInfo.ChapterId + 1) >= this.AllCpPlotArr.length) {//没关卡了
			return undefined;
		}
		this.userInfoObj.UserGameInfo.ChapterId++;
		let curChapter: AllPlots = this.AllCpPlotArr[this.userInfoObj.UserGameInfo.ChapterId];
		return curChapter;
	}

}