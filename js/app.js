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
  {
    title: "animation",
    githubLink: "https://github.com/MavlonbekKhakijanov/animation",
    vercelLink: "https://animation-six-bay.vercel.app/",
  },

  {
    title: "Crowfounding",
    githubLink: "https://github.com/MavlonbekKhakijanov/crowdfunding",
    vercelLink: "https://crowdfunding-sepia.vercel.app/",
  },
  {
    title: "Createx | Contact",
    githubLink: "https://github.com/MavlonbekKhakijanov/create-x.git",
    vercelLink: "https://create-x-azure.vercel.app/pages/contact/contact.html",
  },
  {
    title: "My-Team",
    githubLink: "https://github.com/MavlonbekKhakijanov/My-team",
    vercelLink: "https://my-team-wine.vercel.app/",
  },
  {
    title: "Prompt",
    githubLink:
      "https://github.com/MavlonbekKhakijanov/promptda-ism-kiritish.git",
    vercelLink: "https://promptda-ism-kiritish.vercel.app/",
  },
  {
    title: "if masalalari",
    githubLink: "https://github.com/MavlonbekKhakijanov/1-dars.git",
    vercelLink: "https://1-dras.vercel.app/",
  },
  {
    title: "for masalalari",
    githubLink: "https://github.com/MavlonbekKhakijanov/for-masalalari.git",
    vercelLink: "https://for-masalalari.vercel.app/",
  },
  {
    title: "function masalalari",
    githubLink:
      "https://github.com/MavlonbekKhakijanov/functions-masalalar.git",
    vercelLink: "https://functions-masalalar.vercel.app/",
  },
  {
    title: "figma-homework",
    githubLink: "https://github.com/MavlonbekKhakijanov/Graphy.git",
    vercelLink: "https://graphy-vert.vercel.app/",
  },
  {
    title: "Array Masalalari",
    githubLink: "https://github.com/MavlonbekKhakijanov/array-masalalari.git",
    vercelLink: "https://array-masalalari.vercel.app/",
  },
  {
    title: "Array Masalalari",
    githubLink: "https://github.com/MavlonbekKhakijanov/array-masalalari.git",
    vercelLink: "https://array-metodi-masalalari.vercel.app/",
  },
  {
    title: "Array Masalalari",
    githubLink:
      "https://github.com/MavlonbekKhakijanov/array-metodi-masalalari.git",
    vercelLink: "https://array-masalalari.vercel.app/",
  },
  {
    title: "array metodi masalalari ",
    githubLink: "https://github.com/MavlonbekKhakijanov/number-va-sybol.git",
    vercelLink: "https://number-va-sybol.vercel.app/",
  },
  {
    title: "repetition-task",
    githubLink: "https://github.com/MavlonbekKhakijanov/repetition-task.git",
    vercelLink: "https://repetition-task.vercel.app/",
  },
  {
    title: "exam",
    githubLink: "https://github.com/MavlonbekKhakijanov/4-oy-imtihon.git",
    vercelLink: "https://4-oy-imtihon-ashen.vercel.app/",
  },
  {
    title: "modal",
    githubLink: "https://github.com/MavlonbekKhakijanov/Modal.git",
    vercelLink: "https://modal-rosy-two.vercel.app/",
  },
  {
    title: "keyCode",
    githubLink: "https://github.com/MavlonbekKhakijanov/keyCodes.git",
    vercelLink: "https://key-codes-three.vercel.app/",
  },
  {
    title: "Liner-gardient",
    githubLink: "https://github.com/MavlonbekKhakijanov/liner-background.git",
    vercelLink: "https://liner-background.vercel.app/",
  },
  {
    title: "bit-music",
    githubLink: "https://github.com/MavlonbekKhakijanov/bit-music.git",
    vercelLink: "https://bit-music.vercel.app/",
  },
  {
    title: "guess number",
    githubLink: "https://github.com/MavlonbekKhakijanov/Guess-Number.git",
    vercelLink: "https://guess-number-kappa-two.vercel.app/",
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
