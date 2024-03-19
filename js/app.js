const projects = [
  {
    title: "Perfume Company",
    githubLink: "https://github.com/MavlonbekKhakijanov/PERFUME-homework",
    vercelLink: "https://perfume-homework.vercel.app/",
  },
  {
    title: "Span Company",
    githubLink: "https://github.com/MavlonbekKhakijanov/Span-company",
    vercelLink: "https://span-company.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
