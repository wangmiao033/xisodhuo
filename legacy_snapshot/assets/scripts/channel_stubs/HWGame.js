var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.HWGame = void 0);
function HWGame() {}
Object.defineProperty(HWGame, "instance", {
    get: function () {
        return this._instance || (this._instance = new HWGame()), this._instance;
    },
    enumerable: !1,
    configurable: !0
});
HWGame.ad_enable = !1;

o.HWGame = HWGame;
