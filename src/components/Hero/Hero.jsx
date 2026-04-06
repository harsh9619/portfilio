import './Hero.css'
import { totalExperience, projects, jobs } from '../../constants/data';
import { calculateTotalExperience } from '../../utils/index';
import IMG from '../../assets/user-avatar.png';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="grid-lines" />
      </div>

      <div className="container hero-body">
        <div className="hero-layout">

          {/* ── LEFT: text content ── */}
          <div className="hero-content">
            <h1 className="hero-name">
              Harsh<br />
              <span className="name-outline">Shukla</span>
            </h1>

            <p className="hero-role">
              <span className="role-bracket">[</span>
              Software Development Engineer III
              <span className="role-bracket">]</span>
            </p>

            <p className="hero-sub">
              {totalExperience} years building <em>scalable microservices</em>,{' '}
              <em>full-stack web apps</em> &amp; <em>hybrid mobile applications</em> —
              from database design to pixel-perfect UIs.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View My Work <span>→</span></a>
              <a href="#contact" className="btn-outline">Get In Touch</a>
            </div>

            <div className="hero-stats">
              {[
                { n: `${totalExperience}`,                                          l: 'Years Experience' },
                { n: `${projects.length}+`,                                         l: 'Major Projects' },
                { n: `${calculateTotalExperience(jobs, jobs[0].period)}`,           l: 'Years at LeadSchool' },
              ].map((s, i) => (
                <>
                  {i > 0 && <div key={`d-${i}`} className="stat-div" />}
                  <div key={s.n} className="hero-stat">
                    <span className="stat-n">{s.n}</span>
                    <span className="stat-l">{s.l}</span>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* ── RIGHT: portrait ── */}
          <div className="hero-image-wrap">
            {/* <div className="hero-img-ring" /> */}
            {/* <div className="hero-img-ring hero-img-ring--2" /> */}
            <div className="hero-img-container">
              <img
                src={IMG}
                alt="Harsh Shukla"
                className="hero-img"
              />
            </div>
            {/* decorative corner accent */}
            {/* <div className="hero-img-accent" /> */}
          </div>

        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-bar" />
        <span>scroll</span>
      </div>
    </section>
  );
}



// import './Hero.css'
// import { totalExperience, projects, jobs } from '../../constants/data';
// import { calculateDuration, calculateTotalExperience } from '../../utils/index';


// export default function Hero() {
//   return (
//     <section id="home" className="hero">
//       <div className="hero-bg">
//         <div className="orb orb1" />
//         <div className="orb orb2" />
//         <div className="orb orb3" />
//         <div className="grid-lines" />
//       </div>

//       <div className="container hero-body">
//         {/* <div className="hero-badge">
//           <span className="badge-pulse" />
//           Available for new opportunities
//         </div> */}

//         <h1 className="hero-name">
//           Harsh<br />
//           <span className="name-outline">Shukla</span>
//         </h1>

//         <p className="hero-role">
//           <span className="role-bracket">[</span>
//           Software Development Engineer III
//           <span className="role-bracket">]</span>
//         </p>

//         <p className="hero-sub">
//           {totalExperience} years building <em>scalable microservices</em>, <em>full-stack web apps</em>
//           {' '}& <em>hybrid mobile applications</em> — from database design to pixel-perfect UIs.
//         </p>

//         <div className="hero-actions">
//           <a href="#projects" className="btn-primary">View My Work <span>→</span></a>
//           <a href="#contact" className="btn-outline">Get In Touch</a>
//         </div>

//         <div className="hero-stats">
//           {[
//             { n: `${totalExperience}`, l: 'Years Experience' },
//             { n: `${projects.length}+`, l: 'Major Projects' },
//             { n: `${calculateTotalExperience(jobs, jobs[0].period)}`, l: 'Years at LeadSchool' },
//           ].map((s, i) => (
//             <>
//               {i > 0 && <div key={`d-${i}`} className="stat-div" />}
//               <div key={s.n} className="hero-stat">
//                 <span className="stat-n">{s.n}</span>
//                 <span className="stat-l">{s.l}</span>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>

//       <div className="scroll-hint">
//         <div className="scroll-bar" />
//         <span>scroll</span>
//       </div>
//     </section>
//   )
// }
