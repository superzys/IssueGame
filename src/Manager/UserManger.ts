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
		var data: AllPlots = RES.getRes("IssueData_json");
		this.AllChaptersInfo = RES.getRes("ChapterData_json");

		for (let i = 0; i < data.All.length; i++) {

			let onePlot: PlotData = data.All[i];
			this.AllPlotArr[onePlot._id] = onePlot;
		}
		for (let i = 0; i < this.AllChaptersInfo.All.length; i++) {
			if (this.AllCpPlotArr[i] == undefined) {
				this.AllCpPlotArr[i] = new AllPlots();
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

}