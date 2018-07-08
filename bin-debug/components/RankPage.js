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
var RankPage = (function (_super) {
    __extends(RankPage, _super);
    function RankPage() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/components/LoginRewardPage.exml";
        return _this;
    }
    RankPage.prototype.uiCompHandler = function () {
        console.log("\t\tGoodsUI uiCompHandler");
        this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        // this.verticalCenter
    };
    RankPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    RankPage.prototype.onButtonClick = function () {
        console.log("\t\tmain game clickbtn ");
    };
    return RankPage;
}(eui.Component));
__reflect(RankPage.prototype, "RankPage");
