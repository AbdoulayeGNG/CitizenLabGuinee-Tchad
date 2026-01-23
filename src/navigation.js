import { getPermalink, getBlogPermalink } from "~/utils/permalinks";

export const headerData = {
  links: [
    { text: "Accueil", href: getPermalink("/") },
    {
      text: "Qui nous sommes",
      links: [
        { text: "A propos", href: getPermalink("/a-propos") },
        { text: "Equipe", href: getPermalink("/equipe") },
        { text: "Partenaires", href: getPermalink("/partenaires") },
        { text: "FAQ", href: getPermalink("/faq") },
      ],
    },
    {
      text: "Projets & Réalisations",
      links: [
        { text: "Projets en cours", href: getPermalink("/projets") },
        { text: "Projets réalisés", href: getPermalink("/realisations") },
      ],
    },
    {
      text: "Médias & Actualités",
      links: [
        { text: "Actualités", href: getPermalink("/news") },
        { text: "Podcasts", href: getPermalink("/podcasts") },
        { text: "Vidéos", href: getPermalink("/videos") },
      ],
    },
    {
      text: "Formations & Ressources",
       href: getPermalink("/formations/bootcamps-ateliers"),
      //href: getPermalink("/formations"),
    },
    // {
    //   text: "Participez / Implications",
    //   links: [
    //     { text: "Devenir partenaire", href: getPermalink("/news") },
    //     {
    //       text: "Appels à candidatures",
    //       href: getPermalink("campagnes", "category"),
    //     },
    //   ],
    // },
    { text: "Contact", href: getPermalink("/contact") },
  ],
};

export const footerData = {
  links: [
    {
      title: "CitizenLab",
      links: [
        {
          text: "A Propos",
          href: getPermalink("/a-propos"),
        },
        { text: "Equipe", href: getPermalink("/equipe") },
      ],
    },
    {
      title: "Actualités",
      links: [
        { text: "Actualités", href: getPermalink("/news")},
        { text: "Blog", href: getPermalink("blog", "category") },
        { text: "Campagnes", href: "#" },
        { text: "Podcasts", href: getPermalink("/podcasts") },
        { text: "Vidéos", href: getPermalink("/videos") },
        { text: "Formations", href: getPermalink("/formations/bootcamps-ateliers") },
      ],
    },

    {
      title: "Nous Contacter",
      links: [
        {
          text: " acltchad@africtivistes.org",
          href: "mailto: acltchad@africtivistes.org ",
        },
        { text: "+23563133529", href: "tel:+23563133529" },
        { text: " WenakLabs, Avenue Nimery N’Djaména Tchad ", href: "WenakLabs, Avenue Nimery N’Djaména Tchad" },
      ],
    },
  ],
  secondaryLinks: [
    {
      text: "Termes et Conditions",
      href: getPermalink("/termes-et-conditions"),
    },
    //{ text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { icon: "tabler:brand-x", href: "https://x.com/citizenlab_TD/" },
    {
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/africtivistescitizenlabtchad?igsh=MWdxeTdrbDFhNWp1NQ==",
    },
    {
      icon: "tabler:brand-facebook",
      href: "https://www.facebook.com/AfricTivistescitizenlabtchad",
    },
    {
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/company/citizenlab-tchad/",
    },
    {
      icon: "tabler:brand-github",
      href: "https://github.com/AfricTivistes/citizenlabtchad",
    },
  ],
  footNote: `
  <a href="https://www.africtivistes.com" target= '_blank'>
  <img src="https://update.africtivistes.org/wp-content/uploads/2023/10/Logo-Africtivistes.png" alt="AfricTivistes" class="h-8" />
  </a>
    <a target= '_blank' class="text-green-600 hover:underline dark:text-gray-200" href="https://www.africtivistes.com"> AfricTivistes</a> · All rights reserved.
  `,
};
