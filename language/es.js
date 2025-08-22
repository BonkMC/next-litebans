const language = {
  info: {
    country_code: "ES",
    lang_name: "Español"
  },
  site: {
    description: "El sitio de registros de sanciones de BonkMC."
  },
  words: {
    bans: {
      singular: "Prohibición",
      plural: "Prohibiciones"
    },
    mutes: {
      singular: "Silencio",
      plural: "Silencios"
    },
    kicks: {
      singular: "Expulsión",
      plural: "Expulsiones"
    },
    warns: {
      singular: "Advertencia",
      plural: "Advertencias"
    },
    yes: "Sí",
    no: "No",
    player: "Jugador",
    staff: "Personal",
    reason: "Razón",
    date: "Fecha",
    expires: "Expira",
    originServer: "Servidor de origen",
    notified: "Notificado",
  },
  pages: {
    home: {
      title: "Inicio",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "¡Bienvenido a los registros de sanciones de BonkMC!"
    },
    history: {
      title: "Historial",
      // Placeholders: {total}
      subtitle: "Total de sanciones: {total}",
      table: {
        heads: {
          type: "Tipo",
          player: "Jugador",
          by: "Sancionado por",
          reason: "Razón",
          date: "Fecha",
          expires: "Expira"
        },
        permanent: "Sanción permanente",
        expire_not_applicable: "N/A",
        active: {
          true: "Activo",
          temporal: "Temporal",
          false: "Expirado"
        }
      }
    },
    bans: {
      title: "Prohibiciones",
      // Placeholders: {total}
      subtitle: "Cantidad de prohibiciones: {total}",
      table: {
        heads: {
          player: "Jugador",
          by: "Prohibido por",
          reason: "Razón",
          date: "Fecha",
          expires: "Expira"
        },
        permanent: "Prohibición permanente",
        active: {
          true: "Activo",
          temporal: "Temporal",
          false: "Expirado"
        }
      },
      info: {
        title: "Prohibición #{id}",
        badges: {
          ipban: "Prohibición por IP",
          active: "Activo",
          expired: "Expirado",
          permanent: "Permanente",
        }
      }
    },
    mutes: {
      title: "Silencios",
      // Placeholders: {total}
      subtitle: "Cantidad de silencios: {total}",
      table: {
        heads: {
          player: "Jugador",
          by: "Silenciado por",
          reason: "Razón",
          date: "Fecha",
          expires: "Expira"
        },
        permanent: "Silencio permanente",
        active: {
          true: "Activo",
          temporal: "Temporal",
          false: "Expirado"
        }
      },
      info: {
        title: "Silencio #{id}",
        badges: {
          ipmute: "Silencio por IP",
          active: "Activo",
          expired: "Expirado",
          permanent: "Permanente",
        }
      }
    },
    warns: {
      title: "Advertencias",
      // Placeholders: {total}
      subtitle: "Cantidad de advertencias: {total}",
      table: {
        heads: {
          player: "Jugador",
          by: "Advertido por",
          reason: "Razón",
          date: "Fecha",
          notified: "Notificado"
        },
      },
      info: {
        title: "Advertencia #{id}"
      }
    },
    kicks: {
      title: "Expulsiones",
      // Placeholders: {total}
      subtitle: "Cantidad de expulsiones: {total}",
      table: {
        heads: {
          player: "Jugador",
          by: "Expulsado por",
          reason: "Razón",
          date: "Fecha"
        }
      },
      info: {
        title: "Expulsión #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "Parece que estás perdido. Por favor, vuelve a la página principal.",
        button: "Volver a la página principal"
      }
    }
  },
  pagination: {
    previous: "Anterior",
    next: "Siguiente"
  },
  notifications: {
    playerNotFound: {
      title: "Error",
      description: "El jugador no existe en la base de datos.",
    }
  }
}

module.exports = language;

