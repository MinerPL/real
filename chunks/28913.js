"use strict";
i.r(e), i.d(e, {
  default: function() {
    return c
  }
});
var l = i("37983");
i("884691");
var r = i("77078"),
  n = i("35006"),
  a = i("967003"),
  s = i("989750"),
  o = i("782340"),
  d = i("407817");

function c(t) {
  let {
    guild: e,
    message: i
  } = t, c = (0, a.useNewMemberBadge)(e.id, i.author.id);
  return c ? (0, l.jsx)(r.Popout, {
    animation: r.Popout.Animation.TRANSLATE,
    align: "center",
    autoInvert: !0,
    nudgeAlignIntoViewport: !0,
    position: "right",
    renderPopout: t => {
      let {
        closePopout: r
      } = t;
      return (0, l.jsx)(s.default, {
        guild: e,
        message: i,
        onClose: r
      })
    },
    children: t => {
      let {
        onClick: e
      } = t;
      return (0, l.jsx)(r.Clickable, {
        onClick: e,
        tag: "span",
        children: (0, l.jsx)(r.Tooltip, {
          text: o.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT,
          children: t => (0, l.jsx)("div", {
            className: d.newMemberBadge,
            ...t,
            children: (0, l.jsx)(n.default, {
              width: 20,
              height: 20
            })
          })
        })
      })
    }
  }) : null
}