export default function Resume() {
  return (
    <section
      id="resume"
      className="flex h-screen max-w-xl flex-col items-center justify-center"
    >
      <div className="w-full py-8 text-5xl font-semibold text-primary">
        Resume
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="text-lg">
          Feel free to take a look at my resume and reach out if you like what
          you see! Looking for new internship positions and opportunities to
          learn and grow. 😊
        </div>

        <a href="/dempster-resume.pdf" target="_blank">
          <div className="glow-effect transition-duration-300 mx-auto mt-12 max-w-max cursor-pointer rounded-full bg-primary px-8 py-4 font-semibold text-black transition-all">
            View My Resume
          </div>
        </a>
      </div>
    </section>
  );
}
