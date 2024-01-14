"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("555826"),
  o = s("677099"),
  d = s("840022"),
  u = s("131424"),
  c = s("782340"),
  S = s("559218"),
  E = function(e) {
    let {
      hasAppliedGuildBoosts: t
    } = e, s = (0, l.useStateFromStores)([r.default], () => r.default.affinities), E = (0, l.useStateFromStores)([o.default], () => o.default.getFlattenedGuildIds()), f = n.useMemo(() => {
      let e = s.slice(0, 3).map(e => e.guildId);
      for (let t = 0; t < E.length && !(e.length >= 3); t++) {
        let s = E[t];
        !e.includes(s) && e.push(s)
      }
      return e
    }, [s, E]);
    return 0 === f.length ? null : (0, a.jsxs)("div", {
      className: S.wrapper,
      children: [t && (0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        className: S.header,
        children: c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_RECOMMENDED_SERVERS_HEADING
      }), f.map((e, t) => (0, a.jsx)(u.default, {
        className: S.recommendedServerCard,
        guildId: e,
        boostingVariant: !0,
        showSparkes: 0 === t
      }, e)), E.length > 3 && (0, a.jsx)(d.default, {})]
    })
  }