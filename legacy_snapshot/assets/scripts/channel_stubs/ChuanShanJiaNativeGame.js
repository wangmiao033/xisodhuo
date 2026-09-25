var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.ChuanShanJiaNativeGame = void 0);
function ChuanShanJiaNativeGame() {}
Object.defineProperty(ChuanShanJiaNativeGame, "instance", {
    get: function () {
        return this._instance || (this._instance = new ChuanShanJiaNativeGame()), this._instance;
    },
    enumerable: !1,
    configurable: !0
});
ChuanShanJiaNativeGame.ad_enable = !1;

o.ChuanShanJiaNativeGame = ChuanShanJiaNativeGame;
