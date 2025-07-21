// Configurazioni SEO centralizzate
export const seoConfig = {
  site: {
    name: 'Agriturismo La Rondine',
    url: 'https://agriturismolarondine.it',
    description: 'Ospitalità a Bolgheri Costa degli Etruschi - Agriturismo familiare immerso nei vigneti di Bolgheri',
    image: '/assets/img/export (1).png',
    twitterHandle: '@agriturismolarondine',
  },
  pages: {
    home: {
      title: 'Agriturismo La Rondine - Ospitalità a Bolgheri Costa degli Etruschi',
      description: 'Agriturismo familiare immerso nei vigneti di Bolgheri. Appartamenti confortevoli a 6 km dal mare. Wi-Fi gratuito, pet friendly.',
      canonical: 'https://agriturismolarondine.it/',
    },
    agriturismo: {
      title: 'Agriturismo La Rondine - Qui solo il suono della campagna',
      description: 'Scopri il nostro agriturismo a Bolgheri. Appartamenti in campagna con vista sui vigneti, a 6 km dal mare. Ideale per famiglie.',
      canonical: 'https://agriturismolarondine.it/agriturismo/',
    },
    appartamenti: {
      title: 'Appartamenti Agriturismo La Rondine - Bolgheri',
      description: 'Appartamenti confortevoli a Bolgheri: Farfalla, Libellula, Coccinella e Jolly. Tutti con Wi-Fi, aria condizionata e vista campagna.',
      canonical: 'https://agriturismolarondine.it/appartamenti/',
    },
    cantina: {
      title: 'Cantina Agriturismo La Rondine - Vini DOC Bolgheri',
      description: 'Degustazione vini DOC Bolgheri nella nostra cantina. Produzione artigianale di RIVERBERO, MITERRE, ASSIOLO, VERMENTINO e ROSATO.',
      canonical: 'https://agriturismolarondine.it/cantina/',
    },
    dintorni: {
      title: 'Dintorni Agriturismo La Rondine - Costa degli Etruschi',
      description: 'Scopri Bolgheri, Castagneto Carducci e la Costa degli Etruschi. Mare, terme, divertimenti e cultura a pochi km dal nostro agriturismo.',
      canonical: 'https://agriturismolarondine.it/dintorni/',
    },
  },
};

export function getSeoData(page: keyof typeof seoConfig.pages) {
  return seoConfig.pages[page];
}

export function getSiteSeo() {
  return seoConfig.site;
} 