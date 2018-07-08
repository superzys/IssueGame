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
var ChapterPage = (function (_super) {
    __extends(ChapterPage, _super);
    function ChapterPage(cStage) {
        var _this = _super.call(this) || this;
        _this.Cstage = cStage;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/components/ChapterPage.exml";
        return _this;
    }
    ChapterPage.prototype.uiCompHandler = function () {
        console.log("\t\tGoodsUI uiCompHandler");
        var stageW = this.Cstage.stageWidth;
        var stageH = this.Cstage.stageHeight;
        var oldW = this.width;
        var oldH = this.height;
        this.width = stageW;
        this.height = stageH;
        // this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        // this.verticalCenter
    };
    // private Btn_Jump: eui.Button;
    ChapterPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    ChapterPage.prototype.onButtonClick = function () {
        console.log("\t\tmain game clickbtn ");
    };
    return ChapterPage;
}(eui.Component));
__reflect(ChapterPage.prototype, "ChapterPage");
