class UICenter {
	public constructor() {
		this.PagesArr = [];
		this.OpPagesArr = [];
	}
	private static instance: UICenter;
	public static getInstance(): UICenter {
		if (this.instance == null) {
			this.instance = new UICenter();
		}
		return this.instance;
	}
	protected PagesArr: eui.Component[];
	protected OpPagesArr: eui.Component[];

	private stage: egret.Stage;

	private baseLayer: eui.UILayer;
	private OpLayer: eui.UILayer;

	public SetState(stg, lay) {
		this.stage = stg;
		this.baseLayer = lay;
		this.OpLayer = new eui.UILayer;
		let stageW = this.stage.stageWidth;
		let stageH = this.stage.stageHeight;
		this.OpLayer.touchThrough = true;
		this.OpLayer.touchChildren = true;
		this.OpLayer.width = stageW;
		this.OpLayer.height = stageH;
		// let gp: eui.Group = new eui.Group();
		// gp.width = 200;
		// gp.height = stageH;
		// gp.touchEnabled = true;
		// this.OpLayer.addChild(gp);
		// this.stage.addChild(this.OpLayer);
	}
	private pt: GmPoint;

	TouchEndOp_OpLayer(evt: egret.TouchEvent): void {
		// console.log("op op layer  end ");
		this.TouchEnd_OpLayer(evt);
	}
	TouchStart_OpLayer(evt: egret.TouchEvent): void {
		// console.log("op page start  ");
		if (this.OpPagesArr.length > 0) {
			this.pt = new GmPoint(evt.stageX, evt.stageY);
			// this.OpPagesArr.shift();
			// console.log("op layer click return ");

			this.OpLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEndOp_OpLayer, this, true);
			return;
		}
	}
	TouchMove_OpLayer(evt: egret.TouchEvent): void {
		// console.log("op layer move  ");
		if (this.OpPagesArr.length > 0) {
			if (this.pt == undefined) {
				this.pt = new GmPoint(evt.stageX, evt.stageY);
			}
			let cmp = this.OpPagesArr[this.OpPagesArr.length - 1];
			let moveX = Math.abs(evt.stageX - this.pt.x);
			if (moveX > Math.abs(evt.stageY - this.pt.y)
			) {
				cmp.horizontalCenter = evt.stageX - this.pt.x;
				if (cmp.horizontalCenter < 0) {
					cmp.horizontalCenter = 0;
				}
			}

			// this.OpPagesArr.shift();
			// console.log("op layer click return ");
			return;
		}

	}
	TouchEnd_OpLayer(evt: egret.TouchEvent): void {
		// console.log("op page move end ");
		if (this.OpPagesArr.length > 0 && this.pt != undefined) {
			let cmp = this.OpPagesArr[this.OpPagesArr.length - 1];
			let moveX = (evt.stageX - this.pt.x);
			let endX = 0;
			if (moveX > this.stage.stageWidth * 0.4) {
				this.OpPagesArr.splice(this.OpPagesArr.length - 1, 1);
				endX = this.stage.stageWidth  + 10;
			} else {
				endX = 0;
			}
			let baseLayer = this.baseLayer;
			egret.Tween.get(cmp).to({ horizontalCenter: endX }, 300, egret.Ease.sineIn)
				.call(() => {
					if (endX > 0) {
						baseLayer.removeChild(cmp);
					}
				});
			this.pt = undefined;
			this.OpLayer.removeEventListener(egret.TouchEvent.TOUCH_END, this.TouchEndOp_OpLayer, this, true);
			// this.OpPagesArr.shift();
			// console.log("op layer click return ");
			return;
		}
	}

	TouchCancel_OpLayer(evt: egret.TouchEvent): void {
		// console.log("op page  cancel ");
		this.TouchEnd_OpLayer(evt);
	}
	TouchOutSide_OpLayer(evt: egret.TouchEvent): void {
		// console.log("op page  outside ");
		this.TouchEnd_OpLayer(evt);
	}
	/**
	 * 添加一页上来
	 */
	public AddOnePage(page: eui.Component, isCanReturn: boolean = false): void {
		page.verticalCenter = 0;
		page.horizontalCenter = 0;
		this.baseLayer.addChild(page);

		this.PagesArr.push(page);
		if (isCanReturn) {
			this.OpPagesArr.push(page);

			page.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.TouchStart_OpLayer, this, true);
			page.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.TouchMove_OpLayer, this, true);
			page.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEnd_OpLayer, this, true);
			page.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.TouchCancel_OpLayer, this, true);

			page.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.TouchOutSide_OpLayer, this, true);
		}
	}
	public RemoveOnePage(pageName: string): void {
		let page: eui.Component = undefined;
		for (let i = 0; i < this.PagesArr.length; i++) {
			if (this.PagesArr[i].name == pageName) {
				page = this.PagesArr[i];
				this.PagesArr.splice(i, 1);
				break;
			}
		}
		if (this.OpPagesArr.indexOf(page) >= 0) {
			let idx = this.OpPagesArr.indexOf(page)
			this.OpPagesArr.splice(idx, 1);
		}

		if (page != undefined) {
			this.baseLayer.removeChild(page);
		}
	}
	/**
	 * 根据自适应规则 重新匹配所有元素
	 */
	public LocFitPage(page: eui.Component) {
		let stageW = this.stage.stageWidth;
		let stageH = this.stage.stageHeight;
		let oldW = page.width;
		let oldH = page.height;
		page.width = stageW;
		page.height = stageH;

		for (let i = 0; i < page.numChildren; i++) {
			let child: egret.DisplayObject = page.getChildAt(i);
			if (child.x > 0) {
				child.x = child.x / oldW * page.width;
			}
			if (child.y > 0) {
				child.y = child.y / oldH * page.height;
			}
		}
	}

	public LocFitPageWithComponent(page: eui.Component, cmpArr: eui.Component[]) {
		let stageW = this.stage.stageWidth;
		let stageH = this.stage.stageHeight;
		let oldW = page.width;
		let oldH = page.height;
		page.width = stageW;
		page.height = stageH;

		for (let i = 0; i < page.numChildren; i++) {
			let child: egret.DisplayObject = page.getChildAt(i);
			if (child.x > 0) {
				child.x = child.x / oldW * page.width;
			}
			if (child.y > 0) {
				child.y = child.y / oldH * page.height;
			}
		}
		for (let i = 0; i < cmpArr.length; i++) {
			let child: eui.Component = cmpArr[i];
			child.height = child.height / oldH * stageH;
		}
	}
}