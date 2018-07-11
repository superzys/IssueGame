class GamePage extends eui.Component {
	constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/GamePage.exml";
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