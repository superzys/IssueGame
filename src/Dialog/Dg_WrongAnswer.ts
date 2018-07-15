class Dg_WrongAnswer extends eui.Component {
public constructor(fun: Function,tar:eui.Component) {
		super();
		this.CallFun = fun;
		this.funtar=tar;
		this.name = "Dg_WrongAnswer";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Dialog/Dg_WrongAnswer.exml";
	}
	private uiCompHandler(): void {
		UICenter.getInstance().LocFitPage(this);
		this.isDone = false;
		this.tweenClose = egret.Tween.get(this);

		this.tweenClose.wait(2000);

		this.tweenClose.call(this.Btn_ClickLockTip, this);


		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickLockTip, this);
	}
	private CallFun: Function;
	private funtar: eui.Component;
	protected isDone: boolean;
	protected tweenClose: egret.Tween;
	// private Btn_Jump: eui.Button;
	protected createChildren(): void {
		super.createChildren();

	}
	Btn_ClickLockTip(): void {
		if (!this.isDone) {
			this.isDone = true;
			this.tweenClose.pause();
			UICenter.getInstance().RemoveOnePage("Dg_WrongAnswer");
			if (this.CallFun != undefined) {
				this.CallFun.call(this.funtar);
			}
		}
	}

}