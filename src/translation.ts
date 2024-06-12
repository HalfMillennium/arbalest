export const TRANSLATIONS = {
  en: {
    translation: {
      language: "English",
      header: {
        navBar: {
          about: "What Is Arbalest?",
          features: "Features",
          pricing: "Pricing",
          contact: "Contact",
          docs: "Docs",
          account: "Account",
          signOut: "Sign Out",
          register: "Register",
        },
      },
      landingPage: {
        pitchOne:
          "From <strong>Website</strong> to <strong>Inbox</strong>: <under>Truly Effortless</under> Email Marketing",
        pitchTwo: {
          p1: "Transform your website into lead-generating marketing emails using the <strong>Arbalest Communications Director</strong>. Generate engaging, high-quality email blasts to keep your current (and potential) customers in the loop - <strong>all with only a few clicks</strong>.",
        },
        pitchThree: {
          p1: "Arbalest intelligently extracts content from your website and crafts captivating marketing emails tailored to your audience.",
          p2: "Spend less time manually telling users what's new and exciting, and spend more time creating new and exciting things.",
        },
        features: {
          commsDirector: {
            title: "Arbalest Communications Director",
            desc: "Our AI-powered communications director will be in charge of digesting your website's pages* in order to gain an understanding the objectives of your website. For digital products, this may also include the current state of user workflows for those products.",
          },
          emailCurator: {
            title: "E-mail Curator",
            desc: "Once you indicate new updates or announcements that you'd like to have disseminated to users, our e-mail curator will assess the new content, comparing the changes against a rolling summary of your website.",
          },
        },
      },
      campaigns: {
        createCampaignDrawer: {
          scanRateExplanation:
            "Arbalest scans your web pages at a rate you set to develop the next email blast. This rate should align with the volume of content you regularly produce for your web properties. For instance, if you create about 5 new blog posts daily, a bi-weekly or semi-weekly scan rate would be appropriate. <strong>Please note that this is the rate at which data is gathered, not necessarily the rate at which emails are dispatched</strong>. You will set that rate below!",
          scanRateSubtitles: {
            weekly:
              "One week content-ingestion range. Arbalest scans your web pages once per week on Friday at 5pm EST (GMT-5).",
            biweekly:
              "Two week content-ingestion range. Arbalest scans your web pages every-other week on Friday at 5pm EST (GMT-5).",
            monthly:
              "One month content-ingestion period. Arbalest scans your web pages on the first of every month at 5pm EST (GMT-5).",
            quarterly:
              "3-month content-ingestion period, beginning 3 months after the campaign start date.",
          },
          dispatchRateExplanation:
            "The time at which the next email digest/blast will be sent. All email digests <strong>must</strong> be approved before digests are dispatched, unless auto-dispatch rules have been set.",
          dispatchRateSubtitles: {
            weekly:
              "Users within the associated mailing list will receive a weekly digest on Fridays at 5pm EST (GMT-5).",
            biweekly:
              "Users will receive a digest every two weeks, on Friday at 5pm EST (GMT-5), beginning the first Friday after the start date.",
            monthly:
              "Users will receive a monthly update digest on the first of every month at 5pm EST (GMT-5).",
            quarterly:
              "Users will receive quarterly update digests beginning 3 months after the start date, at 5pm EST (GMT-5).",
          },
        },
        campaignsTable: {
          workflowStatus:
            "Workflow status includes details about the date of the campaign's next email digest, as well as basic information about the last digest.",
        },
      },
      properties: {
        noPropertiesMenu: {
          title: "You haven't linked any properties yet.",
          subtitle: "Let's change that.",
          actionText: "Create Arbalest property",
        },
      },
    },
  },
  es: {
    translation: {
      language: "Español",
      header: {
        greeting: "¡Bienvenido",
        navbar: {
          about: "Información",
          contact: "Contacto",
          contribute: "Contribuir",
        },
        auth: {
          signOut: "Desconectar",
          logIn: "Iniciar sesión",
          getStarted: "Empezar",
        },
      },
    },
  },
};
