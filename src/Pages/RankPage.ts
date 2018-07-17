class RankPage extends eui.Component {
	constructor() {
		super();
		this.name = "RankPage";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/RankPage.exml";
	}
	private uiCompHandler(): void {
		console.log("\t\tGoodsUI uiCompHandler");
		UICenter.getInstance().LocFitPageWithComponent(this, [this.Sc_List]);

		this.ShowSelfInfo();

		let arr: RankUserInfoNet[] = [];

		var dsListHeros: Array<Object> = arr;
		this.rankArr = new eui.ArrayCollection(dsListHeros);
		this.List_Rank.dataProvider = this.rankArr;
		this.List_Rank.itemRenderer = CmpPlayerRankInfo;


		this.GetRankData();
		this.Tab_PVE.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_PveRank, this);
		this.tab_Tianti.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_TiantiRank, this);
		this.Tab_Send.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_SendRank, this);
		// this.verticalCenter
	}
	private rankArr: eui.ArrayCollection;
	private Tab_Send: eui.Button;
	private tab_Tianti: eui.Button;
	private Tab_PVE: eui.Button;

	private List_Rank: eui.List;
	private Sc_List: eui.Scroller;
	//自己的信息组件
	private Img_Photo: eui.Image;
	private Lab_Name: eui.Label;
	private Lab_Des: eui.Label;
	private Lab_Lv: eui.Label;

	protected createChildren(): void {
		super.createChildren();

	}
	ShowSelfInfo(): void {
		let UserGameInfo: LoginResNet = UserManger.getInstance().userInfoObj.UserGameInfo;
		let WxUserInfo: LoginSendNet = UserManger.getInstance().userInfoObj.WxUserInfo;
		this.Img_Photo.source = WxUserInfo.avatarUrl;
		this.Lab_Name.text = WxUserInfo.nickName;
		this.Lab_Lv.text = "第" + UserGameInfo.PassedPlotIdArr.length + "关";
		let cpData: ChapterData = UserManger.getInstance().GetChapterData(UserGameInfo.ChapterId);
		this.Lab_Des.text = cpData.Name;

	}
	private async GetRankData() {

		let reqNet: WxGetRankReqNet = new WxGetRankReqNet();
		reqNet.SessonId = UserManger.getInstance().userInfoObj.UserGameInfo.SessonId;
		let Msg = JSON.stringify(reqNet);
		var getData = await HttpFetch.getInstance().HttpPost("GetRankInfo", Msg);

		if (getData != undefined) {
			var ResObj = JSON.parse(getData);
			if (ResObj.msg != undefined) {
				var msgObj = JSON.parse(ResObj.msg);
				if (msgObj.error != undefined) {

				} else {
					let rankResObj: WxGetRankResNet = msgObj as WxGetRankResNet;
					for (var i = 0; i < rankResObj.RankArr.length; i++) {
						let oneUser = rankResObj.RankArr[i] as RankUserInfoNet;
						this.rankArr.addItem(oneUser);
					}

					return;
				}
			}
		}
	}
	BtnClick_PveRank(): void {
		console.log("\t\tmain pve clickbtn ");
	}
	BtnClick_TiantiRank(): void {
		console.log("\t\tmain tianti clickbtn ");
	}
	BtnClick_SendRank(): void {
		console.log("\t\tmain baby clickbtn ");
	}
}