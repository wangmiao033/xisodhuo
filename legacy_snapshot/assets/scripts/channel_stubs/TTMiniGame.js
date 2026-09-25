var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.TTMiniGame = void 0);
function TTMiniGame() {}
Object.defineProperty(TTMiniGame, "instance", {
    get: function () {
        return this._instance || (this._instance = new TTMiniGame()), this._instance;
    },
    enumerable: !1,
    configurable: !0
});
TTMiniGame.ad_enable = !1;

o.TTMiniGame = TTMiniGame;
