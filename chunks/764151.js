"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eu
  },
  GuildSettingsHomeSettingsNotice: function() {
    return eE
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("65597"),
  o = s("819855"),
  d = s("77078"),
  u = s("45299"),
  c = s("716241"),
  E = s("419830"),
  _ = s("69678"),
  T = s("372283"),
  I = s("634544"),
  S = s("379532"),
  N = s("569912"),
  g = s("129092"),
  f = s("205454"),
  A = s("768596"),
  L = s("656913"),
  m = s("694187"),
  C = s("161778"),
  O = s("271938"),
  h = s("42203"),
  R = s("923959"),
  D = s("305961"),
  M = s("181114"),
  G = s("593195"),
  x = s("36694"),
  p = s("945330"),
  U = s("673220"),
  v = s("832132"),
  j = s("118503"),
  P = s("351825"),
  y = s("641892"),
  b = s("315102"),
  B = s("991170"),
  F = s("592407"),
  H = s("900938"),
  V = s("435076"),
  w = s("642807"),
  k = s("49111"),
  Y = s("944305"),
  K = s("75015"),
  W = s("453252"),
  z = s("782340"),
  X = s("184664"),
  Z = s("817616"),
  J = s("731106"),
  Q = s("271696"),
  q = s("694947");

function $(e) {
  let {
    guildId: t,
    welcomeMessage: l
  } = e, o = n.useCallback(() => {
    if (null != t) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("153774").then(s.bind(s, "153774"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        welcomeMessage: l,
        onSave: e => (0, V.updateWelcomeMessage)(e)
      })
    })
  }, [t, l]), u = (0, r.default)([O.default], () => O.default.getId());
  return (0, g.isWelcomeMessageEmpty)(l) ? (0, a.jsx)(d.Button, {
    size: d.Button.Sizes.SMALL,
    onClick: o,
    children: (0, a.jsx)(d.Text, {
      variant: "text-sm/medium",
      children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_SETUP_WELCOME
    })
  }) : (0, a.jsxs)(d.Clickable, {
    className: X.editWelcomeSection,
    onClick: o,
    children: [(0, a.jsx)(A.default, {
      guildId: t,
      welcomeMessage: {
        authorIds: l.authorIds.length > 0 ? l.authorIds : [u],
        message: l.message
      }
    }), (0, a.jsx)(d.Tooltip, {
      text: z.default.Messages.EDIT,
      children: e => (0, a.jsxs)("div", {
        ...e,
        className: i(X.actionItemEditButton, X.editWelcomeButton),
        children: [(0, a.jsx)(v.default, {
          className: X.editIcon
        }), (0, a.jsx)(d.HiddenVisually, {
          children: z.default.Messages.EDIT
        })]
      })
    })]
  })
}

