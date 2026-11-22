const translations = {
  zh: {
    lang: "zh-CN",
    title: "梁浩琪 | 机器人系统、ROS2 控制与 VLA 部署",
    description: "梁浩琪的机器人系统作品集，涵盖 ROS2 控制、遥操作、VLA 部署与 SLAM 导航。",
    share: "机器人系统开发：ROS2 控制、遥操作、VLA 部署与 SLAM 导航。",
    labels: {
      skip: "跳到正文", nav: "主导航", home: "返回首页", open: "打开导航", close: "关闭导航",
      language: "语言选择", signals: "能力关键词", actions: "主要操作", facts: "个人概览",
      visual: "机器人系统闭环示意图", filter: "项目筛选", education: "教育背景",
    },
    nav: ["定位", "技能", "案例", "项目", "经历", "成果", "项目说明", "联系"],
    hero: {
      eyebrow: "机器人软件 / 系统工程", name: "梁浩琪",
      position: "机器人系统 · ROS2 控制 · 具身智能部署",
      lede: "聚焦机器人系统落地：ROS2 控制、遥操作、VLA 部署与 SLAM 导航。",
      signals: ["ROS2 / ros2_control", "Teleoperation", "VLA Deployment", "SLAM / Nav2", "MuJoCo / Isaac Sim"],
      actions: ["查看项目", "项目说明", "GitHub"],
      facts: [["硕士 · 推免", "西安电子科技大学 · 电子信息（专业前 10%）"], ["机器人全栈", "ROS2 控制 · 遥操作 · VLA · SLAM"], ["真机闭环", "星尘 · 众擎 · 广电超智 · 优艾智合"]],
    },
    panel: {
      top: "FROM PERCEPTION TO REAL ROBOT",
      nodes: [["Perception", "YOLO11n / ONNX / RGB-D / SLAM"], ["Planning", "Nav2 / CBF / 运镜轨迹"], ["Control & Robot", "ROS2 / SDK / 43 DOF"]],
      links: [["Perception →", "摄影助理"], ["Planning →", "Go2 导航"], ["Control →", "VLA 真机"], ["Edge →", "Thor 部署"]],
    },
    focus: {
      eyebrow: "01 / SYSTEM CAPABILITIES", title: "机器人系统能力",
      intro: "覆盖感知、规划、控制与部署，并以项目验证工程能力。",
      cards: [
        ["机器人系统", "ROS2、ros2_control、传感器接入及上位机与机器人 SDK 联调。", "摄影助理 ↗"],
        ["控制与规划", "FK / IK、DLS、加权 IK、轨迹插值、逆动力学补偿、Nav2 与 CBF。", "Go2 导航 ↗"],
        ["感知与定位", "YOLO、ONNX Runtime、Re-ID、双目深度、RTAB-Map 与 VINS-Fusion。", "目标跟随 ↗"],
        ["具身智能与边缘端", "遥操作数据采集、VLA 推理、仿真验证及 Jetson / RK3588 部署。", "VLA 部署 ↗"],
      ],
    },
    skills: {
      eyebrow: "02 / SKILLS", title: "技能栈",
      intro: "按开发环节整理核心工具与算法。",
      cards: [
        ["语言与系统", "工程实现与真机通信", ["Python", "C++", "ROS2 Humble", "ros2_control", "ZMQ", "React", "FastAPI", "WebRTC", "Git"]],
        ["机器人算法", "运动学、动力学与控制", ["FK / IK", "DLS", "加权优化 IK (minc / DAQP)", "五次多项式", "Ruckig", "PD / 阻抗控制", "MOCRAL 逆动力学", "Nav2", "CBF"]],
        ["感知与定位", "检测、跟踪与建图", ["YOLO11n / YOLOv5n", "ONNX Runtime", "Re-ID", "双目 / 深度", "RTAB-Map", "VINS-Fusion", "TF 坐标对齐"]],
        ["仿真与部署", "先仿真验证，再上真机", ["MuJoCo", "Isaac Sim", "ManiSkill", "PyBullet", "ONNX / TensorRT", "Docker", "JetPack", "Jetson Orin / Thor", "RK3588"]],
        ["具身智能", "遥操作到模型执行", ["π0.5 / OpenPI", "SmolVLA", "MemoryVLA / evo-rl", "数据采集与转换", "归一化", "远程推理"]],
        ["研发流程", "可复用的 Agent 协作与验证", ["Claude Code / Codex", "Git Worktree", "接口契约", "回归测试", "Skills 沉淀", "日志与回放验证"]],
      ],
    },
    projects: {
      title: "代表项目",
      intro: "涵盖机器人应用、运动控制、VLA 部署与边缘端运行。",
      filters: ["全部", "机器人系统", "具身智能", "边缘部署"],
      detailLabels: ["负责内容", "验证重点"], note: "系统示意 · 非实拍",
      items: [
        { role: "星尘智能", title: "机器人摄影助理：全栈应用与真机执行", summary: "开发 React / FastAPI 摄影助理，连接手机 WebRTC 取景、目标跟随、运镜执行与视频回传；经 MuJoCo + Mock 验证后部署至 RK3588，并完成真机 SDK 联调。", details: ["开发 React 工作台与 FastAPI 后端；将 HDF5 25 维动作转换为 SDK 路点，并按底盘位姿进行 SE(2) 重定位；接入 YOLO11n / ONNX 与 Re-ID 跟踪。", "MuJoCo + Mock 回归覆盖路点、调度、停止与状态回传；跟随 V1 通过 109 项测试，真机完成推进、拉远、侧移和环绕 4 类运镜。"], diagram: "摄影助理系统流程图" },
        { role: "Unitree Go2", title: "Go2 视觉 SLAM、导航与 CBF 安全控制", summary: "在 Jetson、Go2 EDU 与 D435i 上集成 RTAB-Map 和 Nav2，完成建图、TF 对齐与导航联调；在 Isaac Sim 中验证 CBF 避障约束。",  details: ["部署 RTAB-Map，完成 RGB-D / IMU 建图及 map / odom / base_link / camera_link 对齐；使用 Nav2 实现定位、规划与路径跟踪。", "在 Go2 真机验证定位、路径执行与动态避障；在仿真中验证 CBF 安全约束。"], diagram: "Go2 导航系统流程图" },
        { role: "广电运通·超智机器人", title: "天工机器人遥操作与 VLA 真机部署", summary: "打通遥操作采集、数据处理、模型训练、远程推理与真机执行；通过 ZMQ 隔离 ROS2 与解算环境，将解算延迟从约 50 ms 降至 20 ms 以内。",  details: ["将天工 URDF 接入 XRobotToolkit，对齐关节与动作空间；拆分动作和图像传输，适配 ROS2 话题及 π0.5 / OpenPI 推理接口。", "采集银行卡抓取、盖章递交和刷卡任务；单任务约 100 条、约 50 Hz，盖章递交初测 20 次，核心流程完成率约 80%。"], diagram: "具身智能系统流程图" },
        { role: "Jetson Thor", title: "Jetson Thor 具身智能系统容器化部署", summary: "完成 Jetson Thor 的 Docker、CUDA 与 JetPack 适配，部署 SmolVLA 推理并迁移 VR 遥操作链路。",  details: ["完成依赖与镜像适配，部署 SmolVLA 推理服务，并处理 VR 遥操作迁移中的设备和通信差异。", "验证 Orin 到 Thor 的推理迁移、遥操作复用与运行稳定性。"], diagram: "Thor 部署流程图" },
        { role: "队长", title: "多模态具身智能系统开发", summary: "在 Jetson Orin Nano 部署 YOLOv5n、Whisper.cpp 与 Qwen，并通过 ONNX / TensorRT 加速检测，连接语音、视觉、决策与运动执行。",  bullets: ["端到端多模态 Agent 联调", "面向机器人任务的轻量化边缘部署"] },
      ],
    },
    experience: {
      title: "最新经历",
      items: [
        ["2026.09 – 至今", "星尘智能 · 机器人全栈算法实习", "开发 React / FastAPI 摄影助理，完成 WebRTC 取景、YOLO11n 站位引导、HDF5 动作转换与 SE(2) 重定位；经 MuJoCo + Mock 验证后部署至 RK3588，跟随 V1 通过 109 项测试。"],
        ["2026.08 – 2026.09", "众擎机器人 · 控制算法实习", "参与 T800H / T800Pro 遥操作与 ROS2 控制；开发约 200 Hz C++ 控制桥接、500 Hz 状态反馈与轨迹插值，并接入 MOCRAL 重力补偿和加权 IK 动作重定向。"],
        ["2026.04 – 2026.07", "广电运通·超智机器人 · 具身智能 / VLA 部署实习", "完成天工机器人遥操作适配、数据采集及 π0.5 / OpenPI 部署；通过 ZMQ 隔离 ROS2 与解算环境，将解算延迟从约 50 ms 降至 20 ms 以内。"],
        ["2025.06 – 2025.09", "优艾智合机器人 · 机器人系统实习", "基于 SO-ARM100 与 Quest 3 搭建 VR 遥操作，末端映射延迟 ≤50 ms；通过 Δpose、低通滤波与 DLS-IK 将手柄高频抖动降低约 40%，并完成 URDF 与 ManiSkill 建模。"],
      ],
    },
    outputs: {
      title: "研究与成果", intro: "论文、知识产权与竞赛获奖记录。",
      cards: [
        ["Semantic Communications with Zero-Shot Learning for Multi-modal Transmission", "学生一作 · EI 检索"],
        ["基于语义不确定性与动态安全距离的无人机安全控制方法", "发明专利 · 学生一作"],
        ["机械臂运动轨迹规划分析系统 V1.0", "软件著作权 · 学生一作"],
        ["嵌入式芯片与系统设计竞赛国家级三等奖 · “博创杯”国家级二等奖", "另获物联网设计（华为杯）、西门子杯智能制造、全国大学生电子设计竞赛省一等奖"],
      ],
    },
    education: "西安电子科技大学 · 电子信息硕士（推免，专业前 10%） / 兰州理工大学 · 自动化（专业排名 10/229，省优秀毕业生）",
    download: {
      eyebrow: "06 / DOCUMENT", title: "项目说明",
      intro: "48 页项目记录，包含实习经历、技术方案与真机验证材料。",
      actions: ["下载 PDF · 8.6 MB", "下载 PPTX · 317 MB"],
      note: "PPTX 含真机视频，文件较大；建议优先查看 PDF。",
    },
    contact: { title: "机器人系统工程与开发", actions: ["2693075546@qq.com", "GitHub"] },
    footer: "© 2026 梁浩琪",
  },
  en: {
    lang: "en", title: "Liang Haoqi | Robotics Systems, ROS2 Control & VLA Deployment",
    description: "Liang Haoqi's robotics portfolio: ROS2 control on real robots, teleoperation and VLA deployment, visual SLAM with Nav2, and MuJoCo validation.",
    share: "From ROS2 control and teleoperation data loops to VLA deployment and SLAM/Nav2, I build algorithms into systems that run on real robots.",
    labels: {
      skip: "Skip to content", nav: "Primary navigation", home: "Back to home", open: "Open navigation", close: "Close navigation",
      language: "Language selection", signals: "Focus areas", actions: "Primary actions", facts: "Profile overview",
      visual: "Closed-loop robotics system diagram", filter: "Project filters", education: "Education",
    },
    nav: ["Focus", "Skills", "Cases", "Projects", "Experience", "Outputs", "Document", "Contact"],
    hero: {
      eyebrow: "Robot Software / Systems Engineering", name: "Liang Haoqi",
      lede: "I build robot systems across ROS2 control, teleoperation, VLA deployment, and SLAM navigation.",
      signals: ["ROS2 / ros2_control", "Teleoperation", "VLA Deployment", "SLAM / Nav2", "MuJoCo / Isaac Sim"],
      actions: ["View Projects", "Document", "GitHub"],
      facts: [["M.Eng. · Recommended", "Xidian University · Electronics (top 10%)"], ["Full-stack Robotics", "ROS2 control · Teleoperation · VLA · SLAM"], ["Real-Robot Loops", "Stardust · EngineAI · GRG · Youibot"]],
    },
    panel: {
      top: "FROM PERCEPTION TO REAL ROBOT",
      nodes: [["Perception", "YOLO11n / ONNX / RGB-D / SLAM"], ["Planning", "Nav2 / CBF / Camera paths"], ["Control & Robot", "ROS2 / SDK / 43 DOF"]],
      links: [["Perception →", "Camera assistant"], ["Planning →", "Go2 navigation"], ["Control →", "VLA on hardware"], ["Edge →", "Thor deployment"]],
    },
    focus: {
      eyebrow: "01 / SYSTEM CAPABILITIES", title: "Capabilities connected to real projects.",
      intro: "I connect perception, planning, control, and deployment in testable robot systems.",
      cards: [
        ["Robot Systems", "ROS2 / ros2_control, hardware interfaces, TF and sensor integration; React + FastAPI front ends with SDK integration.", "Camera assistant ↗"],
        ["Planning & Control", "FK / IK, DLS, weighted optimization IK, quintic interpolation, MOCRAL inverse dynamics, Nav2 and CBF.", "Go2 navigation ↗"],
        ["Perception & Localization", "YOLO11n / ONNX Runtime, three-tier Re-ID candidates, stereo depth, RTAB-Map / VINS-Fusion.", "Person following ↗"],
        ["Embodied & Edge AI", "Teleoperation data, π0.5 / OpenPI / SmolVLA inference, MuJoCo / Isaac Sim validation, Jetson / RK3588 deployment.", "VLA deployment ↗"],
      ],
    },
    skills: {
      eyebrow: "02 / SKILLS", title: "Tech Stack",
      intro: "Core tools and methods, organized by engineering workflow.",
      cards: [
        ["Languages & Systems", "Implementation and real-robot communication", ["Python", "C++", "ROS2 Humble", "ros2_control", "ZMQ", "React", "FastAPI", "WebRTC", "Git"]],
        ["Robot Algorithms", "Kinematics, dynamics, and control", ["FK / IK", "DLS", "Weighted IK (minc / DAQP)", "Quintic spline", "Ruckig", "PD / impedance", "MOCRAL inverse dynamics", "Nav2", "CBF"]],
        ["Perception & Localization", "Detection, tracking, and mapping", ["YOLO11n / YOLOv5n", "ONNX Runtime", "Re-ID", "Stereo / depth", "RTAB-Map", "VINS-Fusion", "TF alignment"]],
        ["Simulation & Deployment", "Validate in simulation, then run on hardware", ["MuJoCo", "Isaac Sim", "ManiSkill", "PyBullet", "ONNX / TensorRT", "Docker", "JetPack", "Jetson Orin / Thor", "RK3588"]],
        ["Embodied AI", "From teleoperation to model execution", ["π0.5 / OpenPI", "SmolVLA", "MemoryVLA / evo-rl", "Data collection & conversion", "Normalization", "Remote inference"]],
        ["R&D Workflow", "Reusable agent collaboration and validation", ["Claude Code / Codex", "Git Worktree", "Interface contracts", "Regression tests", "Reusable skills", "Log & replay validation"]],
      ],
    },
    projects: {
      title: "Selected Projects",
      intro: "Robot applications, motion control, VLA deployment, and edge inference.",
      filters: ["All", "Robot Systems", "Embodied AI", "Edge Deployment"],
      detailLabels: ["My role", "Validation"], note: "System diagram · not project footage",
      items: [
        { role: "星尘智能", title: "Robot Camera Assistant: Full-Stack App & Hardware Execution", summary: "Built a robot camera assistant with React / FastAPI covering live phone preview, subject positioning guidance, camera-move execution, and video return; validated motion flows with MuJoCo and a mock executor, then deployed on RK3588 and integrated with the real robot SDK.", details: ["Built the React workbench and FastAPI backend; UI events map to /api/actions and dispatch through AppLogic. Converted 25-D HDF5 body commands into SDK waypoints with SE(2) relocation against the live chassis pose, and integrated YOLO11n / ONNX same-frame returns, one-person-one-loop matching, and a three-tier Re-ID candidate set.", "MuJoCo + mock regression covered waypoint conversion, action scheduling, stop requests, and final-state return; following V1 passed 109 tests in total. On hardware: four camera moves (push-in, pull-out, lateral, orbit) with 30° / 60° orbit parameters."], diagram: "Camera assistant system diagram" },
        { role: "Unitree Go2", title: "Go2 Visual SLAM, Navigation & CBF Safety", summary: "Integrated visual SLAM and Nav2 on Jetson / Go2 EDU with RealSense D435i, completing mapping, frame alignment, and navigation bring-up; validated CBF dynamic-obstacle safety constraints in Isaac Sim.", details: ["Deployed RTAB-Map with ROS2 TF for RGB-D / IMU mapping, real-time pose estimation, and map / odom / base_link / camera_link alignment; used Nav2 for localization, planning, and path tracking.", "Localization, path execution, and dynamic obstacle avoidance on a real Go2; CBF risk constraints validated in simulation."], diagram: "Go2 navigation system diagram" },
        { role: "GRG Superbrain Robotics", title: "Tiangong Teleoperation & VLA Deployment on Hardware", summary: "Connected the full loop from teleoperation collection, conversion and normalization, training, remote inference, to real-robot execution; used ZMQ to isolate ROS2 from the solver environment and cut solver latency from about 50 ms to under 20 ms.", details: ["Integrated the Tiangong URDF into XRobotToolkit with aligned joint naming and action space; separated binary action push from JPEG image transport; adapted ROS2 topic mapping, action clipping, and field alignment for π0.5 / OpenPI models.", "Collected card-following grasp, paper stamping and handover, and card-swipe tasks (about 100 episodes per task at about 50 Hz); the stamping-and-handover task reached about 80% core-flow completion in 20 initial trials."], diagram: "Embodied AI system diagram" },
        { role: "Jetson Thor", title: "Containerized Embodied AI Deployment on Jetson Thor", summary: "Adapted Docker / CUDA / JetPack on Jetson Thor, deployed SmolVLA inference, and migrated the VR teleoperation pipeline to verify cross-platform consistency.", details: ["Reconciled dependencies and image layers with matched CUDA / JetPack versions; deployed a SmolVLA inference service and migrated the VR teleoperation pipeline across device and transport differences.", "Reuse of inference and teleoperation from Orin to Thor, with cross-platform runtime and stability validation."], diagram: "Thor deployment diagram" },
        { role: "Team Lead", title: "Multimodal Embodied AI System", summary: "Deployed YOLOv5n, Whisper.cpp, and Qwen on Jetson Orin Nano, accelerated detection from PyTorch through ONNX to TensorRT, and connected voice commands, vision, model decisions, and motion.", bullets: ["Integrated a multimodal agent workflow", "Optimized lightweight deployment for robot tasks"] },
      ],
    },
    experience: {
      title: "Recent Experience",
      items: [
        ["Sep 2026 – Present", "星尘智能 · Robotics Full-Stack Algorithm Intern", "Built a robot camera assistant: React / FastAPI workbench, phone WebRTC live preview, YOLO11n positioning guidance, HDF5-to-SDK waypoint conversion with SE(2) relocation; after MuJoCo + mock regression, deployed on RK3588 and integrated with the real robot SDK. Following V1 passed 109 tests."],
        ["Aug 2026 – Sep 2026", "EngineAI · Control Algorithm Intern", "Worked on T800H / T800Pro teleoperation and ROS2 control: a C++ bridge running about 200 Hz control with 500 Hz state feedback, a Python backend for waypoint management and quintic interpolation, MOCRAL inverse-dynamics gravity compensation, and weighted IK retargeting from Pico to the upper body of a 43-DOF robot."],
        ["Apr 2026 – Jul 2026", "GRG Superbrain Robotics · Embodied AI / VLA Intern", "Adapted Tiangong teleoperation, collected data, and deployed π0.5 / OpenPI training and inference; used ZMQ to isolate ROS2 from the solver environment and split action and image transport, cutting solver latency from about 50 ms to under 20 ms."],
        ["Jun 2025 – Sep 2025", "Youibot Robotics · Robotics Systems Intern", "Built VR teleoperation with SO-ARM100 and Meta Quest 3 at ≤50 ms end-effector mapping latency; designed Δpose incremental control, low-pass filtering, and DLS-IK, reducing high-frequency controller jitter by about 40%; integrated the Huacheng controller and built SolidWorks → URDF → ManiSkill models."],
      ],
    },
    outputs: {
      title: "Research & Outputs", intro: "Research, intellectual property, and competition awards.",
      cards: [
        ["Semantic Communications with Zero-Shot Learning for Multi-modal Transmission", "First student author · EI indexed"],
        ["UAV safety control using semantic uncertainty and dynamic safety distance", "Invention patent · first student author"],
        ["Robotic arm trajectory planning and analysis system V1.0", "Software copyright · first student author"],
        ["National third prize in Embedded Chip and System Design · National second prize in the Bochuang competition", "Also provincial first prizes in IoT (Huawei Cup), Siemens Cup intelligent manufacturing, and the national electronics design contest"],
      ],
    },
    education: "Xidian University · M.Eng. in Electronic Information (recommended admission, top 10%) / Lanzhou University of Technology · B.Eng. in Automation (rank 10/229, provincial outstanding graduate)",
    download: {
      eyebrow: "06 / DOCUMENT", title: "Project Overview",
      intro: "A 48-page record of project work, technical design, and real-robot validation.",
      actions: ["Download PDF · 8.6 MB", "Download PPTX · 317 MB"],
      note: "The PPTX includes robot videos and is large. The PDF is recommended.",
    },
    contact: { title: "Robotics Systems Engineering", actions: ["2693075546@qq.com", "GitHub"] },
    footer: "© 2026 Liang Haoqi",
  },
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
};
const setAttribute = (selector, name, value) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(name, value);
};
const setMeta = (selector, value) => setAttribute(selector, "content", value);
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

