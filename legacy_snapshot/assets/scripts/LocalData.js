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
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.InviteData = o.InviteChildren = o.BlessData = o.BroadBlessData = o.OrderLocalData = o.LotteryData = void 0);
var a,
    e = t("LocalDataBase"),
    r = t("EventManager"),
    s = t("UIMgr"),
    c = t("BlessBroad"),
    l = t("ExploreData"),
    p = t("Const"),
    u = t("GameMgr"),
    d = t("Utils"),
    i =
        (i(h, (a = e.default)),
        (h.prototype.load = function () {
            var t;
            cc.log("load local data"),
                (this.curStrength = this.getData("curStrength") || 0),
                (this.curHp = this.getData("curHp") || 0),
                (this.addHp = this.getData("addHp") || 0),
                (this.last_resume_hp_time = this.getData("last_resume_hp_time") || 0),
                (this.addStrength = this.getData("addStrength") || 0),
                (this.initMapObjects = this.getData("initMapObjects") || {}),
                (this.initInsideObjects = this.getData("initInsideObjects") || {}),
                (this.sex_id = this.getData("sex_id") || 0),
                (this.history_gold = this.getData("history_gold") || 1),
                (this.last_save_time = this.getData("last_save_time") || 0),
                (this.props = this.getData("props") || {}),
                (this.mapObjectDatas = this.getData("mapObjectDatas") || {}),
                (this.unlockNPC = this.getData("unlockNPC") || []),
                (this.explore_data = this.getData("explore_data") || {}),
                u.gm.localData.explore_data
                    ? ((t = new l.ExploreData()),
                      Object.assign(t, u.gm.localData.explore_data),
                      (u.gm.localData.explore_data = t))
                    : ((u.gm.localData.explore_data = new l.ExploreData()), u.gm.localData.explore_data.init_data()),
                (this.bless_data = this.getData("bless_data") || {}),
                (this.nick_name = this.getData("nick_name") || ""),
                (this.name_change_count = this.getData("name_change_count") || 0),
                (this.invite_data = this.getData("invite_data") || {}),
                (this.tools = this.getData("tools") || {}),
                (this.guide = this.getData("guide") || !1),
                (this.shopLotteryTimes = this.getData("shopLotteryTimes") || 0),
                (this.shopLotteryRewardID = this.getData("shopLotteryRewardID") || []),
                (this.unlockDistrict = this.getData("unlockDistrict") || []),
                (this.lastGuide = this.getData("lastGuide") || {id: 0, index: -1}),
                (this.npcData = this.getData("npcData") || {}),
                (this.foodMenu = this.getData("foodMenu") || {}),
                (this.warehouseLv = this.getData("warehouseLv") || 1),
                (this.lastCreateBusinessTime = this.getData("lastCreateBusinessTime") || 0),
                (this.last_create_heart_time = this.getData("last_create_heart_time") || 0),
                (this.endGuidings = this.getData("endGuidings") || []),
                (this.last_resume_strength_time = this.getData("last_resume_strength_time") || 0),
                (this.debug_version = this.getData("debug_version") || 0),
                (this.lastObjectIndex = this.getData("lastObjectIndex") || 0),
                (this.shelf_unlock_slot = this.getData("shelf_unlock_slot") || []),
                (this.lastCreateShelfNPCTime = this.getData("lastCreateShelfNPCTime") || 0),
                (this.broadcast = this.getData("broadcast") || {}),
                (this.produce_rate_unlock = this.getData("produce_rate_unlock") || []),
                (this.truck_order = this.getData("truck_order") || new _()),
                (this.onLineSecond = this.getData("onLineSecond") || 0),
                (this.lastOnlineTime = this.getData("lastOnlineTime") || 0),
                (this.getShareAward = this.getData("getShareAward") || []),
                (this.musicOn = this.getData("musicOn") || 1),
                (this.effectOn = this.getData("effectOn") || 1),
                (this.autoCollectTime = this.getData("autoCollectTime") || 0),
                (this.autoCollectTotalTime = this.getData("autoCollectTotalTime") || 0),
                (this.autoCollectState = this.getData("autoCollectState") || 0),
                this.getData("collect_decoration_datas") &&
                    (this.collect_decoration_datas = this.getData("collect_decoration_datas"));
        }),
        (h.prototype.addProduceRateUnlock = function (t) {
            this.produce_rate_unlock.includes(t) || this.produce_rate_unlock.push(t),
                this.saveByKey("produce_rate_unlock");
        }),
        (h.prototype.unlockFoodMenu = function (t) {
            this.foodMenu[t]
                ? this.foodMenu[t].state <= p.MenuState.unlock && (this.foodMenu[t].state = p.MenuState.unlock)
                : (this.foodMenu[t] = {state: p.MenuState.unlock}),
                this.saveByKey("foodMenu");
        }),
        (h.prototype.learnFoodMenu = function (t) {
            this.foodMenu[t]
                ? this.foodMenu[t].state <= p.MenuState.learned && (this.foodMenu[t].state = p.MenuState.learned)
                : (this.foodMenu[t] = {state: p.MenuState.learned}),
                this.saveByKey("foodMenu");
        }),
        (h.prototype.getFoodMenu = function (t) {
            return this.foodMenu[t] || {state: p.MenuState.lock};
        }),
        (h.prototype.saveFoodMenu = function () {
            this.saveByKey("foodMenu");
        }),
        (h.prototype.getNpcData = function (t) {
            return this.npcData[t] || (this.npcData[t] = {}), this.npcData[t];
        }),
        (h.prototype.saveNpcData = function () {
            this.saveByKey("npcData");
        }),
        (h.prototype.getPropCount = function (t) {
            return this.props[String(t)] || 0;
        }),
        (h.prototype.unlockUID = function (t) {
            (this.mapObjectDatas[t].unlockAction = !0), this.saveByKey("mapObjectDatas");
        }),
        (h.prototype.setSlotData = function (t, e) {
            var o = this.mapObjectDatas[t];
            if (o) {
                o.slots = [];
                for (var n = 0; n < e.length; n++)
                    o.slots[n] = {
                        isLock: e[n].isLock,
                        beginTime: e[n].beginTime,
                        produceID: e[n].produceID,
                        pickID: e[n].pickID,
                        endTime: e[n].endTime,
                        rate: e[n].rate,
                        produce: e[n].changeToProduceLocalData()
                    };
                this.saveByKey("mapObjectDatas");
            }
        }),
        (h.prototype.removeMapObjectData = function (t) {
            this.mapObjectDatas[t] &&
                (this.initMapObjects[t] &&
                    ((this.initMapObjects[t] = -1),
                    (this.initInsideObjects[t] = -1),
                    this.saveByKey("initMapObjects"),
                    this.saveByKey("initInsideObjects")),
                delete this.mapObjectDatas[t],
                this.saveByKey("mapObjectDatas"));
        }),
        (h.prototype.addToCollect = function (t, e) {
            e
                ? ((this.collect_decoration_datas[t] = e), this.saveByKey("collect_decoration_datas"))
                : cc.error("not found ", t);
        }),
        (h.prototype.removeCollect = function (t) {
            this.collect_decoration_datas[t]
                ? (delete this.collect_decoration_datas[t], this.saveByKey("collect_decoration_datas"))
                : cc.error("not found ", t);
        }),
        (h.prototype.updateObjectPos = function (t, e) {
            (t = this.mapObjectDatas[t]) && ((t.x = e.x), (t.y = e.y));
        }),
        (h.prototype.getMapObjectData = function (t) {
            return this.mapObjectDatas[t] || (cc.error("not found", t), null);
        }),
        (h.prototype.addMapObjectData = function (t, e) {
            this.mapObjectDatas[t]
                ? cc.error("已存在数据,确认清空后再添加", t, this.mapObjectDatas[t])
                : ((this.mapObjectDatas[t] = e), this.saveByKey("mapObjectDatas"));
        }),
        (h.prototype.addUnlockNPC = function (t) {
            var e;
            (e = this.unlockNPC).push.apply(e, t), this.saveByKey("unlockNPC");
        }),
        (h.prototype.updateExploreData = function (t) {
            this.explore_data || (this.explore_data = new l.ExploreData()),
                (this.explore_data = t),
                this.saveByKey("explore_data");
        }),
        (h.prototype.setUnlockTools = function (t) {
            this.tools[t]
                ? (this.tools[t].isStudy = !0)
                : (this.tools[t] = {isStudy: !0, toolLv: 0, durability: 0, repair_time: 0}),
                this.saveByKey("tools");
        }),
        (h.prototype.setToolsLv = function (t, e, o) {
            void 0 === o && (o = 100),
                this.setUnlockTools(t),
                (this.tools[t].toolLv = e),
                this.tools[t].durability || (this.tools[t].durability = o),
                this.tools[t].repair_time || (this.tools[t].repair_time = 0),
                this.saveByKey("tools");
        }),
        (h.prototype.get_bless_broad_data = function (t) {
            if (0 == t.ResultCode && ((this.broad_bless_data = []), 0 < t.data.length)) {
                for (var e = 0; e < t.data.length; ++e)
                    (this.broad_bless_data[e] = new f()),
                        (this.broad_bless_data[e].nickname = t.data[e].nickname),
                        (this.broad_bless_data[e].op_time = t.data[e].op_time),
                        (this.broad_bless_data[e].text_string = decodeURIComponent(t.data[e].wish)),
                        (this.broad_bless_data[e].id = t.data[e].id),
                        (this.broad_bless_data[e].type = t.data[e].type);
                u.gm.ui.get_layer_node(s.LayerType.TOP).getChildByName("bless_broad") || this.send_bless();
            }
        }),
        (h.prototype.get_bless_data = function (t) {

            return;
            this.bless_data || (this.bless_data = new m());
            var e = Math.floor(Date.now() / 1e3);
            this.bless_data.broad_index || (this.bless_data.broad_index = 0),
                (t || (this.bless_data.broad_time < e && this.broad_bless_data.length <= 0)) &&
                    ((this.is_bless_broad = !0),
                    d.Utils.server_http_request(
                        this.get_bless_broad_data,
                        this,
                        u.gm.channel.getServerUrl() +
                            "user/upload_player_broadcast_record/get?token=%s&uid=%s&num=%s&index=%s",
                        u.gm.data.token,
                        u.gm.data.uid,
                        u.gm.const.MAX_BROAD_COUNT + "",
                        this.bless_data.broad_index + 1 + ""
                    ),
                    d.Utils.server_http_request(
                        this.get_player_bless_broad_data,
                        this,
                        u.gm.channel.getServerUrl() +
                            "user/upload_player_broadcast_record/get?token=%s&uid=%s&num=%s&index=%s&type=0",
                        u.gm.data.token,
                        u.gm.data.uid,
                        u.gm.const.MAX_PLAYER_BROAD_COUNT + "",
                        this.bless_data.broad_index + 1 + ""
                    ),
                    (this.bless_data.broad_time = e + 120),
                    u.gm.localData.saveByKey("bless_data"));
        }),
        (h.prototype.send_bless = function () {
            var o = this;
            this.is_bless_broad &&
                0 < this.broad_bless_data.length &&
                ((this.bless_data.broad_index = this.broad_bless_data[0].id),
                u.gm.pool.async_get(p.BundleName.MAIN_UI, "prefabs/bless/bless_broad", c.BlessBroad, function (t) {
                    var e;
                    u.gm.ui.get_layer_node(s.LayerType.TOP).getChildByName("bless_broad") ||
                        (t.init_data(
                            o.broad_bless_data[0].nickname,
                            o.broad_bless_data[0].text_string,
                            o.broad_bless_data[0].type
                        ),
                        u.gm.ui.get_layer_node(s.LayerType.TOP).addChild(t.node),
                        (e = u.gm.ui.get_module(u.gm.const.BaseUI)),
                        (t.node.y = e.node.height / 2 - 200),
                        o.broad_bless_data.splice(0, 1));
                }));
        }),
        (h.prototype.get_player_bless_broad_data = function (t) {
            if (0 == t.ResultCode && ((this.player_broad_bless_data = []), 0 < t.data.length)) {
                for (var e = 0; e < t.data.length; ++e)
                    (this.player_broad_bless_data[e] = new f()),
                        (this.player_broad_bless_data[e].nickname = t.data[e].nickname),
                        (this.player_broad_bless_data[e].op_time = t.data[e].op_time),
                        (this.player_broad_bless_data[e].text_string = decodeURIComponent(t.data[e].wish)),
                        (this.player_broad_bless_data[e].id = t.data[e].id),
                        (this.player_broad_bless_data[e].type = t.data[e].type);
                r.default.emit(p.GameEvent.update_bless);
            }
        }),
        (h.prototype.addShopLotteryTimes = function (t) {
            (this.shopLotteryTimes += t), this.saveByKey("shopLotteryTimes");
        }),
        (h.prototype.addLotteryProcessIDs = function (t) {
            var e;
            (e = this.shopLotteryRewardID).push.apply(e, t), this.saveByKey("shopLotteryRewardID");
        }),
        (h.prototype.addUnlockDistrict = function (t) {
            this.unlockDistrict.includes(t) || (this.unlockDistrict.push(t), this.saveByKey("unlockDistrict"));
        }),
        (h.prototype.clearLastGuide = function () {
            (this.lastGuide = {id: 0, index: -1}), this.saveByKey("lastGuide");
        }),
        (h.prototype.setLastGuide = function (t, e) {
            (this.lastGuide = {id: t, index: e}), this.saveByKey("lastGuide");
        }),
        h);
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.lastObjectIndex = 0),
        (t.curStrength = 0),
        (t.curHp = 0),
        (t.addHp = 0),
        (t.addStrength = 0),
        (t.debug_version = 0),
        (t.initMapObjects = {}),
        (t.initInsideObjects = {}),
        (t.props = {}),
        (t.mapObjectDatas = {}),
        (t.collect_decoration_datas = {}),
        (t.unlockNPC = []),
        (t.tools = {}),
        (t.guide = !1),
        (t.shopLotteryTimes = 0),
        (t.shopLotteryRewardID = []),
        (t.unlockDistrict = []),
        (t.lastGuide = {id: 0, index: -1}),
        (t.npcData = {}),
        (t.foodMenu = {}),
        (t.warehouseLv = 1),
        (t.lastCreateBusinessTime = 0),
        (t.last_create_heart_time = 0),
        (t.last_resume_strength_time = 0),
        (t.last_resume_hp_time = 0),
        (t.endGuidings = []),
        (t.shelf_unlock_slot = []),
        (t.lastCreateShelfNPCTime = 0),
        (t.broadcast = null),
        (t.produce_rate_unlock = []),
        (t.truck_order = null),
        (t.explore_data = null),
        (t.onLineSecond = 0),
        (t.lastOnlineTime = 0),
        (t.getShareAward = []),
        (t.musicOn = 1),
        (t.effectOn = 1),
        (t.autoCollectTime = 0),
        (t.autoCollectTotalTime = 0),
        (t.autoCollectState = 0),
        (t.broad_bless_data = []),
        (t.bless_data = null),
        (t.nick_name = ""),
        (t.name_change_count = 0),
        (t.player_broad_bless_data = []),
        (t.invite_data = null),
        (t.sex_id = 0),
        (t.history_gold = 0),
        (t.last_save_time = 0),
        (t.petAni = {}),
        (t.is_bless_broad = !1),
        t
    );
}
(o.default = i),
    (o.LotteryData = function () {
        (this.type = 0), (this.value = 0), (this.state = 0), (this.weight = 0);
    });
var _ = function () {
    (this.start_time = 0),
        (this.end_time = 0),
        (this.items = []),
        (this.price = 0),
        (this.lottery_data = []),
        (this.left_count = 0),
        (this.turn_count = 0);
};
o.OrderLocalData = _;
var f = function () {
    (this.id = 0), (this.nickname = ""), (this.op_time = 0), (this.text_string = ""), (this.type = 0);
};
o.BroadBlessData = f;
var m = function () {
    (this.broad_time = 0), (this.broad_index = 0);
};
(o.BlessData = m),
    (o.InviteChildren = function () {
        (this.uid = ""), (this.nick_name = ""), (this.level = 0), (this.image_id = 0), (this.reward_index = 0);
    }),
    (o.InviteData = function () {
        (this.parent_list = []),
            (this.children_list = []),
            (this.now_count = 0),
            (this.now_index = 0),
            (this.delete_list = []);
    });
