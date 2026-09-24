var t = require;
var e = module;
var o = exports;
function n() {}
Object.defineProperty(o, "__esModule", {value: !0}),
    (n.on = function (t, e, o) {
        var n = this.events;
        n.has(t) ? n.get(t).push({callback: e, target: o}) : n.set(t, [{callback: e, target: o}]);
    }),
    (n.once = function (t, e, o) {
        var n = this.onceEvents;
        n.has(t) ? n.get(t).push({callback: e, target: o}) : n.set(t, [{callback: e, target: o}]);
    }),
    (n.off = function (t, e, o) {
        var n = this.events.get(t);
        if (n)
            for (var i = 0, a = n.length; i < a; i++)
                if (this.compare(n[i], e, o)) {
                    n.splice(i, 1), 0 === n.length && this.events.delete(t);
                    break;
                }
        var r = this.onceEvents.get(t);
        if (r)
            for (i = 0, a = r.length; i < a; i++)
                if (this.compare(r[i], e, o)) {
                    r.splice(i, 1), 0 === r.length && this.onceEvents.delete(t);
                    break;
                }
    }),
    (n.emit = function (t) {
        for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
        var n = this.events.get(t);
        if (n)
            for (var i = 0; i < n.length; i++) {
                var a = n[i],
                    r = a.callback;
                (c = a.target) || cc.warn("no target"), r.apply(c, e);
            }
        var s = this.onceEvents.get(t);
        if (s) {
            for (i = 0; i < s.length; i++) {
                var c,
                    l = s[i],
                    r = l.callback;
                (c = l.target) || cc.warn("no target"), r.apply(c, e);
            }
            this.onceEvents.delete(t);
        }
    }),
    (n.remove = function (t) {
        this.events.has(t) && this.events.delete(t), this.onceEvents.has(t) && this.onceEvents.delete(t);
    }),
    (n.removeAll = function () {
        this.events.clear(), this.onceEvents.clear();
    }),
    (n.compare = function (t, e, o) {
        var n = t.callback;
        return t.target === o && (n === e || n.toString() === e.toString());
    }),
    (n.events = new Map()),
    (n.onceEvents = new Map()),
    (o.default = e = n);
