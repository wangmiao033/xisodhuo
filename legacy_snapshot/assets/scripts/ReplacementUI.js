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
    c = t("CommonData"),
    l = t("CommonUtils"),
    p = t("Const"),
    u = t("ReplacementModel"),
    d = t("List"),
    h = t("EventManager"),
    _ = t("GameModule"),
    f = t("ReplacementHelper"),
    m = t("ReplacementItem"),
    t = (e = cc._decorator).ccclass,
    e = e.property,
    t =
        (i(g, (r = _.default)),
        (g.prototype.onLoad = function () {
            r.prototype.onLoad.call(this);
        }),
        (g.prototype.onEnable = function () {
            var t,
                e = this;
            for (t in c.default.getInstance().dressing) this.temp_draw[t] = c.default.getInstance().dressing[t];
            l.default.loadMainRoleSpine(this.spine, function () {
                (e.model = u.default.createBySpine(e.spine, e.temp_draw)),
                    e.spine.setAnimation(0, "standby", !0),
                    e.updateUI();
            });
        }),
        (g.prototype.updateUI = function () {
            this.toggle.toggleItems[this.curIndex].check(),
                (this.bottom_item_types = y[this.curIndex]),
                (this.curList = f.default.getInstance().getConfigsByType(this.bottom_item_types)),
                (this.list.numItems = this.curList.length);
        }),
        (g.prototype.onBtnRestore = function () {}),
        (g.prototype.onBtnSave = function () {}),
        (g.prototype.onRender = function (t, e) {
            t.getComponent(m.default).setData(this.curList[e]);
        }),
        (g.prototype.onToggle = function (t, e) {
            (this.curIndex = Number(e)), (this.cur_touch_id = ""), this.updateUI();
        }),
        (g.prototype.changeFacade = function (t, e) {
            this.model.setDraw(t, e),
                c.default.getInstance().my_dress.includes(String(e)) &&
                    ((c.default.getInstance().dressing[t] = e), c.default.getInstance().save()),
                this.updateUI(),
                h.default.emit(p.GameEvent.replace_clothes);
        }),
        (g.prototype.onBtnClose = function () {
            h.default.emit(p.GameEvent.change_facade), s.default.click(), this.closeMe();
        }),
        (g.prototype.onBtnShop = function () {
            s.default.click(),
                h.default.emit(p.GameEvent.change_facade),
                l.default.goToExploreByID(11001),
                this.closeMe();
        }),
        a([e(sp.Skeleton)], g.prototype, "spine", void 0),
        a([e(d.default)], g.prototype, "list", void 0),
        a([e(cc.ToggleContainer)], g.prototype, "toggle", void 0),
        a([t], g));
function g() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t.spine = null),
        (t.list = null),
        (t.toggle = null),
        (t.curIndex = 0),
        (t.bottom_item_types = []),
        (t.curList = []),
        (t.model = null),
        (t.temp_draw = {}),
        (t.cur_touch_id = ""),
        t
    );
}
o.default = t;
var y = [
    [p.E_ReplacementType.clothing],
    [p.E_ReplacementType.face, p.E_ReplacementType.eye],
    [p.E_ReplacementType.hair],
    [p.E_ReplacementType.shoe],
    [p.E_ReplacementType.hat, p.E_ReplacementType.glasses, p.E_ReplacementType.earing, p.E_ReplacementType.necklace]
];
