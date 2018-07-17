class ChoosePhotoPage extends eui.Component {
	constructor() {
		super();
		this.name = "ChoosePhotoPage";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/ChoosePhotoPage.exml";
	}
	private uiCompHandler(): void {
		this.Cmp_Left = new Cmp.PhotoCmp();
		this.Cmp_Left.width = 446;
		this.Cmp_Left.height = 270;
		this.Cmp_Left.horizontalCenter = 0;
		this.Cmp_Left.y = 163;
		this.Gp_Photo.addChild(this.Cmp_Left );
		
		this.Cmp_Right = new Cmp.PhotoCmp();
		this.Cmp_Right.width = 446;
		this.Cmp_Right.height = 270;
		this.Cmp_Right.horizontalCenter = 0;
		this.Cmp_Right.y = 392;
		this.Gp_Photo.addChild(this.Cmp_Right );

		UICenter.getInstance().LocFitPage(this);


		this.Btn_Sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_Sure, this);

	}
	private Gp_Photo:eui.Group;
	private Btn_Sure: eui.Button;
	private Cmp_Left: Cmp.PhotoCmp;
	private Cmp_Right: Cmp.PhotoCmp;
	protected createChildren(): void {
		super.createChildren();

	}

	BtnClick_Sure(): void {
		let leftNum: number = this.Cmp_Left.GetCurIndex();
		let rightNum: number = this.Cmp_Right.GetCurIndex();

		let group: eui.Component = new SubmitPage(leftNum,rightNum);
		UICenter.getInstance().AddOnePage(group, true);
	}
}