function ee(e) {
  var t, l, o, u, c;
  let {
    guildId: T,
    action: I,
    actionIndex: S,
    onChange: A,
    onDelete: L,
    onDragStart: m,
    onDragComplete: C,
    onDragReset: O
  } = e, R = (0, r.default)([h.default], () => h.default.getChannel(I.channelId)), M = (0, r.default)([D.default], () => D.default.getGuild(T)), {
    customEmoji: x,
    unicodeEmoji: p
  } = (0, N.default)(null === (t = I.emoji) || void 0 === t ? void 0 : t.id, null === (l = I.emoji) || void 0 === l ? void 0 : l.name), j = null == I.emoji || null != x || null != p, P = b.default.getNewMemberActionIconURL({
    channelId: I.channelId,
    icon: I.icon
  }), y = null;
  null != R && (0, g.isChannelValidForNewMemberAction)(R) ? !j && (y = z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL_EMOJI) : y = z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL;
  let {
    drag: B,
    dragSourcePosition: F,
    drop: H,
    setIsDraggable: w
  } = (0, _.default)({
    type: "NEW_MEMBER_ACTION",
    index: S,
    optionId: I.channelId,
    onDragStart: m,
    onDragComplete: C,
    onDragReset: O
  }), k = n.useCallback((e, t) => {
    (0, V.updateNewMemberActionIconData)(e.channelId, t)
  }, []), Y = n.useCallback(() => {
    if (null != T) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("466564").then(s.bind(s, "466564"));
      return t => (0, a.jsx)(e, {
        ...t,
        guildId: T,
        action: I,
        onSave: (e, t) => A(S, e, t),
        onDelete: () => L(S),
        onIconUpload: k
      })
    })
  }, [T, I, S, A, L, k]);
  if (null == R || null == M) return null;
  let K = null !== (c = (0, E.getChannelIconComponent)(R)) && void 0 !== c ? c : G.default;
  return (0, a.jsxs)("div", {
    className: i(X.actionItemContainer),
    children: [(0, a.jsxs)("div", {
      className: i(X.actionItem, {
        [X.dropIndicatorBefore]: null != F && S < F,
        [X.dropIndicatorAfter]: null != F && S > F,
        [X.actionItemError]: null != y
      }),
      ref: e => B(H(e)),
      children: [(0, a.jsx)("div", {
        className: X.dragContainer,
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1),
        children: (0, a.jsx)(U.default, {
          className: X.dragIcon
        })
      }), null != P ? (0, a.jsx)("div", {
        className: X.iconWrapper,
        children: (0, a.jsx)("img", {
          src: P,
          className: X.icon,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": !0
        })
      }) : (0, a.jsx)("div", {
        className: X.actionItemEmojiWrapper,
        children: (0, a.jsx)(f.default, {
          emojiId: null === (o = I.emoji) || void 0 === o ? void 0 : o.id,
          emojiName: null === (u = I.emoji) || void 0 === u ? void 0 : u.name,
          size: f.CTAEmojiSize.MEDIUM,
          defaultComponent: (0, a.jsx)(K, {})
        })
      }), (0, a.jsxs)("div", {
        className: X.actionItemText,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: I.title
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: z.default.Messages.NEW_MEMBER_ACTION_CHANNEL.format({
            channelName: R.name
          })
        })]
      }), (0, a.jsx)(d.Tooltip, {
        text: z.default.Messages.EDIT,
        children: e => (0, a.jsxs)(d.Button, {
          ...e,
          className: X.actionItemEditButton,
          innerClassName: X.actionItemEditButtonInner,
          size: d.Button.Sizes.MIN,
          onClick: Y,
          children: [(0, a.jsx)(v.default, {
            className: X.editIcon
          }), (0, a.jsx)(d.HiddenVisually, {
            children: z.default.Messages.EDIT
          })]
        })
      })]
    }), null != y && (0, a.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: y
    })]
  })
}

function et(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStoresArray)([w.default], () => {
    var e;
    let t = w.default.getSettings();
    return null !== (e = t.newMemberActions) && void 0 !== e ? e : []
  }), l = n.useCallback((e, s) => {
    if (null == t) return;
    (0, V.addNewMemberAction)(e);
    let a = w.default.getSettings();
    if (null == a) return;
    let {
      channelId: n
    } = e;
    (0, V.saveHomeSettings)(t, a, !0).then(() => {
      null != s && (0, V.updateNewMemberActionIcon)(t, n, s, !0)
    })
  }, [t]), i = n.useCallback((e, a, n) => {
    var l;
    if (null == t) return;
    let i = null === (l = s[e]) || void 0 === l ? void 0 : l.channelId;
    if (null == i) return;
    let r = w.default.getSettings();
    if (null == r) return;
    let o = w.default.hasActionIconChanged(i);
    (0, V.updateNewMemberAction)(i, a), (0, V.saveHomeSettings)(t, r, !0).then(() => {
      (0, V.updateNewMemberActionIcon)(t, i, n, o)
    })
  }, [s, t]), o = n.useCallback(e => {
    var t;
    let a = null === (t = s[e]) || void 0 === t ? void 0 : t.channelId;
    null != a && (0, V.deleteNewMemberAction)(a)
  }, [s]), d = s.map(e => ({
    ...e,
    id: e.channelId
  })), {
    handleDragStart: u,
    handleDragReset: c,
    handleDragComplete: E
  } = (0, T.default)(d, V.reorderNewMemberActions);
  return null == t ? null : (0, a.jsxs)("div", {
    className: X.section,
    children: [s.map((e, s) => (0, a.jsx)(ee, {
      guildId: t,
      action: e,
      actionIndex: s,
      onChange: i,
      onDelete: o,
      onDragStart: u,
      onDragReset: c,
      onDragComplete: E
    }, e.channelId)), (0, a.jsx)(es, {}), s.length < g.NEW_MEMBER_ACTION_MAX && (0, a.jsx)(ea, {
      guildId: t,
      onAddAction: l
    })]
  })
}

