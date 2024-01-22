"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
});
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("866227"),
  d = l.n(o),
  r = l("65597"),
  u = l("77078"),
  C = l("781896"),
  c = l("493910"),
  f = l("466818"),
  m = l("178406"),
  E = l("645266"),
  M = l("782340"),
  h = l("236807"),
  T = l("821118");

function x(e) {
  let {
    guild: t,
    onSubmit: s
  } = e, o = (0, r.default)([m.default], () => m.default.getMembersCountByGuildId(t.id, c.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER), [t.id]), x = (0, r.default)([m.default], () => {
    let e = m.default.getNewMemberTimestamp(t.id);
    return d(e).format("h:mm A")
  }, [t.id]), _ = (0, r.default)([m.default], () => m.default.hasDefaultSearchStateByGuildId(t.id), [t.id]), H = n.useCallback(() => {
    (0, E.refreshMemberSafetyTimestamp)(t.id), null == s || s()
  }, [t.id, s]), g = n.useCallback(() => {
    _ ? H() : (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("756912").then(l.bind(l, "756912"));
      return t => (0, a.jsx)(e, {
        ...t,
        onConfirm: H
      })
    })
  }, [H, _]), A = new Intl.NumberFormat(M.default.getLocale()).format(o), p = (0, f.useCanAccessInviteCodeFeature)(t.id), S = (0, f.useCanAccessBulkBanningFeature)(t.id), L = n.useMemo(() => 1 + (p ? 1 : 0) + (S ? 1 : 0), [p, S]);
  return 0 === o ? null : (0, a.jsxs)("tr", {
    className: i(T.newMembersNotice),
    onClick: g,
    children: [(0, a.jsx)("td", {
      colSpan: 3,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: M.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_LABEL.format({
          count: A,
          date: x
        })
      })
    }), (0, a.jsx)("td", {
      colSpan: L
    }), (0, a.jsx)("td", {
      colSpan: 2,
      children: (0, a.jsx)("div", {
        className: i(h.actionCell),
        children: (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.TRANSPARENT,
          look: u.Button.Looks.LINK,
          className: i(T.memberNoticeActionButton),
          children: (0, a.jsxs)(u.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: i(T.memberNoticeAction),
            children: [(0, a.jsx)("div", {
              children: M.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_ACTION
            }), (0, a.jsx)(C.default, {
              width: 20,
              height: 20,
              className: i(T.memberNoticeActionIcon)
            })]
          })
        })
      })
    })]
  })
}