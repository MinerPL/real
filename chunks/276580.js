"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("424973");
var a = n("37983"),
  s = n("884691"),
  i = n("77078"),
  l = n("913144"),
  r = n("685665"),
  o = n("141254"),
  u = n("116616"),
  d = n("465126"),
  c = n("738169"),
  f = n("49111"),
  E = n("628159");
let _ = [
    [1696, 20],
    [1432, 16],
    [1168, 12],
    [0, 8]
  ],
  h = [
    [1696, 30],
    [1432, 24],
    [1168, 18],
    [0, 12]
  ];
var C = e => {
  let t, {
    title: n,
    subtitle: C,
    guildsData: I,
    analyticsContext: T,
    theme: S,
    onViewGuild: m,
    fetchGuilds: p,
    onGuildCardSeen: A,
    currentCategoryId: g,
    loadId: N,
    onTagClick: R,
    showMoreCards: O = !1
  } = e;
  s.useEffect(() => {
    l.default.wait(() => p())
  }, [g]);
  let L = (0, c.default)(O ? h : _),
    {
      analyticsLocations: v
    } = (0, r.default)();
  if (null == I) return null;
  let {
    guilds: M,
    loading: P
  } = I, D = null == M || 0 === M.length;
  if (!P && D) return null;
  let y = async e => {
    if ((0, o.isAtGuildCapAndNonPremium)())(0, u.default)({
      analyticsSource: {
        page: f.AnalyticsPages.GUILD_DISCOVERY
      },
      analyticsLocation: {
        page: f.AnalyticsPages.GUILD_DISCOVERY,
        section: f.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
      },
      analyticsLocations: v
    });
    else {
      let t = M.findIndex(t => t.id === e);
      await m(e, t, T, N)
    }
  };
  if (P || null == M) {
    let e = [];
    for (let t = 0; t < L; t++) e.push((0, a.jsx)(d.default.Placeholder, {}, t));
    t = e
  } else t = M.slice(0, L).map(e => (0, a.jsx)(d.default, {
    className: E.guildCard,
    guild: e,
    onView: y,
    theme: S,
    onGuildCardSeen: A,
    onTagClick: R
  }, e.id));
  return (0, a.jsx)("section", {
    className: E.guildListSection,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsx)(i.Heading, {
        className: E.title,
        variant: "heading-lg/semibold",
        children: n
      }),
      children: [null != C && (0, a.jsx)(i.Text, {
        className: E.subtitle,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: C
      }), (0, a.jsx)("div", {
        className: E.guildList,
        children: t
      })]
    })
  })
}