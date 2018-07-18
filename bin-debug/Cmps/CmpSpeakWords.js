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
var CmpSpeakWords = (function (_super) {
    __extends(CmpSpeakWords, _super);
    function CmpSpeakWords() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "CmpSpeakWords";
        return _this;
    }
    CmpSpeakWords.prototype.uiCompHandler = function () {
        this.Imput_Words.addEventListener(eui.UIEvent.CHANGE_END, this.inputChangeEnd, this);
        this.Imput_Words.addEventListener(eui.UIEvent.CHANGE, this.inputChange, this);
    };
    CmpSpeakWords.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    CmpSpeakWords.prototype.dataChanged = function () {
        this.cData = this.data;
        if (this.cData.IsLeft) {
            this.currentState = "left";
        }
        else {
            this.currentState = "right";
        }
        // this.Lab_Words.text = this.cData.Words;
        this.Img_Photo.source = "Photo_" + this.cData.PhotoId + "_png";
    };
    CmpSpeakWords.prototype.inputChangeEnd = function () {
        console.log("change end");
    };
    CmpSpeakWords.prototype.inputChange = function () {
        this.cData.Words = this.Imput_Words.text;
        console.log("change ");
    };
    return CmpSpeakWords;
}(eui.ItemRenderer));
__reflect(CmpSpeakWords.prototype, "CmpSpeakWords");
