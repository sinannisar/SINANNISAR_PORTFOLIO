import { useState, type FormEvent } from "react";

const projects = [
  {
    n: "01",
    type: "CONNECTED SYSTEMS · FINAL-YEAR PROJECT",
    title: "Bee Hive Monitoring System",
    copy: "Raspberry Pi and camera modules paired with a custom-trained YOLOv8 model for real-time object detection and proactive alerts.",
    stack: ["Raspberry Pi", "YOLOv8", "Python", "IoT"],
    shape: "bee",
  },
  {
    n: "02",
    type: "MOBILE · DIGITAL LIBRARY",
    title: "Zippy e-Library App",
    copy: "A cross-platform Flutter app with authentication, book management, and RESTful API integration for real-time data updates.",
    stack: ["Flutter", "Dart", "REST API", "Firebase"],
    shape: "library",
  },
  {
    n: "03",
    type: "MOBILE · REAL-TIME DATA",
    title: "Grocery Shopping List App",
    copy: "A Flutter grocery list connected to Firebase Realtime Database, with add, update, and delete flows across devices.",
    stack: ["Flutter", "Firebase", "Dart"],
    shape: "grocery",
  },
  {
    n: "04",
    type: "MOBILE · PERSONAL FINANCE",
    title: "Expense Tracker App",
    copy: "A personal finance tracker built around expense categorisation, data visualisation charts, and state management.",
    stack: ["Flutter", "Dart", "Charts"],
    shape: "finance",
  },
  {
    n: "05",
    type: "MOBILE · REST API",
    title: "Money Converter App",
    copy: "A currency conversion app using REST APIs, with robust error handling and a clean, responsive interface.",
    stack: ["Flutter", "REST API", "Dart"],
    shape: "currency",
  },
  {
    n: "06",
    type: "MOBILE · CONNECTED DEVICE",
    title: "Door Lock Sensor App",
    copy: "An anti-theft mobile app integrated with IoT sensors to deliver real-time alert notifications for smart home security.",
    stack: ["Flutter", "IoT", "Sensors", "Dart"],
    shape: "sensor",
  },
];

const skills = [
  { name: "Mobile products", note: "Flutter · Dart · Android · iOS · BLoC · Provider · REST APIs · Firebase", index: "A" },
  { name: "Cloud & delivery", note: "AWS EC2 · S3 · Ansible · Terraform · Linux · Docker", index: "B" },
  { name: "Connected systems", note: "Raspberry Pi · YOLOv8 · IoT sensors · Python", index: "C" },
  { name: "Web & systems", note: "JavaScript · Node.js · HTML/CSS · ERPNext · Frappe · WordPress", index: "D" },
  { name: "IT infrastructure", note: "LAN/WAN · VPN · Firewalls · CCTV · Switches · Routers", index: "E" },
  { name: "Data & tools", note: "Python · SQL · MySQL · Firebase · Git · Agile", index: "F" },
];

const experience = [
  {
    date: "APR 2025 — PRESENT",
    role: "IT Support Engineer",
    company: "Elite Zone Delivery Services LLC",
    place: "Dubai, UAE",
    points: ["Front-end development and optimisation for company platforms", "Router, switch, firewall and VPN configuration", "OS installs, patch management and system maintenance", "SEO coordination and performance tracking"],
  },
  {
    date: "MAR 2024 — AUG 2024",
    role: "Jr. Network Engineer · Intern",
    company: "Soften Technologies",
    place: "Cochin, India",
    points: ["Deployed and maintained AWS cloud resources", "Automated network tasks using Ansible and Terraform", "Implemented firewall rules and access-control policies"],
  },
  {
    date: "MAY 2023 — JUL 2023",
    role: "IT Support Engineer · Intern",
    company: "WebEaz Technologies",
    place: "Calicut, India",
    points: ["ERPNext configuration with Python customisations", "Backend optimisation and database performance tuning", "Agile sprint planning and bug tracking"],
  },
  {
    date: "MAY 2022 — JUN 2022",
    role: "Mobile App Developer · Intern",
    company: "Blue Line Computers",
    place: "Mangalore, India",
    points: ["Built cross-platform Flutter and Dart applications", "Integrated REST APIs and dynamic UI updates"],
  },
];

const certifications = [
  ["AWS Solutions Architect Associate", "Training completed"],
  ["Red Hat Certified Engineer", "Training completed"],
  ["CCNA Enterprise", "Training completed"],
  ["Flutter App Development", "Internship certification"],
  ["AI Using Python", "National-level workshop · First place"],
];

