"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("77078"),
  o = n("86678"),
  s = n("538282"),
  a = n("882641"),
  u = n("848471"),
  d = n("958706"),
  c = n("223797");

function f(e) {
  var t;
  let {
    editorRef: n,
    options: f,
    channel: p
  } = e, m = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(), h = i.useCallback((e, t) => {
    let l = n.current;
    null != e && null != l && l.insertEmoji(e, t, !1), t && (0, s.closeExpressionPicker)()
  }, [n]);
  return null == m ? null : (0, l.jsxs)("div", {
    id: "slate-toolbar",
    className: c.staticToolbar,
    children: [(0, l.jsx)("div", {
      className: c.staticButtons,
      children: (0, l.jsx)(u.ToolbarButtons, {
        editorRef: n,
        options: f,
        iconClassName: c.staticIcon,
        dividerClassName: c.staticDivider
      })
    }), (0, l.jsx)(r.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, l.jsx)(o.default, {
          persistSearch: !0,
          channel: p,
          closePopout: t,
          onSelectEmoji: (e, n) => {
            h(e, n), n && t()
          },
          pickerIntention: d.EmojiIntention.COMMUNITY_CONTENT
        })
      },
      position: "bottom",
      animation: r.Popout.Animation.NONE,
      align: "left",
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, l.jsx)(a.default, {
          ...e,
          active: n,
          className: c.emojiButton,
          tabIndex: 0
        })
      }
    })]
  })
}