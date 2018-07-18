var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoginSendNet = (function () {
    function LoginSendNet(userInfo) {
        this.nickName = userInfo.nickName;
        this.gender = userInfo.gender;
        this.city = userInfo.city;
        this.province = userInfo.province;
        this.country = userInfo.country;
        this.avatarUrl = userInfo.avatarUrl;
    }
    return LoginSendNet;
}());
__reflect(LoginSendNet.prototype, "LoginSendNet");
var LoginResNet = (function () {
    function LoginResNet() {
    }
    return LoginResNet;
}());
__reflect(LoginResNet.prototype, "LoginResNet");
var WxLoginRewardReqNet = (function () {
    function WxLoginRewardReqNet() {
    }
    return WxLoginRewardReqNet;
}());
__reflect(WxLoginRewardReqNet.prototype, "WxLoginRewardReqNet");
var WxLoginRewardResNet = (function () {
    function WxLoginRewardResNet() {
    }
    return WxLoginRewardResNet;
}());
__reflect(WxLoginRewardResNet.prototype, "WxLoginRewardResNet");
