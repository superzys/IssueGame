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
    function SubmitPage() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/components/LoginRewardPage.exml";
        return _this;
    }
    SubmitPage.prototype.uiCompHandler = function () {
        console.log("\t\tGoodsUI uiCompHandler");
        this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        // this.verticalCenter
    };
    SubmitPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    SubmitPage.prototype.onButtonClick = function () {
        console.log("\t\tmain game clickbtn ");
    };
    return SubmitPage;
}(eui.Component));
__reflect(SubmitPage.prototype, "SubmitPage");
