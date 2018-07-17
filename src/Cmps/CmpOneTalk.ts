class CmpOneTalk extends eui.ItemRenderer {
	constructor() {
		super();

        this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
		this.skinName = "CmpOneTalk";
	}
	private uiCompHandler(): void {
	}
	protected createChildren(): void {
		super.createChildren();
	}


	private Img_Photo: eui.Image;
	private Lab_Words: eui.Label;


	private cData: OneDialog;

	protected dataChanged(): void {
		this.cData = this.data;

		if (this.cData.IsLeft) {
			this.currentState = "left";
		} else {
			this.currentState = "right";
		}
		this.Lab_Words.text = this.cData.Words;
		this.Img_Photo.source = "Photo_" + this.cData.PhotoId + "_png";
		// this.Lab_Num.text = this.cData.rewardNum + "";
		// this.Lab_Day.text = "第" + ToolShowChange.GetDayDes(this.cData.day + 1) + "天";
		// this.Img_BkNot.visible = !this.cData.isGained;
	}

}