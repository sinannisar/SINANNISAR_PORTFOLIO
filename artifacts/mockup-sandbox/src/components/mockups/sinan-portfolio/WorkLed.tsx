import { useState } from "react";

const projects = [
  {
    number: "01",
    type: "IoT / computer vision",
    name: "Bee Hive Monitoring System",
    description:
      "Final-year IoT project using Raspberry Pi and camera modules with a custom-trained YOLOv8 model for real-time object detection and proactive alerts.",
    stack: ["Raspberry Pi", "YOLOv8", "Python", "IoT"],
    repository: null,
    featured: true,
  },
  {
    number: "02",
    type: "Flutter / mobile",
    name: "Zippy e-Library App",
    description:
      "Cross-platform Flutter app with authentication, book management, and RESTful API integration for real-time data updates and a considered reading experience.",
    stack: ["Flutter", "Dart", "REST API", "Firebase"],
    repository: null,
  },
  {
    number: "03",
    type: "Flutter / Firebase",
    name: "Grocery Shopping List App",
    description:
      "A grocery list app with Firebase real-time database support. Add, update, and delete items with state management for a cross-device experience.",
    stack: ["Flutter", "Firebase", "Dart"],
    repository: "https://github.com/sinannisar/Grocery_shopping_list",
  },
  {
    number: "04",
    type: "Flutter / personal finance",
    name: "Expense Tracker App",
    description:
      "Personal finance tracker with expense categorisation, data visualisation charts, and state management for cross-device performance.",
    stack: ["Flutter", "Dart", "Charts"],
    repository: "https://github.com/sinannisar/expense_tracker",
  },
  {
    number: "05",
    type: "Flutter / REST API",
    name: "Money Converter App",
    description:
      "Currency conversion app using Flutter and REST APIs, with error handling and a clean, responsive interface.",
    stack: ["Flutter", "REST API", "Dart"],
    repository: "https://github.com/sinannisar/MoneyConverter",
  },
  {
    number: "06",
    type: "IoT / Flutter",
    name: "Door Lock Sensor App",
    description:
      "Anti-theft mobile app integrated with IoT sensors for real-time alert notifications and smart-home security.",
    stack: ["Flutter", "IoT", "Sensors", "Dart"],
    repository: null,
  },
];

const skills = [
  ["Mobile product", "Flutter", "Dart", "Android", "iOS", "BLoC", "Provider", "REST APIs", "Firebase"],
  ["Cloud & delivery", "AWS EC2", "AWS S3", "Ansible", "Terraform", "Linux", "Docker"],
  ["Software", "Python", "JavaScript", "Node.js", "HTML / CSS", "SQL", "Git", "OOP"],
  ["Web & systems", "WordPress", "ERPNext", "Frappe", "SEO", "LAN / WAN", "VPN", "Firewalls", "CCTV"],
];

const experience = [
  {
    date: "APR 2025 — PRESENT",
    role: "IT Support Engineer",
    org: "Elite Zone Delivery Services LLC",
    place: "Dubai, UAE",
    points: [
      "Front-end development and optimisation for company platforms",
      "Configured routers, switches, firewalls, and VPN solutions",
      "OS installs, patch management, and system maintenance",
      "SEO coordination and performance tracking",
    ],
  },
  {
    date: "MAR 2024 — AUG 2024",
    role: "Jr. Network Engineer · Intern",
    org: "Soften Technologies",
    place: "Cochin, India",
    points: [
      "Deployed and maintained AWS cloud resources",
      "Automated network tasks via Ansible and Terraform",
      "Implemented firewall rules and access control policies",
    ],
  },
  {
    date: "MAY 2023 — JUL 2023",
    role: "IT Support Engineer · Intern",
    org: "WebEaz Technologies",
    place: "Calicut, India",
    points: [
      "ERPNext configuration with Python customisations",
      "Backend optimisation and database performance tuning",
      "Agile sprint planning and bug tracking",
    ],
  },
  {
    date: "MAY 2022 — JUN 2022",
    role: "Mobile App Developer · Intern",
    org: "Blue Line Computers",
    place: "Mangalore, India",
    points: ["Built cross-platform Flutter and Dart applications", "REST API integration and dynamic UI updates"],
  },
];