function es() {
  return (0, a.jsx)("div", {
    className: X.actionItemContainer,
    children: (0, a.jsxs)("div", {
      className: X.actionItem,
      children: [(0, a.jsx)("div", {
        className: X.actionItemEmojiWrapper,
        children: (0, a.jsx)(y.default, {
          height: 20,
          width: 22
        })
      }), (0, a.jsx)("div", {
        className: X.actionItemText,
        children: (0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })
  })
}

function ea(e) {
  let {
    guildId: t,
    onAddAction: l
  } = e, i = n.useCallback(() => {
    if (null != t) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("466564").then(s.bind(s, "466564"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        onSave: l
      })
    })
  }, [t, l]);
  return (0, a.jsxs)(d.Clickable, {
    className: X.addActionItem,
    onClick: i,
    children: [(0, a.jsx)(P.default, {}), (0, a.jsx)(d.Text, {
      variant: "text-md/normal",
      color: "none",
      children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_TASK
    })]
  })
}

function en() {
  return (0, a.jsxs)("div", {
    className: X.badExample,
    children: [(0, a.jsx)(d.Text, {
      variant: "eyebrow",
      color: "header-secondary",
      children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_REASON
    }), (0, a.jsxs)("div", {
      className: X.example,
      children: [(0, a.jsx)("div", {
        className: X.badExampleIcon,
        children: (0, a.jsx)(p.default, {})
      }), (0, a.jsxs)("div", {
        className: X.exampleText,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_TITLE
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_CHANNEL
        })]
      })]
    })]
  })
}

function el(e) {
  var t;
  let {
    guildId: l
  } = e, i = (0, r.default)([D.default], () => D.default.getGuild(l)), o = null !== (t = null == i ? void 0 : i.hasFeature(k.GuildFeatures.BANNER)) && void 0 !== t && t, u = n.useCallback((e, t) => {
    if (null != l) {
      if (null == e || void 0 === t) {
        F.default.updateGuild({
          homeHeader: null
        });
        return
      }(0, d.openModalLazy)(async () => {
        let {
          default: n
        } = await s.el("57015").then(s.bind(s, "57015"));
        return s => (0, a.jsx)(n, {
          imgURI: e,
          file: t,
          onCrop: e => F.default.saveGuild(l, {
            homeHeader: e
          }),
          uploadType: K.UploadTypes.HOME_HEADER,
          ...s
        })
      })
    }
  }, [l]), E = n.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != i && ((0, c.trackWithMetadata)(k.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: k.AnalyticsSections.GUILD_SETTINGS_ONBOARDING,
        object: k.AnalyticsObjects.LEARN_MORE
      },
      guild_id: null == i ? void 0 : i.id,
      location_stack: []
    }), (0, S.default)({
      analyticsLocations: [],
      analyticsSourceLocation: {
        section: k.AnalyticsSections.GUILD_SETTINGS_ONBOARDING,
        object: k.AnalyticsObjects.ONBOARDING_EDIT,
        page: k.AnalyticsPages.GUILD_SETTINGS
      },
      guild: i,
      perks: (0, Y.guildBannerUpsellPerks)()
    }))
  }, [i]);
  if (null == i) return null;
  let _ = (0, a.jsx)(L.default, {
    image: i.homeHeader,
    makeURL: e => null != e ? b.default.getGuildHomeHeaderURL({
      id: i.id,
      homeHeader: e
    }) : null,
    disabled: !o,
    onChange: u,
    hint: z.default.Messages.CHANGE_HOME_HEADER,
    enabled: o,
    maxFileSizeBytes: W.MAX_IMAGE_UPLOAD_FILESIZE_BYTES
  });
  return o ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: X.sectionHeader,
      children: [(0, a.jsx)(d.Heading, {
        className: X.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, a.jsx)(I.default, {
        className: X.boostIndicator,
        guild: i,
        guildFeature: k.GuildFeatures.BANNER,
        onClick: E
      })]
    }), (0, a.jsxs)("div", {
      className: X.section,
      children: [(0, a.jsxs)("div", {
        className: X.homeBannerExplainer,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, a.jsxs)(d.Button, {
          color: d.ButtonColors.BRAND_NEW,
          className: X.uploadButton,
          children: [z.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(m.default, {
            onChange: u,
            maxFileSizeBytes: W.MAX_IMAGE_UPLOAD_FILESIZE_BYTES
          })]
        })]
      }), (0, a.jsx)("div", {
        className: X.homeBannerImage,
        children: _
      })]
    })]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: X.sectionHeader,
      children: [(0, a.jsx)(d.Heading, {
        className: X.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, a.jsx)(I.default, {
        className: X.boostIndicator,
        guild: i,
        guildFeature: k.GuildFeatures.BANNER,
        onClick: E
      })]
    }), (0, a.jsxs)("div", {
      className: X.section,
      children: [(0, a.jsxs)("div", {
        className: X.homeBannerExplainer,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, a.jsxs)(M.default, {
          className: X.upsellButton,
          innerClassName: X.upsellButtonInner,
          color: d.Button.Colors.GREEN,
          onClick: E,
          children: [(0, a.jsx)(j.default, {
            height: 16,
            width: 16,
            className: X.premiumUpsellBadge
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: z.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
          })]
        })]
      }), (0, a.jsx)("div", {
        className: X.homeBannerImage,
        children: (0, a.jsx)(d.Clickable, {
          "aria-hidden": !0,
          tabIndex: -1,
          className: X.upsell,
          onClick: E,
          children: _
        })
      })]
    })]
  })
}

