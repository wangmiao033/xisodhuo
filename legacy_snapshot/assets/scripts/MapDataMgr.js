var t = require;
var e = module;
var o = exports;
var n =
    (this && this.__decorate) ||
    function (t, e, o, n) {
        var i,
            a = arguments.length,
            r = a < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
        else
            for (var s = t.length - 1; 0 <= s; s--)
                (i = t[s]) && (r = (a < 3 ? i(r) : 3 < a ? i(e, o, r) : i(e, o)) || r);
        return 3 < a && r && Object.defineProperty(e, o, r), r;
    };
Object.defineProperty(o, "__esModule", {value: !0});
var c = t("Const"),
    p = t("GameMgr"),
    s = t("MapObjectData"),
    i = t("Vec2Utils"),
    a = t("MapHelper"),
    u = t("CommonUtils"),
    l = t("MapObject"),
    r = t("MainHouse"),
    d = t("OccupyData"),
    h = t("ObstacleData"),
    _ = t("TMXUtils"),
    f = t("MainRoleMgr"),
    m = t("MapInsideMgr"),
    g = t("GuideMgr"),
    y = t("NpcMgr"),
    v = t("PlaceMgr"),
    b = t("Shopboard"),
    I = t("BedRoom"),
    M = t("MapDataLoader"),
    e = t("Decorators"),
    C = t("ChickenHouse"),
    D = t("PigHouse"),
    w = t("CattleHouse"),
    e =
        ((O.prototype.clear = function () {
            (this.mapObject = {}),
                (this._mapObjectDatas = {}),
                (this.occupyData = new d.default()),
                (this.obstacleData = new h.default());
        }),
        (O.prototype.addOriginalObjectDatas = function (t) {
            this.mapSize = cc.size(t.width, t.height);
            for (var e = {}, o = 0, n = t.layers; o < n.length; o++) {
                var i = n[o];
                if ("object_layer" == i.name) {
                    e = i.data;
                    break;
                }
            }
            (t = Object.keys(e).length), cc.log("this.initObjectLayerData len is", t);
            var a,
                r = !1;
            for (a in e) {
                var s = Number(e[a].id);
                (NaN == s || s <= 0) && cc.error("objectID error", s, e[a]);
                var c = a.split("-"),
                    l = u.default.createOriginalUID(c[0], c[1], s);
                p.gm.localData.initMapObjects[l] ||
                    ((p.gm.localData.initMapObjects[l] = s),
                    (r = !0),
                    p.gm.localData.addMapObjectData(l, {x: Number(c[0]), y: Number(c[1]), objectID: s}),
                    this._setInitSetting(l));
            }
            r && (p.gm.localData.saveByKey("initMapObjects"), p.gm.localData.saveByKey("mapObjectDatas"));
        }),
        (O.prototype.initMapObjectData = function () {
            for (var t in p.gm.localData.mapObjectDatas)
                (e = p.gm.localData.mapObjectDatas[t]).parentUID ||
                    (e ? s.default.createByLocalData(e, t) : cc.error("not found local data"));
            for (var t in p.gm.localData.mapObjectDatas) {
                var e;
                (e = p.gm.localData.mapObjectDatas[t]).parentUID &&
                    (e ? s.default.createByLocalData(e, t) : cc.error("not found local data"));
            }
            for (var o in this._mapObjectDatas) this.initInsideData(this._mapObjectDatas[o]);
        }),
        (O.prototype.loadObjectReq = function () {
            this.set_load_object_req = !0;
        }),
        (O.prototype.loadObjects = function (t) {
            void 0 === t && (t = null), M.default.getInstance().updateLoadObjects();
        }),
        (O.prototype.createByLocalData = function (t, e) {
            !t ||
                ((e = s.default.createByLocalData(t, e)).objectState == c.ObjectState.none &&
                    ((e.objectState = c.ObjectState.loading), e.loadObject()));
        }),
        (O.prototype.addObject = function (t, e, o) {
            var n,
                i = this;
            this.mapObject[e.getUID()]
                ? o && o(this.mapObject[e.getUID()])
                : !(n = e.getParentData()) || this.mapObject[n.getUID()]
                ? this._addObject(t, e, o)
                : n.loadObject(function () {
                      i._addObject(t, e, o);
                  });
        }),
        (O.prototype._addObject = function (t, e, o) {
            if (this.mapObject[e.getUID()]) cc.error("请勿重复添加对象", e);
            else {
                var n = this._getParentNode(e),
                    i = cc.instantiate(t),
                    a = i.getComponent(l.default);
                if (
                    ((a.prefab = t),
                    (a.objectID = e.objectID),
                    (a.data = e),
                    (this.mapObject[e.getUID()] = a),
                    (i.parent = n),
                    (i.active = !0),
                    a.initMapPos(e.posSys),
                    e.objectID == c.SpecialObjectID.mainHouse)
                ) {
                    this.mainHouse = a;
                    for (var r = 0, s = y.default.getInstance().getAllNpcView(); r < s.length; r++) s[r].updatePos();
                } else e.objectID == c.SpecialObjectID.stall && (this.shopboard = a);
                o && o(a);
            }
        }),
        (O.prototype._addInitInsideObject = function (t) {
            var e,
                o = m.default.getInstance().getInsideObject(t.objectID, "object_layer"),
                n = !1;
            for (e in o) {
                var i = Number(o[e].id),
                    a = e.split("-"),
                    r = u.default.createOriginalUID(Number(a[0]), Number(a[1]), i, t.getUID());
                p.gm.localData.initInsideObjects[r] ||
                    ((p.gm.localData.initInsideObjects[r] = i),
                    (n = !0),
                    (i = {x: Number(a[0]), y: Number(a[1]), objectID: i, parentUID: t.getUID()}),
                    p.gm.localData.addMapObjectData(r, i),
                    (r = s.default.createByLocalData(i, r)).objectState == c.ObjectState.none &&
                        ((r.objectState = c.ObjectState.loading), r.loadObject()));
            }
            n && (p.gm.localData.saveByKey("initInsideObjects"), p.gm.localData.saveByKey("mapObjectDatas"));
        }),
        (O.prototype.initInsideData = function (t) {
            var e,
                o = m.default.getInstance().getInsideObject(t.objectID, "object_layer"),
                n = !1;
            for (e in o) {
                var i = Number(o[e].id),
                    a = e.split("-"),
                    r = u.default.createOriginalUID(Number(a[0]), Number(a[1]), i, t.getUID());
                p.gm.localData.initInsideObjects[r] ||
                    ((p.gm.localData.initInsideObjects[r] = i),
                    (n = !0),
                    (i = {x: Number(a[0]), y: Number(a[1]), objectID: i, parentUID: t.getUID()}),
                    p.gm.localData.addMapObjectData(r, i),
                    s.default.createByLocalData(i, r));
            }
            n && (p.gm.localData.saveByKey("initInsideObjects"), p.gm.localData.saveByKey("mapObjectDatas"));
        }),
        (O.prototype.createPreviewObject = function (e, o, n, t) {
            var i = this,
                a = _.default.tileToCocos(n, p.gm.mapData.mapSize, p.gm.const.GridSize);
            t = t || u.default.createOriginalUID(n.x, n.y, e);
            var r = s.default.createByID(e, t);
            p.gm.localData.collect_decoration_datas[t] && (r.lv = p.gm.localData.collect_decoration_datas[t].lv),
                r.setWorldGrid(n),
                u.default.loadMapObjectPrefab(e, function (t) {
                    ((t = cc.instantiate(t)).x = a.x),
                        (t.y = a.y),
                        (t.getComponent(l.default).objectID = e),
                        (t.getComponent(l.default).data = r),
                        (t.getComponent(l.default).mode = c.MapObjectMode.preview),
                        (t.parent = o),
                        t.getComponent(l.default).setMode(c.MapObjectMode.preview),
                        i.setTempMapObject(n, t.getComponent(l.default));
                }),
                this.setTempObjectData(r);
        }),
        (O.prototype.setTempObjectData = function (t) {
            this.tempObjectData = t;
        }),
        (O.prototype.setTempMapObject = function (t, e) {
            (this.tempMapObject = e).setGridPosAndShowGrid(t), e.setMode(c.MapObjectMode.preview);
        }),
        (O.prototype.removeMapObject = function (t) {
            this.obstacleData.removeMapObstacle(this._mapObjectDatas[t].getUnCrossGrid()),
                (this._mapObjectDatas[t] = null),
                delete this._mapObjectDatas[t],
                this.mapObject[t].node.destroy(),
                delete this.mapObject[t],
                p.gm.localData.removeMapObjectData(t);
        }),
        (O.prototype.cancelPreview = function () {
            a.default.hideGrid(), this.removeTempObject(), a.default.setMapMove();
        }),
        (O.prototype.onConfirmPreviewByData = function (t) {
            if (v.default.getInstance().checkCanPut(t)) {
                t.updateParent();
                var e = s.default.toLocalObjectData(t);
                return (
                    (e.unlockAction = !0),
                    p.gm.localData.addMapObjectData(t.getUID(), e),
                    this.createByLocalData(e, t.getUID()),
                    this.removeTempObject(),
                    !0
                );
            }
            return cc.log("该位置不能建造"), !1;
        }),
        (O.prototype.removeTempObject = function () {
            this.tempMapObject.node.destroy(), (this.tempMapObject = null), (this.tempObjectData = null);
        }),
        (O.prototype.liftObject = function (t) {
            this.obstacleData.removeMapObstacle(t.getUnCrossGrid());
            var e = t.getUID();
            (this.liftMapObjectDatas[e] = t),
                (this.liftMapObject[e] = this.mapObject[e]),
                this.liftMapObject[e].reqShowGrid(),
                (this.liftMapObjectGrid = cc.v2(this.mapObject[e].worldGrid.x, this.mapObject[e].worldGrid.y)),
                delete this._mapObjectDatas[e],
                delete this.mapObject[e];
        }),
        (O.prototype.place = function (t) {
            var e = t.getUnCrossGrid();
            this.obstacleData.addMapObstacles(e)
                ? ((e = t.getUID()),
                  t.updateParent(),
                  (this._mapObjectDatas[e] = this.liftMapObjectDatas[e]),
                  (this.mapObject[e] = this.liftMapObject[e]),
                  delete this.liftMapObjectDatas[e],
                  delete this.liftMapObject[e],
                  t.save(),
                  this.checkInHouse(t) && ((this.mapObject[e].lockIndex = !0), this.mapObject[e].updateIndex(1)))
                : cc.error(t.objectID);
        }),
        (O.prototype.checkInHouse = function (t) {
            var e = this.mainHouse.data.getSeizePos(),
                t = t.getSeizePos();
            return i.default.includes(e, t);
        }),
        (O.prototype.checkMoveIntoHouse = function () {
            var t = [],
                e = f.default.getInstance().mainRole.getGrid();
            t.push(e);
            var o = this.mainHouse.data.getSeizePos(),
                n = this.mainHouse.getComponent(r.default);
            i.default.includes(this.mainHouse.data.getGridByBounding(8), t) ? n.open() : n.close(),
                i.default.includes(o, [e])
                    ? ((f.default.getInstance().mainRolePosStatus = c.EnumRolePos.MianHouse),
                      (this.mainHeroInObjectUID = this.mainHouse.data.getUID()))
                    : (f.default.getInstance().mainRolePosStatus == c.EnumRolePos.MianHouse &&
                          100001 == p.gm.localData.lastGuide.id &&
                          0 == g.default.getInstance().lastGuideIndex &&
                          ((g.default.getInstance().lastGuideIndex += 1),
                          g.default.getInstance().dealGuide(p.gm.localData.lastGuide.id)),
                      (f.default.getInstance().mainRolePosStatus = c.EnumRolePos.Field),
                      (this.mainHeroInObjectUID = ""));
        }),
        (O.prototype.openHouse = function () {
            var t = this.mainHouse.getComponent(r.default);
            t && t.open();
        }),
        (O.prototype.collect = function (t) {
            var e = this.liftMapObjectDatas[t];
            e &&
                (p.gm.localData.addToCollect(t, {
                    x: e.getWorldGrid().x,
                    y: e.getWorldGrid().y,
                    objectID: e.objectID,
                    lv: e.lv
                }),
                this.liftMapObject[t].node.destroy(),
                delete this.liftMapObject[t],
                delete this.liftMapObjectDatas[t],
                p.gm.localData.removeMapObjectData(t));
        }),
        (O.prototype.getObjectData = function (t) {
            return this._mapObjectDatas[t];
        }),
        (O.prototype.getAllObjectDatas = function () {
            return this._mapObjectDatas;
        }),
        (O.prototype._setInitSetting = function (t) {
            var e = p.gm.localData.getMapObjectData(t),
                o = e.objectID,
                t = 0;
            if (10011 == o) t = p.gm.config.data.Setting[0].InitialPlant1[1];
            else if (10015 == o) t = p.gm.config.data.Setting[0].InitialPlant2[1];
            else if (10012 == o) t = p.gm.config.data.Setting[0].InitialPlant3[1];
            else {
                if (10013 != o) return;
                t = p.gm.config.data.Setting[0].InitialPlant4[1];
            }
            (e.slots = []), e.slots.push({isLock: !1, produceID: t, beginTime: 1, endTime: 1, pickID: 0});
        }),
        (O.prototype.resetCurTouchObject = function () {
            this.curTouchObject && (this.curTouchObject.hideHp(), (this.curTouchObject = null));
        }),
        (O.prototype._getParentNode = function (t) {
            var e = p.gm.mainUI.map_object_layer;
            return (
                !t.getParentUID() ||
                    ((t = this.mapObject[t.getParentUID()]) &&
                        (t.objectID == c.SpecialObjectID.stall
                            ? (e = t.getComponent(b.default).nod_inside)
                            : t.objectID == c.SpecialObjectID.mainHouse
                            ? (e = t.getComponent(r.default).nod_inside)
                            : t.objectID == c.SpecialObjectID.bedroom
                            ? (e = t.getComponent(I.default).nod_inside)
                            : t.objectID == c.SpecialObjectID.Chicken
                            ? (e = t.getComponent(C.default).nod_inside)
                            : t.objectID == c.SpecialObjectID.Pig
                            ? (e = t.getComponent(D.default).nod_inside)
                            : t.objectID == c.SpecialObjectID.Milk_Cow || t.objectID == c.SpecialObjectID.Ox
                            ? (e = t.getComponent(w.default).nod_inside)
                            : t.nod_inside
                            ? (e = t.nod_inside)
                            : cc.error("not found parent node"))),
                e
            );
        }),
        (O.prototype.updateBreedData = function () {
            for (var t in this._mapObjectDatas) (t = this._mapObjectDatas[t]).breedData && t.updateLocalData();
        }),
        n([e.PrintFuncTime()], O.prototype, "addObject", null),
        O);
function O() {
    (this.mapObject = {}),
        (this._mapObjectDatas = {}),
        (this.liftMapObject = {}),
        (this.liftMapObjectDatas = {}),
        (this.liftMapObjectGrid = null),
        (this.tempObjectData = null),
        (this.tempMapObject = null),
        (this.occupyData = new d.default()),
        (this.obstacleData = new h.default()),
        (this.mainHouse = null),
        (this.shopboard = null),
        (this.mainHeroInObjectUID = ""),
        (this.curTouchObject = null),
        (this.guidingID = 0),
        (this.mapScale = 0.7),
        (this.districtTouchLimit = !0),
        (this.set_load_object_req = !1);
}
o.default = e;
