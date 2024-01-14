"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("77078"),
  i = a("603371"),
  d = a("208695"),
  r = a("782340"),
  u = a("923254"),
  o = n.memo(function(e) {
    let {
      guildId: t,
      feedItemId: a,
      messages: o
    } = e, c = n.useRef([]), f = o.some(e => e.attachments.length > 0), m = f ? 4 : 8, [h, E] = n.useState(), [g, I] = n.useState(), [_, x] = (0, i.default)(t, a);
    if (n.useLayoutEffect(() => {
        let e = 0;
        for (let [a, l] of c.current.entries()) {
          var t;
          if (null == l) continue;
          let n = parseFloat(null !== (t = window.getComputedStyle(l).getPropertyValue("line-height")) && void 0 !== t ? t : "0"),
            s = l.scrollHeight / n;
          if ((e += s) > m) {
            E(a), I(s - (e - m));
            break
          }
        }
      }, [o, m]), 0 === o.length) return null;
    let v = o[0].id;
    return (0, l.jsx)(l.Fragment, {
      children: o.map((t, a) => {
        if (null != h && a > h && !_) return null;
        let n = h === a,
          i = n && null != g ? function(e) {
            if (e >= 10) return u.clampLarge;
            if (e >= 4 && e < 10) return u.clampMed;
            if (e < 4) return u.clampSmall
          }(g) : null,
          f = n && null != i && !_;
        return (0, l.jsx)(d.GuildFeedMessage, {
          message: t,
          groupId: v,
          ...e,
          contentClassName: f ? i : void 0,
          children: f ? (0, l.jsx)(s.Clickable, {
            className: u.showMore,
            onClick: e => x(e, t),
            "aria-hidden": !0,
            children: r.default.Messages.GUILD_FEED_TRUNCATED_MESSAGE_SEE_MORE
          }) : null,
          ref: e => c.current[a] = e,
          hideHeader: 0 !== a,
          forceAddReactions: a === o.length - 1
        }, t.id)
      })
    })
  })