"use strict";
l.r(t), l.d(t, {
  GuildUnavilableDialog: function() {
    return R
  },
  GuildDialog: function() {
    return j
  },
  default: function() {
    return b
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  u = l("446674"),
  d = l("669491"),
  r = l("819855"),
  o = l("77078"),
  c = l("841098"),
  f = l("407063"),
  h = l("393414"),
  g = l("271938"),
  m = l("26989"),
  _ = l("580357"),
  E = l("587974"),
  T = l("315102"),
  S = l("794818"),
  p = l("503021"),
  I = l("757414"),
  N = l("49111"),
  v = l("782340"),
  x = l("852398"),
  A = l("653711"),
  O = l("570459");

function P() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: x.splashPlaceholder
    }), (0, n.jsxs)("div", {
      className: i(x.body, x.hasSplash),
      children: [(0, n.jsx)("div", {
        className: x.iconPlaceholder
      }), (0, n.jsx)("div", {
        className: x.headerText,
        children: (0, n.jsx)("div", {
          className: x.namePlaceholder
        })
      }), (0, n.jsxs)("div", {
        className: x.memberInfo,
        children: [(0, n.jsx)("div", {
          className: x.memberCount,
          children: (0, n.jsx)("div", {
            className: x.memberInfoPlaceholder
          })
        }), (0, n.jsx)("div", {
          className: x.memberCount,
          children: (0, n.jsx)("div", {
            className: x.memberInfoPlaceholder
          })
        })]
      }), (0, n.jsx)("div", {
        className: x.viewButtonPlaceholder
      })]
    })]
  })
}

function R() {
  let e = (0, c.default)();
  return (0, n.jsx)(o.Dialog, {
    "aria-label": v.default.Messages.GUILD_UNAVAILABLE_HEADER,
    className: x.guildPopout,
    children: (0, n.jsxs)("div", {
      className: x.body,
      children: [(0, n.jsx)("img", {
        src: (0, r.isThemeDark)(e) ? A : O,
        className: x.unavailableIcon,
        width: 80,
        height: 80,
        alt: ""
      }), (0, n.jsx)(o.Heading, {
        className: x.unavailableHeader,
        variant: "heading-md/semibold",
        children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
      })]
    })
  })
}

function j(e) {
  var t, l;
  let {
    guild: s,
    channelId: r,
    messageId: c
  } = e, {
    name: p,
    id: I,
    discoverySplash: A,
    icon: O,
    description: P,
    presenceCount: R,
    memberCount: j,
    emojis: b
  } = s, C = (0, u.useStateFromStores)([g.default], () => g.default.getId()), U = (0, u.useStateFromStores)([m.default], () => m.default.isMember(I, C), [I, C]), [D, y] = a.useState(!1), M = e => {
    if (e.stopPropagation(), U)(0, h.transitionToGuild)(I, r, c);
    else {
      let e = {
        page: N.AnalyticsPages.GUILD_CHANNEL,
        section: N.AnalyticsSections.GUILD_POPOUT,
        object: N.AnalyticsObjects.CARD
      };
      (0, S.startLurking)(I, e)
    }
    y(!0)
  }, L = T.default.getGuildDiscoverySplashURL({
    id: I,
    splash: A,
    size: 250 * (0, f.getDevicePixelRatio)()
  }), G = null !== (t = T.default.getGuildIconURL({
    id: I,
    icon: O,
    size: 80
  })) && void 0 !== t ? t : void 0, w = b, F = null;
  return null != w && w.length > 6 && null != b && (w = null !== (l = null == b ? void 0 : b.slice(Math.max((null == b ? void 0 : b.length) - 6, 0))) && void 0 !== l ? l : [], F = b.length - 6), (0, n.jsxs)(o.Dialog, {
    "aria-label": p,
    className: x.guildPopout,
    children: [null != L ? (0, n.jsx)("img", {
      src: L,
      alt: "",
      className: x.splashImage
    }) : null, (0, n.jsxs)("div", {
      className: i(x.body, {
        [x.hasSplash]: null != L
      }),
      children: [(0, n.jsx)("div", {
        className: i({
          [x.iconWithSplash]: null != L
        }),
        children: (0, n.jsx)(o.Clickable, {
          onClick: M,
          children: (0, n.jsx)(E.default, {
            mask: E.default.Masks.SQUIRCLE,
            width: 88,
            height: 88,
            children: (0, n.jsx)("div", {
              className: x.iconMask,
              children: (0, n.jsx)(E.default, {
                mask: E.default.Masks.SQUIRCLE,
                width: 80,
                height: 80,
                children: (0, n.jsx)("img", {
                  src: G,
                  alt: "",
                  className: x.avatar
                })
              })
            })
          })
        })
      }), null != p ? (0, n.jsxs)("div", {
        className: x.guildNameWrapper,
        children: [(0, n.jsx)(_.default, {
          className: x.badge,
          guild: s,
          tooltipPosition: "top",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          badgeColor: d.default.unsafe_rawColors.PRIMARY_500.css
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          className: x.guildName,
          children: p
        })]
      }) : null, null != P ? (0, n.jsx)(o.Text, {
        color: "header-secondary",
        className: x.description,
        variant: "text-sm/normal",
        children: P
      }) : null, (0, n.jsxs)("div", {
        className: x.memberInfo,
        children: [null != R ? (0, n.jsxs)("div", {
          className: x.memberCount,
          children: [(0, n.jsx)("div", {
            className: x.dotOnline
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: x.memberText,
            children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: R
            })
          })]
        }) : null, null != j ? (0, n.jsxs)("div", {
          className: x.memberCount,
          children: [(0, n.jsx)("div", {
            className: x.dotOffline
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: x.memberText,
            children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: j
            })
          })]
        }) : null]
      })]
    }), (0, n.jsxs)("div", {
      className: x.footer,
      children: [null != w && w.length > 0 ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: x.emojiHeader,
          color: "header-secondary",
          children: v.default.Messages.SERVER_EMOJI
        }), (0, n.jsxs)("div", {
          className: i(x.emojiContainer, {
            [x.withCounter]: null != F
          }),
          children: [w.map(e => {
            let t = T.default.getEmojiURL({
              id: e.id,
              animated: !1,
              size: 24
            });
            return (0, n.jsx)(o.Tooltip, {
              text: ":".concat(e.name, ":"),
              children: e => (0, n.jsx)("img", {
                ...e,
                width: 24,
                height: 24,
                src: t,
                className: i({
                  [x.emoji]: null == F
                }),
                alt: ""
              })
            }, e.id)
          }), null != F ? (0, n.jsx)(o.Heading, {
            variant: "heading-deprecated-12/semibold",
            className: x.emojiCounter,
            color: "header-secondary",
            children: "+".concat(F)
          }) : null]
        })]
      }) : null, (0, n.jsx)(o.Button, {
        look: o.Button.Looks.FILLED,
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.SMALL,
        onClick: M,
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
    channelId: l,
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
  return (a.useEffect(() => {
    null == r && !i && !d && (0, p.fetchGuildForPopout)(t)
  }, [r, t, i, d]), i) ? (0, n.jsx)(o.Dialog, {
    "aria-label": v.default.Messages.LOADING,
    className: x.guildPopout,
    children: (0, n.jsx)(P, {})
  }) : null == r || d ? (0, n.jsx)(R, {}) : (0, n.jsx)(j, {
    guild: r,
    channelId: l,
    messageId: s
  })
}