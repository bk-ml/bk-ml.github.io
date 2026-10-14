import { useEffect } from 'react';

export default function InstagramCaseStudy() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, []);

  return (
    <section className="caseStudy">
      <h1 className="caseStudyTitle">
        Social Publishing Platform{' '}
        <span className="highlight">(Instagram Integration)</span>
      </h1>

      <p className="caseStudySubtitle">
        Built and owned a distributed social publishing system enabling secure
        and reliable Instagram content publishing through asynchronous workflows
        across multiple teams and external APIs.
      </p>

      {/* OVERVIEW */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Overview</h2>
        <p className="caseStudyText">
          Led end-to-end design and delivery of a social publishing platform
          that enabled users to publish content directly to Instagram. Owned the
          system from architecture design and API definition to production
          rollout across US, Spain, and India teams.
        </p>
      </div>

      {/* PROBLEM */}
      <div className="caseStudySection caseStudySection--emphasis">
        <h2 className="caseStudySectionTitle">Problem</h2>
        <p className="caseStudyText">
          Instagram publishing required coordination across multiple external
          APIs with strict media constraints, OAuth-based authentication, and
          unreliable third-party dependencies. A synchronous flow caused poor
          user experience, tight coupling, and high failure rates.
        </p>
      </div>

      {/* SYSTEM DESIGN */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">System Design</h2>
        <ul className="caseStudyList">
          <li>
            Designed event-driven architecture for multi-step publishing
            workflows
          </li>
          <li>
            Modeled durable publish state tracking across distributed services
          </li>
          <li>
            Orchestrated 5–6 external API calls using workflow-based execution
          </li>
          <li>Built system for idempotency, retries, and safe reprocessing</li>
        </ul>
      </div>

      {/* CORE CHALLENGES */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Key Engineering Challenges</h2>

        <ul className="caseStudyList">
          <li>
            <b>Asynchronous Execution:</b> Moved from synchronous processing to
            async workflows using 202-based response model
          </li>

          <li>
            <b>Reliability:</b> Built retry mechanisms, failure recovery, and
            safe reprocessing for external API failures
          </li>

          <li>
            <b>Security:</b> Designed secure OAuth token lifecycle management
            with refresh workflows and access control collaboration
          </li>

          <li>
            <b>Media Constraints:</b> Handled requirement for publicly
            accessible media while managing security risks (malware + exposure
            control)
          </li>
        </ul>
      </div>

      {/* CROSS TEAM */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Cross-Team Execution</h2>
        <ul className="caseStudyList">
          <li>
            Collaborated across US frontend, Spain backend, and platform teams
          </li>
          <li>Authored architecture decision records (ADRs)</li>
          <li>Aligned rollout strategy across distributed engineering teams</li>
          <li>Led phased production rollout as primary backend owner</li>
        </ul>
      </div>

      {/* IMPACT */}
      <div className="caseStudySection caseStudySection--emphasis">
        <h2 className="caseStudySectionTitle">Impact</h2>
        <ul className="caseStudyList">
          <li>Delivered production-grade Instagram publishing system</li>
          <li>Enabled reliable asynchronous publishing workflows at scale</li>
          <li>Reduced system fragility in multi-API orchestration flows</li>
          <li>Successfully shipped as end-to-end system owner across teams</li>
        </ul>
      </div>

      {/* LEARNINGS */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Key Learnings</h2>
        <ul className="caseStudyList">
          <li>Designing resilient systems around unreliable external APIs</li>
          <li>Importance of orchestration over direct API chaining</li>
          <li>Balancing security constraints with product usability</li>
          <li>Driving alignment across distributed engineering teams</li>
        </ul>
      </div>

      {/* BACK */}
      <div className="caseStudyBack">
        <a href="/">← Back to Work</a>
      </div>
    </section>
  );
}