function DeviceArtwork({ type }: { type: string }) {
  return (
    <div className={`maker-art maker-art-${type}`} aria-hidden="true">
      {type === "bee" ? (
        <div className="bee-diagram">
          <div className="bee-camera"><i /></div>
          <span className="bee-line bee-line-one" />
          <span className="bee-line bee-line-two" />
          <div className="bee-chip">YOLOv8<br /><small>OBJECT DETECTION</small></div>
          <div className="bee-hive"><b /><b /><b /><b /></div>
          <span className="bee-tag">RPI · CAMERA MODULE</span>
        </div>
      ) : (
        <div className="phone-shell">
          <div className="phone-speaker" />
          <div className={`phone-screen screen-${type}`}>
            <div className="screen-top"><span>9:41</span><span>•••</span></div>
            {type === "library" && <>
              <div className="screen-greeting">Good morning</div><div className="screen-title">Your library</div>
              <div className="book-row"><div className="book-cover cover-one">THE<br />LONG<br />WAY</div><div className="book-cover cover-two">MIND<br />AT<br />WORK</div><div className="book-cover cover-three">DESIGN<br />FOR<br />LIFE</div></div>
              <div className="screen-label">CONTINUE READING</div><div className="screen-progress"><i /></div>
            </>}
            {type === "grocery" && <>
              <div className="screen-greeting">Wednesday list</div><div className="screen-title">Market run</div>
              <div className="grocery-item"><i /> Avocados <small>2 pcs</small></div><div className="grocery-item done"><i /> Oat milk <small>1 carton</small></div><div className="grocery-item"><i /> Sourdough <small>1 loaf</small></div><div className="grocery-item"><i /> Cherry tomatoes <small>1 box</small></div>
            </>}
            {type === "finance" && <>
              <div className="screen-greeting">THIS MONTH</div><div className="screen-title">Your spending</div>
              <div className="finance-total">AED 2,840<small>Across 18 expenses</small></div>
              <div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="chart-days"><span>1</span><span>7</span><span>14</span><span>21</span><span>30</span></div>
            </>}
            {type === "currency" && <>
              <div className="screen-greeting">CONVERT</div><div className="screen-title">Currency</div>
              <div className="currency-box"><small>YOU SEND</small><b>1,000</b><span>AED</span></div>
              <div className="currency-swap">↓</div><div className="currency-box currency-result"><small>THEY GET</small><b>≈ 249.17</b><span>EUR</span></div>
            </>}
            {type === "sensor" && <>
              <div className="screen-greeting">HOME SECURITY</div><div className="screen-title">Entry points</div>
              <div className="lock-status"><span className="lock-mark">⌑</span><div><b>Main door</b><small>Secure · Sensor active</small></div><i /></div>
              <div className="sensor-event"><span>ACTIVITY</span><b>Front door sensor</b><small>Connected · Real-time alerts</small></div>
            </>}
            <div className="screen-nav"><i /><i /><i /><i /></div>
          </div>
        </div>
      )}
      {type !== "bee" && <span className="art-caption">PRODUCT INTERFACE STUDY</span>}
    </div>
  );
}

