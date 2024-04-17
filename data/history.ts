import type { Event } from "../components/Timeline";

const history: Event[] = [
  {
    title: "IT System Administrator",
    location: "Middlesex Aerospace",
    duration: [new Date("2020-01-06"), new Date("2023-07-14")],
    details: [
      "Initially implemented an infrastructure overhaul and further maintained to best practices for Cyber Essentials Plus certification requirements",
      "Maintained and improved the Windows environment to Microsoft best practices and resilience",
      "Technical authority for Microsoft 365 (Autopilot/Intune, Exchange, Teams) issues and user device security",
      "Improved business processes through streamlining or automation solutions",
      "Provided all lines of support",
      "Installation, configuration, and maintenance of operating systems and software",
      "Ensured systems are backed up, patched and secured - e.g. Firewalls, VPNs, Servers and Content filter",
      "Created and updated technical and end user documentation and policies",
      "Procurement of new hardware and upgrading of existing hardware"
    ],
  },
  {
    title: "Power BI Developer",
    location: "Middlesex Aerospace",
    duration: [new Date("2022-09-01"), new Date("2023-07-14")],
    details: [
      "Implemented and maintained a Power BI infrastructure including licensing, workspaces, row-level security, apps, security groups and data refresh schedules",
      "Designed, developed, and implemented Power BI solutions to meet internal departments/staff requirements",
      "Analyzed and understood complex data sets, including data from various sources such as MSSQL databases, Excel files, and APIs. Performed data cleansing, transformation, and modeling to ensure data accuracy and reliability",
      "Developed visually appealing and user-friendly reports and dashboards using Power BI features such as visualizations, drill-down capabilities, and interactive filters. Presenting data insights in a compelling and understandable manner to facilitate data-driven decision-making",
      "Configured data refresh schedules and maintained data consistency",
      "Created new and maintained existing SAP Crystal Reports"
    ],
  },
  {
    title: "Data Analyst",
    location: "Sagoss",
    duration: [new Date("2023-08-16")],
    details: [
      "Implemented and maintain a Power BI infrastructure including licensing, workspaces, row-level security, apps and security groups",
      "Work closely with stakeholders to understand their requirements and translate them into effective and actionable reports",
      "Designing, developing, and implementing Power BI solutions to meet customers business requirements",
      "Creating data models, reports and dashboards using Power BI Desktop and other related tools",
      "Data modelling in MySQL",
      "Solving customer issues raised in Jira",
      "Creating Change Request documentation to aid Developers in new feature implementations within the Sagoss software"
    ],
  },
];

export default history;