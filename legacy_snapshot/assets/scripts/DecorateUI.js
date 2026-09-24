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
    s = t("CommonUtils"),
    c = t("Const"),
    l = t("GameMgr"),
    p = t("List"),
    u = t("GameModule"),
    d = t("DecorationItem"),
    h = t("DecorationMgr"),
    t = (e = cc._decorator).ccclass,
    e = e.property,
    t =
        (i(_, (r = u.default)),
        (_.prototype.onStart = function () {
            this.tog_container.toggleItems[this.curType - 1].check();
        }),
        (_.prototype.onEnable = function () {
            (h.default.draging = !1),
                h.default.setStatus(c.EnumDecorateStatus.Prepare),
                this.display(),
                this.updateUI(),
                1001 == l.gm.mapData.guidingID && s.default.getGuide_1001().onTouchDecoration();
        }),
        (_.prototype.onBtnClose = function () {
            h.default.setStatus(c.EnumDecorateStatus.None), this.closeMe();
        }),
        (_.prototype.onToggle = function (t, e) {
            (e = Number(e)), (this.curType = e), this.updateUI();
        }),
        (_.prototype.updateUI = function () {
            (this.datas = h.default.getCollectDecoration(this.curType)), (this.list.numItems = this.datas.length);
        }),
        (_.prototype.onRenderItem = function (t, e) {
            t.getComponent(d.default).setData(this.datas[e]);
        }),
        (_.prototype.undisplay = function () {
            this.node.opacity = 0;
        }),
        (_.prototype.display = function () {
            this.node.opacity = 255;
        }),
        (_.prototype.onBtnRenovation = function () {
            h.default.setStatus(c.EnumDecorateStatus.None), this.closeMe(), l.gm.ui.showModule(l.gm.const.RenovationUI);
        }),
        a([e(p.default)], _.prototype, "list", void 0),
        a([e(cc.ToggleContainer)], _.prototype, "tog_container", void 0),
        a([e(cc.ScrollView)], _.prototype, "scr", void 0),
        a([t], _));
function _() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t.list = null),
        (t.tog_container = null),
        (t.scr = null),
        (t.curType = c.DecorationType.Furniture),
        (t.datas = []),
        t
    );
}
o.default = t;
