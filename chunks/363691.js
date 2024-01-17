"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("851387"),
  d = n("393414"),
  c = n("305961"),
  f = n("162771"),
  E = n("531470"),
  _ = n("794818"),
  T = n("267567"),
  I = n("49111"),
  m = n("782340"),
  N = n("600323"),
  p = n("105029"),
  S = () => {
    let e = (0, r.useStateFromStores)([f.default], () => f.default.getGuildId(), []),
      t = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(e), [e]),
      n = (0, r.useStateFromStores)([T.default], () => T.default.getHistorySnapshot(), []),
      [a, S] = l.useState(!1);
    if (null == t) return null;
    let A = async () => {
      S(!0);
      try {
        _.trackGuildJoinClicked(t.id), await u.default.joinGuild(t.id, {
          source: I.JoinGuildSources.NOTICE_BAR
        })
      } catch {
        S(!1)
      }
    };
    return (0, s.jsxs)("div", {
      className: i(N.notice, p.notice),
      children: [(0, s.jsxs)(o.Button, {
        look: o.Button.Looks.OUTLINED,
        color: o.Button.Colors.WHITE,
        size: o.Button.Sizes.NONE,
        className: i(N.button, N.back),
        innerClassName: N.iconButton,
        onClick: () => {
          let e = (0, d.getHistory)();
          null != n && null != n.location ? (0, d.replaceWith)({
            ...n.location
          }) : e.goBack()
        },
        children: [(0, s.jsx)(E.default, {
          width: 16,
          height: 16,
          className: N.arrow
        }), m.default.Messages.BACK]
      }), (0, s.jsx)(o.Text, {
        className: N.header,
        variant: "text-sm/normal",
        children: m.default.Messages.LURKER_MODE_NAG_BAR_HEADER
      }), (0, s.jsx)(o.Button, {
        className: N.button,
        look: o.Button.Looks.OUTLINED,
        color: o.Button.Colors.WHITE,
        size: o.Button.Sizes.NONE,
        submitting: a,
        onClick: A,
        children: m.default.Messages.LURKER_MODE_NAG_BAR_BUTTON.format({
          guild: t.name
        })
      })]
    })
  }