# Offline Boot Phase 1

第一阶段目标：让旧 Cocos Creator 快照默认脱离旧服务器也能继续启动，并隔离缺失的渠道 SDK 依赖。

## 已修改

- 新增 `AppConfig.enable_cloud_save`，默认 `false`。
- `SaveMgr` 默认只读本地存档，不访问旧的 `user/get_player_data` / `user/update_player_data`。
- `ChannelManager` 离线模式使用持久化的 `guest_*` 本地游客身份，不再使用共享测试账号。
- 修复 `require("DWMiniGame ")` 末尾空格。
- 为 8 个缺失渠道包装类及 `ChannelConst` 增加 no-op 兼容占位。
- `Utils.http_request` 与 `Utils.server_http_request` 在 HTTP 失败、JSON 解析失败、网络错误和 10 秒超时时都会回调失败结果。
- `Loading` 获取服务器时间失败时继续启动；DBconfig 计入加载进度，并在同步/缓存回调期间阻止过早完成。
- 修复音乐/音效关闭值 `0` 在重启后被 `|| 1` 覆盖的问题。
- `MyUIMgr.showModule` 收到空模块配置时只报错并返回。
- 新增 `tools/offline_smoke_test.cjs`。

## 未修改

没有修改 UI、美术、地图内容、任务数值、三消、Cocos 引擎版本或数据库接入。

## 验证

```bash
node tools/offline_smoke_test.cjs
```

该测试属于源码级冒烟测试，不等于 Cocos Creator 2.4.10 真机/编辑器运行验证。完整场景、Prefab、Bundle 与资源加载仍需在完整工程中验证。