export function ProductMaker() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [formMessage, setFormMessage] = useState("");

  const submitPreview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage("Preview only — please use email to contact Muhammed.");
    window.setTimeout(() => setFormMessage(""), 3500);
  };

  return (
    <main className="maker">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .maker{--paper:#f3f0e7;--paper-deep:#e8e4d8;--ink:#20382f;--ink-soft:#52675d;--line:#c9cec0;--orange:#e55f35;--lime:#c9dd78;--blue:#bdd4d0;min-height:100vh;background:var(--paper);color:var(--ink);font-family:'DM Sans',sans-serif;overflow:hidden}
        .maker *{box-sizing:border-box}
        .maker a{color:inherit}
        .maker button,.maker input,.maker textarea{font:inherit}
        .maker a:focus-visible,.maker button:focus-visible,.maker input:focus-visible,.maker textarea:focus-visible{outline:3px solid var(--orange);outline-offset:4px}
        .maker-mono{font-family:'DM Mono',monospace}
        .maker-shell{max-width:1320px;margin:0 auto;padding:0 72px}
        .maker-nav{height:76px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase}
        .maker-logo{display:flex;align-items:center;gap:12px;text-decoration:none;font-weight:500}
        .maker-mark{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:var(--ink);color:var(--lime);font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:12px}
        .maker-navlinks{display:flex;gap:30px;color:#65766d}
        .maker-navlinks a{text-decoration:none;transition:color .2s}
        .maker-navlinks a:hover{color:var(--orange)}
        .maker-availability{display:flex;align-items:center;gap:9px;color:var(--ink)}
        .maker-availability i{width:8px;height:8px;border-radius:50%;background:#7f9a4d;box-shadow:0 0 0 4px #dce4c9}
        .maker-hero{position:relative;padding:74px 0 90px;min-height:675px;display:grid;grid-template-columns:1.04fr .96fr;align-items:center;gap:36px}
        .maker-hero:before{content:"";position:absolute;right:-190px;top:20px;width:560px;height:560px;border:1px solid #d7d8ca;border-radius:50%;pointer-events:none}
        .maker-hero:after{content:"";position:absolute;right:-92px;top:115px;width:360px;height:360px;border:1px dashed #c5cdbb;border-radius:50%;pointer-events:none}
        .maker-intro{position:relative;z-index:2}
        .maker-eyebrow{display:flex;align-items:center;gap:12px;color:var(--orange);font:11px 'DM Mono',monospace;letter-spacing:.14em;text-transform:uppercase}
        .maker-eyebrow:before{content:"";width:32px;height:1px;background:var(--orange)}
        .maker-h1{font:600 clamp(50px,6vw,78px)/.98 'Space Grotesk',sans-serif;letter-spacing:-.065em;margin:25px 0 17px;max-width:650px}
        .maker-h1 em{font-style:normal;color:var(--orange)}
        .maker-role{font:500 16px 'DM Mono',monospace;color:#62756b;letter-spacing:.015em}
        .maker-lede{max-width:540px;color:#5c6c63;font-size:16px;line-height:1.75;margin:24px 0 28px}
        .maker-actions{display:flex;gap:12px;flex-wrap:wrap}
        .maker-button{display:inline-flex;align-items:center;justify-content:center;gap:12px;padding:14px 18px;background:var(--ink);color:var(--paper)!important;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:.04em;border:1px solid var(--ink);transition:transform .2s,background .2s}
        .maker-button:hover{transform:translateY(-2px);background:#2c4d3e}
        .maker-button.secondary{background:transparent;color:var(--ink)!important}
        .maker-button.secondary:hover{background:#e6e8da}
        .maker-button .arrow{font-size:17px;line-height:10px}
        .maker-hero-meta{display:flex;align-items:center;gap:13px;margin-top:34px;color:#63756b;font:10px 'DM Mono',monospace;letter-spacing:.07em;text-transform:uppercase}
        .maker-hero-meta span+span:before{content:"/";padding-right:13px;color:#a1aa99}
        .maker-portrait-stage{height:500px;position:relative;z-index:1;display:flex;align-items:center;justify-content:center}
        .maker-photo-frame{width:300px;height:380px;position:relative;padding:12px;background:#fffdf5;border:1px solid #d1d0c3;box-shadow:14px 15px 0 #dce0d1;transform:rotate(2.6deg)}
        .maker-photo-frame:before{content:"";position:absolute;left:50%;top:-13px;width:82px;height:24px;background:rgba(212,190,121,.7);transform:translateX(-50%) rotate(-3deg);z-index:2}
        .maker-photo-frame img{width:100%;height:100%;object-fit:cover;object-position:center 22%;filter:saturate(.8)}
        .maker-photo-index{position:absolute;right:-23px;top:49px;writing-mode:vertical-rl;font:10px 'DM Mono',monospace;letter-spacing:.16em;color:#768579}
        .maker-orbit-note{position:absolute;background:var(--lime);padding:13px 16px;font:10px/1.6 'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase;box-shadow:4px 5px 0 rgba(43,63,49,.13)}
        .maker-orbit-note strong{display:block;font:600 15px 'Space Grotesk',sans-serif;letter-spacing:-.02em;text-transform:none}
        .maker-note-mobile{left:3px;top:64px;transform:rotate(-5deg)}
        .maker-note-cloud{right:-12px;top:163px;background:#d8e2d6;transform:rotate(4deg)}
        .maker-note-iot{left:28px;bottom:54px;background:#f2b598;transform:rotate(3deg)}
        .maker-sticker{position:absolute;right:26px;bottom:34px;width:106px;height:106px;border-radius:50%;background:var(--orange);color:#fff7eb;display:flex;align-items:center;justify-content:center;text-align:center;font:10px/1.5 'DM Mono',monospace;letter-spacing:.1em;transform:rotate(-10deg);border:1px dashed rgba(255,255,255,.6);outline:5px solid var(--orange);outline-offset:3px}
        .maker-ribbon{background:var(--ink);color:#dce5c9;padding:18px 0;overflow:hidden}
        .maker-ribbon-track{display:flex;justify-content:space-between;align-items:center;gap:30px;white-space:nowrap;font:11px 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase}
        .maker-ribbon-track span{display:flex;align-items:center;gap:30px}
        .maker-ribbon-track span:after{content:"✳";color:var(--lime);font-size:13px}
        .maker-section{padding:105px 0;border-bottom:1px solid var(--line)}
        .maker-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:35px;margin-bottom:44px}
        .maker-kicker{color:var(--orange);font:10px 'DM Mono',monospace;letter-spacing:.14em;text-transform:uppercase;margin-bottom:14px}
        .maker-section-title{font:600 clamp(36px,4.2vw,55px)/1.03 'Space Grotesk',sans-serif;letter-spacing:-.055em;margin:0}
        .maker-section-title em{font-style:normal;color:var(--orange)}
        .maker-section-intro{max-width:380px;color:#69786d;line-height:1.7;font-size:14px;margin:0}
        .maker-journey{display:grid;grid-template-columns:repeat(3,1fr);position:relative;gap:15px}
        .maker-journey:before{content:"";position:absolute;top:34px;left:12%;right:12%;height:1px;border-top:1px dashed #9cae91}
        .maker-stage{position:relative;background:#e8ebdf;padding:25px 24px 24px;min-height:238px}
        .maker-stage:nth-child(2){margin-top:32px;background:#e1e9e2}
        .maker-stage:nth-child(3){margin-top:64px;background:#f0dfd0}
        .maker-stage-top{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:1}
        .maker-stage-no{width:20px;height:20px;border-radius:50%;background:var(--orange);border:5px solid var(--paper);box-shadow:0 0 0 1px var(--orange)}
        .maker-stage-label{font:10px 'DM Mono',monospace;letter-spacing:.1em;color:#7b897d;text-transform:uppercase}
        .maker-stage h3{font:600 22px 'Space Grotesk',sans-serif;letter-spacing:-.04em;margin:40px 0 8px}
        .maker-stage p{margin:0;color:#68796f;font-size:13px;line-height:1.65;max-width:300px}
        .maker-stage-tools{display:flex;gap:6px;flex-wrap:wrap;margin-top:18px}
        .maker-mini-tag{font:9px 'DM Mono',monospace;padding:5px 8px;background:rgba(255,255,255,.58);color:#52675d}
        .maker-projects{background:#e9e7dc}
        .maker-project-list{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}
        .maker-project{grid-column:span 6;background:#f7f5ed;border:1px solid #d8d8ca;min-height:356px;display:grid;grid-template-columns:1fr .9fr;position:relative;overflow:hidden;transition:transform .25s,box-shadow .25s}
        .maker-project:nth-child(1),.maker-project:nth-child(4){grid-column:span 7}
        .maker-project:nth-child(2),.maker-project:nth-child(5){grid-column:span 5}
        .maker-project:hover{transform:translateY(-4px);box-shadow:0 12px 24px rgba(46,65,49,.08)}
        .maker-project-copy{padding:25px 23px 22px;display:flex;flex-direction:column;align-items:flex-start;position:relative;z-index:1}
        .maker-project-index{font:10px 'DM Mono',monospace;color:var(--orange);letter-spacing:.12em}
        .maker-project-type{font:9px 'DM Mono',monospace;color:#829084;letter-spacing:.08em;margin-top:23px;line-height:1.5}
        .maker-project h3{font:600 22px/1.12 'Space Grotesk',sans-serif;letter-spacing:-.045em;margin:10px 0}
        .maker-project p{font-size:12px;line-height:1.65;color:#66756a;margin:0 0 17px}
        .maker-stack{display:flex;gap:5px;flex-wrap:wrap;margin-top:auto}
        .maker-stack span{font:9px 'DM Mono',monospace;color:#52655a;border:1px solid #d5dbce;padding:5px 7px}
        .maker-gh{display:inline-flex;align-items:center;gap:7px;margin-top:18px;text-decoration:none!important;font:10px 'DM Mono',monospace;color:var(--ink)!important;border-bottom:1px solid #9aa89a;padding-bottom:3px}
        .maker-gh:hover{color:var(--orange)!important;border-color:var(--orange)}
        .maker-art{height:100%;min-height:356px;background:#e0e8d6;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}
        .maker-project:nth-child(2) .maker-art,.maker-project:nth-child(5) .maker-art{background:#d9e5e2}
        .maker-project:nth-child(3) .maker-art{background:#eae2cb}
        .maker-project:nth-child(4) .maker-art{background:#edd7c7}
        .maker-project:nth-child(6) .maker-art{background:#dbe1d1}
        .maker-art:before{content:"";position:absolute;width:250px;height:250px;border:1px solid rgba(53,83,61,.14);border-radius:50%}
        .maker-art:after{content:"";position:absolute;width:195px;height:195px;border:1px dashed rgba(53,83,61,.22);border-radius:50%}
        .phone-shell{width:158px;height:300px;border-radius:26px;background:#20382f;padding:7px;position:relative;z-index:1;box-shadow:8px 13px 0 rgba(29,54,42,.13);transform:rotate(-5deg)}
        .phone-speaker{position:absolute;z-index:2;width:40px;height:5px;border-radius:4px;background:#20382f;top:12px;left:50%;transform:translateX(-50%)}
        .phone-screen{height:100%;border-radius:20px;background:#f7f7ee;padding:14px 11px;overflow:hidden;position:relative;color:#31473c}
        .screen-top{display:flex;justify-content:space-between;font:7px 'DM Mono',monospace;margin-bottom:18px}
        .screen-greeting{font:7px 'DM Mono',monospace;color:#839185;letter-spacing:.08em}
        .screen-title{font:600 15px 'Space Grotesk',sans-serif;margin:5px 0 15px;letter-spacing:-.04em}
        .book-row{display:flex;gap:5px;height:94px;align-items:flex-end}
        .book-cover{height:82px;flex:1;color:#fff9e9;font:7px/1.25 'DM Mono',monospace;padding:8px 4px;box-shadow:2px 3px 5px #aeb5a7}
        .cover-one{background:#c16b4b}.cover-two{height:88px;background:#596e5d}.cover-three{background:#d3a95f}
        .screen-label{font:6px 'DM Mono',monospace;color:#929d91;margin-top:17px}
        .screen-progress{height:4px;background:#e1e5d8;margin-top:7px;border-radius:5px}.screen-progress i{display:block;width:56%;height:100%;background:#d76e49;border-radius:5px}
        .grocery-item{font:7px 'DM Sans',sans-serif;border-bottom:1px solid #e4e6dc;padding:9px 0;display:flex;align-items:center;gap:6px}
        .grocery-item i{width:10px;height:10px;border:1px solid #92a189;border-radius:3px}
        .grocery-item.done i{background:#7e9772;border-color:#7e9772}
        .grocery-item.done{color:#a3ab9e;text-decoration:line-through}
        .grocery-item small{margin-left:auto;font-size:6px;color:#94a091}
        .finance-total{font:600 17px 'Space Grotesk',sans-serif;margin:20px 0 5px}
        .finance-total small{display:block;font:7px 'DM Mono',monospace;color:#879388;margin-top:3px}
        .chart-bars{display:flex;height:80px;align-items:flex-end;gap:4px;padding-top:13px}
        .chart-bars i{flex:1;background:#c6d4b0;border-radius:3px 3px 0 0;height:40%}
        .chart-bars i:nth-child(3n){height:77%;background:#df8863}.chart-bars i:nth-child(4n){height:55%}.chart-bars i:nth-child(5n){height:88%;background:#8caa86}
        .chart-days{display:flex;justify-content:space-between;font:6px 'DM Mono',monospace;color:#98a194;margin-top:7px}
        .currency-box{padding:10px;background:#e8ece2;margin:14px 0 0;display:grid;grid-template-columns:1fr auto;gap:5px}
        .currency-box small{grid-column:span 2;font:6px 'DM Mono',monospace;color:#849184}
        .currency-box b{font:600 15px 'Space Grotesk',sans-serif}
        .currency-box span{font:7px 'DM Mono',monospace;align-self:center}
        .currency-swap{text-align:center;font:14px 'DM Mono',monospace;color:#d47755;height:18px}
        .currency-result{background:#f0e2d2;margin-top:0}
        .lock-status{background:#e7ecdf;padding:10px 8px;display:flex;align-items:center;gap:7px}
        .lock-mark{width:25px;height:25px;display:grid;place-items:center;border-radius:50%;background:#bdcfaa;font-size:14px}
        .lock-status b,.lock-status small{display:block;font-size:7px}
        .lock-status small{color:#8c998b;margin-top:3px;font-size:6px}
        .lock-status i{width:6px;height:6px;border-radius:50%;background:#799866;margin-left:auto}
        .sensor-event{margin-top:14px;border-left:2px solid #dc805d;padding:4px 0 4px 8px}
        .sensor-event span,.sensor-event b,.sensor-event small{display:block}
        .sensor-event span{font:6px 'DM Mono',monospace;color:#dc805d}
        .sensor-event b{font-size:7px;margin-top:5px}.sensor-event small{font-size:6px;color:#89968a;margin-top:3px}
        .screen-nav{position:absolute;bottom:9px;left:25px;right:25px;display:flex;justify-content:space-between}
        .screen-nav i{width:8px;height:3px;border-radius:4px;background:#c6cec1}
        .screen-nav i:first-child{background:#e27b57}
        .art-caption{position:absolute;bottom:14px;right:13px;font:7px 'DM Mono',monospace;letter-spacing:.1em;color:#718274}
        .maker-art-bee{background:#e0e8d6}
        .bee-diagram{position:relative;width:100%;height:100%;z-index:1}
        .bee-camera{position:absolute;left:17%;top:25%;width:72px;height:58px;border:2px solid #355345;background:#f5f3e9;border-radius:8px;transform:rotate(-9deg);box-shadow:5px 6px 0 rgba(55,77,59,.12)}
        .bee-camera:before{content:"RPI";position:absolute;left:8px;top:7px;font:8px 'DM Mono',monospace;color:#758776}
        .bee-camera i{position:absolute;right:10px;top:14px;width:24px;height:24px;border:5px solid #324c40;border-radius:50%;background:#a5bc9a}
        .bee-line{position:absolute;height:1px;background:#82977d;transform-origin:left}
        .bee-line-one{left:43%;top:38%;width:18%;transform:rotate(-14deg)}
        .bee-line-two{left:43%;top:46%;width:21%;transform:rotate(25deg)}
        .bee-chip{position:absolute;left:59%;top:25%;background:#f8f5e9;border:1px solid #bac7ad;padding:10px 12px;font:10px 'DM Mono',monospace;color:#314b3d}
        .bee-chip small{font-size:6px;color:#87968a}
        .bee-hive{position:absolute;right:12%;bottom:24%;display:flex;flex-direction:column;align-items:center;gap:2px;transform:rotate(7deg)}
        .bee-hive b{width:52px;height:25px;background:#cb9b5a;border:1px solid #a77b46;border-radius:7px 7px 10px 10px;display:block}
        .bee-hive b:nth-child(2){width:60px}.bee-hive b:nth-child(3){width:67px}.bee-hive b:nth-child(4){width:73px}
        .bee-tag{position:absolute;bottom:12%;left:17%;font:8px 'DM Mono',monospace;letter-spacing:.1em;color:#798a79}
        .maker-skill-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:start}
        .maker-skill-aside{position:sticky;top:28px}
        .maker-skill-aside p{color:#66776b;line-height:1.75;font-size:14px;max-width:330px}
        .maker-skill-aside .maker-button{margin-top:12px}
        .maker-skill-list{border-top:1px solid var(--line)}
        .maker-skill-row{display:grid;grid-template-columns:44px 1fr;gap:18px;padding:19px 0;border-bottom:1px solid var(--line)}
        .maker-skill-row>span{font:10px 'DM Mono',monospace;color:var(--orange);padding-top:5px}
        .maker-skill-row h3{font:600 18px 'Space Grotesk',sans-serif;margin:0 0 5px;letter-spacing:-.03em}
        .maker-skill-row p{font-size:12px;line-height:1.65;color:#718076;margin:0}
        .maker-career{background:#f0eee5}
        .maker-tabs{display:flex;gap:7px;margin-bottom:35px}
        .maker-tab{padding:11px 16px;border:1px solid #cbd0c3;background:transparent;color:#708075;font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.08em;cursor:pointer}
        .maker-tab[aria-selected="true"]{background:var(--ink);border-color:var(--ink);color:#f4f2e9}
        .maker-timeline{border-left:1px solid #b3c0ac;margin-left:7px;padding-left:30px;display:grid;gap:27px;max-width:790px}
        .maker-timeline-item{position:relative}
        .maker-timeline-item:before{content:"";position:absolute;width:11px;height:11px;background:var(--orange);border:3px solid var(--paper);border-radius:50%;left:-37px;top:3px;box-shadow:0 0 0 1px var(--orange)}
        .maker-date{font:9px 'DM Mono',monospace;letter-spacing:.1em;color:var(--orange)}
        .maker-timeline-item h3{font:600 20px 'Space Grotesk',sans-serif;letter-spacing:-.03em;margin:7px 0 2px}
        .maker-company{color:#68786c;font-size:12px}
        .maker-timeline-item ul{padding-left:17px;margin:12px 0 0;color:#68786c;font-size:12px;line-height:1.8}
        .maker-timeline-item li::marker{color:#d9724f}
        .maker-education-card{max-width:790px;background:#e5e9dc;padding:26px;border-left:3px solid var(--orange)}
        .maker-education-card h3{font:600 22px 'Space Grotesk',sans-serif;margin:8px 0}
        .maker-education-card p{font-size:13px;color:#64756a;line-height:1.7;margin:5px 0}
        .maker-edu-extra{margin-top:18px!important;padding-top:15px;border-top:1px solid #cbd3c5}
        .maker-cert-layout{display:grid;grid-template-columns:.72fr 1.28fr;gap:65px}
        .maker-cert-list{border-top:1px solid var(--line)}
        .maker-cert{display:flex;align-items:center;gap:18px;padding:17px 0;border-bottom:1px solid var(--line)}
        .maker-cert-index{width:28px;height:28px;border:1px solid #bfccad;border-radius:50%;display:grid;place-items:center;color:#778a71;font:9px 'DM Mono',monospace}
        .maker-cert strong{font:600 14px 'Space Grotesk',sans-serif;display:block}
        .maker-cert small{font:10px 'DM Mono',monospace;color:#839086;display:block;margin-top:5px}
        .maker-contact{background:#dfe8dc;padding:95px 0}
        .maker-contact-grid{display:grid;grid-template-columns:1fr .82fr;gap:70px;align-items:start}
        .maker-contact h2{font:600 clamp(40px,5.2vw,68px)/.98 'Space Grotesk',sans-serif;letter-spacing:-.065em;margin:18px 0 20px}
        .maker-contact h2 em{font-style:normal;color:var(--orange)}
        .maker-contact-intro{font-size:14px;line-height:1.75;color:#62756a;max-width:440px}
        .maker-contact-links{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:30px}
        .maker-contact-link{background:#f5f3e9;text-decoration:none!important;padding:15px;border:1px solid #d1d9cc;transition:transform .2s,border .2s}
        .maker-contact-link:hover{transform:translateY(-2px);border-color:#80967d}
        .maker-contact-link span{font:9px 'DM Mono',monospace;color:#839184;text-transform:uppercase;letter-spacing:.12em}
        .maker-contact-link strong{display:block;font-size:12px;margin-top:8px;word-break:break-word}
        .maker-contact-card{background:#f6f4eb;border:1px solid #d0d7c9;padding:24px;box-shadow:8px 8px 0 rgba(64,91,66,.08)}
        .maker-contact-card h3{font:600 19px 'Space Grotesk',sans-serif;letter-spacing:-.03em;margin:0 0 5px}
        .maker-contact-card>p{font:10px 'DM Mono',monospace;color:#869186;margin:0 0 18px}
        .maker-field{display:block;margin:13px 0}
        .maker-field label{display:block;font:9px 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#738276;margin-bottom:6px}
        .maker-field input,.maker-field textarea{width:100%;border:1px solid #d3dacd;background:#fbfaf4;padding:11px 12px;color:var(--ink);font-size:12px;resize:vertical}
        .maker-field textarea{min-height:85px}
        .maker-contact-card button{width:100%;cursor:pointer}
        .maker-form-note{min-height:15px;font:10px 'DM Mono',monospace;color:var(--orange);margin-top:9px}
        .maker-footer{padding:22px 0;display:flex;align-items:center;justify-content:space-between;color:#79877c;font:9px 'DM Mono',monospace;letter-spacing:.07em;text-transform:uppercase;gap:16px}
        .maker-footer a{text-decoration:none}
        .maker-footer a:hover{color:var(--orange)}
        @keyframes maker-enter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        .maker-hero .maker-intro{animation:maker-enter .65s ease-out both}
        .maker-hero .maker-portrait-stage{animation:maker-enter .75s .12s ease-out both}
        @media(max-width:980px){.maker-shell{padding:0 36px}.maker-hero{gap:18px}.maker-portrait-stage{transform:scale(.9)}.maker-project{grid-template-columns:1fr}.maker-art{order:-1;min-height:240px}.maker-project,.maker-project:nth-child(n){grid-column:span 6}.maker-art .phone-shell{transform:scale(.82) rotate(-5deg)}.maker-skill-layout{gap:35px}.maker-contact-grid{gap:35px}}
        @media(max-width:700px){.maker-shell{padding:0 21px}.maker-nav{height:64px}.maker-navlinks{display:none}.maker-availability{font-size:9px}.maker-hero{padding:55px 0 68px;min-height:0;grid-template-columns:1fr;gap:10px}.maker-hero:before{right:-250px;top:260px;width:450px;height:450px}.maker-hero:after{right:-150px;top:330px;width:320px;height:320px}.maker-h1{font-size:54px}.maker-lede{font-size:14px}.maker-portrait-stage{height:400px;transform:none;margin-top:4px}.maker-photo-frame{width:250px;height:322px}.maker-note-mobile{left:0;top:50px}.maker-note-cloud{right:0;top:140px}.maker-note-iot{left:2px;bottom:43px}.maker-sticker{width:80px;height:80px;font-size:8px;right:8px;bottom:25px}.maker-ribbon-track{justify-content:flex-start;gap:22px}.maker-ribbon-track span{gap:22px}.maker-section{padding:72px 0}.maker-section-head{display:block;margin-bottom:32px}.maker-section-intro{margin-top:15px}.maker-journey{grid-template-columns:1fr;gap:10px}.maker-journey:before{left:34px;right:auto;top:25px;bottom:25px;height:auto;border-top:0;border-left:1px dashed #9cae91}.maker-stage,.maker-stage:nth-child(2),.maker-stage:nth-child(3){margin:0;padding:20px;min-height:0}.maker-stage h3{margin:25px 0 7px}.maker-project-list{display:block}.maker-project,.maker-project:nth-child(n){display:grid;grid-template-columns:1fr;margin-bottom:13px;min-height:0}.maker-project-copy{min-height:260px}.maker-art{min-height:260px}.maker-skill-layout{grid-template-columns:1fr;gap:25px}.maker-skill-aside{position:static}.maker-cert-layout{grid-template-columns:1fr;gap:20px}.maker-contact{padding:70px 0}.maker-contact-grid{grid-template-columns:1fr;gap:30px}.maker-contact-links{grid-template-columns:1fr 1fr}.maker-footer{flex-direction:column;align-items:flex-start;line-height:1.8}.maker-timeline{padding-left:25px;margin-left:5px}.maker-timeline-item:before{left:-32px}}
        @media(max-width:380px){.maker-h1{font-size:46px}.maker-contact-links{grid-template-columns:1fr}.maker-hero-meta{gap:8px;font-size:8px}.maker-hero-meta span+span:before{padding-right:8px}}
        @media(prefers-reduced-motion:reduce){.maker *, .maker *:before,.maker *:after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
      `}</style>
      <header className="maker-shell">
        <nav className="maker-nav" aria-label="Main navigation">
          <a className="maker-logo" href="#top"><span className="maker-mark">SV</span><span>Sinan / Product Engineer</span></a>
          <div className="maker-navlinks">
            <a href="#work">Selected work</a><a href="#capabilities">Capabilities</a><a href="#career">Career</a><a href="#contact">Contact</a>
          </div>
          <div className="maker-availability"><i /> Open to opportunities</div>
        </nav>
      </header>

      <div className="maker-shell" id="top">
        <section className="maker-hero">
          <div className="maker-intro">
            <div className="maker-eyebrow">Engineer at the intersections</div>
            <h1 className="maker-h1">Muhammed<br />Sinan <em>V P</em></h1>
            <div className="maker-role">Software Developer · Flutter</div>
            <p className="maker-lede">I build useful digital products from the screen outward—connecting cross-platform mobile experiences with cloud infrastructure, IoT, and the systems that keep them running.</p>
            <div className="maker-actions">
              <a className="maker-button" href="#work">Explore selected work <span className="arrow">↘</span></a>
              <a className="maker-button secondary" href="/__mockup/current-sinan/SINANNISAR.pdf" target="_blank" rel="noreferrer">View résumé <span className="arrow">↗</span></a>
            </div>
            <div className="maker-hero-meta"><span>Dubai, UAE</span><span>Mobile · Cloud · IoT</span><span>Available worldwide</span></div>
          </div>
          <div className="maker-portrait-stage">
            <div className="maker-photo-frame"><img src="/__mockup/current-sinan/profile.jpg" alt="Portrait of Muhammed Sinan V P" /></div>
            <span className="maker-photo-index">FIELD NOTES / 01</span>
            <div className="maker-orbit-note maker-note-mobile">01 / BUILD<strong>Mobile products</strong></div>
            <div className="maker-orbit-note maker-note-cloud">02 / SHIP<strong>Cloud &amp; DevOps</strong></div>
            <div className="maker-orbit-note maker-note-iot">03 / CONNECT<strong>IoT systems</strong></div>
            <div className="maker-sticker">IDEAS<br />INTO<br />WORKING<br />SYSTEMS</div>
          </div>
        </section>
      </div>
      <div className="maker-ribbon" aria-label="Areas of focus">
        <div className="maker-shell maker-ribbon-track">
          <span>Flutter &amp; Dart</span><span>AWS &amp; Infrastructure</span><span>Connected Devices</span><span>Practical IT Systems</span>
        </div>
      </div>

      <section className="maker-shell maker-section" aria-labelledby="journey-title">
        <div className="maker-section-head">
          <div><div className="maker-kicker">The product-building loop / 01</div><h2 id="journey-title" className="maker-section-title">From interface<br />to <em>infrastructure.</em></h2></div>
          <p className="maker-section-intro">My work spans the whole path a product takes: making an intuitive app, giving it dependable services, then connecting it to the physical world.</p>
        </div>
        <div className="maker-journey">
          <article className="maker-stage">
            <div className="maker-stage-top"><span className="maker-stage-no" /><span className="maker-stage-label">01 · Build</span></div>
            <h3>Make it feel clear.</h3><p>Cross-platform mobile apps shaped around practical tasks, thoughtful interfaces, and reliable data flows.</p>
            <div className="maker-stage-tools"><span className="maker-mini-tag">Flutter</span><span className="maker-mini-tag">Dart</span><span className="maker-mini-tag">Firebase</span><span className="maker-mini-tag">REST API</span></div>
          </article>
          <article className="maker-stage">
            <div className="maker-stage-top"><span className="maker-stage-no" /><span className="maker-stage-label">02 · Deliver</span></div>
            <h3>Make it dependable.</h3><p>Cloud and systems experience brings a deployment-minded perspective to the product, not just the interface.</p>
            <div className="maker-stage-tools"><span className="maker-mini-tag">AWS</span><span className="maker-mini-tag">Ansible</span><span className="maker-mini-tag">Terraform</span><span className="maker-mini-tag">Linux</span></div>
          </article>
          <article className="maker-stage">
            <div className="maker-stage-top"><span className="maker-stage-no" /><span className="maker-stage-label">03 · Connect</span></div>
            <h3>Bring the physical in.</h3><p>IoT projects connect sensors, cameras, edge devices, and software into systems that respond to the real world.</p>
            <div className="maker-stage-tools"><span className="maker-mini-tag">Raspberry Pi</span><span className="maker-mini-tag">Python</span><span className="maker-mini-tag">YOLOv8</span><span className="maker-mini-tag">Sensors</span></div>
          </article>
        </div>
      </section>

      <section id="work" className="maker-section maker-projects">
        <div className="maker-shell">
          <div className="maker-section-head">
            <div><div className="maker-kicker">Workbench / selected projects</div><h2 className="maker-section-title">Things I’ve<br /><em>put together.</em></h2></div>
            <p className="maker-section-intro">A mix of app products and connected-system experiments. Each project card shows the problem space and the tools used—without dressing up the facts.</p>
          </div>
          <div className="maker-project-list">
            {projects.map((project) => (
              <article className="maker-project" key={project.n}>
                <div className="maker-project-copy">
                  <span className="maker-project-index">PROJECT / {project.n}</span>
                  <span className="maker-project-type">{project.type}</span>
                  <h3>{project.title}</h3><p>{project.copy}</p>
                  <div className="maker-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <a className="maker-gh" href="https://github.com/sinannisar" target="_blank" rel="noreferrer">GitHub profile <span aria-hidden="true">↗</span></a>
                </div>
                <DeviceArtwork type={project.shape} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="maker-shell maker-section">
        <div className="maker-skill-layout">
          <div className="maker-skill-aside">
            <div className="maker-kicker">The kit / technical breadth</div>
            <h2 className="maker-section-title">Depth where<br />it <em>counts.</em></h2>
            <p>A practical toolkit across product engineering, cloud delivery, connected systems, and IT operations—grounded in projects and hands-on roles.</p>
            <a className="maker-button" href="/__mockup/current-sinan/SINANNISAR.pdf" target="_blank" rel="noreferrer">Open résumé <span className="arrow">↗</span></a>
          </div>
          <div className="maker-skill-list">
            {skills.map((skill) => <div className="maker-skill-row" key={skill.index}><span>{skill.index} /</span><div><h3>{skill.name}</h3><p>{skill.note}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="career" className="maker-section maker-career">
        <div className="maker-shell">
          <div className="maker-section-head">
            <div><div className="maker-kicker">Experience &amp; education / field record</div><h2 className="maker-section-title">Built on <em>real systems.</em></h2></div>
            <p className="maker-section-intro">Experience across support engineering, network operations, ERP systems, and Flutter development.</p>
          </div>
          <div className="maker-tabs" role="tablist" aria-label="Career history">
            <button type="button" role="tab" aria-selected={activeTab === "experience"} className="maker-tab" onClick={() => setActiveTab("experience")}>Experience</button>
            <button type="button" role="tab" aria-selected={activeTab === "education"} className="maker-tab" onClick={() => setActiveTab("education")}>Education</button>
          </div>
          {activeTab === "experience" ? (
            <div className="maker-timeline" role="tabpanel">
              {experience.map((item) => <article className="maker-timeline-item" key={item.role + item.date}>
                <div className="maker-date">{item.date}</div><h3>{item.role}</h3><div className="maker-company">{item.company} · {item.place}</div>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>)}
            </div>
          ) : (
            <div className="maker-education-card" role="tabpanel">
              <div className="maker-date">2019 — 2023</div><h3>B.E. in Computer Science</h3>
              <p>P.A. College of Engineering, Mangalore · GPA 7.06</p>
              <p>Specialised in Software Engineering and Networking.</p>
              <p className="maker-edu-extra"><strong>Final project:</strong> IoT Bee Hive Monitoring System with YOLOv8 AI</p>
              <p><strong>2017 — 2019</strong> · Higher Secondary Certificate, Kerala Higher Secondary Examinations · 70% · Science stream</p>
            </div>
          )}
        </div>
      </section>

      <section className="maker-shell maker-section">
        <div className="maker-cert-layout">
          <div><div className="maker-kicker">Learning / certifications</div><h2 className="maker-section-title">Keep the<br /><em>toolbox growing.</em></h2><p className="maker-section-intro" style={{ marginTop: 18 }}>Training across cloud architecture, Linux engineering, networking, and mobile development.</p></div>
          <div className="maker-cert-list">{certifications.map(([name, label], index) => <div className="maker-cert" key={name}><span className="maker-cert-index">0{index + 1}</span><div><strong>{name}</strong><small>{label}</small></div></div>)}</div>
        </div>
        <div style={{ marginTop: 54 }}>
          <div className="maker-kicker">Languages / everyday collaboration</div>
          <div className="maker-stack" style={{ marginTop: 14 }}>
            {["English · Fluent", "Malayalam · Native", "Hindi · Fluent", "Tamil · Conversational", "Arabic · Basic"].map((language) => <span key={language}>{language}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="maker-contact">
        <div className="maker-shell maker-contact-grid">
          <div>
            <div className="maker-kicker">Dubai, UAE · Open to work</div>
            <h2>Let’s build<br />something <em>useful.</em></h2>
            <p className="maker-contact-intro">Available for Flutter development, software engineering, and web roles. Based in Dubai and open to on-site and remote opportunities worldwide.</p>
            <div className="maker-contact-links">
              <a className="maker-contact-link" href="mailto:sinannisar5@gmail.com"><span>Email</span><strong>sinannisar5@gmail.com</strong></a>
              <a className="maker-contact-link" href="tel:+971502970329"><span>Phone</span><strong>+971 502970329</strong></a>
              <a className="maker-contact-link" href="https://linkedin.com/in/sinannisar" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/sinannisar</strong></a>
              <a className="maker-contact-link" href="https://github.com/sinannisar" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/sinannisar</strong></a>
            </div>
          </div>
          <form className="maker-contact-card" onSubmit={submitPreview}>
            <h3>Start a conversation</h3><p>VISUAL PREVIEW · DOES NOT SEND</p>
            <div className="maker-field"><label htmlFor="maker-name">Your name</label><input id="maker-name" name="name" placeholder="Name" required /></div>
            <div className="maker-field"><label htmlFor="maker-email">Email address</label><input id="maker-email" type="email" name="email" placeholder="you@example.com" required /></div>
            <div className="maker-field"><label htmlFor="maker-message">A little about the opportunity</label><textarea id="maker-message" name="message" placeholder="What are you looking to build?" required /></div>
            <button className="maker-button" type="submit">Preview message <span className="arrow">↗</span></button>
            <div className="maker-form-note" aria-live="polite">{formMessage}</div>
          </form>
        </div>
      </section>
      <footer className="maker-shell maker-footer">
        <span>© 2025 Muhammed Sinan V P</span><span>Software Developer · Flutter · Dubai, UAE</span>
        <span><a href="#top">Back to top ↑</a></span>
      </footer>
    </main>
  );
}
