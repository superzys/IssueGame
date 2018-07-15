module Cmp {
	export class CmpChooseFontBox extends eui.Component {
		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
			this.skinName = "resource/components/CmpChooseFontBox.exml";
		}
		private uiCompHandler(): void {
			this.ShowFont();
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ThisFont, this);
		}
		private Lab_Des: eui.Label;
		protected createChildren(): void {
			super.createChildren();

		}
		private ChooseIdx: number = -1;
		private CurFont: string;
		private index: number;
		//点击回调
		private callFun: Function;
		private funTar:eui.Component;

		public InitCmp(idx: number, fun: Function,tarCmp:eui.Component): void {
			this.ChooseIdx = -1;
			this.index = idx;
			this.callFun = fun;
			this.funTar = tarCmp;
			this.ShowFont();
		}
		public IsEmpty(): boolean {
			return this.ChooseIdx >= 0 ? false : true;
		}
		public GetCurFont():string
		{
			return this.CurFont;
		}
		public SetFont(str: string, idx: number = -1): void {
			this.ChooseIdx = idx;
			this.CurFont = str;
			this.ShowFont();
		}
		BtnClick_ThisFont(): void {
			if (this.callFun != undefined && this.ChooseIdx>=0)  {
				this.callFun.call(this.funTar,this.index,this.ChooseIdx);
			}
		}
		ShowFont(): void {
			if (this.CurFont != undefined && this.Lab_Des != undefined) {
				this.Lab_Des.text = this.CurFont;
			}
		}
	}
}