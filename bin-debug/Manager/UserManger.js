var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserManger = (function () {
    function UserManger() {
        this.userInfoObj = new UserInfo();
        //存储每个章节关卡对象。
        this.AllCpPlotArr = [];
        this.AllPlotArr = [];
    }
    UserManger.getInstance = function () {
        if (this.instance == null) {
            this.instance = new UserManger();
        }
        return this.instance;
    };
    // var param
    UserManger.prototype.SetUserInfo = function (userObj) {
        this.userInfoObj.WxUserInfo = userObj;
    };
    UserManger.prototype.SetUserGameInfo = function (userObj) {
        //存下userID
        egret.localStorage.setItem("WxIssue_UserId", userObj.UserId);
        this.userInfoObj.UserGameInfo = userObj;
    };
    UserManger.prototype.InitPlotData = function () {
        this.allPlotObj = RES.getRes("IssueData_json");
        this.AllChaptersInfo = RES.getRes("ChapterData_json");
        for (var i = 0; i < this.allPlotObj.All.length; i++) {
            var onePlot = this.allPlotObj.All[i];
            this.AllPlotArr[onePlot._id] = onePlot;
        }
        for (var i = 0; i < this.AllChaptersInfo.All.length; i++) {
            var OneChapter = this.AllChaptersInfo.All[i];
            if (this.AllCpPlotArr[i] == undefined) {
                this.AllCpPlotArr[i] = new AllPlots();
                this.AllCpPlotArr[i]._id = OneChapter._id;
                this.AllCpPlotArr[i].All = [];
            }
            var curChapter = this.AllCpPlotArr[i];
            for (var j = 0; j < OneChapter.PlotIDArr.length; j++) {
                curChapter.All.push(this.AllPlotArr[OneChapter.PlotIDArr[j]]);
            }
        }
    };
    UserManger.prototype.GetAllPlotObjInChapter = function (chapterId) {
        if (this.AllCpPlotArr[chapterId - 1] != undefined) {
            return this.AllCpPlotArr[chapterId - 1];
        }
        return undefined;
    };
    UserManger.prototype.GetChapterData = function (chapterId) {
        if (this.AllChaptersInfo.All[chapterId - 1] != undefined) {
            return this.AllChaptersInfo.All[chapterId - 1];
        }
        return undefined;
    };
    UserManger.prototype.IsLastChapter = function () {
        if ((this.userInfoObj.UserGameInfo.ChapterId + 1) >= this.AllCpPlotArr.length) {
            return true;
        }
        return false;
    };
    UserManger.prototype.IsLockNextChapter = function (curChapterId) {
        // if (curChapterId < this.userInfoObj.UserGameInfo.ChapterId)//已经打过这个章节了
        // {
        // 	return false;
        // }
        if (this.AllChaptersInfo.All.length > (curChapterId + 1)) {
            var nextChapter = this.AllChaptersInfo.All[curChapterId + 0];
            if (nextChapter != undefined && nextChapter._id > this.userInfoObj.UserGameInfo.ChapterId) {
                if (nextChapter.ChargeNum > 0) {
                    return 2;
                }
                return 1;
            }
        }
        return 0;
    };
    UserManger.prototype.IsPassedThePlot = function (curChapterId, curPlotId) {
        if (this.userInfoObj.UserGameInfo.PassedPlotIdArr.indexOf(parseInt(curPlotId + "")) >= 0) {
            return true;
        }
        // if (curChapterId < this.userInfoObj.UserGameInfo.ChapterId)//已经打过这个章节了
        // {
        // 	return true;
        // } else if (curChapterId == this.userInfoObj.UserGameInfo.ChapterId) {//本章节 已经打到后面了
        // 	let curPlotIndex = this.AllChaptersInfo.All[curChapterId].PlotIDArr.indexOf(curPlotId);
        // 	let userPlotId: number = parseInt(this.userInfoObj.UserGameInfo.PlotId);
        // 	let userPlotIndex = this.AllChaptersInfo.All[curChapterId].PlotIDArr.indexOf(userPlotId);
        // 	if (curPlotIndex < userPlotIndex) {
        // 		return true;
        // 	}
        // }
        return false;
    };
    UserManger.prototype.GetNextChapter = function (curChapterId) {
        if ((curChapterId + 1) >= this.AllCpPlotArr.length) {
            return undefined;
        }
        // this.userInfoObj.UserGameInfo.ChapterId++;
        var curChapter = this.AllCpPlotArr[curChapterId];
        return curChapter;
    };
    return UserManger;
}());
__reflect(UserManger.prototype, "UserManger");
