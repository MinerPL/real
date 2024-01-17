"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("819689"),
  d = n("467094"),
  c = n("364685"),
  f = n("41170"),
  h = n("271938"),
  C = n("377253"),
  p = n("697218"),
  m = n("599110"),
  g = n("158998"),
  E = n("913491"),
  S = n("49111"),
  A = n("782340"),
  _ = n("649755");
let T = "749054660769218631";

function M(e) {
  var t;
  let {
    channel: n
  } = e, [l, M] = a.useState("");
  a.useEffect(() => {
    (0, d.fetchStickerPack)("847199849233514549", !0)
  }, []);
  let I = (0, r.useStateFromStores)([C.default, h.default], () => !!i(C.default.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === S.MessageStates.SENT && !(0, E.default)(e))),
    N = (0, r.useStateFromStores)([p.default], () => p.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    v = null !== (t = g.default.useName(N)) && void 0 !== t ? t : A.default.Messages.WAVE_DEFAULT_RECIPIENT,
    L = (0, r.useStateFromStores)([c.default], () => c.default.getStickerById(T)),
    x = a.useCallback(async () => {
      if (null == l || "" === l) try {
        await u.default.sendGreetMessage(n.id, T), m.default.track(S.AnalyticEvents.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        !e.ok && 429 === e.status && M(A.default.Messages.RATE_LIMITED)
      }
    }, [n.id, n.type, l]),
    R = A.default.Messages.WAVE_TO.format({
      username: v
    }),
    y = null != l && "" !== l ? (0, s.jsx)(o.Text, {
      className: _.error,
      color: "text-danger",
      variant: "text-sm/normal",
      children: l
    }) : null;
  return I ? (0, s.jsxs)("div", {
    className: _.containerCompact,
    children: [(0, s.jsxs)(o.Clickable, {
      className: null != l && "" !== l ? _.compactButtonDisabled : _.compactButton,
      "aria-label": A.default.Messages.SEND_WAVE,
      onClick: x,
      children: [(0, s.jsx)(f.default, {
        sticker: L,
        size: 24
      }), (0, s.jsx)(o.Text, {
        className: _.text,
        variant: "text-md/medium",
        children: R
      })]
    }), y]
  }) : (0, s.jsxs)("div", {
    className: _.containerExpanded,
    children: [(0, s.jsx)(f.default, {
      sticker: L,
      size: 160
    }), (0, s.jsx)(o.Button, {
      className: _.button,
      onClick: x,
      disabled: !!l,
      children: R
    }), y]
  })
}