export default function Resume() {
  return (
    <section
      id="resume"
      className="flex h-screen max-w-sm flex-col items-center justify-center sm:max-w-xl"
    >
      <div className="w-full py-8 text-4xl font-semibold text-primary sm:text-5xl">
        Resume
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="sm:text-lg">
          Feel free to take a look at my resume and reach out if you like what
          you see! Looking for new internship positions and opportunities to
          learn and grow. 😊
        </div>

        <div className="glow-effect transition-duration-300 mx-auto mt-12 max-w-max cursor-pointer rounded-full bg-primary px-8 py-4 font-semibold text-black transition-all">
          <a href="/dempster-resume.pdf" target="_blank">
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
