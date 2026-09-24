# Legacy Cocos Source Snapshot

这是从用户提供的原始 Cocos Creator 项目中提取并直接提交到仓库的**核心源码快照**，用于让 Cursor 先理解真实旧工程，而不是继续从零创建 React/Vite 项目。

## 已确认的原项目事实

- 引擎：Cocos Creator 2.4.10
- 语言：JavaScript
- 原工程设计分辨率实际为竖屏 720×1280（与《时尚小镇》1080×1920 同为 9:16）
- 原始完整包中约有：
  - 492 个 JS 脚本
  - 588 个 Prefab
  - 2196 个 PNG
  - 98 个 Spine skel
  - 65 个 TMX 地图
- 本目录当前只提交**架构分析最重要的源文件**，不是可独立运行的完整工程。
- 不要因为本快照缺少资源/依赖就重写项目。缺失文件应记录到分析文档，后续按需补充。
- `MapDataMgr.js` 当前为架构分析用摘录版，保留了装修/预览/放置/移动/回收/室内判断等关键方法；其余已提交脚本以原源码内容为主。

## 重点阅读顺序

1. `project.json`
2. `settings/project.json`
3. `settings/builder.json`
4. `assets/scripts/AppConfig.js`
5. `assets/scripts/GameMgr.js`
6. `assets/scripts/SaveMgr.js`
7. `assets/scripts/MapDataMgr.js`
8. `assets/scripts/DecorateUI.js`
9. `assets/scripts/DecorateMove.js`
10. `assets/scripts/DecoratePut.js`
11. `assets/scripts/ReplacementMgr.js`
12. `assets/scripts/TaskMgr.js`
13. `assets/scripts/AssetMgr.js`
14. `assets/scripts/EventManager.js`
15. `assets/scripts/NetUtils.js`

## 已确认可复用方向

- UI/资源/事件基础框架
- 本地数据与云存档数据组织思路
- TMX/地图对象系统
- 家具装修：创建预览、移动、旋转、确认、取消、收起、碰撞/占位
- Spine 换装：头发、眼睛、脸、鞋、帽子、眼镜、耳饰、服装、项链
- 任务、新手、商店、签到等成熟业务框架
- NPC/A* 寻路

## 不要做

当前阶段不要：
- 新建 React/Vite 项目
- 重写为 Unity
- 自动升级 Cocos Creator
- 大规模删除旧代码
- 开始写三消
- 替换 UI/美术
- 接 Supabase

先完成源码分析。
