const language = {
  info: {
    country_code: "IN",
    lang_name: "हिंदी"
  },
  site: {
    description: "BonkMC के दंड रिकॉर्ड साइट।"
  },
  words: {
    bans: {
      singular: "प्रतिबंध",
      plural: "प्रतिबंध"
    },
    mutes: {
      singular: "मौन",
      plural: "मौन"
    },
    kicks: {
      singular: "निकालना",
      plural: "निकालना"
    },
    warns: {
      singular: "चेतावनी",
      plural: "चेतावनियाँ"
    },
    yes: "हाँ",
    no: "नहीं",
    player: "खिलाड़ी",
    staff: "स्टाफ़",
    reason: "कारण",
    date: "तारीख",
    expires: "समाप्ति",
    originServer: "मूल सर्वर",
    notified: "सूचित",
  },
  pages: {
    home: {
      title: "मुख्य पृष्ठ",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "BonkMC के दंड रिकॉर्ड में आपका स्वागत है!"
    },
    history: {
      title: "इतिहास",
      // Placeholders: {total}
      subtitle: "कुल दंड: {total}",
      table: {
        heads: {
          type: "प्रकार",
          player: "खिलाड़ी",
          by: "दंडित करने वाला",
          reason: "कारण",
          date: "तारीख",
          expires: "समाप्ति"
        },
        permanent: "स्थायी दंड",
        expire_not_applicable: "एन/ए",
        active: {
          true: "सक्रिय",
          temporal: "अस्थायी",
          false: "समाप्त"
        }
      }
    },
    bans: {
      title: "प्रतिबंध",
      // Placeholders: {total}
      subtitle: "प्रतिबंधों की संख्या: {total}",
      table: {
        heads: {
          player: "खिलाड़ी",
          by: "प्रतिबंधित करने वाला",
          reason: "कारण",
          date: "तारीख",
          expires: "समाप्ति"
        },
        permanent: "स्थायी प्रतिबंध",
        active: {
          true: "सक्रिय",
          temporal: "अस्थायी",
          false: "समाप्त"
        }
      },
      info: {
        title: "प्रतिबंध #{id}",
        badges: {
          ipban: "आईपी प्रतिबंध",
          active: "सक्रिय",
          expired: "समाप्त",
          permanent: "स्थायी",
        }
      }
    },
    mutes: {
      title: "मौन",
      // Placeholders: {total}
      subtitle: "मौन की संख्या: {total}",
      table: {
        heads: {
          player: "खिलाड़ी",
          by: "मौन करने वाला",
          reason: "कारण",
          date: "तारीख",
          expires: "समाप्ति"
        },
        permanent: "स्थायी मौन",
        active: {
          true: "सक्रिय",
          temporal: "अस्थायी",
          false: "समाप्त"
        }
      },
      info: {
        title: "मौन #{id}",
        badges: {
          ipmute: "आईपी मौन",
          active: "सक्रिय",
          expired: "समाप्त",
          permanent: "स्थायी",
        }
      }
    },
    warns: {
      title: "चेतावनियाँ",
      // Placeholders: {total}
      subtitle: "चेतावनियों की संख्या: {total}",
      table: {
        heads: {
          player: "खिलाड़ी",
          by: "चेतावनी देने वाला",
          reason: "कारण",
          date: "तारीख",
          notified: "सूचित"
        },
      },
      info: {
        title: "चेतावनी #{id}"
      }
    },
    kicks: {
      title: "निकालना",
      // Placeholders: {total}
      subtitle: "निकालने की संख्या: {total}",
      table: {
        heads: {
          player: "खिलाड़ी",
          by: "निकाला गया",
          reason: "कारण",
          date: "तारीख"
        }
      },
      info: {
        title: "निकालना #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "ऐसा लगता है कि आप खो गए हैं। कृपया मुख्य पृष्ठ पर वापस जाएं।",
        button: "मुख्य पृष्ठ पर वापस जाएं"
      }
    }
  },
  pagination: {
    previous: "पिछला",
    next: "अगला"
  },
  notifications: {
    playerNotFound: {
      title: "त्रुटि",
      description: "खिलाड़ी डेटाबेस में मौजूद नहीं है।",
    }
  }
}

module.exports = language;