function ei(e) {
  let {
    guildId: t,
    resourceChannel: l,
    index: o,
    onDragComplete: u,
    onDragStart: c,
    onDragReset: E
  } = e, T = (0, r.default)([D.default], () => D.default.getGuild(t)), {
    title: I,
    channelId: S,
    description: N
  } = l, f = h.default.getChannel(S), A = null;
  (null == f || !(0, g.isChannelValidForResourceChannel)(f)) && (A = z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_RESOURCE_CHANNEL);
  let L = null == N || 0 === N.length,
    m = b.default.getResourceChannelIconURL({
      channelId: l.channelId,
      icon: l.icon
    }),
    {
      drag: C,
      dragSourcePosition: O,
      drop: R,
      setIsDraggable: M
    } = (0, _.default)({
      type: "RESOURCE_CHANNEL",
      optionId: l.channelId,
      index: o,
      onDragStart: c,
      onDragComplete: u,
      onDragReset: E
    }),
    G = n.useCallback(e => {
      (0, V.updateResourceChannel)(l.channelId, e)
    }, [l.channelId]),
    x = n.useCallback((e, s) => {
      if (null == t) return;
      let a = w.default.getSettings();
      null != a && ((0, V.updateResourceChannel)(l.channelId, e), (0, V.saveHomeSettings)(t, a).then(() => {
        (0, V.updateResourceChannelIcon)(t, e.channelId, s)
      }))
    }, [t, l]),
    p = n.useCallback(() => {
      if (null != t) return (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("398296").then(s.bind(s, "398296"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t,
          resourceChannel: l,
          onSave: G,
          onDelete: () => (0, V.deleteResourceChannel)(l.channelId),
          onIconUpload: x
        })
      })
    }, [t, l, G, x]);
  return null == T || null == f ? null : (0, a.jsxs)("div", {
    className: i(X.resourceChannelContainer),
    children: [(0, a.jsxs)("div", {
      className: i(X.resourceChannel, {
        [X.dropIndicatorBefore]: null != O && o < O,
        [X.dropIndicatorAfter]: null != O && o > O,
        [X.resourceChannelError]: null != A
      }),
      ref: e => C(R(e)),
      children: [(0, a.jsx)("div", {
        className: X.dragContainer,
        onMouseEnter: () => M(!0),
        onMouseLeave: () => M(!1),
        children: (0, a.jsx)(U.default, {
          className: X.dragIcon
        })
      }), null != m && (0, a.jsx)("div", {
        className: X.iconWrapper,
        children: (0, a.jsx)("img", {
          src: m,
          className: X.icon,
          width: 32,
          height: 32,
          alt: "",
          "aria-hidden": !0
        })
      }), (0, a.jsxs)("div", {
        className: X.resourceChannelContent,
        children: [(0, a.jsx)(d.Text, {
          className: X.resourceChannelTitle,
          variant: "text-md/semibold",
          color: "header-primary",
          children: I
        }), !L && (0, a.jsx)(d.Text, {
          className: X.resourceChannelDescription,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: N
        })]
      }), (0, a.jsx)(d.Tooltip, {
        text: z.default.Messages.EDIT,
        children: e => (0, a.jsxs)(d.Button, {
          ...e,
          className: X.resourceChannelEditButton,
          innerClassName: X.resourceChannelEditButtonInner,
          size: d.Button.Sizes.MIN,
          onClick: p,
          children: [(0, a.jsx)(v.default, {}), (0, a.jsx)(d.HiddenVisually, {
            children: z.default.Messages.EDIT
          })]
        })
      })]
    }), null != A && (0, a.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: A
    })]
  })
}

