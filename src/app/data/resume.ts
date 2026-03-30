export interface ResumeData {
  basics: {
    name: string;
    title: string;
    label: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    summary: string;
  };
  skills: { category: string; items: string[] }[];
  experience: {
    company: string;
    role: string;
    team?: string;
    location: string;
    dates: string;
    duration: string;
    bullets: string[];
    metrics: string[];
  }[];
  projects: {
    title: string;
    role: string;
    description: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    school: string;
    dates: string;
  }[];
  certifications: string[];
  achievements: string[];
}

export const RESUME_DATA: ResumeData = {
  basics: {
    name: "Naresh Kumar Katta",
    title: "Senior .NET Full Stack Developer",
    label: "C# Corner MVP | Microservices & SaaS Architect",
    email: "nareshkumarkatta9@gmail.com",
    phone: "+91 9346491787",
    location: "Hyderabad, Telangana, India",
    github: "https://github.com/devnareshkumar",
    linkedin: "https://www.linkedin.com/in/naresh-kumar-katta",
    summary: "Senior .NET Full Stack Developer with 10.8 years building and scaling enterprise-grade microservices. Currently driving backend reliability and security across ADP's global payroll platform serving 100,000+ users — owning 15+ microservice features, leading .NET 5→8 migration, and reducing technical debt through TDD and code quality standards. Proven track record of leading cross-functional teams, mentoring junior engineers, and shipping production-grade systems at Deloitte and ADP. Strong in ASP.NET Core, C#, Angular, AWS, and Splunk/Dynatrace observability."
  },
  skills: [
    { category: "Backend Development", items: ["C#", ".NET 8 / Core", "ASP.NET Core", "Web APIs", "Entity Framework Core", "LINQ", ".NET Framework"] },
    { category: "Architecture & Design", items: ["Microservices", "RESTful API Design", "SOLID Principles", "Design Patterns", "Domain Driven Design"] },
    { category: "Frontend Technologies", items: ["Angular 15+", "JavaScript/ES6+", "TypeScript", "HTML5", "CSS3", "StencilJS", "SPAs"] },
    { category: "Data Management", items: ["SQL Server 2016", "MongoDB", "Entity Framework Core", "Query Optimisation", "Database Design"] },
    { category: "Cloud & Infrastructure", items: ["AWS (EC2, RDS, S3, VPC, Lambda)", "Docker", "Cloud Migration", "Infrastructure Optimisation"] },
    { category: "DevOps & CI/CD", items: ["Git", "GitLab CI", "Jenkins", "VSTS", "CI/CD Pipelines", "TDD", "Unit & Integration Testing"] },
    { category: "Observability & Monitoring", items: ["Splunk", "Dynatrace", "Application Performance Monitoring (APM)", "Incident Response"] },
    { category: "Team Leadership", items: ["Technical Mentoring", "Agile / SAFe", "Code Review", "Cross-functional Collaboration"] }
  ],
  experience: [
    {
      company: "ADP Private Limited",
      role: "Consultant",
      team: "myADP Time Platform Team",
      location: "Hyderabad",
      dates: "October 2022 – Present",
      duration: "3+ years",
      bullets: [
        "Delivered 15+ backend microservice features for the myADP Time payroll platform, improving end-to-end request reliability by eliminating 3 recurring production failure patterns that previously impacted 100,000+ global users.",
        "Led .NET 5.0 → .NET 8.0 migration across 8 microservices, cutting framework-related CVEs to zero and reducing cold-start latency by ~18%, improving overall platform startup performance.",
        "Built and maintained Splunk observability dashboards across 20+ microservices, reducing mean time-to-detect (MTTD) for production incidents and enabling proactive alerting for P1 issues.",
        "Collaborated with the GSO security team to remediate 12+ vulnerabilities, enforce OWASP standards, and harden API authentication across microservices — zero critical CVEs in the last 12 months.",
        "Delivered Angular UI bug fixes and minor feature enhancements, integrating with the existing StencilJS web component library and reducing reported UI defects by 30% over two sprints.",
        "Mentored 3 junior developers in ASP.NET Core architecture, C# best practices, and microservice design patterns — one promoted to mid-level within 24 months.",
        "Actively participated in cross-team Bug Bash initiative, surfacing and resolving 25+ critical and high-severity issues before production release cycles."
      ],
      metrics: ["15+ Features", "100k+ Users", "20+ Dashboards", "3 Mentees", "Zero Critical CVEs"]
    },
    {
      company: "Tech Chef's Software Private Limited (Acquired by Virtusa)",
      role: "Senior Consultant",
      location: "Bangalore",
      dates: "January 2021 – October 2022",
      duration: "1 year 10 months",
      bullets: [
        "Developed and enhanced the eCommerce Quotation Microservice using ASP.NET Core, C#, and Entity Framework Core in a strict TDD environment, achieving 85%+ unit test code coverage.",
        "Led 3 full feature releases end-to-end, coordinating product, engineering, and QA stakeholders — all delivered on schedule with zero P1 post-release incidents.",
        "Implemented Splunk and Dynatrace observability frameworks from scratch, giving the team first-ever real-time visibility into microservice performance and error rates.",
        "Authored Swagger / OpenAPI documentation for the Quotation service, reducing integration onboarding time for partner teams from 2 weeks to 6 days."
      ],
      metrics: ["85%+ Coverage", "3 Releases", "Zero P1 Incidents", "75% Onboarding Time Reduction"]
    },
    {
      company: "Deloitte Support Services India Private Limited",
      role: "Senior Analyst",
      location: "Hyderabad",
      dates: "June 2019 – August 2020",
      duration: "1 year 3 months",
      bullets: [
        "Led a 3-developer team building TCM, a web platform used by multinational organisations to manage tax audits and disputes with global tax authorities across 30+ jurisdictions.",
        "Architected and executed full migration of TCM to AWS PaaS (EC2, RDS, S3), reducing infrastructure operational costs by ~35% and improving system availability to 99.5% uptime SLA.",
        "Implemented security best practices and vulnerability remediation aligned with Deloitte's internal InfoSec standards.",
        "Awarded Deloitte Spot Award for exceptional onboarding speed and technical delivery quality on the TCM application."
      ],
      metrics: ["Team of 3", "30+ Jurisdictions", "35% Cost Reduction", "99.5% Uptime SLA", "Spot Award"]
    },
    {
      company: "G P INFOTECH PVT. LTD.",
      role: "Senior Software Engineer & Team Lead",
      location: "Hyderabad",
      dates: "February 2015 – May 2019",
      duration: "4 years 4 months",
      bullets: [
        "Led a team of 5 developers; established coding standards, Git workflow, and peer-review process that reduced post-release bug rate by 40% over 6 months.",
        "Built and maintained 4 production web applications using C# .NET, ASP.NET MVC, Angular, and SQL Server, serving government and enterprise clients.",
        "Architected and delivered IIWTMP — a full-stack government waste tyre management system integrating Google Maps GIS for geospatial facility tracking across 50+ sites.",
        "Executed AngularJS 1.6 → Angular 6 migration, improving page load speed by ~45% and enabling the team to adopt a modern component-based architecture.",
        "Diagnosed and resolved 150+ complex bugs in multi-threaded systems, reducing critical incident rate by 60% within the first year."
      ],
      metrics: ["Team of 5", "4 Apps", "150+ Bugs Fixed", "40% Bug Reduction", "60% Incident Reduction", "50+ Sites", "45% Performance Improvement"]
    }
  ],
  projects: [
    {
      title: "MYADP PLATFORM (ADP)",
      role: "Senior Consultant",
      description: "Microservice enhancements for payroll & time-tracking using ASP.NET Core, C#, MongoDB; Splunk/Dynatrace APM; security hardening; .NET 5→8 upgrade.",
      bullets: [
        "Delivered 15+ backend microservice features improving end-to-end request reliability by eliminating 3 recurring production failure patterns.",
        "Led .NET 5.0 → .NET 8.0 migration across 8 microservices, cutting framework-related CVEs to zero and reducing cold-start latency by ~18%.",
        "Built and maintained Splunk observability dashboards across 20+ microservices for real-time monitoring and incident detection.",
        "Collaborated with GSO security team to remediate 12+ vulnerabilities and enforce OWASP standards across microservices."
      ]
    },
    {
      title: "QUOTATION MICROSERVICE (Tech Chef's)",
      role: "Senior Consultant",
      description: "eCommerce quotation engine with TDD (85%+ coverage), Swagger docs, Splunk/Dynatrace observability, and full feature release ownership.",
      bullets: [
        "Developed and enhanced the eCommerce Quotation Microservice using ASP.NET Core, C#, and Entity Framework Core in a strict TDD environment.",
        "Led 3 full feature releases end-to-end, coordinating product, engineering, and QA stakeholders with zero P1 post-release incidents.",
        "Implemented Splunk and Dynatrace observability frameworks from scratch for real-time microservice visibility.",
        "Authored Swagger / OpenAPI documentation, reducing integration onboarding time for partner teams from 2 weeks to 6 days."
      ]
    },
    {
      title: "TAX CONTROVERSY MANAGEMENT (Deloitte)",
      role: "Senior Analyst",
      description: "Multi-jurisdiction tax audit management platform; AWS PaaS migration (EC2, RDS, S3); 35% cost reduction; 99.5% uptime SLA.",
      bullets: [
        "Led a 3-developer team building TCM, a web platform for managing tax audits and disputes across 30+ jurisdictions.",
        "Architected and executed full migration of TCM to AWS PaaS (EC2, RDS, S3), reducing infrastructure operational costs by ~35%.",
        "Improved system availability to 99.5% uptime SLA and implemented security best practices aligned with Deloitte's InfoSec standards.",
        "Awarded Deloitte Spot Award for exceptional onboarding speed and technical delivery quality."
      ]
    },
    {
      title: "IIWTMP (G P Infotech)",
      role: "Senior Software Engineer",
      description: "Government full-stack system (ASP.NET MVC, C#, Angular, SQL Server) with Google Maps GIS integration; AngularJS→Angular 6 migration.",
      bullets: [
        "Architected full-stack solution for government waste tyre management system with Google Maps GIS for geospatial facility tracking across 50+ sites.",
        "Established coding standards and peer-review process that reduced post-release bug rate by 40%.",
        "Executed AngularJS 1.6 → Angular 6 migration, improving page load speed by ~45% and enabling modern component-based architecture.",
        "Diagnosed and resolved 150+ complex bugs in multi-threaded systems, reducing critical incident rate by 60%."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Electronics & Communication Engineering",
      school: "Nova College of Engineering & Technology, JNTUK",
      dates: "2008 - 2012"
    }
  ],
  certifications: ["Microsoft Certified: Azure Fundamentals"],
  achievements: [
    "C# Corner MVP",
    "Deloitte Spot Award for exceptional technical delivery and onboarding",
    "10.8 Years of Industry Expertise",
    "15+ Microservice Features Delivered",
    "85%+ Code Coverage Achievement",
    "150+ Complex Bugs Resolved",
    "99.5% Uptime SLA Achieved",
    "40% Post-Release Bug Rate Reduction",
    "60% Critical Incident Rate Reduction",
    "45% Application Performance Improvement",
    "35% Infrastructure Cost Reduction",
    "Zero Critical CVEs in Last 12 Months"
  ]
};
