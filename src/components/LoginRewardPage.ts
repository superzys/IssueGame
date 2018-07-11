class LoginRewardPage extends eui.Component {
	constructor(cStage) {
		super();
		this.Cstage = cStage;
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/LoginRewardPage.exml";
	}

	private uiCompHandler(): void {
		console.log("\t\tGoodsUI uiCompHandler");

		this.Btn_GainReward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// this.verticalCenter
		this.numChildren;

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
	}

	private Cstage : egret.Stage;
	private Btn_GainReward: eui.Button;
	protected createChildren(): void {
		super.createChildren();

	}

	onButtonClick(): void {
		console.log("\t\tmain game clickbtn ");
	}
}