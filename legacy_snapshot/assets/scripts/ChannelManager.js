var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.ChannelManager = o.REWARD_VIDEO_AD_RESULT = o.REWARD_VIDEO_AD_TYPE = o.BANNER_AD_TYPE = void 0);
var i,
    a,
    r = t("QQMiniGame"),
    s = t("TTMiniGame"),
    c = t("WXMiniGame"),
    l = t("DWMiniGame "),
    p = t("GameMgr"),
    u = t("VIVOMiniGame"),
    d = t("OPPOMiniGame"),
    h = t("SDKManager"),
    _ = t("ChuanShanJiaNativeGame"),
    f = t("HWGame"),
    m = t("Utils"),
    n = t("ChannelConst"),
    g = t("Const"),
    y = t("DataManager"),
    v = t("AppConfig"),
    b = t("EventManager");

function I() {
    (this._is_fenghao = !1),
    (this.unsave_openid_list = ["[REDACTED_OPEN_ID_1]", "[REDACTED_OPEN_ID_2]", "[REDACTED_OPEN_ID_3]"]),
    (this._ios_suc_call_back = null),
    (this._call_back = null),
    (this._pay_id = ""),
    (this._rmb = ""),
    (this._recharge_id = 0),
    (this.lock_call_back = null),
    (this.game_id = {
        google: "1338",
        233: "1311",
        taptap: "1245",
        juliang: "1273",
        ios: "1303",
        hykb: "1310",
        xiaomi: "1312",
        vivo: "1313",
        oppo: "1314",
        huawei: "1315",
        4399: "1320"
    }),
    (this.login_type = {
        google: "google",
        233: "233",
        taptap: "tap",
        juliang: "juliang",
        ios: "ios",
        hykb: "hykb",
        xiaomi: "xiaomi",
        vivo: "vivo",
        oppo: "oppo",
        huawei: "huawei",
        4399: "4399"
    });
}
((t = o.BANNER_AD_TYPE || (o.BANNER_AD_TYPE = {}))[(t.ALL = 0)] = "ALL"),
((t = i = o.REWARD_VIDEO_AD_TYPE || (o.REWARD_VIDEO_AD_TYPE = {}))[(t.ALL = 0)] = "ALL"),
(t[(t.LONG = 1)] = "LONG"),
(t[(t.SHORT = 2)] = "SHORT"),
((t = a = o.REWARD_VIDEO_AD_RESULT || (o.REWARD_VIDEO_AD_RESULT = {}))[(t.PULL_UP = 1)] = "PULL_UP"),
(t[(t.REWARD = 2)] = "REWARD"),
Object.defineProperty(I, "instance", {
        get: function() {
            return this._instance || (this._instance = new I()), this._instance;
        },
        enumerable: !1,
        configurable: !0
    }),
    (I.prototype.weiXin_Login = function(t) {
        var e = this.get_channel_name();
        (e != I.TAP_TAP_GAME && e != I.IPHONE_GAME && e != I.IPAD_GAME) ||
        _.ChuanShanJiaNativeGame.instance.weiXin_Login(t);
    }),
    Object.defineProperty(I.prototype, "is_fenghao", {
        get: function() {
            return this._is_fenghao;
        },
        set: function(t) {
            this._is_fenghao = t;
        },
        enumerable: !1,
        configurable: !0
    }),
    (I.prototype.login_on_rsp = function(t) {
        0 != t.ResultCode ||
            (console.log("msg.data:" + t.data),
                (p.gm.data.open_id = t.data.open_id),
                console.log("gm.data.open_id:" + p.gm.data.open_id),
                (p.gm.data.token = t.data.token),
                (p.gm.data.uid = t.data.uid),
                (this._is_fenghao = !1),
                0 < t.data.if_block && (this._is_fenghao = !0),
                console.log("login_on_rsp:if_block=" + t.data.if_block),
                b.default.emit(g.GameEvent.login_done),
                p.gm.channel.get_channel_name() != I.WX_GAME) ||
            ((t = p.gm.channel.getShareOpenId()) &&
                "" != t &&
                t != p.gm.data.uid &&
                (console.log("share_open_id=" + t),
                    m.Utils.server_http_request(
                        null,
                        this,
                        p.gm.channel.getServerUrl() +
                        "user/upload_player_data_to_inviter/upload?uid=" +
                        p.gm.data.uid +
                        "&token=" +
                        p.gm.data.token +
                        "&open_id=" +
                        p.gm.data.open_id +
                        "&channel_id=" +
                        p.gm.channel.get_channel_id().toString() +
                        "&nick_name=nick_name&update_percent=0&inviter_uid=" +
                        t
                    )));
    }),
    (I.prototype.get_is_save = function() {
        var t = this.get_channel_name();
        return (
            t == I.TT_GAME ||
            t == I.QQ_GAME ||
            t == I.WX_GAME ||
            t == I.DW_GAME ||
            t == I.HW_GAME ||
            t == I.VIVO_GAME ||
            t == I.OPPO_GAME ||
            t == I.KKMH_GAME ||
            t == I.MZ_GAME ||
            t == I.TAP_TAP_GAME ||
            t == I.IPHONE_GAME ||
            t == I.IPAD_GAME ||
            !(!cc.sys.isNative || cc.sys.platform != cc.sys.ANDROID)
        );
    }),
    (I.prototype.get_is_login = function() {
        var t = this.get_channel_name();
        return (
            t == I.TT_GAME ||
            t == I.QQ_GAME ||
            t == I.WX_GAME ||
            t == I.DW_GAME ||
            t == I.HW_GAME ||
            t == I.VIVO_GAME ||
            t == I.OPPO_GAME ||
            t == I.KKMH_GAME ||
            t == I.MZ_GAME ||
            (t != I.TAP_TAP_GAME &&
                t != I.IPHONE_GAME &&
                t != I.IPAD_GAME &&
                (!cc.sys.isNative || cc.sys.platform != cc.sys.ANDROID))
        );
    }),
    (I.prototype.get_is_show_proposal = function() {
        return this.get_channel_name() == I.WX_GAME && c.WXMiniGame.instance.get_is_show_proposal();
    }),
    (I.prototype.create_wx_button = function() {
        this.get_channel_name() == I.WX_GAME && c.WXMiniGame.instance.create_wx_button();
    }),
    (I.prototype.destroy_wx_button = function() {
        this.get_channel_name() == I.WX_GAME && c.WXMiniGame.instance.destory_wx_button();
    }),
    (I.prototype.report_item_unvalid = function() {}),
    (I.prototype.getRechargeSucAndiordRsp = function(t) {
        console.log("getRechargeSucAndiordRsp ResultCode=" + t.ResultCode),
            0 == t.ResultCode ?
            (this._call_back && this._call_back(),
                (p.gm.data.start_data.order_id_list.order_id = ""),
                (p.gm.data.start_data.order_id_list.recharge_id = 0),
                p.gm.data.start_data.async_write_data()) :
            p.gm.ui.showNotice(t.msg);
    }),
    (I.prototype.sendRechargeSucToAndiordServer = function() {
        console.log("sendRechargeSucToAndiordServer"),
            m.Utils.server_http_request(
                this.getRechargeSucAndiordRsp,
                this,
                p.gm.channel.getServerUrl() + "pay/wechat_pay_android/verify?uid=%s&token=%s&order_id=%s",
                p.gm.data.uid,
                p.gm.data.token,
                p.gm.data.start_data.order_id_list.order_id
            );
    }),
    (I.prototype.getAndiordRechargeRsp = function(t) {
        var e = this;
        console.log("sendRechargeToAndriodServer ResultCode=" + t.ResultCode), -2 == t.ResultCode ?
            ((p.gm.data.start_data.order_id_list.order_id = t.data),
                p.gm.data.start_data.async_write_data(),
                c.WXMiniGame.instance.recharge(this._rmb, function() {
                    console.log("sendRechargeToAndriodServer recharge"),
                        e.sendRechargeToAndriodServer(e._pay_id, e._rmb);
                })) :
            0 == t.ResultCode ?
            (console.log("sendRechargeToAndriodServer _call_back"),
                this._call_back && this._call_back(),
                (p.gm.data.start_data.order_id_list.order_id = ""),
                (p.gm.data.start_data.order_id_list.recharge_id = 0),
                p.gm.data.start_data.async_write_data()) :
            p.gm.ui.showNotice(t.msg);
    }),
    (I.prototype.sendRechargeToAndriodServer = function(t, e) {
        console.log("sendRechargeToAndriodServer"),
            m.Utils.server_http_request(
                this.getAndiordRechargeRsp,
                this,
                p.gm.channel.getServerUrl() +
                "pay/wechat_pay_android/prepay?token=%s&uid=%s&open_id=%s&nick_name=%s&pay_id=%s&desc=%s&rmb=%s&amount=%s",
                p.gm.data.token,
                p.gm.data.uid,
                p.gm.data.open_id,
                p.gm.data.start_data.nick_name,
                t,
                t,
                e,
                e * p.gm.const.RECHARGE_RATION + ""
            );
    }),
    (I.prototype.getRechargeSucIosRsp = function(t) {
        console.log("getIosRechargeRsp getRechargeSucIosRsp ResultCode " + t.ResultCode),
            0 == t.ResultCode &&
            (1 == t.data.pay_to_game_status &&
                ((p.gm.data.start_data.order_id_list.recharge_id = 0),
                    (p.gm.data.start_data.order_id_list.order_id = ""),
                    p.gm.data.start_data.async_write_data()),
                this._ios_suc_call_back && this._ios_suc_call_back());
    }),
    (I.prototype.sendRechargeSucToIosServer = function(t) {
        console.log("getIosRechargeRsp sendRechargeSucToIosServer "),
            (this._ios_suc_call_back = t),
            m.Utils.server_http_request(
                this.getRechargeSucIosRsp,
                this,
                p.gm.channel.getServerUrl() + "pay/wechat_pay_ios/verify?uid=%s&token=%s&order_id=%s",
                p.gm.data.uid,
                p.gm.data.token,
                p.gm.data.start_data.order_id_list.order_id
            );
    }),
    (I.prototype.getLoginRechargeSucIosRsp = function(t) {
        var e, o;
        if ((console.log("getIosRechargeRsp getRechargeSucIosRsp ResultCode " + t.ResultCode), 0 == t.ResultCode)) {
            for (o in (e = p.gm.channel.get_is_new_recharge_edtion() ?
                    p.gm.config.get_config_data("GpRechargeConfigData") :
                    p.gm.config.get_config_data("RechargeConfigData")).data)
                if (e.data[o].product_id == t.data.pay_id) {
                    p.gm.data.start_data.add_recharge_reward(e.data[o]),
                        (p.gm.data.start_data.order_id_list.recharge_id = 0),
                        (p.gm.data.start_data.order_id_list.order_id = ""),
                        p.gm.data.start_data.async_write_data();
                    break;
                }
        } else p.gm.ui.showNotice(t.msg);
    }),
    (I.prototype.sendLoginRechargeSucToIosServer = function(t, e) {
        console.log("getIosRechargeRsp sendRechargeSucToIosServer "),
            (this._ios_suc_call_back = e),
            m.Utils.server_http_request(
                this.getLoginRechargeSucIosRsp,
                this,
                p.gm.channel.getServerUrl() + "pay/wechat_pay_ios/verify?uid=%s&token=%s&order_id=%s",
                p.gm.data.uid,
                p.gm.data.token,
                t
            );
    }),
    (I.prototype.getIosRechargeRsp = function() {}),
    (I.prototype.sendRechargeToIosServer = function(t, e) {
        console.log("getIosRechargeRsp sendRechargeToIosServer"),
            m.Utils.server_http_request(
                this.getIosRechargeRsp,
                this,
                p.gm.channel.getServerUrl() +
                "pay/wechat_pay_ios/prepay?token=%s&uid=%s&open_id=%s&nick_name=%s&pay_id=%s&desc=%s&rmb=%s&amount=%s",
                p.gm.data.token,
                p.gm.data.uid,
                p.gm.data.open_id,
                p.gm.data.start_data.nick_name,
                t,
                t,
                e,
                e * p.gm.const.RECHARGE_RATION + ""
            );
    }),
    (I.prototype.getIosRechargeRspByKefu = function() {}),
    (I.prototype.sendRechargeToIosServerByKefu = function(t, e) {
        console.log("getIosRechargeRsp sendRechargeToIosServer"),
            m.Utils.server_http_request(
                this.getIosRechargeRspByKefu,
                this,
                p.gm.channel.getServerUrl() +
                "pay/wechat_pay_ios/prepay?token=%s&uid=%s&open_id=%s&nick_name=%s&pay_id=%s&desc=%s&rmb=%s&amount=%s",
                p.gm.data.token,
                p.gm.data.uid,
                p.gm.data.open_id,
                p.gm.data.start_data.nick_name,
                t,
                t,
                e,
                e * p.gm.const.RECHARGE_RATION + ""
            );
    }),
    (I.prototype.getServerUrl = function() {
        return v.default.ServerMhtRequestUrl;
    }),
    (I.prototype.recharge = function() {}),
    (I.prototype.get_is_diamond = function() {
        var t = this.get_channel_name();
        return (
            t != I.TT_GAME &&
            t != I.QQ_GAME &&
            t != I.WX_GAME &&
            t != I.DW_GAME &&
            t != I.HW_GAME &&
            t != I.VIVO_GAME &&
            t != I.OPPO_GAME &&
            t != I.KKMH_GAME &&
            t != I.MZ_GAME &&
            (t != I.TAP_TAP_GAME ?
                t != I.IPHONE_GAME && t != I.IPAD_GAME && (cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID), !1) :
                "ohayoo" != p.gm.data.main_data.channelName &&
                ("tap-tap-game" == p.gm.data.main_data.channelName ?
                    ((t = ""),
                        "hykb" ==
                        (t = h.SDKManager.instance.getChannelAdName ?
                            h.SDKManager.instance.getChannelAdName() :
                            t) || "taptap" == t) :
                    void 0))
        );
    }),
    (I.prototype.get_is_new_recharge_edtion = function() {
        var t = this.get_channel_name();
        return t == I.TAP_TAP_GAME ?
            "tap-tap-game" == h.SDKManager.instance.getChannelName() &&
            "google" == h.SDKManager.instance.getChannelAdName() :
            t != I.TT_GAME &&
            t != I.QQ_GAME &&
            t != I.WX_GAME &&
            t != I.DW_GAME &&
            t != I.HW_GAME &&
            t != I.VIVO_GAME &&
            t != I.OPPO_GAME &&
            t != I.KKMH_GAME &&
            t != I.MZ_GAME &&
            t != I.IPHONE_GAME &&
            t != I.IPAD_GAME &&
            (!cc.sys.isNative || cc.sys.platform != cc.sys.ANDROID);
    }),
    (I.prototype.get_is_google = function() {
        var t = this.get_channel_name();
        return t == I.TAP_TAP_GAME ?
            "tap-tap-game" == h.SDKManager.instance.getChannelName() &&
            "google" == h.SDKManager.instance.getChannelAdName() :
            t != I.TT_GAME &&
            t != I.QQ_GAME &&
            t != I.WX_GAME &&
            t != I.DW_GAME &&
            t != I.HW_GAME &&
            t != I.VIVO_GAME &&
            t != I.OPPO_GAME &&
            t != I.KKMH_GAME &&
            t != I.MZ_GAME &&
            t != I.IPHONE_GAME &&
            t != I.IPAD_GAME &&
            (cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID), !1);
    }),
    (I.prototype.get_is_taptap = function() {
        var t = this.get_channel_name();
        return t == I.TAP_TAP_GAME ?
            "tap-tap-game" == h.SDKManager.instance.getChannelName() &&
            "taptap" == h.SDKManager.instance.getChannelAdName() :
            t != I.TT_GAME &&
            t != I.QQ_GAME &&
            t != I.WX_GAME &&
            t != I.DW_GAME &&
            t != I.HW_GAME &&
            t != I.VIVO_GAME &&
            t != I.OPPO_GAME &&
            t != I.KKMH_GAME &&
            t != I.MZ_GAME &&
            t != I.IPHONE_GAME &&
            t != I.IPAD_GAME &&
            (!cc.sys.isNative || cc.sys.platform != cc.sys.ANDROID);
    }),
    (I.prototype.get_is_safe_notice = function() {
        var t = this.get_channel_name();
        return (
            t != I.TT_GAME &&
            (t == I.QQ_GAME ||
                (t != I.WX_GAME &&
                    t != I.DW_GAME &&
                    t != I.HW_GAME &&
                    (t == I.VIVO_GAME ||
                        t == I.OPPO_GAME ||
                        t == I.TAP_TAP_GAME ||
                        (t != I.KKMH_GAME &&
                            t != I.MZ_GAME &&
                            (t == I.IPHONE_GAME ||
                                t == I.IPAD_GAME ||
                                !cc.sys.isNative ||
                                cc.sys.platform != cc.sys.ANDROID)))))
        );
    }),
    (I.prototype.get_is_user_safe_notice = function() {
        var t = this.get_channel_name();
        return (
            t != I.TT_GAME &&
            (t == I.QQ_GAME ||
                (t != I.WX_GAME &&
                    t != I.DW_GAME &&
                    t != I.HW_GAME &&
                    t != I.VIVO_GAME &&
                    t != I.OPPO_GAME &&
                    t != I.TAP_TAP_GAME &&
                    t != I.KKMH_GAME &&
                    t != I.MZ_GAME &&
                    t != I.IPHONE_GAME &&
                    t != I.IPAD_GAME &&
                    (!cc.sys.isNative || cc.sys.platform != cc.sys.ANDROID)))
        );
    }),
    (I.prototype.get_is_show_setui_update_btn = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_is_show_set_ui_update() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.get_is_show_set_ui_update() :
            t == I.WX_GAME ?
            c.WXMiniGame.instance.get_is_show_set_ui_update() :
            t == I.DW_GAME ||
            (t == I.HW_GAME ?
                f.HWGame.instance.get_is_show_set_ui_update() :
                t == I.VIVO_GAME ?
                u.VIVOMiniGame.instance.get_is_show_set_ui_update() :
                t == I.OPPO_GAME ?
                d.OPPOMiniGame.instance.get_is_show_set_ui_update() :
                t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
                _.ChuanShanJiaNativeGame.instance.get_is_show_set_ui_update() :
                t == I.KKMH_GAME || t == I.MZ_GAME || (cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID), !0));
    }),
    (I.prototype.get_is_recharge = function() {
        var t = this.get_channel_name();
        return (
            t != I.TT_GAME &&
            t != I.QQ_GAME &&
            (t == I.WX_GAME ?
                c.WXMiniGame.instance.getIsRecharge() :
                t != I.DW_GAME &&
                t != I.HW_GAME &&
                t != I.VIVO_GAME &&
                t != I.OPPO_GAME &&
                (t == I.TAP_TAP_GAME ?
                    _.ChuanShanJiaNativeGame.instance.getIsRecharge() :
                    t != I.KKMH_GAME &&
                    t != I.MZ_GAME &&
                    t != I.IPHONE_GAME &&
                    t != I.IPAD_GAME &&
                    (!cc.sys.isNative || cc.sys.platform != cc.sys.ANDROID)))
        );
    }),
    (I.prototype.get_is_manual_save = function() {
        var t = this.get_channel_name();
        return (
            t != I.TT_GAME &&
            t != I.QQ_GAME &&
            t != I.WX_GAME &&
            t != I.DW_GAME &&
            t != I.HW_GAME &&
            t != I.VIVO_GAME &&
            t != I.OPPO_GAME &&
            (t == I.TAP_TAP_GAME ?
                this.get_is_server_cloud() :
                t != I.KKMH_GAME &&
                t != I.MZ_GAME &&
                (t == I.IPHONE_GAME || t == I.IPAD_GAME ?
                    this.get_is_server_cloud() :
                    (cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID), !1)))
        );
    }),
    (I.prototype.get_data_code_is_show = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_data_code_is_show() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.get_data_code_is_show() :
            t == I.WX_GAME ?
            c.WXMiniGame.instance.get_data_code_is_show() :
            t != I.DW_GAME &&
            (t == I.HW_GAME ?
                f.HWGame.instance.get_data_code_is_show() :
                t == I.VIVO_GAME ?
                u.VIVOMiniGame.instance.get_data_code_is_show() :
                t == I.OPPO_GAME ?
                d.OPPOMiniGame.instance.get_data_code_is_show() :
                t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
                _.ChuanShanJiaNativeGame.instance.get_data_code_is_show() :
                t != I.KKMH_GAME && t != I.MZ_GAME && (!cc.sys.isNative || cc.sys.platform != cc.sys.ANDROID));
    }),
    (I.prototype.get_ios_appStore_id = function() {
        var t = this.get_channel_name();
        return t == I.IPHONE_GAME || t == I.IPAD_GAME ?
            _.ChuanShanJiaNativeGame.instance.get_ios_appStore_id() :
            void 0;
    }),
    (I.prototype.get_is_server_cloud = function() {
        var t = this.get_channel_name();
        return (
            (t != I.TAP_TAP_GAME && t != I.IPHONE_GAME && t != I.IPAD_GAME) ||
            _.ChuanShanJiaNativeGame.instance.get_is_server_cloud()
        );
    }),
    (I.prototype.get_is_show_nick_name = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_is_show_nick_name() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.get_is_show_nick_name() :
            t == I.WX_GAME ?
            c.WXMiniGame.instance.get_is_show_nick_name() :
            t == I.DW_GAME ||
            (t == I.HW_GAME ?
                f.HWGame.instance.get_is_show_nick_name() :
                t == I.VIVO_GAME ?
                u.VIVOMiniGame.instance.get_is_show_nick_name() :
                t == I.OPPO_GAME ?
                d.OPPOMiniGame.instance.get_is_show_nick_name() :
                t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
                _.ChuanShanJiaNativeGame.instance.get_is_show_nick_name() :
                t == I.KKMH_GAME || t == I.MZ_GAME || (cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID), !0));
    }),
    (I.prototype.get_is_show_active_btn = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_is_show_active_btn() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.get_is_show_active_btn() :
            t == I.WX_GAME ?
            c.WXMiniGame.instance.get_is_show_active_btn() :
            t != I.DW_GAME &&
            (t == I.HW_GAME ?
                f.HWGame.instance.get_is_show_active_btn() :
                t == I.VIVO_GAME ?
                u.VIVOMiniGame.instance.get_is_show_active_btn() :
                t == I.OPPO_GAME ?
                d.OPPOMiniGame.instance.get_is_show_active_btn() :
                t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
                _.ChuanShanJiaNativeGame.instance.get_is_show_active_btn() :
                t == I.KKMH_GAME || t == I.MZ_GAME || (cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID), !0));
    }),
    (I.prototype.get_praise_pecent = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_praise_and_pecent() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.get_praise_and_pecent() :
            t == I.WX_GAME ?
            c.WXMiniGame.instance.get_praise_and_pecent() :
            t == I.DW_GAME ?
            60 :
            t == I.HW_GAME ?
            f.HWGame.instance.get_praise_and_pecent() :
            t == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.get_praise_and_pecent() :
            t == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.get_praise_and_pecent() :
            t == I.TAP_TAP_GAME ?
            _.ChuanShanJiaNativeGame.instance.get_praise_and_pecent() :
            t == I.IPHONE_GAME || t == I.IPAD_GAME ?
            _.ChuanShanJiaNativeGame.instance.get_praise_ios_pecent() :
            (t == I.KKMH_GAME || t == I.MZ_GAME || (cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID)), 60);
    }),
    (I.prototype.get_is_show_qq_copy = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_qq_copy_is_show() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.get_qq_copy_is_show() :
            t == I.WX_GAME ?
            c.WXMiniGame.instance.get_qq_copy_is_show() :
            t != I.DW_GAME &&
            (t == I.HW_GAME ?
                f.HWGame.instance.get_qq_copy_is_show() :
                t == I.VIVO_GAME ?
                u.VIVOMiniGame.instance.get_qq_copy_is_show() :
                t == I.OPPO_GAME ?
                d.OPPOMiniGame.instance.get_qq_copy_is_show() :
                t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
                _.ChuanShanJiaNativeGame.instance.get_qq_copy_is_show() :
                t != I.KKMH_GAME && t != I.MZ_GAME && (!cc.sys.isNative || cc.sys.platform != cc.sys.ANDROID));
    }),
    (I.prototype.get_is_show_taptap_ad = function() {
        return (
            this.get_channel_name() == I.TAP_TAP_GAME && _.ChuanShanJiaNativeGame.instance.get_get_is_show_taptap_ad()
        );
    }),
    (I.prototype.get_is_real_name = function() {
        var t = this.get_channel_name();
        return (
            (t != I.TAP_TAP_GAME && t != I.IPHONE_GAME && t != I.IPAD_GAME) ||
            _.ChuanShanJiaNativeGame.instance.get_is_real_name()
        );
    }),
    (I.prototype.get_is_praise = function() {
        var t = this.get_channel_name();
        return (
            (t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME) &&
            _.ChuanShanJiaNativeGame.instance.get_is_praise()
        );
    }),
    (I.prototype.login_on_bind_rsp = function(t) {
        0 == t.ResultCode &&
            ((p.gm.data.bind_uid = t.data.uid),
                (p.gm.data.bind_open_id = t.data.open_id),
                (p.gm.data.bind_token = t.data.token),
                (p.gm.data.uid = t.data.uid),
                (p.gm.data.open_id = t.data.open_id),
                (p.gm.data.token = t.data.token),
                console.log(
                    "login_on_bind_uid_rsp login_on_bind_rsp:bind_uid=" +
                    t.data.uid +
                    "&bind_open_id=" +
                    t.data.open_id +
                    "bind_token=" +
                    t.data.token
                ),
                0 < t.data.if_block && (this._is_fenghao = !0),
                console.log("login_on_rsp:if_block=" + t.data.if_block),
                b.default.emit(g.GameEvent.login_done));
    }),
    (I.prototype.login_on_bind_uid_rsp = function(t) {
        0 == t.ResultCode &&
            ((p.gm.data.token = t.data.token),
                (p.gm.data.start_data.token = t.data.token),
                p.gm.data.start_data.async_write_data(),
                console.log("login_on_bind_uid_rsp:token=" + t.data.token));
    }),
    (I.prototype.bind_device_to_uid = function() {
        var t = this.get_channel_id();
        console.log(
                "login_on_bind_uid_rsp:bind_device_to_uid:code=" +
                p.gm.data.open_id +
                "bind_open_id=" +
                p.gm.data.bind_open_id +
                "uid=" +
                p.gm.data.bind_uid
            ),
            m.Utils.server_http_request(
                this.login_on_bind_uid_rsp,
                this,
                p.gm.channel.getServerUrl() +
                "user/login?code=%s&channel_id=%s&bind_username=%s&bind_uid=%s&bind_channel=%s&if_anonymous=1",
                p.gm.data.open_id,
                t + "",
                p.gm.data.bind_open_id,
                p.gm.data.bind_uid,
                t + ""
            );
    }),
    (I.prototype.getShareOpenId = function() {
        return this.get_channel_name() == I.WX_GAME ? c.WXMiniGame.instance.getShareOpenId() : "";
    }),
    (I.prototype.get_channel_id = function() {
        var t,
            e = n.ChannelTypeEnum.CHANNEL_TYPE_DEFAULT,
            e = y.DataManager.instance.is_test ?
            n.ChannelTypeEnum.CHANNEL_TYPE_TAPTAP :
            n.ChannelTypeEnum.CHANNEL_TYPE_DEFAULT,
            o = this.get_channel_name();
        return (
            o == I.WX_GAME ?
            (e = n.ChannelTypeEnum.CHANNEL_TYPE_WECHAT) :
            o == I.TT_GAME ?
            (e = n.ChannelTypeEnum.CHANNEL_TYPE_TT_GAME) :
            o == I.QQ_GAME ?
            (e = n.ChannelTypeEnum.CHANNEL_TYPE_QQ_GAME) :
            o == I.OPPO_GAME ?
            (e = n.ChannelTypeEnum.CHANNEL_TYPE_OPPO_GAME) :
            o == I.VIVO_GAME ?
            (e = n.ChannelTypeEnum.CHANNEL_TYPE_VIVO_GAME) :
            o == I.HW_GAME ?
            (e = n.ChannelTypeEnum.CHANNEL_TYPE_HW_GAME) :
            o == I.TAP_TAP_GAME ?
            "ohayoo" == (t = h.SDKManager.instance.getChannelName()) ?
            (e = n.ChannelTypeEnum.CHANNEL_TYPE_OHAYOO) :
            "tap-tap-game" == t &&
            (e =
                "juliang" == h.SDKManager.instance.getChannelAdName() ?
                n.ChannelTypeEnum.CHANNEL_TYPE_JULIANG :
                "google" == h.SDKManager.instance.getChannelAdName() ?
                n.ChannelTypeEnum.CHANNEL_TYPE_GOOGLE :
                n.ChannelTypeEnum.CHANNEL_TYPE_TAPTAP) :
            o == I.IPHONE_GAME ?
            (e = n.ChannelTypeEnum.CHANNEL_TYPE_IPHONE) :
            o == I.IPAD_GAME && (e = n.ChannelTypeEnum.CHANNEL_TYPE_IPAD),
            e
        );
    }),
    (I.prototype.app_login = function(t) {
        var e = this.get_channel_id();
        console.log("login_on_rsp:app_login"),
            (p.gm.data.report_login_value = 17),
            m.Utils.server_http_request(
                this.login_on_bind_rsp,
                this,
                p.gm.channel.getServerUrl() + "user/login?code=%s&channel_id=%s&if_anonymous=1",
                t,
                e + ""
            );
    }),
    (I.prototype.login_call_back = function() {
        var t;
        (p.gm.data.report_login_value = 11),
        p.gm.data.device_id && "" != p.gm.data.device_id ?
            (this.app_login(p.gm.data.device_id), this.lock_call_back && this.lock_call_back()) :
            ((p.gm.data.report_login_value = 12),
                this.lock_call_back && this.lock_call_back(),
                (t = h.SDKManager.instance.getJsIdfa()),
                console.log("report_login has_device_id=" + t),
                t && "" != t && "undefined" != t ?
                ((p.gm.data.report_login_value = 13), (p.gm.data.device_id = t), this.app_login(t)) :
                ((p.gm.data.report_login_value = 14),
                    (p.gm.data.device_id = Date.now() + "" + m.Utils.random(!0, 0, 1e3)),
                    this.app_login(p.gm.data.device_id)));
    }),
    (I.prototype.report_login = function(t, e) {
        // if (this.check_is_app())
        //     return (
        //         (p.gm.data.report_login_value = 10),
        //         (this.lock_call_back = e),
        //         void (this.get_channel_name() == I.TAP_TAP_GAME
        //             ? (this.login_call_back(), (p.gm.data.report_login_value = 3))
        //             : ((p.gm.data.report_login_value = 6), this.login_call_back()))
        //     );
        var o;
        this.get_is_login() &&
            ((p.gm.data.report_login_value = 7),
                (o = this.get_channel_id()),
                this.login_on_rsp({ "ResultCode": 0, "msg": "\u83b7\u53d6\u5230\u7528\u6237\u6570\u636e", "data": { "uid": "8660", "open_id": "[REDACTED_LEGACY_OPEN_ID]", "nickname": "", "coins": 2052, "data_last_update_time": 1684998654, "if_block": 0, "if_bind": 0, "bind_username": "", "bind_uid": 0, "bind_channel": 0, "token": "[REDACTED_LEGACY_TOKEN]" } })
                // m.Utils.server_http_request(
                //     this.login_on_rsp,
                //     this,
                //     p.gm.channel.getServerUrl() + "user/login?code=" + t + "&channel_id=" + o
                // )
            ),
            e && e();
    }),
    (I.prototype.report_logined = function(t, e) {
        var o = this,
            n = this.get_channel_id();
        m.Utils.server_http_request(
            function(t) {
                if (0 == t.ResultCode) {
                    if ("" == p.gm.data.start_data.open_id || p.gm.data.start_data.open_id == t.data.open_id) {
                        if (
                            (console.log("msg.data:" + t.data),
                                (p.gm.data.start_data.open_id = t.data.open_id),
                                console.log("gm.data.open_id:" + p.gm.data.start_data.open_id),
                                (p.gm.data.start_data.token = t.data.token),
                                (p.gm.data.start_data.uid = t.data.uid),
                                console.log("msg.data.data_last_update_time:" + t.data.data_last_update_time),
                                (p.gm.data.start_data.now_save_time = 1e3 * parseInt(t.data.data_last_update_time)),
                                (p.gm.data.start_data.bind_uid = t.data.bind_uid),
                                p.gm.data.start_data.async_write_data(),
                                console.log(
                                    "login_on_bind_uid_rsp:report_logined:this.uid=" +
                                    t.data.uid +
                                    "this.token" +
                                    t.data.token +
                                    "open_id" +
                                    t.data.open_id +
                                    "bind_uid=" +
                                    t.data.bind_uid
                                ),
                                (p.gm.data.main_data.uid = p.gm.data.start_data.uid),
                                (p.gm.data.main_data.open_id = p.gm.data.start_data.open_id),
                                (p.gm.data.main_data.token = p.gm.data.start_data.token),
                                p.gm.data.main_data.async_write_data(),
                                (p.gm.data.uid = t.data.uid),
                                (p.gm.data.token = t.data.token),
                                (p.gm.data.open_id = t.data.open_id),
                                (p.gm.data.history_gold = t.data.coins),
                                0 < t.data.if_block && !p.gm.const.IS_TEST)
                        )
                            return (o._is_fenghao = !0), void p.gm.ui.async_show_module(p.gm.const.FENGHAO);
                        p.gm.channel.check_is_app() && h.SDKManager.instance.setOpenId(t.data.open_id);
                    }
                    e && e();
                } else p.gm.ui.showNotice("登陆失败，err_ocde=" + t.ResultCode);
            },
            this,
            p.gm.channel.getServerUrl() + "user/login?code=%s&channel_id=%s",
            t,
            n + ""
        );
    }),
    (I.prototype.check_is_dirty_word = function(t, e) {
        var o = this.get_channel_name();
        o == I.WX_GAME ?
            c.WXMiniGame.instance.check_is_dirty_word(t, e) :
            o == I.TT_GAME ?
            s.TTMiniGame.instance.check_is_dirty_word(t, e) :
            e(null);
    }),
    (I.prototype.get_edtion = function() {
        var t = this.get_channel_name();
        return t == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.get_edtion() :
            t == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.get_edtion() :
            t == I.TT_GAME ?
            s.TTMiniGame.instance.get_edtion() :
            t == I.WX_GAME ?
            c.WXMiniGame.instance.get_edtion() :
            t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
            _.ChuanShanJiaNativeGame.instance.get_edtion() :
            t == I.DW_GAME ?
            l.DWMiniGame.instance.get_edtion() :
            t == I.HW_GAME ?
            f.HWGame.instance.get_edtion() :
            p.gm.const.VERSION_NUMBER;
    }),
    (I.prototype.check_is_banner = function() {
        var t = this.get_channel_name();
        return t == I.VIVO_GAME || t == I.OPPO_GAME || t == I.HW_GAME || t == I.WX_GAME;
    }),
    (I.prototype.canvasResize = function() {
        var t = cc.find("Canvas").getComponent(cc.Canvas),
            e = (i = i || t.designResolution),
            o = (a = cc.view.getFrameSize()).width,
            n = a.height,
            i = o,
            a = n;
        n / o > e.height / e.width ?
            ((a = (n / o) * (i = e.width)), (t.fitHeight = !1), (t.fitWidth = !0)) :
            ((i = 720 <= (i = ((a = e.height) * o) / n) ? 720 : i), (t.fitHeight = !0), (t.fitWidth = !1)),
            (n = cc.v2(i, a)),
            (p.gm.data.design_resolution = n),
            (t.designResolution = cc.size(i, a)),
            (t.node.width = i),
            (t.node.height = a),
            cc.log("MainVO.designResolution.x:,MainVO.designResolution.y:%s.", JSON.stringify(n));
    }),
    (I.prototype.init = function(e) {
        this.report_login("test119", e)
        return
        var o = this,
            t = this.get_channel_name();
        console.log("Channel:" + t),
            t == I.TT_GAME ?
            s.TTMiniGame.ad_enable &&
            (s.TTMiniGame.instance.load_channel_env(function(t) {
                    console.log("code:" + t), o.report_login(t, e);
                }),
                s.TTMiniGame.instance.load_sub_packages_env(function() {})) :
            t == I.QQ_GAME ?
            (r.QQMiniGame.instance.load_channel_env(function(t) {
                    console.log("code:" + t), o.report_login(t, e);
                }),
                r.QQMiniGame.instance.load_sub_packages_env(function() {}),
                r.QQMiniGame.ad_enable) :
            t == I.WX_GAME ?
            0 == I.APP_DS_MAP &&
            (c.WXMiniGame.instance.load_channel_env(function(t) {
                    console.log("code:" + t), o.report_login(t, e);
                }),
                c.WXMiniGame.instance.load_sub_packages_env(function() {}),
                c.WXMiniGame.ad_enable && c.WXMiniGame.instance.create_banner_ad()) :
            t == I.DW_GAME ?
            (l.DWMiniGame.instance.load_channel_env(function() {}),
                l.DWMiniGame.instance.load_sub_packages_env(function() {}),
                l.DWMiniGame.instance.create_banner_ad(),
                l.DWMiniGame.instance.create_video_ad()) :
            t == I.VIVO_GAME ?
            (u.VIVOMiniGame.instance.load_channel_env(function(t) {
                    console.log("code:" + t), o.report_login(t, e);
                }),
                u.VIVOMiniGame.instance.load_sub_packages_env(function() {})) :
            t == I.OPPO_GAME ?
            (d.OPPOMiniGame.instance.load_channel_env(function(t) {
                    console.log("code:" + t), o.report_login(t, e);
                }),
                d.OPPOMiniGame.instance.load_sub_packages_env(function() {})) :
            t == I.KKMH_GAME ||
            t == I.MZ_GAME ||
            (t == I.HW_GAME ?
                (f.HWGame.instance.load_channel_env(function(t) {
                        console.log("code:" + t), o.report_login(t, e);
                    }),
                    f.HWGame.instance.load_sub_packages_env(function() {})) :
                t == I.TAP_TAP_GAME ?
                (_.ChuanShanJiaNativeGame.instance.load_channel_env(function(t) {
                        console.log("ChuanShanJiaNativeGame code:" + t), o.report_login(t, e), e();
                    }),
                    _.ChuanShanJiaNativeGame.instance.load_sub_packages_env(function() {}),
                    console.log(
                        "ZQY GAME_ID:  " +
                        this.game_id[h.SDKManager.instance.getChannelAdName()] +
                        "   gAMEtYPE:  " +
                        this.login_type[h.SDKManager.instance.getChannelAdName()]
                    )) :
                t == I.IPHONE_GAME ?
                (_.ChuanShanJiaNativeGame.instance.load_channel_env(function(t) {
                        console.log("ChuanShanJiaNativeGame code:" + t), o.report_login(t, e), e();
                    }),
                    _.ChuanShanJiaNativeGame.instance.load_sub_packages_env(function() {})) :
                t == I.IPAD_GAME ?
                (_.ChuanShanJiaNativeGame.instance.load_channel_env(function(t) {
                        console.log("ChuanShanJiaNativeGame code:" + t), o.report_login(t, e), e();
                    }),
                    _.ChuanShanJiaNativeGame.instance.load_sub_packages_env(function() {})) :
                (cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID) || this.report_login("test119", e)),
            p.gm.channel.check_is_app(),
            console.log("gm.channel.init is succ!!");
    }),
    (I.prototype.report_edtion_no = function() {
        this.get_channel_name(), this.check_is_app() && h.SDKManager.instance.getVersionCode();
    }),
    (I.prototype.get_user_info = function(t) {
        var e = this.get_channel_name();
        e == I.TT_GAME ?
            s.TTMiniGame.instance.get_user_info(t) :
            e == I.WX_GAME && c.WXMiniGame.instance.createUserInfoButton(t);
    }),
    (I.prototype.check_is_app = function() {
        var t = this.get_channel_name();
        return t == I.TAP_TAP_GAME || t == I.IPAD_GAME || t == I.IPHONE_GAME;
    }),
    (I.prototype.get_server_time_rsp = function(t) {
        (p.gm.data.server_time = Math.floor(Date.now() / 1e3)),
        0 == t.ResultCode && null != t.data && (p.gm.data.server_time = t.data);
    }),
    (I.prototype.get_server_time = function() {
        p.gm.const.IS_TEST ?
            (p.gm.data.server_time = Math.floor(Date.now() / 1e3)) :
            m.Utils.server_http_request(
                this.get_server_time_rsp,
                this,
                p.gm.channel.getServerUrl() + "user/get_global_data/get_server_time&token=%s&uid=%s",
                p.gm.data.token,
                p.gm.data.uid
            );
    }),
    (I.prototype.google_report = function(t, e, o, n, i, a, r) {
        var s = this.get_channel_name();
        (p.gm.const.IS_TEST || (s == I.TAP_TAP_GAME && "google" == h.SDKManager.instance.getChannelAdName())) &&
        (((s = new GoogleReportData()).eventName = t),
            "" != e && ((s.paraArray[0] = e), (s.paraObjData[0] = i)),
            "" != o && ((s.paraArray[1] = o), (s.paraObjData[1] = a)),
            "" != n && ((s.paraArray[2] = n), (s.paraObjData[2] = r)),
            (s = JSON.stringify(s)),
            console.log("google_report=" + s),
            h.SDKManager.instance.AppsFlyerLogReport(s));
    }),
    (I.prototype.get_channel_name = function() {
        var t = I.UNKNOWN;
        return t;
        // return (
        //     cc.sys.platform == cc.sys.WECHAT_GAME
        //         ? null != window.tt
        //             ? (t = I.TT_GAME)
        //             : null != window.qq
        //             ? (t = I.QQ_GAME)
        //             : null != window.wx && (0 == I.APP_DS_MAP ? (t = I.WX_GAME) : 1 == I.APP_DS_MAP && (t = I.DW_GAME))
        //         : cc.sys.platform == cc.sys.BYTEDANCE_GAME
        //         ? (t = I.TT_GAME)
        //         : cc.sys.platform == cc.sys.HUAWEI_GAME
        //         ? (t = I.HW_GAME)
        //         : cc.sys.platform == cc.sys.VIVO_GAME
        //         ? (t = I.VIVO_GAME)
        //         : cc.sys.platform == cc.sys.OPPO_GAME
        //         ? (t = I.OPPO_GAME)
        //         : cc.sys.isBrowser
        //         ? "undefined" != typeof kkH5sdk
        //             ? (t = I.KKMH_GAME)
        //             : "undefined" != typeof mz_jsb && (t = I.MZ_GAME)
        //         : cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID
        //         ? "native_vivo" == window.native_channel ||
        //           "native_oppo" == window.native_channel ||
        //           "native_momoyu" == window.native_channel ||
        //           ("native_csj" == window.native_channel && (t = I.TAP_TAP_GAME))
        //         : (t =
        //               cc.sys.isNative && cc.sys.platform == cc.sys.IPHONE
        //                   ? I.IPHONE_GAME
        //                   : cc.sys.isNative && cc.sys.platform == cc.sys.IPAD
        //                   ? I.IPAD_GAME
        //                   : I.UNKNOWN),
        //     y.DataManager.instance.is_test ? I.TAP_TAP_GAME : t
        // );
    }),
    (I.prototype.get_app_name = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_app_name() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.get_app_name() :
            t != I.WX_GAME ?
            t == I.DW_GAME ?
            l.DWMiniGame.instance.get_app_name() :
            t == I.HW_GAME ?
            f.HWGame.instance.get_app_name() :
            t == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.get_app_name() :
            t == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.get_app_name() :
            t == I.TAP_TAP_GAME ?
            I.TAP_TAP_GAME :
            cc.sys.isNative && cc.sys.platform == cc.sys.IPHONE ?
            I.IPHONE_GAME :
            cc.sys.isNative && cc.sys.platform == cc.sys.IPAD ?
            I.IPAD_GAME :
            t != I.KKMH_GAME && t != I.MZ_GAME ?
            (cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID), I.APP_UNKNOWN) :
            void 0 :
            0 == I.APP_DS_MAP ?
            c.WXMiniGame.instance.get_app_name() :
            void 0;
    }),
    (I.prototype.getChannelUrl = function() {
        var t = this.get_channel_name(),
            e = "";
        return (
            t == I.TT_GAME ?
            (e = s.TTMiniGame.instance.get_url()) :
            t == I.QQ_GAME ?
            (e = r.QQMiniGame.instance.get_url()) :
            t == I.WX_GAME ?
            0 == I.APP_DS_MAP && (e = c.WXMiniGame.instance.get_url()) :
            t == I.DW_GAME ?
            (e = l.DWMiniGame.instance.get_url()) :
            t == I.HW_GAME ?
            (e = f.HWGame.instance.get_url()) :
            t == I.VIVO_GAME ?
            (e = u.VIVOMiniGame.instance.get_url()) :
            t == I.OPPO_GAME ?
            (e = d.OPPOMiniGame.instance.get_url()) :
            t == I.TAP_TAP_GAME ?
            (e = p.gm.const.IS_GAME_XMCT ?
                "ohayoo" == h.SDKManager.instance.getChannelName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_ohayoo/share.json?" +
                Math.random().toString() :
                "juliang" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_juliang/share.json?" +
                Math.random().toString() :
                "233" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_233/share.json?" +
                Math.random().toString() :
                "hykb" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_hykb/share.json?" +
                Math.random().toString() :
                "xiaomi" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_xiaomi/share.json?" +
                Math.random().toString() :
                "vivo" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_vivo/share.json?" +
                Math.random().toString() :
                "oppo" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_oppo/share.json?" +
                Math.random().toString() :
                "huawei" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_hwshare.json?" + Math.random().toString() :
                "4399" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_4399/share.json?" +
                Math.random().toString() :
                "google" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/panda_android_google/share.json?" +
                Math.random().toString() :
                "https://leduo.zqygame.com/res/leduo/panda_android/share.json?" + Math.random().toString() :
                "ohayoo" == h.SDKManager.instance.getChannelName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/09_ohayoo/share.json?" +
                Math.random().toString() :
                "juliang" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/08_juliang/share.json?" +
                Math.random().toString() :
                "233" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/05_233/share.json?" +
                Math.random().toString() :
                "hykb" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/04_hykb/share.json?" +
                Math.random().toString() :
                "xiaomi" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/07_xiaomi/share.json?" +
                Math.random().toString() :
                "vivo" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/11_vivo/share.json?" +
                Math.random().toString() :
                "oppo" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/10_oppo/share.json?" +
                Math.random().toString() :
                "huawei" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/12_hw/share.json?" +
                Math.random().toString() :
                "4399" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/06_4399/share.json?" +
                Math.random().toString() :
                "google" == h.SDKManager.instance.getChannelAdName() ?
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/51_google/share.json?" +
                Math.random().toString() :
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/01_taptap/share.json?" +
                Math.random().toString()) :
            ((cc.sys.isNative && cc.sys.platform == cc.sys.IPHONE) ||
                (cc.sys.isNative && cc.sys.platform == cc.sys.IPAD)) &&
            (e = p.gm.const.IS_GAME_XMCT ?
                "https://leduo.zqygame.com/res/leduo/panda_ios/share.json?" + Math.random().toString() :
                "https://leduo.zqygame.com/res/leduo/01_mhtxd/02_app/02_ios/share.json?" +
                Math.random().toString()),
            e + "?" + Math.random().toString()
        );
    }),
    (I.prototype.get_version = function() {
        return cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID ?
            ((p.gm.data.main_data.channelName = h.SDKManager.instance.getChannelName()),
                console.log("Android gm.data.main_data.channelName" + p.gm.data.main_data.channelName),
                console.log("Android gm.data.main_data.getChannelAdName" + h.SDKManager.instance.getChannelAdName()),
                VersionNum.IS_TEST ?
                "ohayoo" == p.gm.data.main_data.channelName ?
                p.gm.const.IS_GAME_XMCT ?
                VersionNum.OHAYOO_TEST_URL :
                VersionNum.CHMHTXD_OHAYOO_TEST_URL :
                "juliang" == h.SDKManager.instance.getChannelAdName() ?
                p.gm.const.IS_GAME_XMCT ?
                VersionNum.JULIANG_TEST_URL :
                VersionNum.CHMHTXD_JULIANG_TEST_URL :
                "google" == h.SDKManager.instance.getChannelAdName() ?
                p.gm.const.IS_GAME_XMCT ?
                VersionNum.GOOGLE_TEST_URL :
                VersionNum.CHMHTXD_GOOGLE_TEST_URL :
                p.gm.const.IS_GAME_XMCT ?
                VersionNum.TEST_URL :
                VersionNum.CHMHTXD_TEST_URL :
                "ohayoo" == p.gm.data.main_data.channelName ?
                p.gm.const.IS_GAME_XMCT ?
                VersionNum.OHAYOO_FORMAL_URL :
                VersionNum.CHMHTXD_OHAYOO_FORMAL_URL :
                "juliang" == h.SDKManager.instance.getChannelAdName() ?
                p.gm.const.IS_GAME_XMCT ?
                VersionNum.JULIANG_FORMAL_URL :
                VersionNum.CHMHTXD_JULIANG_FORMAL_URL :
                "google" == h.SDKManager.instance.getChannelAdName() ?
                p.gm.const.IS_GAME_XMCT ?
                VersionNum.GOOGLE_FORMAL_URL :
                VersionNum.CHMHTXD_GOOGLE_FORMAL_URL :
                p.gm.const.IS_GAME_XMCT ?
                VersionNum.FORMAL_URL :
                VersionNum.CHMHTXD_FORMAL_URL) :
            (cc.sys.isNative && cc.sys.platform == cc.sys.IPHONE) ||
            (cc.sys.isNative && cc.sys.platform == cc.sys.IPAD) ?
            VersionNum.IS_TEST ?
            p.gm.const.IS_GAME_XMCT ?
            VersionNum.IPHONE_TEST_URL :
            VersionNum.CHMHTXD_IPHONE_TEST_URL :
            p.gm.const.IS_GAME_XMCT ?
            VersionNum.IPHONE_FORMAL_URL :
            VersionNum.CHMHTXD_IPHONE_FORMAL_URL :
            "https://cdnres.qszhg.6hwan.com/panda/version.json";
    }),
    (I.prototype.get_is_hot_update = function() {
        return !(
            y.DataManager.instance.is_test ||
            ((!cc.sys.isNative || cc.sys.platform != cc.sys.ANDROID) &&
                (!cc.sys.isNative || cc.sys.platform != cc.sys.IPHONE) &&
                (!cc.sys.isNative || cc.sys.platform != cc.sys.IPAD))
        );
    }),
    (I.prototype.versionCompareHandle = function(t, e) {
        for (var o = t.split("."), n = e.split("."), i = 0; i < o.length; ++i) {
            var a = parseInt(o[i]),
                r = parseInt(n[i] || 0);
            if (a !== r) return a - r;
        }
        return n.length > o.length ? -1 : 0;
    }),
    (I.prototype.vibrate_short = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME ?
            s.TTMiniGame.instance.vibrate_short() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.vibrate_short() :
            t == I.WX_GAME ?
            0 == I.APP_DS_MAP && c.WXMiniGame.instance.vibrate_short() :
            t == I.DW_GAME ?
            l.DWMiniGame.instance.vibrate_short() :
            t == I.HW_GAME ?
            f.HWGame.instance.vibrate_short() :
            t == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.vibrate_short() :
            t == I.OPPO_GAME && d.OPPOMiniGame.instance.vibrate_short();
    }),
    (I.prototype.vibrate_long = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME ?
            s.TTMiniGame.instance.vibrate_long() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.vibrate_long() :
            t == I.WX_GAME ?
            0 == I.APP_DS_MAP && c.WXMiniGame.instance.vibrate_long() :
            t == I.DW_GAME ?
            l.DWMiniGame.instance.vibrate_long() :
            t == I.HW_GAME ?
            f.HWGame.instance.vibrate_long() :
            t == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.vibrate_long() :
            t == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.vibrate_long() :
            t != I.TAP_TAP_GAME || _.ChuanShanJiaNativeGame.instance.vibrate_long();
    }),
    Object.defineProperty(I.prototype, "is_support_more_game", {
        get: function() {
            var t = this.get_channel_name();
            return t == I.TT_GAME ?
                s.TTMiniGame.instance.is_support_more_game :
                t == I.QQ_GAME ?
                r.QQMiniGame.instance.is_support_more_game :
                t != I.WX_GAME ?
                t == I.DW_GAME ?
                l.DWMiniGame.instance.is_support_more_game :
                t == I.HW_GAME ?
                f.HWGame.instance.is_support_more_game :
                t == I.VIVO_GAME ?
                u.VIVOMiniGame.instance.is_support_more_game :
                t == I.OPPO_GAME ?
                d.OPPOMiniGame.instance.is_support_more_game :
                (t == I.KKMH_GAME || t == I.MZ_GAME) && void 0 :
                0 == I.APP_DS_MAP ?
                c.WXMiniGame.instance.is_support_more_game :
                void 0;
        },
        enumerable: !1,
        configurable: !0
    }),
    (I.prototype.show_more_game = function(t, e) {
        var o = this.get_channel_name();
        o == I.TT_GAME ?
            s.TTMiniGame.instance.show_more_game(t, e) :
            o == I.QQ_GAME ?
            r.QQMiniGame.instance.show_more_game(t, e) :
            o == I.WX_GAME ?
            0 == I.APP_DS_MAP && c.WXMiniGame.instance.show_more_game(t, e) :
            o == I.DW_GAME ?
            console.error("梦工厂不支持更多游戏，所以不作处理！") :
            o == I.HW_GAME ||
            o == I.VIVO_GAME ||
            o == I.OPPO_GAME ||
            o == I.KKMH_GAME ||
            o == I.MZ_GAME ||
            (t && e && t.call(e));
    }),
    (I.prototype.set_rank_value = function() {
        var t = this.get_channel_name();
        if (t == I.TT_GAME) s.TTMiniGame.instance.set_rank_value();
        else if (t == I.QQ_GAME) r.QQMiniGame.instance.set_rank_value();
        else if (t == I.WX_GAME) 0 == I.APP_DS_MAP && c.WXMiniGame.instance.set_rank_value();
        else if (t == I.DW_GAME) console.error("梦工厂不支持排行榜！");
        else if (t != I.HW_GAME && t != I.VIVO_GAME && t == I.OPPO_GAME)
            return d.OPPOMiniGame.instance.set_rank_value();
    }),
    (I.prototype.DouYinFollowBS = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ? s.TTMiniGame.instance.DouYinFollowBS() : "0";
    }),
    Object.defineProperty(I.prototype, "is_support_app_box", {
        get: function() {
            return this.get_channel_name() == I.QQ_GAME && r.QQMiniGame.instance.is_support_app_box;
        },
        enumerable: !1,
        configurable: !0
    }),
    (I.prototype.show_app_box_ad = function() {
        this.get_channel_name() == I.QQ_GAME && r.QQMiniGame.instance.show_app_box_ad();
    }),
    Object.defineProperty(I.prototype, "is_support_interstitial_ad", {
        get: function() {
            var t = this.get_channel_name();
            if (t == I.QQ_GAME) return r.QQMiniGame.instance.is_support_interstitial_ad;
            if (t == I.WX_GAME) {
                if (0 == I.APP_DS_MAP) return c.WXMiniGame.instance.is_support_interstitial_ad;
            } else {
                if (t == I.TT_GAME) return s.TTMiniGame.instance.is_support_interstitial_ad;
                if (t == I.DW_GAME) return l.DWMiniGame.instance.is_support_interstitial_ad;
                if (t == I.HW_GAME) return f.HWGame.instance.is_support_interstitial_ad;
                if (t == I.VIVO_GAME) return u.VIVOMiniGame.instance.is_support_interstitial_ad;
                if (t == I.OPPO_GAME) return d.OPPOMiniGame.instance.is_support_interstitial_ad;
            }
            return !1;
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(I.prototype, "is_rank", {
        get: function() {
            var t = this.get_channel_name();
            return t == I.TT_GAME ?
                s.TTMiniGame.instance.is_rank :
                t == I.QQ_GAME ?
                r.QQMiniGame.instance.is_rank :
                t != I.WX_GAME ?
                t == I.DW_GAME ?
                (console.error("梦工厂不支持排行榜！"), l.DWMiniGame.instance.is_rank) :
                t != I.HW_GAME ?
                t == I.VIVO_GAME ?
                u.VIVOMiniGame.instance.is_rank :
                t == I.OPPO_GAME ?
                d.OPPOMiniGame.instance.is_rank :
                (t == I.KKMH_GAME || t == I.MZ_GAME) && void 0 :
                void 0 :
                0 == I.APP_DS_MAP ?
                c.WXMiniGame.instance.is_rank :
                void 0;
        },
        enumerable: !1,
        configurable: !0
    }),
    (I.prototype.get_is_invite = function() {
        if (this.get_channel_name() == I.WX_GAME) {
            if (0 == I.APP_DS_MAP) return c.WXMiniGame.instance.is_share;
        } else if (p.gm.const.IS_TEST) return !0;
        return !1;
    }),
    (I.prototype.init_recharge_show = function() {
        console.log("errorHandler init begin"), (p.gm.data.recharge_key = {});
        var t,
            e,
            o = new RechargeProductData();
        for (e in (t = p.gm.channel.get_is_new_recharge_edtion() ?
                p.gm.config.get_config_data("GpRechargeConfigData") :
                p.gm.config.get_config_data("RechargeConfigData")).data)
            "" != t.data[e].product_id_google &&
            ((p.gm.data.recharge_key[t.data[e].product_id_google] = "$" + t.data[e].rmb_google / 100),
                o.productList.push(t.data[e].product_id_google));
        console.log("errorHandler init end");
        var n = this.get_channel_name();
        n == I.TAP_TAP_GAME &&
            (console.log("errorHandler channel_name " + n), "google" == h.SDKManager.instance.getChannelAdName()) &&
            ((n = JSON.stringify(o)),
                console.log("errorHandler json_string " + n),
                h.SDKManager.instance.queryProductInfo(n, function(t) {
                    console.log("errorHandler tmp_string " + t), (p.gm.data.recharge_key = {});
                    for (var e = JSON.parse(t), o = 0; o < e.length; ++o)
                        p.gm.data.recharge_key[e[o].productID] = e[o].FormattedPrice;
                }));
    }),
    (I.prototype.get_recharge_fuhao = function() {
        return "";
    }),
    (I.prototype.get_recharge_rmb = function(t) {
        var e = "",
            o = this.get_channel_name();
        return (
            2 == t.type || 9 == t.type ?
            (e = t.rmb.toFixed()) :
            ((e = "￥" + t.rmb),
                o == I.TAP_TAP_GAME &&
                "google" == h.SDKManager.instance.getChannelAdName() &&
                (e = p.gm.data.recharge_key[t.product_id_google])),
            e
        );
    }),
    Object.defineProperty(I.prototype, "is_share", {
        get: function() {
            var t = this.get_channel_name();
            if (t == I.QQ_GAME) return r.QQMiniGame.instance.is_share;
            if (t == I.WX_GAME) {
                if (0 == I.APP_DS_MAP) return c.WXMiniGame.instance.is_share;
            } else {
                if (t == I.DW_GAME) return l.DWMiniGame.instance.is_share;
                if (t == I.TT_GAME) return s.TTMiniGame.instance.is_share;
                if (t == I.HW_GAME) return f.HWGame.instance.is_share;
                if (t == I.VIVO_GAME) return u.VIVOMiniGame.instance.is_share;
                if (t == I.OPPO_GAME) return d.OPPOMiniGame.instance.is_share;
                if (t == I.KKMH_GAME) return !1;
                if (t == I.MZ_GAME) return !1;
                if (t == I.TAP_TAP_GAME) return !1;
                if (t == I.IPHONE_GAME) return !1;
                if (t == I.IPAD_GAME) return !1;
            }
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(I.prototype, "is_video_share", {
        get: function() {
            var t = this.get_channel_name();
            if (t == I.QQ_GAME) return r.QQMiniGame.instance.is_video_share;
            if (t == I.WX_GAME) {
                if (0 == I.APP_DS_MAP) return c.WXMiniGame.instance.is_video_share;
            } else {
                if (t == I.DW_GAME) return l.DWMiniGame.instance.is_video_share;
                if (t == I.TT_GAME) return s.TTMiniGame.instance.is_video_share;
                if (t == I.HW_GAME) return f.HWGame.instance.is_video_share;
                if (t == I.VIVO_GAME) return u.VIVOMiniGame.instance.is_video_share;
                if (t == I.OPPO_GAME) return d.OPPOMiniGame.instance.is_video_share;
            }
            return !1;
        },
        enumerable: !1,
        configurable: !0
    }),
    (I.prototype.show_interstitial_ad = function(t, e) {
        var o = this.get_channel_name();
        if (o == I.QQ_GAME) r.QQMiniGame.ad_enable && r.QQMiniGame.instance.show_interstitial_ad(t, e);
        else if (o != I.WX_GAME)
            if (o == I.DW_GAME) console.error("梦工厂不支持插屏广告！");
            else {
                if (o != I.TT_GAME)
                    return o == I.HW_GAME ?
                        f.HWGame.instance.showInsertCustom() :
                        o == I.VIVO_GAME ?
                        u.VIVOMiniGame.instance.show_interstitial_ad(t, e) :
                        o == I.OPPO_GAME ?
                        d.OPPOMiniGame.instance.show_interstitial_ad(t, e) :
                        void 0;
                s.TTMiniGame.ad_enable && GameTTSdk.BI.showInsertAds(t, null);
            }
    }),
    (I.prototype.onTouchEnd = function() {}),
    (I.prototype.show_video_call_back = function(t, e, o) {
        if (
            (void 0 === o && (o = i.ALL),
                p.gm.channel.get_is_recharge() && p.gm.data.start_data.today_video_count >= p.gm.const.DAILY_VIDO_COUNT)
        )
            return (
                p.gm.ui.set_module_args(p.gm.const.VIDEO_NOTICE.key, { data: 0 }),
                void p.gm.ui.show_panel(p.gm.const.VIDEO_NOTICE)
            );
        var n = this.get_channel_name();
        n == I.TT_GAME ?
            s.TTMiniGame.ad_enable ?
            s.TTMiniGame.instance.show_video_ad(t, e) :
            t.call(e) :
            n == I.QQ_GAME ?
            r.QQMiniGame.ad_enable ?
            r.QQMiniGame.instance.show_video_ad(t, e) :
            t.call(e) :
            n == I.WX_GAME ?
            0 == I.APP_DS_MAP ?
            c.WXMiniGame.ad_enable ?
            c.WXMiniGame.instance.show_video_ad(t, e) :
            t.call(e) :
            1 == I.APP_DS_MAP &&
            l.DWMiniGame.instance.show_video_ad(function() {
                t.call(e);
            }, this) :
            n == I.DW_GAME ?
            l.DWMiniGame.instance.show_video_ad(t, e) :
            n == I.HW_GAME ?
            f.HWGame.instance.show_video_ad(t, e) :
            n == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.show_video_ad(t, e) :
            n == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.show_video_ad(t, e) :
            n == I.KKMH_GAME ||
            n == I.MZ_GAME ||
            (n == I.TAP_TAP_GAME ?
                _.ChuanShanJiaNativeGame.instance.show_video_ad(t, e, o) :
                cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID ?
                h.SDKManager.instance.showRewardVideoAd(function() {
                    t.call(e);
                }, this) :
                n == I.IPHONE_GAME || n == I.IPAD_GAME ?
                _.ChuanShanJiaNativeGame.instance.show_video_ad(t, e) :
                (cc.log(p.gm.const.TEXT_7),
                    p.gm.data.start_data.today_video_count++,
                    console.log("today_video_count=" + p.gm.data.start_data.today_video_count),
                    p.gm.data.start_data.today_video_laqi_count++,
                    p.gm.data.start_data.total_video_count++,
                    p.gm.data.start_data.total_video_laqi_count++,
                    p.gm.data.start_data.async_write_data(),
                    t.call(e),
                    TaskManager.instance.checkTask(g.TaskConditionTypeEnum.TASK_CONDITION_TYPE_VIDEO, [0], 1)));
    }),
    (I.prototype.show_video_ad = function(t, e, o) {
        void 0 === o && (o = i.ALL);
        var n = this.get_channel_name();
        n == I.TT_GAME ?
            s.TTMiniGame.ad_enable ?
            s.TTMiniGame.instance.show_video_ad(t, e) :
            t.call(e) :
            n == I.QQ_GAME ?
            r.QQMiniGame.ad_enable ?
            r.QQMiniGame.instance.show_video_ad(t, e) :
            t.call(e) :
            n == I.WX_GAME ?
            0 == I.APP_DS_MAP ?
            c.WXMiniGame.ad_enable ?
            c.WXMiniGame.instance.show_video_ad(t, e) :
            t.call(e, a.REWARD) :
            1 == I.APP_DS_MAP &&
            l.DWMiniGame.instance.show_video_ad(function() {
                t.call(e);
            }, this) :
            n == I.DW_GAME ?
            l.DWMiniGame.instance.show_video_ad(t, e) :
            n == I.HW_GAME ?
            f.HWGame.instance.show_video_ad(t, e) :
            n == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.show_video_ad(t, e) :
            n == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.show_video_ad(t, e) :
            n == I.KKMH_GAME ||
            n == I.MZ_GAME ||
            (n == I.TAP_TAP_GAME ?
                _.ChuanShanJiaNativeGame.instance.show_video_ad(t, e, o) :
                (cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID) ||
                (n == I.IPHONE_GAME || n == I.IPAD_GAME ?
                    _.ChuanShanJiaNativeGame.instance.show_video_ad(t, e) :
                    t.call(e, a.REWARD)));
    }),
    (I.prototype.share_req = function(t, e) {
        var o,
            n = this.get_channel_name();
        n == I.TT_GAME ?
            s.TTMiniGame.instance.share_req(t, e) :
            n == I.QQ_GAME ?
            r.QQMiniGame.instance.share_req(t, e) :
            n == I.WX_GAME ?
            0 == I.APP_DS_MAP &&
            ((o = Date.now()),
                cc.game.once(cc.game.EVENT_SHOW, function() {
                    3e3 < Date.now() - o && t.call(e);
                }),
                c.WXMiniGame.instance.share_req(t, e)) :
            (console.log("false share success"), t && t());
    }),
    (I.prototype.report_data = function(t, e) {
        var o = this.get_channel_name();
        o == I.WX_GAME ?
            GameSdk.BI.evtCustomizeDataReport(t) :
            o == I.TT_GAME ?
            GameTTSdk.BI.evtCustomizeDataReport(t, e) :
            o == I.OPPO_GAME ?
            GameSdk.BI.evtCustomizeDataReport(t, e) :
            o == I.VIVO_GAME ?
            GameSdk.BI.evtOvhCustomizeDataReport(t, e) :
            o == I.HW_GAME || o == I.TAP_TAP_GAME ?
            GameSdk.BI.evtCustomizeDataReport(t) :
            (o != I.IPHONE_GAME && o != I.IPAD_GAME) || (JSON.stringify(e), GameSdk.BI.evtCustomizeDataReport(t));
    }),
    (I.prototype.ui_report = function(t, e, o) {
        var n = this.get_channel_name();
        n == I.WX_GAME ?
            0 == o ?
            GameSdk.BI.evtLevelStartReport(t, e) :
            GameSdk.BI.evtLevelEndReport(t, e, "success") :
            n == I.TT_GAME ?
            0 == o ?
            GameTTSdk.BI.evtLevelStartReport(t, e) :
            GameTTSdk.BI.evtLevelEndReport(t, e, "success") :
            (n != I.OPPO_GAME && n != I.HW_GAME && n != I.TAP_TAP_GAME && n != I.IPHONE_GAME && n != I.IPAD_GAME) ||
            (0 == o ? GameSdk.BI.evtLevelStartReport(t, e) : GameSdk.BI.evtLevelEndReport(t, e, "success"));
    }),
    (I.prototype.onTouchStart = function() {
        this.get_channel_name() == I.WX_GAME &&
            c.WXMiniGame.instance.onTouchStart(function() {
                console.log("onTouchStart"),
                    GameSdk.BI.evtCustomizeDataReport("80001-点击屏幕", null),
                    c.WXMiniGame.instance.offTouchStart(function() {
                        console.log("offTouchStart");
                    });
            });
    }),
    (I.prototype.onHide = function() {
        this.get_channel_name() == I.WX_GAME &&
            c.WXMiniGame.instance.onHide(function() {
                p.gm.data.savePlayerData();
            });
    }),
    (I.prototype.offTouchStart = function() {
        c.WXMiniGame.instance.offTouchStart(function() {
            console.log("offTouchStart");
        });
    }),
    (I.prototype.get_shoucang = function() {
        return this.get_channel_name() == I.WX_GAME && c.WXMiniGame.instance.getShoucang();
    }),
    (I.prototype.show_banner_ad = function(t) {
        var e = this.get_channel_name();
        e != I.TT_GAME &&
            (e == I.QQ_GAME ?
                r.QQMiniGame.ad_enable && r.QQMiniGame.instance.show_banner_ad() :
                e == I.WX_GAME ?
                0 == I.APP_DS_MAP && c.WXMiniGame.ad_enable && c.WXMiniGame.instance.show_banner_ad(t) :
                e == I.DW_GAME ?
                l.DWMiniGame.instance.show_banner_ad(t) :
                e == I.HW_GAME ?
                f.HWGame.instance.show_banner_ad(t) :
                e == I.VIVO_GAME ?
                u.VIVOMiniGame.instance.show_banner_ad(t) :
                e == I.OPPO_GAME ?
                d.OPPOMiniGame.instance.show_banner_ad(t) :
                e != I.TAP_TAP_GAME &&
                (e == I.IPHONE_GAME ||
                    e == I.IPAD_GAME ||
                    e == I.KKMH_GAME ||
                    e == I.MZ_GAME ||
                    (cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID && h.SDKManager.instance.showBannerAd())));
    }),
    (I.prototype.hide_banner_ad = function(t) {
        var e = this.get_channel_name();
        e == I.TT_GAME ?
            s.TTMiniGame.ad_enable && GameTTSdk.BI.hideBanner() :
            e == I.QQ_GAME ?
            r.QQMiniGame.ad_enable && r.QQMiniGame.instance.hide_banner_ad() :
            e == I.WX_GAME ?
            0 == I.APP_DS_MAP && c.WXMiniGame.ad_enable && c.WXMiniGame.instance.hide_banner_ad(t) :
            e == I.DW_GAME ?
            l.DWMiniGame.instance.hide_banner_ad(t) :
            e == I.HW_GAME ?
            f.HWGame.instance.hide_banner_ad() :
            e == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.hide_banner_ad(t) :
            e == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.hide_banner_ad(t) :
            e != I.TAP_TAP_GAME &&
            (e == I.IPHONE_GAME ||
                e == I.IPAD_GAME ||
                e == I.KKMH_GAME ||
                e == I.MZ_GAME ||
                (cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID && h.SDKManager.instance.hideBannerAd()));
    }),
    (I.prototype.record_start = function() {
        var t = this.get_channel_name();
        t != I.TT_GAME || s.TTMiniGame.instance.record_start();
    }),
    (I.prototype.record_stop = function(t) {
        var e = this.get_channel_name();
        e != I.TT_GAME || s.TTMiniGame.instance.record_stop(t);
    }),
    (I.prototype.share_video = function(t, e) {
        var o = this.get_channel_name();
        o == I.TT_GAME ?
            s.TTMiniGame.instance.share_video(t, e) :
            o == I.QQ_GAME ||
            o == I.WX_GAME ||
            o == I.DW_GAME ||
            o == I.HW_GAME ||
            o == I.VIVO_GAME ||
            o == I.OPPO_GAME ||
            o == I.KKMH_GAME ||
            o == I.MZ_GAME ||
            (e && e(0));
    }),
    (I.prototype.viedo_share = function(t, e) {
        var o = this.get_channel_name();
        o == I.TT_GAME ? s.TTMiniGame.instance.viedo_share(t, e) : o == I.QQ_GAME || o == I.WX_GAME || (e && e(0));
    }),
    (I.prototype.get_share_state = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_share_state() :
            t == I.QQ_GAME ||
            (t != I.WX_GAME &&
                t != I.DW_GAME &&
                t != I.HW_GAME &&
                t != I.VIVO_GAME &&
                t != I.OPPO_GAME &&
                t != I.KKMH_GAME &&
                t != I.MZ_GAME) ?
            0 :
            1;
    }),
    (I.prototype.get_npc_state = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ? s.TTMiniGame.instance.get_npc_state() : 0;
    }),
    (I.prototype.get_task_cp = function() {
        var t = this.get_channel_name();
        return t == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.get_task_cp() :
            t == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.get_task_cp() :
            t == I.HW_GAME ?
            f.HWGame.instance.get_task_cp() :
            0;
    }),
    (I.prototype.get_map_cp = function() {
        var t = this.get_channel_name();
        return t == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.get_map_cp() :
            t == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.get_map_cp() :
            t == I.HW_GAME ?
            f.HWGame.instance.get_map_cp() :
            0;
    }),
    (I.prototype.get_qq_number = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_qq_number() :
            t == I.QQ_GAME ?
            0 :
            t == I.WX_GAME ?
            c.WXMiniGame.instance.get_qq_number() :
            t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
            _.ChuanShanJiaNativeGame.instance.get_qq_number() :
            t == I.DW_GAME ||
            t == I.HW_GAME ||
            t == I.VIVO_GAME ||
            t == I.OPPO_GAME ||
            t == I.KKMH_GAME ||
            t == I.MZ_GAME ?
            0 :
            570179670;
    }),
    (I.prototype.get_is_weak_guide = function() {
        var t = this.get_channel_name();
        return t == I.TT_GAME ?
            s.TTMiniGame.instance.get_is_weak_guide() :
            t == I.QQ_GAME ?
            1 :
            t == I.WX_GAME ?
            c.WXMiniGame.instance.get_is_weak_guide() :
            t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
            _.ChuanShanJiaNativeGame.instance.get_is_weak_guide() :
            t == I.DW_GAME ?
            1 :
            t == I.HW_GAME ?
            f.HWGame.instance.get_is_weak_guide() :
            t == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.get_is_weak_guide() :
            t == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.get_is_weak_guide() :
            1;
    }),
    (I.prototype.get_is_bdd = function() {
        return this.get_channel_name() != I.TT_GAME || s.TTMiniGame.instance.get_is_bdd();
    }),
    (I.prototype.get_open_id = function() {
        var t = this.get_channel_name();
        return t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
            _.ChuanShanJiaNativeGame.instance.get_open_id() :
            p.gm.data.open_id;
    }),
    (I.prototype.get_uid = function() {
        var t = this.get_channel_name();
        return t == I.TAP_TAP_GAME || t == I.IPHONE_GAME || t == I.IPAD_GAME ?
            _.ChuanShanJiaNativeGame.instance.get_uid() :
            p.gm.data.uid;
    }),
    (I.prototype.get_rank_data = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME ?
            s.TTMiniGame.instance.get_rank_data() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.get_rank_data() :
            t != I.WX_GAME || (0 == I.APP_DS_MAP && c.WXMiniGame.instance.get_rank_data());
    }),
    (I.prototype.set_rank_close = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME ?
            s.TTMiniGame.instance.set_rank_close() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.set_rank_close() :
            t != I.WX_GAME || (0 == I.APP_DS_MAP && c.WXMiniGame.instance.set_rank_close());
    }),
    (I.prototype.on_rank_pre_page_click = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME ?
            s.TTMiniGame.instance.on_rank_pre_page_click() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.on_rank_pre_page_click() :
            t != I.WX_GAME || (0 == I.APP_DS_MAP && c.WXMiniGame.instance.on_rank_pre_page_click());
    }),
    (I.prototype.on_rank_next_page_click = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME ?
            s.TTMiniGame.instance.on_rank_next_page_click() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.on_rank_next_page_click() :
            t != I.WX_GAME || (0 == I.APP_DS_MAP && c.WXMiniGame.instance.on_rank_next_page_click());
    }),
    (I.prototype.get_self_rank_data = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME ?
            s.TTMiniGame.instance.get_self_rank_data() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.get_self_rank_data() :
            t != I.WX_GAME || (0 == I.APP_DS_MAP && c.WXMiniGame.instance.get_self_rank_data());
    }),
    (I.prototype.set_self_rank_close = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME ?
            s.TTMiniGame.instance.set_self_rank_close() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.set_self_rank_close() :
            t != I.WX_GAME || (0 == I.APP_DS_MAP && c.WXMiniGame.instance.set_self_rank_close());
    }),
    (I.prototype.clear_cache = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME ?
            s.TTMiniGame.instance.clear_cache() :
            t == I.QQ_GAME ?
            r.QQMiniGame.instance.clear_cache() :
            t == I.WX_GAME ?
            0 == I.APP_DS_MAP && c.WXMiniGame.instance.clear_cache() :
            t != I.DW_GAME || (1 == I.APP_DS_MAP && l.DWMiniGame.instance.clear_cache());
    }),
    (I.prototype.compare_version = function(t, e) {
        (t = t.split(".")), (e = e.split("."));
        for (var o = Math.max(t.length, e.length); t.length < o;) t.push("0");
        for (; e.length < o;) e.push("0");
        for (var n = 0; n < o; n++) {
            var i = parseInt(t[n]),
                a = parseInt(e[n]);
            if (a < i) return 1;
            if (i < a) return -1;
        }
        return 0;
    }),
    (I.prototype.autoUpdate = function() {
        console.log("getUpdateManager");
        var e = wx.getUpdateManager();
        e.onCheckForUpdate(function(t) {
            console.log("getUpdateManager11"),
                t.hasUpdate &&
                (console.log("getUpdateManager22"),
                    e.onUpdateReady(function() {
                        console.log("getUpdateManager33"),
                            wx.showModal({
                                title: "更新提示",
                                content: "新版本已经准备好，是否重启应用？",
                                success: function(t) {
                                    if (t.confirm) e.applyUpdate();
                                    else if (t.cancel) return;
                                }
                            });
                    }),
                    e.onUpdateFailed(function() {
                        wx.showModal({
                            title: "已经有新版本了哟~",
                            content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                        });
                    }));
        });
    }),
    (I.prototype.markScene = function() {
        window.wx && window.wx.markScene && window.wx.markScene({ sceneId: 0 });
    }),
    (I.prototype.follow = function(t, e) {
        var o = this.get_channel_name();
        o != I.TT_GAME || s.TTMiniGame.instance.follow(t, e);
    }),
    (I.prototype.hide_follow_btn = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME && s.TTMiniGame.instance.hide_follow_btn();
    }),
    (I.prototype.show_follow_btn = function() {
        var t = this.get_channel_name();
        t == I.TT_GAME && s.TTMiniGame.instance.show_follow_btn();
    }),
    (I.prototype.follow_douyin = function(t, e) {
        var o = this.get_app_name();
        o == I.APP_DOU_YIN && s.TTMiniGame.instance.douYinFollow(t, e);
    }),
    (I.prototype.follow_btn_stat = function() {
        var t = this.get_channel_name();
        if (t == I.TT_GAME) return s.TTMiniGame.instance.follow_btn_stat();
    }),
    (I.prototype.user_subscribe_message = function() {
        var t = this.get_channel_name();
        t != I.TT_GAME || s.TTMiniGame.instance.user_subscribe_message(function() {});
    }),
    (I.prototype.showBannerNative = function(t) {
        var e = this.get_channel_name();
        e == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.showBannerNative(t) :
            e == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.showBannerNative(t) :
            e == I.WX_GAME || this.show_Banner_Native(t);
    }),
    (I.prototype.showBigJpgNative = function(t) {
        var e = this.get_channel_name();
        e == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.showBigJpgNative(t) :
            e == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.showBigJpgNative(t) :
            e == I.WX_GAME || this.show_BigJpg_Native(t);
    }),
    (I.prototype.show_ico_native = function(t) {
        var e = this.get_channel_name();
        e == I.OPPO_GAME ?
            d.OPPOMiniGame.instance.showIcoNative(t) :
            e == I.VIVO_GAME ?
            u.VIVOMiniGame.instance.showIcoNative(t) :
            e == I.WX_GAME || this.showIcoNative(t);
    }),
    (I.prototype.showIcoNative = function(t) {
        var e = ["http://imgwsdl.vivo.com.cn/appstore/ad/apk/icon/20201023/2020102323335239964.png"],
            o = void 0,
            n = void 0,
            o = t.getChildByName("adImg"),
            n = t.getChildByName("adLogo");
        t.getChildByName("adClose"),
            (o.active = !1),
            0 < e.length &&
            cc.loader.load(e[0], function(t, e) {
                (o.active = !0),
                (o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e)),
                console.log("adImg load >>>>>>>>");
            }),
            (n.active = !1),
            o.getComponent(cc.Button) || o.addComponent(cc.Button),
            o.on(
                "click",
                function() {
                    console.log("nativeIcoAd  Click Ico AdShow ");
                },
                this
            ),
            console.log("nativeIcoAd  reportIcoAdShow adId:, this.bannerNativeData.adId");
    }),
    (I.prototype.show_BigJpg_Native = function(t) {
        var e = ["http://images.pinduoduo.com/marketing_api/2020-09-30/a064a4e2-057d-407d-b21b-7fa818bb4c06.jpeg"],
            o = void 0,
            n = void 0,
            o = t.getChildByName("adImg"),
            n = t.getChildByName("adLogo");
        (o.active = !1),
        0 < e.length &&
            cc.loader.load(e[0], function(t, e) {
                (o.active = !0), (o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e));
            }),
            (n.active = !1),
            o.getComponent(cc.Button) || o.addComponent(cc.Button),
            o.on(
                "click",
                function() {
                    console.log("adImg.on('click', () => {");
                },
                this
            ),
            console.log("nativeIcoAd  reportIcoAdShow adId:, this.bigJpgNativeData.adId");
    }),
    (I.prototype.show_Banner_Native = function(t) {
        var e = ["http://imgwsdl.vivo.com.cn/appstore/ad/apk/icon/20201023/2020102323335239964.png"],
            o = void 0,
            n = void 0,
            i = void 0,
            a = void 0,
            r = void 0,
            o = t.getChildByName("adImg"),
            n = t.getChildByName("adDesc"),
            a = t.getChildByName("adTitle"),
            r = t.getChildByName("adButton"),
            i = t.getChildByName("adLogo");
        (o.active = !1),
        0 < e.length &&
            cc.loader.load(e[0], function(t, e) {
                (o.active = !0), (o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e));
            }),
            (a.active = !0),
            (a.getComponent(cc.Label).string = "用了这个口罩，兄弟们都找我要链接！太值！"),
            (n.active = !0),
            (n.getComponent(cc.Label).string = "活动真实有效"),
            (i.active = !1),
            r.getComponent(cc.Button) || r.addComponent(cc.Button),
            r.on(
                "click",
                function() {
                    console.log("nativeIcoAd  Click IcoAdShow ");
                },
                this
            ),
            console.log("nativeIcoAd  reportIcoAdShow adId:, this.bannerNativeData.adId");
    }),
    (I.prototype.copy_to_clipboard = function(t, e) {
        var o = this.get_channel_name();
        if (o == I.OPPO_GAME) d.OPPOMiniGame.instance.clipBoard(t, function() {});
        else if (o == I.VIVO_GAME) u.VIVOMiniGame.instance.clipBoard(t, function() {});
        else if (o == I.HW_GAME) f.HWGame.instance.clipBoard(t, function() {});
        else if (o == I.QQ_GAME) r.QQMiniGame.instance.clipBoard(t, function() {});
        else if (o == I.WX_GAME) c.WXMiniGame.instance.clipBoard(t, function() {});
        else {
            if (o != I.TT_GAME)
                return cc.sys.os === cc.sys.OS_ANDROID ?
                    jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "copyToClipboard",
                        "(Ljava/lang/String;)V",
                        t
                    ) :
                    o == I.IPHONE_GAME || o == I.IPAD_GAME ?
                    jsb.reflection.callStaticMethod("AppActivity", "copyToClipboard:", t) :
                    (((o = document.createElement("input")).value = t + ""),
                        document.body.appendChild(o),
                        o.select(),
                        document.execCommand("Copy"),
                        (o.style.display = "none"),
                        void(e && e()));
            s.TTMiniGame.instance.clipBoard(t, function() {});
        }
    }),
    (I.prototype.exit_game = function() {
        var t = this.get_channel_name(),
            e = h.SDKManager.instance.getChannelAdName();
        this.check_is_app() ?
            "oppo" == e || "xiaomi" == e ?
            h.SDKManager.instance.exitGame() :
            cc.game.end() :
            t == I.TT_GAME ?
            tt.exitMiniProgram() :
            t == I.QQ_GAME ?
            qq.exitMiniProgram() :
            t == I.WX_GAME ?
            wx.exitMiniProgram() :
            t == I.VIVO_GAME ?
            qg.exitApplication() :
            t == I.OPPO_GAME || t == I.HW_GAME ?
            qg.exitApplication({}) :
            cc.game.end();
    }),
    (I.prototype.get_is_oldPlayer = function() {
        var t = this.get_channel_name();
        return (
            (t != I.TAP_TAP_GAME && t != I.IPHONE_GAME && t != I.IPAD_GAME) ||
            _.ChuanShanJiaNativeGame.instance.get_is_oldPlayer()
        );
    }),
    (I.prototype.juLiangEventReport = function(t) {
        var e = this.get_channel_name();
        e == I.WX_GAME ?
            c.WXMiniGame.instance.juLiangEventReport(t) :
            e == I.TT_GAME ?
            s.TTMiniGame.instance.juLiangEventReport(t) :
            p.gm.channel.check_is_app() && _.ChuanShanJiaNativeGame.instance.juLiangEventReport(t);
    }),
    (I.prototype.isHardCoreChanne = function() {
        var t = !1;
        switch (h.SDKManager.instance.getChannelAdName()) {
            case "oppo":
            case "vivo":
            case "xiaomi":
            case "huawei":
            case "google":
            case "taptap":
                t = !0;
        }
        return t;
    }),
    (I._instance = null),
    (I.WX_GAME = "wechat-game"),
    (I.TT_GAME = "tt-game"),
    (I.QQ_GAME = "qq-game"),
    (I.DW_GAME = "dw-game"),
    (I.UNKNOWN = "unknown"),
    (I.HW_GAME = "hw-game"),
    (I.VIVO_GAME = "vivo-game"),
    (I.OPPO_GAME = "oppo-game"),
    (I.KKMH_GAME = "kkmh-game"),
    (I.MZ_GAME = "mz-game"),
    (I.TAP_TAP_GAME = "tap-tap-game"),
    (I.OHAYOO_GAME = "ohayoo-game"),
    (I.APP_TOU_TIAO = "Toutiao"),
    (I.IPHONE_GAME = "iphone-game"),
    (I.IPAD_GAME = "ipad-game"),
    (I.GOOGLE_PLAY = "google"),
    (I.APP_NEWS_ARTICLE_LITE = "news_article_lite"),
    (I.APP_DOU_YIN = "Douyin"),
    (I.APP_DOU_YIN_LITE = "Douyin_lite"),
    (I.APP_XI_GUA = "XiGua"),
    (I.APP_QQ = "qq"),
    (I.APP_WE_CHAT = "wechat"),
    (I.APP_DW = "DreamWorks"),
    (I.APP_TAP_TAP = "tap_tap"),
    (I.APP_UNKNOWN = "unknown"),
    (I.APP_DS_MAP = 0),
    (I.SHARE_CONFIG = {
        share_id_array: ["6rbkd4ptsrf3p282j4", "1ja4cg4hi045f1f9cf", "29pejigtkih3hait61"],
        share_array: [
            { title: "超治愈的百变装修来咯...", url: "https://cdnres.qszhg.6hwan.com/FarmOperation/4.jpg" },
            { title: "后山的蜜蜂正在围攻狗蛋...", url: "https://cdnres.qszhg.6hwan.com/FarmOperation/5.jpg" },
            { title: "园子里的玉米熟了，一起收割吧...", url: "https://cdnres.qszhg.6hwan.com/FarmOperation/6.jpg" }
        ]
    }),
    (o.ChannelManager = t = I);