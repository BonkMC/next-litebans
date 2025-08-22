const language = {
  info: {
    country_code: "RU",
    lang_name: "Русский"
  },
  site: {
    description: "Сайт учёта наказаний BonkMC."
  },
  words: {
    bans: {
      singular: "Бан",
      plural: "Баны"
    },
    mutes: {
      singular: "Мут",
      plural: "Муты"
    },
    kicks: {
      singular: "Кик",
      plural: "Кики"
    },
    warns: {
      singular: "Предупреждение",
      plural: "Предупреждения"
    },
    yes: "Да",
    no: "Нет",
    player: "Игрок",
    staff: "Персонал",
    reason: "Причина",
    date: "Дата",
    expires: "Истекает",
    originServer: "Исходный сервер",
    notified: "Уведомлен",
  },
  pages: {
    home: {
      title: "Главная",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "Добро пожаловать в систему учёта наказаний BonkMC!"
    },
    history: {
      title: "История",
      // Placeholders: {total}
      subtitle: "Общее количество наказаний: {total}",
      table: {
        heads: {
          type: "Тип",
          player: "Игрок",
          by: "Наказал",
          reason: "Причина",
          date: "Дата",
          expires: "Истекает"
        },
        permanent: "Постоянное наказание",
        expire_not_applicable: "Н/Д",
        active: {
          true: "Активно",
          temporal: "Временное",
          false: "Истекло"
        }
      }
    },
    bans: {
      title: "Баны",
      // Placeholders: {total}
      subtitle: "Количество банов: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Забанен",
          reason: "Причина",
          date: "Дата",
          expires: "Истекает"
        },
        permanent: "Постоянный бан",
        active: {
          true: "Активно",
          temporal: "Временное",
          false: "Истекло"
        }
      },
      info: {
        title: "Бан #{id}",
        badges: {
          ipban: "Бан по IP",
          active: "Активно",
          expired: "Истекло",
          permanent: "Постоянно",
        }
      }
    },
    mutes: {
      title: "Муты",
      // Placeholders: {total}
      subtitle: "Количество мутов: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Замучен",
          reason: "Причина",
          date: "Дата",
          expires: "Истекает"
        },
        permanent: "Постоянный мут",
        active: {
          true: "Активно",
          temporal: "Временное",
          false: "Истекло"
        }
      },
      info: {
        title: "Мут #{id}",
        badges: {
          ipmute: "Мут по IP",
          active: "Активно",
          expired: "Истекло",
          permanent: "Постоянно",
        }
      }
    },
    warns: {
      title: "Предупреждения",
      // Placeholders: {total}
      subtitle: "Количество предупреждений: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Предупрежден",
          reason: "Причина",
          date: "Дата",
          notified: "Уведомлен"
        },
      },
      info: {
        title: "Предупреждение #{id}"
      }
    },
    kicks: {
      title: "Кики",
      // Placeholders: {total}
      subtitle: "Количество киков: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Кикнут",
          reason: "Причина",
          date: "Дата"
        }
      },
      info: {
        title: "Кик #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "Похоже, вы заблудились. Пожалуйста, вернитесь на главную страницу.",
        button: "Вернуться на главную"
      }
    }
  },
  pagination: {
    previous: "Назад",
    next: "Вперед"
  },
  notifications: {
    playerNotFound: {
      title: "Ошибка",
      description: "Игрок отсутствует в базе данных.",
    }
  }
}

module.exports = language;

