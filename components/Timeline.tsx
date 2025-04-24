// components/Timeline.tsx
export default function Timeline() {
    const entries = [
      {
        type: "Experience",
        title: "Software Quality Assurance Developer",
        org: "Toptal",
        date: "October 2020 – Present",
        description: (
            <>
            Providing end-to-end QA for global clients — backend & frontend automation, CI/CD pipeline validation, and cross-platform testing. Skilled with Pytest, Selenium, Docker, and more.{" "}
            <a
                href="https://www.toptal.com/resume/omar-josue-guzman-valerin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300"
            >
                View my profile
            </a>
            .
            </>
        ),
      },
          
      {
        type: "Experience",
        title: "Senior QA Automation Engineer",
        org: "Moody’s Analytics",
        date: "April 2024 – Present",
        description:
          "Leading test automation across CI/CD pipelines. Specializing in API, UI, and performance testing for cloud-native applications using Playwright, Robot Framework, and Python.",
      },
      {
        type: "Experience",
        title: "Software Engineer in Test",
        org: "Sysdig",
        date: "November 2022 – April 2024",
        description:
          "Automated backend and web testing using Python and Cucumber. Managed testing of Kubernetes clusters and cloud provisioning (AWS, GCP, Azure) using CLI, Terraform, and Ansible. CI/CD with Jenkins and GitHub.",
      },
      {
        type: "Experience",
        title: "Senior QA Automation Engineer",
        org: "Instawork",
        date: "November 2021 – October 2022",
        description:
          "Focused on mobile automation for iOS & Android using BrowserStack and Jenkins. Developed automated test cases and performed PR reviews within agile teams to ensure product quality.",
      },
    //   {
    //     type: "Education",
    //     title: "Bachelor's in Systems Engineering",
    //     org: "Universidad Latina de Costa Rica",
    //     date: "2008 – 2012",
    //     description:
    //       "Completed undergraduate studies in computer science and systems engineering with focus on software development and IT infrastructure.",
    //   },
    ];
  
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Experience & Education</h2>
        <div className="max-w-3xl mx-auto space-y-10 relative before:absolute before:inset-y-0 before:left-4 before:w-1 before:bg-cyan-600">
          {entries.map((entry, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-1 top-1 w-6 h-6 bg-cyan-400 rounded-full border-4 border-gray-950" />
              <div>
                <h3 className="text-xl font-semibold">{entry.title}</h3>
                <p className="text-sm text-gray-300">{entry.org} — {entry.date}</p>
                <p className="mt-2 text-gray-400 text-sm">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  