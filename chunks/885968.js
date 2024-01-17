"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("77078"),
  o = n("446674"),
  u = n("997289"),
  d = n("191225"),
  c = n("706508"),
  f = n("501260"),
  E = n("698372"),
  _ = n("969380"),
  T = n("817039"),
  I = n("141962"),
  m = n("685665"),
  N = n("653047"),
  p = n("271938"),
  S = n("824563"),
  A = n("697218"),
  C = n("811305"),
  h = n("449008"),
  g = n("954016"),
  M = n("782340"),
  O = n("502079");

function R(e) {
  var t, n;
  let {
    application: a,
    activityInstance: R,
    channelId: L,
    guildId: v
  } = e, [P, D] = l.useState(!1), {
    analyticsLocations: x
  } = (0, m.default)(), y = (0, u.useAnalyticsContext)(), {
    containerRef: U,
    isStacked: j
  } = function() {
    let e = l.useRef(null),
      [t, n] = l.useState(!1);
    return l.useEffect(() => {
      let t = new ResizeObserver(() => (function() {
          var t;
          let s = null === (t = e.current) || void 0 === t ? void 0 : t.offsetWidth;
          null != s && n(s < 512)
        })()),
        s = e.current;
      return null != s && t.observe(s), () => {
        t.disconnect()
      }
    }, [e]), {
      containerRef: e,
      isStacked: t
    }
  }(), b = (0, _.default)({
    applicationId: a.id,
    size: 1024
  }), G = (0, E.default)(), B = (0, o.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(L).find(e => e.instanceId === R.id)), F = (0, o.useStateFromStores)([p.default], () => p.default.getId()), k = null == B, w = null != B && B.userIds.has(F), H = k ? M.default.Messages.EMBEDDED_ACTIVITIES_ENDED : M.default.Messages.EMBEDDED_ACTIVITIES_JOIN;
  w && (H = M.default.Messages.EMBEDDED_ACTIVITIES_JOINED);
  let V = (0, o.useStateFromStoresArray)([A.default], () => {
      var e;
      return Array.from(null !== (e = null == B ? void 0 : B.userIds) && void 0 !== e ? e : []).map(e => A.default.getUser(e)).filter(h.isNotNullish)
    }),
    Y = (0, o.useStateFromStores)([S.default], () => {
      var e;
      let t = null == B ? void 0 : B.userIds.values().next().value;
      return null == t ? null : null === (e = S.default.findActivity(t.user_id, e => e.application_id === a.id)) || void 0 === e ? void 0 : e.details
    }),
    K = l.useMemo(() => {
      let e = new N.default(a);
      return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = g.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
    }, [a]),
    W = function(e, t, n) {
      let s = (0, o.useStateFromStores)([d.default], () => {
          var n;
          return (null === (n = d.default.getSelfEmbeddedActivityForChannel(t)) || void 0 === n ? void 0 : n.applicationId) === e.id
        }),
        l = (0, f.useEmbeddedActivityJoinability)({
          userId: p.default.getId(),
          channelId: t,
          application: e
        });
      if (null == n) return {
        status: M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED
      };
      if (s) return {
        tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY
      };
      switch (l) {
        case f.EmbeddedActivityJoinability.CAN_JOIN:
          return null;
        case f.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
          return {
            tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS
          };
        case f.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
          return {
            tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE
          };
        case f.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
          return {
            tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS
          };
        case f.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
          return {
            tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS
          };
        case f.EmbeddedActivityJoinability.CHANNEL_FULL:
          return {
            tooltip: M.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL
          };
        case f.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
          return {
            tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_VOICE_PERMISSION
          };
        case f.EmbeddedActivityJoinability.NO_CHANNEL:
        case f.EmbeddedActivityJoinability.NO_GUILD:
        case f.EmbeddedActivityJoinability.NO_USER:
        case f.EmbeddedActivityJoinability.IS_AFK_CHANNEL:
          return {
            tooltip: M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_INVALID_CHANNEL
          }
      }
    }(K, L, B),
    z = async () => {
      if (null != B) {
        D(!0);
        try {
          await (0, c.default)({
            applicationId: B.applicationId,
            currentEmbeddedApplication: G,
            activityChannelId: L,
            locationObject: y.location,
            embeddedActivitiesManager: I.default,
            analyticsLocations: x
          })
        } finally {
          D(!1)
        }
      }
    };
  return (0, s.jsx)("div", {
    className: i(O.outerContainer, {
      [O.rowLayout]: !j,
      [O.stackedLayout]: j
    }),
    ref: U,
    children: (0, s.jsxs)("div", {
      className: O.container,
      children: [(0, s.jsx)("div", {
        className: O.imgContainer,
        children: (0, s.jsx)(T.default, {
          imageBackground: b,
          applicationName: a.name,
          imageClassName: O.img,
          imageNotFoundClassName: O.imgBroken
        })
      }), (0, s.jsxs)("div", {
        className: O.contentContainer,
        children: [(0, s.jsxs)("div", {
          className: O.info,
          children: [(0, s.jsx)(r.Heading, {
            variant: "heading-lg/bold",
            children: null == a ? void 0 : a.name
          }), (0, s.jsx)(r.Text, {
            variant: "text-md/medium",
            lineClamp: j ? 3 : 1,
            children: null !== (n = null !== (t = null == W ? void 0 : W.status) && void 0 !== t ? t : Y) && void 0 !== n ? n : M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
          })]
        }), (0, s.jsxs)("div", {
          className: O.cta,
          children: [(0, s.jsx)(r.Tooltip, {
            text: null == W ? void 0 : W.tooltip,
            children: e => {
              let {
                onClick: t,
                ...n
              } = e;
              return (0, s.jsx)(r.Button, {
                ...n,
                onClick: () => {
                  z(), null == t || t()
                },
                color: k ? r.ButtonColors.PRIMARY : r.ButtonColors.GREEN,
                submitting: P,
                disabled: w || k,
                children: H
              })
            }
          }), (0, s.jsx)("div", {
            className: O.avatars,
            children: (0, s.jsx)(C.default, {
              guildId: v,
              users: V,
              max: 4
            })
          })]
        })]
      })]
    })
  })
}