class ChapterPage extends eui.Component {
	constructor(cStage) {
		super();
		this.Cstage = cStage;
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/components/ChapterPage.exml";
	}
	private uiCompHandler(): void {
		console.log("\t\tGoodsUI uiCompHandler");
		let stageW = this.Cstage.stageWidth;
		let stageH = this.Cstage.stageHeight;
		let oldW = this.width;
		let oldH = this.height;
		this.width = stageW;
		this.height = stageH;

		// this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// this.verticalCenter
	}
	private Cstage: egret.Stage;
	// private Btn_Jump: eui.Button;
	protected createChildren(): void {
		super.createChildren();

	}

	onButtonClick(): void {
		console.log("\t\tmain game clickbtn ");
	}
}