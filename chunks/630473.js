"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var l = s("37983"),
  a = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("669491"),
  d = s("77078"),
  u = s("18054"),
  c = s("69678"),
  h = s("372283"),
  E = s("957255"),
  f = s("151185"),
  m = s("90625"),
  g = s("953371"),
  T = s("49111"),
  S = s("782340"),
  N = s("730324");

function C(e) {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([E.default], () => E.default.can(T.Permissions.MANAGE_CHANNELS, t), [t]), c = t.availableTags.length >= g.MAX_FORUM_TAGS, m = t.availableTags.length > 0, C = a.useCallback(() => {
    let e = t.availableTags.length >= g.MAX_FORUM_TAGS;
    n && !e && (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("987034").then(s.bind(s, "987034"));
      return s => (0, l.jsx)(e, {
        ...s,
        channelId: t.id,
        guildId: t.guild_id
      })
    })
  }, [t, n]), p = a.useCallback(e => {
    n && (0, d.openModalLazy)(async () => {
      let {
        default: a
      } = await s.el("987034").then(s.bind(s, "987034"));
      return s => (0, l.jsx)(a, {
        ...s,
        channelId: t.id,
        guildId: t.guild_id,
        tag: e
      })
    })
  }, [n, t]), {
    handleDragStart: M,
    handleDragReset: x,
    handleDragComplete: R
  } = (0, h.default)(t.availableTags, e => {
    (0, u.updateChannel)({
      availableTags: e
    })
  });
  return (0, l.jsxs)("div", {
    className: N.tags,
    children: [m ? t.availableTags.map(e => (0, l.jsx)(_, {
      tag: e,
      availableTags: t.availableTags,
      canManageChannels: n,
      onTagClick: p,
      onDragComplete: R,
      onDragReset: x,
      onDragStart: M
    }, e.id)) : null, m ? (0, l.jsx)(d.Clickable, {
      onClick: C,
      className: i(N.addTags, {
        [N.disabled]: !n || c
      }),
      children: (0, l.jsx)(f.default, {
        "aria-label": S.default.Messages.FORUM_TAG_CREATE,
        color: o.default.unsafe_rawColors.WHITE_500.css,
        width: 20,
        height: 20
      })
    }) : (0, l.jsx)(d.Button, {
      disabled: !n,
      onClick: C,
      children: S.default.Messages.FORUM_TAG_CREATE
    })]
  })
}

function _(e) {
  let {
    tag: t,
    availableTags: s,
    canManageChannels: a,
    onTagClick: n,
    onDragComplete: r,
    onDragStart: o,
    onDragReset: d
  } = e, u = s.findIndex(e => e.id === t.id), {
    drag: h,
    dragSourcePosition: E,
    drop: f,
    setIsDraggable: g
  } = (0, c.default)({
    type: "CHANNEL_SETTINGS_FORUM_TAGS",
    index: u,
    optionId: t.id,
    onDragStart: o,
    onDragComplete: r,
    onDragReset: d
  });
  return (0, l.jsx)("div", {
    className: i(N.container, {
      [N.dropIndicatorBefore]: null != E && u < E,
      [N.dropIndicatorAfter]: null != E && u > E
    }),
    ref: e => h(f(e)),
    onMouseEnter: () => g(a),
    onMouseLeave: () => g(!1),
    children: (0, l.jsx)(m.default, {
      tag: t,
      disabled: !a,
      ariaLabel: S.default.Messages.FORUM_TAG_EDIT_LABEL.format({
        name: t.name
      }),
      onClick: a ? () => n(t) : void 0
    })
  })
}