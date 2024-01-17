"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("446674"),
  l = n("669491"),
  r = n("77078"),
  o = n("987317"),
  u = n("990766"),
  d = n("716241"),
  c = n("442939"),
  f = n("673527"),
  E = n("410348"),
  _ = n("271938"),
  h = n("546463"),
  C = n("18494"),
  I = n("697218"),
  T = n("953109"),
  S = n("277174"),
  m = n("368121"),
  p = n("811305"),
  A = n("158998"),
  g = n("882278"),
  N = n("754493"),
  R = n("813531"),
  O = n("49111"),
  L = n("706530"),
  v = n("782340"),
  M = n("42845");

function P(e) {
  let {
    users: t
  } = e;
  return (0, a.jsxs)("div", {
    className: M.viewers,
    children: [(0, a.jsx)(m.default, {
      width: 16,
      height: 16,
      color: l.default.colors.HEADER_PRIMARY.css
    }), (0, a.jsx)(p.default, {
      showUserPopout: !0,
      useFallbackUserForPopout: !0,
      users: t,
      max: 6,
      size: p.Sizes.SIZE_24
    })]
  })
}

function D(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: l,
    applicationId: m,
    channelId: p,
    streamKey: D
  } = n, [y, x] = s.useState(!1), b = (0, i.useStateFromStores)([I.default], () => I.default.getUser(l)), U = (0, i.useStateFromStores)([h.default], () => {
    var e, t;
    return null !== (t = null === (e = h.default.getDetectableGame(m)) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : ""
  }), [G] = (0, c.default)([U]), j = null !== (t = A.default.getGlobalName(b)) && void 0 !== t ? t : A.default.getUserTag(b), w = (0, R.default)(), k = (0, i.useStateFromStores)([E.default], () => E.default.getPreviewURL(null, p, l)), F = (0, i.useStateFromStores)([C.default], () => C.default.getVoiceChannelId()), H = (0, N.default)(), B = (0, g.default)(p);
  if (s.useEffect(() => {
      y && F === p && x(!1)
    }, [F, y, p]), null == b || null == j) return null;
  let {
    buttonColor: V,
    buttonCTA: Y,
    disabled: W
  } = function(e, t) {
    let n = _.default.getId(),
      a = t.some(e => e.id === n) || e === n,
      s = t.length >= O.MAX_GROUP_DM_BROADCAST_PARTICIPANTS;
    return {
      buttonColor: s ? r.ButtonColors.RED : r.ButtonColors.GREEN,
      buttonCTA: s ? v.default.Messages.BROADCAST_FULL : a ? v.default.Messages.VIEW_BROADCAST : v.default.Messages.JOIN_BROADCAST,
      disabled: s
    }
  }(l, B);
  return (0, a.jsxs)("div", {
    className: M.container,
    children: [(0, a.jsx)(r.Avatar, {
      size: r.AvatarSizes.SIZE_32,
      src: b.getAvatarURL(null, 32),
      "aria-label": j
    }), (0, a.jsxs)("div", {
      className: M.details,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: j
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: null != G ? v.default.Messages.STREAMING.format({
          name: G.name
        }) : v.default.Messages.STREAMING_A_GAME
      }), (0, a.jsxs)("div", {
        className: M.activity,
        children: [B.length > 0 && (0, a.jsx)(P, {
          users: B
        }), (0, a.jsxs)(r.Button, {
          onClick: () => {
            if (F === p) {
              o.default.selectPrivateChannel(p);
              return
            }
            x(!0), (0, u.joinPrivateChannelAndWatchStream)(p, D), d.default.trackWithMetadata(O.AnalyticEvents.BROADCAST_VIEWED, {
              num_active_broadcasts: w.length,
              broadcast_position: w.findIndex(e => e.userId === l) + 1,
              is_broadcasting: H,
              broadcast_channel_id: p
            })
          },
          color: V,
          size: r.ButtonSizes.SMALL,
          className: M.button,
          disabled: W,
          innerClassName: M.innerButton,
          children: [(0, a.jsx)(S.default, {
            width: 16,
            height: 16
          }), Y]
        })]
      })]
    }), null != k ? (0, a.jsx)(f.default, {
      className: M.stream,
      stream: {
        streamType: L.StreamTypes.CALL,
        ownerId: l,
        channelId: p
      }
    }) : (0, a.jsx)(T.default, {
      game: G,
      size: T.default.Sizes.LARGE,
      className: M.gameIcon
    })]
  })
}