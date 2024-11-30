import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
        flipButtons: false
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4 (dummy)</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
        another: {
          label: 'Another one (dummy)',
        },
      },
    },
  },
  language: {
    default: "it",
    autoDetect: "browser",
    translations: {
        en: {
            consentModal: {
                title: "Cookie Consent",
                description: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking 'Accept all', you consent to our use of cookies.",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                showPreferencesBtn: "Manage preferences",
                footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
            },
            preferencesModal: {
                title: "Cookie Preferences",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                savePreferencesBtn: "Save preferences",
                closeIconLabel: "Close modal",
                serviceCounterLabel: "Service|Services",
                sections: [
                    {
                        title: "Cookie Usage",
                        description: "We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want."
                    },
                    {
                        title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                        description: "These cookies are essential for the website to function and cannot be switched off in our systems.",
                        linkedCategory: "necessary"
                    },
                    {
                        title: "Functionality Cookies",
                        description: "These cookies enable the website to provide enhanced functionality and personalization.",
                        linkedCategory: "functionality"
                    },
                    {
                        title: "Analytics Cookies",
                        description: "These cookies help us understand how our website is being used or how effective our marketing campaigns are.",
                        linkedCategory: "analytics"
                    },
                    {
                        title: "Advertisement Cookies",
                        description: "These cookies are used to make advertising messages more relevant to you.",
                        linkedCategory: "marketing"
                    },
                    {
                        title: "More information",
                        description: "For any query in relation to our policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact us</a>."
                    }
                ]
            }
        },
        it: {
            consentModal: {
                title: "Consenso sui Cookie",
                description: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione, fornire annunci o contenuti personalizzati e analizzare il nostro traffico. Cliccando su 'Accetta tutto', acconsenti all'uso dei cookie.",
                acceptAllBtn: "Accetta tutto",
                acceptNecessaryBtn: "Rifiuta tutto",
                showPreferencesBtn: "Gestisci preferenze",
                footer: "<a href=\"#link\">Informativa sulla privacy</a>\n<a href=\"#link\">Termini e condizioni</a>"
            },
            preferencesModal: {
                title: "Preferenze sui Cookie",
                acceptAllBtn: "Accetta tutto",
                acceptNecessaryBtn: "Rifiuta tutto",
                savePreferencesBtn: "Salva le preferenze",
                closeIconLabel: "Chiudi la finestra",
                serviceCounterLabel: "Servizi",
                sections: [
                    {
                        title: "Utilizzo dei Cookie",
                        description: "Utilizziamo i cookie per garantire le funzionalità di base del sito web e per migliorare la tua esperienza online. Puoi scegliere per ogni categoria di accettare o rifiutare quando vuoi."
                    },
                    {
                        title: "Cookie Strettamente Necessari <span class=\"pm__badge\">Sempre Attivati</span>",
                        description: "Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disattivati nei nostri sistemi.",
                        linkedCategory: "necessary"
                    },
                    {
                        title: "Cookie di Funzionalità",
                        description: "Questi cookie consentono al sito web di fornire funzionalità avanzate e personalizzazione.",
                        linkedCategory: "functionality"
                    },
                    {
                        title: "Cookie Analitici",
                        description: "Questi cookie ci aiutano a capire come viene utilizzato il nostro sito web o quanto sono efficaci le nostre campagne di marketing.",
                        linkedCategory: "analytics"
                    },
                    {
                        title: "Cookie Pubblicitari",
                        description: "Questi cookie vengono utilizzati per rendere i messaggi pubblicitari più pertinenti per te.",
                        linkedCategory: "marketing"
                    },
                    {
                        title: "Ulteriori informazioni",
                        description: "Per qualsiasi domanda relativa alla nostra politica sui cookie e alle tue scelte, ti preghiamo di <a class=\"cc__link\" href=\"#yourdomain.com\">contattarci</a>."
                    }
                ]
            }
        }
    }
}
};
