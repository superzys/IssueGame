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
var CmpPlayerRankInfo = (function (_super) {
    __extends(CmpPlayerRankInfo, _super);
    function CmpPlayerRankInfo() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "CmpPlayerRankInfo";
        return _this;
    }
    CmpPlayerRankInfo.prototype.uiCompHandler = function () {
    };
    CmpPlayerRankInfo.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    CmpPlayerRankInfo.prototype.dataChanged = function () {
        this.cData = this.data;
        var ChapterId = parseInt(this.cData.ChapterId);
        var cpData = UserManger.getInstance().GetChapterData(ChapterId);
        this.Lab_Name.text = this.cData.nickName + "";
        this.Lab_Des.text = cpData.Name + "";
        this.Lab_Lv.text = "第" + this.cData.PveNum + "关";
        this.Lab_Rank.text = (this.cData.rankNum + 1) + "";
        this.Img_Photo.source = this.cData.avatarUrl;
        if (this.cData.rankNum < 3) {
            this.Lab_Rank.visible = false;
            this.Img_Rank.visible = true;
            this.Img_Rank.source = "Top_" + ((this.cData.rankNum + 1));
        }
        else {
            this.Lab_Rank.visible = true;
            this.Img_Rank.visible = false;
        }
    };
    return CmpPlayerRankInfo;
}(eui.ItemRenderer));
__reflect(CmpPlayerRankInfo.prototype, "CmpPlayerRankInfo");
