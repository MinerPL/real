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
  E = n("673527"),
  f = n("410348"),
  _ = n("271938"),
  h = n("546463"),
  C = n("18494"),
  T = n("697218"),
  I = n("953109"),
  S = n("277174"),
  N = n("368121"),
  A = n("811305"),
  p = n("158998"),
  m = n("882278"),
  g = n("754493"),
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
    children: [(0, a.jsx)(N.default, {
      width: 16,
      height: 16,
      color: l.default.colors.HEADER_PRIMARY.css
    }), (0, a.jsx)(A.default, {
      showUserPopout: !0,
      useFallbackUserForPopout: !0,
      users: t,
      max: 6,
      size: A.Sizes.SIZE_24
    })]
  })
}

function D(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: l,
    applicationId: N,
    channelId: A,
    streamKey: D
  } = n, [y, x] = s.useState(!1), b = (0, i.useStateFromStores)([T.default], () => T.default.getUser(l)), U = (0, i.useStateFromStores)([h.default], () => {
    var e, t;
    return null !== (t = null === (e = h.default.getDetectableGame(N)) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : ""
  }), [G] = (0, c.default)([U]), j = null !== (t = p.default.getGlobalName(b)) && void 0 !== t ? t : p.default.getUserTag(b), k = (0, R.default)(), w = (0, i.useStateFromStores)([f.default], () => f.default.getPreviewURL(null, A, l)), F = (0, i.useStateFromStores)([C.default], () => C.default.getVoiceChannelId()), B = (0, g.default)(), H = (0, m.default)(A);
  if (s.useEffect(() => {
      y && F === A && x(!1)
    }, [F, y, A]), null == b || null == j) return null;
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
  }(l, H);
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
        children: [H.length > 0 && (0, a.jsx)(P, {
          users: H
        }), (0, a.jsxs)(r.Button, {
          onClick: () => {
            if (F === A) {
              o.default.selectPrivateChannel(A);
              return
            }
            x(!0), (0, u.joinPrivateChannelAndWatchStream)(A, D), d.default.trackWithMetadata(O.AnalyticEvents.BROADCAST_VIEWED, {
              num_active_broadcasts: k.length,
              broadcast_position: k.findIndex(e => e.userId === l) + 1,
              is_broadcasting: B,
              broadcast_channel_id: A
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
    }), null != w ? (0, a.jsx)(E.default, {
      className: M.stream,
      stream: {
        streamType: L.StreamTypes.CALL,
        ownerId: l,
        channelId: A
      }
    }) : (0, a.jsx)(I.default, {
      game: G,
      size: I.default.Sizes.LARGE,
      className: M.gameIcon
    })]
  })
}