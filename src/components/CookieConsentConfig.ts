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
                title: "Hello traveller, it's cookie time!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                showPreferencesBtn: "Manage preferences",
                footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
            },
            preferencesModal: {
                title: "Consent Preferences Center",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                savePreferencesBtn: "Save preferences",
                closeIconLabel: "Close modal",
                serviceCounterLabel: "Service|Services",
                sections: [
                    {
                        title: "Cookie Usage",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        linkedCategory: "necessary"
                    },
                    {
                        title: "Functionality Cookies",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        linkedCategory: "functionality"
                    },
                    {
                        title: "Analytics Cookies",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        linkedCategory: "analytics"
                    },
                    {
                        title: "Advertisement Cookies",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        linkedCategory: "marketing"
                    },
                    {
                        title: "More information",
                        description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                    }
                ]
            }
        },
        it: {
            consentModal: {
                title: "Ciao viaggiatore, è tempo di biscotti!",
                description: "Per gestire al meglio il nostro sito e renderlo sempre migliore per te utilizziamo alcuni servizi di verifica e controllo Qui hai la possibilità di scegliere a quali vuoi dare il consenso all'utilizzo. Non usiamo partner pubblicitari.",
                acceptAllBtn: "Accetta tutto",
                acceptNecessaryBtn: "Rifiuta tutto",
                showPreferencesBtn: "Gestisci preferenze",
                footer: "<a href=\"#link\">Informativa sulla privacy</a>\n<a href=\"#link\">Termini e condizioni</a>"
            },
            preferencesModal: {
                title: "Centro preferenze per il consenso",
                acceptAllBtn: "Accetta tutto",
                acceptNecessaryBtn: "Rifiuta tutto",
                savePreferencesBtn: "Salva le preferenze",
                closeIconLabel: "Chiudi la finestra",
                serviceCounterLabel: "Servizi",
                sections: [
                    {
                        title: "Utilizzo dei Cookie",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        title: "Cookie Strettamente Necessari <span class=\"pm__badge\">Sempre Attivati</span>",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        linkedCategory: "necessary"
                    },
                    {
                        title: "Cookie di Funzionalità",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        linkedCategory: "functionality"
                    },
                    {
                        title: "Cookie Analitici",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        linkedCategory: "analytics"
                    },
                    {
                        title: "Cookie Pubblicitari",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        linkedCategory: "marketing"
                    },
                    {
                        title: "Ulteriori informazioni",
                        description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                    }
                ]
            }
        }
    }
}
};
