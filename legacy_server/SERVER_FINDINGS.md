# 旧“服务端”资料分析

用户提供的 `服务端.rar` 已检查。

## 结论

这不是完整的游戏业务服务端源码。

主要包含：

- phpStudy Windows 运行环境
- Nginx / PHP 运行组件
- `WWW/game` 下的已编译 Cocos H5 客户端
- 本地部署/启动资料
- `gba.sql`
- 编译后的游戏 JavaScript

未发现可直接用于原游戏业务的完整 PHP 后端源码。

## 旧远程服务

客户端仍依赖：

`https://yjth.qszhg.6hwan.com/`

已确认/发现的接口包括：

- `user/login`
- `user/get_player_data`
- `user/update_player_data`

玩家相关字段包括：

- `uid`
- `token`
- `open_id`
- `channel_id`
- `player_data`

## 玩家云存档协议

从 `SaveMgr.js` 可确认：

上传流程：

`玩家/Manager数据 → JSON.stringify → encodeURIComponent → LZString.compressToBase64 → user/update_player_data`

下载流程：

`user/get_player_data → player_data → LZString.decompressFromBase64 → decodeURIComponent → JSON.parse → 写回 LocalData/各 Manager`

因此旧项目更接近“客户端组织大块玩家状态 + 服务器保存压缩 blob”的云存档模式。

## gba.sql

检查到的主要表属于游戏门户/目录/统计用途，例如：

- categories
- click_stats
- games
- game_category

不能把这份 SQL 当成原游戏的玩家业务数据库。

## 《时尚小镇》处理原则

旧远程域名、旧 token/渠道登录、旧支付/广告依赖最终都要替换。

建议迁移为：

`Cocos Creator 客户端 → 自有 API/服务层 → Supabase/PostgreSQL`

但第一阶段不要立刻接 Supabase。先把旧网络调用集中封装并让 Editor/本地存档能跑通。
