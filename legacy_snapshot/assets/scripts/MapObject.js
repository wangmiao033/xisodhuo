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
        }),
    a =
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
var r,
    s = t("AudioUtils"),
    c = t("CommonData"),
    l = t("CommonUtils"),
    p = t("ConfigUtils"),
    u = t("Const"),
    d = t("FlyIconCreator"),
    h = t("GameMgr"),
    _ = t("IMapPosCtrl"),
    f = t("LvMgr"),
    m = t("MapDataHelper"),
    g = t("MapHelper"),
    y = t("ObjectHp"),
    v = t("PropMgr"),
    b = t("Utils"),
    I = t("ActionUtils"),
    M = t("EventManager"),
    C = t("AniUtils"),
    D = t("NodeUtils"),
    w = t("TimeUtils"),
    O = t("TMXUtils"),
    k = t("NetUtils"),
    P = t("GetAwardUI"),
    S = t("PlaceMgr"),
    T = t("CompletionHelper"),
    j = t("FoodOrderMgr"),
    A = t("DailyTaskData"),
    U = t("DecorationMgr"),
    N = t("GuideMgr"),
    R = t("HeartMgr"),
    E = t("HouseKeeperMgr"),
    G = t("MainRoleMgr"),
    B = t("ObjectMgrHelper"),
    x = t("ShelfNpcMgr"),
    L = t("TaskRecordData"),
    F = t("TruckOrderMgr"),
    H = t("MapObjectCommon"),
    V = t("RockingChair"),
    t = (e = cc._decorator).ccclass,
    e = e.property,
    t =
        (i(W, (r = _.default)),
        Object.defineProperty(W.prototype, "calGridShow", {
            get: function () {
                return this._calGridShow;
            },
            set: function (t) {
                this._calGridShow = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        (W.prototype.onLoad = function () {
            M.default.on(u.GameEvent.decoration_can_upgrade, this.receiveCanUpgrade, this),
                this.map_grid && ((this.map_grid.node.active = !1), this.map_grid.enableCulling(!1)),
                this.map_inside && ((this.map_inside.node.active = !1), this.map_inside.enableCulling(!1)),
                this.objectHp && (this.objectHp.node.active = !1),
                this.object_common && this.object_common.setObject(this),
                this.hideFinger(),
                this.updateUI(),
                this.initComponent();
        }),
        (W.prototype.onDestroy = function () {
            r.prototype.onDestroy.call(this),
                M.default.off(u.GameEvent.decoration_can_upgrade, this.receiveCanUpgrade, this);
        }),
        (W.prototype.onEnable = function () {}),
        (W.prototype.updateUI = function () {
            this.data
                ? (this.nod_rotation && (this.nod_rotation.scaleX = this.data.rotation ? -1 : 1),
                  this.data.isLock() ? this.setLockView() : this.setUnlockView(),
                  this.showCanUpgrade(this.data.canUpgrade),
                  this.updateChildren())
                : cc.error("not data ", this.data, this.objectID);
        }),
        (W.prototype.setMode = function (t) {
            cc.log("mapobject id", this.objectID),
                this.getPreviewTouchNode().off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this),
                this.getPreviewTouchNode().off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this),
                this.getPreviewTouchNode().off(cc.Node.EventType.TOUCH_END, this.onPreviewTouchEnd, this),
                this.getPreviewTouchNode().off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this),
                (this.mode = t),
                this.updateView();
        }),
        (W.prototype.updateView = function () {
            this.mode == u.MapObjectMode.preview
                ? (this.reqShowGrid(),
                  this.getPreviewTouchNode().on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this),
                  this.getPreviewTouchNode().on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this),
                  this.getPreviewTouchNode().on(cc.Node.EventType.TOUCH_END, this.onPreviewTouchEnd, this),
                  this.getPreviewTouchNode().on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this),
                  this.nod_object &&
                      cc
                          .tween(this.nod_object)
                          .repeatForever(cc.tween().by(1, {y: 20}).by(1, {y: -20}))
                          .start())
                : (this.nod_object && (this.nod_object.stopAllActions(), (this.nod_object.y = 0)),
                  this.hideGrid(),
                  g.default.setMapMove());
        }),
        (W.prototype.onTouchStart = function (t) {
            this.mode == u.MapObjectMode.preview &&
                (g.default.setMapNoMove(), (this.startPos = this.node.convertToNodeSpaceAR(t.getLocation())));
        }),
        (W.prototype.onPreviewTouchEnd = function (t) {
            t.stopPropagation(), cc.log("on touch facade"), g.default.setMapMove();
        }),
        (W.prototype.onTouchCancel = function () {
            g.default.setMapMove();
        }),
        (W.prototype.onTouchMove = function (t) {
            var e;
            this.mode == u.MapObjectMode.preview &&
                ((e = h.gm.mainUI.preview_layer.convertToNodeSpaceAR(t.getLocation())),
                (t = this.startPos),
                (t = O.default.touchToTile(cc.v2(e.x - t.x, e.y - t.y), h.gm.mapData.mapSize, h.gm.const.GridSize)) &&
                    this.setGridPosAndShowGrid(t));
        }),
        (W.prototype.setPosByGrid = function (t) {
            (this.worldGrid = t),
                this.data.setWorldGrid(t),
                (t = l.default.worldGridToObjectLayerPos(t)),
                (t = this.node.parent.convertToNodeSpaceAR(t)),
                (this.node.x = t.x),
                (this.node.y = t.y - 56 + 7);
        }),
        (W.prototype.initMapPos = function (t) {
            (this.worldGrid = t.worldGrid),
                this.data.setWorldGrid(t.worldGrid),
                (t = l.default.worldGridToObjectLayerPos(t.worldGrid)),
                (t = this.node.parent.convertToNodeSpaceAR(t)),
                (this.node.x = t.x),
                (this.node.y = t.y - 56 + 7);
        }),
        (W.prototype.setGridPosAndShowGrid = function (t) {
            this.setPosByGrid(t), this.reqShowGrid();
        }),
        (W.prototype.updateIndex = function (t) {
            this.node.zIndex = t;
        }),
        (W.prototype.onLongTouch = function () {
            this.mode, u.MapObjectMode.normal;
        }),
        (W.prototype.onTouchObject = function (t) {
            if (!this.data.isDie) {
                if (
                    (p.BuildBuildingUtils.status == u.EnumBuildStatus.Prepare &&
                    this.data.getConfig().can_move &&
                    this.data.isBuilding()
                        ? (p.BuildBuildingUtils.setStatus(u.EnumBuildStatus.Moving),
                          this.setMode(u.MapObjectMode.preview),
                          this.updateIndex(99999),
                          h.gm.mapData.liftObject(this.data),
                          p.BuildBuildingUtils.showMovingUI())
                        : U.default.status == u.EnumDecorateStatus.Prepare &&
                          this.canDecorate() &&
                          (cc.log("点击自己"),
                          U.default.setStatus(u.EnumDecorateStatus.Moving),
                          this.setMode(u.MapObjectMode.preview),
                          this.updateIndex(99999),
                          h.gm.mapData.liftObject(this.data),
                          U.default.showMovingUI()),
                    U.default.status == u.EnumDecorateStatus.Moving &&
                        this.canDecorate() &&
                        m.default.getLiftObject() &&
                        m.default.getLiftObject().data.getUID() != this.data.getUID())
                ) {
                    cc.log("点击其他装饰物");
                    var e = m.default.getLiftObject();
                    if (!S.default.getInstance().checkCanPut(e.data))
                        return void h.gm.ui.showNotice("当前位置不能摆放");
                    e.setMode(u.MapObjectMode.normal),
                        h.gm.mapData.place(e.data),
                        this.setMode(u.MapObjectMode.preview),
                        this.updateIndex(99999),
                        h.gm.mapData.liftObject(this.data);
                }
                if (!S.default.getInstance().isBuildingMode() && this.mode == u.MapObjectMode.normal) {
                    if (this.data.isLock())
                        return (
                            this.data.isBuilding()
                                ? (this.objectID == u.SpecialObjectID.ToolRoom && I.default.touchScaleTween(this.node),
                                  this.objectID == u.SpecialObjectID.warehouse && I.default.touchScaleTween(this.node))
                                : this.data.isDecoration() && I.default.touchScaleTween(this.node),
                            void this.onBtnUnlock()
                        );
                    this.data.isBuilding()
                        ? (this.objectID == u.SpecialObjectID.ToolRoom &&
                              (I.default.touchScaleTween(this.node),
                              h.gm.ui.showModule(h.gm.const.ToolRoomUI, function (t) {
                                  t.setData();
                              })),
                          this.objectID == u.SpecialObjectID.warehouse &&
                              (I.default.touchScaleTween(this.node), h.gm.ui.showModule(h.gm.const.Warehouse)))
                        : this.data.isDecoration() &&
                          (I.default.touchScaleTween(this.node), l.default.onTouchDecoration(this));
                    var o,
                        n,
                        i,
                        a,
                        r,
                        e = h.gm.mapData.curTouchObject;
                    (h.gm.mapData.curTouchObject = this).data.isBuilding()
                        ? this.data.isLock() || (!this.data.getConfig().can_cross && !this.data.getConfig().can_go_in)
                            ? ((r = this.data.getOutsideGrid()),
                              (a = m.default.getFirstCanCross(r)) && G.default.getInstance().flyTo(a))
                            : ((o = t.getLocation()),
                              (n = h.gm.mainUI.tileMap_bg.node.convertToNodeSpaceAR(o)),
                              (i = O.default.touchToTile(n, h.gm.mapData.mapSize, h.gm.const.GridSize)),
                              m.default.checkCanStand(i)
                                  ? G.default.getInstance().roleMove(i)
                                  : ((r = this.data.getOutsideGrid()),
                                    (a = m.default.getFirstCanCross(r)) && G.default.getInstance().flyTo(a)))
                        : this.data.isDecoration()
                        ? ((r = this.data.getOutsideGrid()),
                          (a = m.default.getFirstCanCross(r)) && G.default.getInstance().flyTo(a))
                        : this.data.isCollection() || this.data.isSundries()
                        ? e == h.gm.mapData.curTouchObject
                            ? G.default.getInstance().onMoveEnd()
                            : (G.default.getInstance().updateDirectionByTarget(cc.v2(this.node.x, this.node.y)),
                              (r = this.data.getCollectPos()),
                              G.default.getInstance().flyTo(r))
                        : this.data.getConfig().can_cross
                        ? ((o = t.getLocation()),
                          (n = h.gm.mainUI.tileMap_bg.node.convertToNodeSpaceAR(o)),
                          (i = O.default.touchToTile(n, h.gm.mapData.mapSize, h.gm.const.GridSize)),
                          m.default.checkCanStand(i) && G.default.getInstance().roleMove(i))
                        : ((r = this.data.getOutsideGrid()),
                          (a = m.default.getFirstCanCross(r))
                              ? G.default.getInstance().roleMove(a)
                              : cc.log("无可到达路线", this.worldGrid));
                }
            }
        }),
        (W.prototype.showGrid = function () {
            if (this.getBgMapGrid()) {
                this.getBgMapGrid().node.active = !0;
                for (
                    var t = this.getBgMapGrid().getLayer("grid"), e = 0, o = this.data.getSeizePos();
                    e < o.length;
                    e++
                ) {
                    var n = (r = o[e]).x - this.data.getTopPos().x,
                        i = r.y - this.data.getTopPos().y,
                        a = void 0,
                        a = this.data.rotation ? t.getTiledTileAt(i, n, !0) : t.getTiledTileAt(n, i, !0),
                        r =
                            !l.default.checkInMainDistrict(r.x, r.y) ||
                            (this.data.isBuilding()
                                ? m.default.checkMapSeize(r)
                                : h.gm.mapData.obstacleData.checkMapObstacles([r]));
                    a.node.color = r ? cc.Color.RED : cc.Color.GREEN;
                }
            }
        }),
        (W.prototype.reqShowGrid = function () {
            this.calGridShow = !0;
        }),
        (W.prototype.update = function () {
            this.calGridShow &&
                (this.show_grid_cd++,
                5 <= this.show_grid_cd && ((this.show_grid_cd = 0), this.showGrid(), (this.calGridShow = !1)));
        }),
        (W.prototype.hideGrid = function () {
            this.map_grid && (this.map_grid.node.active = !1);
        }),
        (W.prototype.onBtnUnlock = function () {
            var o = this;
            cc.log(this.objectID), this.hideFinger(), N.default.getInstance().hideAllFinger();
            var n = p.ConfigUtils.BuildingUnlockUtils.getUnlockConfig(this.objectID);
            if (f.default.getInstance().getLv() < this.data.getUnlockLv())
                return (
                    cc.log(this.data.getUnlockLv() + "级解锁"),
                    void h.gm.ui.showNotice(this.data.getUnlockLv() + "级解锁")
                );
            if (n && n.limit_mission_id && !L.default.getInstance().doneTaskIDs.includes(n.limit_mission_id))
                h.gm.ui.showNotice("请先完成任务：" + h.gm.config.taskConfigs[n.limit_mission_id].name);
            else if (!n.completion || B.default.getInstance().checkCompletion(n.completion)) {
                if (this.data.isDecoration()) {
                    var t = U.default.getConfig(this.objectID, 1);
                    if (t && 2 == t.type) {
                        var e = T.default.getInstance().getObjectRange(this.data);
                        if (e.object_id && e.range && !T.default.getInstance().checkCanUnlock(e.object_id, e.range))
                            return;
                    }
                }
                h.gm.ui.showModule(h.gm.const.UnlockUI, function (t) {
                    var e = n.need;
                    t.setNeedProp(e),
                        t.setDesc(n.desc),
                        t.setTitle(o.data.getConfig().name),
                        o.data.getConfig().icon
                            ? t.setIconByStr(o.data.getConfig().icon)
                            : t.setIconByObjectID(o.objectID),
                        (t.callback = function () {
                            L.default.getInstance().unlock(o.objectID),
                                l.default.checkIsStallDesk(o.objectID) &&
                                    x.default.getInstance().setShelfNpcCD(o.objectID),
                                h.gm.localData.unlockUID(o.data.getUID()),
                                R.default.getInstance().onAdd(o.data);
                            var t = o.data.getOutsideGrid(),
                                t = m.default.getFirstCanCross(t) || t[0];
                            G.default.getInstance().updateDirectionByType(u.RoleDirection.right_up),
                                G.default.getInstance().flyTo(t, function () {
                                    h.gm.ui.showTopBlock(),
                                        s.default.unlock(),
                                        G.default.getInstance().playAniByType(u.EnumRoleAniType.make, 1, function () {
                                            h.gm.ui.showTopBlock(!1),
                                                G.default.getInstance().setStandByAni(),
                                                o.updateUI(),
                                                o.nod_unlock_ani
                                                    ? o.nod_unlock_ani
                                                          .getChildByName("nod_ani")
                                                          .getComponent(cc.Animation)
                                                          .play()
                                                    : l.default.getPrefab(
                                                          u.BundleName.MAIN_UI,
                                                          "prefabs/buildings/building_unlock_ani",
                                                          function (t) {
                                                              o.node &&
                                                                  ((o.nod_unlock_ani = cc.instantiate(t)),
                                                                  o.nod_unlock_ani
                                                                      .getChildByName("nod_ani")
                                                                      .getComponent(cc.Animation)
                                                                      .play(),
                                                                  (o.nod_unlock_ani.parent = o.node),
                                                                  (t = o.node.getChildByName("nod_foot")) &&
                                                                      (o.nod_unlock_ani.y = t.y));
                                                          }
                                                      ),
                                                n.disappear
                                                    ? (L.default.getInstance().addCleanObject(o.objectID, 1),
                                                      h.gm.mapData.resetCurTouchObject(),
                                                      M.default.emit(u.GameEvent.updateBase),
                                                      h.gm.mapData.removeMapObject(o.data.getUID()))
                                                    : o.objectID == u.SpecialObjectID.food_table
                                                    ? j.default.getInstance().checkNewOrder()
                                                    : o.objectID == u.SpecialObjectID.light_plate ||
                                                      o.objectID == u.SpecialObjectID.shelf_cash_box
                                                    ? (j.default.getInstance().checkNewOrder(),
                                                      h.gm.ui.showModule(h.gm.const.OpenRestaurantUI),
                                                      o.objectID == u.SpecialObjectID.light_plate
                                                          ? b.Utils.broadWorld(u.BroadTypeEnum.OpenStore, 0, "餐厅")
                                                          : o.objectID == u.SpecialObjectID.shelf_cash_box &&
                                                            b.Utils.broadWorld(u.BroadTypeEnum.OpenStore, 0, "货摊"))
                                                    : o.objectID == u.SpecialObjectID.stall ||
                                                      o.objectID == u.SpecialObjectID.wholesale
                                                    ? F.default.getInstance().tryCreateNewOrder()
                                                    : l.default.checkIsStallDesk(o.objectID)
                                                    ? k.ReportData.instance.report_point(100005, 41000022)
                                                    : o.objectID == u.SpecialObjectID.bbq_desk &&
                                                      k.ReportData.instance.report_point(100005, 41000023),
                                                M.default.emit(u.GameEvent.update_slot_ui),
                                                E.default.getInstance().onObjectUnlock(o.objectID);
                                        });
                                }),
                                M.default.emit(u.GameEvent.object_unlock, o.objectID),
                                [10003, 10004, 10005, 10006, 10025, 10026, 10027, 10028].includes(o.objectID) &&
                                    (c.default.getInstance().landAwardCollectTime[o.objectID] = w.default.getTime());
                        });
                });
            } else
                (e = B.default.getInstance().getConfigByID(n.completion.id)),
                    h.gm.ui.showNotice(
                        e.name + "功能完成度不足" + n.completion.value + "%，请升级" + e.name + "功能物件"
                    );
        }),
        (W.prototype.showFinger = function () {
            var t,
                e = this;
            this.nod_finger
                ? (t = this.nod_finger.getChildByName("finger"))
                    ? ((t.active = !0),
                      this.scheduleOnce(function () {
                          t.active = !1;
                      }, 2))
                    : (this.nod_finger.active = !0)
                : h.gm.ui.showModule(h.gm.const.FingerGuide, function (t) {
                      t.showFingerByObject(e);
                  });
        }),
        (W.prototype.hideFinger = function () {
            var t;
            this.nod_finger &&
                ((t = this.nod_finger.getChildByName("finger")) ? (t.active = !1) : (this.nod_finger.active = !1));
        }),
        (W.prototype.setLockView = function () {
            this.nod_lock
                ? ((this.nod_lock.active = !0), this.nod_open_display && (this.nod_open_display.opacity = 0))
                : this.nod_object && D.default.setGrayByColor(this.nod_object);
        }),
        (W.prototype.setUnlockView = function () {
            this.nod_lock
                ? ((this.nod_lock.active = !1), this.nod_open_display && (this.nod_open_display.opacity = 255))
                : this.nod_object && D.default.setGrayByColor(this.nod_object, !1);
        }),
        (W.prototype.showHP = function (t, e) {
            this.objectHp && ((this.objectHp.node.active = !0), this.objectHp.setData(t, e));
        }),
        (W.prototype.hideHp = function () {
            this.objectHp && (this.objectHp.node.active = !1);
        }),
        (W.prototype.shake = function (t) {
            void 0 === t && (t = null),
                this.getComponent(cc.Animation) &&
                    (C.default.playAni(this.getComponent(cc.Animation), "shake", t),
                    (t = this.node.getChildByName("lizi")) &&
                        C.default.playAni(t.getComponent(cc.Animation), "tree_y"));
        }),
        (W.prototype.onCollect = function () {
            var t = this;
            (this.onAni = !0),
                (this.data.isDie = !0),
                h.gm.mapData.resetCurTouchObject(),
                this.data.isCollection()
                    ? this.scheduleOnce(function () {
                          t.onCollectAni();
                      }, 0.8)
                    : this.data.isSundries() &&
                      (this.data.getConfig().tool_need
                          ? this.scheduleOnce(function () {
                                t.onCollectAni();
                            }, 1.2)
                          : this.scheduleOnce(function () {
                                t.onCollectAni();
                            }, 0.8));
        }),
        (W.prototype.onCollectAni = function () {
            this.onAni = !1;
            var e = p.ConfigUtils.CollectionsUtils.getConfig(this.objectID);
            if (e) {
                if ((v.default.addProps(e.mastery_produce), v.default.addGainThing(e.need_prop, !1), e.windows))
                    h.gm.ui.showModule(h.gm.const.GetAwardUI, function (t) {
                        t.setData(e.need_prop, P.GetAwardType.open),
                            (t.callback = function () {
                                t.closeMe();
                            });
                    });
                else {
                    var t = G.default.getInstance().mainRole.getComponent(d.default);
                    (t = t || G.default.getInstance().mainRole.addComponent(d.default)).nod_from = this.node;
                    for (var o = 0, n = e.need_prop; o < n.length; o++) {
                        var i = n[o];
                        i.id == u.CommonPropID.exp
                            ? l.default.flyIconToExp_2(i, t, i.num)
                            : l.default.flyIconToWarehouse_2(i, t, i.num);
                    }
                }
                cc.isValid(this.node, !0) &&
                    this.data.isCollection() &&
                    (L.default.getInstance().addCollectionObject(this.objectID, 1),
                    A.DailyTaskData.getInstance().collect++,
                    A.DailyTaskData.getInstance().async_write_data(),
                    h.gm.mapData.removeMapObject(this.data.getUID()),
                    M.default.emit(u.GameEvent.updateBase)),
                    cc.isValid(this.node, !0) &&
                        this.data.isSundries() &&
                        (L.default.getInstance().addCleanObject(this.objectID, 1),
                        h.gm.mapData.removeMapObject(this.data.getUID()),
                        M.default.emit(u.GameEvent.updateBase));
            }
        }),
        (W.prototype.getPosSys = function () {
            return this.data.posSys;
        }),
        (W.prototype.getGridWidth = function () {
            return this.data.getNetGridSize().width;
        }),
        (W.prototype.getGridHeight = function () {
            return this.data.getNetGridSize().height;
        }),
        (W.prototype.canDecorate = function () {
            if (this.data.getConfig().can_move && this.data.isDecoration() && !this.data.isLock()) {
                var t = this.getComponent(V.default);
                return !t || !t.isPlaying;
            }
            return !1;
        }),
        (W.prototype.initComponent = function () {}),
        (W.prototype._addCustomComp = function (t) {
            this.getComponent(t) || this.addComponent(t);
        }),
        (W.prototype.updateChildren = function () {
            for (var t in h.gm.mapData.mapObject) {
                var e = h.gm.mapData.mapObject[t];
                e && e.node.isValid ? e.data.getParentUID() == this.data.getUID() && e.updateUI() : cc.error(t);
            }
        }),
        (W.prototype.display = function (t) {
            this.node.opacity = t ? this.node.opacity || 255 : 0;
        }),
        (W.prototype.isDisplay = function () {
            return !!this.node && !!this.node.opacity;
        }),
        (W.prototype.getPreviewTouchNode = function () {
            return (
                this.nod_preview_touch ||
                (cc.warn("not found touch view"),
                this.getBgMapGrid() ? this.getBgMapGrid().node : (cc.error("not found node"), this.node))
            );
        }),
        (W.prototype.getUID = function () {
            return this.data.getUID();
        }),
        (W.prototype.getOjectName = function () {
            return this.data.getConfig().name;
        }),
        (W.prototype.getBgMapGrid = function () {
            return this.map_grid;
        }),
        (W.prototype.getBoundingBoxNode = function () {
            if (this.nod_boundingBox) return this.nod_boundingBox;
            var t = this.getComponentInChildren(cc.PolygonCollider);
            return t && t.node ? t.node : (cc.error("not found nod_boundingBox", this.data.objectID), this.node);
        }),
        (W.prototype.receiveCanUpgrade = function (t) {
            this.data.getUID() == t && this.showCanUpgrade(this.data.canUpgrade);
        }),
        (W.prototype.showCanUpgrade = function (e) {
            var o = this;
            void 0 === e && (e = !0),
                this.nod_can_upgrade
                    ? (this.nod_can_upgrade.active = e)
                    : l.default.getPrefab(u.BundleName.MAIN_UI, "prefabs/buildings/nod_can_upgrade", function (t) {
                          o.nod_can_upgrade ||
                              (((t = cc.instantiate(t)).x = 0),
                              (t.y = 150),
                              (o.nod_can_upgrade = t),
                              (o.nod_can_upgrade.active = e),
                              (o.nod_can_upgrade.parent = o.node));
                      });
        }),
        (W.prototype.getCenterPos = function (t) {
            void 0 === t && (t = !1);
            var e,
                o = cc.v2(0, 0),
                n = cc.v2(0, 0),
                i = this.getBgMapGrid(),
                n = i
                    ? ((e = D.default.getCenterPos(i.node)), i.node.convertToWorldSpaceAR(e))
                    : ((e = this.data.getCenterPos()), l.default.worldGridToObjectLayerPos(e)),
                o = this.node.convertToNodeSpaceAR(n);
            return t ? n : o;
        }),
        (W.prototype.getTopPos = function (t) {
            void 0 === t && (t = !1);
            var e,
                o = cc.v2(0, 0),
                n =
                    (cc.v2(0, 0),
                    this.nod_top
                        ? this.nod_top.convertToWorldSpaceAR(cc.v2(0, 0))
                        : ((e = this.data.getTopPos()), l.default.worldGridToObjectLayerPos(e))),
                o = this.node.convertToNodeSpaceAR(n);
            return t ? n : o;
        }),
        a([e(cc.Node)], W.prototype, "nod_object", void 0),
        a([e(cc.Node)], W.prototype, "nod_preview_touch", void 0),
        a([e(cc.TiledMap)], W.prototype, "map_grid", void 0),
        a([e(cc.TiledMap)], W.prototype, "map_inside", void 0),
        a([e(cc.Node)], W.prototype, "nod_rotation", void 0),
        a([e(cc.Node)], W.prototype, "nod_finger", void 0),
        a([e(y.default)], W.prototype, "objectHp", void 0),
        a([e(cc.Node)], W.prototype, "nod_lock", void 0),
        a([e(cc.Node)], W.prototype, "nod_open_display", void 0),
        a([e(cc.Node)], W.prototype, "nod_unlock_ani", void 0),
        a([e({type: cc.Node, tooltip: "物件内部节点"})], W.prototype, "nod_inside", void 0),
        a([e(H.default)], W.prototype, "object_common", void 0),
        a([e(cc.Node)], W.prototype, "nod_boundingBox", void 0),
        a([e(cc.Node)], W.prototype, "nod_can_upgrade", void 0),
        a([e(cc.Node)], W.prototype, "nod_top", void 0),
        a([t], W));
function W() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t.nod_object = null),
        (t.nod_preview_touch = null),
        (t.map_grid = null),
        (t.map_inside = null),
        (t.nod_rotation = null),
        (t.nod_finger = null),
        (t.objectHp = null),
        (t.nod_lock = null),
        (t.nod_open_display = null),
        (t.nod_unlock_ani = null),
        (t.nod_inside = null),
        (t.object_common = null),
        (t.nod_boundingBox = null),
        (t.nod_can_upgrade = null),
        (t.nod_top = null),
        (t.worldGrid = null),
        (t.mode = u.MapObjectMode.normal),
        (t.lockIndex = !1),
        (t.onAni = !1),
        (t._calGridShow = !1),
        (t.show_grid_cd = 0),
        (t.prefab = null),
        t
    );
}
o.default = t;
