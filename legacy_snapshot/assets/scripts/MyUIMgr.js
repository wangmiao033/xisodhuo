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
        });
Object.defineProperty(o, "__esModule", {value: !0});
var s,
    a = t("AssetMgr"),
    e = t("UIMgr"),
    r = t("MainBlock"),
    c = t("TaskRecordData"),
    l = t("ConfigProxy"),
    p = t("Const"),
    u = t("GameMgr"),
    d = t("LvMgr"),
    h = t("UILoading"),
    _ = t("EventManager"),
    f = t("IconUtils"),
    m = t("PlaceMgr"),
    g = t("CommonUtils"),
    i =
        (i(y, (s = e.default)),
        (y.prototype.showNotice = function (e, o) {
            this.showModule(u.gm.const.Notice, function (t) {
                t.show_notice(e), o && o();
            });
        }),
        (y.prototype.showHeart = function (e) {
            this.showModule(u.gm.const.Notice, function (t) {
                t.showHeartUpgrade(e);
            });
        }),
        (y.prototype.createPrefab = function (t, e) {
            a.default.getInstance().getResAsyn(t.bundleName, t.loadPath, cc.Prefab, e);
        }),
        (y.prototype.showModule = function (t, e) {
            var o = this;
            if (!t) return void cc.error("MyUIMgr.showModule: missing module config");
            if (
                !m.default.getInstance().isBuildingMode() ||
                [
                    u.gm.const.DecorateUI.key,
                    u.gm.const.DecorateMove.key,
                    u.gm.const.DecoratePut.key,
                    u.gm.const.Notice.key
                ].includes(t.key)
            )
                if (
                    g.default.isInMainScene() ||
                    ![u.gm.const.CookUI.key, u.gm.const.CookingUI.key, u.gm.const.CookStudy.key].includes(t.key)
                ) {
                    if (l.default.getInstance().data && l.default.getInstance().data.ModuleOpen)
                        for (var n = this, i = 0, a = l.default.getInstance().data.ModuleOpen; i < a.length; i++) {
                            var r = (function (o) {
                                if (o.module_name == t.key)
                                    return d.default.getInstance().getLv() < o.lv
                                        ? (n.showNotice(o.lv + "级开放"), {value: void 0})
                                        : o.unlock_need &&
                                          0 < o.unlock_need.length &&
                                          !c.default.getInstance().unlock_module_id.includes(o.id)
                                        ? (u.gm.ui.showModule(u.gm.const.UnlockUI, function (t) {
                                              var e;
                                              t.setNeedProp(o.unlock_need),
                                                  t.setTitle(o.title),
                                                  t.setDesc(o.desc),
                                                  (e = f.IconUtils.getIconFullPathByName(o.icon)),
                                                  f.IconUtils.setSpriteFrame(p.BundleName.COMMON, e, t.spr_icon),
                                                  (t.callback = function () {
                                                      c.default.getInstance().addUnlockModuleID(o.id),
                                                          _.default.emit(p.GameEvent.unlock_module);
                                                  });
                                          }),
                                          {value: void 0})
                                        : void 0;
                            })(a[i]);
                            if ("object" == typeof r) return r.value;
                        }
                    t.not_show_loading || this.showUILoading(!0, 0, "Loading ..."),
                        s.prototype.showModule.call(this, t, e, function () {
                            o.showUILoading(!1);
                        });
                } else u.gm.ui.showNotice("请回到家操作");
        }),
        (y.prototype.showTopBlock = function (t, e, o) {
            void 0 === t && (t = !0), void 0 === e && (e = 0), void 0 === o && (o = "");
            var n = cc.Canvas.instance.node.getChildByName("nod_block").getComponent(r.default);
            (n.spr_bg.active = t), (n.spr_bg.opacity = e), (n.lbl_tip.string = o), cc.log("show main block", t);
        }),
        (y.prototype.showUILoading = function (t, e, o) {
            void 0 === t && (t = !0),
                void 0 === e && (e = 0),
                void 0 === o && (o = ""),
                ((o = cc.Canvas.instance.node.getChildByName("ui_loading")).active = t),
                o.getComponent(h.default).show(t);
        }),
        y);
function y() {
    return (null !== s && s.apply(this, arguments)) || this;
}
o.default = i;
