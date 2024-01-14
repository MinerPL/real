"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("851387"),
  u = s("534291"),
  c = s("206230"),
  E = s("126383"),
  _ = s("49111"),
  T = s("782340"),
  I = s("680451");

function S(e) {
  let {
    color: t,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: I.roleTag,
    children: [(0, a.jsx)(o.RoleCircle, {
      className: I.roleDot,
      color: t
    }), (0, a.jsx)("span", {
      className: I.roleText,
      children: s
    })]
  })
}

function N(e) {
  let {
    guild: t,
    display: s
  } = e;
  return (0, a.jsxs)("div", {
    className: i(I.banner, t.backgroundClass, {
      [I.bannerOut]: !s
    }),
    children: [(0, a.jsx)("div", {
      className: I.roles,
      children: t.roles.map((e, t) => (0, a.jsx)("div", {
        className: I.rolesRow,
        children: e.map(e => (0, a.jsx)(S, {
          color: e.color,
          children: e.name
        }, e.name))
      }, t))
    }), (0, a.jsx)("div", {
      className: I.profileCard,
      children: (0, a.jsxs)("div", {
        className: I.avatarContainer,
        children: [(0, a.jsx)(o.Avatar, {
          size: o.AvatarSizes.SIZE_56,
          "aria-hidden": !0,
          status: _.StatusTypes.ONLINE,
          src: t.avatar
        }), (0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/bold",
          className: I.avatarName,
          children: t.username
        })]
      })
    })]
  })
}

function g() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    t = n.useMemo(() => [{
      backgroundClass: I.bannerClubs,
      username: "Wumpus#0000",
      avatar: s("896122"),
      roles: [
        [{
          name: T.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_1,
          color: "#7e00fc"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_2,
          color: "#faa61a"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_3,
          color: "#f06ea8"
        }],
        [{
          name: T.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_4,
          color: "#45ddc0"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_5,
          color: "#00b0f4"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_6,
          color: "#ba1616"
        }]
      ]
    }, {
      backgroundClass: I.bannerGaming,
      username: "Graggle#0000",
      avatar: s("352683"),
      roles: [
        [{
          name: T.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_1,
          color: "#4a76e6"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_2,
          color: "#ad87ff"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_3,
          color: "#6defcf"
        }],
        [{
          name: T.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_4,
          color: "#ff73fa"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_5,
          color: "#3ba55c"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_6,
          color: "#ff1b66"
        }]
      ]
    }, {
      backgroundClass: I.bannerHobbies,
      username: "Mallow#0000",
      avatar: s("380476"),
      roles: [
        [{
          name: T.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_1,
          color: "#20d6b8"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_2,
          color: "#236136"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_3,
          color: "#ff9a15"
        }],
        [{
          name: T.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_4,
          color: "#ff78b9"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_5,
          color: "#00b0f4"
        }, {
          name: T.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_6,
          color: "#6f52e4"
        }]
      ]
    }], []),
    [l, i] = n.useState(0);
  return n.useEffect(() => {
    if (e) return;
    let s = setTimeout(() => i((l + 1) % t.length), 6332);
    return () => clearTimeout(s)
  }, [l]), (0, a.jsx)("div", {
    className: I.bannerContainer,
    "aria-hidden": !0,
    children: t.map((e, t) => (0, a.jsx)(N, {
      guild: e,
      display: t === l
    }, t))
  })
}

function f(e) {
  let {
    guild: t,
    everyoneRole: s,
    setEditRoleId: l
  } = e, [i, r] = n.useState(!1), c = async () => {
    r(!0), await d.default.createRole(t.id), r(!1)
  }, _ = n.useCallback(() => {
    l(s.id)
  }, [l, s.id]);
  return (0, a.jsx)(u.DefaultCustomContentScroller, {
    children: (0, a.jsxs)(o.FormSection, {
      className: I.section,
      title: T.default.Messages.ROLES,
      tag: o.FormTitleTags.H2,
      children: [(0, a.jsxs)("div", {
        className: I.container,
        children: [(0, a.jsx)(g, {}), (0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          children: T.default.Messages.ROLE_OVERVIEW_EMPTY_SUBHEADER
        }), (0, a.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: I.introBody,
          children: T.default.Messages.ROLE_OVERVIEW_DESCRIPTION
        }), (0, a.jsx)(o.Button, {
          className: I.button,
          size: o.Button.Sizes.MEDIUM,
          onClick: c,
          submitting: i,
          children: T.default.Messages.ROLE_CREATE_CTA
        })]
      }), (0, a.jsx)(o.FormDivider, {
        className: I.divider
      }), (0, a.jsx)(E.default, {
        role: s,
        onClick: _
      })]
    })
  })
}