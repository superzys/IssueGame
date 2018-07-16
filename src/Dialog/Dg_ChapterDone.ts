/**
 * 通关了一章节的时候 
 * 下一章节是否需要付费解锁
 */
class Dg_ChapterDone extends eui.Component {
	public constructor( fun: Function,tar:eui.Component) {
		super();
		this.CallFun = fun;
		this.funtar=tar;
		this.name = "Dg_ChapterDone";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Dialog/Dg_ChapterDone.exml";
	}

	private uiCompHandler(): void {
		UICenter.getInstance().LocFitPage(this);
		this.isDone = false;



		this.Btn_Return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickReturn, this);
		this.Btn_Share_InGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickShare, this);
		this.Btn_JumpChapter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickNextChapter, this);
}

	private CallFun: Function;
	private funtar: eui.Component;
	protected isDone: boolean;

	private Btn_Share_InGame: eui.Button;
	private Btn_JumpChapter: eui.Button;
	private Btn_Return: eui.Button;


	protected createChildren(): void {
		super.createChildren();

	}
	Btn_ClickShare(): void {
		if (!this.isDone) {
			this.isDone = true;

			UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
			if (this.CallFun != undefined) {
				this.CallFun.call(this.funtar);
			}

		}
	}
	
	Btn_ClickReturn(): void {
		if (!this.isDone) {
			this.isDone = true;

			UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
			UICenter.getInstance().RemoveOnePage("GamePage");

		}
	}
		
	Btn_ClickNextChapter(): void {
		if (!this.isDone) {
			this.isDone = true;

			UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
			if (this.CallFun != undefined) {
				this.CallFun.call(this.funtar);
			}

		}
	}
	

}