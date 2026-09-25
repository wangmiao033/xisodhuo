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
Object.defineProperty(o, "__esModule", {value: !0}), (o.PlayerData = void 0);
var a,
    r = t("AppConfig"),
    s = t("CommonData"),
    c = t("Const"),
    l = t("GameMgr"),
    p = t("LocalData"),
    u = t("PropMgr"),
    d = t("Utils"),
    e = t("Singleton"),
    h = t("EventManager"),
    _ = t("StorageUtil"),
    f = t("BarbecueMenuData"),
    m = t("DailyTaskData"),
    g = t("ShopData"),
    y = t("StaffData"),
    v = t("ShelfOrderData"),
    b = t("TaskRecordData"),
    I = t("WelfareData"),
    i =
        (i(M, (a = e.default)),
        (M.prototype.savePlayerData = function () {
            if (!r.default.enable_cloud_save) return;
            var t = new C();
            (t.comm_data = s.default.getInstance()),
                (t.task_data = b.default.getInstance()),
                (t.daily_task_old = m.DailyTaskData.getInstance()),
                (t.shelf_order_data = v.default.getInstance()),
                (t.barbucue_data = f.default.getInstance()),
                (t.staff_data = y.default.getInstance()),
                (t.shop_data = g.default.getInstance()),
                (t.welfare_data = I.default.getInstance()),
                (t.lastObjectIndex = l.gm.localData.lastObjectIndex),
                (t.curStrength = l.gm.localData.curStrength),
                (t.curHp = l.gm.localData.curHp),
                (t.addHp = l.gm.localData.addHp),
                (t.addStrength = l.gm.localData.addStrength),
                (t.debug_version = l.gm.localData.debug_version),
                (t.initMapObjects = l.gm.localData.initMapObjects),
                (t.initInsideObjects = l.gm.localData.initInsideObjects),
                (t.props = l.gm.localData.props),
                (t.mapObjectDatas = l.gm.localData.mapObjectDatas),
                (t.collect_decoration_datas = l.gm.localData.collect_decoration_datas),
                (t.unlockNPC = l.gm.localData.unlockNPC),
                (t.tools = l.gm.localData.tools),
                (t.guide = l.gm.localData.guide),
                (t.shopLotteryTimes = l.gm.localData.shopLotteryTimes),
                (t.shopLotteryRewardID = l.gm.localData.shopLotteryRewardID),
                (t.unlockDistrict = l.gm.localData.unlockDistrict),
                (t.lastGuide = l.gm.localData.lastGuide),
                (t.npcData = l.gm.localData.npcData),
                (t.foodMenu = l.gm.localData.foodMenu),
                (t.warehouseLv = l.gm.localData.warehouseLv),
                (t.lastCreateBusinessTime = l.gm.localData.lastCreateBusinessTime),
                (t.last_create_heart_time = l.gm.localData.last_create_heart_time),
                (t.last_resume_strength_time = l.gm.localData.last_resume_strength_time),
                (t.last_resume_hp_time = l.gm.localData.last_resume_hp_time),
                (t.endGuidings = l.gm.localData.endGuidings),
                (t.shelf_unlock_slot = l.gm.localData.shelf_unlock_slot),
                (t.lastCreateShelfNPCTime = l.gm.localData.lastCreateShelfNPCTime),
                (t.broadcast = l.gm.localData.broadcast),
                (t.produce_rate_unlock = l.gm.localData.produce_rate_unlock),
                (t.truck_order = l.gm.localData.truck_order),
                (t.explore_data = l.gm.localData.explore_data),
                (t.onLineSecond = l.gm.localData.onLineSecond),
                (t.lastOnlineTime = l.gm.localData.lastOnlineTime),
                (t.getShareAward = l.gm.localData.getShareAward),
                (t.musicOn = l.gm.localData.musicOn),
                (t.effectOn = l.gm.localData.effectOn),
                (t.autoCollectTime = l.gm.localData.autoCollectTime),
                (t.autoCollectTotalTime = l.gm.localData.autoCollectTotalTime),
                (t.autoCollectState = l.gm.localData.autoCollectState),
                (t.broad_bless_data = l.gm.localData.broad_bless_data),
                (t.bless_data = l.gm.localData.bless_data),
                (t.nick_name = l.gm.localData.nick_name),
                (t.name_change_count = l.gm.localData.name_change_count),
                (t.invite_data = l.gm.localData.invite_data),
                (t.sex_id = l.gm.localData.sex_id),
                (t.history_gold = l.gm.localData.history_gold),
                (t.last_save_time = l.gm.localData.last_save_time);
            var e = u.default.getPropCount(c.CommonPropID.exp);
            (t.decorate_level = e),
                (t = JSON.stringify(t)),
                (t = encodeURIComponent(t)),
                (t = d.Utils.lzstring.compressToBase64(t)),
                (t = {
                    uid: l.gm.data.uid,
                    token: l.gm.data.token,
                    coins: l.gm.localData.history_gold,
                    build_percent: l.gm.localData.history_gold,
                    decorate_level: l.gm.localData.history_gold,
                    diamond: u.default.getPropCount(c.CommonPropID.diamond),
                    client_uid: l.gm.data.uid,
                    op_type: "player_data",
                    data: t
                }),
                d.Utils.http_request(
                    this.savePlayerDataCb,
                    this,
                    l.gm.channel.getServerUrl() + "user/update_player_data",
                    t
                );
        }),
        (M.prototype.savePlayerDataCb = function () {}),
        (M.prototype.setDataFromoCache = function (t, e) {
            if (null != t && !(t.length <= 0)) {
                var o = null;
                try {
                    o = JSON.parse(t);
                } catch (t) {
                    return void cc.error("玩家数据反序列化失败");
                }
                if (null != o)
                    if (e instanceof Array) for (; 0 < o.length; ) e.push(o.shift());
                    else
                        for (var n in e)
                            if (null != o[n])
                                if (e[n] instanceof Array) for (e[n] = []; 0 < o[n].length; ) e[n].push(o[n].shift());
                                else e[n] = o[n];
            }
        }),
        (M.prototype.get_player_data_on_rsp = function (t) {
            var e;
            0 == t.ResultCode &&
                null != t.data &&
                ((e = new C()),
                (t = d.Utils.lzstring.decompressFromBase64(t.data.player_data)),
                (t = decodeURIComponent(t)),
                this.setDataFromoCache(t, e),
                u.default.getPropCount(c.CommonPropID.exp),
                e.history_gold > l.gm.localData.history_gold &&
                    (Object.assign(s.default.getInstance(), e.comm_data),
                    s.default.getInstance().async_write_data(),
                    Object.assign(b.default.getInstance(), e.task_data),
                    b.default.getInstance().async_write_data(),
                    Object.assign(m.DailyTaskData.getInstance(), e.daily_task_old),
                    m.DailyTaskData.getInstance().async_write_data(),
                    Object.assign(v.default.getInstance(), e.shelf_order_data),
                    v.default.getInstance().async_write_data(),
                    Object.assign(f.default.getInstance(), e.barbucue_data),
                    f.default.getInstance().async_write_data(),
                    Object.assign(y.default.getInstance(), e.staff_data),
                    y.default.getInstance().async_write_data(),
                    Object.assign(g.default.getInstance(), e.shop_data),
                    g.default.getInstance().async_write_data(),
                    Object.assign(I.default.getInstance(), e.welfare_data),
                    I.default.getInstance().async_write_data(),
                    (l.gm.localData.lastObjectIndex = e.lastObjectIndex),
                    l.gm.localData.saveByKey("lastObjectIndex"),
                    (l.gm.localData.curStrength = e.curStrength),
                    l.gm.localData.saveByKey("curStrength"),
                    (l.gm.localData.curHp = e.curHp),
                    l.gm.localData.saveByKey("curHp"),
                    (l.gm.localData.addHp = e.addHp),
                    l.gm.localData.saveByKey("addHp"),
                    (l.gm.localData.addStrength = e.addStrength),
                    l.gm.localData.saveByKey("addStrength"),
                    (l.gm.localData.debug_version = e.debug_version),
                    l.gm.localData.saveByKey("debug_version"),
                    (l.gm.localData.initMapObjects = e.initMapObjects),
                    l.gm.localData.saveByKey("initMapObjects"),
                    (l.gm.localData.initInsideObjects = e.initInsideObjects),
                    l.gm.localData.saveByKey("initInsideObjects"),
                    (l.gm.localData.props = e.props),
                    l.gm.localData.saveByKey("props"),
                    Object.assign(l.gm.localData.mapObjectDatas, e.mapObjectDatas),
                    l.gm.localData.saveByKey("mapObjectDatas"),
                    Object.assign(l.gm.localData.collect_decoration_datas, e.collect_decoration_datas),
                    l.gm.localData.saveByKey("collect_decoration_datas"),
                    (l.gm.localData.unlockNPC = e.unlockNPC),
                    l.gm.localData.saveByKey("unlockNPC"),
                    Object.assign(l.gm.localData.tools, e.tools),
                    l.gm.localData.saveByKey("tools"),
                    (l.gm.localData.guide = e.guide),
                    l.gm.localData.saveByKey("guide"),
                    (l.gm.localData.shopLotteryTimes = e.shopLotteryTimes),
                    l.gm.localData.saveByKey("shopLotteryTimes"),
                    (l.gm.localData.shopLotteryRewardID = e.shopLotteryRewardID),
                    l.gm.localData.saveByKey("shopLotteryRewardID"),
                    (l.gm.localData.unlockDistrict = e.unlockDistrict),
                    l.gm.localData.saveByKey("unlockDistrict"),
                    (l.gm.localData.lastGuide = e.lastGuide),
                    l.gm.localData.saveByKey("lastGuide"),
                    (l.gm.localData.npcData = e.npcData),
                    l.gm.localData.saveByKey("npcData"),
                    Object.assign(l.gm.localData.foodMenu, e.foodMenu),
                    l.gm.localData.saveByKey("foodMenu"),
                    (l.gm.localData.warehouseLv = e.warehouseLv),
                    l.gm.localData.saveByKey("warehouseLv"),
                    (l.gm.localData.lastCreateBusinessTime = e.lastCreateBusinessTime),
                    l.gm.localData.saveByKey("lastCreateBusinessTime"),
                    (l.gm.localData.last_create_heart_time = e.last_create_heart_time),
                    l.gm.localData.saveByKey("last_create_heart_time"),
                    (l.gm.localData.last_resume_strength_time = e.last_resume_strength_time),
                    l.gm.localData.saveByKey("last_resume_strength_time"),
                    (l.gm.localData.last_resume_hp_time = e.last_resume_hp_time),
                    l.gm.localData.saveByKey("last_resume_hp_time"),
                    (l.gm.localData.endGuidings = e.endGuidings),
                    l.gm.localData.saveByKey("endGuidings"),
                    (l.gm.localData.shelf_unlock_slot = e.shelf_unlock_slot),
                    l.gm.localData.saveByKey("shelf_unlock_slot"),
                    (l.gm.localData.lastCreateShelfNPCTime = e.lastCreateShelfNPCTime),
                    l.gm.localData.saveByKey("lastCreateShelfNPCTime"),
                    Object.assign(l.gm.localData.broadcast, e.broadcast),
                    l.gm.localData.saveByKey("broadcast"),
                    (l.gm.localData.produce_rate_unlock = e.produce_rate_unlock),
                    l.gm.localData.saveByKey("produce_rate_unlock"),
                    Object.assign(l.gm.localData.truck_order, e.truck_order),
                    l.gm.localData.saveByKey("truck_order"),
                    Object.assign(l.gm.localData.explore_data, e.explore_data),
                    l.gm.localData.saveByKey("explore_data"),
                    (l.gm.localData.onLineSecond = e.onLineSecond),
                    l.gm.localData.saveByKey("onLineSecond"),
                    (l.gm.localData.lastOnlineTime = e.lastOnlineTime),
                    l.gm.localData.saveByKey("lastOnlineTime"),
                    (l.gm.localData.getShareAward = e.getShareAward),
                    l.gm.localData.saveByKey("getShareAward"),
                    (l.gm.localData.musicOn = e.musicOn),
                    l.gm.localData.saveByKey("musicOn"),
                    (l.gm.localData.effectOn = e.effectOn),
                    l.gm.localData.saveByKey("effectOn"),
                    (l.gm.localData.autoCollectTime = e.autoCollectTime),
                    l.gm.localData.saveByKey("autoCollectTime"),
                    (l.gm.localData.autoCollectTotalTime = e.autoCollectTotalTime),
                    l.gm.localData.saveByKey("autoCollectTotalTime"),
                    (l.gm.localData.autoCollectState = e.autoCollectState),
                    l.gm.localData.saveByKey("autoCollectState"),
                    Object.assign(l.gm.localData.broad_bless_data, e.broad_bless_data),
                    l.gm.localData.saveByKey("broad_bless_data"),
                    Object.assign(l.gm.localData.bless_data, e.bless_data),
                    l.gm.localData.saveByKey("bless_data"),
                    (l.gm.localData.nick_name = e.nick_name),
                    l.gm.localData.saveByKey("nick_name"),
                    (l.gm.localData.name_change_count = e.name_change_count),
                    l.gm.localData.saveByKey("name_change_count"),
                    Object.assign(l.gm.localData.invite_data, e.invite_data),
                    l.gm.localData.saveByKey("invite_data"),
                    (l.gm.localData.sex_id = e.sex_id),
                    l.gm.localData.saveByKey("sex_id"),
                    (l.gm.localData.history_gold = e.history_gold),
                    l.gm.localData.saveByKey("history_gold"),
                    (l.gm.localData.last_save_time = e.last_save_time),
                    l.gm.localData.saveByKey("last_save_time"))),
                this._call_back && this._call_back(),
                h.default.emit(c.GameEvent.get_server_data_done);
        }),
        (M.prototype.getPlayerDataFromServer = function (t) {
            if (
                ((this._call_back = t),
                p.default.getInstance().load(),
                (t = _.default.get("debug_version", !0) || 0),
                r.default.allow_clear_local_data && r.default.debug_version > t)
            )
                return (
                    _.default.clear(),
                    p.default.getInstance().load(),
                    this.readData(),
                    this._call_back && this._call_back(),
                    h.default.emit(c.GameEvent.get_server_data_done),
                    void (r.default.enable_cloud_save && this.savePlayerData())
                );
            if ((this.readData(), !r.default.enable_cloud_save))
                return this._call_back && this._call_back(), void h.default.emit(c.GameEvent.get_server_data_done);
            (t = {uid: l.gm.data.uid, token: l.gm.data.token, op_type: "player_data", open_id: l.gm.data.open_id}),
                d.Utils.http_request(
                    this.get_player_data_on_rsp,
                    this,
                    l.gm.channel.getServerUrl() + "user/get_player_data",
                    t
                );
        }),
        (M.prototype.readData = function () {
            s.default.getInstance().async_read_data(),
                b.default.getInstance().async_read_data(function () {}),
                m.DailyTaskData.getInstance().async_read_data(function () {}),
                v.default.getInstance().async_read_data(function () {}),
                f.default.getInstance().async_read_data(),
                y.default.getInstance().async_read_data(function () {}),
                g.default.getInstance().async_read_data(),
                I.default.getInstance().async_read_data();
        }),
        M);
