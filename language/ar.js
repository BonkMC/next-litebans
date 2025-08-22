const language = {
  info: {
    country_code: "AR",
    lang_name: "العربية"
  },
  site: {
    description: "موقع سجلات العقوبات الخاص بـ BonkMC."
  },
  words: {
    bans: {
      singular: "حظر",
      plural: "حظر"
    },
    mutes: {
      singular: "كتم",
      plural: "كتم"
    },
    kicks: {
      singular: "طرد",
      plural: "طرد"
    },
    warns: {
      singular: "تحذير",
      plural: "تحذيرات"
    },
    yes: "نعم",
    no: "لا",
    player: "اللاعب",
    staff: "الطاقم",
    reason: "السبب",
    date: "التاريخ",
    expires: "ينتهي",
    originServer: "الخادم الأصلي",
    notified: "تم الإخطار",
  },
  pages: {
    home: {
      title: "الصفحة الرئيسية",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "مرحبًا بكم في سجلات العقوبات لشبكة Bonk!"
    },
    history: {
      title: "التاريخ",
      // Placeholders: {total}
      subtitle: "إجمالي العقوبات: {total}",
      table: {
        heads: {
          type: "النوع",
          player: "اللاعب",
          by: "المعاقِب",
          reason: "السبب",
          date: "التاريخ",
          expires: "ينتهي"
        },
        permanent: "عقوبة دائمة",
        expire_not_applicable: "غير متوفر",
        active: {
          true: "نشط",
          temporal: "مؤقت",
          false: "منتهي"
        }
      }
    },
    bans: {
      title: "الحظر",
      // Placeholders: {total}
      subtitle: "عدد الحظر: {total}",
      table: {
        heads: {
          player: "اللاعب",
          by: "تم الحظر بواسطة",
          reason: "السبب",
          date: "التاريخ",
          expires: "ينتهي"
        },
        permanent: "حظر دائم",
        active: {
          true: "نشط",
          temporal: "مؤقت",
          false: "منتهي"
        }
      },
      info: {
        title: "الحظر #{id}",
        badges: {
          ipban: "حظر IP",
          active: "نشط",
          expired: "منتهي",
          permanent: "دائم",
        }
      }
    },
    mutes: {
      title: "الكتم",
      // Placeholders: {total}
      subtitle: "عدد الكتم: {total}",
      table: {
        heads: {
          player: "اللاعب",
          by: "تم الكتم بواسطة",
          reason: "السبب",
          date: "التاريخ",
          expires: "ينتهي"
        },
        permanent: "كتم دائم",
        active: {
          true: "نشط",
          temporal: "مؤقت",
          false: "منتهي"
        }
      },
      info: {
        title: "الكتم #{id}",
        badges: {
          ipmute: "كتم IP",
          active: "نشط",
          expired: "منتهي",
          permanent: "دائم",
        }
      }
    },
    warns: {
      title: "التحذيرات",
      // Placeholders: {total}
      subtitle: "عدد التحذيرات: {total}",
      table: {
        heads: {
          player: "اللاعب",
          by: "تم التحذير بواسطة",
          reason: "السبب",
          date: "التاريخ",
          notified: "تم الإخطار"
        },
      },
      info: {
        title: "التحذير #{id}"
      }
    },
    kicks: {
      title: "الطرد",
      // Placeholders: {total}
      subtitle: "عدد الطرد: {total}",
      table: {
        heads: {
          player: "اللاعب",
          by: "تم الطرد بواسطة",
          reason: "السبب",
          date: "التاريخ"
        }
      },
      info: {
        title: "الطرد #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "يبدو أنك تائه. يرجى العودة إلى الصفحة الرئيسية.",
        button: "العودة إلى الصفحة الرئيسية"
      }
    }
  },
  pagination: {
    previous: "السابق",
    next: "التالي"
  },
  notifications: {
    playerNotFound: {
      title: "خطأ",
      description: "اللاعب غير موجود في قاعدة البيانات.",
    }
  }
}

module.exports = language;

