module Cmp {

	export class CmpShowFontBox extends eui.Component {
		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
			this.skinName = "resource/components/CmpShowFontBox.exml";
		}
		private uiCompHandler(): void {
			this.ShowFont();
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ThisFont, this);
		}

		private Lab_Des: eui.Label;
		protected createChildren(): void {
			super.createChildren();

		}
		private CurFont: string;
		private index: number;
		//点击回调
		private callFun: Function;


		public SetFont(idx: number, str: string, fun: Function): void {
			this.CurFont = str;
			this.index = idx;
			this.callFun = fun;
			this.ShowFont();
		}
		BtnClick_ThisFont(): void {
			if (this.callFun != undefined) {
				this.callFun(this.index);
			}
		}
		ShowFont(): void {
			if (this.CurFont != undefined && this.CurFont != "" && this.Lab_Des != undefined) {
				this.Lab_Des.text = this.CurFont;
			}
		}
	}
}