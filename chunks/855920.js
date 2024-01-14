"use strict";
n.r(t), n.d(t, {
  MessageStandardEmoji: function() {
    return C
  },
  MessageCustomEmoji: function() {
    return I
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("748820"),
  o = n("77078"),
  u = n("913144"),
  d = n("430568"),
  c = n("716241"),
  m = n("599110"),
  f = n("459698"),
  h = n("933629"),
  p = n("49111"),
  g = n("958706"),
  E = n("646718"),
  v = n("228551");
let C = e => {
    var t;
    let {
      node: n,
      tooltipPosition: a = h.EXPRESSION_TOOLTIP_PROPS.position,
      enableClick: s = !0
    } = e, r = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], u = null != r ? r : n.name, c = e => (0, l.jsx)(d.default, {
      ...e,
      emojiName: n.name,
      size: n.jumboable ? "jumbo" : "default",
      src: n.src,
      alt: r,
      animated: !1
    }), m = e => (0, l.jsx)(o.Tooltip, {
      text: (0, h.renderClickableTooltipNode)(n.name, s),
      "aria-label": u,
      ...h.EXPRESSION_TOOLTIP_PROPS,
      position: a,
      onTooltipShow: () => {
        s && x({
          emojiNode: n,
          isCustomEmoji: !1
        })
      },
      children: t => (0, l.jsx)(o.Clickable, {
        ...e,
        tag: "span",
        className: i(v.emojiContainer, {
          [v.emojiContainerClickable]: s
        }),
        children: c(t)
      })
    });
    return s ? (0, l.jsx)(o.Popout, {
      animation: o.Popout.Animation.TRANSLATE,
      align: "center",
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      position: "right",
      renderPopout: e => (0, l.jsx)(f.MessageStandardEmojiPopout, {
        ...e,
        node: n
      }),
      children: m
    }) : m()
  },
  I = e => {
    let {
      node: t,
      isInteracting: n,
      tooltipPosition: s = h.EXPRESSION_TOOLTIP_PROPS.position,
      enableClick: c = !0
    } = e, [E, C] = a.useState(String(Date.now())), [I, _] = a.useState(!1), S = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (0, l.jsx)(d.default, {
        ...e,
        emojiName: t.name,
        size: t.jumboable ? "jumbo" : "default",
        emojiId: t.emojiId,
        animated: t.animated,
        isInteracting: n
      })
    }, N = (0, r.v4)(), M = e => (0, l.jsx)(o.Tooltip, {
      text: (0, h.renderClickableTooltipNode)(t.name, c),
      "aria-label": t.name,
      ...h.EXPRESSION_TOOLTIP_PROPS,
      position: s,
      onTooltipShow: () => {
        _(!0), c && (x({
          emojiNode: t,
          isCustomEmoji: !0,
          nonce: N
        }), u.default.dispatch({
          type: "EMOJI_INTERACTION_INITIATED",
          interaction: g.EmojiInteractionPoint.CustomEmojiTooltipShown
        }))
      },
      children: t => (0, l.jsx)(o.Clickable, {
        ...e,
        onMouseEnter: () => {
          var t;
          null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onClick: t => {
          var n;
          _(!1), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
        },
        onMouseLeave: () => {
          I && (m.default.track(p.AnalyticEvents.CLOSE_POPOUT, {
            nonce: N
          }), _(!1))
        },
        tag: "span",
        className: i(v.emojiContainer, {
          [v.emojiContainerClickable]: c
        }),
        children: S(t)
      })
    });
    return c ? (0, l.jsx)(o.Popout, {
      animation: o.Popout.Animation.FADE,
      align: "center",
      onRequestClose: () => {
        m.default.track(p.AnalyticEvents.CLOSE_POPOUT, {
          nonce: N
        }), _(!1)
      },
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      position: "right",
      renderPopout: e => (0, l.jsx)(f.MessageCustomEmojiPopout, {
        ...e,
        node: t,
        refreshPositionKey: () => C(String(Date.now())),
        nonce: N
      }),
      positionKey: E,
      children: M
    }) : M()
  },
  x = e => {
    let {
      emojiNode: t,
      isCustomEmoji: n,
      nonce: l
    } = e;
    c.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
      type: E.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
      expression_id: t.emojiId,
      expression_name: t.name,
      is_animated: t.animated,
      is_custom: n,
      nonce: l
    })
  }