"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var s = l("37983");
l("884691");
var n = l("77078"),
  a = l("430568"),
  o = l("86678"),
  i = l("145106"),
  r = l("882641"),
  d = l("958706");

function u(e) {
  let {
    className: t,
    emojiClassName: l,
    emoji: u,
    setEmoji: c,
    channel: N
  } = e, O = e => (t, l) => {
    var s, n;
    null != t && (null == t.id ? c({
      name: null !== (s = t.optionallyDiverseSequence) && void 0 !== s ? s : ""
    }) : c({
      id: t.id,
      name: null !== (n = t.originalName) && void 0 !== n ? n : t.name,
      animated: t.animated
    }), l && e())
  }, m = null == u || null == u.name ? null : () => {
    var e;
    return (0, s.jsx)(a.default, {
      className: l,
      animated: null !== (e = u.animated) && void 0 !== e && e,
      emojiId: u.id,
      emojiName: u.name
    })
  };
  return (0, s.jsx)(i.default, {
    hasSetEmoji: null != u && null != u.name,
    onClick: () => {
      c(null)
    },
    children: (0, s.jsx)(n.Popout, {
      position: "bottom",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, s.jsx)(o.default, {
          closePopout: t,
          onSelectEmoji: O(t),
          pickerIntention: d.EmojiIntention.COMMUNITY_CONTENT,
          channel: N
        })
      },
      children: (e, l) => {
        let {
          isShown: n
        } = l;
        return (0, s.jsx)(r.default, {
          ...e,
          tabIndex: 0,
          active: n,
          className: t,
          renderButtonContents: m
        })
      }
    })
  })
}