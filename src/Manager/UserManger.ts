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

			let OneChapter: ChapterData = this.AllChaptersInfo.All[i];
			if (this.AllCpPlotArr[i] == undefined) {
				this.AllCpPlotArr[i] = new AllPlots();
				this.AllCpPlotArr[i]._id = OneChapter._id;
				this.AllCpPlotArr[i].All = [];
			}
			let curChapter: AllPlots = this.AllCpPlotArr[i];
			for (let j = 0; j < OneChapter.PlotIDArr.length; j++) {
				curChapter.All.push(this.AllPlotArr[OneChapter.PlotIDArr[j]]);
			}
		}
	}
	public GetAllPlotObjInChapter(chapterId: number): AllPlots {
		if (this.AllCpPlotArr[chapterId-1] != undefined) {
			return this.AllCpPlotArr[chapterId-1];
		}
		return undefined;
	}
	public GetChapterData(chapterId: number): ChapterData {
		if (this.AllChaptersInfo.All[chapterId-1] != undefined) {
			return this.AllChaptersInfo.All[chapterId-1];
		}
		return undefined;
	}
	public IsLastChapter(): boolean {
		if ((this.userInfoObj.UserGameInfo.ChapterId + 1) >= this.AllCpPlotArr.length) {//没关卡了
			return true;
		}
		return false;
	}
	public IsLockNextChapter(curChapterId: number): number {
		// if (curChapterId < this.userInfoObj.UserGameInfo.ChapterId)//已经打过这个章节了
		// {
		// 	return false;
		// }
		if (this.AllChaptersInfo.All.length > (curChapterId + 1)) {
			let nextChapter = this.AllChaptersInfo.All[curChapterId + 0];
			if (nextChapter != undefined && nextChapter._id > this.userInfoObj.UserGameInfo.ChapterId) {
				if (nextChapter.ChargeNum > 0) {//需要充值的
					return 2;
				}
				return 1;
			}
		}
		return 0;
	}

	public IsPassedThePlot(curChapterId: number, curPlotId: number): boolean {
		if (this.userInfoObj.UserGameInfo.PassedPlotIdArr.indexOf(parseInt(curPlotId+"")) >= 0) {
			return true;
		}
		// if (curChapterId < this.userInfoObj.UserGameInfo.ChapterId)//已经打过这个章节了
		// {
		// 	return true;
		// } else if (curChapterId == this.userInfoObj.UserGameInfo.ChapterId) {//本章节 已经打到后面了
		// 	let curPlotIndex = this.AllChaptersInfo.All[curChapterId].PlotIDArr.indexOf(curPlotId);
		// 	let userPlotId: number = parseInt(this.userInfoObj.UserGameInfo.PlotId);
		// 	let userPlotIndex = this.AllChaptersInfo.All[curChapterId].PlotIDArr.indexOf(userPlotId);
		// 	if (curPlotIndex < userPlotIndex) {
		// 		return true;
		// 	}

		// }
		return false;
	}
	public GetNextChapter(curChapterId: number): AllPlots {
		if ((curChapterId + 1) >= this.AllCpPlotArr.length) {//没关卡了
			return undefined;
		}
		// this.userInfoObj.UserGameInfo.ChapterId++;
		let curChapter: AllPlots = this.AllCpPlotArr[curChapterId];
		return curChapter;
	}

}