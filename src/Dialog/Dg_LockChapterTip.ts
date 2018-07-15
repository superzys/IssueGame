class Dg_LockChapterTip extends eui.Component {
	constructor() {
		super();
		this.name = "Dg_LockChapterTip";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Dialog/Dg_LockChapterTip.exml";
	}

	private uiCompHandler(): void {
		UICenter.getInstance().LocFitPage(this);
		this.isDone = false;
		this.tweenClose = egret.Tween.get(this);

		this.tweenClose.wait(2000);

		this.tweenClose.call(this.Btn_ClickLockTip, this);

		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickLockTip, this);
	}
	protected isDone: boolean;
	protected tweenClose: egret.Tween;
	protected createChildren(): void {
		super.createChildren();

	}
	Btn_ClickLockTip(): void {
		if (!this.isDone) {
			this.isDone = true;
			this.tweenClose.pause();
			UICenter.getInstance().RemoveOnePage("Dg_LockChapterTip");
		}
	}

}