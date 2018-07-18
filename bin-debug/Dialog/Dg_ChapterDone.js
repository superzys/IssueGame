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
 * 通关了一章节的时候
 * 下一章节是否需要付费解锁
 */
var Dg_ChapterDone = (function (_super) {
    __extends(Dg_ChapterDone, _super);
    function Dg_ChapterDone(cpData, curPlot, fun, tar) {
        var _this = _super.call(this) || this;
        _this.cpData = cpData;
        _this.curPlot = curPlot;
        _this.CallFun = fun;
        _this.funtar = tar;
        _this.name = "Dg_ChapterDone";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/Dialog/Dg_ChapterDone.exml";
        return _this;
    }
    Dg_ChapterDone.prototype.uiCompHandler = function () {
        UICenter.getInstance().LocFitPage(this);
        this.isDone = false;
        var isLockNext = UserManger.getInstance().IsLockNextChapter(this.cpData._id);
        this.NexChapterState = isLockNext;
        this.Btn_JumpChapter.visible = isLockNext <= 1;
        this.Btn_Share_InGame.visible = isLockNext > 1;
        this.Btn_Return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickReturn, this);
        this.Btn_Share_InGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickShare, this);
        this.Btn_JumpChapter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Btn_ClickNextChapter, this);
    };
    Dg_ChapterDone.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    Dg_ChapterDone.prototype.Btn_ClickShare = function () {
        if (!this.isDone) {
            this.isDone = true;
            UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
            if (this.CallFun != undefined) {
                this.CallFun.call(this.funtar);
            }
        }
    };
    Dg_ChapterDone.prototype.Btn_ClickReturn = function () {
        if (!this.isDone) {
            this.isDone = true;
            UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
            UICenter.getInstance().RemoveOnePage("GamePage");
        }
    };
    Dg_ChapterDone.prototype.Btn_ClickNextChapter = function () {
        if (!this.isDone) {
            this.isDone = true;
            this.Deal_SendReqNextStep();
        }
    };
    Dg_ChapterDone.prototype.Deal_SendReqNextStep = function () {
        return __awaiter(this, void 0, void 0, function () {
            var unlockChapterReq, Msg, getData, ResObj, gainPlotObj, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.NexChapterState == 1)) return [3 /*break*/, 2];
                        unlockChapterReq = new WxGainChapterRewardReqNet();
                        unlockChapterReq.SessonId = UserManger.getInstance().userInfoObj.UserGameInfo.SessonId;
                        unlockChapterReq.PlotId = this.curPlot._id + "";
                        unlockChapterReq.ChapterId = this.cpData._id + "";
                        Msg = JSON.stringify(unlockChapterReq);
                        return [4 /*yield*/, HttpFetch.getInstance().HttpPost("GainChapterReward", Msg)];
                    case 1:
                        getData = _a.sent();
                        if (getData != undefined) {
                            ResObj = JSON.parse(getData);
                            if (ResObj.msg != undefined) {
                                gainPlotObj = JSON.parse(ResObj.msg);
                                if (gainPlotObj.error != undefined) {
                                    console.log("通关错误" + gainPlotObj.error);
                                }
                                else {
                                    obj = gainPlotObj;
                                    UserManger.getInstance().userInfoObj.UserGameInfo.Gold = obj.UserGoldNum;
                                    if (obj.IsSuccess) {
                                        UserManger.getInstance().userInfoObj.UserGameInfo.ChapterId++;
                                        UserManger.getInstance().userInfoObj.UserGameInfo.PlotId = obj.PlotId;
                                    }
                                    UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
                                    if (this.CallFun != undefined) {
                                        this.CallFun.call(this.funtar);
                                    }
                                    return [2 /*return*/];
                                }
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (this.NexChapterState == 0) {
                            UICenter.getInstance().RemoveOnePage("Dg_ChapterDone");
                            if (this.CallFun != undefined) {
                                this.CallFun.call(this.funtar);
                            }
                        }
                        else {
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Dg_ChapterDone;
}(eui.Component));
__reflect(Dg_ChapterDone.prototype, "Dg_ChapterDone");
