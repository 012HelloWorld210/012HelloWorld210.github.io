const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const translations = {
  zh: {
    lang: "zh-CN",
    title: "梁浩琪 | 机器人系统与具身智能工程",
    description: "梁浩琪的个人主页，聚焦机器人系统、控制规划、SLAM/Nav2、VLA 真机闭环、遥操作与 Jetson 边缘部署。",
    ogDescription: "机器人系统、控制规划、SLAM/Nav2、VLA 真机闭环与 Jetson 边缘部署。",
    labels: {
      skip: "跳到正文",
      nav: "主导航",
      brand: "返回首页",
      menu: "打开导航",
      language: "语言选择",
      signal: "能力关键词",
      heroActions: "主要操作",
      quickFacts: "个人概览",
      heroVisual: "机器人系统闭环示意",
      projectToolbar: "项目筛选",
      techKeywords: "技术关键词",
    },
    nav: ["定位", "经历", "项目", "成果", "联系"],
    hero: {
      eyebrow: "Robotics Systems · Embodied AI · Control",
      name: "梁浩琪",
      lede: "面向真实机器人的系统工程与算法落地：从 ROS2 控制链路、SLAM/Nav2、遥操作数据采集，到 VLA 训练推理与 Jetson 边缘部署。",
      signals: ["ROS2 Control", "VLA Closed Loop", "SLAM / Nav2", "Jetson Edge AI"],
      actions: ["查看项目", "邮件联系"],
      facts: [
        ["硕士", "西安电子科技大学 · 电子信息"],
        ["前 10%", "推免 · 特等奖学金 · 校一等奖学金"],
        ["广州 / 西安", "机器人系统、控制规划与具身智能"],
      ],
    },
    panel: {
      top: "Closed-loop robotics stack",
      nodes: [
        ["Perception", "RGB-D / IMU / SLAM"],
        ["Planning", "Nav2 / CBF / IK"],
        ["Execution", "ROS2 / Control / Jetson"],
      ],
      metrics: [
        ["VLA inference", "OpenPI · pi0.5"],
        ["Teleop latency", "< 20 ms"],
        ["Data loop", "50 Hz"],
        ["Robot platforms", "Go2 · Arm · Humanoid"],
      ],
    },
    focus: {
      eyebrow: "Positioning",
      title: "我更关注把算法接进真实机器人系统",
      intro: "目标是成为机器人系统与控制规划方向的工程型研究者，能同时理解感知、规划、控制、通信、数据和部署链路。",
      cards: [
        ["机器人系统", "ROS2、ros2_control、硬件接口、状态通信、真机链路调试，以及多型号机器人适配。"],
        ["控制与规划", "IK / DLS、PD / 阻抗控制、Nav2 路径跟踪、CBF 风险约束与动态避障验证。"],
        ["VLA 真机闭环", "遥操作适配、数据采集、格式转换、归一化、训练推理、远程执行与数据集迭代。"],
        ["边缘部署", "Jetson Orin / Thor、Docker、CUDA / JetPack、TensorRT 加速与跨平台迁移。"],
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "最新经历",
      items: [
        ["2026.08 - 2026.09", "众擎机器人 · 人形机器人控制算法实习", "参与人形机器人 ROS2 控制系统与真机软件开发，基于 C++ 完成关节空间示教回放、多型号机器人适配及控制链路调试；参与 ros2_control、硬件接口、阻抗 / PD 控制与动力学模块的真机验证。"],
        ["2026.04 - 2026.07", "广电运通·超智机器人 · 具身智能 / VLA 部署实习", "打通“遥操作控制、数据采集、数据转换归一化、模型训练、远程推理、真机执行”工程链路；通过 ZMQ 隔离 ROS2 与训练环境，优化通信与图像链路，将遥操作解算延迟控制在 20ms 以内。"],
        ["2025.06 - 2025.09", "优艾智合机器人 · 机器人系统实习", "构建 VR 机械臂遥操作系统，完成 sim-to-real 闭环；基于 SO-ARM100、A-Frame 与 Meta Quest 3 实现控制器位姿到机械臂末端实时映射，并对接工业控制器和 ManiSkill 仿真建模流程。"],
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "项目展示",
      intro: "按真实机器人链路组织项目，从环境感知到控制执行，再到多模态决策与部署基础设施。",
      filters: ["全部", "机器人系统", "具身智能", "边缘部署"],
      items: [
        {
          time: "2024.03 - 至今",
          role: "算法负责人",
          title: "Unitree Go2 视觉 SLAM 与 CBF 风险建模",
          body: "在 Jetson 平台部署 VINS-Fusion 与 RTAB-Map，基于 RealSense D435i 完成 RGB-D / IMU 融合定位与稠密建图验证；在 Unitree Go2 集成视觉惯性 SLAM、Nav2 与 CBF 安全约束。",
          bullets: ["完成 map / odom / base_link / camera_link 坐标系对齐", "验证动态障碍物场景下的安全避障策略"],
        },
        {
          time: "2025.12 - 至今",
          role: "核心开发",
          title: "Jetson Thor 平台具身智能系统部署",
          body: "完成 Docker / CUDA / JetPack 环境适配与容器化迁移，验证 SmolVLA 等模型推理流程，并将 VR Teleoperation 系统迁移至新一代边缘平台。",
          bullets: ["跨平台迁移 VLA 推理与遥操作控制链路", "沉淀边缘端具身智能部署基础设施"],
        },
        {
          time: "2025.06",
          role: "队长",
          title: "多模态具身智能系统开发",
          body: "在 Jetson Orin Nano 上部署 YOLOv5n、Whisper.cpp 与 Qwen，完成 PyTorch 到 ONNX 到 TensorRT 的目标检测加速，打通语音指令、视觉感知、大模型决策和运动执行。",
          bullets: ["端到端多模态 Agent 联调", "面向机器人任务的轻量化边缘部署"],
        },
      ],
    },
    outputs: {
      eyebrow: "Outputs",
      title: "成果与能力栈",
      cards: [
        ["成果产出", "学生一作 EI 检索论文《Semantic Communications with Zero-Shot Learning for Multi-modal Transmission》；发明专利《基于语义不确定性与动态安全距离的无人机安全控制方法》；软著《机械臂运动轨迹规划分析系统 V1.0》。"],
        ["竞赛", "嵌入式芯片与系统设计竞赛国家级三等奖，“博创杯”嵌入式人工智能设计大赛国家级二等奖，物联网设计竞赛、智能制造挑战赛、电子设计竞赛省一等奖。"],
        ["技术栈", ""],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "欢迎交流机器人系统、控制规划和具身智能落地",
      actions: ["2693075546@qq.com", "GitHub"],
    },
    footer: "© 2026 梁浩琪",
  },
  en: {
    lang: "en",
    title: "Liang Haoqi | Robotics Systems and Embodied AI",
    description: "Liang Haoqi's portfolio, focused on robotics systems, control and planning, SLAM/Nav2, VLA closed-loop deployment, teleoperation, and Jetson edge AI.",
    ogDescription: "Robotics systems, control and planning, SLAM/Nav2, VLA closed-loop deployment, and Jetson edge AI.",
    labels: {
      skip: "Skip to content",
      nav: "Primary navigation",
      brand: "Back to home",
      menu: "Open navigation",
      language: "Language selection",
      signal: "Capability keywords",
      heroActions: "Primary actions",
      quickFacts: "Profile overview",
      heroVisual: "Closed-loop robotics system diagram",
      projectToolbar: "Project filters",
      techKeywords: "Technical keywords",
    },
    nav: ["Focus", "Experience", "Projects", "Outputs", "Contact"],
    hero: {
      eyebrow: "Robotics Systems · Embodied AI · Control",
      name: "Liang Haoqi",
      lede: "I build real-robot systems that connect algorithms with hardware: ROS2 control pipelines, SLAM/Nav2, teleoperation data collection, VLA training and inference, and Jetson edge deployment.",
      signals: ["ROS2 Control", "VLA Closed Loop", "SLAM / Nav2", "Jetson Edge AI"],
      actions: ["View Projects", "Email Me"],
      facts: [
        ["M.Eng.", "Xidian University · Electronic Information"],
        ["Top 10%", "Recommended admission · Top entrance scholarship · First-class scholarship"],
        ["Guangzhou / Xi'an", "Robotics systems, control planning, and embodied AI"],
      ],
    },
    panel: {
      top: "Closed-loop robotics stack",
      nodes: [
        ["Perception", "RGB-D / IMU / SLAM"],
        ["Planning", "Nav2 / CBF / IK"],
        ["Execution", "ROS2 / Control / Jetson"],
      ],
      metrics: [
        ["VLA inference", "OpenPI · pi0.5"],
        ["Teleop latency", "< 20 ms"],
        ["Data loop", "50 Hz"],
        ["Robot platforms", "Go2 · Arm · Humanoid"],
      ],
    },
    focus: {
      eyebrow: "Positioning",
      title: "I focus on bringing algorithms into real robot systems",
      intro: "My direction is robotics systems and control/planning: perception, planning, control, communication, data loops, and deployment all need to work together on hardware.",
      cards: [
        ["Robotics Systems", "ROS2, ros2_control, hardware interfaces, state communication, real-robot debugging, and multi-platform adaptation."],
        ["Control and Planning", "IK / DLS, PD / impedance control, Nav2 tracking, CBF risk constraints, and dynamic obstacle avoidance validation."],
        ["VLA Closed Loop", "Teleoperation adaptation, data collection, format conversion, normalization, training, remote inference, execution, and dataset iteration."],
        ["Edge Deployment", "Jetson Orin / Thor, Docker, CUDA / JetPack, TensorRT acceleration, and cross-platform migration."],
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Recent Experience",
      items: [
        ["Aug 2026 - Sep 2026", "EngineAI · Humanoid Robot Control Algorithm Intern", "Worked on ROS2 control systems and real-robot software for humanoid robots. Built C++ joint-space teaching/replay, adapted multiple robot models, debugged control pipelines, and validated ros2_control, hardware interfaces, impedance / PD control, and dynamics modules on hardware."],
        ["Apr 2026 - Jul 2026", "GRG Banking Superbrain Robotics · Embodied AI / VLA Deployment Intern", "Connected the full engineering loop from teleoperation control, data collection, conversion and normalization, model training, remote inference, to real-robot execution. Used ZMQ to isolate ROS2 and training environments, optimized communication and image transport, and reduced teleoperation solving latency to under 20 ms."],
        ["Jun 2025 - Sep 2025", "Youibot Robotics · Robotics Systems Intern", "Built a VR robotic-arm teleoperation system and completed a sim-to-real loop. Mapped Meta Quest 3 controller poses to the arm end-effector with SO-ARM100 and A-Frame, integrated industrial controllers, and prepared ManiSkill simulation models."],
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected Projects",
      intro: "Projects are organized around the real robot pipeline: perception, planning, control execution, multimodal decision-making, and deployment infrastructure.",
      filters: ["All", "Robotics Systems", "Embodied AI", "Edge Deployment"],
      items: [
        {
          time: "Mar 2024 - Present",
          role: "Algorithm Lead",
          title: "Visual SLAM and CBF Risk Modeling on Unitree Go2",
          body: "Deployed VINS-Fusion and RTAB-Map on Jetson, validated RGB-D / IMU localization and dense mapping with RealSense D435i, and integrated visual-inertial SLAM, Nav2, and CBF safety constraints on Unitree Go2.",
          bullets: ["Aligned map / odom / base_link / camera_link TF frames", "Validated safe avoidance under dynamic obstacle scenarios"],
        },
        {
          time: "Dec 2025 - Present",
          role: "Core Developer",
          title: "Embodied AI Deployment on Jetson Thor",
          body: "Adapted Docker / CUDA / JetPack environments, migrated containers, validated SmolVLA-style inference flows, and ported the VR Teleoperation stack to the new edge platform.",
          bullets: ["Migrated VLA inference and teleoperation control pipelines across platforms", "Built infrastructure for edge-side embodied AI deployment"],
        },
        {
          time: "Jun 2025",
          role: "Team Lead",
          title: "Multimodal Embodied AI System",
          body: "Deployed YOLOv5n, Whisper.cpp, and Qwen on Jetson Orin Nano, accelerated detection through PyTorch to ONNX to TensorRT, and connected voice commands, visual perception, LLM decisions, and motion execution.",
          bullets: ["Integrated an end-to-end multimodal agent workflow", "Optimized lightweight deployment for robot tasks"],
        },
      ],
    },
    outputs: {
      eyebrow: "Outputs",
      title: "Outputs and Stack",
      cards: [
        ["Research and IP", "First-student-author EI-indexed paper: Semantic Communications with Zero-Shot Learning for Multi-modal Transmission; invention patent on UAV safe control with semantic uncertainty and dynamic safety distance; software copyright for a robotic-arm trajectory planning analysis system."],
        ["Competitions", "National third prize in Embedded Chip and System Design, national second prize in the Bochuang Embedded AI Design Competition, and provincial first prizes in IoT design, intelligent manufacturing, and electronic design competitions."],
        ["Technical Stack", ""],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to conversations on robotics systems, control planning, and embodied AI deployment",
      actions: ["2693075546@qq.com", "GitHub"],
    },
    footer: "© 2026 Liang Haoqi",
  },
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const setAttribute = (selector, attribute, value) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

const setMeta = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("preferredLanguage");
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem("preferredLanguage", language);
  } catch {
    // Language switching still works for the current page when storage is blocked.
  }
};

const applyLanguage = (language) => {
  const copy = translations[language] || translations.zh;

  document.documentElement.lang = copy.lang;
  document.title = copy.title;
  setMeta('meta[name="description"]', copy.description);
  setMeta('meta[property="og:title"]', copy.title);
  setMeta('meta[property="og:description"]', copy.ogDescription);

  setText(".skip-link", copy.labels.skip);
  setAttribute(".nav", "aria-label", copy.labels.nav);
  setAttribute(".brand", "aria-label", copy.labels.brand);
  setAttribute(".nav-toggle", "aria-label", copy.labels.menu);
  setAttribute(".language-switch", "aria-label", copy.labels.language);
  setAttribute(".signal-strip", "aria-label", copy.labels.signal);
  setAttribute(".hero-actions", "aria-label", copy.labels.heroActions);
  setAttribute(".quick-facts", "aria-label", copy.labels.quickFacts);
  setAttribute(".hero-visual", "aria-label", copy.labels.heroVisual);
  setAttribute(".project-toolbar", "aria-label", copy.labels.projectToolbar);
  setAttribute(".tag-cloud", "aria-label", copy.labels.techKeywords);

  document.querySelectorAll(".nav-links a").forEach((link, index) => {
    link.textContent = copy.nav[index] || link.textContent;
  });

  setText(".hero .eyebrow", copy.hero.eyebrow);
  setText("#hero-title", copy.hero.name);
  setText(".hero-lede", copy.hero.lede);
  document.querySelectorAll(".signal-strip span").forEach((item, index) => {
    item.textContent = copy.hero.signals[index] || item.textContent;
  });
  document.querySelectorAll(".hero-actions .button").forEach((button, index) => {
    button.textContent = copy.hero.actions[index] || button.textContent;
  });
  document.querySelectorAll(".quick-facts li").forEach((item, index) => {
    const fact = copy.hero.facts[index];
    if (!fact) return;
    item.querySelector("strong").textContent = fact[0];
    item.querySelector("span").textContent = fact[1];
  });

  setText(".panel-top span:first-child", copy.panel.top);
  document.querySelectorAll(".stack-diagram .node").forEach((node, index) => {
    const item = copy.panel.nodes[index];
    if (!item) return;
    node.innerHTML = `${item[0]}<br><small>${item[1]}</small>`;
  });
  document.querySelectorAll(".metrics-grid div").forEach((metric, index) => {
    const item = copy.panel.metrics[index];
    if (!item) return;
    metric.querySelector("span").textContent = item[0];
    metric.querySelector("strong").textContent = item[1];
  });

  setText("#focus .eyebrow", copy.focus.eyebrow);
  setText("#focus-title", copy.focus.title);
  setText("#focus .section-heading p:not(.eyebrow)", copy.focus.intro);
  document.querySelectorAll(".focus-grid article").forEach((card, index) => {
    const item = copy.focus.cards[index];
    if (!item) return;
    card.querySelector("h3").textContent = item[0];
    card.querySelector("p").textContent = item[1];
  });

  setText("#experience .eyebrow", copy.experience.eyebrow);
  setText("#experience-title", copy.experience.title);
  document.querySelectorAll(".timeline-item").forEach((item, index) => {
    const entry = copy.experience.items[index];
    if (!entry) return;
    item.querySelector("time").textContent = entry[0];
    item.querySelector("h3").textContent = entry[1];
    item.querySelector("p").textContent = entry[2];
  });

  setText("#projects .eyebrow", copy.projects.eyebrow);
  setText("#projects-title", copy.projects.title);
  setText("#projects .section-heading p:not(.eyebrow)", copy.projects.intro);
  document.querySelectorAll(".filter").forEach((button, index) => {
    button.textContent = copy.projects.filters[index] || button.textContent;
  });
  document.querySelectorAll(".project-card").forEach((card, index) => {
    const project = copy.projects.items[index];
    if (!project) return;
    card.querySelector(".card-top span").textContent = project.time;
    card.querySelector(".card-top strong").textContent = project.role;
    card.querySelector("h3").textContent = project.title;
    card.querySelector("p").textContent = project.body;
    card.querySelectorAll("li").forEach((bullet, bulletIndex) => {
      bullet.textContent = project.bullets[bulletIndex] || bullet.textContent;
    });
  });

  setText("#outputs .eyebrow", copy.outputs.eyebrow);
  setText("#outputs-title", copy.outputs.title);
  document.querySelectorAll(".outputs-grid article").forEach((card, index) => {
    const item = copy.outputs.cards[index];
    if (!item) return;
    card.querySelector("h3").textContent = item[0];
    const paragraph = card.querySelector("p");
    if (paragraph && item[1]) paragraph.textContent = item[1];
  });

  setText("#contact .eyebrow", copy.contact.eyebrow);
  setText("#contact-title", copy.contact.title);
  document.querySelectorAll(".contact-actions .button").forEach((button, index) => {
    button.textContent = copy.contact.actions[index] || button.textContent;
  });
  setText(".site-footer span", copy.footer);

  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  storeLanguage(language);
};

const initialLanguage = getStoredLanguage()
  || (navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(initialLanguage);

const sectionLinks = [...document.querySelectorAll(".nav-links a")];
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    sectionLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-35% 0px -50% 0px", threshold: [0.2, 0.4, 0.6] });

  sections.forEach((section) => observer.observe(section));
}

const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".project-card")];

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;

    filters.forEach((item) => item.classList.toggle("is-active", item === filter));
    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      card.classList.toggle("is-hidden", selected !== "all" && !tags.includes(selected));
    });
  });
});