const applyLanguage = (language) => {
  const selected = translations[language] ? language : "zh";
  const copy = translations[selected];
  document.documentElement.lang = copy.lang;
  document.title = copy.title;
  setMeta('meta[name="description"]', copy.description);
  setMeta('meta[property="og:title"]', copy.title);
  setMeta('meta[property="og:description"]', copy.share);
  setMeta('meta[property="og:locale"]', selected === "zh" ? "zh_CN" : "en_US");
  setMeta('meta[name="twitter:title"]', copy.title);
  setMeta('meta[name="twitter:description"]', copy.share);
  setText(".skip-link", copy.labels.skip);
  setAttribute(".nav", "aria-label", copy.labels.nav);
  setAttribute(".brand", "aria-label", copy.labels.home);
  setAttribute(".nav-toggle", "aria-label", navToggle?.getAttribute("aria-expanded") === "true" ? copy.labels.close : copy.labels.open);
  setAttribute(".language-switch", "aria-label", copy.labels.language);
  setAttribute(".signal-strip", "aria-label", copy.labels.signals);
  setAttribute(".hero-actions", "aria-label", copy.labels.actions);
  setAttribute(".quick-facts", "aria-label", copy.labels.facts);
  setAttribute(".hero-visual", "aria-label", copy.labels.visual);
  setAttribute(".project-toolbar", "aria-label", copy.labels.filter);
  setAttribute(".education-section", "aria-label", copy.labels.education);

  document.querySelectorAll(".nav-links a").forEach((item, index) => { item.textContent = copy.nav[index]; });
  setText(".hero .eyebrow", copy.hero.eyebrow);
  setText("#hero-title", copy.hero.name);
  setText(".hero-position", copy.hero.position);
  setText(".hero-lede", copy.hero.lede);
  document.querySelectorAll(".signal-strip span").forEach((item, index) => { item.textContent = copy.hero.signals[index]; });
  document.querySelectorAll(".hero-actions .button").forEach((item, index) => { item.textContent = copy.hero.actions[index]; });
  document.querySelectorAll(".quick-facts li").forEach((item, index) => {
    setText(`.quick-facts li:nth-child(${index + 1}) strong`, copy.hero.facts[index][0]);
    setText(`.quick-facts li:nth-child(${index + 1}) span`, copy.hero.facts[index][1]);
  });
  setText(".panel-top span:first-child", copy.panel.top);
  document.querySelectorAll(".stack-diagram .node").forEach((item, index) => {
    item.querySelector("span").textContent = copy.panel.nodes[index][0];
    item.querySelector("small").textContent = copy.panel.nodes[index][1];
  });
  document.querySelectorAll(".system-links a").forEach((item, index) => {
    item.querySelector("span").textContent = copy.panel.links[index][0];
    item.querySelector("strong").textContent = copy.panel.links[index][1];
  });
  setText("#focus .eyebrow", copy.focus.eyebrow);
  setText("#focus-title", copy.focus.title);
  setText("#focus .section-heading p:not(.eyebrow)", copy.focus.intro);
  document.querySelectorAll(".focus-grid article").forEach((item, index) => {
    item.querySelector("h3").textContent = copy.focus.cards[index][0];
    item.querySelector("p").textContent = copy.focus.cards[index][1];
    item.querySelector("a").textContent = copy.focus.cards[index][2];
  });
  setText("#skills .eyebrow", copy.skills.eyebrow);
  setText("#skills-title", copy.skills.title);
  setText("#skills .section-heading p:not(.eyebrow)", copy.skills.intro);
  document.querySelectorAll(".skills-card").forEach((item, index) => {
    const card = copy.skills.cards[index];
    if (!card) return;
    item.querySelector("h3").textContent = card[0];
    item.querySelector("p").textContent = card[1];
    item.querySelectorAll(".skills-tags li").forEach((tag, tagIndex) => { tag.textContent = card[2][tagIndex]; });
  });
  setText("#experience-title", copy.experience.title);
  document.querySelectorAll(".timeline-item").forEach((item, index) => {
    const entry = copy.experience.items[index];
    if (!entry) return;
    item.querySelector("time").textContent = entry[0];
    item.querySelector("h3").textContent = entry[1];
    item.querySelector("p").textContent = entry[2];
  });
  setText("#projects-title", copy.projects.title);
  setText("#projects .section-heading p:not(.eyebrow)", copy.projects.intro);
  document.querySelectorAll(".filter").forEach((item, index) => { item.textContent = copy.projects.filters[index]; });
  document.querySelectorAll(".project-card").forEach((item, index) => {
    const project = copy.projects.items[index];
    if (!project) return;
    item.querySelector(".card-top strong").textContent = project.role;
    item.querySelector("h3").textContent = project.title;
    const summary = item.querySelector("p");
    if (summary) summary.textContent = project.summary;
    item.querySelectorAll(".project-details div").forEach((detail, detailIndex) => {
      detail.querySelector("dt").textContent = copy.projects.detailLabels[detailIndex];
      detail.querySelector("dd").textContent = project.details[detailIndex];
    });
    const diagram = item.querySelector(".project-diagram");
    if (diagram) diagram.setAttribute("aria-label", project.diagram);
    const note = item.querySelector(".diagram-note");
    if (note) note.textContent = copy.projects.note;
    item.querySelectorAll("li").forEach((bullet, bulletIndex) => {
      if (project.bullets && project.bullets[bulletIndex]) bullet.textContent = project.bullets[bulletIndex];
    });
  });
  setText("#outputs-title", copy.outputs.title);
  setText(".output-intro", copy.outputs.intro);
  document.querySelectorAll(".outputs-grid article").forEach((item, index) => {
    item.querySelector("h3").textContent = copy.outputs.cards[index][0];
    item.querySelector("p").textContent = copy.outputs.cards[index][1];
  });
  setText(".education-inner p", copy.education);
  setText("#download .eyebrow", copy.download.eyebrow);
  setText("#download-title", copy.download.title);
  setText(".download-intro", copy.download.intro);
  document.querySelectorAll(".download-actions .button").forEach((item, index) => { item.textContent = copy.download.actions[index]; });
  setText(".download-note", copy.download.note);
  setText("#contact-title", copy.contact.title);
  document.querySelectorAll(".contact-actions .button").forEach((item, index) => { item.textContent = copy.contact.actions[index]; });
  setText(".site-footer span", copy.footer);
  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  try { localStorage.setItem("preferredLanguage", selected); } catch { /* Storage can be unavailable. */ }
};

