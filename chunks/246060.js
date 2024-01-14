"use strict";
a.r(t), a.d(t, {
  GuildUnavilableDialog: function() {
    return R
  },
  GuildDialog: function() {
    return j
  },
  default: function() {
    return b
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  i = a.n(s),
  u = a("446674"),
  d = a("669491"),
  r = a("819855"),
  o = a("77078"),
  c = a("841098"),
  f = a("407063"),
  h = a("393414"),
  g = a("271938"),
  m = a("26989"),
  _ = a("580357"),
  E = a("587974"),
  T = a("315102"),
  S = a("794818"),
  p = a("503021"),
  I = a("757414"),
  N = a("49111"),
  v = a("782340"),
  A = a("852398"),
  O = a("653711"),
  x = a("570459");

function P() {
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: A.splashPlaceholder
    }), (0, l.jsxs)("div", {
      className: i(A.body, A.hasSplash),
      children: [(0, l.jsx)("div", {
        className: A.iconPlaceholder
      }), (0, l.jsx)("div", {
        className: A.headerText,
        children: (0, l.jsx)("div", {
          className: A.namePlaceholder
        })
      }), (0, l.jsxs)("div", {
        className: A.memberInfo,
        children: [(0, l.jsx)("div", {
          className: A.memberCount,
          children: (0, l.jsx)("div", {
            className: A.memberInfoPlaceholder
          })
        }), (0, l.jsx)("div", {
          className: A.memberCount,
          children: (0, l.jsx)("div", {
            className: A.memberInfoPlaceholder
          })
        })]
      }), (0, l.jsx)("div", {
        className: A.viewButtonPlaceholder
      })]
    })]
  })
}

function R() {
  let e = (0, c.default)();
  return (0, l.jsx)(o.Dialog, {
    "aria-label": v.default.Messages.GUILD_UNAVAILABLE_HEADER,
    className: A.guildPopout,
    children: (0, l.jsxs)("div", {
      className: A.body,
      children: [(0, l.jsx)("img", {
        src: (0, r.isThemeDark)(e) ? O : x,
        className: A.unavailableIcon,
        width: 80,
        height: 80,
        alt: ""
      }), (0, l.jsx)(o.Heading, {
        className: A.unavailableHeader,
        variant: "heading-md/semibold",
        children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
      })]
    })
  })
}

