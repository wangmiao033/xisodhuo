var t = require;
var e = module;
var o = exports;
function i() {}
Object.defineProperty(o, "__esModule", {value: !0}),
    (e = t("Const")),
    (i.version = "1." + (i.debug_version = 28) + ".1"),
    (i.testMode = !1),
    (i.QQ_Group = "513635188"),
    (i.ServerMhtRequestUrl = "https://yjth.qszhg.6hwan.com/"),
    (i.AppName = "fairy_operation"),
    (i.allow_clear_local_data = !1),
    (i.loadMapObjectID = [
        e.SpecialObjectID.mainHouse,
        e.SpecialObjectID.bedroom,
        e.SpecialObjectID.ToolRoom,
        e.SpecialObjectID.trunk,
        10203, 10204, 10325, 10326, 10327, 10362, 10372, 10380, 10393, 10501,
        e.SpecialObjectID.food_table,
        e.SpecialObjectID.light_plate
    ]),
    (i.defaultScale = 0.7),
    (i.cookScale = 1),
    (i.boyInitDress = {
        0: (((t = {})[e.E_ReplacementType.clothing] = "301001"),
            (t[e.E_ReplacementType.face] = "201001"),
            (t[e.E_ReplacementType.hair] = "101001"),
            (t[e.E_ReplacementType.eye] = "202001"),
            (t[e.E_ReplacementType.earing] = "503001"),
            (t[e.E_ReplacementType.shoe] = "401001"), t),
        1: (((t = {})[e.E_ReplacementType.clothing] = "301101"),
            (t[e.E_ReplacementType.face] = "201101"),
            (t[e.E_ReplacementType.hair] = "101101"),
            (t[e.E_ReplacementType.eye] = "202101"),
            (t[e.E_ReplacementType.shoe] = "401101"), t),
        getMyInitDress: function (t) {
            var e, o = [], n = i.boyInitDress[t];
            for (e in n) o.push(n[e]);
            return o;
        }
    }),
    (o.default = t = i);