function M() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t._call_back = null), t;
}
o.default = i;
var C = function () {
    (this.comm_data = null),
        (this.task_data = null),
        (this.daily_task_old = null),
        (this.shelf_order_data = null),
        (this.barbucue_data = null),
        (this.staff_data = null),
        (this.shop_data = null),
        (this.welfare_data = null),
        (this.lastObjectIndex = 0),
        (this.curStrength = 0),
        (this.curHp = 0),
        (this.addHp = 0),
        (this.addStrength = 0),
        (this.debug_version = 0),
        (this.initMapObjects = {}),
        (this.initInsideObjects = {}),
        (this.props = {}),
        (this.mapObjectDatas = {}),
        (this.collect_decoration_datas = {}),
        (this.unlockNPC = []),
        (this.tools = {}),
        (this.guide = !1),
        (this.shopLotteryTimes = 0),
        (this.shopLotteryRewardID = []),
        (this.unlockDistrict = []),
        (this.lastGuide = {id: 0, index: -1}),
        (this.npcData = {}),
        (this.foodMenu = {}),
        (this.warehouseLv = 1),
        (this.lastCreateBusinessTime = 0),
        (this.last_create_heart_time = 0),
        (this.last_resume_strength_time = 0),
        (this.last_resume_hp_time = 0),
        (this.endGuidings = []),
        (this.shelf_unlock_slot = []),
        (this.lastCreateShelfNPCTime = 0),
        (this.broadcast = null),
        (this.produce_rate_unlock = []),
        (this.truck_order = null),
        (this.explore_data = null),
        (this.onLineSecond = 0),
        (this.lastOnlineTime = 0),
        (this.getShareAward = []),
        (this.musicOn = 1),
        (this.effectOn = 1),
        (this.autoCollectTime = 0),
        (this.autoCollectTotalTime = 0),
        (this.autoCollectState = 0),
        (this.broad_bless_data = []),
        (this.bless_data = null),
        (this.nick_name = ""),
        (this.name_change_count = 0),
        (this.invite_data = null),
        (this.sex_id = 0),
        (this.history_gold = 0),
        (this.last_save_time = 0),
        (this.decorate_level = 0);
};
o.PlayerData = C;
