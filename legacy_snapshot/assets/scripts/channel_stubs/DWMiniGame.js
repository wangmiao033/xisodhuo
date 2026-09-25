var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.DWMiniGame = void 0);
function DWMiniGame() {}
Object.defineProperty(DWMiniGame, "instance", {
    get: function () {
        return this._instance || (this._instance = new DWMiniGame()), this._instance;
    },
    enumerable: !1,
    configurable: !0
});
DWMiniGame.ad_enable = !1;

o.DWMiniGame = DWMiniGame;
