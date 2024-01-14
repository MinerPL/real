"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("669491"),
  r = s("77078"),
  o = s("137215"),
  d = s("300113"),
  u = s("449008"),
  c = s("429464"),
  S = s("106413"),
  E = s("653208"),
  f = s("782340"),
  T = s("679334");

function m(e) {
  let {
    onBackClick: t
  } = e, s = (0, l.useStateFromStores)([c.default], () => c.default.getAllUnlockedAchievements()), m = n.useMemo(() => {
    let e = Object.values(s);
    return e.sort((e, t) => t.dateUnlocked - e.dateUnlocked)
  }, [s]), _ = n.useMemo(() => Object.values(S.ACHIEVEMENT_LIST).filter(u.isNotNullish).filter(e => null == s[e.id]).sort((e, t) => e.rarity - t.rarity), [s]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.FormSection, {
      children: (0, a.jsxs)(r.Clickable, {
        onClick: t,
        className: T.backContainer,
        children: [(0, a.jsx)(o.default, {
          direction: o.default.Directions.LEFT,
          className: T.icon
        }), (0, a.jsx)(r.Text, {
          variant: "text-lg/normal",
          color: "text-normal",
          children: f.default.Messages.BACK
        })]
      })
    }), (0, a.jsxs)("div", {
      className: T.headerContainer,
      children: [(0, a.jsxs)("div", {
        className: T.headerTextContainer,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          children: f.default.Messages.POGGERMODE_ACHIEVEMENT_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: f.default.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
        })]
      }), (0, a.jsx)("div", {
        className: T.headerIcon,
        children: (0, a.jsx)(d.default, {
          color: i.default.unsafe_rawColors.ORANGE_345.css,
          width: 40,
          height: 40
        })
      })]
    }), m.length > 0 && (0, a.jsx)(r.FormSection, {
      className: T.divider,
      children: (0, a.jsx)("div", {
        className: T.achievementGrid,
        children: m.map(e => {
          let {
            achievementId: t,
            dateUnlocked: s
          } = e;
          return (0, a.jsx)(E.default, {
            achievementId: t,
            dateUnlocked: s
          }, t)
        })
      })
    }), _.length > 0 && (0, a.jsxs)(r.FormSection, {
      className: T.divider,
      children: [(0, a.jsx)("div", {
        className: T.headerTextContainer,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/bold",
          color: "header-secondary",
          children: f.default.Messages.POGGERMODE_ACHIEVEMENT_LOCKED_TITLE
        })
      }), (0, a.jsx)("div", {
        className: T.achievementGrid,
        children: _.map(e => (0, a.jsx)(E.default, {
          achievementId: e.id
        }, e.id))
      })]
    }), (0, a.jsx)(r.FormSection, {
      className: T.divider,
      children: (0, a.jsx)("div", {
        className: T.bottomPadding
      })
    })]
  })
}