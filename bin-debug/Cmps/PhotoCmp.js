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
    var PhotoCmp = (function (_super) {
        __extends(PhotoCmp, _super);
        function PhotoCmp() {
            var _this = _super.call(this) || this;
            _this.MaxNum = 2;
            _this.index = 0;
            _this.index = 0;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
            _this.skinName = "resource/components/PhotoCmp.exml";
            return _this;
        }
        PhotoCmp.prototype.uiCompHandler = function () {
            this.Btn_Left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_PreOne, this);
            this.Btn_Right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_NextOne, this);
            this.ImgPhoto.source = "Photo_" + this.index + "_png";
        };
        PhotoCmp.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        PhotoCmp.prototype.GetCurIndex = function () {
            return this.index;
        };
        PhotoCmp.prototype.BtnClick_PreOne = function () {
            this.index--;
            if (this.index < 0) {
                this.index = 0;
            }
            this.ImgPhoto.source = "Photo_" + this.index + "_png";
        };
        PhotoCmp.prototype.BtnClick_NextOne = function () {
            this.index++;
            if (this.index > this.MaxNum) {
                this.index = this.MaxNum;
            }
            this.ImgPhoto.source = "Photo_" + this.index + "_png";
        };
        return PhotoCmp;
    }(eui.Component));
    Cmp.PhotoCmp = PhotoCmp;
    __reflect(PhotoCmp.prototype, "Cmp.PhotoCmp");
})(Cmp || (Cmp = {}));
