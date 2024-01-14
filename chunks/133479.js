"use strict";
a.r(e), a.d(e, {
  default: function() {
    return g
  }
}), a("222007");
var n = a("37983"),
  i = a("884691"),
  s = a("917351"),
  l = a("446674"),
  r = a("669491"),
  u = a("891128"),
  c = a("165984"),
  o = a("505088"),
  d = a("77078"),
  _ = a("697218"),
  S = a("908539"),
  f = a("132206"),
  T = a("260883"),
  E = a("170213"),
  A = a("782340"),
  I = a("122698");

function g() {
  let t = (0, f.useSafetyHubAccountStanding)(),
    e = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()),
    [a, g] = i.useState(36),
    N = i.useRef({
      [S.AccountStandingState.ALL_GOOD]: null,
      [S.AccountStandingState.LIMITED]: null,
      [S.AccountStandingState.VERY_LIMITED]: null,
      [S.AccountStandingState.AT_RISK]: null,
      [S.AccountStandingState.SUSPENDED]: null
    }),
    C = i.useCallback(() => {
      let t = Math.max(...Object.values(N.current).map(t => {
        var e;
        return null !== (e = null == t ? void 0 : t.getBoundingClientRect().height) && void 0 !== e ? e : 36
      }));
      g(Math.max(t, 36))
    }, []);
  i.useEffect(() => {
    C();
    let t = (0, s.debounce)(C, 100);
    window.addEventListener("resize", t)
  }, [C]);
  let m = {
      [S.AccountStandingState.ALL_GOOD]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_TITLE,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_DESCRIPTION.format({
          termsOfService: E.SafetyHubLinks.TOS_LINK,
          communityGuidelines: E.SafetyHubLinks.COMMUNITY_GUIDELINES
        }),
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_SHORT,
        Icon: u.CircleCheckIcon,
        color: r.default.colors.STATUS_POSITIVE
      },
      [S.AccountStandingState.LIMITED]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_TITLE,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_DESCRIPTION,
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_SHORT,
        Icon: c.CircleExclamationPointIcon,
        color: r.default.colors.STATUS_WARNING
      },
      [S.AccountStandingState.VERY_LIMITED]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_TITLE,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_DESCRIPTION,
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_SHORT,
        Icon: c.CircleExclamationPointIcon,
        color: r.default.unsafe_rawColors.ORANGE_345
      },
      [S.AccountStandingState.AT_RISK]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_TITLE,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_DESCRIPTION,
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_SHORT,
        Icon: c.CircleExclamationPointIcon,
        color: r.default.colors.STATUS_DANGER
      },
      [S.AccountStandingState.SUSPENDED]: {
        title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_TITLE,
        description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_DESCRIPTION.format({
          termsOfService: E.SafetyHubLinks.TOS_LINK,
          communityGuidelines: E.SafetyHubLinks.COMMUNITY_GUIDELINES
        }),
        status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_SHORT,
        Icon: o.CircleXIcon,
        color: r.default.colors.ICON_MUTED
      }
    },
    {
      title: x,
      description: h,
      color: p,
      Icon: O
    } = m[t.state],
    H = Object.keys(m).length;
  return (0, n.jsxs)(d.Card, {
    className: I.container,
    outline: !1,
    children: [(0, n.jsx)("div", {
      className: I.profile,
      children: (0, n.jsx)(T.default, {
        user: e,
        size: d.AvatarSizes.SIZE_80
      })
    }), (0, n.jsxs)("div", {
      className: I.status,
      children: [(0, n.jsxs)("div", {
        className: I.title,
        children: [(0, n.jsx)(d.Heading, {
          color: "header-primary",
          variant: "heading-lg/normal",
          children: x.format({
            hook: t => (0, n.jsx)(d.Text, {
              style: {
                color: p.css
              },
              variant: "heading-lg/bold",
              tag: "span",
              children: t
            })
          })
        }), (0, n.jsx)(d.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          children: h
        })]
      }), (0, n.jsxs)("div", {
        className: I.health,
        style: {
          height: a
        },
        children: [(0, n.jsx)("div", {
          className: I.line
        }), Object.entries(m).map((e, a) => {
          let [i, s] = e, l = parseInt(i) === t.state;
          return (0, n.jsxs)("div", {
            className: I.statusOption,
            ref: t => N.current[parseInt(i)] = t,
            children: [l ? (0, n.jsx)(O, {
              className: I.marker,
              color: s.color
            }) : (0, n.jsx)("div", {
              className: I.marker,
              style: {
                marginLeft: 0 === a ? -6 : 0,
                marginRight: a === H - 1 ? -6 : 0
              },
              children: (0, n.jsx)("div", {
                className: I.empty
              })
            }), s.status.format({
              hook: t => (0, n.jsx)(d.Text, {
                color: "text-normal",
                variant: "text-sm/normal",
                className: I.statusLabel,
                children: t
              })
            })]
          }, a)
        })]
      })]
    })]
  })
}