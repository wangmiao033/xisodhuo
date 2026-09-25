# P0 source bundle

This commit adds the P0 source files requested by Cursor for startup/network/local-save analysis.

- Source: user-supplied legacy Cocos Creator project.
- Engine: Cocos Creator 2.4.10.
- No original TypeScript files were present in the supplied package; these are JavaScript plus Cocos `.meta` files.
- `ChannelManager.js` has only legacy hard-coded test open IDs/token redacted because this repository is public. Control flow is unchanged.
- `P0_task_config_subset.json` contains Tasks/DailyTasks/GuideDatas/FuncUnlock/ModuleOpen subsets from the original DBconfig.

Confirmed links:
- `ChannelManager.js` contains `user/login`.
- `Loading.js` assigns `gm.mapData = new MapDataMgr()`.
- Startup scene UUID is `c6231880-a5f8-46a8-ba09-6a2c97cf136d`.
- Startup Canvas is 720×1280, fitWidth=true, fitHeight=false.