const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealCards = [...document.querySelectorAll(".reveal-card")];

if ("IntersectionObserver" in window && revealCards.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

  revealCards.forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index * 35, 180)}ms`;
    revealObserver.observe(card);
  });
} else {
  revealCards.forEach((card) => card.classList.add("is-visible"));
}

const glowCards = [...document.querySelectorAll(".project-card, .focus-grid article, .outputs-grid article")];

glowCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);

    if (!motionAllowed || !card.classList.contains("project-card")) return;

    const rotateX = ((y / rect.height) - 0.5) * -5;
    const rotateY = ((x / rect.width) - 0.5) * 5;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--mx");
    card.style.removeProperty("--my");
    card.style.transform = "";
  });
});

const canvas = document.querySelector(".circuit-canvas");

if (canvas && motionAllowed) {
  const context = canvas.getContext("2d");
  const particles = [];
  let width = 0;
  let height = 0;
  let frame = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(74, Math.max(38, Math.floor(width / 22)));
    particles.length = 0;
    for (let index = 0; index < count; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1 + Math.random() * 1.8,
      });
    }
  };

  const draw = () => {
    frame += 1;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 132) {
          const alpha = (1 - distance / 132) * 0.22;
          context.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
    }

    particles.forEach((particle, index) => {
      const pulse = 0.55 + Math.sin(frame * 0.025 + index) * 0.25;
      context.fillStyle = `rgba(13, 148, 136, ${0.35 + pulse * 0.35})`;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.r + pulse, 0, Math.PI * 2);
      context.fill();
    });

    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw();
}
