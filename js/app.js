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
  {
    title: "tip colculator",
    githubLink: "https://github.com/MavlonbekKhakijanov/tip-calculatorKO",
    vercelLink: "https://tip-calculator-omega-eight.vercel.app/",
  },
  {
    title: "background cars",
    githubLink: "https://github.com/MavlonbekKhakijanov/background-video",
    vercelLink: "https://background-video-ten.vercel.app/",
  },
  {
    title: "Castaway",
    githubLink: "https://github.com/MavlonbekKhakijanov/Castawaay-Figma",
    vercelLink: "https://castawaay-figma.vercel.app/",
  },
  {
    title: "Create-x",
    githubLink:
      "https://github.com/MavlonbekKhakijanov/create-x/tree/main/pages/services",
    vercelLink:
      "https://create-x-azure.vercel.app/pages/services/services.html",
  },
  {
    title: "Create-x | news",
    githubLink: "https://github.com/MavlonbekKhakijanov/create-x",
    vercelLink: "https://create-x-azure.vercel.app/pages/news/news.html",
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
