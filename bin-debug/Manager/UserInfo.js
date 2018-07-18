var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserInfo = (function () {
    function UserInfo() {
    }
    UserInfo.prototype.GetLoginReward = function () {
        var arr = [];
        for (var i = 0; i < this.UserGameInfo.LoginRewardArr.length; i++) {
            var oneDay = new LoginRewardStruct();
            oneDay.rewardNum = this.UserGameInfo.LoginRewardArr[i];
            oneDay.day = i;
            if (this.UserGameInfo.SignedNum >= i) {
                oneDay.isGained = true;
            }
            else {
                oneDay.isGained = false;
            }
            arr.push(oneDay);
        }
        return arr;
    };
    return UserInfo;
}());
__reflect(UserInfo.prototype, "UserInfo");
var LoginRewardStruct = (function () {
    function LoginRewardStruct() {
    }
    return LoginRewardStruct;
}());
__reflect(LoginRewardStruct.prototype, "LoginRewardStruct");
var AlLChapters = (function () {
    function AlLChapters() {
    }
    return AlLChapters;
}());
__reflect(AlLChapters.prototype, "AlLChapters");
var ChapterData = (function () {
    function ChapterData() {
    }
    return ChapterData;
}());
__reflect(ChapterData.prototype, "ChapterData");
var AllPlots = (function () {
    function AllPlots() {
    }
    return AllPlots;
}());
__reflect(AllPlots.prototype, "AllPlots");
var PlotData = (function () {
    function PlotData() {
    }
    return PlotData;
}());
__reflect(PlotData.prototype, "PlotData");
var OneDialog = (function () {
    function OneDialog() {
    }
    return OneDialog;
}());
__reflect(OneDialog.prototype, "OneDialog");
