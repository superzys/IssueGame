class UICenter {
	public constructor() {
		this.PagesArr = [];
	}
	private static instance: UICenter;
	public static getInstance(): UICenter {
		if (this.instance == null) {
			this.instance = new UICenter();
		}
		return this.instance;
	}
	protected PagesArr: eui.Component[];

	private stage: egret.Stage;

	private baseLayer: eui.UILayer;

	public SetState(stg, lay) {
		this.stage = stg;
		this.baseLayer = lay;
	}
	/**
	 * 添加一页上来
	 */
	public AddOnePage(page: eui.Component): void {
		page.verticalCenter = 0;
		page.horizontalCenter = 0;
		this.baseLayer.addChild(page);

		this.PagesArr.push(page);
	}
	public RemoveOnePage(pageName: string): void {
		let page: eui.Component = undefined;
		for (let i = 0; i < this.PagesArr.length; i++) {
			if (this.PagesArr[i].name == pageName) {
				page = this.PagesArr[i];
				break;
			}
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
}