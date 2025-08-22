const language = {
  info: {
    country_code: "FR",
    lang_name: "Français"
  },
  site: {
    description: "Le site des enregistrements de sanctions de BonkMC."
  },
  words: {
    bans: {
      singular: "Bannissement",
      plural: "Bannissements"
    },
    mutes: {
      singular: "Sourdine",
      plural: "Sourdines"
    },
    kicks: {
      singular: "Expulsion",
      plural: "Expulsions"
    },
    warns: {
      singular: "Avertissement",
      plural: "Avertissements"
    },
    yes: "Oui",
    no: "Non",
    player: "Joueur",
    staff: "Personnel",
    reason: "Raison",
    date: "Date",
    expires: "Expiration",
    originServer: "Serveur d'origine",
    notified: "Notifié",
  },
  pages: {
    home: {
      title: "Accueil",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "Bienvenue sur les enregistrements de sanctions de BonkMC !"
    },
    history: {
      title: "Historique",
      // Placeholders: {total}
      subtitle: "Total des sanctions : {total}",
      table: {
        heads: {
          type: "Type",
          player: "Joueur",
          by: "Sanctionné par",
          reason: "Raison",
          date: "Date",
          expires: "Expiration"
        },
        permanent: "Sanction permanente",
        expire_not_applicable: "N/A",
        active: {
          true: "Actif",
          temporal: "Temporaire",
          false: "Expiré"
        }
      }
    },
    bans: {
      title: "Bannissements",
      // Placeholders: {total}
      subtitle: "Nombre de bannissements : {total}",
      table: {
        heads: {
          player: "Joueur",
          by: "Banni par",
          reason: "Raison",
          date: "Date",
          expires: "Expiration"
        },
        permanent: "Bannissement permanent",
        active: {
          true: "Actif",
          temporal: "Temporaire",
          false: "Expiré"
        }
      },
      info: {
        title: "Bannissement #{id}",
        badges: {
          ipban: "Bannissement IP",
          active: "Actif",
          expired: "Expiré",
          permanent: "Permanent",
        }
      }
    },
    mutes: {
      title: "Sourdines",
      // Placeholders: {total}
      subtitle: "Nombre de sourdines : {total}",
      table: {
        heads: {
          player: "Joueur",
          by: "Mis en sourdine par",
          reason: "Raison",
          date: "Date",
          expires: "Expiration"
        },
        permanent: "Sourdine permanente",
        active: {
          true: "Actif",
          temporal: "Temporaire",
          false: "Expiré"
        }
      },
      info: {
        title: "Sourdine #{id}",
        badges: {
          ipmute: "Sourdine IP",
          active: "Actif",
          expired: "Expiré",
          permanent: "Permanent",
        }
      }
    },
    warns: {
      title: "Avertissements",
      // Placeholders: {total}
      subtitle: "Nombre d'avertissements : {total}",
      table: {
        heads: {
          player: "Joueur",
          by: "Averti par",
          reason: "Raison",
          date: "Date",
          notified: "Notifié"
        },
      },
      info: {
        title: "Avertissement #{id}"
      }
    },
    kicks: {
      title: "Expulsions",
      // Placeholders: {total}
      subtitle: "Nombre d'expulsions : {total}",
      table: {
        heads: {
          player: "Joueur",
          by: "Expulsé par",
          reason: "Raison",
          date: "Date"
        }
      },
      info: {
        title: "Expulsion #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "On dirait que vous êtes perdu. Veuillez revenir à la page principale.",
        button: "Retour à la page d'accueil"
      }
    }
  },
  pagination: {
    previous: "Précédent",
    next: "Suivant"
  },
  notifications: {
    playerNotFound: {
      title: "Erreur",
      description: "Le joueur n'existe pas dans la base de données.",
    }
  }
}

module.exports = language;

