export default function Resume() {
  return (
    <section
      id="resume"
      className="flex h-screen max-w-sm flex-col items-center justify-center px-6 sm:max-w-xl"
    >
      <h1 className="w-full bg-gradient-to-b from-neutral-100 to-neutral-500 bg-clip-text py-8 text-4xl font-semibold text-transparent sm:text-5xl">
        Resume
      </h1>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="text-gray-400">
          Feel free to take a look at my resume and reach out if you like what
          you see! Looking for new entry-level full time positions and
          opportunities to learn and grow. 😊
        </div>

        <a
          className="rainbow-button transition-duration-300 mx-auto mt-12 max-w-max cursor-pointer rounded-full px-8 py-4 font-semibold text-gray-800 transition-all active:scale-95"
          href="/Dempster_Resume.pdf"
          target="_blank"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
