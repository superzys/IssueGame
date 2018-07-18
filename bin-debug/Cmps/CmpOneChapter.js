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
var CmpOneChapter = (function (_super) {
    __extends(CmpOneChapter, _super);
    function CmpOneChapter() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "CmpOneChapter";
        return _this;
    }
    CmpOneChapter.prototype.uiCompHandler = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickChapter, this);
    };
    CmpOneChapter.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    CmpOneChapter.prototype.dataChanged = function () {
        this.cData = this.data;
        this.Lab_ChapterName.text = this.cData.Name + "";
        this.Lab_ChapterLv.text = this.cData._id + "";
        this.Gp_Lock.visible = !this.cData.IsUnLock;
        // let sunNum =  Math.floor(this.cData.HardLv / 10);
        var moonNum = Math.floor(this.cData.HardLv / 5);
        var starNum = Math.floor(this.cData.HardLv % 5);
        var childNum = this.Gp_Stars.numChildren;
        for (var i = 0; i < childNum; i++) {
            this.Gp_Stars.removeChildAt(0);
        }
        for (var i = 0; i < moonNum; i++) {
            var img = new eui.Image();
            ///可以直接通过 source 属性设置图片的源。
            img.source = "Img_Moon";
            this.Gp_Stars.addChild(img);
        }
        for (var i = 0; i < starNum; i++) {
            var img = new eui.Image();
            ///可以直接通过 source 属性设置图片的源。
            img.source = "Img_Star";
            this.Gp_Stars.addChild(img);
        }
    };
    CmpOneChapter.prototype.Btn_ClickChapter = function () {
        if (this.cData.IsUnLock) {
            var group = new GamePage(this.cData);
            UICenter.getInstance().AddOnePage(group, true);
        }
        else {
            var group = new Dg_LockChapterTip();
            UICenter.getInstance().AddOnePage(group);
        }
    };
    return CmpOneChapter;
}(eui.ItemRenderer));
__reflect(CmpOneChapter.prototype, "CmpOneChapter");
