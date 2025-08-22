const language = {
  info: {
    country_code: "DE",
    lang_name: "Deutsch"
  },
  site: {
    description: "Die Strafenübersicht von BonkMC."
  },
  words: {
    bans: {
      singular: "Sperre",
      plural: "Sperren"
    },
    mutes: {
      singular: "Stummschaltung",
      plural: "Stummschaltungen"
    },
    kicks: {
      singular: "Rauswurf",
      plural: "Rauswürfe"
    },
    warns: {
      singular: "Warnung",
      plural: "Warnungen"
    },
    yes: "Ja",
    no: "Nein",
    player: "Spieler",
    staff: "Mitarbeiter",
    reason: "Grund",
    date: "Datum",
    expires: "Ablauf",
    originServer: "Ursprungsserver",
    notified: "Benachrichtigt",
  },
  pages: {
    home: {
      title: "Startseite",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "Willkommen bei der Strafenübersicht von BonkMC!"
    },
    history: {
      title: "Verlauf",
      // Placeholders: {total}
      subtitle: "Gesamte Strafen: {total}",
      table: {
        heads: {
          type: "Typ",
          player: "Spieler",
          by: "Bestrafung durch",
          reason: "Grund",
          date: "Datum",
          expires: "Ablauf"
        },
        permanent: "Dauerhafte Strafe",
        expire_not_applicable: "N/V",
        active: {
          true: "Aktiv",
          temporal: "Zeitlich begrenzt",
          false: "Abgelaufen"
        }
      }
    },
    bans: {
      title: "Sperren",
      // Placeholders: {total}
      subtitle: "Anzahl der Sperren: {total}",
      table: {
        heads: {
          player: "Spieler",
          by: "Gesperrt von",
          reason: "Grund",
          date: "Datum",
          expires: "Ablauf"
        },
        permanent: "Dauerhafte Sperre",
        active: {
          true: "Aktiv",
          temporal: "Zeitlich begrenzt",
          false: "Abgelaufen"
        }
      },
      info: {
        title: "Sperre #{id}",
        badges: {
          ipban: "IP-Sperre",
          active: "Aktiv",
          expired: "Abgelaufen",
          permanent: "Dauerhaft",
        }
      }
    },
    mutes: {
      title: "Stummschaltungen",
      // Placeholders: {total}
      subtitle: "Anzahl der Stummschaltungen: {total}",
      table: {
        heads: {
          player: "Spieler",
          by: "Stummgeschaltet von",
          reason: "Grund",
          date: "Datum",
          expires: "Ablauf"
        },
        permanent: "Dauerhafte Stummschaltung",
        active: {
          true: "Aktiv",
          temporal: "Zeitlich begrenzt",
          false: "Abgelaufen"
        }
      },
      info: {
        title: "Stummschaltung #{id}",
        badges: {
          ipmute: "IP-Stummschaltung",
          active: "Aktiv",
          expired: "Abgelaufen",
          permanent: "Dauerhaft",
        }
      }
    },
    warns: {
      title: "Warnungen",
      // Placeholders: {total}
      subtitle: "Anzahl der Warnungen: {total}",
      table: {
        heads: {
          player: "Spieler",
          by: "Gewarnt von",
          reason: "Grund",
          date: "Datum",
          notified: "Benachrichtigt"
        },
      },
      info: {
        title: "Warnung #{id}"
      }
    },
    kicks: {
      title: "Rauswürfe",
      // Placeholders: {total}
      subtitle: "Anzahl der Rauswürfe: {total}",
      table: {
        heads: {
          player: "Spieler",
          by: "Rausgeworfen von",
          reason: "Grund",
          date: "Datum"
        }
      },
      info: {
        title: "Rauswurf #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "Es scheint, als ob Sie sich verlaufen haben. Bitte kehren Sie zur Startseite zurück.",
        button: "Zurück zur Startseite"
      }
    }
  },
  pagination: {
    previous: "Zurück",
    next: "Weiter"
  },
  notifications: {
    playerNotFound: {
      title: "Fehler",
      description: "Der Spieler ist nicht in der Datenbank vorhanden.",
    }
  }
}

module.exports = language;

