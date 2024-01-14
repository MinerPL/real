"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  },
  GuildSettingsDefaultChannelsNotice: function() {
    return y
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("45299"),
  u = s("648747"),
  c = s("863636"),
  E = s("41594"),
  _ = s("367376"),
  T = s("988724"),
  I = s("161188"),
  S = s("245997"),
  N = s("923959"),
  g = s("98292"),
  f = s("461380"),
  A = s("36694"),
  L = s("45029"),
  m = s("900938"),
  C = s("851490"),
  O = s("653274"),
  h = s("330724"),
  R = s("136278"),
  D = s("223729"),
  M = s("682327"),
  G = s("925649"),
  x = s("795126"),
  p = s("457461"),
  U = s("782340"),
  v = s("284246");

function j(e) {
  let {
    guild: t
  } = e, l = (0, r.useStateFromStores)([c.default], () => c.default.getEnabled(t.id)), i = (0, r.useStateFromStores)([I.default], () => I.default.hasFetched(t.id)), d = (0, D.default)(t), S = (0, r.useStateFromStores)([O.default], () => O.default.editedDefaultChannelIds), N = d.filter(e => !S.has(e.id)), [f, m] = n.useState(!1);
  n.useEffect(() => {
    !i && !l && (0, T.fetchTopReadChannels)(t.id)
  }, [t.id, i, l]);
  let h = e => {
    (0, o.openModalLazy)(async () => {
      let {
        default: n
      } = await s.el("10035").then(s.bind(s, "10035"));
      return s => (0, a.jsx)(n, {
        ...s,
        guildId: t.id,
        startingChannelId: e
      })
    })
  };
  return f || 0 === N.length ? null : (0, a.jsxs)("div", {
    className: v.recommendations,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: U.default.Messages.CHANNEL_RECOMMENDED
    }), (0, a.jsxs)("div", {
      className: v.recsSubheader,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: U.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DESCRIPTION
      }), (0, a.jsxs)(o.Clickable, {
        className: v.dismissAll,
        onClick: () => m(!0),
        children: [(0, a.jsx)(A.default, {
          width: 12,
          height: 12,
          className: v.checkmark
        }), (0, a.jsx)(o.Text, {
          className: v.dismissAllText,
          variant: "text-xs/medium",
          color: "text-brand",
          children: U.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DISMISS_ALL
        })]
      })]
    }), (0, a.jsx)("div", {
      className: v.recommendedChannels,
      children: N.map((e, s) => (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: v.channelRow,
          children: [(0, a.jsxs)("div", {
            className: v.channelInfo,
            children: [(0, a.jsxs)("div", {
              className: v.channelName,
              children: [(0, a.jsx)(E.ChannelItemIcon, {
                channel: e,
                guild: t
              }), (0, a.jsx)(g.default, {
                className: v.name,
                children: (0, a.jsx)(o.Text, {
                  className: v.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: "text-normal",
                  children: e.name
                })
              })]
            }), null != e.topic && e.topic.length > 0 ? (0, a.jsx)(g.default, {
              children: (0, a.jsx)(o.Text, {
                className: v.topic,
                variant: "text-xs/normal",
                children: _.default.parseTopic(e.topic, !0, {
                  channelId: e.id
                })
              })
            }, "topic") : null]
          }), (0, u.canChannelBeDefault)(t.id, e.id) ? (0, a.jsx)(o.Button, {
            color: o.Button.Colors.BRAND,
            size: o.Button.Sizes.SMALL,
            className: v.addChannelCTA,
            onClick: () => (0, C.toggleDefaultChannel)(e.id),
            children: U.default.Messages.ADD
          }) : (0, a.jsxs)(o.Button, {
            look: o.Button.Looks.OUTLINED,
            color: o.Button.Colors.PRIMARY,
            className: v.lockedPill,
            innerClassName: v.lockedPillInner,
            onClick: () => h(e.id),
            children: [(0, a.jsx)(L.default, {
              width: 16,
              height: 16
            }), (0, a.jsx)(o.Text, {
              variant: "text-sm/medium",
              children: U.default.Messages.UNLOCK
            })]
          })]
        }), s < N.length - 1 ? (0, a.jsx)("div", {
          className: v.separator
        }) : null]
      }))
    }), (0, a.jsx)("div", {
      className: v.largeSeparator
    })]
  })
}

function P(e) {
  let {
    saveOnClose: t = !1
  } = e, s = (0, r.useStateFromStores)([m.default], () => m.default.getGuild()), l = (0, r.useStateFromStores)([c.default], () => c.default.isLoading()), d = (0, r.useStateFromStores)([N.default], () => N.default.getChannels(null == s ? void 0 : s.id)), u = (0, r.useStateFromStores)([S.default], () => S.default.getCategories(null == s ? void 0 : s.id)), E = (0, r.useStateFromStores)([R.default], () => R.default.advancedMode), _ = n.useRef(null), [T, I] = n.useState(!1);
  return (n.useEffect(() => {
    if (t) return () => {
      null != s && (0, C.saveDefaultChannels)(s).then(() => {
        E && (0, h.saveGuildOnboardingPrompts)(s, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }).catch(() => {})
    }
  }, [t, E]), null == s) ? null : l ? (0, a.jsx)(o.Spinner, {}) : (0, a.jsxs)("div", {
    className: v.columns,
    children: [(0, a.jsxs)("div", {
      className: v.channelBrowser,
      children: [(0, a.jsx)(o.Clickable, {
        className: v.collapseButton,
        onClick: () => I(e => !e),
        children: (0, a.jsx)(f.default, {
          direction: T ? f.default.Directions.DOWN : f.default.Directions.UP,
          height: 16,
          width: 16
        })
      }), (0, a.jsx)(o.Heading, {
        className: v.header,
        variant: "heading-lg/extrabold",
        children: U.default.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: U.default.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_SUBHEADER
      }), (0, a.jsx)(M.AdvancedModeToggle, {
        className: v.advancedModeToggle,
        guildId: s.id
      }), T ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(j, {
          guild: s
        }), (0, a.jsx)(G.default, {
          className: i(v.channelBrowserOuter),
          guild: s,
          categories: u,
          channels: d,
          hasSidebar: !1
        })]
      }), E && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: v.largeSeparator
        }), (0, a.jsx)(o.Heading, {
          className: v.prejoinHeader,
          variant: "heading-lg/extrabold",
          children: U.default.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_HEADER
        }), (0, a.jsx)(o.Text, {
          className: v.prejoinSubHeader,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: U.default.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_SUBHEADER
        }), (0, a.jsx)("div", {
          ref: _,
          className: v.advancedModeQuestions,
          children: (0, a.jsx)(p.default, {
            guildId: s.id,
            prejoinOnly: !0,
            includeCount: !0,
            singleColumn: !0
          })
        })]
      })]
    }), (0, a.jsx)(x.default, {
      guild: s,
      scrollToQuestions: () => {
        null != _.current && _.current.scrollIntoView({
          behavior: "smooth"
        })
      }
    })]
  })
}

function y() {
  let e = (0, r.useStateFromStores)([m.default], () => m.default.getProps().guild),
    t = (0, r.useStateFromStores)([O.default], () => O.default.submitting),
    s = (0, r.useStateFromStores)([R.default], () => R.default.advancedMode);
  return null == e ? null : (0, a.jsx)(d.default, {
    onSave: () => {
      (0, C.saveDefaultChannels)(e).then(() => {
        s && (0, h.saveGuildOnboardingPrompts)(e, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }).catch(() => {})
    },
    onReset: C.resetDefaultChannels,
    submitting: t,
    onSaveText: U.default.Messages.SAVE
  })
}