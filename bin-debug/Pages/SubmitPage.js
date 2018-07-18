var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SubmitPage = (function (_super) {
    __extends(SubmitPage, _super);
    function SubmitPage(leftNum, rightNum) {
        var _this = _super.call(this) || this;
        _this.leftNum = leftNum;
        _this.rightNum = rightNum;
        _this.name = "SubmitPage";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/Pages/SubmitPage.exml";
        return _this;
    }
    SubmitPage.prototype.uiCompHandler = function () {
        UICenter.getInstance().LocFitPage(this);
        this.ShowInitTalkContent();
        this.Btn_Submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_SubIssue, this);
        // this.verticalCenter
    };
    SubmitPage.prototype.ShowInitTalkContent = function () {
        // this.data.
        var dsListHeros = [];
        for (var i = 0; i < 4; i++) {
            var oneWord = new OneDialog();
            var isLeft = i % 2 == 0 ? true : false;
            oneWord.PhotoId = isLeft ? this.leftNum : this.rightNum;
            oneWord.IsLeft = isLeft;
            oneWord.ImgFaceArr = [];
            dsListHeros.push(oneWord);
        }
        this.wordsArr = new eui.ArrayCollection(dsListHeros);
        this.List_Speak.dataProvider = this.wordsArr;
        this.List_Speak.itemRenderer = CmpSpeakWords;
    };
    SubmitPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    SubmitPage.prototype.BtnClick_SubIssue = function () {
        var reqNet = new WxDesignReqNet();
        reqNet.WordsArr = [];
        for (var i = 0; i < this.wordsArr.source.length; i++) {
            var oneWord = this.wordsArr.source[i];
            if (oneWord != undefined && oneWord.Words != undefined && oneWord.Words != "") {
                reqNet.WordsArr.push(oneWord.Words);
            }
        }
        reqNet.LeftPhoto = this.leftNum;
        reqNet.RightPhoto = this.rightNum;
        reqNet.TipsArr = [];
        for (var i = 0; i < this.Ipt_Answer.text.length; i++) {
            var str = this.Ipt_Answer.text[i];
            reqNet.TipsArr.push(str);
        }
    };
    return SubmitPage;
}(eui.Component));
__reflect(SubmitPage.prototype, "SubmitPage");
