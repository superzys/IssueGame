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
var CmpDayReward = (function (_super) {
    __extends(CmpDayReward, _super);
    function CmpDayReward() {
        var _this = _super.call(this) || this;
        _this.skinName = "CmpDayReward";
        return _this;
    }
    CmpDayReward.prototype.dataChanged = function () {
        this.cData = this.data;
        // console.log("cmp day item dataChanged " + this.cData.day);
        this.Lab_Num.text = this.cData.rewardNum + "";
        this.Lab_Day.text = "第" + ToolShowChange.GetDayDes(this.cData.day + 1) + "天";
        this.Img_BkNot.visible = !this.cData.isGained;
    };
    return CmpDayReward;
}(eui.ItemRenderer));
__reflect(CmpDayReward.prototype, "CmpDayReward");
