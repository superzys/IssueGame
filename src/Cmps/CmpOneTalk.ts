class CmpOneTalk extends eui.ItemRenderer {
	constructor() {
		super();

		this.skinName = "CmpOneTalk";
	}

	private Img_BkNot: eui.Image;
	private Lab_Day: eui.Label;
	private Lab_Num: eui.Label;
	private Gp_Self: eui.Group;
	private Gp_Other: eui.Group;


	private cData: OneDialog;

	protected dataChanged(): void {
		this.cData = this.data;
		// this.currentState = "";
		if(this.cData.IsLeft){

		}else{

		}

		// this.Lab_Num.text = this.cData.rewardNum + "";
		// this.Lab_Day.text = "第" + ToolShowChange.GetDayDes(this.cData.day + 1) + "天";
		// this.Img_BkNot.visible = !this.cData.isGained;
	}

}