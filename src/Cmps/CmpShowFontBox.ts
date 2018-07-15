module Cmp {

	export class CmpShowFontBox extends eui.Component {
		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
			this.skinName = "resource/components/CmpShowFontBox.exml";
		}
		private uiCompHandler(): void {
			this.ShowFont();
		}

		private Lab_Des: eui.Label;
		protected createChildren(): void {
			super.createChildren();

		}
		private CurFont: string;

		public SetFont(str: string): void {
			this.CurFont = str;
			this.ShowFont();
		}

		ShowFont(): void {
			if (this.CurFont != undefined && this.CurFont != "" && this.Lab_Des != undefined) {
				this.Lab_Des.text = this.CurFont;
			}
		}
	}
}