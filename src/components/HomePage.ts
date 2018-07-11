class HomePage extends eui.Component {
	constructor(cStage) {
		super();
		this.Cstage = cStage;
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/components/LoginRewardPage.exml";
	}
	private uiCompHandler(): void {
		console.log("\t\tGoodsUI uiCompHandler");
		let stageW = this.Cstage.stageWidth;
		let stageH = this.Cstage.stageHeight;
		let oldW = this.width;
		let oldH = this.height;
		this.width = stageW;
		this.height = stageH;

		for (let i = 0; i < this.numChildren; i++) {
			let child: egret.DisplayObject = this.getChildAt(i);
			if (child.x > 0) {
				child.x = child.x / oldW * this.width;
			}
			if (child.y > 0) {
				child.y = child.y / oldH * this.height;
			}
		}
		
		// this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// this.verticalCenter
	}
	private Cstage: egret.Stage;
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