"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
}), s("222007");
var a, n = s("37983"),
  l = s("884691"),
  i = s("414456"),
  r = s.n(i),
  o = s("77078"),
  d = s("145131"),
  u = s("259051"),
  c = s("49111"),
  S = s("782340"),
  E = s("76666");
let f = {
    [c.HypeSquadHouses.HOUSE_1]: E.membershipDialogHouse1,
    [c.HypeSquadHouses.HOUSE_2]: E.membershipDialogHouse2,
    [c.HypeSquadHouses.HOUSE_3]: E.membershipDialogHouse3
  },
  T = {
    [c.HypeSquadHouses.HOUSE_1]: E.houseLogoHouse1,
    [c.HypeSquadHouses.HOUSE_2]: E.houseLogoHouse2,
    [c.HypeSquadHouses.HOUSE_3]: E.houseLogoHouse3
  },
  m = {
    [c.HypeSquadHouses.HOUSE_1]: s("385622"),
    [c.HypeSquadHouses.HOUSE_2]: s("178266"),
    [c.HypeSquadHouses.HOUSE_3]: s("140090")
  },
  _ = e => {
    let t = {
      [c.HypeSquadHouses.HOUSE_1]: S.default.Messages.HYPESQUAD_DESCRIPTION_HOUSE_1,
      [c.HypeSquadHouses.HOUSE_2]: S.default.Messages.HYPESQUAD_DESCRIPTION_HOUSE_2,
      [c.HypeSquadHouses.HOUSE_3]: S.default.Messages.HYPESQUAD_DESCRIPTION_HOUSE_3
    };
    return t[e]
  };
a = class extends l.Component {
  render() {
    let {
      houseMembership: e,
      isClaimed: t,
      isVerified: s
    } = this.props;
    if (!t || !s) return null;
    if (null != e) {
      let t = S.default.Messages.HYPESQUAD_MEMBERSHIP_HEADING.format({
        houseName: (0, u.getHouseNameFromHouseID)(e)
      });
      return (0, n.jsx)("div", {
        className: r(E.membershipDialog, f[e]),
        children: (0, n.jsxs)("div", {
          className: E.membershipDialogContent,
          children: [(0, n.jsxs)(d.default, {
            children: [(0, n.jsxs)(d.default.Child, {
              grow: 1,
              shrink: 1,
              children: [(0, n.jsx)(o.Text, {
                className: E.membershipDialogHeading,
                variant: "text-xs/bold",
                children: S.default.Messages.HYPESQUAD_YOUR_HOUSE
              }), (0, n.jsx)(o.Heading, {
                className: E.membershipDialogHouseName,
                variant: "heading-sm/semibold",
                children: t
              }), (0, n.jsx)(o.Text, {
                className: E.membershipDialogHouseDescription,
                variant: "text-md/normal",
                children: _(e)
              })]
            }), (0, n.jsx)(d.default.Child, {
              className: E.houseLogoWrapper,
              grow: 0,
              shrink: 0,
              wrap: !0,
              children: (0, n.jsx)("img", {
                className: r(E.houseLogo, T[e]),
                src: m[e],
                alt: t
              })
            })]
          }), (0, n.jsxs)(o.Text, {
            className: E.membershipDialogSwitchHouses,
            variant: "text-md/normal",
            children: [S.default.Messages.HYPESQUAD_SWITCH_HOUSES_PROMPT, (0, n.jsx)(o.Clickable, {
              className: E.membershipDialogSwitchHousesAction,
              onClick: this.handleJoinHypeSquadClick,
              tag: "span",
              children: S.default.Messages.HYPESQUAD_SWITCH_HOUSES_ACTION
            })]
          })]
        })
      })
    }
    return (0, n.jsxs)("div", {
      className: E.joinCTAWrapper,
      children: [(0, n.jsxs)(d.default, {
        className: E.joinCTA,
        align: d.default.Align.CENTER,
        justify: d.default.Justify.CENTER,
        direction: d.default.Direction.HORIZONTAL,
        children: [(0, n.jsx)(d.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: S.default.Messages.HYPESQUAD_READY_TO_REP
          })
        }), (0, n.jsx)(d.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(o.Button, {
            onClick: this.handleJoinHypeSquadClick,
            children: S.default.Messages.HYPESQUAD_JOIN
          })
        })]
      }), (0, n.jsx)(o.Text, {
        className: E.newsletterWarning,
        variant: "text-sm/normal",
        children: S.default.Messages.HYPESQUAD_NEWSLETTER_WARNING
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleJoinHypeSquadClick = () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("655615").then(s.bind(s, "655615"));
        return t => (0, n.jsx)(e, {
          ...t
        })
      })
    }
  }
}