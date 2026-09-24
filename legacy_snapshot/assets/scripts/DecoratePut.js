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
    p = t("MapHelper"),
    u = t("GameModule"),
    d = t("NetUtils"),
    h = t("PlaceMgr"),
    _ = t("HeartMgr"),
    f = t("TaskMgr"),
    m = t("DecorationMgr"),
    t = (e = cc._decorator).ccclass,
    e = e.property,
    t =
        (i(g, (r = u.default)),
        (g.prototype.onDisable = function () {}),
        (g.prototype.onCancel = function () {
            1001 != l.gm.mapData.guidingID &&
                (this.closeMe(),
                l.gm.mapData.cancelPreview(),
                l.gm.ui.get_module(l.gm.const.DecorateUI).display(),
                l.gm.ui.closeModule(l.gm.const.DecorateUI),
                m.default.setStatus(c.EnumDecorateStatus.None));
        }),
        (g.prototype.onConfirm = function () {
            var t;
            l.gm.mapData.tempObjectData &&
                ((t = l.gm.mapData.tempObjectData.getUID()),
                l.gm.mapData.onConfirmPreviewByData(l.gm.mapData.tempObjectData)
                    ? (_.default.getInstance().onAdd(l.gm.mapData.getObjectData(t)),
                      p.default.hideGrid(),
                      p.default.setMapMove(),
                      m.default.setStatus(c.EnumDecorateStatus.None),
                      h.default.getInstance().removeCollect(t),
                      this.closeMe(),
                      m.default.showDecorateUI(),
                      f.default.getInstance().checkAll(),
                      1001 == l.gm.mapData.guidingID &&
                          (d.ReportData.instance.report_point(100005, 41000026),
                          m.default.closeDecorateUI(),
                          s.default.getGuide_1001().onGuideEnd()))
                    : l.gm.ui.showNotice("当前位置不能摆放"));
        }),
        (g.prototype.onRotation = function () {}),
        (g.prototype.onEnable = function () {
            m.default.setStatus(c.EnumDecorateStatus.Build),
                1001 == l.gm.mapData.guidingID && s.default.getGuide_1001().onTouchItem();
        }),
        a([e(cc.Node)], g.prototype, "nod_confirm", void 0),
        a([t], g));
function g() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t.nod_confirm = null), t;
}
o.default = t;
