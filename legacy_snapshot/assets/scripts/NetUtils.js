var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.NetUtils = o.ReportData = void 0);
var n = t("AppConfig"),
    i = t("SDKManager"),
    t =
        (Object.defineProperty(a, "instance", {
            get: function () {
                return null == this._instance && (this._instance = new a()), this._instance;
            },
            enumerable: !1,
            configurable: !0
        }),
        (a.prototype.report_once_point = function (t) {
            this.only_once_point_map[t] || ((this.only_once_point_map[t] = !0), this.write_data(), r.report_point(t));
        }),
        (a.prototype.report_point = function (t, e) {
            void 0 === e && (e = 0), (this.total_count_point_map = {}), r.report_point(t, e);
        }),
        (a.prototype.ui_report = function (t, e) {
            r.ui_report(t, e);
        }),
        (a.prototype.write_data = function (t) {
            (t = JSON.stringify(this, t)), cc.sys.localStorage.setItem(this.PREFIX + this.STORAGE_KEY, t);
        }),
        (a.prototype.read_data = function () {
            var t = cc.sys.localStorage.getItem(this.PREFIX + this.STORAGE_KEY);
            if (t) {
                var e,
                    o = null;
                try {
                    o = JSON.parse(t);
                } catch (t) {
                    return void console.error("玩家数据反序列化失败");
                }
                for (e in o)
                    if (null != o[e])
                        if (o[e] instanceof Array) for (this[e] = []; 0 < o[e].length; ) this[e].push(o[e].shift());
                        else this[e] = o[e];
            }
        }),
        (a.prototype.clear_data = function () {
            cc.sys.localStorage.removeItem(this.PREFIX + this.STORAGE_KEY);
        }),
        (a._instance = null),
        a);
function a() {
    (this.PREFIX = n.default.AppName + "_"),
        (this.STORAGE_KEY = "ReportData"),
        (this.only_once_point_map = {}),
        (this.total_count_point_map = {}),
        this.read_data();
}
o.ReportData = t;
var r =
    ((s.http_request = function (t, e, o, n, i) {
        void 0 === o && (o = null), void 0 === n && (n = null), void 0 === i && (i = null);
        var a = new XMLHttpRequest();
        if (
            ((a.onreadystatechange = function () {
                if (4 == a.readyState && 200 <= a.status && a.status < 400) {
                    var e = null;
                    try {
                        e = JSON.parse(a.responseText);
                    } catch (t) {
                        e = a.responseText;
                    }
                    console.log(e), null != o && o(e, a);
                } else 4 == a.readyState && (a.status < 100 || 400 <= a.status) && null != n && n(a);
            }),
            null != i)
        )
            for (var r in i) a[r] = i[r];
        console.log("request: " + t), a.open(e, t, !0), a.send();
    }),
    (s.generate_uuid = function () {
        return Date.now().toString(36) + "_" + Math.random().toString(36).substr(2);
    }),
    Object.defineProperty(s, "game_uuid", {
        get: function () {
            return (
                window.game_uuid ||
                    ((window.game_uuid = cc.sys.localStorage.getItem(this.PREFIX + this.STORAGE_KEY)),
                    window.game_uuid ||
                        ((window.game_uuid = this.generate_uuid()),
                        cc.sys.localStorage.setItem(this.PREFIX + this.STORAGE_KEY, window.game_uuid))),
                window.game_uuid
            );
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s, "channel_name", {
        get: function () {
            var t = "unknown";
            return (
                cc.sys.platform == cc.sys.WECHAT_GAME
                    ? null != window.tt
                        ? (t = "tt-game")
                        : null != window.qq
                        ? (t = "qq-game")
                        : null != window.wx && (t = "wechat-game")
                    : (t =
                          cc.sys.platform == cc.sys.BYTEDANCE_GAME
                              ? "tt-game"
                              : cc.sys.platform == cc.sys.HUAWEI_GAME
                              ? "hw-game"
                              : cc.sys.platform == cc.sys.VIVO_GAME
                              ? "vivo-game"
                              : cc.sys.platform == cc.sys.OPPO_GAME
                              ? "oppo-game"
                              : cc.sys.platform == cc.sys.IPHONE
                              ? "iphone-game"
                              : cc.sys.platform == cc.sys.IPAD
                              ? "ipad-game"
                              : cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID
                              ? "tap-tap-game"
                              : "unknown"),
                t
            );
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s, "game_app_name", {
        get: function () {
            var t = this.channel_name;
            if ("tt-game" == t) {
                if (window.tt && window.tt.getSystemInfoSync) return window.tt.getSystemInfoSync().appName;
            } else {
                if ("qq-game" == t) return "qq";
                if ("wechat-game" == t) return "wechat";
                if ("oppo-game" == t) return "oppo-game";
                if ("vivo-game" == t) return "vivo-game";
                if ("hw-game" == t) return "hw-game";
                if ("iphone-game" == t) return "ios-game";
                if ("ipad-game" == t) return "ios-game";
                if ("tap-tap-game" == t) return i.SDKManager.instance.getChannelAdSdkLoginType();
            }
            return "unknown";
        },
        enumerable: !1,
        configurable: !0
    }),
    (s.report_point = function (t, e, o) {
        void 0 === e && (e = 1),
            void 0 === o && (o = 0),
            this.is_cloud_test()
                ? cc.log("当前为云测试环境，不上报埋点")
                : (console.log("report_point=" + t),
                  (e = cc.js.formatStr(
                      "https://gameapipy.6hwan.com/log/minigame_report/?gamename=" +
                          n.default.AppName +
                          "_%s&uuid=%s&op_type=%s&val=%s",
                      this.game_app_name,
                      this.game_uuid,
                      t.toString(),
                      e.toString()
                  ))
                //   this.http_request(e, this.POST)
                  );
    }),
    (s.ui_report = function () {}),
    (s.is_cloud_test = function () {
        return !1;
    }),
    (s.HEAD = "HEAD"),
    (s.GET = "GET"),
    (s.POST = "POST"),
    (s.user_uid = ""),
    (s.user_token = ""),
    (s.user_open_id = ""),
    (s.PREFIX = n.default.AppName + "_"),
    (s.STORAGE_KEY = "GameUUID"),
    s);
function s() {}
o.NetUtils = r;
