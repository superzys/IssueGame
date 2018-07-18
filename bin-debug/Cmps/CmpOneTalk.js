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
var CmpOneTalk = (function (_super) {
    __extends(CmpOneTalk, _super);
    function CmpOneTalk() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "CmpOneTalk";
        return _this;
    }
    CmpOneTalk.prototype.uiCompHandler = function () {
    };
    CmpOneTalk.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    CmpOneTalk.prototype.dataChanged = function () {
        this.cData = this.data;
        if (this.cData.IsLeft) {
            this.currentState = "left";
        }
        else {
            this.currentState = "right";
        }
        this.Lab_Words.text = this.cData.Words;
        this.Img_Photo.source = "Photo_" + this.cData.PhotoId + "_png";
        // this.Lab_Num.text = this.cData.rewardNum + "";
        // this.Lab_Day.text = "第" + ToolShowChange.GetDayDes(this.cData.day + 1) + "天";
        // this.Img_BkNot.visible = !this.cData.isGained;
    };
    return CmpOneTalk;
}(eui.ItemRenderer));
__reflect(CmpOneTalk.prototype, "CmpOneTalk");
