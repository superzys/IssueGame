class SubmitPage extends eui.Component {
	constructor(leftNum, rightNum) {
		super();
		this.leftNum = leftNum;
		this.rightNum = rightNum;
		this.name = "SubmitPage";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/Pages/SubmitPage.exml";
	}
	private uiCompHandler(): void {
		UICenter.getInstance().LocFitPage(this);
		this.ShowInitTalkContent();
		this.Btn_Submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_SubIssue, this);
		// this.verticalCenter
	}

	ShowInitTalkContent(): void {
		// this.data.
		var dsListHeros: Array<Object> = [];

		for (let i = 0; i < 4; i++) {
			let oneWord: OneDialog = new OneDialog();
			let isLeft = i % 2 == 0 ? true : false;
			oneWord.PhotoId = isLeft ? this.leftNum : this.rightNum;
			oneWord.IsLeft = isLeft;
			oneWord.ImgFaceArr = [];
			dsListHeros.push(oneWord);
		}
		this.wordsArr = new eui.ArrayCollection(dsListHeros);
		this.List_Speak.dataProvider = this.wordsArr;
		this.List_Speak.itemRenderer = CmpSpeakWords;
	}
	private wordsArr: eui.ArrayCollection;
	private leftNum: number;
	private rightNum: number;

	protected createChildren(): void {
		super.createChildren();
	}
	private List_Speak: eui.List;
	private Btn_Submit: eui.Button;
	private Ipt_Answer: eui.TextInput;

	BtnClick_SubIssue(): void {
		let reqNet: WxDesignReqNet = new WxDesignReqNet();
		reqNet.WordsArr = [];
		for (let i = 0; i < this.wordsArr.source.length; i++) {
			let oneWord: OneDialog = this.wordsArr.source[i];
			if (oneWord != undefined && oneWord.Words != undefined && oneWord.Words != "") {
				reqNet.WordsArr.push(oneWord.Words);
			}
		}

		reqNet.LeftPhoto = this.leftNum;
		reqNet.RightPhoto = this.rightNum;
		reqNet.TipsArr = [];
		for (let i = 0; i < this.Ipt_Answer.text.length; i++) {
			let str = this.Ipt_Answer.text[i];
			reqNet.TipsArr.push(str);
		}


	}
}