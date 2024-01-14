"use strict";
s.r(t), s.d(t, {
  EditableBenefitsList: function() {
    return m
  },
  AddBenefitCard: function() {
    return C
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("476042"),
  o = s("77078"),
  d = s("476765"),
  u = s("673220"),
  c = s("987772"),
  E = s("351825"),
  _ = s("577357"),
  T = s("757715"),
  I = s("484456"),
  S = s("559979"),
  N = s("752520"),
  g = s("498030"),
  f = s("782340"),
  A = s("405625");

function L(e) {
  let {
    guildId: t,
    emojiId: s,
    emojiName: l,
    title: r,
    description: d,
    targetType: E,
    index: _,
    dndName: T,
    onEdit: S,
    onMove: N,
    disabled: L = !1
  } = e, m = n.useRef(null), C = n.useRef(null), {
    drag: O,
    dragPreview: h,
    drop: R,
    isDragging: D
  } = (0, g.default)(m, E, _, N);
  return O(C), h(R(m)), (0, a.jsxs)("div", {
    ref: m,
    className: i(A.card, {
      [A.cardDragging]: D,
      [A.disabled]: L
    }),
    children: [(0, a.jsxs)("div", {
      className: A.emojiWrapper,
      children: [(0, a.jsx)(I.default, {
        guildId: t,
        emojiId: s,
        emojiName: l,
        className: A.emoji
      }), !L && (0, a.jsx)("div", {
        ref: C,
        className: A.dragIconWrapper,
        "data-dnd-name": T,
        children: (0, a.jsx)(u.default, {
          className: A.dragIcon
        })
      })]
    }), (0, a.jsxs)("div", {
      className: A.cardText,
      children: [(0, a.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: r
      }), (0, a.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: d
      })]
    }), (0, a.jsx)("div", {
      className: A.cardActions,
      children: !L && (0, a.jsx)(o.Clickable, {
        className: A.cardActionButton,
        onClick: L ? void 0 : S,
        "aria-label": f.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EDIT_ARIA_LABEL,
        "aria-disabled": L,
        children: (0, a.jsx)(c.default, {
          className: A.cardActionButtonIcon
        })
      })
    })]
  })
}

function m(e) {
  let {
    benefits: t,
    onEdit: s,
    onMove: l,
    guildId: o
  } = e, u = (0, d.useUID)(), {
    isDragging: c
  } = (0, r.useDragLayer)(e => ({
    isDragging: e.getItemType() === u
  })), E = (0, T.useRoleSubscriptionSettingsDisabled)();
  return 0 === t.length ? null : (0, a.jsx)("div", {
    className: i(A.container, {
      [A.isDragging]: c
    }),
    children: t.map((e, t) => (0, a.jsxs)(n.Fragment, {
      children: [t > 0 ? (0, a.jsx)("div", {
        className: A.divider
      }) : null, (0, a.jsx)(L, {
        guildId: o,
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        title: (0, S.default)(e),
        description: e.description,
        targetType: u,
        index: t,
        dndName: (0, N.default)(e),
        onEdit: () => s(t),
        onMove: l,
        disabled: E
      })]
    }, (0, _.getBenefitKey)(e)))
  })
}

function C(e) {
  let {
    onClick: t,
    children: s,
    disabled: n = !1
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: A.container,
    onClick: n ? void 0 : t,
    "aria-disabled": n,
    children: (0, a.jsxs)("div", {
      className: i(A.card, A.addBenefit, {
        [A.disabled]: n
      }),
      children: [(0, a.jsx)("div", {
        className: A.emojiWrapper,
        children: (0, a.jsx)(E.default, {
          className: A.addBenefitIcon
        })
      }), (0, a.jsx)("div", {
        className: A.cardText,
        children: (0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: s
        })
      })]
    })
  })
}