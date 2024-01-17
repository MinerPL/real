"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("424973"), n("222007"), n("881410");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("627445"),
  o = n.n(r),
  u = n("446674"),
  d = n("769846"),
  c = n("77078"),
  f = n("970728"),
  E = n("191225"),
  _ = n("969380"),
  T = n("817039"),
  I = n("812204"),
  m = n("685665"),
  N = n("442939"),
  p = n("419830"),
  S = n("813006"),
  A = n("42203"),
  C = n("305961"),
  h = n("957255"),
  g = n("697218"),
  M = n("174622"),
  O = n("98292"),
  R = n("811305"),
  L = n("159885"),
  v = n("793079"),
  P = n("49111"),
  D = n("91366"),
  x = n("782340"),
  y = n("420515");
let U = (0, L.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
  j = (0, L.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
  b = (0, L.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);

function G(e) {
  let {
    members: t,
    membersOnline: n,
    isLarge: l,
    isStacked: a
  } = e, r = [];
  return null != n && n > 0 && r.push((0, s.jsxs)("div", {
    className: y.statusWrapper,
    children: [(0, s.jsx)("i", {
      className: y.statusOnline
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: y.count,
      children: x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
        membersOnline: n
      })
    })]
  }, "onlineCount")), null != t && r.push((0, s.jsxs)("div", {
    className: y.statusWrapper,
    children: [(0, s.jsx)("i", {
      className: y.statusOffline
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: y.count,
      children: x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
        count: t
      })
    })]
  }, "memberCount")), (0, s.jsx)("div", {
    className: i(y.statusCounts, {
      [y.large]: l,
      [y.stacked]: a
    }),
    children: r
  })
}

