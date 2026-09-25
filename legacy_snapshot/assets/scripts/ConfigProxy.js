var t = require;
var e = module;
var o = exports;
var n,
    e =
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
var i,
    e =
        (e(a, (i = t("Singleton").default)),
        (a.prototype.initConfig = function (t) {
            this._dbConfig = t;
        }),
        Object.defineProperty(a.prototype, "data", {
            get: function () {
                return this._dbConfig;
            },
            enumerable: !1,
            configurable: !0
        }),
        (a.prototype.getPropMap = function () {
            if (0 == Object.keys(this._propMap).length)
                for (var t = 0, e = this._dbConfig.Prop; t < e.length; t++) {
                    var o = e[t];
                    this._propMap[o.id] = o;
                }
            return this._propMap;
        }),
        (a.prototype.getBigMapObjectConfig = function () {
            if (!this._dbConfig) return {};
            if (0 == Object.keys(this._bigMapObject).length)
                for (var t = 0, e = this._dbConfig.BigMapObjects; t < e.length; t++) {
                    var o = e[t];
                    this._bigMapObject[o.object_id] = o;
                }
            return this._bigMapObject;
        }),
        Object.defineProperty(a.prototype, "taskConfigs", {
            get: function () {
                if (0 == Object.keys(this._tasks).length)
                    for (var t = 0, e = this._dbConfig.Tasks; t < e.length; t++) {
                        var o = e[t];
                        this._tasks[o.id] = o;
                    }
                return this._tasks;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "collectionsConfig", {
            get: function () {
                if (0 == Object.keys(this._collections).length)
                    for (var t = 0, e = this._dbConfig.Collections; t < e.length; t++) {
                        var o = e[t];
                        this._collections[o.id] = o;
                    }
                return this._collections;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "outsideMapConfig", {
            get: function () {
                if (0 == Object.keys(this._outsideMap).length)
                    for (var t = 0, e = this._dbConfig.OutsideMap; t < e.length; t++) {
                        var o = e[t];
                        this._outsideMap[o.id] = o;
                    }
                return this._outsideMap;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "outsideMapResConfig", {
            get: function () {
                if (0 == Object.keys(this._outsideMapRes).length)
                    for (var t = 0, e = this._dbConfig.OutsideMapRes; t < e.length; t++) {
                        var o = e[t];
                        this._outsideMapRes[o.id] = o;
                    }
                return this._outsideMapRes;
            },
            enumerable: !1,
            configurable: !0
        }),
        (a.prototype.getOutsideMapResConfigAry = function (t) {
            for (var e = [], o = 0, n = this._dbConfig.OutsideMapRes; o < n.length; o++) {
                var i = n[o];
                i.zone_id == t && e.push(i);
            }
            return e;
        }),
        (a.prototype.getOutsideStoreConfigAry = function () {
            for (var t = [], e = 0, o = this._dbConfig.OutsideMapStore; e < o.length; e++) {
                var n = o[e];
                t.push(n);
            }
            return t;
        }),
        (a.prototype.getPetAniConfigAry = function () {
            for (var t = [], e = 0, o = this._dbConfig.PetRoomAni; e < o.length; e++) {
                var n = o[e];
                t.push(n);
            }
            return t;
        }),
        (a.prototype.getOutsideMapResConfig = function (t, e) {
            for (var o = 0, n = this._dbConfig.OutsideMapRes; o < n.length; o++) {
                var i = n[o];
                if (i.zone_id == t && i.res_id == e) return i;
            }
            return null;
        }),
        (a.prototype.getPetConfig = function (t) {
            for (var e = 0, o = this._dbConfig.Pet; e < o.length; e++) {
                var n = o[e];
                if (n.id == t) return n;
            }
            return null;
        }),
        (a.prototype.getOutsideMonsterConfig = function (t) {
            for (var e = 0, o = this._dbConfig.OutsideMapMonster; e < o.length; e++) {
                var n = o[e];
                if (n.id == t) return n;
            }
            return null;
        }),
        (a.prototype.getExploreStoreConfig = function (t) {
            for (var e = 0, o = this._dbConfig.OutsideMapStore; e < o.length; e++) {
                var n = o[e];
                if (n.id == t) return n;
            }
            return null;
        }),
        (a.prototype.getRandomNameConfigAry = function () {
            for (var t = [], e = 0, o = this._dbConfig.RandomName; e < o.length; e++) {
                var n = o[e];
                t.push(n);
            }
            return t;
        }),
        (a.prototype.getPetRoomConfigAry = function () {
            for (var t = [], e = 0, o = this._dbConfig.PetRoomRes; e < o.length; e++) {
                var n = o[e];
                t.push(n);
            }
            return t;
        }),
        (a.prototype.getPetRoomConfig = function (t) {
            for (var e = 0, o = this._dbConfig.PetRoomRes; e < o.length; e++) {
                var n = o[e];
                if (n.res_id == t) return n;
            }
            return null;
        }),
        (a.prototype.getOnlineConfig = function (t) {
            for (var e = 0, o = this._dbConfig.online; e < o.length; e++) {
                var n = o[e];
                if (n.id == t) return n;
            }
            return null;
        }),
        Object.defineProperty(a.prototype, "menuConfig", {
            get: function () {
                if (0 == Object.keys(this._menuConfigs).length)
                    for (var t = 0, e = this._dbConfig.FoodMenuDatas; t < e.length; t++) {
                        var o = e[t];
                        this._menuConfigs[o.menu_id] = o;
                    }
                return this._menuConfigs;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "barbecueMenu", {
            get: function () {
                if (0 == Object.keys(this._barbecueMenu).length)
                    for (var t = 0, e = this._dbConfig.BarbecueMenu; t < e.length; t++) {
                        var o = e[t];
                        this._barbecueMenu[o.menu_id] = o;
                    }
                return this._barbecueMenu;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "decorationConfigs", {
            get: function () {
                if (0 == Object.keys(this._decorationConfigs).length)
                    for (var t = 0, e = this._dbConfig.Decorations; t < e.length; t++) {
                        var o = e[t];
                        this._decorationConfigs[o.id] || (this._decorationConfigs[o.id] = []),
                            this._decorationConfigs[o.id].push(o);
                    }
                return this._decorationConfigs;
            },
            enumerable: !1,
            configurable: !0
        }),
        a);
function a() {
    var t = (null !== i && i.apply(this, arguments)) || this;
    return (
        (t._propMap = {}),
        (t._bigMapObject = {}),
        (t._tasks = {}),
        (t._collections = {}),
        (t._outsideMap = {}),
        (t._outsideMapRes = {}),
        (t._exploreStore = {}),
        (t._menuConfigs = {}),
        (t._barbecueMenu = {}),
        (t._decorationConfigs = {}),
        t
    );
}
o.default = e;
