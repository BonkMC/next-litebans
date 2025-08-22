const language = {
  info: {
    country_code: "PT",
    lang_name: "Português"
  },
  site: {
    description: "O site de registros de punições da BonkMC."
  },
  words: {
    bans: {
      singular: "Banimento",
      plural: "Banimentos"
    },
    mutes: {
      singular: "Silenciamento",
      plural: "Silenciamentos"
    },
    kicks: {
      singular: "Expulsão",
      plural: "Expulsões"
    },
    warns: {
      singular: "Advertência",
      plural: "Advertências"
    },
    yes: "Sim",
    no: "Não",
    player: "Jogador",
    staff: "Equipe",
    reason: "Motivo",
    date: "Data",
    expires: "Expira",
    originServer: "Servidor de origem",
    notified: "Notificado",
  },
  pages: {
    home: {
      title: "Início",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "Bem-vindo aos registros de punições da BonkMC!"
    },
    history: {
      title: "Histórico",
      // Placeholders: {total}
      subtitle: "Total de punições: {total}",
      table: {
        heads: {
          type: "Tipo",
          player: "Jogador",
          by: "Punido por",
          reason: "Motivo",
          date: "Data",
          expires: "Expira"
        },
        permanent: "Punição permanente",
        expire_not_applicable: "N/A",
        active: {
          true: "Ativo",
          temporal: "Temporário",
          false: "Expirado"
        }
      }
    },
    bans: {
      title: "Banimentos",
      // Placeholders: {total}
      subtitle: "Total de banimentos: {total}",
      table: {
        heads: {
          player: "Jogador",
          by: "Banido por",
          reason: "Motivo",
          date: "Data",
          expires: "Expira"
        },
        permanent: "Banimento permanente",
        active: {
          true: "Ativo",
          temporal: "Temporário",
          false: "Expirado"
        }
      },
      info: {
        title: "Banimento #{id}",
        badges: {
          ipban: "Banimento por IP",
          active: "Ativo",
          expired: "Expirado",
          permanent: "Permanente",
        }
      }
    },
    mutes: {
      title: "Silenciamentos",
      // Placeholders: {total}
      subtitle: "Total de silenciamentos: {total}",
      table: {
        heads: {
          player: "Jogador",
          by: "Silenciado por",
          reason: "Motivo",
          date: "Data",
          expires: "Expira"
        },
        permanent: "Silenciamento permanente",
        active: {
          true: "Ativo",
          temporal: "Temporário",
          false: "Expirado"
        }
      },
      info: {
        title: "Silenciamento #{id}",
        badges: {
          ipmute: "Silenciamento por IP",
          active: "Ativo",
          expired: "Expirado",
          permanent: "Permanente",
        }
      }
    },
    warns: {
      title: "Advertências",
      // Placeholders: {total}
      subtitle: "Total de advertências: {total}",
      table: {
        heads: {
          player: "Jogador",
          by: "Advertido por",
          reason: "Motivo",
          date: "Data",
          notified: "Notificado"
        },
      },
      info: {
        title: "Advertência #{id}"
      }
    },
    kicks: {
      title: "Expulsões",
      // Placeholders: {total}
      subtitle: "Total de expulsões: {total}",
      table: {
        heads: {
          player: "Jogador",
          by: "Expulso por",
          reason: "Motivo",
          date: "Data"
        }
      },
      info: {
        title: "Expulsão #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "Parece que você está perdido. Por favor, volte para a página inicial.",
        button: "Voltar para a página inicial"
      }
    }
  },
  pagination: {
    previous: "Anterior",
    next: "Próximo"
  },
  notifications: {
    playerNotFound: {
      title: "Erro",
      description: "O jogador não existe no banco de dados.",
    }
  }
}

module.exports = language;

