"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("448881"),
  o = s("2973"),
  d = s("249900"),
  u = s("400377"),
  c = s("822107"),
  S = s("782340"),
  E = s("632087");
let f = e => {
  let {
    quest: t
  } = e;
  return (0, a.jsxs)("div", {
    className: E.questsCard,
    children: [(0, a.jsx)(c.default, {
      quest: t
    }), (0, a.jsx)(u.default, {
      quest: t
    })]
  })
};
var T = () => {
  let [e, t] = n.useState(!1), s = (0, l.useStateFromStoresArray)([o.default], () => [...o.default.quests.values()]), {
    isFetchingCurrentQuests: u,
    lastFetchedCurrentQuests: c
  } = (0, l.useStateFromStoresObject)([o.default], () => ({
    isFetchingCurrentQuests: o.default.isFetchingCurrentQuests,
    lastFetchedCurrentQuests: o.default.lastFetchedCurrentQuests
  }));
  return (n.useEffect(() => {
    !e && 0 === c && !u && (t(!0), (0, r.fetchCurrentQuests)())
  }, [u, c, e]), u) ? (0, a.jsx)(i.Spinner, {
    className: E.spinner
  }) : 0 === s.length ? null : (0, a.jsx)(i.FormSection, {
    className: E.questsContainer,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsxs)(i.Heading, {
        variant: "heading-md/semibold",
        className: E.questsHeading,
        children: [(0, a.jsx)(d.default, {
          className: E.questsIcon
        }), S.default.Messages.QUESTS]
      }),
      children: [(0, a.jsx)(i.FormDivider, {
        className: E.divider
      }), s.map(e => (0, a.jsx)(f, {
        quest: e
      }, e.id))]
    })
  })
}