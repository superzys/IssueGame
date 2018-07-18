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
var RankPage = (function (_super) {
    __extends(RankPage, _super);
    function RankPage() {
        var _this = _super.call(this) || this;
        _this.name = "RankPage";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/Pages/RankPage.exml";
        return _this;
    }
    RankPage.prototype.uiCompHandler = function () {
        console.log("\t\tGoodsUI uiCompHandler");
        UICenter.getInstance().LocFitPageWithComponent(this, [this.Sc_List]);
        this.ShowSelfInfo();
        var arr = [];
        var dsListHeros = arr;
        this.rankArr = new eui.ArrayCollection(dsListHeros);
        this.List_Rank.dataProvider = this.rankArr;
        this.List_Rank.itemRenderer = CmpPlayerRankInfo;
        this.GetRankData();
        this.Tab_PVE.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_PveRank, this);
        this.tab_Tianti.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_TiantiRank, this);
        this.Tab_Send.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnClick_SendRank, this);
        // this.verticalCenter
    };
    RankPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    RankPage.prototype.ShowSelfInfo = function () {
        var UserGameInfo = UserManger.getInstance().userInfoObj.UserGameInfo;
        var WxUserInfo = UserManger.getInstance().userInfoObj.WxUserInfo;
        this.Img_Photo.source = WxUserInfo.avatarUrl;
        this.Lab_Name.text = WxUserInfo.nickName;
        this.Lab_Lv.text = "第" + UserGameInfo.PassedPlotIdArr.length + "关";
        var cpData = UserManger.getInstance().GetChapterData(UserGameInfo.ChapterId);
        this.Lab_Des.text = cpData.Name;
    };
    RankPage.prototype.GetRankData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reqNet, Msg, getData, ResObj, msgObj, rankResObj, i, oneUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reqNet = new WxGetRankReqNet();
                        reqNet.SessonId = UserManger.getInstance().userInfoObj.UserGameInfo.SessonId;
                        Msg = JSON.stringify(reqNet);
                        return [4 /*yield*/, HttpFetch.getInstance().HttpPost("GetRankInfo", Msg)];
                    case 1:
                        getData = _a.sent();
                        if (getData != undefined) {
                            ResObj = JSON.parse(getData);
                            if (ResObj.msg != undefined) {
                                msgObj = JSON.parse(ResObj.msg);
                                if (msgObj.error != undefined) {
                                }
                                else {
                                    rankResObj = msgObj;
                                    for (i = 0; i < rankResObj.RankArr.length; i++) {
                                        oneUser = rankResObj.RankArr[i];
                                        this.rankArr.addItem(oneUser);
                                    }
                                    return [2 /*return*/];
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RankPage.prototype.BtnClick_PveRank = function () {
        console.log("\t\tmain pve clickbtn ");
    };
    RankPage.prototype.BtnClick_TiantiRank = function () {
        console.log("\t\tmain tianti clickbtn ");
    };
    RankPage.prototype.BtnClick_SendRank = function () {
        console.log("\t\tmain baby clickbtn ");
    };
    return RankPage;
}(eui.Component));
__reflect(RankPage.prototype, "RankPage");
