var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.FuncCount = o.PrintFuncTime = o.ButtonLock = void 0),
    (e = cc._decorator).ccclass,
    e.property,
    (o.ButtonLock = function (a, r) {
        return (
            void 0 === a && (a = 0.3),
            function (t, e, o) {
                var n = o.value,
                    i = !1;
                return (
                    (o.value = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        i
                            ? null == r || r()
                            : ((i = !0),
                              setTimeout(function () {
                                  i = !1;
                              }, 1e3 * a),
                              n.apply(this, t));
                    }),
                    o
                );
            }
        );
    }),
    (o.PrintFuncTime = function () {
        return function (t, e, o) {
            var n = o.value;
            return (
                (o.value = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return performance.now(), n.apply(this, t);
                }),
                o
            );
        };
    }),
    (o.FuncCount = function () {
        return function (t, e, o) {
            var n = o.value;
            return (
                (o.value = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return n.apply(this, t);
                }),
                o
            );
        };
    });
