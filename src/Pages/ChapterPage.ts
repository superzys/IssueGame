class ChapterPage extends eui.Component {
	constructor() {
		super();
		this.name = "ChapterPage";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/ChapterPage.exml";
	}
	private uiCompHandler(): void {
		// UICenter.getInstance().LocFitPage(this);
		UICenter.getInstance().LocFitPageWithComponent(this, [this.Sc_List]);
		var data: AlLChapters = UserManger.getInstance().AllChaptersInfo;
		let gameInfo: LoginResNet = UserManger.getInstance().userInfoObj.UserGameInfo;

		let arr: ChapterData[] = [];
		if (data && data.All != undefined) {
			for (let i = 0; i < data.All.length; i++) {
				let oneChapter: ChapterData = data.All[i];
				if (gameInfo != null) {
					oneChapter.IsUnLock = gameInfo.ChapterId >= oneChapter._id ? true : false
				}

				arr.push(oneChapter);
			}
		}

		var dsListHeros: Array<Object> = arr;

		this.List_Chapters.dataProvider = new eui.ArrayCollection(dsListHeros);
		this.List_Chapters.itemRenderer = CmpOneChapter;


		// this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// this.verticalCenter
	}
	private List_Chapters: eui.List;
	private Sc_List: eui.Scroller;

	// private Btn_Jump: eui.Button;
	protected createChildren(): void {
		super.createChildren();

	}

	onButtonClick(): void {
		console.log("\t\tmain game clickbtn ");
	}
}