// src/constants/jobs.ts

export type Job = {
  id: number;
  title: string;
  location: string;
  department: string;
  type: string;
  posted: string;
  description: string;
};

export const JOBS: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    department: "Engineering",
    type: "Full-Time",
    posted: "Jan 12, 2025",
    description: `
We are looking for a Frontend Developer skilled in React, TypeScript, and Material-UI.
You will build beautiful, scalable interfaces for our products.

**Responsibilities:**
- Build responsive React applications
- Collaborate with backend and design teams
- Optimize performance for web and mobile

**Requirements:**
- 2+ years in React/TypeScript
- Strong knowledge of CSS and Material UI
- Familiarity with REST/GraphQL
    `,
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "New York, USA",
    department: "Engineering",
    type: "Full-Time",
    posted: "Jan 05, 2025",
    description: `
We are hiring a Backend Developer experienced in Node.js, Java, or Spring Boot.

**Responsibilities:**
- Build scalable backend APIs
- Work with databases (Postgres/MySQL)
- Deploy and monitor services on AWS

**Requirements:**
- 3+ years backend development
- Experience with cloud infra
- Strong problem-solving skills
    `,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "San Francisco, USA",
    department: "Design",
    type: "Contract",
    posted: "Dec 28, 2024",
    description: `
Join our design team to create user-focused digital experiences.

**Responsibilities:**
- Design UI mockups and prototypes
- Collaborate with product teams
- Ensure design consistency across platforms

**Requirements:**
- 2+ years in UI/UX design
- Familiarity with Figma/Adobe XD
- Strong portfolio
    `,
  },
];
