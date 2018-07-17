class CmpPlayerRankInfo extends eui.ItemRenderer {
	constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "CmpPlayerRankInfo";
	}
	private uiCompHandler(): void {

	}

	protected createChildren(): void {
		super.createChildren();
	}

	private cData: RankUserInfoNet;


	private Img_Photo: eui.Image;
	private Lab_Name: eui.Label;
	private Lab_Des: eui.Label;
	private Lab_Lv: eui.Label;
	private Lab_Rank: eui.Label;
	private Img_Rank: eui.Image;

	protected dataChanged(): void {
		this.cData = this.data;

		let ChapterId: number = parseInt(this.cData.ChapterId);
		let cpData: ChapterData = UserManger.getInstance().GetChapterData(ChapterId);

		this.Lab_Name.text = this.cData.nickName + "";
		this.Lab_Des.text = cpData.Name + "";
		this.Lab_Lv.text = "第" +this.cData.PveNum + "关";
		this.Lab_Rank.text = (this.cData.rankNum + 1) + "";
		this.Img_Photo.source = this.cData.avatarUrl;

		if (this.cData.rankNum < 3) {
			this.Lab_Rank.visible = false;
			this.Img_Rank.visible = true;
			this.Img_Rank.source = "Top_" + ((this.cData.rankNum + 1));
		} else {
			this.Lab_Rank.visible = true;
			this.Img_Rank.visible = false;
		}


	}

}