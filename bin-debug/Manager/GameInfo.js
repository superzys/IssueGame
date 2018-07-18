var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameInfo = (function () {
    function GameInfo() {
    }
    return GameInfo;
}());
__reflect(GameInfo.prototype, "GameInfo");
var GmPoint = (function () {
    function GmPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return GmPoint;
}());
__reflect(GmPoint.prototype, "GmPoint");
