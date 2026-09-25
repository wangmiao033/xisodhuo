var t = require;
var e = module;
var o = exports;
var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        }),
    a =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                a = arguments.length,
                r = a < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; 0 <= s; s--)
                    (i = t[s]) && (r = (a < 3 ? i(r) : 3 < a ? i(e, o, r) : i(e, o)) || r);
            return 3 < a && r && Object.defineProperty(e, o, r), r;
        };
Object.defineProperty(o, "__esModule", {value: !0});
var r,
    s = t("AudioUtils"),
    c = t("GameMgr"),
    l = t("content-adapter"),
    p = t("GameObject"),
    u = t("DebugUtil"),
    t = (e = cc._decorator).ccclass,
    t =
        (e.property,
        i(d, (r = p.GameObject)),
        (d.prototype.onLoad = function () {
            this._moduleConfig || u.default.getNodeParentTree(this.node),
                this._moduleConfig.not_block || this.node.addComponent(cc.BlockInputEvents),
                this._moduleConfig.isFullScreen && this.node.addComponent(l.default),
                this._moduleConfig.isBg &&
                    (this._addBg(), this._moduleConfig.touchEmpty && (this.addBlockNode(), this._addTip()));
        }),
        (d.prototype._addBg = function () {
            if (!this._nod_bgMask) {
                (this._nod_bgMask = new cc.Node()),
                    this.node.addChild(this._nod_bgMask),
                    (this._nod_bgMask.zIndex = cc.macro.MIN_ZINDEX),
                    this._nod_bgMask.addComponent(cc.BlockInputEvents);
                for (
                    var t = cc.view.getDesignResolutionSize().width,
                        e = cc.view.getDesignResolutionSize().height,
                        o = t * e * 4,
                        n = new Uint8Array(o),
                        i = 0;
                    i < o;
                    i += 4
                )
                    (n[i] = 0), (n[i + 1] = 0), (n[i + 2] = 0), (n[i + 3] = 100);
                var a = new cc.Texture2D();
                a.initWithData(n, cc.Texture2D.PixelFormat.RGBA8888, t, e),
                    ((e = this._nod_bgMask.addComponent(cc.Sprite)).spriteFrame = new cc.SpriteFrame()),
                    e.spriteFrame.setTexture(a),
                    this._nod_bgMask.addComponent(l.default),
                    (this._nod_bgMask.scale = 10);
            }
        }),
        (d.prototype._addTip = function () {
            var t, e;
            this._tip ||
                ((this._tip = new cc.Node()),
                (t = this._tip.addComponent(cc.Widget)),
                ((e = this._tip.addComponent(cc.Label)).fontSize = 26),
                (e.string = "点击空白处关闭"),
                ((e = this._tip.addComponent(cc.LabelOutline)).color = new cc.Color().fromHEX("#8B612F")),
                (e.width = 3),
                this.node.addChild(this._tip),
                (this._tip.anchorY = 0),
                (t.isAlignBottom = !0),
                (t.bottom = -this._tip.height - 10),
                (t.horizontalCenter = 0),
                this._nod_bgMask.on(cc.Node.EventType.TOUCH_START, this.onTouchBgMask, this));
        }),
        (d.prototype.addBlockNode = function () {
            this._blockNode ||
                ((this._blockNode = new cc.Node()),
                this._blockNode.addComponent(cc.BlockInputEvents),
                (this._blockNode.anchorY = this.node.anchorY),
                (this._blockNode.anchorX = this.node.anchorX),
                (this._blockNode.width = this.node.width),
                (this._blockNode.height = this.node.height),
                this.node.addChild(this._blockNode),
                (this._blockNode.zIndex = cc.macro.MIN_ZINDEX));
        }),
        (d.prototype.updateTipPos = function () {
            var t;
            !this._tip || ((t = this._tip.getComponent(cc.Widget)) && t.updateAlignment());
        }),
        (d.prototype.onTouchBgMask = function () {
            cc.log("onTouchBgMask"), this._tip.active && this.closeMe();
        }),
        (d.prototype.closeMe = function () {
            this.node.active && ((this.callback = null), c.gm.ui.closeModule(this._moduleConfig));
        }),
        (d.prototype.hideCloseTip = function () {
            this._tip && cc.isValid(this._tip) && (this._tip.active = !1);
        }),
        (d.prototype.showCloseTip = function () {
            this._tip.active = !0;
        }),
        (d.prototype.setModuleConfig = function (t) {
            this._moduleConfig = t;
        }),
        (d.prototype.getConfig = function () {
            return this._moduleConfig;
        }),
        (d.prototype.updateUI = function () {}),
        (d.prototype.onShowActionEnd = function () {}),
        (d.prototype.hide = function () {
            this.node.active = !1;
        }),
        (d.prototype.show = function () {}),
        (d.prototype.onBtnClose = function () {
            s.default.click(), this.closeMe();
        }),
        (d.prototype.setCold = function (t) {}),
        a([t], d));
function d() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t._moduleConfig = null), (t._nod_bgMask = null), (t._tip = null), (t._blockNode = null), t;
}
o.default = t;
