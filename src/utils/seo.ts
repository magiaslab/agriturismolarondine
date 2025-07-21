// Utility per la gestione SEO centralizzata

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export function generateSEOTitle(baseTitle: string, location?: string): string {
  const suffix = location ? ` | ${location}` : " | Bolgheri, Toscana";
  return `${baseTitle}${suffix}`;
}

export function generateSEODescription(baseDescription: string, features?: string[]): string {
  if (!features || features.length === 0) {
    return baseDescription;
  }
  
  const featuresText = features.join(", ");
  return `${baseDescription} ${featuresText}.`;
}

export function generateKeywords(baseKeywords: string[], additional?: string[]): string[] {
  const defaultKeywords = [
    "agriturismo",
    "toscana", 
    "bolgheri",
    "vacanze",
    "appartamenti",
    "vigneti",
    "mare",
    "degustazioni",
    "vini",
    "pet friendly"
  ];
  
  return [...defaultKeywords, ...baseKeywords, ...(additional || [])];
}

// Configurazioni SEO predefinite per le pagine principali
export const pageSEOConfigs = {
  home: {
    title: "Agriturismo La Rondine - Vacanze in Toscana tra Vigneti e Mare",
    description: "Scopri l'Agriturismo La Rondine a Bolgheri: appartamenti confortevoli immersi nei vigneti toscani, a soli 6 km dal mare. Vacanze perfette in famiglia con degustazioni di vini DOC.",
    keywords: ["agriturismo bolgheri", "vacanze toscana", "appartamenti mare", "degustazioni vini"]
  },
  appartamenti: {
    title: "Appartamenti Agriturismo La Rondine - Confronta e Scegli",
    description: "4 appartamenti confortevoli immersi nei vigneti di Bolgheri: Farfalla, Libellula, Coccinella e Jolly. Tutti con Wi-Fi, aria condizionata e vista panoramica.",
    keywords: ["appartamenti bolgheri", "farfalla", "libellula", "coccinella", "jolly"]
  },
  cantina: {
    title: "Cantina Agriturismo La Rondine - Vini DOC Bolgheri",
    description: "Degustazioni di vini DOC Bolgheri nella nostra cantina familiare. Scopri RIVERBERO, MITERRE, ASSIOLO, VERMENTINO e ROSATO.",
    keywords: ["cantina bolgheri", "vini doc", "degustazioni", "riverbero", "miterre"]
  },
  dintorni: {
    title: "Cosa Fare a Bolgheri - Mare, Terme, Divertimenti",
    description: "Scopri le attrazioni della Costa degli Etruschi: mare a 6 km, terme, Cavallino Matto, dog beach. Ideale per vacanze complete.",
    keywords: ["costa etruschi", "mare bolgheri", "terme", "cavallino matto", "dog beach"]
  }
};

// Schema.org markup per diverse tipologie di contenuto
export const schemaMarkup = {
  agriturismo: {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Agriturismo La Rondine",
    "description": "Agriturismo familiare immerso nei vigneti di Bolgheri",
    "url": "https://agriturismolarondine.it",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bolgheri",
      "addressRegion": "Toscana",
      "addressCountry": "IT"
    }
  },
  appartamento: (nome: string, descrizione: string) => ({
    "@context": "https://schema.org",
    "@type": "LodgingUnit",
    "name": nome,
    "description": descrizione,
    "url": `https://agriturismolarondine.it/${nome.toLowerCase()}/`
  })
}; 