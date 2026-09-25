var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.OPPOMiniGame = void 0);
function OPPOMiniGame() {}
Object.defineProperty(OPPOMiniGame, "instance", {
    get: function () {
        return this._instance || (this._instance = new OPPOMiniGame()), this._instance;
    },
    enumerable: !1,
    configurable: !0
});
OPPOMiniGame.ad_enable = !1;

o.OPPOMiniGame = OPPOMiniGame;
