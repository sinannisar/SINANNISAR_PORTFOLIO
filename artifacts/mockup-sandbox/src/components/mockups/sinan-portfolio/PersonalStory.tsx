export function PersonalStory() {
  const projects = [
    {
      no: "01",
      type: "IoT · AI · Python",
      title: "Bee Hive Monitoring System",
      text: "Final-year IoT project using Raspberry Pi and camera modules with a custom-trained YOLOv8 model for real-time object detection and proactive alerts.",
      tags: ["Raspberry Pi", "YOLOv8", "Python", "IoT"],
    },
    {
      no: "02",
      type: "Flutter · Mobile",
      title: "Zippy e-Library App",
      text: "Cross-platform Flutter app with authentication, book management, and RESTful API integration for real-time data updates and a considered user experience.",
      tags: ["Flutter", "Dart", "REST API", "Firebase"],
    },
    {
      no: "03",
      type: "Flutter · Firebase",
      title: "Grocery Shopping List App",
      text: "A Flutter app with Firebase real-time database: add, update, and delete groceries with state management for a cross-device experience.",
      tags: ["Flutter", "Firebase", "Dart"],
    },
    {
      no: "04",
      type: "Flutter · Finance",
      title: "Expense Tracker App",
      text: "Personal finance tracker with expense categorisation, data visualisation charts, and state management for cross-device performance.",
      tags: ["Flutter", "Dart", "Charts"],
    },
    {
      no: "05",
      type: "Flutter · API",
      title: "Money Converter App",
      text: "Currency conversion app using Flutter and REST APIs, with robust error handling and a clean, responsive interface.",
      tags: ["Flutter", "REST API", "Dart"],
    },
    {
      no: "06",
      type: "IoT · Flutter",
      title: "Door Lock Sensor App",
      text: "Anti-theft mobile app integrated with IoT sensors for real-time alert notifications and smart-home security.",
      tags: ["Flutter", "IoT", "Sensors", "Dart"],
    },
  ];

  const career = [
    {
      date: "APR 2025 — PRESENT · DUBAI, UAE",
      role: "IT Support Engineer",
      place: "Elite Zone Delivery Services LLC",
      points: [
        "Front-end development and optimisation for company platforms",
        "Configured routers, switches, firewalls and VPN solutions",
        "OS installs, patch management and system maintenance",
        "SEO coordination and performance tracking",
      ],
    },
    {
      date: "MAR 2024 — AUG 2024 · COCHIN, INDIA",
      role: "Jr. Network Engineer (Intern)",
      place: "Soften Technologies",
      points: [
        "Deployed and maintained AWS cloud resources",
        "Automated network tasks with Ansible and Terraform",
        "Implemented firewall rules and access control policies",
      ],
    },
    {
      date: "MAY 2023 — JUL 2023 · CALICUT, INDIA",
      role: "IT Support Engineer (Intern)",
      place: "WebEaz Technologies",
      points: [
        "ERPNext configuration with Python customisations",
        "Backend optimisation and database performance tuning",
        "Agile sprint planning and bug tracking",
      ],
    },
    {
      date: "MAY 2022 — JUN 2022 · MANGALORE, INDIA",
      role: "Mobile App Developer (Intern)",
      place: "Blue Line Computers",
      points: [
        "Built cross-platform Flutter and Dart applications",
        "REST API integration and dynamic UI updates",
      ],
    },
  ];

  const skillGroups = [
    ["Mobile", "Flutter", "Dart", "Android", "iOS", "BLoC", "Provider", "REST API", "Firebase"],
    ["Cloud & systems", "AWS EC2", "AWS S3", "Ansible", "Terraform", "Linux", "Docker"],
    ["Web & code", "Python", "JavaScript", "Node.js", "HTML/CSS", "WordPress", "ERPNext", "Frappe", "SQL", "Git"],
    ["IT & networks", "LAN/WAN", "VPN", "Firewalls", "CCTV", "Switches", "Routers"],
  ];

  const awards = [
    ["AWS Solutions Architect Associate", "Training completed"],
    ["Red Hat Certified Engineer", "Training completed"],
    ["CCNA Enterprise", "Training completed"],
    ["Flutter App Development", "Internship certification"],
    ["AI Using Python — Workshop", "National level · First place"],
  ];

  return (
    <div className="story">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        .story{--paper:#f4efe6;--paper2:#ebe3d6;--ink:#262d29;--soft:#69716a;--line:#d7d0c4;--rust:#a54d38;--olive:#74806a;min-height:100dvh;background:var(--paper);color:var(--ink);font-family:'DM Sans',sans-serif;overflow:hidden}
        .story *{box-sizing:border-box}
        .story a{color:inherit}
        .story a:focus-visible,.story button:focus-visible{outline:2px solid var(--rust);outline-offset:4px}
        .story .top{height:68px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 clamp(22px,6vw,92px);font-size:12px;letter-spacing:.04em}
        .story .wordmark{font-weight:700;letter-spacing:.02em}
        .story .wordmark span{font-family:'Instrument Serif',serif;font-style:italic;color:var(--rust);font-size:18px;margin-left:5px}
        .story .topnav{display:flex;gap:26px;align-items:center}
        .story .topnav a{text-decoration:none;color:var(--soft);transition:color .2s}
        .story .topnav a:hover{color:var(--rust)}
        .story .availability{display:flex;align-items:center;gap:8px;color:#66735e;font-size:11px}
        .story .availability:before{content:'';width:7px;height:7px;border-radius:50%;background:#7d8c6c}
        .story .hero{max-width:1440px;margin:auto;padding:clamp(46px,8vw,116px) clamp(22px,9vw,136px) 78px;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(280px,.78fr);gap:clamp(40px,9vw,130px);align-items:center;position:relative}
        .story .eyebrow,.story .kicker{font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.14em;color:var(--rust)}
        .story h1{font:clamp(58px,8vw,114px)/.88 'Instrument Serif',serif;letter-spacing:-.045em;font-weight:400;margin:25px 0 22px;max-width:750px}
        .story h1 em{color:var(--rust);font-weight:400}
        .story .role{font-size:15px;color:var(--soft);letter-spacing:.015em;margin:0 0 20px}
        .story .introcopy{max-width:550px;font-size:15px;line-height:1.8;color:#535d55;margin:0}
        .story .actions{display:flex;align-items:center;gap:13px;margin:30px 0 0;flex-wrap:wrap}
        .story .button{display:inline-flex;align-items:center;gap:12px;padding:13px 18px;text-decoration:none;font-size:12px;font-weight:600;transition:transform .2s,background .2s}
        .story .button:hover{transform:translateY(-2px)}
        .story .button.primary{background:var(--ink);color:var(--paper)}
        .story .button.primary:hover{background:var(--rust)}
        .story .button.text{padding-left:4px;color:var(--ink)}
        .story .button .arrow{font-size:17px;line-height:10px}
        .story .hero-art{position:relative;max-width:390px;justify-self:center;width:100%;padding:0 18px 23px 0}
        .story .portrait-wrap{aspect-ratio:4/5;position:relative;overflow:hidden;background:#e0d9cc}
        .story .portrait-wrap:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 66%,rgba(39,43,39,.3))}
        .story .portrait{width:100%;height:100%;display:block;object-fit:cover;object-position:center 26%;filter:saturate(.78)}
        .story .portrait-frame{position:absolute;border:1px solid var(--rust);inset:18px -1px -1px 18px;z-index:0}
        .story .portrait-wrap{z-index:1}
        .story .portrait-caption{position:absolute;z-index:2;left:18px;bottom:17px;color:#fff;font:10px 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase}
        .story .location-note{position:absolute;right:-17px;top:38px;writing-mode:vertical-rl;font:10px 'DM Mono',monospace;letter-spacing:.13em;color:var(--soft)}
        .story .hero-foot{grid-column:1/-1;border-top:1px solid var(--line);padding-top:21px;display:flex;justify-content:space-between;align-items:center;color:var(--soft);font:10px 'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase}
        .story .hero-foot b{color:var(--ink);font-weight:500}
        .story .section{padding:clamp(64px,9vw,118px) clamp(22px,9vw,136px);border-top:1px solid var(--line)}
        .story .section-inner{max-width:1168px;margin:auto}
        .story .section-heading{display:grid;grid-template-columns:150px 1fr;gap:32px;align-items:start;margin-bottom:52px}
        .story .section-heading h2{font:clamp(38px,5vw,66px)/.98 'Instrument Serif',serif;font-weight:400;letter-spacing:-.025em;margin:0;max-width:740px}
        .story .section-heading h2 em{color:var(--rust);font-weight:400}
        .story .about{background:var(--paper2)}
        .story .about-grid{display:grid;grid-template-columns:1.1fr .75fr;gap:clamp(40px,9vw,128px)}
        .story .story-copy p{font-size:15px;line-height:1.9;color:#535d55;margin:0 0 18px}
        .story .story-copy strong{color:var(--ink);font-weight:600}
        .story .languages{margin-top:30px;display:flex;flex-wrap:wrap;gap:8px}
        .story .language{padding:8px 11px;border:1px solid #c9c2b6;color:#5b625b;font-size:11px}
        .story .details{border-top:1px solid #c9c2b6}
        .story .detail{display:grid;grid-template-columns:90px 1fr;gap:16px;padding:13px 0;border-bottom:1px solid #c9c2b6;font-size:12px}
        .story .detail dt{font:9px 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--rust)}
        .story .detail dd{margin:0;color:#50594f;overflow-wrap:anywhere}
        .story .detail a{text-decoration:none;border-bottom:1px solid #b8afa2}
        .story .details-note{margin:24px 0 0;padding-left:15px;border-left:2px solid var(--olive);font:12px/1.7 'Instrument Serif',serif;font-style:italic;color:var(--soft)}
        .story .path{background:#ede7dc}
        .story .timeline{margin-left:181px;border-left:1px solid #c4bbad;padding:0 0 0 32px}
        .story .milestone{position:relative;padding:0 0 38px;max-width:750px}
        .story .milestone:last-child{padding-bottom:0}
        .story .milestone:before{content:'';position:absolute;left:-38px;top:3px;width:11px;height:11px;border-radius:50%;background:var(--paper);border:1px solid var(--rust)}
        .story .milestone-date{font:10px 'DM Mono',monospace;color:var(--rust);letter-spacing:.08em}
        .story .milestone h3{font-size:18px;margin:8px 0 3px;font-weight:600}
        .story .milestone .place{font-size:12px;color:var(--soft);margin:0 0 12px}
        .story .milestone ul{margin:0;padding-left:18px;color:#59615a;font-size:12px;line-height:1.8}
        .story .milestone li{padding-left:3px}
        .story .education{display:grid;grid-template-columns:150px 1fr;gap:32px;margin:55px 0 0}
        .story .education .edu-copy{border-top:1px solid #c4bbad;padding-top:19px}
        .story .education h3{font-size:16px;margin:0 0 5px}
        .story .education p{font-size:12px;color:var(--soft);line-height:1.75;margin:0}
        .story .projects{background:var(--paper)}
        .story .project-list{border-top:1px solid var(--line)}
        .story .project{display:grid;grid-template-columns:70px minmax(180px,.85fr) 1.2fr 110px;gap:25px;align-items:start;padding:26px 0;border-bottom:1px solid var(--line)}
        .story .project-no{font:11px 'DM Mono',monospace;color:var(--rust);padding-top:4px}
        .story .project-type{font:9px 'DM Mono',monospace;color:var(--soft);letter-spacing:.07em;text-transform:uppercase;margin-bottom:8px}
        .story .project h3{font:24px/1.05 'Instrument Serif',serif;font-weight:400;margin:0}
        .story .project p{font-size:12px;line-height:1.8;color:#606860;margin:0}
        .story .project-meta{display:flex;flex-direction:column;align-items:flex-end;gap:13px}
        .story .tags{display:flex;justify-content:flex-end;gap:5px;flex-wrap:wrap}
        .story .tag{font:9px 'DM Mono',monospace;padding:5px 7px;background:#ebe5da;color:#5e655d}
        .story .github{font-size:10px;color:var(--rust);text-decoration:none;border-bottom:1px solid #c8a99e;padding-bottom:2px}
        .story .breadth{background:#e8e1d5}
        .story .skills-layout{display:grid;grid-template-columns:.65fr 1.35fr;gap:60px}
        .story .skills-intro{font:22px/1.35 'Instrument Serif',serif;color:#505850;max-width:300px}
        .story .skill-groups{border-top:1px solid #c8c0b4}
        .story .skill-group{display:grid;grid-template-columns:155px 1fr;gap:20px;padding:18px 0;border-bottom:1px solid #c8c0b4}
        .story .skill-group strong{font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.08em;color:var(--rust);font-weight:400;padding-top:5px}
        .story .skill-group div{display:flex;gap:8px;flex-wrap:wrap}
        .story .skill-group span{font-size:11px;color:#535c54}
        .story .skill-group span:not(:last-child):after{content:'·';margin-left:8px;color:#b4aa9c}
        .story .recognition{padding-top:75px}
        .story .recognition .subhead{font:30px 'Instrument Serif',serif;margin:0 0 24px}
        .story .cert-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:60px}
        .story .cert{display:flex;justify-content:space-between;gap:15px;padding:13px 0;border-top:1px solid #c8c0b4;font-size:12px}
        .story .cert span:last-child{font:9px 'DM Mono',monospace;color:var(--soft);text-align:right}
        .story .contact{background:#dfe3d8}
        .story .contact-layout{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end}
        .story .contact h2{font:clamp(44px,6vw,76px)/.94 'Instrument Serif',serif;font-weight:400;letter-spacing:-.025em;margin:0;max-width:500px}
        .story .contact h2 em{color:var(--rust);font-weight:400}
        .story .contact-copy{font-size:13px;line-height:1.8;color:#59645a;max-width:440px;margin:20px 0 0}
        .story .contact-links{border-top:1px solid #bdc6b8}
        .story .contact-link{display:flex;justify-content:space-between;align-items:center;padding:15px 0;border-bottom:1px solid #bdc6b8;text-decoration:none;font-size:13px}
        .story .contact-link span:first-child{font:9px 'DM Mono',monospace;letter-spacing:.1em;color:var(--rust);text-transform:uppercase}
        .story .contact-link span:last-child{font-size:12px;color:#3e4a40}
        .story .footer{padding:22px clamp(22px,6vw,92px);display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap;font:9px 'DM Mono',monospace;letter-spacing:.06em;color:#858980}
        @media(max-width:820px){.story .topnav{gap:15px}.story .hero{grid-template-columns:1fr .8fr;gap:35px}.story .hero-foot{gap:16px;flex-wrap:wrap}.story .section-heading{grid-template-columns:110px 1fr}.story .about-grid{gap:45px}.story .timeline{margin-left:140px}.story .project{grid-template-columns:42px 1fr 1.2fr;gap:17px}.story .project-meta{grid-column:2/-1;flex-direction:row;justify-content:space-between;align-items:center}.story .skills-layout{gap:35px}.story .cert-list{column-gap:25px}}
        @media(max-width:620px){.story .top{height:auto;min-height:62px;padding:13px 20px}.story .topnav{display:none}.story .availability{font-size:10px}.story .hero{grid-template-columns:1fr;padding-top:58px;padding-bottom:55px;gap:40px}.story h1{font-size:clamp(58px,17vw,84px);margin-top:20px}.story .hero-art{width:min(78%,340px);justify-self:center}.story .location-note{right:-12px}.story .hero-foot{font-size:9px}.story .section{padding:65px 22px}.story .section-heading{grid-template-columns:1fr;gap:14px;margin-bottom:36px}.story .section-heading h2{font-size:48px}.story .about-grid{grid-template-columns:1fr;gap:36px}.story .timeline{margin-left:4px;padding-left:25px}.story .milestone:before{left:-31px}.story .education{grid-template-columns:1fr;gap:10px;margin-top:42px}.story .project{grid-template-columns:35px 1fr;gap:10px 15px;padding:21px 0}.story .project p{grid-column:2}.story .project-meta{grid-column:2;flex-direction:column;align-items:flex-start}.story .tags{justify-content:flex-start}.story .skills-layout{grid-template-columns:1fr;gap:22px}.story .skills-intro{max-width:none;margin:0}.story .skill-group{grid-template-columns:1fr;gap:10px}.story .cert-list{grid-template-columns:1fr}.story .recognition{padding-top:55px}.story .contact-layout{grid-template-columns:1fr;gap:35px}.story .contact h2{font-size:56px}.story .contact-link{align-items:flex-start;gap:14px}.story .contact-link span:last-child{text-align:right;overflow-wrap:anywhere}.story .footer{padding:20px 22px}}
        @media(prefers-reduced-motion:reduce){.story *, .story *:before,.story *:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
      `}</style>

      <header className="top">
        <a className="wordmark" href="#home" aria-label="Muhammed Sinan V P, home">MSVP<span>·</span></a>
        <nav className="topnav" aria-label="Page navigation">
          <a href="#story">My story</a><a href="#career">Career</a><a href="#work">Selected work</a><a href="#contact">Contact</a>
        </nav>
        <div className="availability">Dubai, UAE · Open to opportunities</div>
      </header>

      <main>
        <section className="hero" id="home">
          <div>
            <div className="eyebrow">A little about the person behind the pixels</div>
            <h1>Muhammed<br />Sinan <em>V P</em></h1>
            <p className="role">Software Developer · Flutter &amp; Cross-platform Apps</p>
            <p className="introcopy">I build useful digital products, and I like understanding the systems around them. My work moves between mobile software, cloud infrastructure, IoT and the practical details that keep technology working for people.</p>
            <div className="actions">
              <a className="button primary" href="/__mockup/current-sinan/SINANNISAR.pdf" target="_blank" rel="noreferrer">Read my résumé <span className="arrow">↗</span></a>
              <a className="button text" href="#contact">Start a conversation <span className="arrow">→</span></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="portrait-frame" aria-hidden="true" />
            <div className="portrait-wrap">
              <img className="portrait" src="/__mockup/current-sinan/profile.jpg" alt="Portrait of Muhammed Sinan V P" />
              <div className="portrait-caption">Muhammed Sinan V P · Dubai</div>
            </div>
            <div className="location-note">ROOTED IN KERALA · BUILDING IN THE UAE</div>
          </div>
          <div className="hero-foot">
            <span><b>Currently</b> IT Support Engineer, Elite Zone Delivery Services</span>
            <span><b>Based in</b> Dubai, United Arab Emirates</span>
            <span>Flutter · Cloud · Systems</span>
          </div>
        </section>

        <section className="section about" id="story">
          <div className="section-inner">
            <div className="section-heading"><div className="kicker">01 / The person</div><h2>Curious about how things work — <em>and who they work for.</em></h2></div>
            <div className="about-grid">
              <div className="story-copy">
                <p>I’m <strong>Muhammed Sinan V P</strong>, a Software Developer with a passion for building cross-platform mobile applications and practical digital products. I care about clean engineering and thoughtful user experience in equal measure.</p>
                <p>I specialise in <strong>Flutter and Dart</strong>, complemented by front-end development, AWS cloud infrastructure and IT systems expertise. I’ve worked across IoT-driven AI systems, cloud environments provisioned with Ansible and Terraform, and the everyday networks and platforms people rely on.</p>
                <p>Today, I’m based in Dubai as an <strong>IT Support Engineer at Elite Zone Delivery Services</strong>, while seeking Flutter and Software Engineering opportunities worldwide. That mix of hands-on systems work and product building shapes how I approach each new problem.</p>
                <div className="languages" aria-label="Languages">
                  <span className="language">English · Fluent</span><span className="language">Malayalam · Native</span><span className="language">Hindi · Fluent</span><span className="language">Tamil · Conversational</span><span className="language">Arabic · Basic</span>
                </div>
              </div>
              <div>
                <dl className="details">
                  <div className="detail"><dt>Location</dt><dd>Dubai, UAE</dd></div>
                  <div className="detail"><dt>Email</dt><dd><a href="mailto:sinannisar5@gmail.com">sinannisar5@gmail.com</a></dd></div>
                  <div className="detail"><dt>Phone</dt><dd><a href="tel:+971502970329">+971 502970329</a></dd></div>
                  <div className="detail"><dt>LinkedIn</dt><dd><a href="https://linkedin.com/in/sinannisar" target="_blank" rel="noreferrer">linkedin.com/in/sinannisar</a></dd></div>
                  <div className="detail"><dt>GitHub</dt><dd><a href="https://github.com/sinannisar" target="_blank" rel="noreferrer">github.com/sinannisar</a></dd></div>
                </dl>
                <p className="details-note">A foundation in computer science, a career across software and systems, and a home now in the UAE.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section path" id="career">
          <div className="section-inner">
            <div className="section-heading"><div className="kicker">02 / The path</div><h2>A career shaped by <em>software and the systems beneath it.</em></h2></div>
            <div className="timeline">
              {career.map((item) => <article className="milestone" key={item.role}>
                <div className="milestone-date">{item.date}</div>
                <h3>{item.role}</h3>
                <p className="place">{item.place}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>)}
            </div>
            <div className="education">
              <div className="kicker">Before the work</div>
              <div className="edu-copy">
                <div className="milestone-date">2019 — 2023 · MANGALORE, INDIA</div>
                <h3>B.E. in Computer Science</h3>
                <p>P.A. College of Engineering, Mangalore · GPA 7.06<br />Software Engineering and Networking. Final project: IoT Bee Hive Monitoring System with YOLOv8 AI.</p>
                <p style={{marginTop:16}}>2017 — 2019 · Higher Secondary Certificate, Kerala Higher Secondary Examinations · 70%<br />Science stream, with Mathematics and Computer Science focus.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects" id="work">
          <div className="section-inner">
            <div className="section-heading"><div className="kicker">03 / A few things made</div><h2>Small, practical ideas — <em>made tangible.</em></h2></div>
            <div className="project-list">
              {projects.map((project) => <article className="project" key={project.no}>
                <div className="project-no">{project.no}</div>
                <div><div className="project-type">{project.type}</div><h3>{project.title}</h3></div>
                <p>{project.text}</p>
                <div className="project-meta"><div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><a className="github" href="https://github.com/sinannisar" target="_blank" rel="noreferrer">GitHub profile ↗</a></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section breadth">
          <div className="section-inner">
            <div className="section-heading"><div className="kicker">04 / The toolkit</div><h2>One toolkit, <em>many layers.</em></h2></div>
            <div className="skills-layout">
              <p className="skills-intro">From a mobile interface to the cloud it speaks to, I’m comfortable joining the dots across the stack.</p>
              <div className="skill-groups">{skillGroups.map(([name, ...skills]) => <div className="skill-group" key={name}><strong>{name}</strong><div>{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div>
            </div>
            <div className="recognition">
              <h3 className="subhead">Learning, along the way</h3>
              <div className="cert-list">{awards.map(([name, note]) => <div className="cert" key={name}><span>{name}</span><span>{note}</span></div>)}</div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-inner contact-layout">
            <div><div className="kicker">05 / The next chapter</div><h2>Have something <em>useful</em> to build?</h2><p className="contact-copy">Available for Flutter development, software engineering and web roles. Based in Dubai, open to on-site and remote opportunities worldwide.</p></div>
            <div className="contact-links">
              <a className="contact-link" href="mailto:sinannisar5@gmail.com"><span>Email</span><span>sinannisar5@gmail.com ↗</span></a>
              <a className="contact-link" href="tel:+971502970329"><span>Phone</span><span>+971 502970329 ↗</span></a>
              <a className="contact-link" href="https://linkedin.com/in/sinannisar" target="_blank" rel="noreferrer"><span>LinkedIn</span><span>linkedin.com/in/sinannisar ↗</span></a>
              <a className="contact-link" href="https://github.com/sinannisar" target="_blank" rel="noreferrer"><span>GitHub</span><span>github.com/sinannisar ↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><span>© Muhammed Sinan V P</span><span>Software Developer · Flutter · Dubai, UAE</span><a href="/__mockup/current-sinan/SINANNISAR.pdf" target="_blank" rel="noreferrer">Résumé PDF ↗</a></footer>
    </div>
  );
}
