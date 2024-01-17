"use strict";
s.r(t), s.d(t, {
  ImportBenefitsFromSubscriptionListingModal: function() {
    return Y
  },
  ImportBenefitsFromRoleModal: function() {
    return Z
  }
}), s("222007"), s("881410");
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("414456"),
  o = s.n(r),
  d = s("775560"),
  u = s("316693"),
  c = s("509043"),
  E = s("446674"),
  _ = s("233736"),
  T = s("769846"),
  I = s("77078"),
  S = s("430568"),
  N = s("419830"),
  g = s("385976"),
  f = s("405645"),
  A = s("233069"),
  L = s("245997"),
  m = s("305961"),
  C = s("476765"),
  O = s("461380"),
  h = s("593195"),
  R = s("36694"),
  D = s("375352"),
  M = s("682344"),
  G = s("483093"),
  x = s("159885"),
  p = s("577357"),
  U = s("880993"),
  v = s("833531"),
  j = s("559979"),
  P = s("49111"),
  y = s("782340"),
  b = s("943134");
let B = (0, C.uid)(),
  F = (0, C.uid)(),
  H = (0, x.cssValueToNumber)(T.default.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function V(e) {
  var t;
  let {
    emojiId: s,
    emojiName: a,
    className: n
  } = e, i = (0, E.useStateFromStores)([g.default], () => null != s ? g.default.getCustomEmojiById(s) : void 0);
  return (0, l.jsx)(S.default, {
    emojiId: s,
    emojiName: a,
    animated: null !== (t = null == i ? void 0 : i.animated) && void 0 !== t && t,
    className: n
  })
}

function w(e) {
  let {
    icon: t,
    children: s,
    checked: a,
    disabled: n = !1,
    onChange: i
  } = e, r = a || n;
  return (0, l.jsxs)("label", {
    className: o(b.row, {
      [b.checked]: r,
      [b.disabled]: n
    }),
    children: [(0, l.jsx)("div", {
      className: b.rowIconWrapper,
      children: t
    }), (0, l.jsx)("div", {
      className: b.rowText,
      children: s
    }), (0, l.jsxs)("div", {
      className: b.rowCheckbox,
      children: [(0, l.jsx)(I.FocusRing, {
        children: (0, l.jsx)("input", {
          type: "checkbox",
          checked: r,
          disabled: n,
          className: b.checkboxInput,
          onChange: function(e) {
            i(e.target.checked)
          }
        })
      }), (0, l.jsx)("div", {
        className: b.checkboxDisplay,
        children: (0, l.jsx)(R.default, {
          className: b.checkboxIcon,
          "aria-hidden": !0
        })
      })]
    })]
  })
}

function k(e) {
  let {
    title: t,
    selectAllText: s,
    benefits: a,
    dupeBenefits: n,
    selectedBenefits: i,
    onToggleBenefit: r
  } = e, o = a.every(e => i.has(e));
  return a.length > 0 ? (0, l.jsxs)(I.FormSection, {
    title: t,
    className: b.section,
    children: [a.length - n.size > 1 && (0, l.jsx)("div", {
      className: b.list,
      children: (0, l.jsx)(w, {
        icon: (0, l.jsx)(D.default, {
          className: b.rowIcon
        }),
        checked: o,
        onChange: function(e) {
          for (let t of a) !n.has(t) && r(t, e)
        },
        children: (0, l.jsx)(I.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: s
        })
      })
    }), (0, l.jsx)("div", {
      className: b.list,
      children: a.map(e => (0, l.jsxs)(w, {
        icon: (0, l.jsx)(V, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: b.rowIcon
        }),
        checked: i.has(e),
        disabled: n.has(e),
        onChange: t => r(e, t),
        children: [(0, l.jsx)(I.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: (0, j.default)(e)
        }), (0, l.jsx)(I.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, p.getBenefitKey)(e)))
    })]
  }) : null
}

