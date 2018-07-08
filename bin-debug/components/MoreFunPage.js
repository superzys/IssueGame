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
var MoreFunPage = (function (_super) {
    __extends(MoreFunPage, _super);
    function MoreFunPage() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/components/LoginRewardPage.exml";
        return _this;
    }
    MoreFunPage.prototype.uiCompHandler = function () {
        console.log("\t\tGoodsUI uiCompHandler");
        this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        // this.verticalCenter
    };
    MoreFunPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    MoreFunPage.prototype.onButtonClick = function () {
        console.log("\t\tmain game clickbtn ");
    };
    return MoreFunPage;
}(eui.Component));
__reflect(MoreFunPage.prototype, "MoreFunPage");
