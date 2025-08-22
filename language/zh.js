const language = {
  info: {
    country_code: "CN",
    lang_name: "中文"
  },
  site: {
    description: "BonkMC 的惩罚记录网站。"
  },
  words: {
    bans: {
      singular: "封禁",
      plural: "封禁"
    },
    mutes: {
      singular: "禁言",
      plural: "禁言"
    },
    kicks: {
      singular: "踢出",
      plural: "踢出"
    },
    warns: {
      singular: "警告",
      plural: "警告"
    },
    yes: "是",
    no: "否",
    player: "玩家",
    staff: "工作人员",
    reason: "原因",
    date: "日期",
    expires: "到期",
    originServer: "来源服务器",
    notified: "已通知",
  },
  pages: {
    home: {
      title: "首页",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "欢迎来到 BonkMC 的惩罚记录！"
    },
    history: {
      title: "历史",
      // Placeholders: {total}
      subtitle: "总惩罚数：{total}",
      table: {
        heads: {
          type: "类型",
          player: "玩家",
          by: "惩罚者",
          reason: "原因",
          date: "日期",
          expires: "到期"
        },
        permanent: "永久惩罚",
        expire_not_applicable: "N/A",
        active: {
          true: "生效中",
          temporal: "临时",
          false: "已过期"
        }
      }
    },
    bans: {
      title: "封禁",
      // Placeholders: {total}
      subtitle: "封禁总数：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "封禁者",
          reason: "原因",
          date: "日期",
          expires: "到期"
        },
        permanent: "永久封禁",
        active: {
          true: "生效中",
          temporal: "临时",
          false: "已过期"
        }
      },
      info: {
        title: "封禁 #{id}",
        badges: {
          ipban: "IP 封禁",
          active: "生效中",
          expired: "已过期",
          permanent: "永久",
        }
      }
    },
    mutes: {
      title: "禁言",
      // Placeholders: {total}
      subtitle: "禁言总数：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "禁言者",
          reason: "原因",
          date: "日期",
          expires: "到期"
        },
        permanent: "永久禁言",
        active: {
          true: "生效中",
          temporal: "临时",
          false: "已过期"
        }
      },
      info: {
        title: "禁言 #{id}",
        badges: {
          ipmute: "IP 禁言",
          active: "生效中",
          expired: "已过期",
          permanent: "永久",
        }
      }
    },
    warns: {
      title: "警告",
      // Placeholders: {total}
      subtitle: "警告总数：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "警告者",
          reason: "原因",
          date: "日期",
          notified: "已通知"
        },
      },
      info: {
        title: "警告 #{id}"
      }
    },
    kicks: {
      title: "踢出",
      // Placeholders: {total}
      subtitle: "踢出总数：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "踢出者",
          reason: "原因",
          date: "日期"
        }
      },
      info: {
        title: "踢出 #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "看起来你迷路了。请返回主页。",
        button: "返回主页"
      }
    }
  },
  pagination: {
    previous: "上一页",
    next: "下一页"
  },
  notifications: {
    playerNotFound: {
      title: "错误",
      description: "数据库中不存在该玩家。",
    }
  }
}

module.exports = language;

