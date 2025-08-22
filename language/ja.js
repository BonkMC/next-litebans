const language = {
  info: {
    country_code: "JP",
    lang_name: "日本語"
  },
  site: {
    description: "BonkMCの処罰記録サイト。"
  },
  words: {
    bans: {
      singular: "禁止",
      plural: "禁止"
    },
    mutes: {
      singular: "ミュート",
      plural: "ミュート"
    },
    kicks: {
      singular: "キック",
      plural: "キック"
    },
    warns: {
      singular: "警告",
      plural: "警告"
    },
    yes: "はい",
    no: "いいえ",
    player: "プレイヤー",
    staff: "スタッフ",
    reason: "理由",
    date: "日付",
    expires: "期限",
    originServer: "元のサーバー",
    notified: "通知済み",
  },
  pages: {
    home: {
      title: "ホーム",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "BonkMCの処罰記録へようこそ！"
    },
    history: {
      title: "履歴",
      // Placeholders: {total}
      subtitle: "総処罰数: {total}",
      table: {
        heads: {
          type: "種類",
          player: "プレイヤー",
          by: "処罰者",
          reason: "理由",
          date: "日付",
          expires: "期限"
        },
        permanent: "永久処罰",
        expire_not_applicable: "該当なし",
        active: {
          true: "有効",
          temporal: "一時的",
          false: "期限切れ"
        }
      }
    },
    bans: {
      title: "禁止",
      // Placeholders: {total}
      subtitle: "禁止数: {total}",
      table: {
        heads: {
          player: "プレイヤー",
          by: "禁止した人",
          reason: "理由",
          date: "日付",
          expires: "期限"
        },
        permanent: "永久禁止",
        active: {
          true: "有効",
          temporal: "一時的",
          false: "期限切れ"
        }
      },
      info: {
        title: "禁止 #{id}",
        badges: {
          ipban: "IP禁止",
          active: "有効",
          expired: "期限切れ",
          permanent: "永久",
        }
      }
    },
    mutes: {
      title: "ミュート",
      // Placeholders: {total}
      subtitle: "ミュート数: {total}",
      table: {
        heads: {
          player: "プレイヤー",
          by: "ミュートした人",
          reason: "理由",
          date: "日付",
          expires: "期限"
        },
        permanent: "永久ミュート",
        active: {
          true: "有効",
          temporal: "一時的",
          false: "期限切れ"
        }
      },
      info: {
        title: "ミュート #{id}",
        badges: {
          ipmute: "IPミュート",
          active: "有効",
          expired: "期限切れ",
          permanent: "永久",
        }
      }
    },
    warns: {
      title: "警告",
      // Placeholders: {total}
      subtitle: "警告数: {total}",
      table: {
        heads: {
          player: "プレイヤー",
          by: "警告した人",
          reason: "理由",
          date: "日付",
          notified: "通知済み"
        },
      },
      info: {
        title: "警告 #{id}"
      }
    },
    kicks: {
      title: "キック",
      // Placeholders: {total}
      subtitle: "キック数: {total}",
      table: {
        heads: {
          player: "プレイヤー",
          by: "キックした人",
          reason: "理由",
          date: "日付"
        }
      },
      info: {
        title: "キック #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "迷子になったようです。ホームページに戻ってください。",
        button: "ホームページに戻る"
      }
    }
  },
  pagination: {
    previous: "前へ",
    next: "次へ"
  },
  notifications: {
    playerNotFound: {
      title: "エラー",
      description: "プレイヤーがデータベースに存在しません。",
    }
  }
}

module.exports = language;

