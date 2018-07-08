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
var DayRewardCmp = (function (_super) {
    __extends(DayRewardCmp, _super);
    function DayRewardCmp() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/components/LoginRewardPage.exml";
        return _this;
    }
    DayRewardCmp.prototype.uiCompHandler = function () {
        console.log("\t\tGoodsUI uiCompHandler");
        this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        // this.verticalCenter
    };
    DayRewardCmp.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    DayRewardCmp.prototype.onButtonClick = function () {
        console.log("\t\tmain game clickbtn ");
    };
    return DayRewardCmp;
}(eui.Component));
__reflect(DayRewardCmp.prototype, "DayRewardCmp");
