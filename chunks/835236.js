"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var a = l("37983");
l("884691");
var n = l("414456"),
  s = l.n(n),
  r = l("77078"),
  o = l("355313"),
  i = l("837899"),
  u = l("425190"),
  d = l("782340"),
  c = l("960320");

function f(e) {
  let {
    selectedTags: t,
    title: l,
    hintText: n,
    placeholderText: f,
    expanded: S,
    setExpanded: h,
    users: A,
    guilds: g,
    query: E,
    maxCount: T,
    onQueryChange: R,
    onClickRow: _,
    onRemoveTag: p
  } = e;
  return (0, a.jsx)(r.Collapsible, {
    className: c.collapsible,
    isExpanded: S,
    collapsibleContent: (0, a.jsx)("div", {
      className: s(c.collapsibleContent, {
        [c.visible]: S
      }),
      children: (0, a.jsx)(o.default, {
        listClassName: c.list,
        pendingAdditions: t,
        query: E,
        onQueryChange: R,
        onClickRow: _,
        onRemovePendingAddition: p,
        users: A,
        guilds: g,
        renderEmptyText: e => d.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
          query: e
        }),
        hintText: n,
        placeholderText: f,
        disabledText: d.default.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
        maxCount: T,
        hideRowLabel: !0
      })
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, a.jsxs)(r.Clickable, {
        className: c.content,
        onClick: e => {
          h(!S), t(e)
        },
        children: [(0, a.jsx)(r.Heading, {
          variant: "text-sm/normal",
          children: l
        }), S ? (0, a.jsx)(u.default, {}) : (0, a.jsx)(i.default, {})]
      })
    }
  })
}