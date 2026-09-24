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
    e = t("Singleton"),
    r = t("SpineUtils"),
    i =
        (i(s, (a = e.default)),
        (s.prototype.changeHair = function (t, e, o) {
            var n = (o = void 0 !== o && o) ? "b" : "f",
                i = n + "_hair_a",
                o = i + "_" + e,
                e = (n = n + "_hair_b") + "_" + e;
            r.default.clearAttachment(t, "f_hair_a"),
                r.default.clearAttachment(t, "f_hair_b"),
                r.default.clearAttachment(t, "b_hair_a"),
                r.default.clearAttachment(t, "b_hair_b"),
                r.default.changePartialCloth(t, i, "default", o),
                r.default.changePartialCloth(t, n, "default", e);
        }),
        (s.prototype.changeEye = function (t, e) {
            var o = "f_eye_" + e;
            r.default.clearAttachment(t, "f_eye"),
                r.default.changePartialCloth(t, "f_eye", "default", o),
                this.changeMouth(t, e);
        }),
        (s.prototype.changeMouth = function (t, e) {
            (e = "f_mouth_" + e),
                r.default.clearAttachment(t, "f_mouth"),
                r.default.changePartialCloth(t, "f_mouth", "default", e);
        }),
        (s.prototype.changeFace = function (t, e) {
            (e = "f_face_" + e),
                r.default.clearAttachment(t, "f_face"),
                r.default.changePartialCloth(t, "f_face", "default", e);
        }),
        (s.prototype.changeShoe = function (t, e, a) {
            (function (t, e, o) {
                void 0 === a && (o = !1),
                    r.default.clearAttachment(t, "f_shoe_a_l"),
                    r.default.clearAttachment(t, "f_shoe_a_r"),
                    r.default.clearAttachment(t, "b_shoe_a_l"),
                    r.default.clearAttachment(t, "b_shoe_a_r");
                var n = o ? "b" : "f",
                    i = n + "_shoe_a_l",
                    o = i + "_" + e;
                r.default.changePartialCloth(t, i, "default", o),
                    r.default.changePartialCloth(t, (n += "_shoe_a_r"), "default", n + "_" + e);
            })(t, e, (a = void 0 !== a && a)),
                (function (t, e, o) {
                    void 0 === a && (o = !1),
                        r.default.clearAttachment(t, "f_shoe_b_l"),
                        r.default.clearAttachment(t, "f_shoe_b_r"),
                        r.default.clearAttachment(t, "b_shoe_b_l"),
                        r.default.clearAttachment(t, "b_shoe_b_r");
                    var n = o ? "b" : "f",
                        i = n + "_shoe_b_l",
                        o = i + "_" + e;
                    r.default.changePartialCloth(t, i, "default", o),
                        r.default.changePartialCloth(t, (n += "_shoe_b_r"), "default", n + "_" + e);
                })(t, e, a);
        }),
        (s.prototype.changeHat = function (t, e, o) {
            void 0 === o && (o = !1), r.default.clearAttachment(t, "b_hat"), r.default.clearAttachment(t, "f_hat");
            var n = (o ? "b" : "f") + "_hat",
                o = n + "_" + e;
            e && r.default.changePartialCloth(t, n, "default", o);
        }),
        (s.prototype.changeGlasses = function (t, e, o) {
            void 0 === o && (o = !1),
                r.default.clearAttachment(t, "b_glasses"),
                r.default.clearAttachment(t, "f_glasses");
            var n = (o ? "b" : "f") + "_glasses",
                o = n + "_" + e;
            r.default.clearAttachment(t, n), e && r.default.changePartialCloth(t, n, "default", o);
        }),
        (s.prototype.changeEarrings = function (t, e, o) {
            void 0 === o && (o = !1),
                r.default.clearAttachment(t, "f_earrings"),
                r.default.clearAttachment(t, "b_earrings");
            var n = (o ? "b" : "f") + "_earrings",
                o = "f_earrings_" + e;
            e && r.default.changePartialCloth(t, n, "default", o);
        }),
        (s.prototype.changeClothing = function (t, e) {
            t.setSkin("skin_" + e);
        }),
        (s.prototype.changeNecklace = function (t, e) {
            r.default.clearAttachment(t, "f_necklace"),
                e && r.default.changePartialCloth(t, "f_necklace", "default", (e = "f_necklace_" + e));
        }),
        s);
function s() {
    return (null !== a && a.apply(this, arguments)) || this;
}
o.default = i;
