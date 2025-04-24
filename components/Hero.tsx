import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 bg-gray-950 text-white flex flex-col justify-center items-center text-center px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Image
          src="/avatar.png"
          alt="Omar Guzman Valerín illustration"
          width={120}
          height={120}
          className="rounded-full"
          priority
        />
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
            Omar Guzman Valerin
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground mb-4">
            Software Developer in Test (SDET)
          </h2>
          <p className="max-w-xl text-base sm:text-lg text-muted-foreground mb-6">
            Specializing in backend automation, CI/CD validation, and scalable test frameworks across modern cloud and mobile platforms.
          </p>
          <a
            href="/Omar_Josue_Guzman_Valerin_Updated_CV.docx"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-sm font-semibold bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
