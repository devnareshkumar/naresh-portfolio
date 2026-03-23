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
    summary: "Senior .NET Full Stack Developer with 10.8 years of expertise developing and maintaining enterprise microservices using ASP.NET Core and C#. Experienced in modernising legacy systems, upgrading .NET versions, and improving code quality. Currently enhancing myADP Time platform, an API-based system integrating payroll and workforce management data. Skilled in security implementation, code reviews, and mentoring developers in Agile environments."
  },
  skills: [
    { category: "Backend", items: ["C#", ".NET Core", "ASP.NET Core", ".NET Framework", "ASP.NET MVC", "Web APIs", "Entity Framework Core", "LINQ"] },
    { category: "Architecture", items: ["Microservices", "System Design", "RESTful API Design", "SOLID Principles", "Design Patterns", "Scalability Engineering"] },
    { category: "Frontend", items: ["Angular 6+", "JavaScript/ES6+", "HTML5", "CSS3", "Single Page Applications (SPAs)"] },
    { category: "Cloud & Infra", items: ["AWS (EC2, RDS, S3, VPC)", "Cloud Migration", "Docker", "Infrastructure Optimisation"] },
    { category: "DevOps", items: ["Git", "GitLab", "GitLab CI", "Jenkins", "TFS", "VSTS", "CI/CD Pipelines"] },
    { category: "Observability", items: ["Splunk", "Dynatrace", "APM", "Incident Response"] },
    { category: "Leadership", items: ["Technical Leadership", "Team Mentoring", "Talent Development", "Cross-functional Collaboration"] }
  ],
  experience: [
    {
      company: "ADP India",
      role: "Consultant",
      team: "myADP Time Platform Team",
      location: "Hyderabad",
      dates: "October 2022 – Present",
      duration: "3+ years",
      bullets: [
        "Developed and enhanced 15+ microservice features for payroll and time-tracking platform serving 100,000+ employees globally, improving system reliability and user experience.",
        "Upgraded backend microservices from .NET 5.0 to .NET 8.0, improving framework compatibility and reducing technical debt.",
        "Worked on Angular UI bug fixes and minor enhancements in the myADP platform, supporting the team in integrating and using existing StencilJS web components.",
        "Implemented and maintained Splunk-based observability dashboards across 20+ microservices for real-time monitoring.",
        "Actively participated in Bug Bash initiative, collaborating with QA and development teams to identify and resolve critical bugs.",
        "Mentored 3+ junior developers on microservices patterns, C# best practices, and ASP.NET Core architecture.",
        "Collaborated with the security team (GSO) to implement security best practices and maintain code quality standards."
      ],
      metrics: ["15+ Features", "100k+ Users", "20+ Dashboards", "3+ Mentees"]
    },
    {
      company: "Virtusa / Tech Chef's",
      role: "Senior Consultant",
      location: "Bangalore",
      dates: "January 2021 – October 2022",
      duration: "1 year 10 months",
      bullets: [
        "Developed enhancements for Quotation Microservice using ASP.NET Core, C#, and Entity Framework Core in a Test-Driven Development (TDD) environment.",
        "Maintained, enhanced, and contributed to automated unit and integration tests, achieving 85%+ code coverage and improving overall product stability.",
        "Implemented Splunk and Dynatrace observability frameworks for microservice monitoring and performance visibility across the platform.",
        "Led 3+ feature releases, coordinating between product, engineering, and QA teams with high-quality standards."
      ],
      metrics: ["85%+ Coverage", "3+ Releases"]
    },
    {
      company: "Deloitte Digital",
      role: "Senior Analyst",
      location: "Hyderabad",
      dates: "June 2019 – August 2020",
      duration: "1 year 3 months",
      bullets: [
        "Led technical team of 3 developers on TCM (Tax Controversy Manager) project, a proprietary web-based platform designed to help multinational organizations manage tax audits and disputes.",
        "Migrated TCM project to AWS PaaS solution, improving system scalability, reducing operational costs, and enabling cloud-based infrastructure.",
        "Earned Spot Award for quick adaptation and successful onboarding of TCM application, demonstrating technical excellence and project delivery capability."
      ],
      metrics: ["Team of 3", "AWS Migration", "Spot Award"]
    },
    {
      company: "GP INFOTECH PVT. LTD.",
      role: "Senior Software Engineer & Team Lead",
      location: "Hyderabad",
      dates: "February 2015 – May 2019",
      duration: "4 years 4 months",
      bullets: [
        "Led engineering team of 5+ developers, establishing coding standards and best practices for team productivity.",
        "Built and maintained 4+ web applications using C# .NET, ASP.NET MVC, Angular, SQL Server.",
        "Diagnosed and resolved 150+ complex bugs in multi-threaded systems, improving application stability."
      ],
      metrics: ["Team of 5+", "4+ Apps", "150+ Bugs Fixed"]
    }
  ],
  projects: [
    {
      title: "MYADP PLATFORM (ADP)",
      role: "Senior Consultant",
      description: "Developed enhancements for backend APIs and microservices using ASP.NET Core, C#, and MongoDB, supporting payroll and time-tracking functionality.",
      bullets: [
        "Analysed system performance metrics using Dynatrace and Splunk to identify and address performance bottlenecks in microservice architecture.",
        "Implemented security best practices and vulnerability remediation across microservices to maintain code quality standards.",
        "Participated in upgrading backend microservices to newer versions of .NET Core and dependencies."
      ]
    },
    {
      title: "QUOTATION MICROSERVICE (Tech Chef's)",
      role: "Senior Consultant",
      description: "Developed enhancements for eCommerce Quotation Microservice using .NET Framework, C#, and Entity Framework Core.",
      bullets: [
        "Created Swagger API documentation for seamless integration and developer reference.",
        "Implemented Splunk/Dynatrace observability and achieved 85%+ code coverage with TDD practices."
      ]
    },
    {
      title: "TAX CONTROVERSY MANAGEMENT (Deloitte)",
      role: "Senior Analyst",
      description: "Led development of TCM application using ASP.NET, C#, and JavaScript.",
      bullets: [
        "Migrated the TCM application to AWS cloud infrastructure.",
        "Implemented security best practices and vulnerability remediation."
      ]
    },
    {
      title: "IIWTMP (G P Infotech)",
      role: "Senior Software Engineer",
      description: "Architected full-stack solution (ASP.NET MVC, C#, AngularJS) for government waste tyre management system.",
      bullets: [
        "Integrated Google Maps GIS functionality for geospatial tracking of waste facilities.",
        "Executed successful application migration from AngularJS 1.6 to Angular 6 improving performance."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Electronics & Communication Engineering",
      school: "Nova College of Engineering & Technology, JNTUK",
      dates: "2008 - 2012"
    },
    {
      degree: "Master of Technology (M.Tech) in Electronics & Communication Engineering – 2nd Year (Discontinued)",
      school: "ASR College of Engineering, JNTU Kakinada",
      dates: "2013 - 2015"
    }
  ],
  certifications: ["Microsoft Certified: Azure Fundamentals"],
  achievements: [
    "C# Corner MVP",
    "Spot Award at Deloitte Digital",
    "10.8 Years of Industry Expertise",
    "85%+ Code Coverage Achievement",
    "150+ Complex Bugs Resolved"
  ]
};
