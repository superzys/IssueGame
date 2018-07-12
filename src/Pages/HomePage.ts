class HomePage extends eui.Component {
	constructor() {
		super();
				this.name = "HomePage";
		// this.Cstage = cStage;
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/HomePage.exml";
	}
	private uiCompHandler(): void {

		UICenter.getInstance().LocFitPage(this);

		// this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// this.verticalCenter
	}
	// private Cstage: egret.Stage;
	private Btn_Talk: eui.Button;
	private Btn_StartGame: eui.Button;
	private Btn_Rank: eui.Button;
	private Btn_MoreGame: eui.Button;

	protected createChildren(): void {
		super.createChildren();

	}

	onButtonClick(): void {
		console.log("\t\tmain game clickbtn ");
	}
}