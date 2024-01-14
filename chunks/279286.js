"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  r = s("446674"),
  i = s("77078"),
  o = s("901582"),
  n = s("252744"),
  u = s("750560"),
  d = s("502651"),
  c = s("812204"),
  f = s("685665"),
  S = s("635471"),
  m = s("373469"),
  x = s("271938"),
  T = s("824563"),
  p = s("697218"),
  v = s("713135"),
  h = s("765698"),
  A = s("217513"),
  E = s("641055"),
  N = s("430312"),
  U = s("453649"),
  I = s("481923"),
  _ = s("759210"),
  j = s("347550"),
  C = s("590456"),
  y = s("49111"),
  g = s("782340"),
  M = s("890963");

function P(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: l,
    setSection: o,
    hasActivity: n
  } = e, u = (0, r.useStateFromStores)([v.default], () => {
    var e, s;
    return (null === (s = v.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  });
  return (0, a.jsx)("div", {
    className: M.tabBarContainer,
    children: (0, a.jsxs)(i.TabBar, {
      selectedItem: l,
      type: "top",
      onItemSelect: o,
      className: M.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, a.jsx)(i.TabBar.Item, {
        className: M.tabBarItem,
        id: C.UserProfileSections.USER_INFO,
        children: g.default.Messages.USER_INFO
      }) : null, !t.bot && n ? (0, a.jsx)(i.TabBar.Item, {
        className: M.tabBarItem,
        id: C.UserProfileSections.ACTIVITY,
        children: g.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, s || t.isClyde() ? null : (0, a.jsx)(i.TabBar.Item, {
        className: M.tabBarItem,
        id: C.UserProfileSections.MUTUAL_GUILDS,
        children: g.default.Messages.MUTUAL_GUILDS
      }), t.bot || s ? null : (0, a.jsx)(i.TabBar.Item, {
        className: M.tabBarItem,
        id: C.UserProfileSections.MUTUAL_FRIENDS,
        children: g.default.Messages.MUTUAL_FRIENDS
      }), t.bot && u ? (0, a.jsx)(i.TabBar.Item, {
        className: M.tabBarItem,
        id: C.UserProfileSections.BOT_DATA_ACCESS,
        children: g.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function O(e) {
  var t, s;
  let {
    user: v,
    guildId: O,
    channelId: F,
    friendToken: R,
    autoFocusNote: B,
    initialSection: D = C.UserProfileSections.USER_INFO,
    transitionState: L,
    onClose: b
  } = e, {
    AnalyticsLocationProvider: k
  } = (0, f.default)(c.default.PROFILE_MODAL), G = null !== (t = (0, r.useStateFromStores)([p.default], () => p.default.getUser(v.id))) && void 0 !== t ? t : v, w = (0, A.default)(null !== (s = null == G ? void 0 : G.id) && void 0 !== s ? s : "");
  (0, u.useSubscribeGuildMembers)({
    [O]: [G.id]
  });
  let V = (0, r.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(G.id)),
    H = (0, r.useStateFromStores)([T.default], () => T.default.findActivity(G.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
    Y = (0, U.useGetVoiceChannelInfoForVoiceActivitySection)(G.id, O),
    [z, Z] = l.useState(!1),
    [K, W] = l.useState(G.isNonUserBot() && !G.isClyde() ? C.UserProfileSections.MUTUAL_GUILDS : D),
    q = (0, r.useStateFromStores)([x.default], () => x.default.getId() === G.id),
    {
      showVoiceActivityInProfile: J
    } = h.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    Q = null != H || V || null != Y && J,
    X = !q || Q,
    $ = l.createRef(),
    ee = (0, n.default)($);
  !Q && K === C.UserProfileSections.ACTIVITY && W(C.UserProfileSections.USER_INFO);
  let et = l.useCallback(e => {
      Z(!0), W(e)
    }, []),
    es = null == w ? void 0 : w.profileEffectId;
  return (0, a.jsx)(k, {
    children: (0, a.jsx)(o.default, {
      section: y.AnalyticsSections.PROFILE_MODAL,
      children: (0, a.jsxs)(i.ModalRoot, {
        transitionState: L,
        className: M.root,
        "aria-label": g.default.Messages.USER_PROFILE_MODAL,
        children: [(0, a.jsx)("div", {
          ref: $,
          children: (0, a.jsxs)(N.default, {
            user: G,
            profileType: C.UserProfileTypes.MODAL,
            children: [(0, a.jsx)("div", {
              className: M.topSection,
              children: (0, a.jsx)(_.default, {
                displayProfile: w,
                user: G,
                friendToken: R,
                onClose: b,
                isStreaming: (0, d.default)(H),
                guildId: O,
                channelId: F,
                hasProfileEffect: null != es
              })
            }), (0, a.jsxs)(N.default.Inner, {
              children: [L === i.ModalTransitionState.ENTERED && (0, a.jsx)(E.default, {
                onTooltipClose: b
              }), (0, a.jsxs)("div", {
                className: M.body,
                children: [(0, a.jsx)(j.default, {
                  user: G,
                  displayProfile: w
                }), X ? (0, a.jsx)(P, {
                  user: G,
                  section: K === C.UserProfileSections.USER_INFO_CONNECTIONS ? C.UserProfileSections.USER_INFO : K,
                  setSection: et,
                  hasActivity: Q,
                  isCurrentUser: q
                }) : (0, a.jsx)("div", {
                  className: M.divider
                }), (0, a.jsx)(I.default, {
                  displayProfile: w,
                  user: G,
                  autoFocusNote: B && !z,
                  selectedSection: K,
                  onClose: b
                })]
              })]
            })]
          })
        }), null != es && (0, a.jsx)(S.default, {
          profileEffectId: es,
          bannerAdjustment: 0,
          isHovering: ee
        })]
      })
    })
  })
}