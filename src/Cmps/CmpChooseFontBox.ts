module Cmp {
	export class CmpChooseFontBox extends eui.Component {
		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
			this.skinName = "resource/components/CmpChooseFontBox.exml";
		}
		private uiCompHandler(): void {

		}
		private Lab_Des: eui.Label;
		protected createChildren(): void {
			super.createChildren();

		}
	}
}