function B(e) {
  let {
    channel: t,
    guild: n,
    isStacked: l,
    hasEnded: a
  } = e;
  if (null != t && null != n) {
    let e = (0, p.getChannelIconComponent)(t, n);
    return (0, s.jsxs)("div", {
      className: i(y.channel, {
        [y.stacked]: l,
        [y.ended]: a
      }),
      children: [null != e ? (0, s.jsx)(e, {
        className: y.channelIcon,
        width: 16,
        height: 16
      }) : null, (0, s.jsx)(O.default, {
        children: (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: x.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, s.jsx)("div", {
    className: i(y.channel, {
      [y.stacked]: l,
      [y.ended]: a
    }),
    children: (0, s.jsx)(O.default, {
      children: (0, s.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: x.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
          guildName: n.name
        })
      })
    })
  }) : null
}

function F(e) {
  var t, n;
  let a, r, {
      invite: d,
      getAcceptInviteContext: p
    } = e,
    {
      approximate_member_count: O,
      approximate_presence_count: L,
      target_type: F,
      target_application: k
    } = d;
  o(F === D.InviteTargetTypes.EMBEDDED_APPLICATION && null != k, "invalid application invite");
  let w = l.useRef(null),
    [H, V] = l.useState(!1),
    [Y, K] = l.useState(!1);
  l.useEffect(() => {
    let e = new ResizeObserver(() => (function() {
        var e;
        let t = null === (e = w.current) || void 0 === e ? void 0 : e.offsetWidth;
        null != t && (V(t < b + j), K(t <= 2 * U))
      })()),
      t = w.current;
    return null != t && e.observe(t), () => {
      e.disconnect()
    }
  }, [w, V, K]);
  let W = (0, u.useStateFromStores)([C.default], () => null != d.guild ? C.default.getGuild(d.guild.id) : null, [d]),
    z = (0, N.default)([k.id])[0],
    Z = (0, u.useStateFromStores)([E.default], () => {
      var e;
      return (null == d ? void 0 : d.channel) != null && (null === (e = E.default.getSelfEmbeddedActivityForChannel(d.channel.id)) || void 0 === e ? void 0 : e.applicationId) === k.id
    }),
    J = (0, u.useStateFromStores)([E.default], () => {
      var e;
      let t = (null === (e = d.channel) || void 0 === e ? void 0 : e.id) != null ? E.default.getEmbeddedActivitiesForChannel(d.channel.id) : [];
      return t.some(e => {
        let {
          applicationId: t
        } = e;
        return k.id === t
      })
    }),
    Q = A.default.getChannel(null === (t = d.channel) || void 0 === t ? void 0 : t.id),
    X = (0, u.useStateFromStores)([h.default], () => null != Q && h.default.can(P.Permissions.USE_EMBEDDED_ACTIVITIES, Q), [Q]),
    {
      analyticsLocations: q
    } = (0, m.default)(I.default.INVITE_EMBED),
    $ = (0, _.default)({
      applicationId: k.id,
      size: U
    }),
    ee = (0, u.useStateFromStoresArray)([E.default], () => null != Q ? E.default.getEmbeddedActivitiesForChannel(Q.id).filter(e => e.applicationId === k.id).flatMap(e => Array.from(e.userIds)) : [], [Q, k.id]),
    et = (0, u.useStateFromStoresArray)([g.default], () => ee.map(e => g.default.getUser(e)), [ee]),
    en = d.state === P.InviteStates.ACCEPTING,
    es = null != W;
  if (null == W) {
    if (null == d.guild) return (0, s.jsx)(v.default, {});
    W = new S.default(d.guild)
  }
  let el = es && !X || es && Z,
    ea = () => {
      f.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: d.code,
        context: p("Invite Button Embed"),
        analyticsLocations: q
      })
    };
  return (es && Z && (a = x.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !X && (a = x.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), r = Z ? x.default.Messages.INVITE_EMBED_JOINED : J || !es ? x.default.Messages.JOIN : x.default.Messages.START, null == d.code || "" === d.code) ? null : (0, s.jsxs)("div", {
    className: y.container,
    ref: w,
    children: [(0, s.jsx)("div", {
      className: i(y.imgContainer, {
        [y.large]: H,
        [y.stacked]: Y
      }),
      children: (0, s.jsx)(T.default, {
        imageBackground: $,
        applicationName: null !== (n = null == z ? void 0 : z.name) && void 0 !== n ? n : "",
        imageClassName: i(y.img, {
          [y.large]: H,
          [y.stacked]: Y
        }),
        imageNotFoundClassName: i(y.brokenImg, {
          [y.large]: H,
          [y.stacked]: Y
        })
      })
    }), (0, s.jsxs)(M.default, {
      className: i(y.content, {
        [y.large]: H,
        [y.stacked]: Y
      }),
      children: [(0, s.jsxs)("div", {
        className: y.info,
        children: [(0, s.jsx)(c.FormTitle, {
          children: es ? x.default.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : x.default.Messages.INVITE_BUTTON_TITLE_INVITED
        }), (0, s.jsx)(c.Heading, {
          className: y.heading,
          variant: "heading-xl/semibold",
          children: null == z ? void 0 : z.name
        }), (0, s.jsx)(B, {
          channel: Q,
          guild: W,
          isStacked: Y,
          hasEnded: !J
        })]
      }), (0, s.jsxs)("div", {
        className: i(y.currentState, {
          [y.large]: H,
          [y.split]: !J && Y
        }),
        children: [!J && es ? (0, s.jsxs)("div", {
          className: i(y.endedNote, {
            [y.large]: H
          }),
          children: [(0, s.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: x.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: x.default.Messages.EMBEDDED_ACTIVITIES_EMBED_START
          })]
        }) : null, es ? null : (0, s.jsx)(G, {
          members: O,
          membersOnline: L,
          isLarge: H,
          isStacked: Y
        }), (0, s.jsxs)("div", {
          className: y.cta,
          children: [null != W && J ? (0, s.jsx)("div", {
            className: y.avatars,
            children: (0, s.jsx)(R.default, {
              guildId: W.id,
              users: et,
              max: 4
            })
          }) : null, (0, s.jsx)(c.Tooltip, {
            text: a,
            children: e => {
              let {
                onClick: t,
                ...n
              } = e;
              return (0, s.jsx)(c.Button, {
                className: y.actionButton,
                onClick: () => {
                  ea(), null == t || t()
                },
                wrapperClassName: y.tooltipButtonWrapper,
                ...n,
                submitting: en,
                disabled: el,
                color: c.ButtonColors.GREEN,
                children: r
              })
            }
          })]
        })]
      })]
    })]
  })
}