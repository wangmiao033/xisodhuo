var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.NodePoolManager = void 0);
var n = t("NodePoolItem"),
    i = t("AssetMgr"),
    t =
        (Object.defineProperty(s, "instance", {
            get: function () {
                return this._instance || (this._instance = new s()), this._instance;
            },
            enumerable: !1,
            configurable: !0
        }),
        (s.prototype.init = function (e, o, n, i, a) {
            var r = this;
            void 0 === i && (i = 0), void 0 === a && (a = null);
            var t = this.get_key(e, o),
                s = this._pools[t];
            s || "" == t
                ? (cc.log("do not repeat init pool " + o), a && a())
                : ((s = new cc.NodePool(n)),
                  (this._pools[t] = s),
                  this.async_get_prefab(e, o, function () {
                      for (var t = 0; t < i; t++) s.put(r.get_instance_comp(e, o, n).node);
                      a && a();
                  }));
        }),
        (s.prototype.is_init = function (t, e) {
            return (t = this.get_key(t, e)), !(!this._pools[t] && "" != e);
        }),
        (s.prototype.get_key = function (t, e) {
            return t + "://" + e;
        }),
        (s.prototype.async_get_prefab = function (t, e, o) {
            i.default.getInstance().getResAsyn(t, e, cc.Prefab, function (t) {
                o(t);
            });
        }),
        (s.prototype.get_instance_comp = function (t, e, o) {
            var n = cc.assetManager.getBundle(t);
            if ((n = n && n.get(e, cc.Prefab))) {
                if ((n = cc.instantiate(n).getComponent(o))) return (n.load_url = e), (n.bundle_name = t), n;
                cc.error("prefab not have " + o);
            }
            return cc.error("调用前要保证资源已经被加载完"), null;
        }),
        (s.prototype.get = function (t, e, o) {
            var n = this.get_key(t, e),
                i = this._pools[n];
            return (
                i || ((i = new cc.NodePool(o)), (this._pools[n] = i)),
                0 < i.size() ? i.get().getComponent(o) : this.get_instance_comp(t, e, o)
            );
        }),
        (s.prototype.async_get = function (t, e, o, n) {
            var i = this,
                a = this.get_key(t, e),
                r = this._pools[a];
            if ((r || ((r = new cc.NodePool(o)), (this._pools[a] = r)), 0 < r.size()))
                return (r = r.get()), void n(r.getComponent(o));
            s.loadCount++,
                this.async_get_prefab(t, e, function () {
                    n(i.get_instance_comp(t, e, o)), s.loadCount--;
                });
        }),
        (s.prototype.put = function (t) {
            var e;
            null != t
                ? (e = t.getComponent(n.NodePoolItem)) &&
                  ((e = this.get_key(e.bundle_name, e.load_url)),
                  (e = this._pools[e]) ? e.put(t) : cc.warn("pool not exist"))
                : cc.warn("回收node为空");
        }),
        (s.prototype.put_children = function (t) {
            for (var e = t.childrenCount - 1; 0 <= e; e--) this.put(t.children[e]);
        }),
        (s.prototype.size = function (t, e) {
            if (((e = this.get_key(t, e)), (e = this._pools[e]))) return e.size();
            cc.warn("pool not exist");
        }),
        (s.prototype.clear = function (t, e) {
            (e = this.get_key(t, e)), (e = this._pools[e]) ? e.clear() : cc.warn("pool not exist");
        }),
        (s._instance = null),
        (s.loadCount = 0),
        s);
function s() {
    this._pools = {};
}
o.NodePoolManager = t;
