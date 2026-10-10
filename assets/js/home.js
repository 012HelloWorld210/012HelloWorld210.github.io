const translations = {
  zh: {
    lang: "zh-CN",
    title: "梁浩琪 | 机器人系统、控制与规划",
    description: "梁浩琪的机器人系统工程作品集：感知、规划、控制、ROS2 真机集成与具身智能部署。",
    share: "从感知、规划到控制，让算法在真实机器人上形成闭环。",
    labels: {
      skip: "跳到正文", nav: "主导航", home: "返回首页", open: "打开导航", close: "关闭导航",
      language: "语言选择", signals: "能力关键词", actions: "主要操作", facts: "个人概览",
      visual: "机器人系统闭环示意图", filter: "项目筛选", education: "教育背景",
    },
    nav: ["定位", "项目", "经历", "成果", "联系"],
    hero: {
      eyebrow: "机器人软件 / 系统工程", name: "梁浩琪",
      lede: "让感知、规划、控制与模型真正运行在机器人上，并形成可验证的真机闭环。",
      signals: ["ROS2", "Planning & Control", "Embodied AI", "Robot Deployment"],
      actions: ["查看项目", "GitHub"],
      facts: [["硕士", "西安电子科技大学 · 电子信息"], ["机器人系统", "控制、规划与系统集成"], ["真实机器人", "从算法到执行与反馈"]],
    },
    panel: {
      top: "FROM PERCEPTION TO REAL ROBOT",
      nodes: [["Perception", "Tracking / RGB-D / SLAM"], ["Planning", "Nav2 / Safety Constraints"], ["Control & Robot", "ROS2 / Chassis / Feedback"]],
      links: [["Perception →", "目标跟随"], ["Planning →", "Go2 导航"], ["Control →", "真机控制"], ["Embodied AI →", "VLA 部署"]],
    },
    focus: {
      eyebrow: "01 / SYSTEM CAPABILITIES", title: "从感知到真机，能力要有项目对应。",
      intro: "以机器人系统为主轴，把感知、规划、控制与部署连接成可调试的工程闭环。",
      cards: [
        ["机器人系统", "ROS2、ros2_control、硬件接口、TF 与传感器集成。", "目标跟随 ↗"],
        ["控制与规划", "IK / DLS、PD / 阻抗控制、Nav2 路径跟踪与 CBF 安全约束。", "Go2 导航 ↗"],
        ["感知与定位", "目标检测、Tracking、Re-ID、RGB-D 与视觉 SLAM。", "目标跟随 ↗"],
        ["具身智能与边缘端", "遥操作、数据采集、VLA 推理与 Jetson 平台部署。", "VLA 部署 ↗"],
      ],
    },
    experience: {
      title: "最新经历",
      items: [
        ["2026.09 — 2026.10", "星尘智能 · 机器人视觉跟随 App 开发", "开发以视觉为核心的指定人物跟随 App，接入 YOLO 检测、目标锁定、Re-ID 特征管理、双目 / 深度定位、底盘控制与目标丢失停车；完成后端逻辑和 Vision UI，初步验证导航跟随，现聚焦真机数据采集、阈值标定与稳定性优化。"],
        ["2026.08 — 2026.09", "众擎机器人 · 人形机器人控制算法实习", "参与人形机器人 ROS2 控制系统与真机软件开发，完成 C++ 关节空间示教回放、多型号适配和控制链路调试，并参与硬件接口与控制模块的真机验证。"],
        ["2026.04 — 2026.07", "广电运通·超智机器人 · 具身智能 / VLA 部署实习", "打通遥操作采集、数据转换、模型训练、远程推理与真机执行链路；用 ZMQ 隔离 ROS2 与训练环境，优化通信和图像传输。"],
        ["2025.06 — 2025.09", "优艾智合机器人 · 机器人系统实习", "构建 VR 机械臂遥操作系统，将 Meta Quest 3 控制器位姿映射到机械臂末端，对接工业控制器并准备 ManiSkill 仿真模型。"],
      ],
    },
    projects: {
      title: "把完整链路做成可运行的系统。",
      intro: "围绕真实机器人链路组织项目：目标感知、定位导航、控制执行与具身智能部署。",
      filters: ["全部", "机器人系统", "具身智能", "边缘部署"],
      detailLabels: ["负责内容", "验证重点"], note: "系统示意 · 非实拍",
      items: [
        { role: "星尘智能", title: "指定人物识别与机器人跟随", summary: "在星尘智能机器人平台开发指定人物跟随 App，串联 YOLO 检测、目标锁定、双目 / 深度定位、底盘控制与目标丢失停车。", details: ["接入 Re-ID 特征管理与诊断链路、Vision UI、机器人 SDK 底盘控制，并初步验证 Navigation Follow。", "正在采集真机数据、标定相似度阈值，优化跨视角身份保持、遮挡恢复及跟随稳定性。"], diagram: "人物跟随系统流程图" },
        { role: "Unitree Go2", title: "Go2 视觉 SLAM、导航与安全控制", summary: "在 Jetson 与 RealSense D435i 平台验证视觉惯性定位、稠密建图和动态障碍场景下的安全导航链路。", details: ["部署 VINS-Fusion / RTAB-Map，完成 TF 坐标对齐，并集成 Nav2 与 CBF 安全约束。", "Go2 真机上的定位、路径执行与动态避障。"], diagram: "Go2 导航系统流程图" },
        { role: "遥操作 · 真机执行", title: "具身智能与 VLA 真机部署", summary: "将遥操作采集、数据转换、模型训练与推理、机器人动作执行接成可迭代的工程流程。", details: ["对接 ROS2 与训练环境，优化通信和图像链路，并适配 Jetson 边缘端部署。", "遥操作到模型推理、再到真机执行的闭环。"], diagram: "具身智能系统流程图" },
        { role: "队长", title: "多模态具身智能系统开发", summary: "在 Jetson Orin Nano 上部署 YOLOv5n、Whisper.cpp 与 Qwen，完成 PyTorch 到 ONNX 到 TensorRT 的目标检测加速，打通语音指令、视觉感知、大模型决策和运动执行。", bullets: ["端到端多模态 Agent 联调", "面向机器人任务的轻量化边缘部署"] },
      ],
    },
    outputs: {
      title: "研究与成果", intro: "论文、知识产权与竞赛成果。",
      cards: [
        ["Semantic Communications with Zero-Shot Learning for Multi-modal Transmission", "学生一作 · EI 检索"],
        ["基于语义不确定性与动态安全距离的无人机安全控制方法", "发明专利"],
        ["机械臂运动轨迹规划分析系统 V1.0", "软件著作权"],
        ["嵌入式芯片与系统设计竞赛国家级三等奖 · “博创杯”国家级二等奖", "另获物联网设计、智能制造与电子设计竞赛省一等奖"],
      ],
    },
    education: "西安电子科技大学 · 电子信息硕士 / 兰州理工大学 · 自动化本科",
    contact: { title: "一起把机器人系统做成可运行的现实。", actions: ["2693075546@qq.com", "GitHub"] },
    footer: "© 2026 梁浩琪",
  },
  en: {
    lang: "en", title: "Liang Haoqi | Robotics Systems, Planning & Control",
    description: "Liang Haoqi's robotics engineering portfolio: perception, planning, control, ROS2 integration on real robots, and embodied AI deployment.",
    share: "From perception to control: building closed-loop systems on real robots.",
    labels: {
      skip: "Skip to content", nav: "Primary navigation", home: "Back to home", open: "Open navigation", close: "Close navigation",
      language: "Language selection", signals: "Focus areas", actions: "Primary actions", facts: "Profile overview",
      visual: "Closed-loop robotics system diagram", filter: "Project filters", education: "Education",
    },
    nav: ["Focus", "Projects", "Experience", "Outputs", "Contact"],
    hero: {
      eyebrow: "Robot Software / Systems Engineering", name: "Liang Haoqi",
      lede: "I bring perception, planning, control, and models onto real robots, then close the loop with feedback from hardware.",
      signals: ["ROS2", "Planning & Control", "Embodied AI", "Robot Deployment"],
      actions: ["View Projects", "GitHub"],
      facts: [["M.Eng.", "Xidian University · Electronic Information"], ["Robot Systems", "Control, planning, and integration"], ["Real Robots", "From algorithms to action and feedback"]],
    },
    panel: {
      top: "FROM PERCEPTION TO REAL ROBOT",
      nodes: [["Perception", "Tracking / RGB-D / SLAM"], ["Planning", "Nav2 / Safety Constraints"], ["Control & Robot", "ROS2 / Chassis / Feedback"]],
      links: [["Perception →", "Robot following"], ["Planning →", "Go2 navigation"], ["Control →", "Hardware control"], ["Embodied AI →", "VLA deployment"]],
    },
    focus: {
      eyebrow: "01 / SYSTEM CAPABILITIES", title: "Capabilities connected to real projects.",
      intro: "Robot systems are my core focus. I connect perception, planning, control, and deployment into a system that can be tested on hardware.",
      cards: [
        ["Robot Systems", "ROS2, ros2_control, hardware interfaces, TF, and sensor integration.", "Robot following ↗"],
        ["Planning & Control", "IK / DLS, PD / impedance control, Nav2 path tracking, and CBF safety constraints.", "Go2 navigation ↗"],
        ["Perception & Localization", "Detection, tracking, Re-ID, RGB-D, and visual SLAM.", "Robot following ↗"],
        ["Embodied & Edge AI", "Teleoperation, data collection, VLA inference, and Jetson deployment.", "VLA deployment ↗"],
      ],
    },
    experience: {
      title: "Recent Experience",
      items: [
        ["Sep 2026 — Oct 2026", "星尘智能 · Robot Vision & Following App", "Developed a vision-based app for following a selected person, integrating YOLO detection, target lock, Re-ID feature management, stereo/depth positioning, chassis control, and safe stopping on target loss. Completed backend logic and the Vision UI, initially validated navigation following, and now focus on real-robot data collection, threshold calibration, and stability."],
        ["Aug 2026 — Sep 2026", "EngineAI · Humanoid Robot Control Intern", "Developed ROS2 control software for humanoid robots, including C++ joint-space teaching and replay, robot model adaptation, and control pipeline debugging. Helped validate hardware interfaces and control modules on real robots."],
        ["Apr 2026 — Jul 2026", "GRG Banking Superbrain Robotics · Embodied AI / VLA Intern", "Connected teleoperation data collection, data conversion, model training, remote inference, and robot execution. Used ZMQ to separate ROS2 from the training environment and improved communication and image transport."],
        ["Jun 2025 — Sep 2025", "Youibot Robotics · Robotics Systems Intern", "Built a VR arm teleoperation system that mapped Meta Quest 3 controller poses to the robot end effector, integrated industrial controllers, and prepared ManiSkill simulation models."],
      ],
    },
    projects: {
      title: "Engineering the complete robot loop.",
      intro: "Projects across the real robot pipeline: target perception, localization and navigation, control execution, and embodied AI deployment.",
      filters: ["All", "Robot Systems", "Embodied AI", "Edge Deployment"],
      detailLabels: ["My role", "Validation"], note: "System diagram · not project footage",
      items: [
        { role: "星尘智能", title: "Selected-Person Recognition & Robot Following", summary: "Developed an app on the 星尘智能 robot platform for following a selected person, connecting YOLO detection, target lock, stereo/depth positioning, chassis control, and safe stopping on target loss.", details: ["Integrated Re-ID feature management and diagnostics, the Vision UI, and robot SDK chassis control; completed initial Navigation Follow validation.", "Collecting real-robot data and calibrating similarity thresholds while improving cross-view identity retention, occlusion recovery, and following stability."], diagram: "Person-following system diagram" },
        { role: "Unitree Go2", title: "Go2 Visual SLAM, Navigation & Safety", summary: "Validated visual-inertial localization, dense mapping, and safe navigation around dynamic obstacles with Jetson and RealSense D435i.", details: ["Deployed VINS-Fusion / RTAB-Map, aligned TF frames, and integrated Nav2 with CBF safety constraints.", "Localization, path execution, and dynamic obstacle avoidance on a real Go2."], diagram: "Go2 navigation system diagram" },
        { role: "Teleoperation · Robot execution", title: "Embodied AI & VLA Deployment", summary: "Connected teleoperation data collection, conversion, model training and inference, and robot actions into an iterative workflow.", details: ["Connected ROS2 with the training environment, improved communication and image transport, and adapted Jetson edge deployment.", "The loop from teleoperation to inference and real robot execution."], diagram: "Embodied AI system diagram" },
        { role: "Team Lead", title: "Multimodal Embodied AI System", summary: "Deployed YOLOv5n, Whisper.cpp, and Qwen on Jetson Orin Nano, accelerated detection from PyTorch through ONNX to TensorRT, and connected voice commands, vision, model decisions, and motion.", bullets: ["Integrated a multimodal agent workflow", "Optimized lightweight deployment for robot tasks"] },
      ],
    },
    outputs: {
      title: "Research & Outputs", intro: "Research, intellectual property, and competition results.",
      cards: [
        ["Semantic Communications with Zero-Shot Learning for Multi-modal Transmission", "First student author · EI indexed"],
        ["UAV safety control using semantic uncertainty and dynamic safety distance", "Invention patent"],
        ["Robotic arm trajectory planning and analysis system V1.0", "Software copyright"],
        ["National third prize in Embedded Chip and System Design · National second prize in the Bochuang competition", "Also provincial first prizes in IoT, intelligent manufacturing, and electronic design"],
      ],
    },
    education: "Xidian University · M.Eng. in Electronic Information / Lanzhou University of Technology · B.Eng. in Automation",
    contact: { title: "Let's build robot systems that work in the real world.", actions: ["2693075546@qq.com", "GitHub"] },
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
  setText("#experience-title", copy.experience.title);
  document.querySelectorAll(".timeline-item").forEach((item, index) => {
    item.querySelector("time").textContent = copy.experience.items[index][0];
    item.querySelector("h3").textContent = copy.experience.items[index][1];
    item.querySelector("p").textContent = copy.experience.items[index][2];
  });
  setText("#projects-title", copy.projects.title);
  setText("#projects .section-heading p:not(.eyebrow)", copy.projects.intro);
  document.querySelectorAll(".filter").forEach((item, index) => { item.textContent = copy.projects.filters[index]; });
  document.querySelectorAll(".project-card").forEach((item, index) => {
    const project = copy.projects.items[index];
    item.querySelector(".card-top strong").textContent = project.role;
    item.querySelector("h3").textContent = project.title;
    item.querySelector("p").textContent = project.summary;
    item.querySelectorAll(".project-details div").forEach((detail, detailIndex) => {
      detail.querySelector("dt").textContent = copy.projects.detailLabels[detailIndex];
      detail.querySelector("dd").textContent = project.details[detailIndex];
    });
    const diagram = item.querySelector(".project-diagram");
    if (diagram) diagram.setAttribute("aria-label", project.diagram);
    const note = item.querySelector(".diagram-note");
    if (note) note.textContent = copy.projects.note;
    item.querySelectorAll("li").forEach((bullet, bulletIndex) => { bullet.textContent = project.bullets[bulletIndex]; });
  });
  setText("#outputs-title", copy.outputs.title);
  setText(".output-intro", copy.outputs.intro);
  document.querySelectorAll(".outputs-grid article").forEach((item, index) => {
    item.querySelector("h3").textContent = copy.outputs.cards[index][0];
    item.querySelector("p").textContent = copy.outputs.cards[index][1];
  });
  setText(".education-inner p", copy.education);
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
