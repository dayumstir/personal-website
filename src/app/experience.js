export default function Experience() {
  const list = [
    {
      company: "SISTIC Singapore",
      role: "Product Engineer",
      date: "May 2023 - Present",
      description: "Helped with this",
      techstack: ["React", "Express.js"],
    },
    {
      company: "National University of Singapore",
      role: "Teaching Assistant",
      date: "Aug 2023 - Present",
      description: "Helped with this",
      techstack: ["React", "Express.js"],
    },
    {
      company: "NUS Computing Club",
      role: "Director of Partnerships (Student Life)",
      date: "Aug 2022 - Jul 2023",
      description: "Helped with this",
      techstack: ["React", "Express.js"],
    },
  ];

  const Exp = ({ data }) => {
    const { company, role, description, techstack } = data;

    return (
      <div className="flex rounded-lg bg-[#31373D] p-8">
        <div className="flex w-48 justify-end pr-8">{data.date}</div>
        <div className="flex flex-col gap-2">
          <div>{company}</div>
          <div>{role}</div>
          <div>{description}</div>
          <TechStack data={techstack} />
        </div>
      </div>
    );
  };

  const TechStack = ({ data }) => {
    return (
      <div className="flex gap-4">
        {data.map((tech) => {
          return (
            <div className="bg-secondary min-w-fit rounded-3xl px-4 py-2 text-black">
              {tech}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="experience"
      className="flex h-screen flex-col items-center justify-center"
    >
      <div className="pb-8 text-4xl font-semibold text-primary">Experience</div>

      <div className="max-w-l flex flex-col gap-8">
        {list.map((data) => {
          return <Exp data={data} />;
        })}
      </div>
    </section>
  );
}
