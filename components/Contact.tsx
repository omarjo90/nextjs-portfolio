// components/Contact.tsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let’s Connect</h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-8">
        Whether you want to collaborate, discuss a project, or just say hi — feel free to reach out!
      </p>
      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/omar-josue-guzman-valerin-70742b34/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/omarjo90"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:omarjo90@gmail.com"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
