"use strict";
n.r(t), n.d(t, {
  ClydeEditProfileModalPersonalitySection: function() {
    return _
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
  i = n("65597"),
  s = n("77078"),
  a = n("570697"),
  o = n("826432"),
  u = n("204203"),
  c = n("599110"),
  d = n("335189"),
  f = n("473591"),
  h = n("680894"),
  E = n("49111"),
  p = n("782340"),
  C = n("192731");

function _(e) {
  var t;
  let {
    settings: n
  } = e, [_, m] = r.useState(!1), [v, I] = r.useState(), {
    pendingPersonality: g,
    errors: S
  } = (0, i.useStateFromStoresObject)([f.default], () => ({
    pendingPersonality: f.default.getPendingPersonality(),
    errors: f.default.getErrors()
  })), [R, N] = r.useState(), L = null != g && v === g, T = null != S && Number(S.code) === E.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? S.message : void 0, x = L ? p.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : p.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
  return (0, l.jsxs)(a.default, {
    title: p.default.Messages.PERSONALITY_CLYDE_SECTION,
    children: [(0, l.jsxs)(s.FormText, {
      type: s.FormText.Types.DESCRIPTION,
      className: C.description,
      children: [p.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, l.jsx)(s.Anchor, {
        href: h.CLYDE_PERSONALITY_FEEDBACK_URL,
        children: p.default.Messages.PERSONALITY_FEEDBACK
      })]
    }), (0, l.jsx)(s.TextArea, {
      value: null !== (t = null != g ? g : n.personality) && void 0 !== t ? t : "",
      onChange: e => {
        (0, d.setPendingPersonality)(e)
      },
      placeholder: p.default.Messages.PERSONALITY_PLACEHOLDER,
      maxLength: h.CLYDE_PERSONALITY_MAX_LENGTH,
      disabled: _,
      autosize: !0
    }), null != T ? (0, l.jsx)(s.FormErrorBlock, {
      className: C.errorBlock,
      children: T
    }) : null, (0, l.jsxs)("div", {
      className: C.generateButtonContainer,
      children: [(0, l.jsx)(s.Button, {
        color: L ? s.ButtonColors.PRIMARY : s.ButtonColors.BRAND,
        innerClassName: C.generateButton,
        onClick: () => {
          if (L && null != R) {
            (0, d.setPendingPersonality)(R), N(void 0);
            return
          }
          null != g && "" !== g.trim() && (c.default.track(E.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
            guild_id: n.guild_id
          }), m(!0), (0, d.generatePersonality)(g).then(e => {
            null != e && (N(g), I(e), (0, d.setPendingPersonality)(e, !0)), m(!1)
          }))
        },
        disabled: null == g || "" === g.trim(),
        submitting: _,
        children: L ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.default, {
            className: C.buttonIcon
          }), p.default.Messages.UNDO]
        }) : (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(o.default, {
            className: C.buttonIcon
          }), p.default.Messages.CLYDE_GENERATE_PERSONALITY]
        })
      }), (0, l.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: x
      })]
    })]
  }, "personality")
}