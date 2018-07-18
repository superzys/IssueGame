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
var Dg_WrongAnswer = (function (_super) {
    __extends(Dg_WrongAnswer, _super);
    function Dg_WrongAnswer(fun, tar) {
        var _this = _super.call(this) || this;
        _this.CallFun = fun;
        _this.funtar = tar;
        _this.name = "Dg_WrongAnswer";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/Dialog/Dg_WrongAnswer.exml";
        return _this;
    }
    Dg_WrongAnswer.prototype.uiCompHandler = function () {
        UICenter.getInstance().LocFitPage(this);
        this.isDone = false;
        this.tweenClose = egret.Tween.get(this);
        this.tweenClose.wait(2000);
        this.tweenClose.call(this.Btn_ClickLockTip, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickLockTip, this);
    };
    // private Btn_Jump: eui.Button;
    Dg_WrongAnswer.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    Dg_WrongAnswer.prototype.Btn_ClickLockTip = function () {
        if (!this.isDone) {
            this.isDone = true;
            this.tweenClose.pause();
            UICenter.getInstance().RemoveOnePage("Dg_WrongAnswer");
            if (this.CallFun != undefined) {
                this.CallFun.call(this.funtar);
            }
        }
    };
    return Dg_WrongAnswer;
}(eui.Component));
__reflect(Dg_WrongAnswer.prototype, "Dg_WrongAnswer");
