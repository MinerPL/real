"use strict";
n.r(t), n.d(t, {
  IncreasedActivityForumTagPill: function() {
    return E
  },
  IncreasedActivityForumTagOverflow: function() {
    return x
  },
  default: function() {
    return M
  },
  ForumTagOverflow: function() {
    return A
  }
}), n("222007");
var l, i, a = n("37983"),
  s = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("974667"),
  d = n("446674"),
  c = n("77078"),
  f = n("430568"),
  m = n("206230"),
  g = n("385976"),
  _ = n("945330"),
  h = n("782340"),
  p = n("951779");

function E(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: l,
    className: i,
    onClick: r,
    onRemove: E,
    selected: x,
    ariaLabel: M
  } = e, {
    name: A,
    emojiId: S,
    emojiName: T
  } = t, v = null != E, [C, O] = s.useState(!1), I = (0, d.useStateFromStores)([g.default], () => null != S ? g.default.getUsableCustomEmojiById(S) : null), R = v || null != r, b = (!v || !C) && (null != S || null != T), L = 0 === n, y = s.useRef(null), U = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), N = (0, a.jsxs)(a.Fragment, {
    children: [b ? (0, a.jsx)(f.default, {
      className: u(p.emoji, {
        [p.small]: L
      }),
      emojiId: S,
      emojiName: T,
      animated: !!(null == I ? void 0 : I.animated),
      size: "reaction",
      alt: ""
    }) : null, C && v && (0, a.jsx)("div", {
      className: p.closeCircle,
      children: (0, a.jsx)(_.default, {
        className: p.close
      })
    }), (0, a.jsx)(c.Text, {
      className: p.increasedActivityText,
      variant: "text-xs/medium",
      lineClamp: 1,
      children: A
    })]
  }), F = {
    key: t.id,
    className: u(p.pill, p.increasedActivityPill, {
      [p.disabled]: l,
      [p.clickable]: R,
      [p.increasedActivitySmall]: L,
      [p.selected]: x
    }, i),
    onClick: e => {
      null == r || r(e), null == E || E(t), !U && null != y.current && y.current.blur()
    },
    onMouseEnter: () => v && O(!0),
    onMouseLeave: () => v && O(!1)
  }, P = (0, o.useListItem)("forum-tag-".concat(t.id));
  return R ? (0, a.jsx)(c.Clickable, {
    ...P,
    innerRef: y,
    focusProps: {
      ringTarget: y
    },
    "aria-label": null != M ? M : h.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: A
    }),
    role: "button",
    "aria-pressed": x,
    ...F,
    children: N
  }) : (0, a.jsx)("div", {
    "aria-label": null != M ? M : h.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
      tagName: A
    }),
    ...F,
    children: N
  })
}

function x(e) {
  let {
    tags: t,
    count: n,
    size: l = 1
  } = e, i = 0 === l;
  return (0, a.jsx)(c.Tooltip, {
    "aria-label": h.default.Messages.FORUM_TAGS,
    text: (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(M, {
        tag: e,
        className: p.tooltipPill,
        size: M.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: u(p.pill, p.increasedActivityPill, {
        [p.increasedActivitySmall]: i
      }),
      children: (0, a.jsxs)(c.Text, {
        className: p.increasedActivityText,
        variant: i ? "text-xs/medium" : "text-sm/medium",
        children: ["+", n]
      })
    })
  })
}

function M(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: l,
    className: i,
    onClick: r,
    onRemove: E,
    selected: x,
    ariaLabel: M
  } = e, {
    name: A,
    emojiId: S,
    emojiName: T
  } = t, v = null != E, [C, O] = s.useState(!1), I = (0, d.useStateFromStores)([g.default], () => null != S ? g.default.getUsableCustomEmojiById(S) : null), R = v || null != r, b = (!v || !C) && (null != S || null != T), L = 0 === n, y = s.useRef(null), U = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), N = (0, a.jsxs)(a.Fragment, {
    children: [b ? (0, a.jsx)(f.default, {
      className: u(p.emoji, {
        [p.small]: L
      }),
      emojiId: S,
      emojiName: T,
      animated: !!(null == I ? void 0 : I.animated),
      size: "reaction"
    }) : null, C && v && (0, a.jsx)("div", {
      className: p.closeCircle,
      children: (0, a.jsx)(_.default, {
        className: p.close
      })
    }), (0, a.jsx)(c.Text, {
      variant: L ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      children: A
    })]
  }), F = {
    key: t.id,
    className: u(p.pill, {
      [p.disabled]: l,
      [p.clickable]: R,
      [p.small]: L,
      [p.selected]: x
    }, i),
    onClick: e => {
      null == r || r(e), null == E || E(t), !U && null != y.current && y.current.blur()
    },
    onMouseEnter: () => v && O(!0),
    onMouseLeave: () => v && O(!1)
  }, P = (0, o.useListItem)("forum-tag-".concat(t.id));
  return R ? (0, a.jsx)(c.Clickable, {
    ...P,
    innerRef: y,
    focusProps: {
      ringTarget: y
    },
    "aria-label": null != M ? M : h.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: A
    }),
    role: "button",
    "aria-pressed": x,
    ...F,
    children: N
  }) : (0, a.jsx)("div", {
    ...F,
    children: N
  })
}

function A(e) {
  let {
    tags: t,
    count: n,
    size: l = 1
  } = e, i = 0 === l;
  return (0, a.jsx)(c.Tooltip, {
    "aria-label": h.default.Messages.FORUM_TAGS,
    text: (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(M, {
        tag: e,
        className: p.tooltipPill,
        size: M.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: u(p.pill, {
        [p.small]: i
      }),
      children: (0, a.jsxs)(c.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    })
  })
}(i = l || (l = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", M.Sizes = l