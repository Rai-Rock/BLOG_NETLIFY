type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "contattami@riccardogualtieri.it",
  title: "Benvenut*",
  description:
    "Sono appassionato di quiz e alla continua ricerca del mio posto nel mondo. Dopo la laurea in design , ho scoperto una passione per il mondo della finanza. Ho creato questo *taccuino digitale *per dar spazio ai miei pensieri e dar vita ad un archivio personale.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/gxanshu",
    },
    {
      label: "Linkedin",
      link: "https://bento.me/gxanshu",
    },
    {
      label: "Github",
      link: "https://github.com/gxanshu",
    },
  ],
};

export default presentation;
