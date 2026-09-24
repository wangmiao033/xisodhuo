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
    s = t("Const"),
    c = t("GameMgr"),
    l = t("MapDataHelper"),
    p = t("GameModule"),
    u = t("PlaceMgr"),
    d = t("HeartMgr"),
    h = t("DecorationMgr"),
    t = (e = cc._decorator).ccclass,
    t =
        (e.property,
        i(_, (r = p.default)),
        (_.prototype.onDisable = function () {}),
        (_.prototype.onBack = function () {
            var t = l.default.getLiftObject();
            u.default.getInstance().checkCanPut(t.data)
                ? (t.setMode(s.MapObjectMode.normal),
                  c.gm.mapData.place(t.data),
                  this.closeMe(),
                  h.default.setStatus(s.EnumDecorateStatus.Prepare),
                  c.gm.ui.showModule(c.gm.const.DecorateUI))
                : c.gm.ui.showNotice("该位置不能放置");
        }),
        (_.prototype.onConfirm = function () {
            var t = l.default.getLiftObject();
            u.default.getInstance().checkCanPut(t.data)
                ? (t.setMode(s.MapObjectMode.normal),
                  c.gm.mapData.place(t.data),
                  this.closeMe(),
                  h.default.setStatus(s.EnumDecorateStatus.None))
                : c.gm.ui.showNotice("该位置不能放置");
        }),
        (_.prototype.onRotation = function () {
            var t = l.default.getLiftObject();
            t.data.getConfig().can_cross || !t.data.getConfig().can_go_in
                ? (t.data.setRotation(), t.updateUI())
                : c.gm.ui.showNotice("该物件暂不支持旋转");
        }),
        (_.prototype.onCollect = function () {
            var t = l.default.getLiftObject();
            d.default.getInstance().onAdd(t.data, !1),
                c.gm.mapData.collect(t.data.getUID()),
                this.closeMe(),
                h.default.setStatus(s.EnumDecorateStatus.None);
        }),
        a([t], _));
function _() {
    return (null !== r && r.apply(this, arguments)) || this;
}
o.default = t;
