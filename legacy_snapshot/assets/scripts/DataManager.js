var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.DataManager = void 0);
var n = t("EventEmitter"),
    t =
        (Object.defineProperty(i, "instance", {
            get: function () {
                return this._instance || (this._instance = new i()), this._instance;
            },
            enumerable: !1,
            configurable: !0
        }),
        (i.prototype.catch_error_log = function (t) {
            var a;
            void 0 === t && (t = !1),
                null == window.onerror &&
                    ((a = this),
                    (window.onerror = t
                        ? function (t, e, o, n, i) {
                              return (
                                  (o = t + ">>" + e + ":" + o),
                                  3 < arguments.length &&
                                      ((o += " " + n + " stack:"),
                                      (o += i.stack.substr(
                                          0,
                                          Math.max(Math.min(10240 - o.length, i.stack.length), 0)
                                      ))),
                                  a.error_content == o ||
                                      ((a.last_error_content = a.error_content), (a.error_content = o), !1)
                              );
                          }.bind(a)
                        : function () {}));
        }),
        (i._instance = null),
        i);
function i() {
    (this.event_emitter = new n.EventEmitter()),
        (this.is_test = !1),
        (this.last_error_content = ""),
        (this.error_content = "");
}
o.DataManager = t;