function Y(e) {
  let {
    transitionState: t,
    fromSubscriptionListing: s,
    existingChannelBenefits: a,
    existingIntangibleBenefits: n,
    onSubmit: r,
    onClose: o
  } = e, d = s.role_benefits.benefits, [u, c] = i.useState(() => new Set(d)), E = i.useMemo(() => d.filter(p.isChannelBenefit), [d]), T = (0, v.default)(E), S = i.useMemo(() => d.filter(p.isIntangibleBenefit), [d]), N = i.useMemo(() => new Set(T.filter(e => a.some(t => t.ref_id === e.ref_id))), [T, a]), g = i.useMemo(() => new Set(S.filter(e => n.some(t => (0, _.default)(e, t)))), [n, S]), f = (0, C.useUID)();

  function A(e, t) {
    c(s => {
      let a = new Set(s);
      return t ? a.add(e) : a.delete(e), a
    })
  }
  return (0, l.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault();
      let t = d.filter(e => u.has(e)),
        s = t.filter(p.isChannelBenefit).filter(e => !N.has(e)),
        a = t.filter(p.isIntangibleBenefit).filter(e => !g.has(e));
      r(s, a), o()
    },
    children: (0, l.jsxs)(I.ModalRoot, {
      transitionState: t,
      "aria-labelledby": f,
      children: [(0, l.jsxs)(I.ModalHeader, {
        children: [(0, l.jsx)(I.Heading, {
          id: f,
          variant: "heading-md/semibold",
          children: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_MODAL_HEADER.format({
            tierName: s.name
          })
        }), (0, l.jsx)(I.ModalCloseButton, {
          className: b.modalCloseButton,
          onClick: o
        })]
      }), (0, l.jsxs)(I.ModalContent, {
        className: b.modalContent,
        children: [(0, l.jsx)(k, {
          title: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
          selectAllText: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS,
          benefits: T,
          dupeBenefits: N,
          selectedBenefits: u,
          onToggleBenefit: A
        }), (0, l.jsx)(k, {
          title: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
          selectAllText: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_INTANGIBLE_BENEFITS,
          benefits: S,
          dupeBenefits: g,
          selectedBenefits: u,
          onToggleBenefit: A
        })]
      }), (0, l.jsxs)(I.ModalFooter, {
        children: [(0, l.jsx)(I.Button, {
          type: "submit",
          children: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_CONFIRM_BUTTON
        }), (0, l.jsx)(I.Button, {
          look: I.Button.Looks.LINK,
          color: I.Button.Colors.PRIMARY,
          onClick: o,
          children: y.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function K(e) {
  var t;
  let {
    guildId: s,
    role: a,
    channelCount: n,
    onSelect: i
  } = e, r = (0, f.useRoleIcon)({
    guildId: s,
    roleId: a.id,
    size: H
  });
  return (0, l.jsxs)(I.Clickable, {
    className: b.roleRow,
    onClick: i,
    children: [(0, l.jsx)("div", {
      className: b.rowIconWrapper,
      children: null != r ? (0, l.jsx)(G.default, {
        ...r
      }) : (0, l.jsx)(M.default, {
        color: null !== (t = a.colorString) && void 0 !== t ? t : (0, c.int2hex)(P.DEFAULT_ROLE_COLOR),
        className: b.roleRowIconDefault
      })
    }), (0, l.jsxs)("div", {
      className: b.rowText,
      children: [(0, l.jsx)(I.Text, {
        color: "header-primary",
        variant: "text-md/normal",
        className: b.benefitTitle,
        children: a.name
      }), (0, l.jsx)(I.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: y.default.Messages.NUM_CHANNELS.format({
          num: n
        })
      })]
    }), (0, l.jsx)("div", {
      className: b.rowCheckbox,
      children: (0, l.jsx)(O.default, {
        direction: O.default.Directions.RIGHT
      })
    })]
  })
}

function W(e) {
  let {
    guild: t,
    onSelect: s
  } = e, a = (0, E.useStateFromStores)([L.default], () => L.default.getCategories(t.id)), n = i.useMemo(() => a._categories.flatMap(e => a[e.channel.id].filter(e => {
    let {
      channel: t
    } = e;
    return A.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(t.type)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  })), [a]), r = i.useMemo(() => Object.values(t.roles).flatMap(e => {
    var s;
    if (e.id === t.id || (null === (s = e.tags) || void 0 === s ? void 0 : s.subscription_listing_id) != null || u.default.hasAny(e.permissions, P.ElevatedPermissions)) return [];
    let a = (0, U.default)(n, e).length;
    return a > 0 ? {
      role: e,
      channelCount: a
    } : []
  }), [t, n]);
  return r.length > 0 ? (0, l.jsx)("div", {
    className: b.list,
    children: r.map(e => (0, l.jsx)(K, {
      guildId: t.id,
      role: e.role,
      channelCount: e.channelCount,
      onSelect: () => s(e.role)
    }, e.role.id))
  }) : (0, l.jsx)(I.Text, {
    variant: "text-md/normal",
    children: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE_EMPTY
  })
}

function z(e) {
  let {
    onClose: t,
    guildId: s,
    onSelect: a
  } = e, n = (0, E.useStateFromStores)([m.default], () => m.default.getGuild(s));
  return null == n ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(I.ModalHeader, {
      children: [(0, l.jsx)(I.Heading, {
        id: B,
        variant: "heading-md/semibold",
        children: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_1
      }), (0, l.jsx)(I.ModalCloseButton, {
        className: b.modalCloseButton,
        onClick: t
      })]
    }), (0, l.jsx)(I.ModalContent, {
      className: b.modalContent,
      children: (0, l.jsx)(W, {
        guild: n,
        onSelect: a
      })
    })]
  })
}

function X(e) {
  let {
    onClose: t,
    guildId: s,
    role: a,
    onCancel: n,
    onImport: r
  } = e, o = i.useRef(a);
  null != a && (o.current = a);
  let u = null != a ? a : o.current,
    c = (0, d.useLazyValue)(() => {
      let e = L.default.getCategories(s);
      return e._categories.flatMap(t => e[t.channel.id].filter(e => {
        let {
          channel: t
        } = e;
        return A.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t
      }))
    }),
    E = i.useMemo(() => (0, U.default)(c, u), [c, u]),
    [_, T] = i.useState(() => new Set(E.map(e => e.id)));

  function S(e, t) {
    T(s => {
      let a = new Set(s);
      return t ? a.add(e) : a.delete(e), a
    })
  }
  return (0, l.jsxs)("form", {
    onSubmit: function(e) {
      e.preventDefault(), r(E.map(e => e.id).filter(e => _.has(e))), t()
    },
    className: b.slideForm,
    children: [(0, l.jsxs)(I.ModalHeader, {
      children: [(0, l.jsx)(I.Heading, {
        id: F,
        variant: "heading-md/semibold",
        children: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_2.format({
          roleName: u.name
        })
      }), (0, l.jsx)(I.ModalCloseButton, {
        className: b.modalCloseButton,
        onClick: t
      })]
    }), (0, l.jsxs)(I.ModalContent, {
      className: b.modalContent,
      children: [E.length > 1 && (0, l.jsx)("div", {
        className: b.list,
        children: (0, l.jsx)(w, {
          icon: (0, l.jsx)(D.default, {}),
          checked: _.size === E.length,
          onChange: function(e) {
            for (let t of E) S(t.id, e)
          },
          children: (0, l.jsx)(I.Text, {
            color: "header-primary",
            variant: "text-md/normal",
            children: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS
          })
        })
      }), (0, l.jsx)("div", {
        className: b.list,
        children: E.map(e => {
          var t;
          let s = null !== (t = (0, N.getSimpleChannelIconComponent)(e.type)) && void 0 !== t ? t : h.default;
          return (0, l.jsx)(w, {
            icon: (0, l.jsx)("div", {
              className: b.rowIcon,
              children: (0, l.jsx)(s, {
                width: "100%",
                height: "100%"
              })
            }),
            checked: _.has(e.id),
            onChange: t => S(e.id, t),
            children: (0, l.jsx)(I.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              className: b.benefitTitle,
              children: e.name
            })
          }, e.id)
        })
      })]
    }), (0, l.jsxs)(I.ModalFooter, {
      children: [(0, l.jsx)(I.Button, {
        type: "submit",
        children: y.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_CONFIRM_BUTTON
      }), (0, l.jsx)(I.Button, {
        look: I.Button.Looks.LINK,
        color: I.Button.Colors.PRIMARY,
        onClick: n,
        children: y.default.Messages.CANCEL
      })]
    })]
  })
}

function Z(e) {
  let {
    transitionState: t,
    guildId: s,
    onClose: a,
    onImport: n
  } = e, [r, o] = i.useState();
  return (0, l.jsx)(I.ModalRoot, {
    transitionState: t,
    "aria-labelledby": null == r ? B : F,
    children: (0, l.jsxs)(I.Slides, {
      contentDisplay: "flex",
      activeSlide: null == r ? 0 : 1,
      width: 440,
      children: [(0, l.jsx)(I.Slide, {
        id: 0,
        children: (0, l.jsx)(z, {
          onClose: a,
          guildId: s,
          onSelect: o
        })
      }), (0, l.jsx)(I.Slide, {
        id: 1,
        children: (0, l.jsx)(X, {
          onClose: a,
          guildId: s,
          role: r,
          onCancel: () => o(void 0),
          onImport: n
        })
      })]
    })
  })
}(n = a || (a = {}))[n.SELECT_ROLE = 0] = "SELECT_ROLE", n[n.SELECT_CHANNELS = 1] = "SELECT_CHANNELS"