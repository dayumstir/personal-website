export default function About() {
  return (
    <section
      id="about"
      className="flex h-screen flex-col justify-center"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <p className="text-2xl font-bold sm:text-3xl">Hi, my name is </p>

      <p className="pt-2 text-5xl font-extrabold text-primary sm:pt-4 sm:text-8xl">
        Dempster Tay.
      </p>
      <p className="max-w-xs pt-6 text-slate-300 sm:max-w-xl sm:pt-12 sm:text-xl">
        I'm an aspiring software engineer and full stack developer. Looking for
        new opportunities to learn and grow.
      </p>
    </section>
  );
}
