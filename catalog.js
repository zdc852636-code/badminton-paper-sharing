window.PAPERS = [
  {
    "id": "monotrack",
    "name": "MonoTrack",
    "title": "MonoTrack: Shuttle Trajectory Reconstruction From Monocular Badminton Video",
    "cn": "从单目羽毛球视频恢复三维球路",
    "group": "badminton",
    "venue": "CVPRW 2022 · CVSports",
    "level": [
      "工作坊",
      "Workshop"
    ],
    "school": "Stanford University · Adobe",
    "authors": "Paul Liu · Jui-Hsien Wang",
    "folder": "01_MonoTrack",
    "url": "https://arxiv.org/abs/2204.01899",
    "question": [
      "没有深度相机，怎样把比赛录像中的球路恢复到真实球场？",
      "How can a single match camera recover a shuttle trajectory in court coordinates?"
    ],
    "method": [
      "把球场、球员与球的二维观测结合，用击球端点先验和含阻力的运动方程约束三维拟合。",
      "Combine court, player and shuttle observations with endpoint priors and drag-aware trajectory fitting."
    ],
    "steps": [
      [
        "球场与球员",
        "Court & players"
      ],
      [
        "二维球跟踪",
        "2D tracking"
      ],
      [
        "击球分段",
        "Shot segmentation"
      ],
      [
        "物理轨迹拟合",
        "Physics fitting"
      ]
    ],
    "notes": [
      [
        "建立球场坐标与球员位置，提供几何参照。",
        "Establish court geometry and player locations."
      ],
      [
        "提取每帧羽毛球在图像中的位置。",
        "Locate the shuttle in the image sequence."
      ],
      [
        "利用动作与球路线索划分单次击球区间。",
        "Split the rally into shot intervals using motion cues."
      ],
      [
        "结合端点先验、重投影与运动模型估计三维球路。",
        "Fit a 3D path using endpoint priors, reprojection and dynamics."
      ]
    ],
    "evidence": [
      "真实比赛缺少三维真值；三维误差在合成轨迹上评估，真实视频主要评估二维重投影。",
      "Real matches lack 3D ground truth. Synthetic data supports 3D evaluation; real video uses reprojection."
    ],
    "limit": [
      "击球高度、端点位置和动力学假设会影响深度。它是羽毛球基线，不是精度已解决的终点。",
      "Depth depends on endpoint and dynamics assumptions. Treat it as a badminton baseline."
    ],
    "take": [
      "先复现，再固定二维输入比较端点高度和阻力模型。",
      "Reproduce first, then compare endpoint and drag assumptions with identical 2D input."
    ]
  },
  {
    "id": "pass3d",
    "name": "PASS-3D",
    "title": "PASS-3D: Pose-Anchored Sphere-Ray Shuttle 3D Reconstruction from Monocular Broadcast Badminton",
    "cn": "以人体姿态和球拍可达范围锚定三维击球点",
    "group": "badminton",
    "venue": "BMVC 2026",
    "level": [
      "已录用 · 学校公告",
      "Accepted · university announcement"
    ],
    "school": "Sogang University",
    "authors": "Jihoon Lee · Un Sang Park",
    "url": "https://computing.sogang.ac.kr/ko/community/news/detail/279",
    "checked": "2026-10-20",
    "question": [
      "空中的击球点没有固定高度，怎样给单目深度增加约束？",
      "How can airborne contact points constrain monocular depth?"
    ],
    "method": [
      "由身体姿态给出手腕位置，以球拍可达球面与球观测射线的交点约束击球点，再连接飞行段。",
      "Intersect a wrist-centred reach sphere with the shuttle viewing ray, then fit the flight between contacts."
    ],
    "steps": [
      [
        "身体姿态",
        "Body pose"
      ],
      [
        "球面与射线",
        "Sphere–ray"
      ],
      [
        "击球锚点",
        "Contact anchors"
      ],
      [
        "含阻力拟合",
        "Drag-aware fit"
      ]
    ],
    "notes": [
      [
        "提取身体与手腕的三维参照。",
        "Recover body and wrist references."
      ],
      [
        "用球拍可达范围限制射线上的候选位置。",
        "Restrict ray depth using racket reach."
      ],
      [
        "依据手臂方向和几何置信度筛选候选。",
        "Use forearm consistency and geometric confidence."
      ],
      [
        "通过端点和动力学约束连接轨迹。",
        "Connect contact anchors with a dynamics model."
      ]
    ],
    "evidence": [
      "官方介绍报告同步双视角基准：73 个回合、1,196 次击球。",
      "The university reports a synchronized dual-view benchmark: 73 rallies and 1,196 strokes."
    ],
    "limit": [
      "此页依据学校技术介绍，不是全文复核。公开代码和数据下载入口尚未确认。",
      "Based on the university description, not a full-paper audit. Public code and dataset access remain unconfirmed."
    ],
    "take": [
      "研究重点：人体提供的深度锚点是否可靠、如何量化误差。",
      "Study the reliability and uncertainty of pose-derived depth anchors."
    ],
    "availability": [
      "已找到录用公告，尚未取得公开论文 PDF 和论文原图。",
      "See the Chinese availability note: full bilingual text is not yet available."
    ]
  },
  {
    "id": "uplifting",
    "name": "Uplifting Table Tennis",
    "title": "Uplifting Table Tennis: A Robust, Real-World Application for 3D Trajectory and Spin Estimation",
    "cn": "让二维到三维提升适应真实检测噪声",
    "group": "tabletennis",
    "venue": "WACV 2026",
    "level": [
      "主会",
      "Main conference"
    ],
    "school": "University of Augsburg · NII · University of Tokyo",
    "authors": "Daniel Kienzle et al.",
    "url": "https://kiedani.github.io/WACV2026/",
    "code": "https://github.com/KieDani/UpliftingTableTennis",
    "paper": "https://arxiv.org/pdf/2511.20250v1",
    "checked": "2026-10-20",
    "question": [
      "合成轨迹训练的模型，如何接住真实视频的不完整检测？",
      "How can a synthetically trained model handle incomplete real detections?"
    ],
    "method": [
      "前端用真实二维标签训练；后端用合成数据训练。时间戳编码让模型处理漏检和不同帧率。",
      "Train perception on real 2D labels and lifting on synthetic data. Timestamp encoding handles gaps and frame-rate changes."
    ],
    "steps": [
      [
        "球与球台检测",
        "Ball & table"
      ],
      [
        "交叉过滤",
        "Cross-model filter"
      ],
      [
        "时间感知提升",
        "Time-aware lifting"
      ],
      [
        "三维与旋转",
        "3D & spin"
      ]
    ],
    "notes": [
      [
        "检测球和球台关键点。",
        "Detect ball and table keypoints."
      ],
      [
        "过滤不可靠观测，输入可以不完整。",
        "Reject unreliable observations; allow incomplete input."
      ],
      [
        "按真实时间间隔理解运动。",
        "Model motion with actual elapsed time."
      ],
      [
        "恢复轨迹与该段的初始旋转。",
        "Recover the trajectory and initial spin of the segment."
      ]
    ],
    "evidence": [
      "公开项目页提供代码、TTHQ 数据及演示入口。真实广播视频的三维真值仍是验证难点。",
      "The project provides code, TTHQ and demos. Real broadcast 3D ground truth remains a validation challenge."
    ],
    "limit": [
      "处理单次击球段；不能将其完整 pipeline 理解为 TT4D 式的整回合自动分段。",
      "Processes shot segments; its full pipeline is not TT4D-style whole-rally segmentation."
    ],
    "take": [
      "迁移到羽毛球时，先替换动力学与击球分布，再处理检测域差异。",
      "For badminton, replace dynamics and shot distributions before tackling detection domain shift."
    ],
    "availability": [
      "已下载原文；当前提供中文概要与原图讲解，尚无全文译文。",
      "See the Chinese availability note: full bilingual text is not yet available."
    ]
  },
  {
    "id": "tt4d",
    "name": "TT4D",
    "title": "TT4D: A Pipeline and Dataset for Table Tennis 4D Reconstruction From Monocular Videos",
    "cn": "先恢复整回合三维轨迹，再判断击球和弹跳",
    "group": "tabletennis",
    "venue": "ACM Multimedia 2026",
    "level": [
      "录用 / 作者稿标注",
      "Accepted / author-version metadata"
    ],
    "school": "UC Berkeley · University of Augsburg · University of Tübingen",
    "authors": "Nima Rahmanian · Daniel Kienzle · Thomas Gossard et al.",
    "folder": "05_TT4D",
    "url": "https://arxiv.org/html/2605.01234v2",
    "question": [
      "能否摆脱预先准确识别击球边界的依赖？",
      "Can reconstruction avoid requiring accurate shot boundaries first?"
    ],
    "method": [
      "完整二维回合经 Transformer 提升为稠密三维位置和旋转，再在三维轨迹中分段与筛选。",
      "Lift an entire 2D point to dense 3D position and spin, then segment and curate it in 3D."
    ],
    "steps": [
      [
        "回合预处理",
        "Preprocess point"
      ],
      [
        "全序列提升",
        "Full-sequence lift"
      ],
      [
        "三维事件识别",
        "3D events"
      ],
      [
        "质量筛选",
        "Quality filtering"
      ]
    ],
    "notes": [
      [
        "提取二维球路与场景信息，仍需准备回合片段。",
        "Extract 2D tracks and context from a prepared point clip."
      ],
      [
        "完整回合合成训练、DCE、缺失 token 和逐帧旋转；DUTA 借自既有工作。",
        "Full-point synthetic training, DCE, missing tokens and dense spin; DUTA is adopted from prior work."
      ],
      [
        "在三维坐标的变化中寻找击球和弹跳候选。",
        "Find hit and bounce candidates from 3D coordinate changes."
      ],
      [
        "结合重投影、事件与物理一致性筛选结果。",
        "Filter by reprojection, events and physical consistency."
      ]
    ],
    "evidence": [
      "TT4DBench：完整回合平均三维误差 17.26 cm，单段 21.88 cm（v2 表 3，无额外噪声、全视角）。",
      "TT4DBench: 17.26 cm full-point vs 21.88 cm segment error (v2 Table 3, all views, no added noise)."
    ],
    "limit": [
      "TT4DBench 源自 TT3D；大规模 TT4D 重建数据不等于实测真值。不能把该精度泛化到任意广播视频。",
      "TT4DBench derives from TT3D; large-scale TT4D reconstructions are not measured ground truth. Accuracy does not transfer automatically to arbitrary broadcasts."
    ],
    "take": [
      "重点看“解除分段依赖”需要哪些训练数据与结构，而不只是 Transformer 名字。",
      "Focus on what data and architecture remove the segmentation dependency."
    ]
  },
  {
    "id": "tt3d",
    "name": "TT3D",
    "title": "TT3D: Table Tennis 3D Reconstruction",
    "cn": "相机标定与物理轨迹拟合，以及真实三维评测",
    "group": "tabletennis",
    "venue": "CVPRW 2025 · CVSPORTS",
    "level": [
      "工作坊",
      "Workshop"
    ],
    "school": "University of Tübingen",
    "authors": "Thomas Gossard · Andreas Ziegler · Andreas Zell",
    "folder": "03_TT3D",
    "url": "https://cogsys-tuebingen.github.io/tt3d/",
    "code": "https://github.com/cogsys-tuebingen/tt3d",
    "question": [
      "如何利用球台和弹跳约束恢复单目三维运动？",
      "How can table geometry and bounces constrain monocular 3D motion?"
    ],
    "method": [
      "标定相机，利用包含旋转影响的物理模型，寻找能解释二维观测的运动状态。",
      "Calibrate the camera and fit spin-aware dynamics to explain 2D observations."
    ],
    "steps": [
      [
        "球台标定",
        "Table calibration"
      ],
      [
        "二维观测",
        "2D observations"
      ],
      [
        "物理优化",
        "Physics optimization"
      ],
      [
        "轨迹验证",
        "Trajectory evaluation"
      ]
    ],
    "notes": [
      [
        "球台几何提供尺度和相机信息。",
        "Table geometry provides scale and camera information."
      ],
      [
        "准备球的图像位置和轨迹段。",
        "Prepare ball observations and trajectory segments."
      ],
      [
        "用飞行与弹跳模型拟合观测。",
        "Fit observations using flight and bounce models."
      ],
      [
        "通过独立多目参考轨迹评测。",
        "Evaluate against multi-camera reference tracks."
      ]
    ],
    "evidence": [
      "公开评测含 130 条轨迹；三维参考来自 200 Hz 多目追踪，二维评测观测由投影生成。",
      "130 evaluation trajectories: 200 Hz multi-camera 3D references and projected 2D observations."
    ],
    "limit": [
      "真实三维来源不意味着评测输入全部来自视频检测。原始视频与评测包需区分。",
      "Real 3D provenance does not imply detector-generated 2D inputs. Distinguish raw video from evaluation data."
    ],
    "take": [
      "适合建立二维到三维评测工具链。球台反弹条件不能直接迁移到羽毛球。",
      "Useful for evaluation tooling; table-bounce constraints do not transfer directly to badminton."
    ],
    "availability": [
      "已下载原文；当前提供中文导读，尚无全文译文。",
      "See the Chinese availability note: full bilingual text is not yet available."
    ]
  },
  {
    "id": "tracknet",
    "name": "TrackNetV3",
    "title": "TrackNetV3: Enhancing ShuttleCock Tracking with Augmentations and Trajectory Rectification",
    "cn": "背景辅助跟踪与遮挡轨迹补全",
    "group": "tracking",
    "venue": "ACM Multimedia Asia 2023",
    "level": [
      "MMAsia · 非 ACM MM 主会",
      "MMAsia · distinct from ACM MM"
    ],
    "school": "National Yang Ming Chiao Tung University",
    "authors": "Yu-Jou Chen · Yu-Shuen Wang",
    "folder": "07_TrackNetV3",
    "url": "https://doi.org/10.1145/3595916.3626370",
    "code": "https://github.com/qaz812345/TrackNetV3",
    "question": [
      "怎样在模糊、遮挡和复杂背景下获得更完整的二维球路？",
      "How can tracking survive blur, occlusion and clutter?"
    ],
    "method": [
      "跟踪网络输出热图与坐标，轨迹校正模块根据缺失掩码补全二维轨迹。",
      "Predict heatmaps and coordinates, then rectify missing trajectory positions using a mask."
    ],
    "steps": [
      [
        "视频与背景",
        "Frames & background"
      ],
      [
        "热图检测",
        "Heatmap detection"
      ],
      [
        "坐标与掩码",
        "Coordinates & mask"
      ],
      [
        "轨迹补全",
        "Trajectory inpainting"
      ]
    ],
    "notes": [
      [
        "利用连续帧与背景线索。",
        "Use temporal frames and background context."
      ],
      [
        "训练检测热图，定位小目标。",
        "Learn heatmaps for tiny-object localization."
      ],
      [
        "将热图转为二维坐标，标识待补位置。",
        "Decode 2D coordinates and mark missing positions."
      ],
      [
        "依据时序上下文预测缺失位置。",
        "Infer missing positions from temporal context."
      ]
    ],
    "evidence": [
      "解决二维跟踪，不直接输出公制三维轨迹。图中两模块分别承担检测和校正。",
      "A 2D tracking method, not metric 3D reconstruction; detection and rectification are separate modules."
    ],
    "limit": [
      "补全点是预测值；后续三维拟合应保留可见性与置信度。",
      "Inpainted points are predictions. Preserve visibility and confidence for downstream lifting."
    ],
    "take": [
      "作为三维恢复前端，区分实测二维点与补全点。",
      "Use as a front-end while distinguishing detected from inpainted points."
    ]
  },
  {
    "id": "yocsa",
    "name": "YO-CSA-T",
    "title": "YO-CSA-T: A Real-time Badminton Tracking System Utilizing YOLO Based on Contextual and Spatial Attention",
    "cn": "面向羽毛球机器人的双目实时跟踪",
    "group": "tracking",
    "venue": "IROS 2025",
    "level": [
      "主会 · 双目",
      "Main conference · stereo"
    ],
    "school": "",
    "authors": "Yuan Lai · Zhiwei Shi · Chengxi Zhu",
    "folder": "06_YO_CSA_T",
    "url": "https://doi.org/10.1109/IROS60139.2025.11246442",
    "question": [
      "怎样为机器人稳定、及时地提供羽毛球三维状态？",
      "How can a robot obtain timely and robust 3D shuttle states?"
    ],
    "method": [
      "改进 YOLO 检测并结合双目几何、时序预测与反馈跟踪。",
      "Combine improved YOLO detection with stereo geometry, temporal prediction and tracking feedback."
    ],
    "steps": [
      [
        "双目图像",
        "Stereo images"
      ],
      [
        "注意力检测",
        "Attention detection"
      ],
      [
        "立体几何",
        "Stereo geometry"
      ],
      [
        "预测与反馈",
        "Prediction & feedback"
      ]
    ],
    "notes": [
      [
        "两路相机提供额外深度观测。",
        "Two cameras provide extra depth observations."
      ],
      [
        "提升复杂背景中的小目标检测。",
        "Improve tiny-object detection in clutter."
      ],
      [
        "由双目观测恢复空间位置。",
        "Recover spatial position from stereo observations."
      ],
      [
        "用时序状态辅助跟踪和缺帧处理。",
        "Use temporal states for tracking and missed detections."
      ]
    ],
    "evidence": [
      "已收录 IROS 2025。研究对象是双目跟踪，不能作为单目方法直接同条件比较。",
      "Published at IROS 2025. Stereo input prevents direct like-for-like comparison with monocular methods."
    ],
    "limit": [
      "双目精度依赖同步和标定；其结果不能用来证明单目深度已可观测。",
      "Stereo accuracy depends on synchronization and calibration; it does not establish monocular observability."
    ],
    "take": [
      "借鉴实时前端与预测反馈，或用于三维真值采集系统的设计。",
      "Study real-time perception and feedback, or use it to inform a reference capture system."
    ]
  },
  {
    "id": "whereball",
    "name": "Where Is The Ball",
    "title": "Where Is The Ball: 3D Ball Trajectory Estimation From 2D Monocular Tracking",
    "cn": "学习式二维轨迹到三维恢复",
    "group": "geometry",
    "venue": "CVPRW 2025 · CVSPORTS",
    "level": [
      "工作坊",
      "Workshop"
    ],
    "school": "",
    "authors": "Puntawat Ponglertnapakorn · Supasorn Suwajanakorn",
    "folder": "02_Where_Is_The_Ball",
    "url": "https://arxiv.org/abs/2506.05763",
    "question": [
      "二维球路中哪些表示有利于学习三维信息？",
      "Which 2D trajectory representation helps recover 3D information?"
    ],
    "method": [
      "将二维观测转为射线表示，用双向 LSTM 预测高度，再通过射线几何与三维残差网络恢复球路。",
      "Encode observations as rays, predict height with bidirectional LSTMs, then combine ray geometry with learned 3D residuals."
    ],
    "steps": [
      [
        "二维输入",
        "2D input"
      ],
      [
        "规范化表示",
        "Normalized representation"
      ],
      [
        "学习预测",
        "Learned prediction"
      ],
      [
        "三维优化",
        "3D refinement"
      ]
    ],
    "notes": [
      [
        "收集单目轨迹与场景信息。",
        "Collect monocular tracks and scene context."
      ],
      [
        "减少视角和坐标表示差异。",
        "Reduce viewpoint and coordinate variation."
      ],
      [
        "由仿真监督学习三维相关信息。",
        "Learn 3D-related quantities with simulation supervision."
      ],
      [
        "恢复与观测一致的三维轨迹。",
        "Recover a 3D trajectory consistent with observations."
      ]
    ],
    "evidence": [
      "已下载原文和含附录的中英初译。研究任务与羽毛球迁移需分别讨论。",
      "Local paper and bilingual draft include appendices. Badminton transfer needs separate validation."
    ],
    "limit": [
      "需核对端点条件、运动模型及标定误差；不是无条件从二维确定唯一三维。",
      "Check endpoint, dynamics and calibration assumptions; 2D does not unconditionally determine unique 3D."
    ],
    "take": [
      "与物理拟合在相同输入和噪声条件下比较。",
      "Compare with physics fitting under identical input and noise."
    ]
  },
  {
    "id": "spin2025",
    "name": "Spin & Trajectory · 2025",
    "title": "Towards Ball Spin and Trajectory Analysis in Table Tennis Broadcast Videos via Physically Grounded Synthetic-to-Real Transfer",
    "cn": "以合成数据学习三维轨迹与初始旋转",
    "group": "tabletennis",
    "venue": "CVPRW 2025 · CVsports",
    "level": [
      "工作坊 · Oral / Best Paper",
      "Workshop · Oral / Best Paper"
    ],
    "school": "University of Augsburg · National Institute of Informatics",
    "authors": "Daniel Kienzle · Robin Schön · Rainer Lienhart · Shin’ichi Satoh",
    "url": "https://kiedani.github.io/CVPRW2025/",
    "code": "https://github.com/KieDani/SpinAndTrajectoryTableTennis",
    "checked": "2026-10-20",
    "question": [
      "没有真实三维训练标签，能否从二维球路推断旋转？",
      "Can 2D tracks reveal spin without real 3D training labels?"
    ],
    "method": [
      "使用物理合成轨迹、输入表示和增强，训练轨迹与初始旋转预测模型。",
      "Train trajectory and initial-spin prediction using physics simulation, input representation and augmentation."
    ],
    "steps": [
      [
        "物理仿真",
        "Physics simulation"
      ],
      [
        "二维投影",
        "2D projection"
      ],
      [
        "轨迹网络",
        "Trajectory network"
      ],
      [
        "真实迁移",
        "Real-data transfer"
      ]
    ],
    "notes": [
      [
        "获得三维轨迹和旋转标签。",
        "Generate 3D trajectories and spin labels."
      ],
      [
        "构造可与真实标注对应的二维输入。",
        "Create 2D inputs compatible with real annotations."
      ],
      [
        "学习轨迹与初始旋转的关系。",
        "Learn to infer trajectory and initial spin."
      ],
      [
        "在真实二维观测上验证泛化。",
        "Evaluate generalization on real 2D observations."
      ]
    ],
    "evidence": [
      "作者页报告上/下旋分类准确率 92%；该奖项属于 CVsports 工作坊。",
      "The project reports 92% spin classification accuracy; the award is for the CVsports workshop."
    ],
    "limit": [
      "旋转类别正确不等于旋转大小或三维位置误差已充分验证。",
      "Correct spin class does not fully validate spin magnitude or 3D position accuracy."
    ],
    "take": [
      "按这篇 → Uplifting → TT4D 的顺序理解方法演进。",
      "Read this, then Uplifting, then TT4D to follow the progression."
    ],
    "availability": [
      "已下载原文；当前提供中文概要与原图讲解，尚无全文译文。",
      "See the Chinese availability note: full bilingual text is not yet available."
    ],
    "paper": "https://arxiv.org/pdf/2504.19863v1"
  },
  {
    "id": "decay",
    "name": "Shuttlecock Velocity Decay",
    "title": "Shuttlecock velocity decay after smash and slice shots in badminton",
    "cn": "杀球与切击后的速度衰减",
    "group": "physics",
    "venue": "Physica Scripta · 2026",
    "level": [
      "期刊",
      "Journal"
    ],
    "school": "Institut de Physique de Rennes",
    "authors": "Eric Collet",
    "folder": "04_Shuttlecock_Velocity_Decay",
    "url": "https://doi.org/10.1088/1402-4896/ae5361",
    "question": [
      "羽毛球的高速飞行能否用简单抛物线描述？",
      "Can a simple parabola describe high-speed shuttle flight?"
    ],
    "method": [
      "通过高速影像研究阻力、速度随距离的衰减及切击的影响。",
      "Use high-speed footage to study drag, speed decay and slice effects."
    ],
    "steps": [
      [
        "高速记录",
        "High-speed capture"
      ],
      [
        "位置与速度",
        "Position & speed"
      ],
      [
        "衰减模型",
        "Decay model"
      ],
      [
        "击球差异",
        "Stroke differences"
      ]
    ],
    "notes": [
      [
        "捕捉击球后的快速运动。",
        "Capture fast post-impact motion."
      ],
      [
        "从影像获得运动测量。",
        "Extract motion measurements."
      ],
      [
        "检验速度与距离的关系。",
        "Examine speed as a function of distance."
      ],
      [
        "比较羽毛球材质和击球方式。",
        "Compare shuttle types and stroke styles."
      ]
    ],
    "evidence": [
      "本地 PDF 和译文对应 arXiv v1，期刊发表状态另有记录。",
      "Local PDF and translation use arXiv v1; journal status is recorded separately."
    ],
    "limit": [
      "物理测量论文，不是单目三维恢复算法。译文保留并标注了减半距离公式疑点。",
      "A physics study, not a monocular reconstruction algorithm. The translation flags a half-distance formula issue."
    ],
    "take": [
      "为仿真参数范围和动力学误差分析提供依据。",
      "Inform simulation parameter ranges and model-error analysis."
    ]
  },
  {
    "id": "latte",
    "name": "LATTE-MV",
    "title": "LATTE-MV: Learning to Anticipate Table Tennis Hits from Monocular Videos",
    "cn": "从比赛视频重建到击球预判",
    "group": "tabletennis",
    "venue": "CVPR 2025",
    "level": [
      "主会",
      "Main conference"
    ],
    "school": "",
    "authors": "Etaat et al.",
    "url": "https://sastry-group.github.io/LATTE-MV/",
    "code": "https://github.com/sastry-group/LATTE-MV",
    "question": [
      "三维恢复怎样服务于机器人击球预判？",
      "How can reconstruction support robotic hit anticipation?"
    ],
    "method": [
      "从单目比赛构建运动数据，学习击球预判，并在控制任务中检验价值。",
      "Build motion data from match videos, learn anticipation and evaluate utility in control."
    ],
    "steps": [
      [
        "视频观测",
        "Video observations"
      ],
      [
        "运动恢复",
        "Motion reconstruction"
      ],
      [
        "预判学习",
        "Anticipation learning"
      ],
      [
        "控制评估",
        "Control evaluation"
      ]
    ],
    "notes": [
      [
        "提取比赛中的运动线索。",
        "Extract match motion cues."
      ],
      [
        "构建三维表示。",
        "Build a 3D representation."
      ],
      [
        "预测对方击球后的状态。",
        "Predict the state after the opponent’s hit."
      ],
      [
        "考察预测对任务的帮助。",
        "Assess task utility."
      ]
    ],
    "evidence": [
      "CVPR 主会；价值包含重建之外的下游任务。",
      "CVPR main conference; contributions include downstream use beyond reconstruction."
    ],
    "limit": [
      "重建、预判和控制是不同评价层次；任务成功不等于每帧空间精度更高。",
      "Reconstruction, anticipation and control are distinct evaluation levels."
    ],
    "take": [
      "为羽毛球研究设计落点、击球时机等任务指标。",
      "Design task metrics such as landing location and interception timing."
    ],
    "folder": "10_LATTE_MV"
  },
  {
    "id": "projectiles",
    "name": "Projectiles · TPAMI",
    "title": "Estimating 3D Positions and Velocities of Projectiles from Monocular Views",
    "cn": "单目抛射体的三维位置、速度与可解条件",
    "group": "geometry",
    "venue": "TPAMI 31(5) · 2009",
    "level": [
      "期刊",
      "Journal"
    ],
    "school": "University of Minnesota",
    "authors": "Evan Ribnick · Stefan Atev · Nikolaos P. Papanikolopoulos",
    "url": "https://doi.org/10.1109/TPAMI.2008.247",
    "question": [
      "什么观测足以唯一确定三维运动？",
      "What observations suffice to determine 3D motion?"
    ],
    "method": [
      "在给定运动假设下分析可解条件，并求解三维位置和速度。",
      "Analyze identifiability under motion assumptions and solve for 3D position and velocity."
    ],
    "steps": [
      [
        "相机与观测",
        "Camera & observations"
      ],
      [
        "运动假设",
        "Motion assumptions"
      ],
      [
        "可解性分析",
        "Identifiability"
      ],
      [
        "参数求解",
        "Parameter estimation"
      ]
    ],
    "notes": [
      [
        "明确输入和已知量。",
        "Specify measurements and known quantities."
      ],
      [
        "列出模型成立的条件。",
        "State the assumptions of the model."
      ],
      [
        "区分唯一解与退化情况。",
        "Separate unique solutions from degeneracies."
      ],
      [
        "在假设内估计状态。",
        "Estimate states within those assumptions."
      ]
    ],
    "evidence": [
      "经典几何基础；卷期年份为 2009，DOI 中含 2008。",
      "A geometric foundation; volume year is 2009 although the DOI contains 2008."
    ],
    "limit": [
      "增加未知阻力和相机误差后，原有可解性结论不能直接沿用。",
      "Unknown drag and calibration errors require revisiting identifiability."
    ],
    "take": [
      "先问数据能确定什么，再选择优化器或网络。",
      "Ask what is observable before choosing an optimizer or network."
    ],
    "availability": [
      "已找到论文记录，尚未取得可下载的官方全文和论文原图。",
      "See the Chinese availability note: full bilingual text is not yet available."
    ]
  },
  {
    "id": "perspective",
    "name": "Trajectory under Perspective",
    "title": "3D Trajectory Reconstruction under Perspective Projection",
    "cn": "透视投影下的轨迹表示与退化",
    "group": "geometry",
    "venue": "IJCV 115(2) · 2015",
    "level": [
      "期刊",
      "Journal"
    ],
    "school": "",
    "authors": "Hyun Soo Park · Takaaki Shiratori · Iain Matthews · Yaser Sheikh",
    "url": "https://publications.ri.cmu.edu/3d-trajectory-reconstruction-under-perspective-projection",
    "question": [
      "相机运动、目标运动和轨迹表示怎样共同决定可恢复性？",
      "How do camera motion, object motion and representation affect reconstructability?"
    ],
    "method": [
      "用轨迹基函数组织三维估计，分析透视投影带来的约束与退化。",
      "Represent trajectories with basis functions and analyze perspective constraints and degeneracies."
    ],
    "steps": [
      [
        "相机姿态",
        "Camera poses"
      ],
      [
        "轨迹表示",
        "Trajectory basis"
      ],
      [
        "投影约束",
        "Projection constraints"
      ],
      [
        "退化分析",
        "Degeneracy analysis"
      ]
    ],
    "notes": [
      [
        "明确相机姿态与时间变化。",
        "Specify camera poses over time."
      ],
      [
        "选择运动的函数表示。",
        "Choose a motion representation."
      ],
      [
        "拟合图像观测。",
        "Fit image observations."
      ],
      [
        "分析何时深度不稳定。",
        "Identify unstable depth configurations."
      ]
    ],
    "evidence": [
      "IJCV 方法论阅读；并非专为固定机位球赛设计。",
      "An IJCV methodological reference, not specifically a fixed-view sports method."
    ],
    "limit": [
      "不能把平滑轨迹等同于消除了深度歧义。",
      "Trajectory smoothness alone does not resolve depth ambiguity."
    ],
    "take": [
      "评测视角、飞行方向和观测长度对误差的影响。",
      "Evaluate viewpoint, flight direction and observation duration."
    ],
    "availability": [
      "已下载原文；当前提供中文概要与原图讲解，尚无全文译文。",
      "See the Chinese availability note: full bilingual text is not yet available."
    ],
    "paper": "https://www.iainm.com/assets/pdf/Park-2015.pdf"
  },
  {
    "id": "laws",
    "name": "Physical Laws · 3DV",
    "title": "Towards Learning Monocular 3D Object Localization From 2D Labels Using the Physical Laws of Motion",
    "cn": "用二维标签和运动物理训练三维定位",
    "group": "physics",
    "venue": "3DV 2024",
    "level": [
      "主会",
      "Main conference"
    ],
    "school": "",
    "authors": "Kienzle et al.",
    "url": "https://kiedani.github.io/3DV2024/",
    "question": [
      "三维训练标签不足时，物理能提供什么监督？",
      "What supervision can physics provide when 3D labels are scarce?"
    ],
    "method": [
      "在已标定设置下结合二维观测与运动物理，学习三维定位。",
      "Learn 3D localization from 2D observations and motion physics in a calibrated setting."
    ],
    "steps": [
      [
        "二维标签",
        "2D labels"
      ],
      [
        "标定信息",
        "Calibration"
      ],
      [
        "物理监督",
        "Physics supervision"
      ],
      [
        "三维定位",
        "3D localization"
      ]
    ],
    "notes": [
      [
        "收集可获得的图像标注。",
        "Use available image annotations."
      ],
      [
        "建立投影关系。",
        "Establish the projection model."
      ],
      [
        "用运动规律约束训练。",
        "Constrain learning with motion laws."
      ],
      [
        "预测空间位置并独立验证。",
        "Predict positions and evaluate independently."
      ]
    ],
    "evidence": [
      "作者页提供论文与资源入口。",
      "The author page provides the paper and resources."
    ],
    "limit": [
      "不需要三维训练标签，不意味着不需要三维评测真值。",
      "No 3D training labels does not mean no need for 3D evaluation truth."
    ],
    "take": [
      "研究二维监督与动力学约束结合的适用条件。",
      "Study conditions for combining 2D supervision and dynamics."
    ],
    "availability": [
      "已下载原文；当前提供中文概要与原图讲解，尚无全文译文。",
      "See the Chinese availability note: full bilingual text is not yet available."
    ],
    "paper": "https://arxiv.org/pdf/2310.17462v2"
  },
  {
    "id": "smash",
    "name": "SMASH",
    "title": "SMASH: Physics-guided Reconstruction of Collisions from Videos",
    "cn": "通过碰撞物理约束视频三维重建",
    "group": "physics",
    "venue": "ACM TOG · SIGGRAPH Asia 2016",
    "level": [
      "期刊 / 会议体系",
      "Journal / conference publication"
    ],
    "school": "",
    "authors": "",
    "url": "https://geometry.cs.ucl.ac.uk/projects/2016/smash/",
    "question": [
      "碰撞前后的状态联系，能否补充视觉深度约束？",
      "Can pre/post-collision state coupling constrain visual depth?"
    ],
    "method": [
      "把碰撞和运动规律加入视频重建，联合估计运动与相关物理量。",
      "Use collision and motion physics to jointly reconstruct motion and physical quantities."
    ],
    "steps": [
      [
        "视频线索",
        "Video cues"
      ],
      [
        "碰撞事件",
        "Collision events"
      ],
      [
        "物理耦合",
        "Physical coupling"
      ],
      [
        "联合估计",
        "Joint estimation"
      ]
    ],
    "notes": [
      [
        "提取运动观测。",
        "Extract motion observations."
      ],
      [
        "定位交互边界。",
        "Locate interaction boundaries."
      ],
      [
        "联系碰撞前后状态。",
        "Link pre/post-impact states."
      ],
      [
        "共同优化视觉与物理量。",
        "Jointly optimize visual and physical quantities."
      ]
    ],
    "evidence": [
      "属于物理引导视觉重建的参考工作。",
      "A reference for physics-guided visual reconstruction."
    ],
    "limit": [
      "刚体碰撞设置不同于球拍—羽毛球的形变接触。",
      "Rigid-body collisions differ from deformable racket–shuttle contact."
    ],
    "take": [
      "借鉴相邻击球段的约束组织，不直接套用碰撞公式。",
      "Borrow the coupling strategy, not the contact equations unchanged."
    ],
    "availability": [
      "已下载原文；当前提供中文概要与原图讲解，尚无全文译文。",
      "See the Chinese availability note: full bilingual text is not yet available."
    ],
    "paper": "https://geometry.cs.ucl.ac.uk/projects/2016/smash/paper_docs/SMASH_MonszpartThuereyMitra_SIGGRAPH_Asia_2016_compressed.pdf"
  },
  {
    "id": "blur",
    "name": "Motion-From-Blur",
    "title": "Motion-From-Blur: 3D Shape and Motion Estimation of Motion-Blurred Objects in Videos",
    "cn": "把运动拖影当作帧内观测",
    "group": "tracking",
    "venue": "CVPR 2022",
    "level": [
      "主会",
      "Main conference"
    ],
    "school": "",
    "authors": "Rozumnyi et al.",
    "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Rozumnyi_Motion-From-Blur_3D_Shape_and_Motion_Estimation_of_Motion-Blurred_Objects_in_CVPR_2022_paper.html",
    "code": "https://github.com/rozumden/MotionFromBlur",
    "question": [
      "拖影除了造成误差，是否也包含运动信息？",
      "Can blur provide motion information rather than only corrupt it?"
    ],
    "method": [
      "通过曝光期间的运动与渲染模型估计三维形状和运动。",
      "Estimate 3D shape and motion using an exposure-time motion and rendering model."
    ],
    "steps": [
      [
        "模糊视频",
        "Blurred video"
      ],
      [
        "曝光建模",
        "Exposure model"
      ],
      [
        "可微渲染",
        "Differentiable rendering"
      ],
      [
        "形状与运动",
        "Shape & motion"
      ]
    ],
    "notes": [
      [
        "保留帧内拖影线索。",
        "Preserve within-frame blur cues."
      ],
      [
        "描述曝光期间的位移。",
        "Describe motion during exposure."
      ],
      [
        "比较渲染与实际观测。",
        "Compare rendered and observed images."
      ],
      [
        "优化运动和形状。",
        "Optimize motion and shape."
      ]
    ],
    "evidence": [
      "CVPR 主会；为高速小目标提供另一类观测思路。",
      "CVPR main conference; offers another way to use high-speed observations."
    ],
    "limit": [
      "远景羽毛球像素少、压缩重，拖影线索未必可可靠提取。",
      "Distant, compressed shuttle images may not preserve usable blur cues."
    ],
    "take": [
      "探索中心点之外的拖影方向、长度与曝光时间。",
      "Explore blur direction, extent and exposure time beyond a single center point."
    ],
    "folder": "14_Motion_From_Blur"
  },
  {
    "id": "freetrack",
    "name": "FreeTrack",
    "title": "Robust 3D shuttlecock trajectory reconstruction via environmental geometric invariants from monocular video",
    "cn": "运动平面约束下的逐帧三维反投影",
    "group": "badminton",
    "venue": "Machine Vision and Applications 37, 167 (2026)",
    "level": [
      "正式期刊论文",
      "Journal article"
    ],
    "school": "",
    "authors": "Kun Yu · Changlong Jiang · Haohong Kuang · Hang Xu · Jinghong Zheng · Tian Xia · Jun Zhang · Yang Xiao",
    "url": "https://link.springer.com/article/10.1007/s00138-026-01929-3",
    "code": "https://github.com/Alexanderyk6/FreeTrack",
    "checked": "2026-10-20",
    "question": [
      "能否用几何平面替代单一轨迹方程拟合？",
      "Can a geometric plane replace fitting a single trajectory equation?"
    ],
    "method": [
      "识别击球帧和地面投影，确定飞行运动平面，再逐帧反投影二维球位置。",
      "Identify contact frames and ground projections, define a motion plane, then back-project 2D ball positions."
    ],
    "steps": [
      [
        "二维检测",
        "2D detection"
      ],
      [
        "击球识别",
        "Contact detection"
      ],
      [
        "运动平面",
        "Motion plane"
      ],
      [
        "逐帧反投影",
        "Frame-wise back-projection"
      ]
    ],
    "notes": [
      [
        "检测球与球员。",
        "Detect the shuttle and players."
      ],
      [
        "确定轨迹段边界。",
        "Locate segment boundaries."
      ],
      [
        "依据击球几何确定近似垂直运动平面。",
        "Define an approximately vertical plane from contact geometry."
      ],
      [
        "用平面约束确定射线深度。",
        "Resolve ray depth with the plane constraint."
      ]
    ],
    "evidence": [
      "出版社确认已于 2026-10-02 正式发表。这里的 Badminton3D 由其方法估计三维轨迹，不能当作独立多目三维真值。",
      "Publisher confirms publication on 2 October 2026. Badminton3D contains estimated trajectories, not independent multiview ground truth."
    ],
    "limit": [
      "平面与地面投影误差会传递到三维结果；不把仓库宣传当作独立精度证明。",
      "Plane and ground-projection errors propagate to 3D; repository claims are not independent accuracy evidence."
    ],
    "take": [
      "与端点物理拟合比较，明确各自的几何假设。",
      "Compare with endpoint-constrained dynamics while exposing geometric assumptions."
    ],
    "paper": "https://doi.org/10.1007/s00138-026-01929-3",
    "availability": [
      "已核实正式发表；全文受出版社访问权限限制，目前只有原图预览和中文概要。",
      "See the Chinese availability note: full bilingual text is not yet available."
    ]
  }
];
