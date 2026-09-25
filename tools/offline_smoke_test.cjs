const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, p), "utf8");
let passed = 0;
const ok = (name, cond) => {
  if (!cond) throw new Error("FAIL: " + name);
  passed += 1;
  console.log("PASS:", name);
};

const app = read("legacy_snapshot/assets/scripts/AppConfig.js");
const loading = read("legacy_snapshot/assets/scripts/Loading.js");
const utils = read("legacy_snapshot/assets/scripts/Utils.js");
const save = read("legacy_snapshot/assets/scripts/SaveMgr.js");
const channel = read("legacy_snapshot/assets/scripts/ChannelManager.js");
const local = read("legacy_snapshot/assets/scripts/LocalData.js");
const ui = read("legacy_snapshot/assets/scripts/MyUIMgr.js");

ok("cloud save defaults off", app.includes("enable_cloud_save = !1"));
ok("loading continues after time failure", loading.includes("getNetTime failed; continue with local time") && loading.includes("e.onLoadDataCb()"));
ok("loading guards cached completion", loading.includes("_registeringLoads") && loading.includes("_finished"));
ok("http request has timeout/failure result", utils.includes("i.timeout = 1e4") && utils.includes('ResultCode: -1'));
ok("server GET has timeout/failure result", utils.includes("a.timeout = 1e4") && utils.includes('msg: "timeout"'));
ok("cloud save is guarded", save.includes("if (!r.default.enable_cloud_save) return;") && save.includes("!r.default.enable_cloud_save"));
ok("local guest replaces shared test account", channel.includes("fashion_town_guest_id") && !channel.includes('"uid": "8660"') && !channel.includes('t("DWMiniGame ")'));
ok("audio zero values survive reload", local.includes('null == this.getData("musicOn")') && local.includes('null == this.getData("effectOn")'));
ok("UI missing config is guarded", ui.includes("MyUIMgr.showModule: missing module config"));

for (const name of ["QQMiniGame","TTMiniGame","WXMiniGame","DWMiniGame","VIVOMiniGame","OPPOMiniGame","ChuanShanJiaNativeGame","HWGame","ChannelConst"]) {
  ok("stub exists: " + name, fs.existsSync(path.join(root, "legacy_snapshot/assets/scripts/channel_stubs", name + ".js")));
}
console.log("offline smoke tests passed:", passed);
