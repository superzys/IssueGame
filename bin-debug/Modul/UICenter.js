var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UICenter = (function () {
    function UICenter() {
        this.PagesArr = [];
        this.OpPagesArr = [];
    }
    UICenter.getInstance = function () {
        if (this.instance == null) {
            this.instance = new UICenter();
        }
        return this.instance;
    };
    UICenter.prototype.SetState = function (stg, lay) {
        this.stage = stg;
        this.baseLayer = lay;
        this.OpLayer = new eui.UILayer;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.OpLayer.touchThrough = true;
        this.OpLayer.touchChildren = true;
        this.OpLayer.width = stageW;
        this.OpLayer.height = stageH;
        // let gp: eui.Group = new eui.Group();
        // gp.width = 200;
        // gp.height = stageH;
        // gp.touchEnabled = true;
        // this.OpLayer.addChild(gp);
        // this.stage.addChild(this.OpLayer);
    };
    UICenter.prototype.TouchEndOp_OpLayer = function (evt) {
        // console.log("op op layer  end ");
        this.TouchEnd_OpLayer(evt);
    };
    UICenter.prototype.TouchStart_OpLayer = function (evt) {
        // console.log("op page start  ");
        if (this.OpPagesArr.length > 0) {
            this.pt = new GmPoint(evt.stageX, evt.stageY);
            // this.OpPagesArr.shift();
            // console.log("op layer click return ");
            this.OpLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEndOp_OpLayer, this, true);
            return;
        }
    };
    UICenter.prototype.TouchMove_OpLayer = function (evt) {
        // console.log("op layer move  ");
        if (this.OpPagesArr.length > 0) {
            if (this.pt == undefined) {
                this.pt = new GmPoint(evt.stageX, evt.stageY);
            }
            var cmp = this.OpPagesArr[this.OpPagesArr.length - 1];
            var moveX = Math.abs(evt.stageX - this.pt.x);
            if (moveX > Math.abs(evt.stageY - this.pt.y)) {
                cmp.horizontalCenter = evt.stageX - this.pt.x;
                if (cmp.horizontalCenter < 0) {
                    cmp.horizontalCenter = 0;
                }
            }
            // this.OpPagesArr.shift();
            // console.log("op layer click return ");
            return;
        }
    };
    UICenter.prototype.TouchEnd_OpLayer = function (evt) {
        // console.log("op page move end ");
        if (this.OpPagesArr.length > 0 && this.pt != undefined) {
            var cmp_1 = this.OpPagesArr[this.OpPagesArr.length - 1];
            var moveX = (evt.stageX - this.pt.x);
            var endX_1 = 0;
            if (moveX > this.stage.stageWidth * 0.4) {
                this.OpPagesArr.splice(this.OpPagesArr.length - 1, 1);
                endX_1 = this.stage.stageWidth + 10;
            }
            else {
                endX_1 = 0;
            }
            var baseLayer_1 = this.baseLayer;
            egret.Tween.get(cmp_1).to({ horizontalCenter: endX_1 }, 300, egret.Ease.sineIn)
                .call(function () {
                if (endX_1 > 0) {
                    baseLayer_1.removeChild(cmp_1);
                }
            });
            this.pt = undefined;
            this.OpLayer.removeEventListener(egret.TouchEvent.TOUCH_END, this.TouchEndOp_OpLayer, this, true);
            // this.OpPagesArr.shift();
            // console.log("op layer click return ");
            return;
        }
    };
    UICenter.prototype.TouchCancel_OpLayer = function (evt) {
        // console.log("op page  cancel ");
        this.TouchEnd_OpLayer(evt);
    };
    UICenter.prototype.TouchOutSide_OpLayer = function (evt) {
        // console.log("op page  outside ");
        this.TouchEnd_OpLayer(evt);
    };
    /**
     * 添加一页上来
     */
    UICenter.prototype.AddOnePage = function (page, isCanReturn) {
        if (isCanReturn === void 0) { isCanReturn = false; }
        page.verticalCenter = 0;
        page.horizontalCenter = 0;
        this.baseLayer.addChild(page);
        this.PagesArr.push(page);
        if (isCanReturn) {
            this.OpPagesArr.push(page);
            page.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.TouchStart_OpLayer, this, true);
            page.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.TouchMove_OpLayer, this, true);
            page.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEnd_OpLayer, this, true);
            page.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.TouchCancel_OpLayer, this, true);
            page.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.TouchOutSide_OpLayer, this, true);
        }
    };
    UICenter.prototype.RemoveOnePage = function (pageName) {
        var page = undefined;
        for (var i = 0; i < this.PagesArr.length; i++) {
            if (this.PagesArr[i].name == pageName) {
                page = this.PagesArr[i];
                this.PagesArr.splice(i, 1);
                break;
            }
        }
        if (this.OpPagesArr.indexOf(page) >= 0) {
            var idx = this.OpPagesArr.indexOf(page);
            this.OpPagesArr.splice(idx, 1);
        }
        if (page != undefined) {
            this.baseLayer.removeChild(page);
        }
    };
    /**
     * 根据自适应规则 重新匹配所有元素
     */
    UICenter.prototype.LocFitPage = function (page) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var oldW = page.width;
        var oldH = page.height;
        page.width = stageW;
        page.height = stageH;
        for (var i = 0; i < page.numChildren; i++) {
            var child = page.getChildAt(i);
            if (child.x > 0) {
                child.x = child.x / oldW * page.width;
            }
            if (child.y > 0) {
                child.y = child.y / oldH * page.height;
            }
        }
    };
    UICenter.prototype.LocFitPageWithComponent = function (page, cmpArr) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var oldW = page.width;
        var oldH = page.height;
        page.width = stageW;
        page.height = stageH;
        for (var i = 0; i < page.numChildren; i++) {
            var child = page.getChildAt(i);
            if (child.x > 0) {
                child.x = child.x / oldW * page.width;
            }
            if (child.y > 0) {
                child.y = child.y / oldH * page.height;
            }
        }
        for (var i = 0; i < cmpArr.length; i++) {
            var child = cmpArr[i];
            child.height = child.height / oldH * stageH;
        }
    };
    return UICenter;
}());
__reflect(UICenter.prototype, "UICenter");
