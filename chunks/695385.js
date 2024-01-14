"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
}), a("222007");
var s = a("37983"),
  r = a("884691"),
  l = a("335710"),
  n = a("77078"),
  d = a("134947"),
  u = a("722602"),
  i = a("913979"),
  o = a("782340"),
  c = a("321797");
let f = new Set;

function h(e) {
  let {
    channel: t,
    startThread: a,
    goToThread: h
  } = e, {
    joinedThreadIds: g,
    unjoinedThreadIds: S
  } = (0, d.useActiveThreads)(t), {
    threadIds: T,
    canLoadMore: E,
    loading: x,
    loadMore: v
  } = (0, d.useArchivedThreads)(t, l.ThreadSortOrder.LATEST_ACTIVITY, f), _ = r.useRef(null);
  (0, d.useTrackThreadBrowserTab)();
  let N = r.useCallback(e => {
      let t = 0 === e.section ? g : 1 === e.section ? S : T;
      return (0, s.jsx)(i.default, {
        threadId: t[e.row],
        goToThread: h
      }, "".concat(e.section, "-").concat(e.row))
    }, [T, g, S, h]),
    R = r.useCallback(e => 0 === e.section ? (0, s.jsx)(m, {
      text: o.default.Messages.THREAD_BROWSER_JOINED_HEADER.format({
        count: g.length
      })
    }, e.section) : 1 === e.section ? (0, s.jsx)(m, {
      text: o.default.Messages.THREAD_BROWSER_OTHER_HEADER.format({
        count: S.length
      })
    }, e.section) : (0, s.jsx)(m, {
      text: o.default.Messages.THREAD_BROWSER_ARCHIVED_HEADER
    }, e.section), [g.length, S.length]),
    A = r.useCallback(e => 1 === e && g.length > 0 ? 64 : 2 === e && (g.length > 0 || S.length > 0) ? 64 : 32, [g.length, S.length]),
    j = r.useCallback(() => {
      var e;
      let t = null === (e = _.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null == t) return;
      let a = t.scrollTop + t.offsetHeight,
        s = t.scrollHeight - a;
      s < 200 && v()
    }, [v]);
  if (0 === g.length && 0 === S.length && 0 === T.length) return x ? (0, s.jsx)("div", {
    className: c.list,
    children: (0, s.jsx)(n.Spinner, {
      className: c.spinner
    })
  }) : (0, s.jsx)("div", {
    className: c.list,
    children: (0, s.jsx)(u.default, {
      channel: t,
      header: o.default.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
      startThread: a
    })
  });
  return (0, s.jsx)(n.List, {
    ref: _,
    className: c.list,
    fade: !0,
    sections: [g.length, S.length, T.length],
    sectionHeight: A,
    rowHeight: 80,
    renderRow: N,
    renderSection: R,
    chunkSize: 20,
    onScroll: E ? j : void 0
  })
}

function m(e) {
  let {
    text: t
  } = e;
  return (0, s.jsx)(n.Text, {
    color: "header-secondary",
    variant: "text-xs/bold",
    className: c.sectionHeader,
    children: t
  })
}