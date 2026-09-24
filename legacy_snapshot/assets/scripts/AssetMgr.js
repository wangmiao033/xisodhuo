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
var a,
    r = t("FWEvent"),
    e = t("Singleton"),
    s = t("EventManager"),
    i =
        (i(c, (a = e.default)),
        (c.prototype.loadBundleByName = function (t, o) {
            cc.assetManager.loadBundle(t, function (t, e) {
                t ? cc.error(t) : o(e);
            });
        }),
        (c.prototype.loadBundleDir = function (t, e) {
            var o = this;
            void 0 === e && (e = ""),
                this._tryToLoadBundle(t, function (t) {
                    o._loadBundleDir(t, e);
                });
        }),
        (c.prototype.preloadBundleDir = function (t, e, o) {
            void 0 === e && (e = ""),
                void 0 === o && (o = null),
                this._tryToLoadBundle(t, function (t) {
                    t.preloadDir(e, function (t, e) {
                        t ? cc.error(t) : (cc.log(e), o && o());
                    });
                });
        }),
        (c.prototype.preload = function (t, e, o) {
            void 0 === o && (o = null),
                this._tryToLoadBundle(t, function (t) {
                    t.preload(e, function (t) {
                        t ? cc.error(t) : o && o();
                    });
                });
        }),
        (c.prototype.getBundleByName = function (t) {
            return cc.assetManager.getBundle(t);
        }),
        (c.prototype._tryToLoadBundle = function (t, o) {
            var e = cc.assetManager.getBundle(t);
            e
                ? o(e)
                : cc.assetManager.loadBundle(t, function (t, e) {
                      t ? cc.error(t) : o(e);
                  });
        }),
        (c.prototype.getRes = function (t, e, o) {
            var n = this.getBundleByName(t);
            return n ? n.get(e, o) : (cc.warn("getRes 找不到bundle：", t + " " + e), null);
        }),
        (c.prototype.getDirRes = function (t, e, o) {
            var n = [];
            if (this.getBundleByName(t))
                for (var i = 0, a = this.getDirWithPath(t, e, o); i < a.length; i++) {
                    var r = a[i].path;
                    (r = this.getRes(t, r, o)) && n.push(r);
                }
            else cc.error("getDirRes 找不到该资源或资源未加载：", t + " " + e);
            return n;
        }),
        (c.prototype.getDirWithPath = function (t, e, o) {
            var n = this.getBundleByName(t);
            return n
                ? n.getDirWithPath(e, o)
                : (cc.error("getDirWithPath 找不到该资源或资源未加载：", t + " " + e), null);
        }),
        (c.prototype.releaseRes = function (t, e) {
            var o = this.getBundleByName(t);
            o ? o.release(e) : cc.warn("releaseRes 找不到该资源或资源未加载：", t + " " + e);
        }),
        (c.prototype._loadBundleDir = function (o, n) {
            void 0 === n && (n = ""),
                o.loadDir(
                    n,
                    function (t, e) {
                        s.default.emit(r.FWEvent.LoadBundleResProgress, o.name, n, t, e);
                    },
                    function () {
                        s.default.emit(r.FWEvent.LoadBundleResComplete, o.name, n);
                    }
                );
        }),
        (c.prototype.getResAsyn = function (t, o, n, i, a) {
            this._tryToLoadBundle(t, function (t) {
                var e = t.get(o, n);
                e
                    ? i(e)
                    : t.load(o, n, function (t, e) {
                          t ? (a ? a(t) : cc.error(t)) : (e.addRef(), i(e));
                      });
            });
        }),
        c);
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bundlesMap = new Map()), (t.curBundle = null), t;
}
o.default = i;