function er(e) {
  var t;
  let {
    channel: s,
    isLast: l
  } = e, i = n.useCallback(() => {
    (0, V.addResourceChannel)({
      channelId: s.id,
      title: s.name,
      description: "",
      emoji: null,
      icon: null
    })
  }, [s]), r = null !== (t = (0, E.getChannelIconComponent)(s)) && void 0 !== t ? t : G.default;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: X.suggestedChannel,
      children: [(0, a.jsx)(r, {
        className: X.suggestedChannelIcon
      }), (0, a.jsx)(d.Text, {
        className: X.suggestedChannelText,
        variant: "text-sm/normal",
        children: s.name
      }), (0, a.jsx)(d.Button, {
        className: X.suggestedChannelButton,
        size: d.Button.Sizes.MIN,
        onClick: i,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "always-white",
          children: z.default.Messages.ADD
        })
      })]
    }), l && (0, a.jsx)("div", {
      className: X.suggestedSeparator
    })]
  })
}

function eo(e) {
  let {
    guildId: t
  } = e, s = (0, r.default)([D.default], () => D.default.getGuild(t)), l = (0, r.useStateFromStoresArray)([w.default], () => {
    var e, t;
    let s = w.default.getSettings();
    return null !== (t = null === (e = s.resourceChannels) || void 0 === e ? void 0 : e.map(e => e.channelId)) && void 0 !== t ? t : []
  }), i = (0, r.useStateFromStoresArray)([w.default], () => w.default.getDismissedSuggestedChannelIds(t)), o = (0, r.default)([R.default], () => null == t ? [] : R.default.getSelectableChannels(t)), u = o.filter(e => !i.includes(e.channel.id) && !l.includes(e.channel.id) && e.channel.type === k.ChannelTypes.GUILD_TEXT && B.default.canEveryoneRole(k.Permissions.VIEW_CHANNEL, e.channel) && !B.default.canEveryoneRole(k.Permissions.SEND_MESSAGES, e.channel) && e.channel.id !== (null == s ? void 0 : s.rulesChannelId)).slice(0, 5), c = n.useCallback(() => {
    let e = u.map(e => e.channel.id);
    (0, V.dismissSuggestedChannels)(t, e)
  }, [t, u]);
  return u.length <= 0 || l.length >= g.RESOURCE_CHANNEL_MAX ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: X.suggestedChannelsSection,
      children: [(0, a.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: z.default.Messages.RECOMMENDED
      }), (0, a.jsxs)("div", {
        className: X.suggestedChannelsHeader,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_EXPLAINER
        }), (0, a.jsxs)(d.Clickable, {
          className: X.suggestedChannelsDismiss,
          onClick: c,
          children: [(0, a.jsx)(x.default, {
            className: X.suggestedChannelsDismissCheck
          }), (0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_DISMISS
          })]
        })]
      }), (0, a.jsx)("div", {
        className: X.suggestedChannels,
        children: u.map((e, t) => (0, a.jsx)(er, {
          channel: e.channel,
          isLast: t < u.length - 1
        }, e.channel.id))
      })]
    }), (0, a.jsx)("div", {
      className: X.sectionSeparator
    })]
  })
}

function ed(e) {
  let {
    guildId: t
  } = e, l = (0, r.useStateFromStoresArray)([w.default], () => {
    var e;
    let t = w.default.getSettings();
    return null !== (e = t.resourceChannels) && void 0 !== e ? e : []
  }), i = l.map(e => ({
    ...e,
    id: e.channelId
  })), {
    handleDragStart: o,
    handleDragReset: u,
    handleDragComplete: c
  } = (0, T.default)(i, V.reorderResourceChannels), E = n.useCallback((e, s) => {
    if (null == t) return;
    let a = w.default.getSettings();
    null != a && ((0, V.addResourceChannel)(e), (0, V.saveHomeSettings)(t, a).then(() => {
      (0, V.updateResourceChannelIcon)(t, e.channelId, s)
    }))
  }, [t]), _ = n.useCallback(() => {
    if (null != t) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("398296").then(s.bind(s, "398296"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        onSave: V.addResourceChannel,
        onIconUpload: E
      })
    })
  }, [t, E]);
  return (0, a.jsxs)("div", {
    className: X.editResources,
    children: [l.map((e, s) => (0, a.jsx)(ei, {
      guildId: t,
      resourceChannel: e,
      index: s,
      onDragStart: o,
      onDragReset: u,
      onDragComplete: c
    }, e.channelId)), l.length < g.RESOURCE_CHANNEL_MAX && (0, a.jsxs)(d.Clickable, {
      className: X.addActionItem,
      onClick: _,
      children: [(0, a.jsx)(P.default, {}), (0, a.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "none",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_RESOURCE
      })]
    })]
  })
}

