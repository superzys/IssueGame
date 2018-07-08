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
var LoginRewardPage = (function (_super) {
    __extends(LoginRewardPage, _super);
    function LoginRewardPage(cStage) {
        var _this = _super.call(this) || this;
        _this.Cstage = cStage;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/components/LoginRewardPage.exml";
        return _this;
    }
    LoginRewardPage.prototype.uiCompHandler = function () {
        console.log("\t\tGoodsUI uiCompHandler");
        this.Btn_GainReward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        // this.verticalCenter
        this.numChildren;
        var stageW = this.Cstage.stageWidth;
        var stageH = this.Cstage.stageHeight;
        var oldW = this.width;
        var oldH = this.height;
        this.width = stageW;
        this.height = stageH;
        for (var i = 0; i < this.numChildren; i++) {
            var child = this.getChildAt(i);
            if (child.x > 0) {
                child.x = child.x / oldW * this.width;
            }
            if (child.y > 0) {
                child.y = child.y / oldH * this.height;
            }
        }
    };
    LoginRewardPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    LoginRewardPage.prototype.onButtonClick = function () {
        console.log("\t\tmain game clickbtn ");
    };
    return LoginRewardPage;
}(eui.Component));
__reflect(LoginRewardPage.prototype, "LoginRewardPage");
