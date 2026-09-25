var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.VIVOMiniGame = void 0);
function VIVOMiniGame() {}
Object.defineProperty(VIVOMiniGame, "instance", {
    get: function () {
        return this._instance || (this._instance = new VIVOMiniGame()), this._instance;
    },
    enumerable: !1,
    configurable: !0
});
VIVOMiniGame.ad_enable = !1;

o.VIVOMiniGame = VIVOMiniGame;
