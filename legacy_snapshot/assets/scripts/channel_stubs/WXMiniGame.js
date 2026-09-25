var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.WXMiniGame = void 0);
function WXMiniGame() {}
Object.defineProperty(WXMiniGame, "instance", {
    get: function () {
        return this._instance || (this._instance = new WXMiniGame()), this._instance;
    },
    enumerable: !1,
    configurable: !0
});
WXMiniGame.ad_enable = !1;

o.WXMiniGame = WXMiniGame;
