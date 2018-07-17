class CmpSpeakWords extends eui.ItemRenderer {
	public constructor() {
		super();

		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "CmpSpeakWords";
	}

	private uiCompHandler(): void {
		this.Imput_Words.addEventListener(eui.UIEvent.CHANGE_END, this.inputChangeEnd, this);
		this.Imput_Words.addEventListener(eui.UIEvent.CHANGE, this.inputChange, this);
	}
	protected createChildren(): void {
		super.createChildren();
	}
	private Img_Photo: eui.Image;
	private Imput_Words: eui.TextInput;


	private cData: OneDialog;

	protected dataChanged(): void {
		this.cData = this.data;

		if (this.cData.IsLeft) {
			this.currentState = "left";
		} else {
			this.currentState = "right";
		}
		// this.Lab_Words.text = this.cData.Words;
		this.Img_Photo.source = "Photo_" + this.cData.PhotoId + "_png";
	}

	inputChangeEnd(): void {
		console.log("change end");
	}
	inputChange(): void {
		this.cData.Words = this.Imput_Words.text;
		console.log("change ");
	}
}