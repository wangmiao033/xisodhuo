var t = require;
var e = module;
var o = exports;
var s =
    (this && this.__spreadArrays) ||
    function() {
        for (var t = 0, e = 0, o = arguments.length; e < o; e++) t += arguments[e].length;
        for (var n = Array(t), i = 0, e = 0; e < o; e++)
            for (var a = arguments[e], r = 0, s = a.length; r < s; r++, i++) n[i] = a[r];
        return n;
    };
Object.defineProperty(o, "__esModule", { value: !0 }), (o.Utils = void 0);
var l = t("GameMgr"),
    p = t("beans"),
    n = t("lzstring"),
    t =
    (Object.defineProperty(u, "lzstring", {
            get: function() {
                return n;
            },
            enumerable: !1,
            configurable: !0
        }),
        (u.get_component_in_self_or_children = function(t, e) {
            return t.getComponent(e) || t.getComponentInChildren(e);
        }),
        (u.get_next_uid = function() {
            return this.uid++, this.uid;
        }),
        (u.get_cur_millisecond = function() {
            return new Date().getTime();
        }),
        (u.get_cur_time = function() {
            return Math.floor(this.get_cur_millisecond() / 1e3);
        }),
        (u.derangedArray = function(t, e) {
            var o = (e = void 0 === e || e) ? [] : t;
            if (e)
                for (var n = 0; n < t.length; n++) o.push(t[n]);
            for (var i, a, r = o.length; r; i = Math.floor(Math.random() * r), a = o[--r], o[r] = o[i], o[i] = a);
            return o;
        }),
        (u.strToMap = function(t, e, o) {
            if ((void 0 === o && (o = ","), null == t || "" == t)) return null;
            for (var n = {}, i = t.split((e = void 0 === e ? "|" : e)), a = 0; a < i.length; a++) {
                var r = i[a].split(o);
                n[r[0]] = r[1];
            }
            return n;
        }),
        (u.strToIntMap = function(t, e, o) {
            if ((void 0 === o && (o = ","), null == t || "" == t)) return null;
            for (var n = {}, i = t.split((e = void 0 === e ? "|" : e)), a = 0; a < i.length; a++) {
                var r = i[a].split(o);
                n[r[0]] = parseInt(r[1]);
            }
            return n;
        }),
        (u.strToIntListList = function(t, e, o) {
            if ((void 0 === o && (o = ","), null == t || "" == t)) return null;
            for (var n = [], i = t.split((e = void 0 === e ? "|" : e)), a = 0; a < i.length; a++) {
                for (var r = i[a].split(o), s = [], c = 0; c < r.length; c++) s.push(parseInt(r[c]));
                n.push(s);
            }
            return n;
        }),
        (u.getChildComp = function(t, e, o) {
            return null == (e = this.getChild(t, e)) ? null : e.getComponent(o);
        }),
        (u.getChild = function(t, e) {
            for (var o = e.split("/"), n = t, i = 0; i < o.length; i++)
                null == n && cc.error("Utils getChild sNodeName:" + e + " index:" + (i - 1) + " name:" + o[i - 1]),
                (n = n.getChildByName(o[i]));
            return null == n ? null : n;
        }),
        (u.httpRequest = function(t, e, o, n, i) {
            void 0 === o && (o = null), void 0 === n && (n = null), void 0 === i && (i = null);
            var a = new XMLHttpRequest();
            if (
                ((a.onreadystatechange = function() {
                        if (4 == a.readyState && 200 <= a.status && a.status < 400) {
                            var e = null;
                            try {
                                e = JSON.parse(a.responseText);
                            } catch (t) {
                                e = a.responseText;
                            }
                            null != o && o(e, a);
                        } else 4 == a.readyState && (a.status < 100 || 400 <= a.status) && null != n && n(a);
                    }),
                    null != i)
            )
                for (var r in i) a[r] = i[r];
            a.open(e, t, !0), a.send();
        }),
        (u.setRichText = function(t) {
            for (
                var e = /<.+?\/?>/g,
                    o = (t = void 0 === t ? "" : t).match(e),
                    n = t.replace(e, "│").split("│"),
                    i = [],
                    a = 0,
                    r = 0,
                    s = n; r < s.length; r++
            )
                "" !== (p = s[r]) && ((p = "$[" + a + "]"), (a += 1)), i.push(p);
            for (var c = i.join("│"), l = 0; l < n.length; l++) "" === n[l] && (n.splice(l, 1), --l);
            for (; - 1 !== c.search("│");)
                o[0] ?
                ((c = c.replace("│", o[0].toString())), o.splice(0, 1)) :
                ((c = c.replace("│", "")), console.warn("matchArr not enough"));
            new Array(a).fill("");
            for (var p, u = "", d = 0; d < n.length; d++)
                for (var h = 0, _ = n[d]; h < _.length; h++) u += p = _[h];
            return u;
        }),
        (u.http_request = function(e, o, n, t) {
            var i = new XMLHttpRequest(),
                a = !1,
                r = function(t) {
                    a || ((a = !0), e && e.apply(o, [t]));
                };
            (i.withCredentials = !1),
                (i.timeout = 1e4),
                (i.onreadystatechange = function() {
                    var t;
                    if (4 == i.readyState)
                        if (200 <= i.status && i.status < 400)
                            try {
                                (t = JSON.parse(i.responseText)), r(t), console.log(i.responseText);
                            } catch (e) {
                                cc.error("响应解析失败 " + n, e), r({ResultCode: -1, msg: "invalid_response"});
                            }
                        else
                            cc.error("请求失败" + n),
                                l.gm.data &&
                                    l.gm.data.event_emitter &&
                                    l.gm.data.event_emitter.emit("connect_fail"),
                                r({ResultCode: -1, msg: "network_error"});
                }),
                (i.onerror = function() {
                    r({ResultCode: -1, msg: "network_error"});
                }),
                (i.ontimeout = function() {
                    cc.error("请求超时" + n), r({ResultCode: -1, msg: "timeout"});
                }),
                console.log("request: " + n),
                i.open("POST", n, !0),
                i.setRequestHeader("Content-Type", "application/json; charset=UTF-8"),
                i.send(JSON.stringify(t));
        }),
        (u.server_http_request = function(e, o, n) {
            for (var t = [], i = 3; i < arguments.length; i++) t[i - 3] = arguments[i];
            var a = new XMLHttpRequest(),
                r = !1,
                c = function(t) {
                    r || ((r = !0), e && e.apply(o, [t]));
                },
                n = (n = cc.js).formatStr.apply(n, s([n], t));
            (a.timeout = 1e4),
                (a.onreadystatechange = function() {
                    var t;
                    if (4 == a.readyState)
                        if (200 <= a.status && a.status < 400)
                            try {
                                (t = JSON.parse(a.responseText)), c(t), console.log(a.responseText);
                            } catch (e) {
                                cc.error("响应解析失败 " + n, e), c({ResultCode: -1, msg: "invalid_response"});
                            }
                        else console.error("请求失败" + n), c({ResultCode: -1, msg: "network_error"});
                }),
                (a.onerror = function() {
                    c({ResultCode: -1, msg: "network_error"});
                }),
                (a.ontimeout = function() {
                    console.error("请求超时" + n), c({ResultCode: -1, msg: "timeout"});
                }),
                console.log("request: " + n),
                a.open("GET", n, !0),
                a.send();
        }),
        (u.server_http_request_post = function(e, o, t) {
            for (var n, i = [], a = 3; a < arguments.length; a++) i[a - 3] = arguments[a];
            var r = new XMLHttpRequest();
            (r.onreadystatechange = function() {
                try {
                    if (4 == r.readyState && 200 <= r.status && r.status < 400) {
                        var t = JSON.parse(r.responseText);
                        return void(e && e.apply(o, [!0, t]));
                    }
                    4 == r.readyState &&
                        (r.status < 100 || 400 <= r.status) &&
                        (cc.error("请求失败"), e && e.apply(o, [!1, null]));
                } catch (t) {
                    console.error("Utils server_http_request onreadystatechange error: " + t),
                        e && e.apply(o, [!1, null]);
                }
            }),
            (t = (n = cc.js).formatStr.apply(n, s([t], i))),
            r.open("POST", t, !0),
                r.send();
        }),
        (u.sceneBindLogic = function(n, i) {
            function t(e) {
                var o = n[e];
                null != o &&
                    (n[e] = function(t) {
                        null != i[e] && i[e].apply(i, [t]), o.apply(n, [t]);
                    });
            }
            i.setView(n), t("onLoad"), t("onEnable"), t("onDisable");
        }),
        (u.updateZIndexWithY = function(t) {
            var e = -1 * t.y;
            isFinite(e) &&
                (e < cc.macro.MIN_ZINDEX ?
                    cc.warn("updateZIndexWithY zIndex < MIN_ZINDEX  izIndexY:" + e + " pNode.y:" + t.y) :
                    e > cc.macro.MAX_ZINDEX ?
                    cc.warn("updateZIndexWithY zIndex > MAX_ZINDEX  izIndexY:" + e + " pNode.y:" + t.y) :
                    (t.zIndex = e));
        }),
        (u.distance = function(t, e) {
            if (!t || !e || (!t.x && 0 != t.x) || (!e.x && 0 != e.x)) return 0;
            var o = e.x - t.x,
                t = e.y - t.y;
            return Math.floor(Math.sqrt(o * o + t * t));
        }),
        (u.isPosInRect = function(t, e, o) {
            if (0 != o.angle)
                return (
                    (n = o.width / 2),
                    (i = o.height / 2),
                    (r = o.angle),
                    (a = o.position),
                    (o = t),
                    (t = e),
                    (e = -r * (Math.PI / 180)),
                    (r = a.x + (o - a.x) * Math.cos(e) - (t - a.y) * Math.sin(e)),
                    (e = a.y + (o - a.x) * Math.sin(e) + (t - a.y) * Math.cos(e)),
                    r > a.x - n && r < a.x + n && e > a.y - i && e < a.y + i
                );
            var n = o.x - 0.5 * o.width,
                i = o.x + 0.5 * o.width,
                a = o.y + 0.5 * o.height,
                r = o.y - 0.5 * o.height;
            return !!(n < t && t < i && r < e && e < a);
        }),
        (u.math_random = function(t, e, o) {
            return (
                void 0 === t && (t = !1),
                void 0 === o && (o = 1),
                (e = (e = void 0 === e ? 0 : e) + Math.random() * (o - e)),
                t ? Math.floor(e) : e
            );
        }),
        (u.searchPathAStar = function(t, e, r, o, n) {
            var s = this;
            void 0 === o && (o = null);
            var c = (n = void 0 === n ? 50 : n),
                l = Math.floor(1.414 * n),
                i = [],
                a = {},
                e = (n = function(t, e, o) {
                    void 0 === e && (e = null), void 0 === o && (o = null);
                    var n = new p.SearchPathPoint();
                    (n.x = t.x), (n.y = t.y);
                    var i = (Math.abs(r.x - n.x) / c) * c,
                        a = (Math.abs(r.y - n.y) / c) * c,
                        i = Math.floor(i),
                        a = Math.floor(a);
                    return (
                        (n.sKey = i + "_" + a),
                        (n.h = i + (a = 0 < a ? a - 1 : a)),
                        (n.g = 0),
                        null != e &&
                        ((n.tParent = e),
                            (n.g = e.g),
                            o == s.SP_DIR_TOP_LEFT ||
                            o == s.SP_DIR_TOP_RIGHT ||
                            o == s.SP_DIR_DOWN_LEFT ||
                            o == s.SP_DIR_DOWN_RIGHT ?
                            (n.g += l) :
                            (n.g += c)),
                        (n.f = n.h + n.g),
                        (n.bIsEndPos = s.distance(t, r) < c),
                        n.bIsEndPos && ((n.x = r.x), (n.y = r.y)),
                        n
                    );
                })(e);
            return (
                i.push(e),
                (a[e.sKey] = e),
                (this.iAStarPathCount = 0),
                this.innerSearchPathAStar({
                    _cfgid: t,
                    _iLine: c,
                    _iSlantLine: l,
                    _tOpenList: i,
                    _tCloseMap: {},
                    _createSPPointFunc: n,
                    _pCheckHitFunc: o,
                    _tOpenMap: a
                })
            );
        }),
        (u.getDirSpeed = function(t, e, o) {
            void 0 === o && (o = 1);
            var n = u.distance(t, e);
            if (n < 1) return (this.vDirSpeed.x = 0), (this.vDirSpeed.y = 0), this.vDirSpeed;
            var i = e.x - t.x,
                t = e.y - t.y;
            return (this.vDirSpeed.x = (i / n) * o), (this.vDirSpeed.y = (t / n) * o), this.vDirSpeed;
        }),
        (u.innerSearchPathAStar = function(t) {
            var e = t._iLine,
                o = (t._iSlantLine, t._tOpenList),
                n = t._tCloseMap,
                i = t._createSPPointFunc,
                a = t._tOpenMap;
            if (o.length <= 0) return null;
            if (3e3 <= this.iAStarPathCount)
                return (
                    console.warn(
                        "innerSearchPathAStar iAStarPathCount reach: " + this.iAStarPathCount + "cfgid=" + t._cfgid
                    ),
                    null
                );
            this.iAStarPathCount++;
            var r = o[0];
            o.splice(0, 1), delete a[r.sKey];
            for (
                var s = [
                        i({ x: (n[r.sKey] = r).x, y: r.y - e }, r, this.SP_DIR_TOP),
                        i({ x: r.x, y: r.y + e }, r, this.SP_DIR_DOWN),
                        i({ x: r.x - e, y: r.y }, r, this.SP_DIR_LEFT),
                        i({ x: r.x + e, y: r.y }, r, this.SP_DIR_RIGHT),
                        i({ x: r.x - e, y: r.y - e }, r, this.SP_DIR_TOP_LEFT),
                        i({ x: r.x + e, y: r.y - e }, r, this.SP_DIR_TOP_RIGHT),
                        i({ x: r.x - e, y: r.y + e }, r, this.SP_DIR_DOWN_LEFT),
                        i({ x: r.x + e, y: r.y + e }, r, this.SP_DIR_DOWN_RIGHT)
                    ],
                    c = !1,
                    l = 0; l < s.length; l++
            ) {
                var p = s[l];
                if (null != a[p.sKey]) {
                    var u = a[p.sKey];
                    p.g < u.g && ((u.f = p.f), (u.h = p.h), (u.g = p.g), (u.tParent = p.tParent), (c = !0));
                } else {
                    if (p.bIsEndPos) return this.genAStarPath(p, []);
                    (u = !0),
                    (u = null == n[p.sKey] ? null != t._pCheckHitFunc && t._pCheckHitFunc(p.x, p.y) : u) ||
                    (o.push(p), (a[p.sKey] = p), (c = !0));
                }
            }
            return (
                null == r.tParent || r.tParent.sKey,
                c &&
                o.sort(function(t, e) {
                    return t.f - e.f;
                }),
                this.innerSearchPathAStar(t)
            );
        }),
        (u.genAStarPath = function(t, e) {
            return (
                (e = null == (e = void 0 === e ? null : e) ? [] : e).unshift(t),
                null != t.tParent ? this.genAStarPath(t.tParent, e) : e
            );
        }),
        (u.checkHitRect = function(t, e, o) {
            if (null != o)
                for (var n = 0; n < o.length; n++) {
                    var i = (s = o[n]).x - 0.5 * s.width,
                        a = s.x + 0.5 * s.width,
                        r = s.y + 0.5 * s.height,
                        s = s.y - 0.5 * s.height;
                    if (i < t && t < a && s < e && e < r) return !0;
                }
            return !1;
        }),
        (u.vec2ToDegrees = function(t, e) {
            return (e = cc.v2(t).signAngle(e)), (cc.misc.radiansToDegrees(e) + 360) % 360;
        }),
        (u.degreesToVectors = function(t) {
            return (t = cc.misc.degreesToRadians(t)), cc.v2(0, 1).rotate(-t);
        }),
        (u.convertPosAR = function(t, e, o, n) {
            void 0 === n && (n = null), null == (o = void 0 === o ? null : o) && (o = cc.Vec2.ZERO);
            var i = cc.v2(0, 0);
            return null == n && (n = i), t && e && (t.convertToWorldSpaceAR(o, i), e.convertToNodeSpaceAR(i, n)), n;
        }),
        (u.broadWorldCb = function() {
            l.gm.localData.get_bless_data(!0);
        }),
        (u.broadWorld = function(t, e, o, n) {
            void 0 === e && (e = 0), void 0 === o && (o = ""), void 0 === n && (n = "");
            for (var i, a = null, r = l.gm.config.data.Broad, s = 0; s < r.length; s++) {
                var c = r[s];
                if (t == c.type && e == c.condition) {
                    a = c;
                    break;
                }
            }
            a &&
                ((i = cc.js.formatStr(a.content, l.gm.localData.nick_name, o)),
                    "" != n && (i = cc.js.formatStr(a.content, l.gm.localData.nick_name, o, n)),
                    (i = encodeURIComponent(i)),
                    u.server_http_request(
                        this.broadWorldCb,
                        this,
                        l.gm.channel.getServerUrl() +
                        "user/upload_player_broadcast_record?token=%s&uid=%s&wish=%s&nickname=%s&type=%s",
                        l.gm.data.token,
                        l.gm.data.uid,
                        i,
                        "系统",
                        "1"
                    ));
        }),
        (u.random = function(t, e, o) {
            return (
                void 0 === t && (t = !1),
                void 0 === e && (e = 0),
                void 0 === o && (o = 1),
                (this.seed = (9301 * this.seed + 49297) % 233280),
                (e += (this.seed / 233280) * (o - e)),
                t ? Math.floor(e) : e
            );
        }),
        (u.seed = 1574822809),
        (u.drop_seed = 1574822809),
        (u.chinese_num_array = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万"]),
        (u.vDir = cc.v2(0, 0)),
        (u.vConvertTempPos = cc.v2(0, 0)),
        (u.vDirSpeed = cc.v2(0, 0)),
        (u.SP_DIR_TOP = 0),
        (u.SP_DIR_DOWN = 1),
        (u.SP_DIR_LEFT = 2),
        (u.SP_DIR_RIGHT = 3),
        (u.SP_DIR_TOP_LEFT = 4),
        (u.SP_DIR_TOP_RIGHT = 5),
        (u.SP_DIR_DOWN_LEFT = 6),
        (u.SP_DIR_DOWN_RIGHT = 7),
        (u.iAStarPathCount = 0),
        (u.uid = 0),
        (u.HEAD = "HEAD"),
        (u.GET = "GET"),
        (u.POST = "POST"),
        u);

function u() {}
o.Utils = t;