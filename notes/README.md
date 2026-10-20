# 单目三维重建论文阅读库

书单依据：ChatGPT 会话[“调研单目三维重建”](https://chatgpt.com/c/6aad083a-e548-83ed-bbed-8703752c5579)中“现在最值得读的五篇论文”一节，已核对完整标题及 arXiv 编号。

主入口：[论文分享网页](sharing/index.html)。本地现有 14 篇 PDF；网站内可读 14 篇 PDF、14 篇中英全文。2026-10-20 已逐段对照复核全部 14 篇译文，共 6316 个文本片段（含标题、图注和数学片段）；详见[下载与审校记录](sharing/notes/review-20261020.html)。

新增：[论文发表核实与进阶书单](论文发表核实与进阶书单.md)（2026-09-22）：原五篇发表去向、七篇进阶阅读及研究启发；包含速度衰减论文的期刊发表更新与 TT4D 的作者稿会议标注说明。

2026-09-25 补充：[YO-CSA-T 全文中英对照](06_YO_CSA_T/bilingual/YO_CSA_T_中英对照.html)。已核实 IROS 2025 正式会议发表，下载并依据用户提供的 8 页 arXiv v1 作者稿完成全文翻译。这篇采用双目立体视觉。

| 论文 | 原文页数 | 当前交付 | 阅读文件 |
|---|---:|---|---|
| MonoTrack | 10 | 全文译文 · AI 逐段对照复核 | [打开中英对照](01_MonoTrack/bilingual/MonoTrack_中英对照.html) |
| Where Is The Ball | 22 | 全文译文 · AI 逐段对照复核 | [打开中英对照](02_Where_Is_The_Ball/bilingual/Where_Is_The_Ball_中英对照.html) |
| TT3D | 11 | 全文中英对照 · AI 对照复核 | [打开中英对照](03_TT3D/bilingual/TT3D_中英对照.html) |
| Shuttlecock Velocity Decay | 8 | 全文译文 · AI 逐段对照复核 | [打开中英对照](04_Shuttlecock_Velocity_Decay/bilingual/Shuttlecock_Velocity_Decay_中英对照.html) |
| TT4D | 22 | 全文译文 · AI 逐段对照复核 | [打开中英对照](05_TT4D/bilingual/TT4D_中英对照.html) |
| YO-CSA-T | 8 | 全文中英对照 · AI 逐段对照复核 | [打开中英对照](06_YO_CSA_T/bilingual/YO_CSA_T_中英对照.html) |
| TrackNetV3 | 7 | 全文中英对照 · AI 逐段对照复核 | [打开中英对照](07_TrackNetV3/bilingual/TrackNetV3_中英对照.html) |

2026-10-02 补充：TrackNetV3 已依据用户提供的 PDF 完成全文翻译。包含 4 幅图、4 张表、2 个编号公式和 30 条参考文献。原文中基线准确率、YOLOv7 数值及末尾日期的差异已说明。

## 翻译形式与校对范围

- 格式参考桌面 `WBC/翻译工具集/学术论文翻译流程.md` 及现有中英对照文件：英文在上，蓝色中文在下，保留图表、公式与参考文献。
- 主交付为自包含 HTML，所有图片内嵌，无在线字体、脚本或公式渲染依赖；来源链接和本地 PDF 链接需要对应资源。
- 优先采用原生 HTML/MathML 保留数学结构，并以本地 PDF 核对内容；直接从 PDF 提取的版本保留行内数学符号图像，另提供可展开的完整原页。网页按章节或原页组织，保留原文页码以便核对。
- 作者、机构与参考文献保留原文，图内文字和表格中的数值保留原样；图表标题有中文对照，算法表格中自然语言标签也有翻译。物理论文表 1 保留原图。
- 历史版本采用机器初译和重点段落校对。本次已扩展为全部 14 篇正文、标题、图注、表格文本与附录的逐段核对。各篇 `review-20261020.json` 保存逐单元核查记录，`corrections-20261020.json` 保存修订；`revision-20261020/review-final.json` 保存总核验结果。
- YO-CSA-T 由 Codex 根据用户提供的 PDF 逐句翻译，核对技术术语、数字与数学占位符；10 幅图和 6 个编号公式来自原 PDF。保留并单独注释原式疑点。尚未经过领域专家逐句审定。
- TrackNetV3 采用完整段落对照，正文、图表标题、致谢和版权声明由 Codex 直接翻译；原图、表格和编号公式保留 PDF 图像，配中文术语释义。重建脚本为 `tools/build_tracknetv3.py`，译文源为该篇 `bilingual/translation_a.json` 和 `translation_b.json`。
- **2026-10-20 已完成 14 篇全文 AI 逐段对照复核，未经独立领域专家审定。** 语义修订与结构验证分开记录，不能把自动检查当作语义正确的证明。
- 本次根据用户指定的本地 PDF，完成 TT3D、Uplifting、SpinTrajectory、Physical Laws、SMASH 和 Perspective 的全文中英对照。新增 6 篇的语义修订记录为各篇 `bilingual/corrections-six.json` 和 `reviewed_overrides.json`，总核验见 `revision-20261020/six-final-validation.json`。原作版权及许可保留，不另行授予原作版权。

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

打开 [论文分享网页](sharing/index.html)：17 篇论文与延伸阅读，中英切换、搜索筛选、逐步流程、演示模式、图示放大与数据精度对比。网站现有 14 篇 PDF、14 篇已对照复核的中英译文、15 篇论文原图或算法面板。阅读工具栏可以收起；其余条目明确标注下载与翻译状态。

网页可以本地直接打开。GitHub 站点：[在线阅读](https://zdc852636-code.github.io/badminton-paper-sharing/)；[仓库](https://github.com/zdc852636-code/badminton-paper-sharing)。维护与验证说明见 [使用说明](sharing/使用说明.txt)。

2026-10-20 新增全文译文： [LATTE-MV](10_LATTE_MV/bilingual/LATTE_MV_中英对照.html)（CC BY 4.0）、[Motion-from-Blur](14_Motion_From_Blur/bilingual/Motion_From_Blur_中英对照.html)（CC BY-NC-SA 4.0，非商业、相同许可共享）。TT3D、Uplifting、SpinTrajectory、Physical Laws、SMASH、Perspective 现已依据用户指定的本地 PDF 制作中英全文，完成术语和语义修订。FreeTrack 已核实正式发表于 Machine Vision and Applications 37, 167 (2026)，旧仓库投稿状态已更正。