function j(e) {
  var t, a;
  let {
    guild: s,
    channelId: r,
    messageId: c
  } = e, {
    name: p,
    id: I,
    discoverySplash: O,
    icon: x,
    description: P,
    presenceCount: R,
    memberCount: j,
    emojis: b
  } = s, U = (0, u.useStateFromStores)([g.default], () => g.default.getId()), C = (0, u.useStateFromStores)([m.default], () => m.default.isMember(I, U), [I, U]), [D, M] = n.useState(!1), y = e => {
    if (e.stopPropagation(), C)(0, h.transitionToGuild)(I, r, c);
    else {
      let e = {
        page: N.AnalyticsPages.GUILD_CHANNEL,
        section: N.AnalyticsSections.GUILD_POPOUT,
        object: N.AnalyticsObjects.CARD
      };
      (0, S.startLurking)(I, e)
    }
    M(!0)
  }, L = T.default.getGuildDiscoverySplashURL({
    id: I,
    splash: O,
    size: 250 * (0, f.getDevicePixelRatio)()
  }), G = null !== (t = T.default.getGuildIconURL({
    id: I,
    icon: x,
    size: 80
  })) && void 0 !== t ? t : void 0, w = b, F = null;
  return null != w && w.length > 6 && null != b && (w = null !== (a = null == b ? void 0 : b.slice(Math.max((null == b ? void 0 : b.length) - 6, 0))) && void 0 !== a ? a : [], F = b.length - 6), (0, l.jsxs)(o.Dialog, {
    "aria-label": p,
    className: A.guildPopout,
    children: [null != L ? (0, l.jsx)("img", {
      src: L,
      alt: "",
      className: A.splashImage
    }) : null, (0, l.jsxs)("div", {
      className: i(A.body, {
        [A.hasSplash]: null != L
      }),
      children: [(0, l.jsx)("div", {
        className: i({
          [A.iconWithSplash]: null != L
        }),
        children: (0, l.jsx)(o.Clickable, {
          onClick: y,
          children: (0, l.jsx)(E.default, {
            mask: E.default.Masks.SQUIRCLE,
            width: 88,
            height: 88,
            children: (0, l.jsx)("div", {
              className: A.iconMask,
              children: (0, l.jsx)(E.default, {
                mask: E.default.Masks.SQUIRCLE,
                width: 80,
                height: 80,
                children: (0, l.jsx)("img", {
                  src: G,
                  alt: "",
                  className: A.avatar
                })
              })
            })
          })
        })
      }), null != p ? (0, l.jsxs)("div", {
        className: A.guildNameWrapper,
        children: [(0, l.jsx)(_.default, {
          className: A.badge,
          guild: s,
          tooltipPosition: "top",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          badgeColor: d.default.unsafe_rawColors.PRIMARY_500.css
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/semibold",
          className: A.guildName,
          children: p
        })]
      }) : null, null != P ? (0, l.jsx)(o.Text, {
        color: "header-secondary",
        className: A.description,
        variant: "text-sm/normal",
        children: P
      }) : null, (0, l.jsxs)("div", {
        className: A.memberInfo,
        children: [null != R ? (0, l.jsxs)("div", {
          className: A.memberCount,
          children: [(0, l.jsx)("div", {
            className: A.dotOnline
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: A.memberText,
            children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: R
            })
          })]
        }) : null, null != j ? (0, l.jsxs)("div", {
          className: A.memberCount,
          children: [(0, l.jsx)("div", {
            className: A.dotOffline
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: A.memberText,
            children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: j
            })
          })]
        }) : null]
      })]
    }), (0, l.jsxs)("div", {
      className: A.footer,
      children: [null != w && w.length > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: A.emojiHeader,
          color: "header-secondary",
          children: v.default.Messages.SERVER_EMOJI
        }), (0, l.jsxs)("div", {
          className: i(A.emojiContainer, {
            [A.withCounter]: null != F
          }),
          children: [w.map(e => {
            let t = T.default.getEmojiURL({
              id: e.id,
              animated: !1,
              size: 24
            });
            return (0, l.jsx)(o.Tooltip, {
              text: ":".concat(e.name, ":"),
              children: e => (0, l.jsx)("img", {
                ...e,
                width: 24,
                height: 24,
                src: t,
                className: i({
                  [A.emoji]: null == F
                }),
                alt: ""
              })
            }, e.id)
          }), null != F ? (0, l.jsx)(o.Heading, {
            variant: "heading-deprecated-12/semibold",
            className: A.emojiCounter,
            color: "header-secondary",
            children: "+".concat(F)
          }) : null]
        })]
      }) : null, (0, l.jsx)(o.Button, {
        look: o.Button.Looks.FILLED,
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.SMALL,
        onClick: y,
        submitting: D,
        autoFocus: !0,
        children: v.default.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
      })]
    })]
  })
}

function b(e) {
  let {
    guildId: t,
    channelId: a,
    messageId: s
  } = e, {
    loading: i,
    unavailable: d,
    guild: r
  } = (0, u.useStateFromStoresObject)([I.default], () => ({
    guild: I.default.getGuild(t),
    loading: I.default.isFetchingGuild(t),
    unavailable: I.default.hasFetchFailed(t)
  }), [t]);
  return (n.useEffect(() => {
    null == r && !i && !d && (0, p.fetchGuildForPopout)(t)
  }, [r, t, i, d]), i) ? (0, l.jsx)(o.Dialog, {
    "aria-label": v.default.Messages.LOADING,
    className: A.guildPopout,
    children: (0, l.jsx)(P, {})
  }) : null == r || d ? (0, l.jsx)(R, {}) : (0, l.jsx)(j, {
    guild: r,
    channelId: a,
    messageId: s
  })
}