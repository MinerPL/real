"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007"), n("834022");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("529805"),
  d = n("364685"),
  c = n("41170"),
  f = n("46829"),
  E = n("840817"),
  _ = n("304198"),
  T = n("599110"),
  I = n("659500"),
  m = n("315176"),
  N = n("49111"),
  p = n("782340"),
  S = n("779194");

function A(e) {
  let {
    message: t,
    channel: a,
    compact: A
  } = e, C = (0, r.useStateFromStoresArray)([d.default], () => {
    let e = d.default.getAllGuildStickers();
    return Array.from(e.values()).flat()
  }), h = C.slice(0, 20), [g, M] = l.useState(null);
  return (l.useEffect(() => {
    let e = setInterval(() => {
      h.length > 0 && M(h[Math.floor(Math.random() * h.length)])
    }, 500);
    return () => clearInterval(e)
  }, [h]), null == a.guild_id) ? null : (0, s.jsxs)("div", {
    children: [(0, s.jsx)(_.default, {
      className: i(S.mainContainer, {
        [S.compact]: A
      }),
      icon: n("127067"),
      compact: A,
      children: (0, s.jsx)("div", {
        className: i(S.content, {
          [S.compact]: A
        }),
        children: (0, s.jsx)("div", {
          className: i(S.messageContent, {
            [S.compact]: A
          }),
          children: "" !== t.content ? t.content : p.default.Messages.DEADCHAT_PROMPT_1
        })
      })
    }), (0, s.jsxs)("div", {
      className: S.actions,
      children: [(0, s.jsx)(o.TooltipContainer, {
        text: p.default.Messages.CHANNEL_PROMPT_UPLOAD_IMAGE_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            T.default.track(N.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: a.id,
              guild_id: a.guild_id,
              action_type: "upload_file"
            }), I.ComponentDispatch.dispatch(N.ComponentActions.UPLOAD_FILE), (0, u.createPendingReply)({
              message: t,
              channel: a,
              shouldMention: !0
            })
          },
          children: (0, s.jsx)(E.default, {})
        })
      }), (0, s.jsx)(o.TooltipContainer, {
        text: p.default.Messages.CHANNEL_PROMPT_RANDOM_STICKER_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            T.default.track(N.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: a.id,
              guild_id: a.guild_id,
              action_type: "sticker"
            }), (0, m.sendRandomStickerOrEmoji)(t.id, a)
          },
          children: null != g ? (0, s.jsx)(c.default, {
            size: 32,
            sticker: g
          }) : (0, s.jsx)(f.default, {})
        })
      })]
    })]
  })
}