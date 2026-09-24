# Cursor 当前任务：只分析，不改造

你之前在空仓库中从零创建的 React/Vite 网页小游戏不是目标工程，请停止继续开发那一套。

现在仓库已经加入 `legacy_snapshot/`，里面是真实旧 Cocos Creator 项目的核心源码快照。

请先实际读取这些文件，确认：

- Cocos Creator 2.4.10
- `GameMgr.js`
- `SaveMgr.js`
- `MapDataMgr.js`
- `DecorateUI.js`
- `DecorateMove.js`
- `DecoratePut.js`
- `ReplacementMgr.js`
- `TaskMgr.js`
- `AssetMgr.js`
- `EventManager.js`
- `NetUtils.js`

并阅读 `legacy_server/SERVER_FINDINGS.md`。

## 唯一任务

建立：

`docs/FASHION_TOWN_ANALYSIS.md`

至少写清：

1. Cocos 工程版本与配置
2. 启动/初始化架构（能从当前快照确定多少就写多少，不能确定的标“需补文件”，不要猜）
3. GameMgr 与各 Manager 的关系
4. UI/资源/事件框架
5. SaveMgr + LocalData 的数据思路
6. 旧 API / 远程服务器
7. 地图/MapObject/TMX 系统
8. 家园装修流程
9. Replacement/Spine 换装流程
10. Task/Guide/Shop/SignIn 等可复用系统
11. 哪些模块直接保留
12. 哪些模块需要改造
13. 哪些旧玩法应先关闭
14. 哪些旧渠道/支付/广告依赖应隔离
15. 《时尚小镇》第一阶段最小改造路径
16. 为完成更深入分析还缺哪些具体源文件（按文件名列出）

## 严禁

- 不要创建新 React/Vite/Unity/Cocos 项目
- 不要删除现有代码
- 不要升级引擎
- 不要开始三消
- 不要修改 UI
- 不要接 Supabase
- 不要假装当前快照是完整可运行工程

完成 `FASHION_TOWN_ANALYSIS.md` 后停止，等待确认。
