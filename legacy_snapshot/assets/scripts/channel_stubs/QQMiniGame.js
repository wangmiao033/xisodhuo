var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.QQMiniGame = void 0);
function QQMiniGame() {}
Object.defineProperty(QQMiniGame, "instance", {
    get: function () {
        return this._instance || (this._instance = new QQMiniGame()), this._instance;
    },
    enumerable: !1,
    configurable: !0
});
QQMiniGame.ad_enable = !1;

o.QQMiniGame = QQMiniGame;
