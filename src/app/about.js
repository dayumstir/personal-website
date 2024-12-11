export default function About() {
  return (
    <section
      id="about"
      className="flex h-screen flex-col justify-center"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="bg-grid-white/[0.2] relative flex h-screen w-screen items-center justify-center bg-black">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 flex flex-col items-center">
          <p className="text-3xl font-semibold text-gray-400 sm:text-5xl">
            Hi, my name is
          </p>
          <p className="bg-gradient-to-b from-neutral-100 to-neutral-600 bg-clip-text pt-4 text-5xl font-bold text-transparent sm:text-8xl">
            Dempster Tay
          </p>
          <div className="flex flex-col items-center text-center">
            <p className="max-w-xs pt-6 text-neutral-500 sm:max-w-lg sm:pt-10 sm:text-lg">
              I'm an aspiring software engineer focusing on full stack
              development as I enjoy creating beautiful yet performant software
              experiences for the masses.
            </p>
            <p className="max-w-xs pt-6 text-neutral-500 sm:max-w-lg sm:pt-3 sm:text-lg">
              Outside of coding, I enjoy rock climbing and the problem solving
              aspect of tackling challenging routes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
