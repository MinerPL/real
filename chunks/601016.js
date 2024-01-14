"use strict";
s.r(t), s.d(t, {
  PIN_ICON_SIZE: function() {
    return C
  },
  useTagsRowHooks: function() {
    return T
  },
  IncreasedActivityTagsRow: function() {
    return N
  },
  default: function() {
    return E
  }
});
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("669491"),
  o = s("77078"),
  u = s("120027"),
  d = s("566998"),
  c = s("956089"),
  h = s("339792"),
  f = s("680986"),
  m = s("90625"),
  g = s("724210"),
  p = s("782340"),
  S = s("260177"),
  v = s("552175"),
  x = s("772870");
let C = 16;

function T(e) {
  let {
    channel: t,
    isNew: s
  } = e, n = (0, f.useAppliedTags)(t), a = n.slice(void 0, 3), l = n.slice(3), i = n.length > 3 ? n.length - 3 : 0, r = t.hasFlag(g.ChannelFlags.PINNED), o = a.length > 0 || r || s, u = n.length > 0;
  return {
    shownTags: a,
    remainingTags: l,
    moreTagsCount: i,
    isPinned: r,
    shouldRenderTagsRow: o,
    forumPostContainsTags: u
  }
}

function N(e) {
  let {
    channel: t,
    isNew: s,
    tagsClassName: l,
    className: r
  } = e, {
    shownTags: c,
    remainingTags: f,
    moreTagsCount: g,
    isPinned: S,
    shouldRenderTagsRow: N
  } = T({
    channel: t,
    isNew: s
  }), {
    tagFilter: E
  } = (0, h.useForumChannelStore)(t.id);
  return N ? (0, n.jsxs)("div", {
    className: i(x.increasedActivityTags, r),
    children: [S && (0, n.jsx)("div", {
      className: v.pinIcon,
      children: (0, n.jsx)(o.Tooltip, {
        text: p.default.Messages.PINNED_POST,
        children: e => (0, n.jsx)(d.default, {
          ...e,
          width: C,
          height: C,
          color: "white"
        })
      })
    }), c.map((e, t) => (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(m.IncreasedActivityForumTagPill, {
        tag: e,
        size: m.default.Sizes.SMALL,
        className: i(l, {
          [x.tagFiltered]: E.has(e.id)
        })
      }), (t < c.length - 1 || g > 0) && (0, n.jsx)(u.default, {
        height: 4,
        width: 4,
        "aria-hidden": "true",
        className: x.increasedActivityDotIcon
      }, e.id.concat(t.toString()))]
    }, e.id)), g > 0 ? (0, n.jsx)(m.IncreasedActivityForumTagOverflow, {
      tags: f,
      count: g,
      size: m.default.Sizes.SMALL
    }) : null]
  }) : null
}

function E(e) {
  let {
    channel: t,
    isNew: s,
    tagsClassName: a,
    className: l
  } = e, {
    shownTags: u,
    remainingTags: f,
    moreTagsCount: g,
    isPinned: v,
    shouldRenderTagsRow: N
  } = T({
    channel: t,
    isNew: s
  }), {
    tagFilter: E
  } = (0, h.useForumChannelStore)(t.id);
  return N ? (0, n.jsxs)("div", {
    className: i(x.tags, l),
    children: [s ? (0, n.jsx)(c.TextBadge, {
      className: i(S.newBadge, S.inTagsRow),
      color: r.default.unsafe_rawColors.BRAND_260.css,
      text: p.default.Messages.NEW
    }) : null, v && (0, n.jsx)("div", {
      className: x.pinIcon,
      children: (0, n.jsx)(o.Tooltip, {
        text: p.default.Messages.PINNED_POST,
        children: e => (0, n.jsx)(d.default, {
          ...e,
          width: C,
          height: C,
          color: "white"
        })
      })
    }), u.map(e => (0, n.jsx)(m.default, {
      tag: e,
      size: m.default.Sizes.SMALL,
      className: i(a, {
        [x.tagFiltered]: E.has(e.id)
      })
    }, e.id)), g > 0 ? (0, n.jsx)(m.ForumTagOverflow, {
      tags: f,
      count: g,
      size: m.default.Sizes.SMALL
    }) : null]
  }) : null
}