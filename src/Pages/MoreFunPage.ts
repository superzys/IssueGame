class MoreFunPage extends eui.Component {
	constructor() {
		super();
		this.name = "MoreFunPage";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/MoreFunPage.exml";
	}
	private uiCompHandler(): void {

		UICenter.getInstance().LocFitPage(this);
		this.Btn_ChuTi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ChuTi, this);

	}
	private Btn_ChuTi: eui.Button;

	protected createChildren(): void {
		super.createChildren();

	}

	BtnClick_ChuTi(): void {
			let group: eui.Component = new ChoosePhotoPage();
			UICenter.getInstance().AddOnePage(group,true);
	}
}