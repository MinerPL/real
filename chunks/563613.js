"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("781738");
var s = n("37983"),
  r = n("884691"),
  a = n("77078"),
  l = n("86678"),
  i = n("46829"),
  u = n("49111"),
  c = n("958706"),
  o = n("782340"),
  d = n("347609");
let f = {
    section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "gift_effect_emoji_picker"
  },
  m = c.EmojiIntention.GIFT;

function _(e) {
  let {
    setEmojiConfetti: t,
    emojiConfetti: n
  } = e, [u, c] = r.useState(!1), _ = e => (0, s.jsxs)("div", {
    className: d.customGiftContent,
    children: [(0, s.jsxs)("div", {
      className: d.customGiftHeader,
      children: [(0, s.jsx)(a.Text, {
        variant: "text-md/bold",
        children: o.default.Messages.GIFT_SELECT_EMOJI
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: o.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
      })]
    }), e]
  }), E = e => {
    null != t && (t(e), c(!1))
  };
  return (0, s.jsx)(a.Popout, {
    shouldShow: u,
    position: "bottom",
    align: "left",
    autoInvert: !1,
    onRequestClose: () => c(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(l.default, {
        analyticsOverride: f,
        closePopout: t,
        onSelectEmoji: E,
        wrapper: "div",
        pickerIntention: m,
        renderHeader: _,
        headerClassName: d.emojiHeader,
        className: d.emojiList,
        listHeaderClassName: d.emojiList,
        searchProps: {
          accessory: (0, s.jsx)(s.Fragment, {})
        }
      })
    },
    children: () => (0, s.jsx)("div", {
      className: d.container,
      children: (0, s.jsx)(a.Clickable, {
        className: d.emoji,
        onClick: () => c(!0),
        children: (null == n ? void 0 : n.name) == null ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(i.default, {
            className: d.emojiIcon,
            width: 14,
            height: 14
          }), (0, s.jsx)(a.Text, {
            className: d.text,
            variant: "text-sm/semibold",
            children: o.default.Messages.GIFT_SELECT_EMOJI
          })]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(a.Text, {
            className: d.textSelected,
            variant: "text-sm/semibold",
            children: n.optionallyDiverseSequence
          }), (0, s.jsx)(a.Text, {
            className: d.text,
            variant: "text-sm/semibold",
            children: n.name.replace(/_/g, " ")
          })]
        })
      })
    })
  })
}