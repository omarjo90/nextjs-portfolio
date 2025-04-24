import {
    SiPython,
    SiDocker,
    SiSelenium,
    SiCypress,
    SiTypescript,
    SiRobotframework,
    SiGithub,
    SiJira,
  } from "react-icons/si";
  
  const skills = [
    { name: "Python", icon: SiPython },
    { name: "Docker", icon: SiDocker },
    { name: "Selenium", icon: SiSelenium },
    { name: "Cypress", icon: SiCypress },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Robotframework", icon: SiRobotframework },
    { name: "GitHub", icon: SiGithub },
    { name: "Jira", icon: SiJira },
  ];
  
  export default function Skills() {
    return (
      <section className="py-20 bg-gray-950 text-white text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <Icon className="text-5xl text-cyan-400 drop-shadow-md" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  