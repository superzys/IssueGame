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
var ChoosePhotoPage = (function (_super) {
    __extends(ChoosePhotoPage, _super);
    function ChoosePhotoPage() {
        var _this = _super.call(this) || this;
        _this.name = "ChoosePhotoPage";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/Pages/ChoosePhotoPage.exml";
        return _this;
    }
    ChoosePhotoPage.prototype.uiCompHandler = function () {
        this.Cmp_Left = new Cmp.PhotoCmp();
        this.Cmp_Left.width = 446;
        this.Cmp_Left.height = 270;
        this.Cmp_Left.horizontalCenter = 0;
        this.Cmp_Left.y = 163;
        this.Gp_Photo.addChild(this.Cmp_Left);
        this.Cmp_Right = new Cmp.PhotoCmp();
        this.Cmp_Right.width = 446;
        this.Cmp_Right.height = 270;
        this.Cmp_Right.horizontalCenter = 0;
        this.Cmp_Right.y = 392;
        this.Gp_Photo.addChild(this.Cmp_Right);
        UICenter.getInstance().LocFitPage(this);
        this.Btn_Sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_Sure, this);
    };
    ChoosePhotoPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    ChoosePhotoPage.prototype.BtnClick_Sure = function () {
        var leftNum = this.Cmp_Left.GetCurIndex();
        var rightNum = this.Cmp_Right.GetCurIndex();
        var group = new SubmitPage(leftNum, rightNum);
        UICenter.getInstance().AddOnePage(group, true);
    };
    return ChoosePhotoPage;
}(eui.Component));
__reflect(ChoosePhotoPage.prototype, "ChoosePhotoPage");
