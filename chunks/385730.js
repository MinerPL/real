"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  },
  UnreadsCrashed: function() {
    return L
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("597755"),
  o = n.n(r),
  u = n("974667"),
  d = n("446674"),
  c = n("151426"),
  f = n("77078"),
  h = n("913144"),
  E = n("206230"),
  m = n("510889"),
  p = n("826267"),
  g = n("599110"),
  S = n("659500"),
  N = n("150938"),
  _ = n("805614"),
  I = n("64318"),
  T = n("474282"),
  C = n("970268"),
  A = n("49111"),
  x = n("782340"),
  v = n("930391");

function M(e) {
  let {
    setTab: t,
    onJump: n,
    showTutorial: s,
    setSeenTutorial: r,
    closePopout: M,
    badgeState: L
  } = e, O = l.useRef(null), [b, y] = (0, C.default)(O), {
    loadState: j,
    channels: F
  } = b, {
    maybeLoadMore: D,
    markAllRead: U
  } = y;
  (function(e, t, n) {
    l.useLayoutEffect(() => {
      var a;
      let {
        scrollToChannelIndex: l
      } = t;
      n.clearScrollToChannelIndex();
      let {
        current: s
      } = e;
      if (null == s || null == l) return;
      let i = null === (a = s.getScrollerNode()) || void 0 === a ? void 0 : a.children;
      if (null == i) return;
      let r = i[l];
      if (null == r) return;
      let {
        scrollTop: o,
        scrollHeight: u
      } = s.getScrollerState();
      (r.offsetTop < o || r.offsetTop > o + u) && s.scrollTo({
        to: r.offsetTop
      })
    })
  })(O, b, y),
  function(e, t) {
    l.useEffect(() => {
      let n = () => {
        let n = e.channels.find(e => !e.collapsed);
        null != n && t.markChannelRead(n)
      };
      return S.ComponentDispatch.subscribe(A.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n), () => {
        S.ComponentDispatch.unsubscribe(A.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n)
      }
    }, [t, e.channels])
  }(b, y), l.useEffect(() => {
    g.default.track(A.AnalyticEvents.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), l.useEffect(() => (h.default.subscribe("CONNECTION_OPEN", M), () => {
    h.default.unsubscribe("CONNECTION_OPEN", M)
  }), [M]);
  let k = (0, d.useStateFromStores)([E.default], () => E.default.messageGroupSpacing),
    P = (0, m.default)("unreads", O);
  if (0 === F.length) {
    var w;
    return (0, a.jsxs)("div", {
      className: v.container,
      children: [(0, a.jsx)(I.default, {
        tab: c.InboxTab.UNREADS,
        setTab: t,
        badgeState: L,
        closePopout: M
      }), (0, a.jsx)(_.default, {
        Icon: p.default,
        header: x.default.Messages.UNREADS_EMPTY_STATE_HEADER,
        tip: (null === (w = o.os) || void 0 === w ? void 0 : w.family) === "OS X" ? x.default.Messages.UNREADS_EMPTY_STATE_TIP_MAC : x.default.Messages.UNREADS_EMPTY_STATE_TIP
      })]
    })
  }
  return (0, a.jsxs)("div", {
    className: i(v.container, "group-spacing-".concat(k)),
    "aria-label": x.default.Messages.UNREADS_TAB_LABEL,
    children: [(0, a.jsx)(I.default, {
      tab: c.InboxTab.UNREADS,
      setTab: t,
      badgeState: L,
      closePopout: M,
      children: (0, a.jsx)(N.default, {
        type: "top-header",
        onClick: U
      })
    }), (0, a.jsx)(u.ListNavigatorProvider, {
      navigator: P,
      children: (0, a.jsx)(u.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...l
          } = e;
          return (0, a.jsxs)(f.AdvancedScrollerThin, {
            ref: e => {
              var n;
              O.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            ...l,
            onScroll: j === C.LoadState.Done ? void 0 : D,
            className: v.scroller,
            children: [s ? (0, a.jsx)(R, {
              setSeenTutorial: r
            }) : null, (0, T.default)(F, y, n), j === C.LoadState.Done ? null : (0, a.jsx)(f.Spinner, {
              className: v.spinner
            })]
          })
        }
      })
    })]
  })
}

function R(e) {
  let {
    setSeenTutorial: t
  } = e;
  return (0, a.jsxs)("div", {
    className: v.tutorial,
    children: [(0, a.jsx)("div", {
      className: v.tutorialIcon,
      children: (0, a.jsx)(p.default, {
        width: 24,
        height: 24
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(f.Heading, {
        className: v.tutorialHeader,
        variant: "heading-md/semibold",
        children: x.default.Messages.UNREADS_TUTORIAL_HEADER
      }), (0, a.jsx)(f.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: x.default.Messages.UNREADS_TUTORIAL_BODY
      }), (0, a.jsx)(f.Button, {
        className: v.tutorialButton,
        onClick: t,
        size: f.Button.Sizes.SMALL,
        children: x.default.Messages.TUTORIAL_CLOSE
      })]
    })]
  })
}

function L(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: l
  } = e;
  return (0, a.jsxs)("div", {
    className: v.container,
    children: [(0, a.jsx)(I.default, {
      tab: c.InboxTab.UNREADS,
      setTab: t,
      badgeState: n,
      closePopout: l
    }), (0, a.jsx)(_.default, {
      Icon: p.default,
      disableStars: !0,
      header: x.default.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
      tip: x.default.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
    })]
  })
}