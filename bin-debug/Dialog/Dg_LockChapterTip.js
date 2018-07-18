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
var Dg_LockChapterTip = (function (_super) {
    __extends(Dg_LockChapterTip, _super);
    function Dg_LockChapterTip() {
        var _this = _super.call(this) || this;
        _this.name = "Dg_LockChapterTip";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/Dialog/Dg_LockChapterTip.exml";
        return _this;
    }
    Dg_LockChapterTip.prototype.uiCompHandler = function () {
        UICenter.getInstance().LocFitPage(this);
        this.isDone = false;
        this.tweenClose = egret.Tween.get(this);
        this.tweenClose.wait(2000);
        this.tweenClose.call(this.Btn_ClickLockTip, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickLockTip, this);
    };
    Dg_LockChapterTip.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    Dg_LockChapterTip.prototype.Btn_ClickLockTip = function () {
        if (!this.isDone) {
            this.isDone = true;
            this.tweenClose.pause();
            UICenter.getInstance().RemoveOnePage("Dg_LockChapterTip");
        }
    };
    return Dg_LockChapterTip;
}(eui.Component));
__reflect(Dg_LockChapterTip.prototype, "Dg_LockChapterTip");
