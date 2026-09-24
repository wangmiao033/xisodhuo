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
    r = t("Const"),
    s = t("GameMgr"),
    e = t("Singleton"),
    c = t("TaskItemData"),
    l = t("TaskRecordData"),
    p = t("TaskTypeData"),
    i =
        (i(u, (a = e.default)),
        (u.prototype._init = function () {
            cc.log("init task data");
            for (var t = 0, e = s.gm.config.data.Tasks; t < e.length; t++) {
                var o = e[t];
                this.taskTypeData[o.type] ||
                    ((this.taskTypeData[o.type] = new p.default(o.type)),
                    this.taskTypeData[o.type].setLastTaskID(l.default.getInstance().getLastTaskID(o.type)));
                var n = new c.default(o.id);
                this.taskTypeData[o.type].addItem(n);
            }
        }),
        (u.prototype.getCurList = function () {
            var t, e = [];
            for (t in this.taskTypeData) {
                var o = this.taskTypeData[t];
                e.length < 7 && o.getCurTask() && e.push(o);
            }
            return e;
        }),
        (u.prototype.checkAll = function () {
            for (var t = 0, e = this.getCurList(); t < e.length; t++) e[t].getCurTask().check();
        }),
        (u.prototype.checkIsCurTaskID = function (t) {
            for (var e = 0, o = this.getCurList(); e < o.length; e++) if (t == o[e].getCurTask().taskID) return !0;
            return !1;
        }),
        (u.prototype.getCurTasks = function (t) {
            for (var e = [], o = 0, n = this.getCurList(); o < n.length; o++) {
                var i = n[o].getCurTask();
                i && i.getCondition(t) && e.push(i);
            }
            return e;
        }),
        (u.prototype.checkIsTask = function (t) {
            for (var e = this.getCurTasks(r.ConditionType.NPC), o = 0; o < e.length; o++)
                if (t == e[o].getCondition(r.ConditionType.NPC).id) return !0;
            return !1;
        }),
        u);
function u() {
    var t = a.call(this) || this;
    return (t.lastDoneTaskID = 0), (t.curTaskID = 0), (t.taskTypeData = {}), (t.interactWithNpc = {}), t._init(), t;
}
o.default = i;
