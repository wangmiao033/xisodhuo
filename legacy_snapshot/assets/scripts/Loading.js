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
    s = t("AppConfig"),
    c = t("AudioUtils"),
    l = t("CommonUtils"),
    p = t("Const"),
    u = t("GameMgr"),
    d = t("MainCal"),
    h = t("MapDataMgr"),
    _ = t("MapInsideMgr"),
    f = t("AssetMgr"),
    m = t("AudioPlayer"),
    g = t("GameModule"),
    y = t("TimeUtils"),
    v = t("NetUtils"),
    t = (e = cc._decorator).ccclass,
    e = e.property,
    t =
        (i(b, (r = g.default)),
        (b.prototype.onLoad = function () {
            var e = this;
            (this.lbl_desc.string = "马上到家，可以吃到奶奶做的饭了..."),
                (this.spr_progress.fillRange = 0),
                (this.nod_car.x = -283.5),
                v.ReportData.instance.report_point(10020),
                c.default.playBgHome(),
                m.default.setMusicVolume(1 == u.gm.localData.musicOn ? 0.5 : 0),
                m.default.setEffectVolume(1 == u.gm.localData.effectOn ? 0.5 : 0),
                (this.targetCount += 1),
                y.default.getNetTime(function (t) {
                    0 == (t && t.ResultCode)
                        ? d.default.getTimeNode().schedule(
                              function (t) {
                                  y.default.updateTime(t);
                              },
                              0,
                              cc.macro.REPEAT_FOREVER
                          )
                        : cc.warn("getNetTime failed; continue with local time", t),
                        (e.curCount += 1),
                        e.onLoadDataCb();
                });
        }),
        (b.prototype.start = function () {}),
        (b.prototype.onEnable = function () {
            this._loadConfig();
        }),
        (b.prototype._loadConfig = function () {
            var e = this;
            (this.targetCount += 1),
                f.default.getInstance().getResAsyn(p.BundleName.COMMON, "json/DBconfig", cc.JsonAsset, function (t) {
                    (e.curCount += 1),
                        (e._registeringLoads = !0),
                        u.gm.config.initConfig(t.json),
                        t.decRef(),
                        e._loadMapInsideData(),
                        e._loadMapJson(),
                        e._loadNpcPathJson(),
                        e._loadMainRole(),
                        e._loadMainUI(),
                        e._loadBaseUI(),
                        e._loadNpc(),
                        e._loadMapObject(),
                        e._loadFirstLogin(),
                        (e._registeringLoads = !1),
                        e.onLoadDataCb();
                });
        }),
        (b.prototype._loadMapInsideData = function () {
            var e = this;
            f.default
                .getInstance()
                .getResAsyn(p.BundleName.MAIN_UI, "json/map_inside_json", cc.JsonAsset, function (t) {
                    (e.curCount += 1), _.default.getInstance().setData(t.json), t.decRef(), e.onLoadDataCb();
                }),
                (this.targetCount += 1);
        }),
        (b.prototype._loadMapJson = function () {
            var e = this;
            (this.targetCount += 1),
                f.default.getInstance().getResAsyn(p.BundleName.MAIN_UI, "json/tmx_data", cc.JsonAsset, function (t) {
                    (e.curCount += 1), (_.default.getInstance().mapJsonData = t.json), t.decRef(), e.onLoadDataCb();
                });
        }),
        (b.prototype._loadNpcPathJson = function () {
            var e = this;
            (this.targetCount += 1),
                f.default.getInstance().getResAsyn(p.BundleName.MAIN_UI, "json/npc_path", cc.JsonAsset, function (t) {
                    (e.curCount += 1), (_.default.getInstance().npc_path = t.json), t.decRef(), e.onLoadDataCb();
                });
        }),
        (b.prototype.onLoadDataCb = function () {
            var t = this;
            if (
                ((this.lbl_desc.string = "马上到家，可以吃到奶奶做的饭了..." + this.curCount + "/" + this.targetCount),
                this._registeringLoads || this._finished || !this.targetCount || this.targetCount != this.curCount)
            )
                return;
            (this._finished = !0),
                (u.gm.mapData = new h.default()),
                u.gm.mapData.addOriginalObjectDatas(_.default.getInstance().mapJsonData),
                u.gm.mapData.initMapObjectData(),
                u.gm.localData.guide
                    ? u.gm.ui.showModule(u.gm.const.MainUI)
                    : (u.gm.ui.showTopBlock(!1, 0),
                      u.gm.ui.showModule(u.gm.const.RegisterUI, function () {
                          t.closeMe();
                      }));
        }),
        (b.prototype._loadNpc = function () {
            var t = this;
            (this.targetCount += 1),
                f.default
                    .getInstance()
                    .getResAsyn(p.BundleName.MAIN_UI, "prefabs/npc/npc_plot", cc.Prefab, function () {
                        (t.curCount += 1), t.onLoadDataCb();
                    });
        }),
        (b.prototype._loadMainUI = function () {
            var t = this;
            (this.targetCount += 1),
                f.default
                    .getInstance()
                    .getResAsyn(p.BundleName.MAIN_UI, u.gm.const.MainUI.loadPath, cc.Prefab, function () {
                        (t.curCount += 1), t.onLoadDataCb();
                    });
        }),
        (b.prototype._loadMainRole = function () {
            var t = this;
            (this.targetCount += 1),
                f.default.getInstance().getResAsyn(p.BundleName.MAIN_UI, "prefabs/main_role", cc.Prefab, function () {
                    (t.curCount += 1), t.onLoadDataCb();
                });
        }),
        (b.prototype._loadBaseUI = function () {
            var t = this;
            (this.targetCount += 1),
                f.default
                    .getInstance()
                    .getResAsyn(p.BundleName.MAIN_UI, u.gm.const.BaseUI.loadPath, cc.Prefab, function () {
                        (t.curCount += 1), t.onLoadDataCb();
                    });
        }),
        (b.prototype._loadMapObject = function () {
            var t = this;
            this.targetCount += s.default.loadMapObjectID.length;
            for (var e = 0, o = s.default.loadMapObjectID; e < o.length; e++) {
                var n = o[e];
                l.default.loadMapObjectPrefab(n, function () {
                    (t.curCount += 1), t.onLoadDataCb();
                });
            }
        }),
        (b.prototype._loadFirstLogin = function () {
            var t = this;
            u.gm.localData.guide ||
                ((this.targetCount += 1),
                f.default
                    .getInstance()
                    .getResAsyn(u.gm.const.Guide.bundleName, u.gm.const.Guide.loadPath, cc.Prefab, function () {
                        (t.curCount += 1), t.onLoadDataCb();
                    }),
                (this.targetCount += 1),
                f.default
                    .getInstance()
                    .getResAsyn(u.gm.const.DialogUI.bundleName, u.gm.const.DialogUI.loadPath, cc.Prefab, function () {
                        (t.curCount += 1), t.onLoadDataCb();
                    }),
                (this.targetCount += 1),
                f.default
                    .getInstance()
                    .getResAsyn(
                        u.gm.const.GetAwardUI.bundleName,
                        u.gm.const.GetAwardUI.loadPath,
                        cc.Prefab,
                        function () {
                            (t.curCount += 1), t.onLoadDataCb();
                        }
                    ),
                (this.targetCount += 1),
                f.default
                    .getInstance()
                    .getResAsyn(
                        u.gm.const.DecoratePut.bundleName,
                        u.gm.const.DecoratePut.loadPath,
                        cc.Prefab,
                        function () {
                            (t.curCount += 1), t.onLoadDataCb();
                        }
                    ),
                (this.targetCount += 1),
                f.default
                    .getInstance()
                    .getResAsyn(
                        u.gm.const.DecorateUI.bundleName,
                        u.gm.const.DecorateUI.loadPath,
                        cc.Prefab,
                        function () {
                            (t.curCount += 1), t.onLoadDataCb();
                        }
                    ),
                (this.targetCount += 1),
                f.default
                    .getInstance()
                    .getResAsyn(
                        u.gm.const.BlockGuide.bundleName,
                        u.gm.const.BlockGuide.loadPath,
                        cc.Prefab,
                        function () {
                            (t.curCount += 1), t.onLoadDataCb();
                        }
                    ));
        }),
        (b.prototype.onDestroy = function () {}),
        (b.prototype.update = function (t) {
            (this.nod_car.x += 300 * t),
                (this.spr_progress.fillRange += t * (300 / 567)),
                283.5 <= this.nod_car.x && ((this.nod_car.x = -283.5), (this.spr_progress.fillRange = 0));
        }),
        a([e(cc.Label)], b.prototype, "lbl_desc", void 0),
        a([e(cc.Node)], b.prototype, "nod_car", void 0),
        a([e(cc.Sprite)], b.prototype, "spr_progress", void 0),
        a([t], b));
function b() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t.lbl_desc = null), (t.nod_car = null), (t.spr_progress = null), (t.targetCount = 0), (t.curCount = 0), (t._registeringLoads = !1), (t._finished = !1), t;
}
o.default = t;
