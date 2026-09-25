var t = require;
var e = module;
var o = exports;
function n() {}
Object.defineProperty(o, "__esModule", {value: !0}),
    (n.setAnimation = function (t, e, o, n) {
        void 0 === o && (o = !0), void 0 === n && (n = !1), (e == t.animation && !n) || t.setAnimation(0, e, o);
    }),
    (n.stopAnimation = function (t) {
        (t = t.setAnimation(0, t.animation, !0)).animationStart = t.animationEnd;
    }),
    (n.changePartialCloth = function (t, e, o, n) {
        var i,
            a = t.findSlot(e);
        a
            ? ((o = (i = t.skeletonData.getRuntimeData()).findSkin(o)),
              (i = i.findSlotIndex(e)),
              (n = o.getAttachment(i, n)) && (a.setAttachment(n), t.invalidAnimationCache()))
            : cc.error("not found slot:", e);
    }),
    (n.clearAttachment = function (t, e) {
        (e = t.findSlot(e)) && e.setAttachment(null);
    }),
    (n.setEventListener = function (t, e) {
        t.setEventListener(e);
    }),
    (n.setListener = function (t, e) {
        e && t.setCompleteListener(e);
    }),
    (n.updateSpine = function (t, e) {
        var o;
        t ? (o = t.getCurrent(0)) && ((e = o.animationEnd * e), (o.animationStart = e)) : cc.error("not spine", t);
    }),
    (n.async_get_bundle = function (o, n) {
        var t = cc.assetManager.getBundle(o);
        t
            ? n(t)
            : cc.assetManager.loadBundle(o, function (t, e) {
                  console.log("load " + o + " bundle successfully."), n(e);
              });
    }),
    (n.async_set_spine = function (o, t, n, i, a) {
        var r = this;
        this.async_get_bundle(t, function (t) {
            var e = t.get(n, sp.SkeletonData);
            e
                ? ((o.skeletonData = e), i && a && i.call(a, e))
                : ((e = r.spine_data_map[o.uuid]) ||
                      ((e = {sprite_uuid: o.uuid, newest_url: n}), (r.spine_data_map[o.uuid] = e)),
                  (e.sprite_uuid = o.uuid),
                  (e.newest_url = n),
                  t.load(n, sp.SkeletonData, function (t, e) {
                      t
                          ? console.error(t.message)
                          : ((o.skeletonData = e),
                            i && a && i.call(a, e),
                            (t = r.spine_data_map[o.uuid]) &&
                                n == t.newest_url &&
                                o.isValid &&
                                ((o.skeletonData = e), i && a && i.call(a, e)));
                  }));
        });
    }),
    (n.spine_data_map = {}),
    (o.default = e = n);
