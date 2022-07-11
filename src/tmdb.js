const API_KEY = "607f1b62720654986a3c8745f52c1ca6";
const API_BASE = "https://api.themoviedb.org/3";

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais Netflix",
        items: [],
      },
      {
        slug: "trending",
        title: "Recomendados",
        items: [],
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: [],
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: [],
      },
      {
        slug: "horror",
        title: "Terror",
        items: [],
      },
      {
        slug: "romance",
        title: "Romance",
        items: [],
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: [],
      },
    ];
  },
};