function eu(e) {
  let {
    saveOnClose: t
  } = e, s = (0, r.default)([H.default], () => H.default.getGuildId());
  return null == s ? null : (0, a.jsx)(ec, {
    guildId: s,
    saveOnClose: t
  })
}

function ec(e) {
  let {
    saveOnClose: t,
    guildId: s
  } = e, l = (0, r.useStateFromStoresObject)([w.default], () => {
    var e;
    let t = w.default.getSettings();
    return null !== (e = t.welcomeMessage) && void 0 !== e ? e : {
      authorIds: [],
      message: ""
    }
  }), [i, u] = n.useState("new"), c = [{
    value: "new",
    name: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_NEW_MEMBER_EXAMPLE
  }, {
    value: "existing",
    name: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_EXISTING_MEMBER_EXAMPLE
  }], E = (0, r.default)([C.default], () => C.default.theme);
  return n.useEffect(() => () => {
    if (null == s) return;
    let e = w.default.getSettings();
    (0, V.saveHomeSettings)(s, e)
  }, [t, s]), (0, a.jsxs)("div", {
    className: X.page,
    children: [(0, a.jsxs)("div", {
      className: X.leftColumn,
      children: [(0, a.jsx)(d.Heading, {
        className: X.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_TITLE
      }), (0, a.jsx)("div", {
        className: X.descriptionSection,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION
        })
      }), (0, a.jsx)("div", {
        className: X.section,
        children: (0, a.jsx)($, {
          guildId: s,
          welcomeMessage: l
        })
      }), (0, a.jsx)("div", {
        className: X.sectionSeparator
      }), (0, a.jsx)(d.Heading, {
        className: X.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_TITLE
      }), (0, a.jsx)("div", {
        className: X.descriptionSection,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_DESCRIPTION.format()
        })
      }), (0, a.jsx)("div", {
        className: X.section,
        children: (0, a.jsx)(en, {})
      }), (0, a.jsx)(et, {
        guildId: s
      }), (0, a.jsx)("div", {
        className: X.sectionSeparator
      }), (0, a.jsx)(d.Heading, {
        className: X.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_TITLE
      }), (0, a.jsxs)("div", {
        className: X.descriptionSection,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_DESCRIPTION
        }), (0, a.jsxs)("ul", {
          className: X.bulletList,
          children: [(0, a.jsx)("li", {
            children: (0, a.jsx)(d.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_1
            })
          }), (0, a.jsx)("li", {
            children: (0, a.jsx)(d.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_2
            })
          }), (0, a.jsx)("li", {
            children: (0, a.jsx)(d.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_3
            })
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: X.section,
        children: [(0, a.jsx)(eo, {
          guildId: s
        }), (0, a.jsx)(ed, {
          guildId: s
        })]
      }), (0, a.jsx)("div", {
        className: X.sectionSeparator
      }), (0, a.jsx)(el, {
        guildId: s
      })]
    }), (0, a.jsxs)("div", {
      className: X.rightColumn,
      children: [(0, a.jsx)("div", {
        className: X.centeredSection,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: z.default.Messages.EXAMPLE
        })
      }), (0, a.jsx)("img", {
        className: X.previewImage,
        src: (0, o.isThemeLight)(E) ? "existing" === i ? J : q : "existing" === i ? Z : Q,
        alt: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_GUIDE_EXAMPLE_ALT
      }), (0, a.jsx)(d.SegmentedControl, {
        options: c,
        value: i,
        onChange: e => {
          let {
            value: t
          } = e;
          return u(String(t))
        },
        look: "pill"
      })]
    })]
  })
}

function eE() {
  let e = (0, r.default)([H.default], () => H.default.getGuild()),
    t = (0, r.default)([w.default], () => w.default.getSettings()),
    s = (0, r.default)([w.default], () => w.default.getSubmitting());
  return null == e ? null : (0, a.jsx)(u.default, {
    onSave: () => {
      try {
        (0, V.saveHomeSettings)(e.id, t)
      } catch {}
    },
    onReset: V.resetHomeSettings,
    submitting: s,
    onSaveText: z.default.Messages.SAVE
  })
}