let preferredLanguage;
try { preferredLanguage = localStorage.getItem("preferredLanguage"); } catch { /* Use browser language. */ }
applyLanguage(preferredLanguage || (navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en"));

document.querySelector(".language-switch")?.addEventListener("click", (event) => {
  const button = event.target instanceof Element ? event.target.closest(".lang-button") : null;
  if (button) applyLanguage(button.dataset.lang);
});

navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
  const language = document.documentElement.lang === "en" ? "en" : "zh";
  navToggle.setAttribute("aria-label", translations[language].labels[open ? "close" : "open"]);
});
navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".project-card")];
filters.forEach((filter) => filter.addEventListener("click", () => {
  const selected = filter.dataset.filter;
  filters.forEach((item) => {
    const active = item === filter;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  cards.forEach((card) => {
    card.classList.toggle("is-hidden", selected !== "all" && !(card.dataset.tags || "").split(" ").includes(selected));
  });
}));

if ("IntersectionObserver" in window) {
  const links = [...document.querySelectorAll(".nav-links a")];
  const observer = new IntersectionObserver((entries) => {
    const active = entries.find((entry) => entry.isIntersecting);
    if (active) links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${active.target.id}`));
  }, { rootMargin: "-20% 0px -65% 0px" });
  links.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}
