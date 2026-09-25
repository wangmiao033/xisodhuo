var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AssetMgr"),
    i = t("EventManager"),
    a = t("TimeUtils"),
    r = t("SaveMgr"),
    s = t("CookMgr"),
    c = t("DistrictMgr"),
    l = t("ShopData"),
    p = t("StaffData"),
    u = t("StaffViewMgr"),
    d = t("TaskItemData"),
    h = t("TaskMgr"),
    _ = t("TaskRecordData"),
    f = t("CommonData"),
    m = t("ConfigUtils"),
    g = t("Const"),
    y = t("GameMgr"),
    v = t("LocalData"),
    b = t("MainCal"),
    I = t("MapDataHelper"),
    M = t("MapHelper"),
    C = t("PropMgr"),
    D = t("Utils"),
    t =
        ((w.prototype.addProp = function (t, e) {
            C.default.addProps([{id: t, num: e}]);
        }),
        (w.prototype.addExp = function (t) {
            C.default.addProps([{id: g.CommonPropID.exp, num: t}]);
        }),
        (w.prototype.initProp = function () {}),
        (w.prototype.add_pet = function () {
            y.gm.localData.explore_data.push_pet(1, cc.v2(0, 0));
        }),
        (w.prototype.addFood = function () {
            C.default.addProps([{id: 31001, num: 1}]),
                C.default.addProps([{id: 31002, num: 1}]),
                C.default.addProps([{id: 31003, num: 1}]),
                C.default.addProps([{id: 31004, num: 1}]),
                C.default.addProps([{id: 31005, num: 1}]),
                C.default.addProps([{id: 31006, num: 1}]);
        }),
        (w.prototype.addAll = function () {
            C.default.addProps([{id: 10001, num: 1e6}]),
                C.default.addProps([{id: 10002, num: 1e6}]),
                C.default.addProps([{id: 10003, num: 1e6}]),
                C.default.addProps([{id: g.CommonPropID.exp, num: 1e5}]);
        }),
        (w.prototype.onClickPetRoom = function () {
            y.gm.ui.showModule(y.gm.const.ExploreLoading, function () {
                y.gm.ui.showModule(y.gm.const.PetRoom, function () {});
            });
        }),
        (w.prototype.add_pet_prop = function (t) {
            y.gm.localData.explore_data.addPetProp(t);
        }),
        (w.prototype.get_broad = function () {
            y.gm.localData.get_bless_data(!0);
        }),
        (w.prototype.clear_pet_room = function () {
            (y.gm.localData.explore_data.pet_decorate_data = []),
                (y.gm.localData.explore_data.pet_props = {}),
                y.gm.localData.saveByKey("explore_data");
        }),
        (w.prototype.setTruckTime = function () {
            (y.gm.localData.truck_order.start_time = a.default.getTime() - 1200),
                (y.gm.localData.truck_order.end_time = a.default.getTime() - 600);
        }),
        (w.prototype.dayReset = function () {
            (y.gm.localData.onLineSecond = 0),
                l.default.getInstance().refreshRecord(),
                f.default.getInstance().dayReset(),
                i.default.emit(g.GameEvent.online);
        }),
        (w.prototype.reset_online = function (t) {
            (f.default.getInstance().online_stage = t), (f.default.getInstance().online_time = 1e4);
        }),
        (w.prototype.addInvite = function () {
            var t = new v.InviteChildren();
            (t.image_id = D.Utils.math_random(!0, 0, 2)),
                (t.level = D.Utils.math_random(!0, 1, 20)),
                (t.reward_index = 0),
                (t.uid = D.Utils.math_random(!0, 1, 200) + ""),
                (t.nick_name = t.level + "=" + t.uid),
                y.gm.localData.invite_data.children_list.push(t),
                y.gm.localData.saveByKey("invite_data");
        }),
        (w.prototype.delInvite = function (t) {
            y.gm.localData.invite_data.delete_list.push(y.gm.localData.invite_data.children_list[t].uid),
                y.gm.localData.saveByKey("invite_data");
        }),
        (w.prototype.add_tool = function () {
            C.default.addProps([{id: 60033, num: 1}]),
                C.default.addProps([{id: 60003, num: 1}]),
                C.default.addProps([{id: 60013, num: 1}]),
                C.default.addProps([{id: 60023, num: 1}]),
                C.default.addProps([{id: 60043, num: 1}]),
                C.default.addProps([{id: 60073, num: 1}]),
                C.default.addProps([{id: 60085, num: 1}]);
        }),
        (w.prototype.savePlayer = function () {
            (y.gm.localData.history_gold += 1e4), r.default.getInstance().savePlayerData();
        }),
        (w.prototype.broadWold = function () {
            p.default.getInstance().upgrade(50027);
        }),
        (w.prototype.setToolD = function (t, e) {
            y.gm.localData.tools[t].durability = e;
        }),
        (w.prototype.unlockFoodMenu = function (t) {
            C.default.addGainThing([{file: 3, id: t, num: 1}]);
        }),
        (w.prototype.unlockDistrict = function (t) {
            y.gm.localData.addUnlockDistrict(t),
                c.default.getInstance().updateViewRange(),
                i.default.emit(g.GameEvent.updateBase);
        }),
        (w.prototype.addCookValue = function (t) {
            s.default.getInstance().addCookValue(t);
        }),
        (w.prototype.getDisplayObject = function () {
            var t,
                e = [],
                o = M.default.getSVBox();
            for (t in y.gm.mapData.mapObject)
                y.gm.mapData.mapObject[t] && y.gm.mapData.mapObject[t].node.isValid
                    ? y.gm.mapData.mapObject[t].node.getBoundingBoxToWorld().intersects(o) &&
                      e.push(y.gm.mapData.mapObject[t].data)
                    : cc.error(t);
            cc.log(e);
        }),
        (w.prototype.setCurTask = function (t) {
            var e = y.gm.config.taskConfigs[t];
            if (e) {
                e.type;
                var o = h.default.getInstance().taskTypeData[e.type];
                o.reset();
                for (var n, i = 0, a = y.gm.config.data.Tasks; i < a.length; i++)
                    (r = a[i]).type == e.type && ((n = new d.default(r.id)), o.addItem(n));
                for (var r, s = 0; s < o._items.length; s++)
                    if ((r = o._items[s]).taskID == t) {
                        o.setLastTaskID(o._items[s - 1].taskID),
                            _.default.getInstance().setLastTaskID(e.type, o._items[s - 1].taskID);
                        break;
                    }
            }
        }),
        (w.prototype.getActiveObject = function () {}),
        (w.prototype.showAsset = function () {
            cc.log(cc.assetManager.assets);
        }),
        (w.prototype.showPrefab = function () {
            var e = [];
            cc.assetManager.assets.forEach(function (t) {
                t instanceof cc.Prefab && e.push(t);
            }),
                cc.log(e);
        }),
        (w.prototype.showTexture = function () {
            var e = [];
            cc.assetManager.assets.forEach(function (t) {
                t instanceof cc.SpriteFrame && e.push(t);
            }),
                cc.log(e);
        }),
        (w.prototype.changeFloor = function (t, e) {
            (t = I.default.getDataByID(t)) &&
                (f.default.getInstance().setFloor(t.getUID(), e), i.default.emit(g.GameEvent.change_floor));
        }),
        (w.prototype.addDraw = function (t) {
            C.default.addGainThing([{file: g.ThingType.replacement, id: t, num: 1}]);
        }),
        (w.prototype.findNotUseBuilding = function () {
            n.default.getInstance().loadBundleByName(g.BundleName.MAIN_UI, function (t) {
                for (var e = 0, o = t.getDirWithPath("prefabs/buildings", cc.Prefab); e < o.length; e++) {
                    var n = o[e],
                        n = String(n.path).split("/")[2].split("_")[1];
                    m.BigMapConfigUtils.getConfig(Number(n)) || cc.log("config not found id", n);
                }
            });
        }),
        (w.prototype.test = function (t, e) {
            var o = Math.round((t + 1) / 8) - 1,
                n = Math.round((e + 1) / 8) - 1;
            cc.log("converToNewGrid", t, e, o, n), cc.log("cc.v2(" + o + ", " + n + ")");
        }),
        (w.prototype.test2 = function (t) {
            (t = D.Utils.lzstring.decompressFromBase64(t)), (t = decodeURIComponent(t)), cc.log(t);
        }),
        (w.prototype.showPetMap = function () {
            y.gm.ui.showModule(y.gm.const.ExploreLoading, function () {
                y.gm.ui.showModule(y.gm.const.PetMap);
            });
        }),
        (w.prototype.closePetMap = function () {
            y.gm.ui.showModule(y.gm.const.Loading, function () {
                y.gm.ui.closeModule(y.gm.const.PetMap);
            });
        }),
        (w.prototype.nextDay = function () {
            b.default.dayReset();
        }),
        (w.prototype.setLastStaffFoodTime = function (t) {
            f.default.getInstance().lastStaffFoodTime = t;
        }),
        (w.prototype.staffEatFood = function () {
            u.StaffViewMgr.getInstance().eatFood();
        }),
        w);
function w() {
    (this.isDev = !0), (this.warehouseLimit = !0);
}
o.default = t;
