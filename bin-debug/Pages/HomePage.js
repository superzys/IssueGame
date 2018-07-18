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
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super.call(this) || this;
        _this.name = "HomePage";
        // this.Cstage = cStage;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/Pages/HomePage.exml";
        return _this;
    }
    HomePage.prototype.uiCompHandler = function () {
        UICenter.getInstance().LocFitPage(this);
        this.Btn_StartGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_StartGame, this);
        this.Btn_Rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_OpenRank, this);
        this.Btn_MoreGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_OpenMore, this);
    };
    HomePage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    HomePage.prototype.BtnClick_StartGame = function () {
        if (UserManger.getInstance().userInfoObj.UserGameInfo != null) {
            var group = new ChapterPage();
            UICenter.getInstance().AddOnePage(group, true);
        }
        else {
            console.log("尚未登录");
        }
    };
    HomePage.prototype.BtnClick_OpenRank = function () {
        if (UserManger.getInstance().userInfoObj.UserGameInfo != null) {
            var group = new RankPage();
            UICenter.getInstance().AddOnePage(group, true);
        }
        else {
            console.log("尚未登录");
        }
    };
    HomePage.prototype.BtnClick_OpenMore = function () {
        if (UserManger.getInstance().userInfoObj.UserGameInfo != null) {
            var group = new MoreFunPage();
            UICenter.getInstance().AddOnePage(group, true);
        }
        else {
            console.log("尚未登录");
        }
    };
    return HomePage;
}(eui.Component));
__reflect(HomePage.prototype, "HomePage");
