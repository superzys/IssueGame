class RankPage extends eui.Component {
	constructor() {
		super();
		this.name = "RankPage";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/RankPage.exml";
	}
	private uiCompHandler(): void {
		console.log("\t\tGoodsUI uiCompHandler");

		// this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// this.verticalCenter
	}
	// private Btn_Jump: eui.Button;
	protected createChildren(): void {
		super.createChildren();

	}

	onButtonClick(): void {
		console.log("\t\tmain game clickbtn ");
	}
}