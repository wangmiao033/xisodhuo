# 时尚小镇源码改造仓库

> 目标：基于已有 Cocos Creator 原项目改造《时尚小镇》，不是从零重写网页游戏。

## Cursor 注意事项

在真正看到原始 Cocos Creator 源码前：

- 不要继续 React / Vite 版本
- 不要新建 Unity/Cocos 项目
- 不要升级 Cocos Creator
- 不要批量格式化
- 不要删除旧模块
- 不要开始写三消
- 不要替换 UI / 美术

原始源码到位后，仓库中应能看到或搜索到类似：

- `assets/`
- `settings/`
- `project.json`
- `.js`
- `.prefab`
- `.fire` / scene
- `.json`
- `.tmx`
- `.meta`

重点模块：

`GameMgr`
`UIMgr`
`AssetMgr`
`SaveMgr`
`MapDataMgr`
`MapObject`
`DecorateUI`
`DecorateMove`
`DecoratePut`
`ReplacementMgr`
`ReplacementUI`
`TaskMgr`
`GuideMgr`

## 第一阶段

只做源码分析，生成：

`docs/FASHION_TOWN_ANALYSIS.md`

完成后停止，等待确认。
