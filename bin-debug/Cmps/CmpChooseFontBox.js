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
    var CmpChooseFontBox = (function (_super) {
        __extends(CmpChooseFontBox, _super);
        function CmpChooseFontBox() {
            var _this = _super.call(this) || this;
            _this.ChooseIdx = -1;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
            _this.skinName = "resource/components/CmpChooseFontBox.exml";
            return _this;
        }
        CmpChooseFontBox.prototype.uiCompHandler = function () {
            this.ShowFont();
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ThisFont, this);
        };
        CmpChooseFontBox.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        CmpChooseFontBox.prototype.InitCmp = function (idx, fun, tarCmp) {
            this.ChooseIdx = -1;
            this.index = idx;
            this.callFun = fun;
            this.funTar = tarCmp;
            this.ShowFont();
        };
        CmpChooseFontBox.prototype.IsEmpty = function () {
            return this.ChooseIdx >= 0 ? false : true;
        };
        CmpChooseFontBox.prototype.GetCurFont = function () {
            return this.CurFont;
        };
        CmpChooseFontBox.prototype.SetFont = function (str, idx) {
            if (idx === void 0) { idx = -1; }
            this.ChooseIdx = idx;
            this.CurFont = str;
            this.ShowFont();
        };
        CmpChooseFontBox.prototype.BtnClick_ThisFont = function () {
            if (this.callFun != undefined && this.ChooseIdx >= 0) {
                this.callFun.call(this.funTar, this.index, this.ChooseIdx);
            }
        };
        CmpChooseFontBox.prototype.ShowFont = function () {
            if (this.CurFont != undefined && this.Lab_Des != undefined) {
                this.Lab_Des.text = this.CurFont;
            }
        };
        return CmpChooseFontBox;
    }(eui.Component));
    Cmp.CmpChooseFontBox = CmpChooseFontBox;
    __reflect(CmpChooseFontBox.prototype, "Cmp.CmpChooseFontBox");
})(Cmp || (Cmp = {}));
