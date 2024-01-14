"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("446674"),
  i = n("77078"),
  u = n("272030"),
  r = n("430568"),
  s = n("385976"),
  d = n("404607"),
  o = n("680986"),
  f = n("300322"),
  c = n("42203"),
  _ = n("953371"),
  E = n("782340"),
  T = n("208701");

function S(e) {
  let {
    tag: t
  } = e, {
    name: n,
    emojiId: i,
    emojiName: u
  } = t, d = (0, l.useStateFromStores)([s.default], () => null != i ? s.default.getUsableCustomEmojiById(i) : null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.default, {
      className: T.emoji,
      emojiId: i,
      emojiName: u,
      animated: !!(null == d ? void 0 : d.animated)
    }), n]
  })
}

function h(e) {
  let t = (0, l.useStateFromStores)([c.default], () => c.default.getChannel(e), [e]),
    n = (0, f.useCanManageThread)(t),
    r = (0, l.useStateFromStores)([c.default], () => c.default.getChannel(null == t ? void 0 : t.parent_id), [t]),
    s = (0, o.useVisibleForumTags)(r),
    T = (0, o.useAppliedTags)(t),
    h = T.length >= _.MAX_FORUM_POST_TAGS,
    C = (0, f.useIsActiveChannelOrUnarchivableThread)(t);
  if (null == t) return (0, u.closeContextMenu)(), null;
  if (!n || __OVERLAY__ || !t.isForumPost() || (null == s ? void 0 : s.length) === 0 || !C) return null;
  let g = e => {
      let n = new Set(T);
      if (n.has(e)) n.delete(e);
      else {
        if (h) return;
        n.add(e)
      }
      let a = Array.from(n).map(e => e.id);
      d.default.updateForumPostTags(t.id, a)
    },
    N = null == s ? void 0 : s.map(e => {
      let t = T.includes(e);
      return (0, a.jsx)(i.MenuCheckboxItem, {
        id: e.id,
        label: (0, a.jsx)(S, {
          tag: e
        }),
        disabled: h && !t,
        action: () => g(e),
        checked: t
      }, e.id)
    });
  return (0, a.jsx)(i.MenuItem, {
    id: "edit-tags",
    label: E.default.Messages.FORUM_TAG_POST_EDIT,
    children: N
  })
}