export function WorkLed() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [careerView, setCareerView] = useState<"experience" | "education">("experience");

  return (
    <div className="wl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .wl{--ink:#171513;--paper:#f2eee7;--panel:#e8e1d7;--muted:#79736c;--line:#d6cec3;--red:#d73b32;--red-dark:#a82d27;--green:#79806b;color:var(--ink);background:var(--paper);font-family:'Manrope',sans-serif;min-height:100dvh;overflow:hidden}
        .wl *{box-sizing:border-box}.wl a{color:inherit;text-decoration:none}.wl a:focus-visible,.wl button:focus-visible{outline:3px solid var(--red);outline-offset:4px}
        .wl-shell{max-width:1440px;margin:0 auto;display:grid;grid-template-columns:250px minmax(0,1fr);min-height:100dvh}
        .wl-rail{position:sticky;top:0;height:100dvh;padding:28px 24px 24px 30px;border-right:1px solid var(--line);display:flex;flex-direction:column;background:#eee9e1;z-index:5}
        .wl-mark{font:500 12px 'DM Mono',monospace;letter-spacing:.09em;text-transform:uppercase}.wl-mark b{color:var(--red);font-weight:500}
        .wl-portrait{width:76px;height:76px;border-radius:50%;overflow:hidden;margin:54px 0 16px;border:3px solid var(--paper);box-shadow:0 0 0 1px var(--line)}.wl-portrait img{width:100%;height:100%;object-fit:cover;object-position:center 18%}
        .wl-rail-name{font:700 17px 'Space Grotesk',sans-serif;line-height:1.15;max-width:150px}.wl-rail-role{font:11px 'DM Mono',monospace;color:var(--muted);line-height:1.7;margin-top:7px}
        .wl-nav{display:grid;gap:5px;margin-top:46px}.wl-nav a{font-size:12px;color:#746f68;padding:10px 10px;border-radius:5px;transition:background .2s,color .2s}.wl-nav a:hover{background:#ded7cc;color:var(--ink)}.wl-nav span{font:10px 'DM Mono',monospace;color:#a39a8f;margin-right:10px}
        .wl-rail-bottom{margin-top:auto;border-top:1px solid var(--line);padding-top:17px}.wl-availability{display:flex;align-items:center;gap:8px;font:10px 'DM Mono',monospace;color:#5d6653}.wl-availability i{width:7px;height:7px;border-radius:50%;background:#798a67}.wl-rail-bottom p{font-size:11px;color:var(--muted);line-height:1.7;margin:12px 0 0}
        .wl-main{min-width:0}.wl-topbar{height:68px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 clamp(22px,5vw,76px)}.wl-top-label{font:10px 'DM Mono',monospace;letter-spacing:.12em;color:var(--muted);text-transform:uppercase}.wl-top-links{display:flex;align-items:center;gap:20px;font-size:11px}.wl-top-links a:not(.wl-top-cta){color:#69635c}.wl-top-links a:hover{color:var(--red)}
        .wl-top-cta{background:var(--ink);color:var(--paper)!important;padding:11px 15px;border-radius:3px;font-weight:700;transition:background .2s}.wl-top-cta:hover{background:var(--red)}
        .wl-hero{padding:66px clamp(22px,5vw,76px) 58px;position:relative;border-bottom:1px solid var(--line);overflow:hidden}
        .wl-hero:after{content:"";position:absolute;width:400px;height:400px;border:1px solid rgba(215,59,50,.17);border-radius:50%;right:-170px;top:-194px;box-shadow:0 0 0 34px rgba(215,59,50,.035),0 0 0 68px rgba(215,59,50,.025);pointer-events:none}
        .wl-kicker{display:flex;align-items:center;gap:10px;color:var(--red);font:10px 'DM Mono',monospace;letter-spacing:.12em;text-transform:uppercase}.wl-kicker:before{content:"";width:24px;height:1px;background:var(--red)}
        .wl-hero h1{font:600 clamp(46px,7vw,92px)/.98 'Space Grotesk',sans-serif;letter-spacing:-.075em;margin:26px 0 0;max-width:950px}.wl-hero h1 span{color:var(--red)}
        .wl-hero-meta{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;margin-top:31px}.wl-hero-copy{font-size:14px;line-height:1.8;color:#665f57;max-width:470px}.wl-hero-copy strong{color:var(--ink);font-weight:700}
        .wl-hero-actions{display:flex;gap:10px;flex-wrap:wrap}.wl-btn{display:inline-flex;align-items:center;gap:11px;padding:13px 17px;border-radius:3px;background:var(--red);color:white!important;font-size:11px;font-weight:800;transition:transform .2s,background .2s}.wl-btn:hover{background:var(--red-dark);transform:translateY(-2px)}.wl-btn-secondary{background:transparent;color:var(--ink)!important;border:1px solid #c7beb3}.wl-btn-secondary:hover{background:var(--ink);border-color:var(--ink);color:var(--paper)!important}
        .wl-focusline{display:flex;gap:9px;flex-wrap:wrap;margin-top:38px}.wl-focusline span{font:10px 'DM Mono',monospace;letter-spacing:.02em;border:1px solid var(--line);padding:8px 10px;color:#6c655e}
        .wl-projects{padding:54px clamp(22px,5vw,76px) 70px;background:#f6f2ec}.wl-section-head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:25px}.wl-eyebrow{font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.13em;color:var(--red);margin-bottom:10px}.wl-section-head h2{font:600 clamp(30px,4vw,48px)/1 'Space Grotesk',sans-serif;letter-spacing:-.06em;margin:0}.wl-section-head p{font-size:12px;color:var(--muted);margin:0 0 3px}
        .wl-feature{background:#22211e;color:#f5f0e8;border-radius:5px;display:grid;grid-template-columns:1fr .82fr;min-height:315px;overflow:hidden;margin-bottom:13px;position:relative}
        .wl-feature-copy{padding:32px 36px;position:relative;z-index:1}.wl-feature .wl-eyebrow{color:#f07167}.wl-feature h3{font:600 clamp(27px,3vw,40px)/1.05 'Space Grotesk',sans-serif;letter-spacing:-.05em;margin:0 0 13px;max-width:420px}.wl-feature p{font-size:12px;line-height:1.8;color:#c1bbb1;max-width:430px;margin:0}
        .wl-tags{display:flex;flex-wrap:wrap;gap:6px;margin:20px 0 22px}.wl-tags span{font:9px 'DM Mono',monospace;border:1px solid rgba(255,255,255,.19);padding:6px 8px;color:#d4cdc3}.wl-gh{font-size:11px;font-weight:700;color:#f07167!important}.wl-gh:hover{text-decoration:underline}
        .wl-feature-art{min-height:280px;position:relative;background:#ce3f34;overflow:hidden;display:flex;align-items:center;justify-content:center}
        .wl-art-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(38,22,20,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(38,22,20,.12) 1px,transparent 1px);background-size:30px 30px;transform:skewY(-12deg) scale(1.35)}
        .wl-hive{position:relative;width:176px;height:176px;border:1px solid rgba(255,240,220,.55);border-radius:50%;display:grid;place-items:center}
        .wl-hive:before,.wl-hive:after{content:"";position:absolute;border:1px solid rgba(255,240,220,.45);border-radius:50%;inset:19px}.wl-hive:after{inset:39px}
        .wl-hive-core{width:58px;height:58px;border-radius:50%;background:#f1c36a;box-shadow:0 0 0 8px rgba(245,204,119,.18);display:grid;place-items:center;color:#29221a;font:500 9px 'DM Mono',monospace;text-align:center}
        .wl-node{position:absolute;width:11px;height:11px;border-radius:50%;background:#fff2dc;border:3px solid #ce3f34;box-shadow:0 0 0 1px #fff2dc}.wl-node.n1{top:20px;right:31px}.wl-node.n2{left:16px;top:75px}.wl-node.n3{bottom:18px;right:62px}
        .wl-art-caption{position:absolute;bottom:18px;left:20px;color:rgba(255,244,228,.75);font:9px 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase}
        .wl-project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}
        .wl-project{background:#eee9e1;border:1px solid #e3dcd1;border-radius:4px;padding:22px 23px;min-height:225px;display:flex;flex-direction:column;transition:transform .22s,border-color .22s,background .22s}
        .wl-project:hover{transform:translateY(-3px);border-color:#d5a59c;background:#f4eee6}
        .wl-project-top{display:flex;justify-content:space-between;gap:15px;font:9px 'DM Mono',monospace;color:var(--red);text-transform:uppercase;letter-spacing:.08em}.wl-project-top span:last-child{color:#a49b8f}
        .wl-project h3{font:600 22px/1.12 'Space Grotesk',sans-serif;letter-spacing:-.045em;margin:23px 0 9px}.wl-project p{color:#756e65;font-size:11px;line-height:1.7;margin:0;max-width:510px}
        .wl-project-foot{margin-top:auto;padding-top:18px;display:flex;align-items:flex-end;justify-content:space-between;gap:12px}
        .wl-project .wl-tags{margin:0;gap:5px}.wl-project .wl-tags span{color:#6f6860;border-color:#d6cec3;padding:5px 7px;font-size:8px}
        .wl-small-gh{font:9px 'DM Mono',monospace;color:#726960!important;white-space:nowrap}.wl-small-gh:hover{color:var(--red)!important}.wl-repo-unavailable{color:#8f877e!important}
        .wl-about{padding:70px clamp(22px,5vw,76px);display:grid;grid-template-columns:.72fr 1.28fr;gap:50px;border-bottom:1px solid var(--line)}
        .wl-about h2{font:600 clamp(30px,4vw,44px)/1.08 'Space Grotesk',sans-serif;letter-spacing:-.06em;margin:0}.wl-about-intro{font-size:13px;line-height:1.9;color:#6d665e}.wl-about-intro p{margin:0 0 13px}.wl-about-intro strong{color:var(--ink)}
        .wl-languages{display:flex;flex-wrap:wrap;gap:7px;margin-top:20px}.wl-languages span{font:9px 'DM Mono',monospace;border-bottom:1px solid var(--red);padding:7px 1px;margin-right:13px;color:#756e65}
        .wl-skills{padding:64px clamp(22px,5vw,76px);background:#e9e3da;border-bottom:1px solid var(--line)}.wl-skill-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:25px}.wl-skill{background:#f2eee7;border:1px solid #ded6cb;padding:18px 16px}.wl-skill h3{font:10px 'DM Mono',monospace;color:var(--red);letter-spacing:.09em;text-transform:uppercase;margin:0 0 15px}.wl-skill-tags{display:flex;flex-wrap:wrap;gap:7px}.wl-skill-tags span{font-size:10px;color:#625c55}
        .wl-career{padding:68px clamp(22px,5vw,76px);border-bottom:1px solid var(--line)}.wl-career-layout{display:grid;grid-template-columns:.68fr 1.32fr;gap:48px}.wl-career-head h2{font:600 clamp(30px,4vw,44px)/1.06 'Space Grotesk',sans-serif;letter-spacing:-.06em;margin:0 0 15px}.wl-career-head p{font-size:12px;color:var(--muted);line-height:1.8;max-width:260px}
        .wl-tabs{display:flex;border-bottom:1px solid var(--line);gap:22px;margin-bottom:20px}.wl-tabs button{appearance:none;border:0;background:none;padding:0 0 12px;font:10px 'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase;color:#8e867c;cursor:pointer;position:relative}.wl-tabs button[aria-selected=true]{color:var(--red)}.wl-tabs button[aria-selected=true]:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:var(--red)}
        .wl-timeline{border-left:1px solid #d1c8bd;margin-left:5px;padding-left:22px;display:grid;gap:20px}.wl-job{position:relative}.wl-job:before{content:"";position:absolute;left:-27px;top:4px;width:9px;height:9px;border-radius:50%;background:var(--paper);border:2px solid var(--red)}.wl-job-date{font:9px 'DM Mono',monospace;color:var(--red);letter-spacing:.08em}.wl-job h3{font:600 16px 'Space Grotesk',sans-serif;margin:5px 0 2px}.wl-job-org{font-size:11px;color:#827a70}.wl-job ul{list-style:none;padding:0;margin:10px 0 0}.wl-job li{font-size:10px;line-height:1.7;color:#716a62;padding-left:13px;position:relative}.wl-job li:before{content:"—";position:absolute;left:0;color:var(--red)}
        .wl-education{display:grid;gap:13px}.wl-edu-card{border:1px solid var(--line);background:#f6f2ec;padding:20px}.wl-edu-card small{font:9px 'DM Mono',monospace;color:var(--red)}.wl-edu-card h3{font:600 17px 'Space Grotesk',sans-serif;margin:8px 0 4px}.wl-edu-card p{font-size:11px;line-height:1.7;color:#756e65;margin:0}
        .wl-credentials{padding:60px clamp(22px,5vw,76px);background:#e9e3da;border-bottom:1px solid var(--line)}.wl-credentials-list{display:grid;grid-template-columns:1fr 1fr;gap:0 24px;margin-top:21px}.wl-credential{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:14px 0;border-bottom:1px solid #d8d0c5;font-size:11px}.wl-credential span:last-child{font:9px 'DM Mono',monospace;color:#8c8379;text-align:right}
        .wl-contact{padding:72px clamp(22px,5vw,76px);background:#22211e;color:#f4eee5;display:flex;align-items:flex-end;justify-content:space-between;gap:30px}.wl-contact .wl-eyebrow{color:#ed776e}.wl-contact h2{font:600 clamp(38px,6vw,68px)/.98 'Space Grotesk',sans-serif;letter-spacing:-.07em;margin:0;max-width:600px}.wl-contact p{color:#b7afa5;font-size:12px;line-height:1.8;max-width:460px}.wl-contact-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:23px}.wl-contact .wl-btn-secondary{color:#f4eee5!important;border-color:#55514b}.wl-contact .wl-btn-secondary:hover{background:#f4eee5;color:#22211e!important}
        .wl-footer{padding:18px clamp(22px,5vw,76px);display:flex;justify-content:space-between;gap:12px;font:9px 'DM Mono',monospace;color:#8c8379}.wl-mobile-nav{display:none}
        @media(max-width:980px){.wl-shell{grid-template-columns:210px minmax(0,1fr)}.wl-rail{padding-left:21px;padding-right:17px}.wl-skill-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.wl-about,.wl-career-layout{grid-template-columns:1fr;gap:23px}.wl-about{padding-top:55px;padding-bottom:55px}.wl-career-head p{max-width:500px}}
        @media(max-width:700px){.wl-shell{display:block}.wl-rail{display:none}.wl-mobile-nav{display:flex;position:sticky;top:0;z-index:10;background:rgba(242,238,231,.96);backdrop-filter:blur(12px);border-bottom:1px solid var(--line);padding:13px 18px;justify-content:space-between;align-items:center}.wl-mobile-nav strong{font:600 13px 'Space Grotesk',sans-serif}.wl-mobile-nav button{background:none;border:1px solid var(--line);padding:7px 10px;color:var(--ink);font:10px 'DM Mono',monospace}
          .wl-mobile-menu{position:absolute;left:0;right:0;top:100%;padding:10px 18px 14px;background:var(--paper);border-bottom:1px solid var(--line);display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.wl-mobile-menu a{padding:8px 3px;color:#665f57;font-size:11px}
          .wl-topbar{height:54px;padding:0 18px}.wl-top-label{font-size:8px}.wl-top-links{gap:10px}.wl-top-links a:not(.wl-top-cta){display:none}.wl-top-cta{padding:9px 11px;font-size:10px}
          .wl-hero{padding:47px 20px 35px}.wl-hero h1{font-size:clamp(48px,14vw,76px);margin-top:20px}.wl-hero-meta{display:block;margin-top:22px}.wl-hero-copy{font-size:13px}.wl-hero-actions{margin-top:21px}.wl-btn{padding:12px 13px}.wl-focusline{margin-top:26px}
          .wl-projects,.wl-skills,.wl-career,.wl-credentials{padding:48px 20px}.wl-section-head{align-items:flex-start;flex-direction:column;margin-bottom:19px}.wl-section-head p{font-size:11px}.wl-feature{grid-template-columns:1fr}.wl-feature-copy{padding:25px 22px}.wl-feature-art{min-height:210px;grid-row:1}.wl-project-grid{grid-template-columns:1fr}.wl-project{min-height:205px;padding:19px}.wl-project h3{margin-top:19px}
          .wl-about{padding:48px 20px}.wl-skill-grid{grid-template-columns:1fr 1fr;gap:8px}.wl-skill{padding:15px 12px}.wl-skill h3{font-size:9px}.wl-skill-tags span{font-size:9px}
          .wl-career-layout{gap:22px}.wl-credentials-list{grid-template-columns:1fr}.wl-contact{padding:52px 20px;display:block}.wl-contact h2{font-size:48px}.wl-contact p{font-size:11px}.wl-footer{padding:16px 20px;flex-direction:column}
        }
        @media(max-width:380px){.wl-project-foot{align-items:flex-start;flex-direction:column}.wl-hero-actions{display:grid}.wl-top-label{letter-spacing:.06em}.wl-skill-grid{grid-template-columns:1fr}}
        @media(prefers-reduced-motion:reduce){.wl *,.wl *:before,.wl *:after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
      `}</style>
      <div className="wl-shell">
        <aside className="wl-rail" aria-label="Portfolio navigation">
          <div className="wl-mark">MSVP <b>—</b> WORK / 2025</div>
          <div className="wl-portrait"><img src="/__mockup/current-sinan/profile.jpg" alt="Portrait of Muhammed Sinan V P" /></div>
          <div className="wl-rail-name">Muhammed Sinan V P</div>
          <div className="wl-rail-role">SOFTWARE DEVELOPER<br />FLUTTER · DUBAI, UAE</div>
          <nav className="wl-nav">
            <a href="#work"><span>01</span>Selected work</a>
            <a href="#about"><span>02</span>About</a>
            <a href="#capabilities"><span>03</span>Capabilities</a>
            <a href="#career"><span>04</span>Career & education</a>
            <a href="#credentials"><span>05</span>Credentials</a>
            <a href="#contact"><span>06</span>Contact</a>
          </nav>
          <div className="wl-rail-bottom">
            <div className="wl-availability"><i /> OPEN TO OPPORTUNITIES</div>
            <p>Dubai, UAE<br /><a href="mailto:sinannisar5@gmail.com">sinannisar5@gmail.com</a></p>
          </div>
        </aside>
        <main className="wl-main">
          <div className="wl-mobile-nav">
            <strong>Muhammed Sinan V P</strong>
            <button aria-expanded={menuOpen} aria-controls="wl-mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button>
            {menuOpen && <nav className="wl-mobile-menu" id="wl-mobile-menu">
              <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#career" onClick={() => setMenuOpen(false)}>Career</a><a href="#credentials" onClick={() => setMenuOpen(false)}>Credentials</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>}
          </div>
          <header className="wl-topbar">
            <div className="wl-top-label">Portfolio / Dubai, United Arab Emirates</div>
            <div className="wl-top-links"><a href="https://linkedin.com/in/sinannisar" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/sinannisar" target="_blank" rel="noreferrer">GitHub ↗</a><a className="wl-top-cta" href="mailto:sinannisar5@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a></div>
          </header>
          <section className="wl-hero" id="top">
            <div className="wl-kicker">Software developer / Flutter & systems</div>
            <h1>Software that<br />works in the <span>real world.</span></h1>
            <div className="wl-hero-meta">
              <p className="wl-hero-copy"><strong>Muhammed Sinan V P</strong> builds cross-platform mobile apps and practical digital systems. Flutter at the product edge; cloud, IoT, and IT operations underneath.</p>
              <div className="wl-hero-actions"><a className="wl-btn" href="#work">Explore selected work <span aria-hidden="true">↓</span></a><a className="wl-btn wl-btn-secondary" href="/__mockup/current-sinan/SINANNISAR.pdf" target="_blank" rel="noreferrer">View résumé <span aria-hidden="true">↗</span></a></div>
            </div>
            <div className="wl-focusline"><span>Cross-platform apps</span><span>Cloud & DevOps</span><span>IoT systems</span><span>IT operations</span></div>
          </section>
          <section className="wl-projects" id="work">
            <div className="wl-section-head"><div><div className="wl-eyebrow">01 / Work selected</div><h2>Built to be useful.</h2></div><p>Six projects across mobile, connected devices, and software.</p></div>
            <article className="wl-feature">
              <div className="wl-feature-copy">
                <div className="wl-eyebrow">Featured project · 01</div>
                <h3>Bee Hive Monitoring System</h3>
                <p>Final-year IoT project using Raspberry Pi and camera modules with a custom-trained YOLOv8 model for real-time object detection and proactive alerts.</p>
                <div className="wl-tags"><span>Raspberry Pi</span><span>YOLOv8</span><span>Python</span><span>IoT</span></div>
                <span className="wl-gh wl-repo-unavailable">Repository not published</span>
              </div>
              <div className="wl-feature-art" aria-label="Abstract monitoring network illustration" role="img">
                <div className="wl-art-grid" /><div className="wl-hive"><div className="wl-hive-core">FIELD<br />SENSOR</div><i className="wl-node n1" /><i className="wl-node n2" /><i className="wl-node n3" /></div><div className="wl-art-caption">Raspberry Pi / vision / alert loop</div>
              </div>
            </article>
            <div className="wl-project-grid">{projects.slice(1).map((project) => (
              <article className="wl-project" key={project.number}>
                <div className="wl-project-top"><span>{project.type}</span><span>{project.number} / 06</span></div>
                <h3>{project.name}</h3><p>{project.description}</p>
                <div className="wl-project-foot"><div className="wl-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>{project.repository ? <a className="wl-small-gh" href={project.repository} target="_blank" rel="noopener noreferrer">View repository ↗</a> : <span className="wl-small-gh wl-repo-unavailable">Repository not published</span>}</div>
              </article>
            ))}</div>
          </section>
          <section className="wl-about" id="about">
            <div><div className="wl-eyebrow">02 / The person behind it</div><h2>Product thinking.<br />Systems perspective.</h2></div>
            <div className="wl-about-intro">
              <p>Hi, I’m <strong>Muhammed Sinan V P</strong> — a Software Developer with a passion for building cross-platform mobile applications and scalable digital products. My work sits at the intersection of clean engineering and thoughtful user experience.</p>
              <p>I specialise in <strong>Flutter and Dart</strong> for mobile, complemented by front-end skills, cloud infrastructure on AWS, and IT systems expertise. From crafting IoT-driven AI systems to deploying cloud environments with Ansible and Terraform.</p>
              <p>Currently based in Dubai as an <strong>IT Support Engineer at Elite Zone Delivery Services</strong>, while actively seeking Flutter and Software Engineering opportunities worldwide.</p>
              <div className="wl-languages"><span>English · Fluent</span><span>Malayalam · Native</span><span>Hindi · Fluent</span><span>Tamil · Conversational</span><span>Arabic · Basic</span></div>
            </div>
          </section>
          <section className="wl-skills" id="capabilities">
            <div className="wl-section-head"><div><div className="wl-eyebrow">03 / Capabilities</div><h2>A toolkit across layers.</h2></div><p>From app interface to infrastructure and support.</p></div>
            <div className="wl-skill-grid">{skills.map(([title, ...items]) => <div className="wl-skill" key={title}><h3>{title}</h3><div className="wl-skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
          </section>
          <section className="wl-career" id="career">
            <div className="wl-career-layout">
              <div className="wl-career-head"><div className="wl-eyebrow">04 / Experience & education</div><h2>Work grounded in systems.</h2><p>A career spanning mobile development, cloud networking, enterprise software, and hands-on IT support.</p></div>
              <div>
                <div className="wl-tabs" role="tablist" aria-label="Career history">
                  <button role="tab" aria-selected={careerView === "experience"} onClick={() => setCareerView("experience")}>Experience</button>
                  <button role="tab" aria-selected={careerView === "education"} onClick={() => setCareerView("education")}>Education</button>
                </div>
                {careerView === "experience" ? <div className="wl-timeline" role="tabpanel">{experience.map((job) => <article className="wl-job" key={job.role + job.date}><div className="wl-job-date">{job.date}</div><h3>{job.role}</h3><div className="wl-job-org">{job.org} · {job.place}</div><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div> :
                  <div className="wl-education" role="tabpanel"><article className="wl-edu-card"><small>2019 — 2023</small><h3>B.E. in Computer Science</h3><p>P.A. College of Engineering, Mangalore · GPA 7.06<br />Specialised in Software Engineering and Networking. Final project: IoT Bee Hive Monitoring System with YOLOv8 AI.</p></article><article className="wl-edu-card"><small>2017 — 2019</small><h3>Higher Secondary Certificate</h3><p>Kerala Higher Secondary Examinations · 70%<br />Science stream — Mathematics and Computer Science focus.</p></article></div>}
              </div>
            </div>
          </section>
          <section className="wl-credentials" id="credentials">
            <div className="wl-section-head"><div><div className="wl-eyebrow">05 / Credentials</div><h2>Learning in practice.</h2></div></div>
            <div className="wl-credentials-list">
              <div className="wl-credential"><span>AWS Solutions Architect Associate</span><span>Training completed</span></div>
              <div className="wl-credential"><span>Red Hat Certified Engineer</span><span>Training completed</span></div>
              <div className="wl-credential"><span>CCNA Enterprise</span><span>Training completed</span></div>
              <div className="wl-credential"><span>Flutter App Development</span><span>Internship certification</span></div>
              <div className="wl-credential"><span>AI Using Python · Workshop</span><span>National level · First place</span></div>
            </div>
          </section>
          <section className="wl-contact" id="contact">
            <div><div className="wl-eyebrow">06 / Contact</div><h2>Have a useful problem to solve?</h2><p>Available for Flutter development, software engineering, and web roles. Based in Dubai — open to on-site and remote opportunities worldwide.</p>
              <div className="wl-contact-actions"><a className="wl-btn" href="mailto:sinannisar5@gmail.com">Email Muhammed ↗</a><a className="wl-btn wl-btn-secondary" href="tel:+971502970329">Call +971 50 297 0329</a></div>
            </div>
          </section>
          <footer className="wl-footer"><span>© 2025 Muhammed Sinan V P</span><span>Software Developer · Flutter · Dubai, UAE</span><span><a href="https://linkedin.com/in/sinannisar" target="_blank" rel="noreferrer">LinkedIn ↗</a> &nbsp;·&nbsp; <a href="https://github.com/sinannisar" target="_blank" rel="noreferrer">GitHub ↗</a></span></footer>
        </main>
      </div>
    </div>
  );
}
