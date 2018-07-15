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
		private isChoosed: boolean = false;
		private funTar:eui.Component;

		public SetFont(idx: number, str: string, fun: Function,tarCmp:eui.Component): void {
			this.isChoosed = false;
			this.CurFont = str;
			this.index = idx;
			this.callFun = fun;
			this.funTar = tarCmp;
			this.ShowFont();
		}
		public IsChoosed(isCd: boolean) {
			this.isChoosed = isCd;

		}
		BtnClick_ThisFont(): void {
			if (this.callFun != undefined && !this.isChoosed) {
				this.callFun.call(this.funTar,this.index);
			}
		}
		ShowFont(): void {
			if (this.CurFont != undefined && this.Lab_Des != undefined) {
				this.Lab_Des.text = this.CurFont;
			}
		}
		ChangeFontShow(): void {
			if (this.isChoosed != undefined && this.Lab_Des != undefined) {
				this.Lab_Des.visible = !this.isChoosed;
			}
		}
	}
}