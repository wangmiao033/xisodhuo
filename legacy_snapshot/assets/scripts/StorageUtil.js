var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("encryptjs"),
    t =
        ((i.setKeyPrefix = function (t) {
            i._keyPrefix = t;
        }),
        (i.setPassword = function (t) {
            i._pw = t;
        }),
        (i.set = function (t, e, o) {
            void 0 === o && (o = !1),
                (e = "object" == typeof e ? JSON.stringify(e) : e),
                (e = o ? i.encrypt(e) : e),
                cc.sys.localStorage.setItem(i._keyPrefix + t, e);
        }),
        (i.get = function (e, t, o) {
            if (
                (void 0 === t && (t = !0),
                void 0 === o && (o = !1),
                null === (e = cc.sys.localStorage.getItem(i._keyPrefix + e)))
            )
                return null;
            if (((e = o ? i.decrypt(e) : e), t))
                try {
                    return JSON.parse(e);
                } catch (t) {
                    return e;
                }
            return e;
        }),
        (i.remove = function (t) {
            cc.sys.localStorage.removeItem(i._keyPrefix + t);
        }),
        (i.encrypt = function (t) {
            return n.encrypt(t, i._pw, 256);
        }),
        (i.decrypt = function (t) {
            return n.decrypt(t, i._pw, 256);
        }),
        (i.clear = function () {
            cc.sys.localStorage.clear();
        }),
        (i._keyPrefix = ""),
        (i._pw = "default"),
        i);
function i() {}
o.default = t;
