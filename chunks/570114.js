"use strict";
A.r(t), A.d(t, {
  getInitialNewRoleParams: function() {
    return U
  },
  WarningIcon: function() {
    return v
  },
  default: function() {
    return x
  }
});
var a = A("37983");
A("884691");
var l = A("627445"),
  n = A.n(l),
  r = A("509043"),
  s = A("65597"),
  o = A("77078"),
  i = A("305961"),
  u = A("191814"),
  d = A("945330"),
  c = A("152224"),
  f = A("228220"),
  C = A("204203"),
  g = A("423487"),
  h = A("373996"),
  T = A("49111"),
  m = A("782340"),
  p = A("60957");

function U() {
  return {
    name: "",
    color: T.DEFAULT_ROLE_COLOR
  }
}

function I(e) {
  let t, {
    onRemove: A,
    role: l
  } = e;
  return t = null != l ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.HiddenVisually, {
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_ROLE_COLOR_ARIA.format({
        color: (0, r.int2hex)(l.color)
      })
    }), (0, a.jsx)("div", {
      className: p.attachedRoleColor,
      style: {
        backgroundColor: (0, r.int2hex)(l.color)
      }
    }), (0, a.jsx)(u.default, {
      size: 8,
      horizontal: !0
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: l.name
    }), null != A && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.default, {
        size: 12,
        horizontal: !0
      }), (0, a.jsx)(o.Clickable, {
        "aria-label": m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ATTACHED_ROLE_ARIA,
        onClick: A,
        className: p.attachedRoleClose,
        children: (0, a.jsx)(d.default, {
          width: 16,
          height: 16,
          className: p.attachedRoleCloseIcon
        })
      })]
    })]
  }) : (0, a.jsx)(o.Spinner, {
    type: o.Spinner.Type.PULSING_ELLIPSIS
  }), (0, a.jsx)("div", {
    className: p.attachedRoleContainer,
    children: t
  })
}

function v() {
  return (0, a.jsx)(g.default, {
    className: p.warningIcon,
    width: 16,
    height: 16
  })
}

function E(e) {
  let {
    roleName: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_BODY.format({
        roleName: t,
        emphasisHook: e => (0, a.jsx)(o.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-normal",
          children: e
        })
      })
    }), (0, a.jsxs)(o.Heading, {
      className: p.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(c.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(u.default, {
        horizontal: !0,
        size: 8
      }), m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_TITLE]
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_DETAIL
    }), (0, a.jsxs)(o.Heading, {
      className: p.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(f.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(u.default, {
        horizontal: !0,
        size: 8
      }), m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_TITLE]
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_DETAIL
    })]
  })
}

function x(e) {
  let {
    newRoleParams: t,
    setNewRoleParams: l,
    guildId: r,
    productId: d,
    listingRoleId: c,
    error: f
  } = e, g = (0, s.default)([i.default], () => {
    if (null != c) {
      let e = i.default.getGuild(r);
      return null == e ? void 0 : e.roles[c]
    }
  }, [c, r]);
  return null === t ? (0, a.jsxs)(o.FormItem, {
    title: (0, a.jsxs)("div", {
      className: p.warningTitle,
      children: [(0, a.jsx)(v, {}), (0, a.jsx)(u.default, {
        horizontal: !0,
        size: 4
      }), m.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_HEADER]
    }),
    tag: "label",
    error: f,
    titleClassName: p.roleHeader,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(u.default, {
      size: 8
    }), (0, a.jsxs)("div", {
      className: p.reattachRoleRow,
      children: [(0, a.jsx)(I, {
        role: g,
        onRemove: void 0
      }), (0, a.jsx)(u.default, {
        horizontal: !0,
        size: 8
      }), (0, a.jsxs)(o.Button, {
        innerClassName: p.restoreDetachedRoleButtonInner,
        color: o.Button.Colors.PRIMARY,
        onClick: () => {
          l(void 0)
        },
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "none",
          children: m.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_UNDO_CTA
        }), (0, a.jsx)(u.default, {
          horizontal: !0,
          size: 8
        }), (0, a.jsx)(C.default, {
          width: 16,
          height: 16
        })]
      })]
    })]
  }) : null != c ? (0, a.jsxs)(o.FormItem, {
    title: m.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: p.roleHeader,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(u.default, {
      size: 8
    }), (0, a.jsx)(I, {
      role: g,
      onRemove: () => {
        n(null != d, "productId cannot be null"), n(null != g, "no role attached"), ! function(e) {
          let {
            onConfirm: t,
            roleName: l
          } = e;
          (0, o.openModalLazy)(async () => {
            let {
              default: e
            } = await A.el("83501").then(A.bind(A, "83501"));
            return A => (0, a.jsx)(e, {
              title: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_TITLE,
              body: (0, a.jsx)(E, {
                roleName: l
              }),
              cta: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CTA,
              closeLabel: m.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CLOSE_LABEL,
              onConfirm: t,
              ...A
            })
          })
        }({
          roleName: g.name,
          onConfirm: () => l(null)
        })
      }
    })]
  }) : (n(null != t, "newRoleParams cannot be null at this point"), (0, a.jsxs)(o.FormItem, {
    required: !0,
    title: m.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: p.roleHeader,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_DESCRIPTION
    }), (0, a.jsx)(u.default, {
      size: 8
    }), (0, a.jsx)(h.default, {
      newRoleParams: t,
      setNewRoleParams: l
    })]
  }))
}