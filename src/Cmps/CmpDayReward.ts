class CmpDayReward extends eui.ItemRenderer {
	constructor() {
		super();

		this.skinName = "CmpDayReward";
	}

	private Img_BkNot: eui.Image;
	private Lab_Day: eui.Label;
	private Lab_Num: eui.Label;
	private cData: LoginRewardStruct;
	protected dataChanged(): void {
		this.cData = this.data;
		// console.log("cmp day item dataChanged " + this.cData.day);
		this.Lab_Num.text = this.cData.rewardNum + "";
		this.Lab_Day.text = "第" + ToolShowChange.GetDayDes(this.cData.day + 1) + "天";
		this.Img_BkNot.visible = !this.cData.isGained;
	}


}