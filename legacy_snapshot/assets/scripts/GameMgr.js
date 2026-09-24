var l = require;
var p = module;
var u = exports;
!function (t) {
    function e() {
        null != i.Const &&
            ((this.const = i.Const.getInstance()),
            (this.ui = r.default.getInstance()),
            (this.localData = a.default.getInstance()),
            (this.data = c.DataManager.instance),
            (this.config = n.default.getInstance()),
            (this.pool = o.NodePoolManager.instance),
            (this.channel = s.ChannelManager.instance));
    }
    Object.defineProperty(u, "__esModule", {value: !0}), (u.gm = u.GameMgr = void 0);
    var o = l("NodePoolManager"),
        n = l("ConfigProxy"),
        i = l("Const"),
        a = (l("Dev"), l("LocalData")),
        r = l("MyUIMgr"),
        s = l("ChannelManager"),
        c = l("DataManager");
    (u.GameMgr = e), (t = "undefined" == typeof window ? t : window), (u.gm = t.gm = t.gm || new e());
}.call(this,
    "undefined" != typeof global ? global :
    "undefined" != typeof self ? self :
    "undefined" != typeof window ? window : {});
