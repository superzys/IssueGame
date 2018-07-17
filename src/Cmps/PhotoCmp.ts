module Cmp {
	export class PhotoCmp extends eui.Component {
		public constructor() {
			super();
			this.index = 0;

			this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
			this.skinName = "resource/components/PhotoCmp.exml";
		}
		private uiCompHandler(): void {

			this.Btn_Left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_PreOne, this);
			this.Btn_Right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_NextOne, this);
			this.ImgPhoto.source = "Photo_" + this.index + "_png";
		}

		protected createChildren(): void {
			super.createChildren();
		}

		private Btn_Left: eui.Button;
		private Btn_Right: eui.Button;
		private ImgPhoto: eui.Image;

		private MaxNum: number = 2;
		private index: number = 0;
		
		public GetCurIndex():number
		{
			return this.index;
		}

		BtnClick_PreOne(): void {
			this.index--;
			if (this.index < 0) {
				this.index = 0;
			}
			this.ImgPhoto.source = "Photo_" + this.index + "_png";
		}
		BtnClick_NextOne(): void {
			this.index++;
			if (this.index > this.MaxNum) {
				this.index = this.MaxNum;
			}
			this.ImgPhoto.source = "Photo_" + this.index + "_png";
		}
	}
}