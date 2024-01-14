"use strict";
s.r(t), s.d(t, {
  MemberApplicationsListRow: function() {
    return N
  },
  MemberApplicationsListRowPlaceholder: function() {
    return A
  }
}), s("222007"), s("70102");
var a = s("37983"),
  l = s("884691"),
  i = s("414456"),
  n = s.n(i),
  u = s("866227"),
  r = s.n(u),
  o = s("77078"),
  d = s("272030"),
  c = s("766274"),
  E = s("36694"),
  I = s("945330"),
  S = s("433487"),
  f = s("315102"),
  T = s("549103"),
  _ = s("567054"),
  R = s("782340"),
  p = s("297298");

function m(e) {
  let {
    icon: t,
    onClick: s,
    submitting: l,
    disabled: i
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: n(p.actionIconContainer, {
      [p.disabled]: i || l
    }),
    onClick: s,
    children: l ? (0, a.jsx)(o.Dots, {
      className: p.icon,
      dotRadius: 2,
      themed: !0
    }) : (0, a.jsx)(t, {
      className: p.icon,
      height: 12,
      width: 12
    })
  })
}

function N(e) {
  let {
    applicationStatus: t,
    guild: i,
    guildJoinRequest: u,
    className: N,
    onClick: A
  } = e, [M, h] = l.useState(null), {
    user: g,
    createdAt: x
  } = u;
  if (null == g) throw Error("Missing user on this guild join request!");
  let G = l.useMemo(() => new c.default(g), [g]),
    C = f.default.getUserAvatarURL(G),
    v = t === _.GuildJoinRequestApplicationStatuses.SUBMITTED,
    D = l.useCallback(async (e, t) => {
      let {
        guildId: s,
        userId: a
      } = e;
      if (null == M) {
        h(t);
        try {
          await T.default.updateGuildJoinRequest(s, a, t)
        } catch (e) {
          (0, o.showToast)((0, o.createToast)(R.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE)), h(null)
        }
      }
    }, [M]),
    O = async () => {
      await D(u, _.GuildJoinRequestApplicationStatuses.APPROVED)
    }, j = async () => {
      await D(u, _.GuildJoinRequestApplicationStatuses.REJECTED)
    };
  return (0, a.jsxs)(o.Clickable, {
    className: n(p.container, N),
    onClick: A,
    children: [(0, a.jsx)(o.Avatar, {
      src: C,
      size: o.AvatarSizes.SIZE_40,
      "aria-label": g.username,
      className: p.spacer
    }), (0, a.jsxs)("div", {
      className: p.userDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: g.username
      }), (0, a.jsx)(o.Text, {
        className: p.createdAt,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: r(x).format("lll")
      })]
    }), v && (0, a.jsx)(m, {
      icon: E.default,
      onClick: O,
      submitting: M === _.GuildJoinRequestApplicationStatuses.APPROVED,
      disabled: null != M && M !== _.GuildJoinRequestApplicationStatuses.APPROVED
    }), v && (0, a.jsx)(m, {
      icon: I.default,
      onClick: j,
      submitting: M === _.GuildJoinRequestApplicationStatuses.REJECTED,
      disabled: null != M && M !== _.GuildJoinRequestApplicationStatuses.REJECTED
    }), (0, a.jsx)(o.Clickable, {
      className: n(p.overflowMenuContainer, {
        [p.disabled]: null != M
      }),
      onClick: e => {
        (0, d.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await s.el("176032").then(s.bind(s, "176032"));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: i,
            user: G
          })
        }, {
          position: "bottom",
          align: "right"
        })
      },
      children: (0, a.jsx)(S.default, {
        className: p.icon,
        width: 18
      })
    })]
  })
}

function A() {
  return (0, a.jsxs)("div", {
    className: p.placeholder,
    children: [(0, a.jsx)("div", {
      className: n(p.placeholderAvatar)
    }), (0, a.jsxs)("div", {
      className: p.userDetails,
      children: [(0, a.jsx)("div", {
        className: p.placeholderUsername,
        style: {
          maxWidth: "".concat(Math.floor(50 * Math.random()) + 100, "px")
        }
      }), (0, a.jsx)("div", {
        className: p.placeholderCreatedAt,
        style: {
          maxWidth: "".concat(Math.floor(25 * Math.random()) + 50, "px")
        }
      })]
    })]
  })
}