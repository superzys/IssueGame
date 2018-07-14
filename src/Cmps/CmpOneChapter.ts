class CmpOneChapter extends eui.ItemRenderer {
	constructor() {
		super();
        this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
		this.skinName = "CmpOneChapter";
	}
	private uiCompHandler(): void {
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickChapter, this);
	}

    protected createChildren():void {
        super.createChildren();
    }

	private Lab_ChapterName: eui.Label;
	private Lab_ChapterLv: eui.Label;
	private Gp_Lock: eui.Group;
	private Gp_Stars: eui.Group;

	private cData: ChapterData;

	protected dataChanged(): void {
		this.cData = this.data;

		this.Lab_ChapterName.text = this.cData.Name + "";
		this.Lab_ChapterLv.text = this.cData._id + "";
		this.Gp_Lock.visible = !this.cData.IsUnLock;
		// let sunNum =  Math.floor(this.cData.HardLv / 10);
		let moonNum = Math.floor(this.cData.HardLv / 5);
		let starNum = Math.floor(this.cData.HardLv % 5);
		let childNum = this.Gp_Stars.numChildren;
		for (let i = 0; i < childNum; i++) {
			this.Gp_Stars.removeChildAt(0);
		}
		for (let i = 0; i < moonNum; i++) {
			var img: eui.Image = new eui.Image();
			///可以直接通过 source 属性设置图片的源。
			img.source = "Img_Moon"
			this.Gp_Stars.addChild(img);
		}
		for (let i = 0; i < starNum; i++) {
			var img: eui.Image = new eui.Image();
			///可以直接通过 source 属性设置图片的源。
			img.source = "Img_Star"
			this.Gp_Stars.addChild(img);
		}

	}
	Btn_ClickChapter(): void {
		if (this.cData.IsUnLock) {
			let group: eui.Component = new GamePage(this.cData);
			UICenter.getInstance().AddOnePage(group);
		} else {
			let group: eui.Component = new Dg_LockChapterTip();
			UICenter.getInstance().AddOnePage(group);
		}
	}

}