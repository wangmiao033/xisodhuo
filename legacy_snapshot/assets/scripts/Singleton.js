var t = require;
var e = module;
var o = exports;
function n() {}
Object.defineProperty(o, "__esModule", {value: !0}),
    (n.getInstance = function () {
        return this.instance || (this.instance = new this()), this.instance;
    }),
    (n.release = function () {
        this.instance = null;
    }),
    (o.default = e = n);
