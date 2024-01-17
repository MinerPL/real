"use strict";
n.r(t), n.d(t, {
  Header: function() {
    return b
  },
  EmptyStateCenter: function() {
    return y
  },
  ItemsPopout: function() {
    return D
  },
  default: function() {
    return U
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n.n(r),
  u = n("974667"),
  d = n("446674"),
  c = n("77078"),
  f = n("404118"),
  h = n("819689"),
  E = n("510889"),
  m = n("699473"),
  p = n("393414"),
  g = n("161778"),
  S = n("42203"),
  N = n("377253"),
  _ = n("957255"),
  I = n("600133"),
  T = n("471671"),
  C = n("822332"),
  A = n("945330"),
  x = n("599110"),
  v = n("659500"),
  M = n("49111"),
  R = n("782340"),
  L = n("466908");

function O(e) {
  e.stopPropagation()
}
let b = e => {
    let {
      title: t,
      children: n,
      className: l
    } = e;
    return (0, a.jsxs)("div", {
      className: i(l, L.header),
      children: [null == t ? null : (0, a.jsx)(c.Heading, {
        variant: "heading-md/medium",
        children: t
      }), n]
    })
  },
  y = e => {
    let {
      msg: t,
      image: n
    } = e;
    return (0, a.jsxs)("div", {
      className: L.emptyPlaceholder,
      children: [(0, a.jsx)("div", {
        className: L.image,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      }), (0, a.jsx)("div", {
        className: L.body,
        children: t
      })]
    })
  };
class j extends l.PureComponent {
  renderJumpButton() {
    let {
      jumping: e
    } = this.props;
    return (0, a.jsxs)(c.Clickable, {
      className: L.jumpButton,
      onClick: this.handleClickJump,
      children: [(0, a.jsx)("div", {
        className: i(L.text, {
          hidden: e
        }),
        children: R.default.Messages.JUMP
      }), (0, a.jsx)(c.Spinner, {
        type: c.Spinner.Type.PULSING_ELLIPSIS,
        className: i(L.loading, {
          [L.visible]: e
        })
      })]
    })
  }
  renderCloseButton() {
    let {
      onCloseMessage: e,
      canCloseAllMessages: t,
      canManageMessages: n,
      channel: l
    } = this.props;
    if (null == e) return null;
    let s = t || n || null != l && l.isPrivate();
    return s ? (0, a.jsx)(c.Button, {
      look: c.Button.Looks.BLANK,
      size: c.Button.Sizes.NONE,
      onClick: this.handleClickClose,
      children: (0, a.jsx)(A.default, {
        className: L.closeIcon
      })
    }) : null
  }
  render() {
    return (0, a.jsxs)("div", {
      className: L.actionButtons,
      children: [this.renderJumpButton(), this.renderCloseButton()]
    })
  }
  constructor(...e) {
    super(...e), this.handleClickJump = e => {
      let {
        jumpTo: t,
        message: n
      } = this.props;
      t(n, e)
    }, this.handleClickClose = e => {
      let {
        onCloseMessage: t,
        message: n
      } = this.props;
      null != t && t(n, e)
    }
  }
}
let F = d.default.connectStores([_.default], e => {
  let {
    channel: t
  } = e;
  return {
    canManageMessages: null != t && _.default.can(M.Permissions.MANAGE_MESSAGES, t)
  }
})(j);

function D(e) {
  let {
    analyticsName: t,
    items: n,
    hasMore: s,
    loading: r,
    loadMore: f,
    renderHeader: h,
    renderEmptyState: m,
    renderItem: p,
    getProTip: S,
    scrollerClassName: N,
    className: _,
    listName: A
  } = e, b = l.useRef(null), y = (0, E.default)(A, b), j = (0, d.useStateFromStores)([I.default], () => I.default.hasNotice()), F = (0, d.useStateFromStores)([T.default], () => T.default.windowSize());
  l.useEffect(() => {
    x.default.track(M.AnalyticEvents.OPEN_POPOUT, {
      type: t
    })
  }, [t]), l.useEffect(() => {
    function e() {
      var e;
      null === (e = b.current) || void 0 === e || e.scrollPageUp({
        animate: !0
      })
    }

    function t() {
      var e;
      null === (e = b.current) || void 0 === e || e.scrollPageDown({
        animate: !0
      })
    }
    return v.ComponentDispatch.subscribe(M.ComponentActions.SCROLL_PAGE_DOWN, t), v.ComponentDispatch.subscribe(M.ComponentActions.SCROLL_PAGE_UP, e), () => {
      v.ComponentDispatch.unsubscribe(M.ComponentActions.SCROLL_PAGE_DOWN, t), v.ComponentDispatch.unsubscribe(M.ComponentActions.SCROLL_PAGE_UP, e)
    }
  }, []);
  let D = l.useCallback(() => {
      var e;
      let t = null === (e = b.current) || void 0 === e ? void 0 : e.getScrollerState();
      null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && s && !r && (null == f || f())
    }, [s, f, r]),
    U = [],
    k = !0;
  null == n ? U = [(0, a.jsx)("div", {
    className: i(L.emptyPlaceholder, L.loadingPlaceholder),
    children: (0, a.jsx)(c.Spinner, {})
  }, "spinner")] : 0 === n.length ? U.push((0, a.jsx)(l.Fragment, {
    children: m(g.default.theme)
  }, "empty-state")) : (k = !1, U = [], o.each(n, e => {
    U.push(...p(e))
  }));
  let P = null;
  null != n && n.length > 0 && null != f && (P = r ? (0, a.jsx)("div", {
    className: L.loadingMore,
    children: (0, a.jsx)(c.Spinner, {})
  }, "loading-more-after") : s ? (0, a.jsx)("div", {
    className: L.hasMore,
    children: (0, a.jsx)(c.Button, {
      look: c.Button.Looks.FILLED,
      color: c.Button.Colors.PRIMARY,
      size: c.Button.Sizes.MAX,
      onClick: f,
      children: R.default.Messages.LOAD_MORE_MESSAGES
    })
  }) : (0, a.jsx)("div", {
    className: L.scrollingFooterWrap,
    children: m(g.default.theme)
  }));
  let w = null == S ? void 0 : S(),
    G = k && null != w ? (0, a.jsx)("div", {
      className: L.footer,
      children: (0, a.jsx)(C.default, {
        style: {
          width: "100%",
          paddingTop: 10
        },
        children: w
      })
    }) : null,
    B = {
      maxHeight: F.height - 43 - 25
    };
  j && (B.maxHeight -= 40);
  let H = null != f && s;
  return (0, a.jsx)("div", {
    className: i(_, L.messagesPopoutWrap),
    style: B,
    onClick: O,
    onDoubleClick: O,
    "aria-label": e["aria-label"],
    children: (0, a.jsxs)(c.HeadingLevel, {
      component: h(),
      children: [(0, a.jsxs)(c.AdvancedScroller, {
        className: i(L.messagesPopout, N),
        onScroll: H ? D : void 0,
        ref: b,
        children: [(0, a.jsx)(u.ListNavigatorProvider, {
          navigator: y,
          children: (0, a.jsx)(u.ListNavigatorContainer, {
            children: e => {
              let {
                ref: t,
                ...n
              } = e;
              return (0, a.jsx)("div", {
                ref: t,
                ...n,
                children: U
              })
            }
          })
        }), P]
      }), G]
    })
  })
}

function U(e) {
  let {
    analyticsName: t,
    onFetch: n,
    channel: s,
    messages: i,
    hasMore: r,
    loading: o,
    loadMore: u,
    onJump: c,
    canCloseAllMessages: E = !1,
    renderHeader: g,
    renderEmptyState: _,
    renderMessage: I,
    getProTip: T,
    scrollerClassName: C,
    className: A,
    onCloseMessage: x,
    listName: v
  } = e, O = (0, d.useStateFromStores)([N.default], () => {
    let e = null != s ? N.default.getMessages(s.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function b(e, n) {
    let {
      id: a,
      blocked: l,
      author: s,
      channel_id: i
    } = e;
    if (l) f.default.show({
      title: R.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: R.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: s.username
      }),
      confirmText: R.default.Messages.OKAY
    });
    else if (!O) {
      let e = S.default.getChannel(i);
      null != e && (h.default.trackJump(i, a, t), (0, p.transitionTo)(M.Routes.CHANNEL(e.getGuildId(), i, a))), null == c || c(n)
    }
  }
  l.useEffect(() => {
    n(s)
  }, [s, n]);
  let y = l.useMemo(() => null == i ? void 0 : i.map(e => ({
    message: e,
    channel: s
  })), [i, s]);
  return (0, a.jsx)(D, {
    className: A,
    scrollerClassName: C,
    items: y,
    loading: o,
    analyticsName: t,
    renderEmptyState: _,
    renderHeader: g,
    hasMore: r,
    loadMore: u,
    getProTip: T,
    renderItem: function(e) {
      let {
        message: t,
        channel: n
      } = e;
      if (null == t) return [];
      if (null != I) return I(t, e => b(t, e));
      let l = [];
      return null == n ? [] : (l.push((0, a.jsxs)("div", {
        className: L.messageGroupWrapper,
        children: [(0, a.jsx)(m.default, {
          className: L.messageGroupCozy,
          message: t,
          channel: n
        }), (0, a.jsx)(F, {
          channel: s,
          message: t,
          jumping: O,
          canCloseAllMessages: E,
          jumpTo: b,
          onCloseMessage: x
        })]
      }, t.id)), l)
    },
    listName: v,
    "aria-label": e["aria-label"]
  })
}