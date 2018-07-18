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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 游戏界面
 */
var GamePage = (function (_super) {
    __extends(GamePage, _super);
    function GamePage(cData) {
        var _this = _super.call(this) || this;
        _this.data = cData;
        _this.name = "GamePage";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/Pages/GamePage.exml";
        return _this;
    }
    GamePage.prototype.uiCompHandler = function () {
        UICenter.getInstance().LocFitPage(this);
        console.log("\t\tGamePage show ");
        this.ShowGameData();
        this.Btn_Tip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ShowTip, this);
        this.Btn_ShareTIp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ShareGame, this);
        this.Btn_ReStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_ReStart, this);
    };
    GamePage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    /**
     * 显示本章节内容;
     */
    GamePage.prototype.ShowGameData = function () {
        this.ChoosedCmpArr = [];
        this.AllShowFontCmpArr = [];
        if (this.data != undefined) {
            this.AllPlotsObj = UserManger.getInstance().GetAllPlotObjInChapter(this.data._id);
            var UserGameInfo = UserManger.getInstance().userInfoObj.UserGameInfo;
            var curCpAllPlotArr = UserManger.getInstance().GetAllPlotObjInChapter(this.data._id);
            this.CurPlotIndex = 0;
            if (UserGameInfo.ChapterId == this.data._id) {
                var curPlotId = parseInt(UserGameInfo.PlotId);
                for (var i = 0; i < curCpAllPlotArr.All.length; i++) {
                    if (curCpAllPlotArr.All[i]._id == curPlotId) {
                        this.CurPlotIndex = i;
                        break;
                    }
                }
            }
            else {
            }
            this.CurPlot = this.AllPlotsObj.All[this.CurPlotIndex];
            this.StartShowUI();
        }
    };
    GamePage.prototype.StartShowUI = function () {
        this.Lab_Gold.text = UserManger.getInstance().userInfoObj.UserGameInfo.Gold + "";
        this.ShowTalkContent();
        this.AddShowChooseAnswers();
        this.AddAllOptinsFontCmp();
    };
    GamePage.prototype.ShowTalkContent = function () {
        // this.data.
        var dsListHeros = this.CurPlot.DialogsArr;
        this.List_Talks.dataProvider = new eui.ArrayCollection(dsListHeros);
        this.List_Talks.itemRenderer = CmpOneTalk;
    };
    /**
     * 添加显示选择答案的组件;
     */
    GamePage.prototype.AddShowChooseAnswers = function () {
        while (this.Gp_Choosed.numChildren > 0) {
            this.Gp_Choosed.removeChildAt(0);
        }
        this.ChoosedCmpArr = [];
        for (var i = 0; i < this.CurPlot.RightAnsArr.length; i++) {
            var oneCmp = new Cmp.CmpChooseFontBox();
            this.Gp_Choosed.addChild(oneCmp);
            oneCmp.InitCmp(i, this.ChooseFontCmpClick, this);
            this.ChoosedCmpArr.push(oneCmp);
        }
    };
    GamePage.prototype.AddAllOptinsFontCmp = function () {
        while (this.Gp_Show.numChildren > 0) {
            this.Gp_Show.removeChildAt(0);
        }
        this.AllShowFontCmpArr = [];
        this.allFontArr = [];
        var WrongAnsArr = this.CurPlot.WrongAnsArr.concat();
        var MorNum = this.CurPlot.OptionNum - this.CurPlot.RightAnsArr.length - this.CurPlot.WrongAnsArr.length;
        if (MorNum > 0) {
            while (MorNum > 0) {
                WrongAnsArr.shift();
                MorNum--;
            }
        }
        this.allFontArr = this.CurPlot.RightAnsArr.concat(WrongAnsArr);
        this.allFontArr.sort(function () {
            return 0.5 - Math.random();
        });
        var optNum = Math.min(this.allFontArr.length, this.CurPlot.OptionNum);
        for (var i = 0; i < optNum; i++) {
            var oneCmp = new Cmp.CmpShowFontBox();
            this.Gp_Show.addChild(oneCmp);
            oneCmp.SetFont(i, this.allFontArr[i], this.ShowFontCmpClick, this);
            this.AllShowFontCmpArr.push(oneCmp);
        }
    };
    GamePage.prototype.ShowFontCmpClick = function (idx) {
        console.log("click " + idx);
        var oneCmp = this.AllShowFontCmpArr[idx];
        var str = this.allFontArr[idx];
        oneCmp.IsChoosed(true);
        for (var i = 0; i < this.ChoosedCmpArr.length; i++) {
            var chsdCmp = this.ChoosedCmpArr[i];
            if (chsdCmp.IsEmpty()) {
                chsdCmp.SetFont(str, idx);
                break;
            }
        }
        this.CheckIsWin();
    };
    /**
     * 把选中的点取消掉
     * 还回去 下面的显示列表;
     */
    GamePage.prototype.ChooseFontCmpClick = function (idx, chooseIdx) {
        var oneCmp = this.ChoosedCmpArr[idx];
        oneCmp.SetFont("");
        var showCmp = this.AllShowFontCmpArr[chooseIdx];
        showCmp.IsChoosed(false);
    };
    GamePage.prototype.CheckIsWin = function () {
        var isHasWrong = false;
        for (var i = 0; i < this.ChoosedCmpArr.length; i++) {
            var chsdCmp = this.ChoosedCmpArr[i];
            if (chsdCmp.IsEmpty()) {
                return;
            }
            if (this.CurPlot.RightAnsArr[i] != chsdCmp.GetCurFont()) {
                isHasWrong = true;
            }
        }
        //到这里基本就是 全都有答案了
        var group = undefined;
        if (isHasWrong) {
            group = new Dg_WrongAnswer(this.Deal_RestartThisPlot, this);
        }
        else {
            //判断后面还有关卡吗
            if ((this.CurPlotIndex + 1) >= this.AllPlotsObj.All.length) {
                group = new Dg_ChapterDone(this.data, this.CurPlot, this.Deal_NextChapter, this);
            }
            else {
                var isPassed = UserManger.getInstance().IsPassedThePlot(this.data._id, this.CurPlot._id);
                if (isPassed) {
                    this.Deal_ContinuePlot();
                    return;
                }
                //如果是第一次破关的话
                group = new Dg_RightAnswer(this.data, this.CurPlot, this.Deal_ContinuePlot, this);
            }
        }
        UICenter.getInstance().AddOnePage(group);
    };
    /**
     * 点击提示的话。 扣钱判断
     */
    GamePage.prototype.BtnClick_ShowTip = function () {
        if (UserManger.getInstance().userInfoObj.UserGameInfo.Gold >= this.CurPlot.TipCostGold) {
            this.Deal_SendReqCostTip(); //不等服务器返回直接  进行提示
            var getIndex = Math.floor((0.5 + Math.random()) * (this.CurPlot.RightAnsArr.length - 1));
            var tipStr = this.CurPlot.RightAnsArr[getIndex];
            var chsdCmp = this.ChoosedCmpArr[getIndex];
            //找到这个答案的位置
            for (var i = 0; i < this.AllShowFontCmpArr.length; i++) {
                var showCmp = this.AllShowFontCmpArr[i];
                if (showCmp.GetCurFont() == tipStr) {
                    //是这个的话
                    chsdCmp.SetFont(tipStr, i);
                    showCmp.IsChoosed(true);
                    break;
                }
            }
            UserManger.getInstance().userInfoObj.UserGameInfo.Gold -= this.CurPlot.TipCostGold;
            this.Lab_Gold.text = UserManger.getInstance().userInfoObj.UserGameInfo.Gold + "";
        }
        else {
            console.log("钱不够");
        }
    };
    GamePage.prototype.Deal_SendReqCostTip = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    GamePage.prototype.BtnClick_ShareGame = function () {
    };
    GamePage.prototype.BtnClick_ReStart = function () {
        this.Deal_RestartThisPlot();
    };
    GamePage.prototype.Deal_RestartThisPlot = function () {
        for (var i = 0; i < this.ChoosedCmpArr.length; i++) {
            var chsdCmp = this.ChoosedCmpArr[i];
            chsdCmp.SetFont("");
        }
        for (var i = 0; i < this.AllShowFontCmpArr.length; i++) {
            var showCmp = this.AllShowFontCmpArr[i];
            showCmp.IsChoosed(false);
        }
    };
    GamePage.prototype.Deal_ContinuePlot = function () {
        this.CurPlotIndex++;
        this.CurPlot = this.AllPlotsObj.All[this.CurPlotIndex];
        console.log("下一关" + this.CurPlotIndex + "plot id " + this.CurPlot._id);
        this.StartShowUI();
    };
    GamePage.prototype.Deal_NextChapter = function () {
        this.AllPlotsObj = UserManger.getInstance().GetNextChapter(this.data._id);
        if (this.AllPlotsObj != undefined) {
            this.CurPlotIndex = 0;
            this.CurPlot = this.AllPlotsObj.All[this.CurPlotIndex];
            this.data = UserManger.getInstance().GetChapterData(this.AllPlotsObj._id);
            console.log("下一章节" + this.CurPlotIndex + "plot id " + this.CurPlot._id);
            this.StartShowUI();
        }
    };
    return GamePage;
}(eui.Component));
__reflect(GamePage.prototype, "GamePage");
