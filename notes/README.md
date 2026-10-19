# 单目三维重建论文阅读库

书单依据：ChatGPT 会话[“调研单目三维重建”](https://chatgpt.com/c/6aad083a-e548-83ed-bbed-8703752c5579)中“现在最值得读的五篇论文”一节，已核对完整标题及 arXiv 编号。

主入口：[阅读入口.html](阅读入口.html)。原有五篇及新增 YO-CSA-T、TrackNetV3 的英文 PDF 均已下载，共七篇、88 页。六篇提供全文中英对照；TT3D 提供原文与中文导读，尚未完成全文翻译。

新增：[论文发表核实与进阶书单](论文发表核实与进阶书单.md)（2026-09-22）：原五篇发表去向、七篇进阶阅读及研究启发；包含速度衰减论文的期刊发表更新与 TT4D 的作者稿会议标注说明。

2026-09-25 补充：[YO-CSA-T 全文中英对照](06_YO_CSA_T/bilingual/YO_CSA_T_中英对照.html)。已核实 IROS 2025 正式会议发表，下载并依据用户提供的 8 页 arXiv v1 作者稿完成全文翻译。这篇采用双目立体视觉。

| 论文 | 原文页数 | 当前交付 | 阅读文件 |
|---|---:|---|---|
| MonoTrack | 10 | 全文初译 · 重点校对 | [打开中英对照](01_MonoTrack/bilingual/MonoTrack_中英对照.html) |
| Where Is The Ball | 22 | 全文初译 · 重点校对 | [打开中英对照](02_Where_Is_The_Ball/bilingual/Where_Is_The_Ball_中英对照.html) |
| TT3D | 11 | 原文 + 导读 | [中文导读](03_TT3D/TT3D_中文导读.md) |
| Shuttlecock Velocity Decay | 8 | 全文初译 · 重点校对 | [打开中英对照](04_Shuttlecock_Velocity_Decay/bilingual/Shuttlecock_Velocity_Decay_中英对照.html) |
| TT4D | 22 | 全文初译 · 重点校对 | [打开中英对照](05_TT4D/bilingual/TT4D_中英对照.html) |
| YO-CSA-T | 8 | 全文中英对照 · Codex 直接翻译 | [打开中英对照](06_YO_CSA_T/bilingual/YO_CSA_T_中英对照.html) |
| TrackNetV3 | 7 | 全文中英对照 · Codex 直接翻译 | [打开中英对照](07_TrackNetV3/bilingual/TrackNetV3_中英对照.html) |

2026-10-02 补充：TrackNetV3 已依据用户提供的 PDF 完成全文翻译。包含 4 幅图、4 张表、2 个编号公式和 30 条参考文献。原文中基线准确率、YOLOv7 数值及末尾日期的差异已说明。

## 翻译形式与校对范围

- 格式参考桌面 `WBC/翻译工具集/学术论文翻译流程.md` 及现有中英对照文件：英文在上，蓝色中文在下，保留图表、公式与参考文献。
- 主交付为自包含 HTML，所有图片内嵌，无在线字体、脚本或公式渲染依赖；来源链接和本地 PDF 链接需要对应资源。
- 为保持数学表达完整，算法论文采用 arXiv 原生 HTML/MathML；羽毛球物理论文由 PDF 提取正文，公式和图表以原页局部图像保留。按章节重排，不与原 PDF 强制分页对齐。
- 作者、机构与参考文献保留原文，图内文字和表格中的数值保留原样；图表标题有中文对照，算法表格中自然语言标签也有翻译。物理论文表 1 保留原图。
- 原有四篇译文由 Google Translate 自动初译后进行了术语统一。Codex 重点校对共 148 个句子：MonoTrack 摘要及第 4.5 节，Where Is The Ball 摘要、方法关键段落和局限性，TT4D 摘要及第 3.4 节，物理论文摘要和第 4.2 节的主要定义。另有 14 句直接翻译。详见各篇 `manual_review.json`。
- YO-CSA-T 由 Codex 根据用户提供的 PDF 逐句翻译，核对技术术语、数字与数学占位符；10 幅图和 6 个编号公式来自原 PDF。保留并单独注释原式疑点。尚未经过领域专家逐句审定。
- TrackNetV3 采用完整段落对照，正文、图表标题、致谢和版权声明由 Codex 直接翻译；原图、表格和编号公式保留 PDF 图像，配中文术语释义。重建脚本为 `tools/build_tracknetv3.py`，译文源为该篇 `bilingual/translation_a.json` 和 `translation_b.json`。
- **这是全文初译，不是逐句精校终稿。** 不应把自动结构检查当作全部语义正确的证明。
- TT3D 的公开版本只查到 arXiv 非独占分发许可与 CVF 版权保留声明，因此暂未制作整篇译本；用户提供论文文件后可继续翻译。

## 版本与证据

- MonoTrack 原文 PDF 下载自作者的 Stanford 主页；双语文本取 arXiv 2204.01899v2 HTML。两者不是同一文件字节版本，未宣称逐字完全相同。
- Where Is The Ball 使用 2506.05763v1，含附录。
- TT3D 使用 CVF 的正式会议 PDF，共 11 页。
- 物理论文使用 2601.01412v1（2026 年 1 月）。
- TT4D 使用 2605.01234v2（2026-09-09），含附录 A–K；采用当前更新版，而非书单中最初的 5 月版。
- YO-CSA-T 使用 2501.06472v1（2025-01-11），8 页作者稿，不宣称与 IEEE 最终出版版逐字一致。专用重建脚本为 `tools/build_yo_csa_t.py`，译文源为 `manual_translation_a.json` 与 `manual_translation_b.json`。
- `sources.json` 和每篇 `source.json` 记录 URL、版本说明、字节数、页数、SHA-256 与许可。
- 每篇 `bilingual/validation.json` 保存句对、图片、公式等结构计数；`layout_validation.json` 记录浏览器加载、缺图、溢出和运行错误检查。
- `bilingual/units.json`、`translated.json`、`reviewed_overrides.json`、`maths.json` 与 `prepared.html` 为可维护的翻译源；`frags/frag_all.txt` 为 EN/ZH 对照文本。含 MathML 的版本应由本项目 `tools/assemble.py` 重建，不能只用 WBC 原组装器重建公式。

## 物理论文中的原式疑点

原文第 4.1 节写出 `L₁/₂=(2/e)L`；由该文式 (6) `V(r)=V₀ exp(-r/L)` 解得的减半距离应为 `L ln 2`。译文保留原式，并单独增加译者注。其他原文拼写错误原则上保留在英文栏；中文按语义翻译。

## 本次改动范围

全部新增文件位于 `papers/monocular_3d/`。桌面 WBC 只作格式参考，未改动其中内容；项目现有代码及其他任务的改动未修改。


## Paper Sharing 网页（2026-10-20）

打开 [论文分享网页](sharing/index.html)：17 篇论文与延伸阅读，中英切换、搜索筛选、逐步流程、演示模式、图示放大与数据精度对比。沿用现有 7 篇 PDF 和 6 篇中英初译，其余条目提供外部来源。

网页可以本地直接打开。GitHub 站点：[在线阅读](https://zdc852636-code.github.io/badminton-paper-sharing/)；[仓库](https://github.com/zdc852636-code/badminton-paper-sharing)。维护与验证说明见 [使用说明](sharing/使用说明.txt)。
