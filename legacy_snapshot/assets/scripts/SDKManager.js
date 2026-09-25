var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.SDKManager = void 0);
var n = t("GameMgr"),
    i = t("ChuanShanJiaNativeGame"),
    a = t("Const"),
    r = t("Utils"),
    t =
        (Object.defineProperty(s, "instance", {
            get: function () {
                return null == this._instance && (this._instance = new s()), this._instance;
            },
            enumerable: !1,
            configurable: !0
        }),
        (s.prototype.showRewardVideoAd = function (t, e, o) {
            console.log("SDKManager:showRewardVideoAd"),
                (this._rewardVideoAdRewardCallback = t),
                (this._rewardVideoAdCloseCallback = o),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "showRewardVideoAd",
                              "(Ljava/lang/String;)V",
                              e
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "showRewardVideoAd"));
        }),
        (s.prototype.isRewardVideoAdLoaded = function () {
            if ((console.log("SDKManager:isRewardVideoAdLoaded"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "isRewardVideoAdLoaded",
                        "()Z"
                    );
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "isRewardVideoAdLoaded");
            }
            return !1;
        }),
        (s.prototype.onRewardVideoShowClose = function () {
            console.log("SDKManager:onRewardVideoShowClose"),
                this._rewardVideoAdCloseCallback &&
                    (this._rewardVideoAdCloseCallback(), console.log("run  SDKManager:_rewardVideoAdCloseCallback"));
        }),
        (s.prototype.onRewardVideoShowError = function () {
            console.log("SDKManager:isRewardVideoShowError"), n.gm.ui.emit("cancel_watch_ad");
        }),
        (s.prototype.onRewardVideoAdRewardCallback = function () {
            var t = this;
            setTimeout(function () {
                console.log("SDKManager:onRewardVideoAdRewardCallback"),
                    t._gameHide && (t._RewardVideoAdCallStat = !0),
                    t._rewardVideoAdRewardCallback &&
                        (t._rewardVideoAdRewardCallback(), console.log("SDKManager:_rewardVideoAdRewardCallback"));
            }, 500);
        }),
        (s.prototype.OnRewardVideoAdLoaded = function () {
            console.log("SDKManager:OnRewardVideoAdLoaded");
        }),
        (s.prototype.onHide = function () {
            console.log("SDKManager:onHide"),
                (n.gm.data.video_state = 1),
                (n.gm.audio.music_mute = !0),
                (n.gm.audio.effect_mute = !0),
                (this._gameHide = !0);
        }),
        (s.prototype.onShow = function () {
            console.log("SDKManager:onShow"),
                (this._gameHide = !1),
                (n.gm.data.video_state = 0),
                n.gm.data.start_data &&
                    (n.gm.data.start_data.music_mute || (n.gm.data.start_data.music_mute = !1),
                    n.gm.data.start_data.effect_mute || (n.gm.data.start_data.effect_mute = !1),
                    (n.gm.audio.music_mute = n.gm.data.start_data.music_mute),
                    (n.gm.audio.effect_mute = n.gm.data.start_data.effect_mute)),
                n.gm.channel.get_server_time(),
                n.gm.channel.check_is_app() && this.reportVideoLoadNumber();
        }),
        (s.prototype.videoAdLoadBegin = function () {
            console.log("SDKManager:videoAdLoadBegin");
        }),
        (s.prototype.videoAdLoadOk = function () {
            console.log("SDKManager:videoAdLoadOk");
        }),
        (s.prototype.videoAdLoadError = function () {
            console.log("SDKManager:videoAdLoadOk");
        }),
        (s.prototype.showBannerAd = function () {
            console.log("SDKManager:showBannerAd"),
                window.jsb &&
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBannerAd", "()V");
        }),
        (s.prototype.hideBannerAd = function () {
            console.log("SDKManager:hideBannerAd"),
                window.jsb &&
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBannerAd", "()V");
        }),
        (s.prototype.getLanguage = function () {
            if ((console.log("SDKManager:getLanguage"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "getLanguage",
                        "()Ljava/lang/String;"
                    );
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "getLanguage");
            }
            return "zh-CN";
        }),
        (s.prototype.getAppName = function () {
            if ((console.log("SDKManager:getAppName"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "getAppName",
                        "()Ljava/lang/String;"
                    );
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "getAppName");
            }
            return "unknown";
        }),
        (s.prototype.getVersionName = function () {
            if ((console.log("SDKManager:getVersionName"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "getVersionName",
                        "()Ljava/lang/String;"
                    );
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "getVersionName");
            }
            return "unknown";
        }),
        (s.prototype.getChannelName = function () {
            var t = "";
            if (window.jsb) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return void 0 ===
                        (t = jsb.reflection.callStaticMethod(
                            "org/cocos2dx/javascript/AppActivity",
                            "getChannelName",
                            "()Ljava/lang/String;"
                        ))
                        ? "tap-tap-game"
                        : t;
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "getChannelName");
            }
            return t;
        }),
        (s.prototype.getVersionCode = function () {
            if ((console.log("SDKManager:getAppVersionCode"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "getVersionCode",
                        "()I"
                    );
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "getVersionCode");
            }
            return 0;
        }),
        (s.prototype.getAppSign = function () {
            if ((console.log("SDKManager:getAppSign"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "getApkSign",
                        "()Ljava/lang/String;"
                    );
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "getApkSign");
            }
            return "";
        }),
        (s.prototype.getChannelAdName = function () {
            return (
                console.log("SDKManager:getChannelAdName"),
                "" != this.tmpChannelAdName ||
                    (window.jsb &&
                        (cc.sys.platform == cc.sys.ANDROID
                            ? (this.tmpChannelAdName = jsb.reflection.callStaticMethod(
                                  "org/cocos2dx/javascript/AppActivity",
                                  "getChannelAdName",
                                  "()Ljava/lang/String;"
                              ))
                            : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                              (this.tmpChannelAdName = jsb.reflection.callStaticMethod(
                                  "AppActivity",
                                  "getChannelAdName"
                              )))),
                this.tmpChannelAdName
            );
        }),
        (s.prototype.getJsDeviceId = function () {
            if ((console.log("SDKManager:getJsDeviceId"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "getJsDeviceId",
                        "()Ljava/lang/String;"
                    );
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "idfa");
            }
            return "";
        }),
        (s.prototype.weiXin_Login = function (t) {
            if (((s.instance._weiXin_Login_call = t), console.log("SDKManager:weiXin_Login"), window.jsb))
                if (cc.sys.platform == cc.sys.ANDROID)
                    jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "WxLogin",
                        "(Ljava/lang/String;)V",
                        "SDKManager"
                    );
                else if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "WxLogin:", "SDKManager");
        }),
        (s.prototype.restartApp = function () {
            console.log("SDKManager:restartApp"),
                cc.game.restart(),
                n.gm.ui.showNotice(r.Utils.language_string_change(a.LanguageTypeEnum.TEXT_12)),
                cc.game.pause();
        }),
        (s.prototype.onRealNameConfirm_callBack = function (t) {
            console.log("SDKManager:onRealNameConfirmSucc: " + t), n.gm.data.event_emitter.emit("realNameConfirmIsOk");
        }),
        (s.prototype.realNameConfirm = function (t) {
            if ((console.log("SDKManager:realNameConfirm: " + t), window.jsb))
                return cc.sys.platform == cc.sys.ANDROID
                    ? jsb.reflection.callStaticMethod(
                          "org/cocos2dx/javascript/TapTapUtils",
                          "realNameCheck",
                          "(Ljava/lang/String;)V",
                          t
                      )
                    : cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD
                    ? jsb.reflection.callStaticMethod("TapTapUtils", "realNameCheck:", t)
                    : void 0;
        }),
        (s.prototype.weiXin_login_callBack = function (t) {
            console.log("SDKManager:weiXin_login_callBack: " + t), s.instance._weiXin_Login_call(t);
        }),
        (s.prototype.java_call_js = function (t, e) {
            console.log("OPPONativeGame java_call_js  sFuncName:" + t + " sParams:" + e);
            var o = [];
            null != e && "" != e && (o = e.split("|")),
                null != this[t] ? this[t](o) : cc.error("NativeGame not found sFuncName:" + t + " sParams:" + e);
        }),
        (s.prototype.onInitCompleteCallback = function () {
            console.log("SDKManager:Appactivity init is succ!");
        }),
        (s.prototype.setOpenId = function (t) {
            console.log("SDKManager:setOpenId: " + t),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "TDGAReg",
                              "(Ljava/lang/String;)V",
                              t
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "TDGAReg:", t));
        }),
        (s.prototype.urlTapTapXmct = function (t, e) {
            console.log("SDKManager:urlTapTapXmct :" + t),
                window.jsb
                    ? cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "urlTapTapXmct",
                              "(Ljava/lang/String;)V",
                              t
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "urlTapTapXmct:", t)
                    : (n.gm.ui.show_notice(e), n.gm.channel.exit_game());
        }),
        (s.prototype.getVideoLoadNumber = function () {
            if ((console.log("SDKManager:getVideoLoadNumber"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "getVideoLoadNumber",
                        "()I"
                    );
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "getVideoLoadNumber");
            }
            return 0;
        }),
        (s.prototype.reportVideoLoadNumber = function () {
            console.log("SDKManager:reportVideoLoadNumber");
            var t = this.getVideoLoadNumber();
            if ((console.log("SDKManager:reportVideoLoadNumber:   ", t), 0 < t))
                for (var e = 0, e = 0; e < t; e++) GameSdk.BI.evtAppointDataReport(3001);
        }),
        (s.prototype.setPlayVideoNumberReport = function (t) {
            if ((console.log("SDKManager:setPlayVideoNumberReport"), 0 <= t && window.jsb))
                return jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity",
                    "setPlayVideoNumberReport",
                    "(I)V",
                    t
                );
        }),
        (s.prototype.setSdkReportPrice = function (t) {
            if ((console.log("SDKManager:setSdkReportPrice"), 0 <= t && window.jsb))
                return jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity",
                    "setSdkReportPrice",
                    "(I)V",
                    t
                );
        }),
        (s.prototype.reportKeyEvent = function () {}),
        (s.prototype.userCodeWrite = function (t, e) {
            console.log("SDKManager:userCodeWrite"),
                e && (this._userCodeWrite_CallBack = e),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "userCodeWrite",
                              "(Ljava/lang/String;)V",
                              t
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "userCodeWrite:", t));
        }),
        (s.prototype.userCodewrite_callBack = function (t) {
            console.log("SDKManager:userCodewrite_callBack: " + t),
                this._userCodeWrite_CallBack && this._userCodeWrite_CallBack(t);
        }),
        (s.prototype.userCodeRead = function (t) {
            console.log("SDKManager:userCodeRead"),
                t && (this._userCodeRead_CallBack = t),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "userCodeRead", "()V")
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "userCodeRead"));
        }),
        (s.prototype.userCodeRead_callBack = function (t) {
            console.log("SDKManager:userCodeRead_callBack: " + t),
                this._userCodeRead_CallBack && this._userCodeRead_CallBack(t);
        }),
        (s.prototype.wxInstalled = function () {
            console.log("SDKManager:wxInstalled");
            var t = !1;
            return (
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? (t = !0)
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          (t = jsb.reflection.callStaticMethod("AppActivity", "wxInstalled"))),
                t
            );
        }),
        (s.prototype.cleanCacheFile = function () {
            console.log("SDKManager:cleanCacheFile"),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "cleanCacheFile",
                              "()V"
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "cleanCacheFile"));
        }),
        (s.prototype.getJsIdfa = function () {
            if ((console.log("SDKManager:  ios:getJsIdfa||android:getImei"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod(
                        "org/cocos2dx/javascript/AppActivity",
                        "getTeleOAID",
                        "()Ljava/lang/String;"
                    );
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD)
                    return jsb.reflection.callStaticMethod("AppActivity", "getIdfa");
            }
            return "";
        }),
        (s.prototype.adIsErrorReport = function (t) {
            console.log("SDKManager:      adIsErrorReport:  ", t);
            var e = n.gm.data.open_id,
                o = n.gm.data.uid;
            "" == n.gm.data.open_id && (e = "noLogin"),
                "" == n.gm.data.uid && (o = "noLogin"),
                (t = t.substr(0, Math.max(Math.min(10240 - t.length, t.length), 0))),
                (e = {uid: o, data: encodeURIComponent(t), gamename: "xmct", op_type: "1002", openid: e}),
                console.log("errorHandler  " + JSON.stringify(e)),
                r.Utils.http_request(
                    function () {
                        console.log("error report is ok!");
                    },
                    this,
                    "https://gameapipy.6hwan.com/log/minigame_error_report",
                    e
                );
        }),
        (s.prototype.getRequest_R_W = function () {
            if ((console.log("SDKManager:getRequest_R_W"), window.jsb)) {
                if (cc.sys.platform == cc.sys.ANDROID)
                    return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "request_R_W", "()I");
                if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD) return 1;
            }
            return 0;
        }),
        (s.prototype.exitGame = function () {
            console.log("SDKManager:exitGame"),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "exitGame", "()V")
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) || cc.game.end);
        }),
        (s.prototype.showPrivacyPage = function () {
            console.log("SDKManager:showPrivacyPage"),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "showPrivacyPage",
                              "()V"
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          (n.gm.ui.set_module_args(n.gm.const.UserNoticePanel.key, {gameStart: 1}),
                          n.gm.ui.showModule(n.gm.const.UserNoticePanel)));
        }),
        (s.prototype.getAndroidUserId = function () {
            if ((console.log("SDKManager:getAndroidUserId"), window.jsb && cc.sys.platform == cc.sys.ANDROID))
                return jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity",
                    "getUserId",
                    "()Ljava/lang/String;"
                );
        }),
        (s.prototype.getChannelAdSdkGameId = function () {
            return (
                console.log("SDKManager:getChannelAdSdkGameId"),
                window.jsb && cc.sys.platform == cc.sys.ANDROID
                    ? jsb.reflection.callStaticMethod(
                          "org/cocos2dx/javascript/AppActivity",
                          "getChannelAdSdkGameId",
                          "()Ljava/lang/String;"
                      )
                    : ""
            );
        }),
        (s.prototype.getChannelAdSdkLoginType = function () {
            return (
                console.log("SDKManager:getChannelAdSdkType"),
                window.jsb && cc.sys.platform == cc.sys.ANDROID
                    ? jsb.reflection.callStaticMethod(
                          "org/cocos2dx/javascript/AppActivity",
                          "getChannelAdSdkLoginType",
                          "()Ljava/lang/String;"
                      )
                    : ""
            );
        }),
        (s.prototype.more_game = function () {
            console.log("SDKManager:more_game"),
                window.jsb &&
                    cc.sys.platform == cc.sys.ANDROID &&
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "more_game", "()V");
        }),
        (s.prototype.onExitGame = function () {
            cc.game.end();
        }),
        (s.prototype.set_pravicy_is_ok = function () {
            console.log("SDKManager:set_pravicy_is_ok"),
                window.jsb &&
                    cc.sys.platform == cc.sys.ANDROID &&
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "set_pravicy_is_ok", "()V");
        }),
        (s.prototype.get_ad_ecpm = function () {
            console.log("SDKManager:get_ad_ecpm");
            var t = "0";
            return (
                window.jsb &&
                    "juliang" == this.getChannelAdName() &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? (t = "0")
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          (t = jsb.reflection.callStaticMethod("AppActivity", "get_ad_ecpm"))),
                "" == t && (t = "0"),
                Number(t)
            );
        }),
        (s.prototype.recharge = function (t) {
            console.log("SDKManager:GooglePlay recharge: " + t),
                this.set_queryPurchasesState(!1),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "recharge",
                              "(Ljava/lang/String;)V",
                              t
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "recharge:", t));
        }),
        (s.prototype.consume = function (t) {
            console.log("SDKManager:GooglePlay  consume: " + t),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "consume",
                              "(Ljava/lang/String;)V",
                              t
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "consume:", t));
        }),
        (s.prototype.onConsumeSucCallBack = function (t) {
            i.ChuanShanJiaNativeGame.instance.onConsumeSucCallBack(t);
        }),
        (s.prototype.onSendRechargeSucToAndiordServer = function (t) {
            i.ChuanShanJiaNativeGame.instance.sendRechargeSucToAndiordServer(t);
        }),
        (s.prototype.get_qureryPurchasesState = function () {
            return this.queryPurchasesState;
        }),
        (s.prototype.set_queryPurchasesState = function (t) {
            this.queryPurchasesState = t;
        }),
        (s.prototype.queryPurchases = function (t) {
            console.log("SDKManager:GooglePlay  queryPurchases: " + t),
                this.set_queryPurchasesState(!0),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "queryPurchases",
                              "(Ljava/lang/String;)V",
                              t
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "queryPurchases:", t));
        }),
        (s.prototype.setGameSdkUid = function (t) {
            console.log("SDKManager:GooglePlay  setGameSdkUid: " + t),
                "" != t
                    ? window.jsb &&
                      (cc.sys.platform == cc.sys.ANDROID
                          ? jsb.reflection.callStaticMethod(
                                "org/cocos2dx/javascript/AppActivity",
                                "setGameSdkUid",
                                "(Ljava/lang/String;)V",
                                t
                            )
                          : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                            jsb.reflection.callStaticMethod("AppActivity", "setGameSdkUid:", t))
                    : console.log("setGameSdkUid  jsonParams为空");
        }),
        (s.prototype.AppsFlyerLogReport = function (t) {
            console.log("SDKManager:logEventReport: " + t),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "AppsFlyerLogReport",
                              "(Ljava/lang/String;)V",
                              t
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "AppsFlyerLogReport:", t));
        }),
        (s.prototype.queryProductInfo = function (t, e) {
            console.log("SDKManager:queryProductInfo: " + t),
                (this._queryProductInfoCallback = e),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? "google" == this.getChannelAdName() &&
                          jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "queryProductInfo",
                              "(Ljava/lang/String;)V",
                              t
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "queryProductInfo:", t));
        }),
        (s.prototype.onQueryProductInfo = function (t) {
            console.log("SDKManager:onQueryProductInfo: " + t), this._queryProductInfoCallback(t);
        }),
        (s.prototype.openUrl = function (t) {
            console.log("SDKManager:openUrl"),
                window.jsb &&
                    (cc.sys.platform == cc.sys.ANDROID
                        ? jsb.reflection.callStaticMethod(
                              "org/cocos2dx/javascript/AppActivity",
                              "openUrl",
                              "(Ljava/lang/String;)V",
                              t
                          )
                        : (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) ||
                          jsb.reflection.callStaticMethod("AppActivity", "openUrl:", t));
        }),
        (s._instance = null),
        s);
function s() {
    (this.isInitSuccess = !1),
        (this._RewardVideoAdLoaded = !1),
        (this._RewardVideoAdCallStat = !1),
        (this._gameHide = !1),
        (this.tmpChannelAdName = ""),
        (this.queryPurchasesState = !1);
}
(o.SDKManager = t), (window.SDKManager = t.instance);
