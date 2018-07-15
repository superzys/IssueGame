class Dg_RightAnswer extends eui.Component {
	public constructor(gold: number, fun: Function,tar:eui.Component) {
		super();
		this.GetGoldNum = gold;
		this.CallFun = fun;
		this.funtar=tar;
		this.name = "Dg_RightAnswer";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Dialog/Dg_RightAnswer.exml";
	}

	private uiCompHandler(): void {
		UICenter.getInstance().LocFitPage(this);
		this.isDone = false;

		this.Lab_Gold.text = "+"+this.GetGoldNum ;


		this.Btn_Continue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickLockTip, this);
	}

	private GetGoldNum: number;
	private CallFun: Function;
	private funtar: eui.Component;
	protected isDone: boolean;
	private Btn_Continue: eui.Button;
	private Lab_Gold: eui.Label;

	protected createChildren(): void {
		super.createChildren();

	}
	Btn_ClickLockTip(): void {
		if (!this.isDone) {
			this.isDone = true;

			UICenter.getInstance().RemoveOnePage("Dg_RightAnswer");
			if (this.CallFun != undefined) {
				this.CallFun.call(this.funtar);
			}

		}
	}
}