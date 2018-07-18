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
var Cmp;
(function (Cmp) {
    var CmpShowFontBox = (function (_super) {
        __extends(CmpShowFontBox, _super);
        function CmpShowFontBox() {
            var _this = _super.call(this) || this;
            _this.isChoosed = false;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
            _this.skinName = "resource/components/CmpShowFontBox.exml";
            return _this;
        }
        CmpShowFontBox.prototype.uiCompHandler = function () {
            this.ShowFont();
            this.ChangeFontShow();
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ThisFont, this);
        };
        CmpShowFontBox.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        CmpShowFontBox.prototype.SetFont = function (idx, str, fun, tarCmp) {
            this.isChoosed = false;
            this.CurFont = str;
            this.index = idx;
            this.callFun = fun;
            this.funTar = tarCmp;
            this.ShowFont();
        };
        CmpShowFontBox.prototype.IsChoosed = function (isCd) {
            this.isChoosed = isCd;
            this.ChangeFontShow();
        };
        CmpShowFontBox.prototype.GetCurFont = function () {
            return this.CurFont;
        };
        CmpShowFontBox.prototype.BtnClick_ThisFont = function () {
            if (this.callFun != undefined && !this.isChoosed) {
                this.callFun.call(this.funTar, this.index);
            }
        };
        CmpShowFontBox.prototype.ShowFont = function () {
            if (this.CurFont != undefined && this.Lab_Des != undefined) {
                this.Lab_Des.text = this.CurFont;
            }
        };
        CmpShowFontBox.prototype.ChangeFontShow = function () {
            if (this.isChoosed != undefined && this.Lab_Des != undefined) {
                this.Lab_Des.visible = !this.isChoosed;
            }
        };
        return CmpShowFontBox;
    }(eui.Component));
    Cmp.CmpShowFontBox = CmpShowFontBox;
    __reflect(CmpShowFontBox.prototype, "Cmp.CmpShowFontBox");
})(Cmp || (Cmp = {}));
