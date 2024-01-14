"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("369470"),
  o = n.n(r),
  u = n("974667"),
  d = n("446674"),
  c = n("233736"),
  f = n("77078"),
  h = n("406189"),
  C = n("206230"),
  p = n("716241"),
  m = n("815553"),
  E = n("274870"),
  g = n("718091"),
  I = n("288518"),
  S = n("415435"),
  _ = n("486503"),
  N = n("161778"),
  T = n("42203"),
  A = n("824563"),
  L = n("287850"),
  v = n("476765"),
  x = n("689476"),
  R = n("826684"),
  M = n("570687"),
  O = n("49111"),
  y = n("782340"),
  D = n("381226");
(a = l || (l = {}))[a.PAGES = 0] = "PAGES", a[a.DMS = 1] = "DMS";
let b = i.memo(function() {
  return (0, s.jsxs)("svg", {
    width: "184",
    height: "428",
    viewBox: "0 0 184 428",
    className: D.empty,
    children: [(0, s.jsx)("rect", {
      x: 40,
      y: 6,
      width: 144,
      height: 20,
      rx: 10
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 16,
      r: 16
    }), (0, s.jsx)("rect", {
      x: 40,
      y: 50,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .9
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 60,
      r: 16,
      opacity: .9
    }), (0, s.jsx)("rect", {
      x: 40,
      y: 94,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .8
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 104,
      r: 16,
      opacity: .8
    }), (0, s.jsx)("rect", {
      x: 40,
      y: 138,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .7
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 148,
      r: 16,
      opacity: .7
    }), (0, s.jsx)("rect", {
      x: 40,
      y: 182,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .6
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 192,
      r: 16,
      opacity: .6
    }), (0, s.jsx)("rect", {
      x: 40,
      y: 226,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .5
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 236,
      r: 16,
      opacity: .5
    }), (0, s.jsx)("rect", {
      x: 40,
      y: 270,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .4
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 280,
      r: 16,
      opacity: .4
    }), (0, s.jsx)("rect", {
      x: 40,
      y: 314,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .3
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 324,
      r: 16,
      opacity: .3
    }), (0, s.jsx)("rect", {
      x: 40,
      y: 358,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .2
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 368,
      r: 16,
      opacity: .2
    }), (0, s.jsx)("rect", {
      x: 40,
      y: 402,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .1
    }), (0, s.jsx)("circle", {
      cx: 16,
      cy: 412,
      r: 16,
      opacity: .1
    })]
  })
});
class j extends i.Component {
  static getDerivedStateFromProps(e) {
    let {
      children: t,
      privateChannelIds: n
    } = e;
    if (null == t) return {
      preRenderedChildren: 0,
      nonNullChildren: [],
      totalRowCount: n.length
    };
    {
      let e = t.filter(e => null != e),
        l = e.length;
      return {
        preRenderedChildren: l,
        nonNullChildren: e,
        totalRowCount: l + n.length
      }
    }
  }
  componentDidMount() {
    let {
      selectedChannelId: e,
      homeLink: t
    } = this.props;
    null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics()
  }
  shouldComponentUpdate(e) {
    return !(0, c.default)(this.props, e, ["children"])
  }
  componentDidUpdate(e) {
    let {
      selectedChannelId: t,
      homeLink: n
    } = this.props;
    null != t && t !== e.selectedChannelId ? this.scrollToChannel(t) : null == t && n !== e.homeLink && this.scrollToChannel(null), this.reportAnalytics()
  }
  scrollToChannel(e) {
    if (null == this._list) return;
    let {
      padding: t
    } = this.props, {
      preRenderedChildren: n
    } = this.state, l = null != e ? this.props.privateChannelIds.indexOf(e) : -1, a = 0;
    l < 0 || null == e ? this._list.scrollTo({
      to: a
    }) : (a += 44 * (l + n) + t, this._list.scrollIntoViewRect({
      start: Math.max(a - 8, 0),
      end: a + 44 + 8
    }))
  }
  render() {
    let {
      privateChannelIds: e,
      padding: t
    } = this.props, {
      preRenderedChildren: n
    } = this.state;
    return (0, s.jsx)(u.ListNavigatorContainer, {
      children: l => {
        let {
          ref: a,
          role: i,
          ...r
        } = l;
        return (0, s.jsx)(f.FocusJumpSection, {
          children: l => (0, s.jsx)(f.List, {
            fade: !0,
            innerRole: i,
            innerAriaLabel: y.default.Messages.DIRECT_MESSAGES,
            innerTag: "ul",
            ref: e => {
              var t;
              this._list = e, this.props.listRef.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
            },
            onScroll: this.handleScroll,
            className: D.scroller,
            sectionHeight: this.getSectionHeight,
            paddingTop: t,
            paddingBottom: 8,
            rowHeight: this.getRowHeight,
            renderSection: this.renderSection,
            renderRow: this.renderRow,
            sections: [n, Math.max(e.length, 1)],
            ...r,
            ...l
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      initialized: !1,
      preRenderedChildren: 0,
      totalRowCount: 0,
      nonNullChildren: []
    }, this._list = null, this.hasReportedAnalytics = !1, this.reportAnalytics = () => {
      var e;
      if (this.hasReportedAnalytics) return;
      let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
      if (null == t) return;
      let {
        privateChannelIds: n,
        channels: l
      } = this.props;
      if (0 === n.length) return;
      let a = i.Children.count(this.props.children);
      if (null == t) return;
      let s = Math.round((t.offsetHeight - 44 * a) / 44),
        r = s > n.length ? n.slice(0, s + 1) : n,
        o = r.map(e => null != l[e] ? l[e].getRecipientId() : null),
        u = {
          num_users_visible: r.length,
          num_users_visible_with_mobile_indicator: o.filter(e => null != e && A.default.isMobileOnline(e)).length
        };
      this.hasReportedAnalytics = !0, p.default.trackWithMetadata(O.AnalyticEvents.DM_LIST_VIEWED, {
        ...u,
        ...(0, m.getNowPlayingAnalytics)()
      })
    }, this.getSectionHeight = e => {
      let {
        showDMHeader: t
      } = this.props;
      return 0 === e ? 0 : t ? 40 : 0
    }, this.handleScroll = o(() => {
      if (null != this._list) {
        let e = this._list.getScrollerNode();
        null != e && h.default.updateChannelListScroll(O.ME, e.scrollTop)
      }
    }, 100), this.renderDM = (e, t) => {
      let {
        privateChannelIds: n,
        channels: l,
        selectedChannelId: a
      } = this.props, {
        totalRowCount: i,
        preRenderedChildren: r
      } = this.state, o = n[t], u = l[o];
      return null == u ? null : (0, s.jsx)(M.default, {
        channel: u,
        selected: u.id === a,
        "aria-posinset": r + t + 1,
        "aria-setsize": i
      }, u.id)
    }, this.renderChild = e => {
      let {
        nonNullChildren: t,
        totalRowCount: n
      } = this.state, l = t[e];
      return i.isValidElement(l) ? i.cloneElement(l, {
        "aria-setsize": n,
        "aria-posinset": e + 1
      }) : l
    }, this.renderRow = e => {
      let {
        section: t,
        row: n
      } = e, {
        privateChannelIds: l
      } = this.props;
      return 0 === t ? this.renderChild(n) : 0 === n && 0 === l.length ? (0, s.jsx)(b, {}, "no-private-channels") : this.renderDM(t, n)
    }, this.renderSection = e => {
      let {
        section: t
      } = e, {
        showDMHeader: n
      } = this.props;
      return 0 !== t && n ? (0, s.jsxs)(R.default, {
        className: D.privateChannelsHeaderContainer,
        children: [(0, s.jsx)("span", {
          className: D.headerText,
          children: y.default.Messages.DIRECT_MESSAGES
        }), (0, s.jsx)(g.default, {
          tooltip: y.default.Messages.CREATE_DM,
          tooltipPosition: "top",
          popoutAlign: "left",
          iconClassName: D.privateChannelRecipientsInviteButtonIcon,
          icon: x.default,
          subscribeToGlobalHotkey: !0
        })]
      }, t) : null
    }, this.getRowHeight = (e, t) => {
      let {
        privateChannelIds: n
      } = this.props;
      return 1 === e && 0 === t && 0 === n.length ? 428 : 44
    }
  }
}
j.defaultProps = {
  padding: 8
};
var G = e => {
  let {
    version: t,
    theme: n,
    children: l,
    showDMHeader: a
  } = e, r = i.Children.count(l), o = T.default.getMutablePrivateChannels(), c = (0, S.filterOutMessageRequestsAndSpam)(o), f = (0, d.useStateFromStoresArray)([L.default, I.default, _.default], () => {
    let e = L.default.getPrivateChannelIds(),
      t = (0, S.filterOutMessageRequestsAndSpamById)(e, [I.default, _.default]);
    return (0, E.filterBroadcastingGDMs)(t)
  }, []), h = (0, d.useStateFromStoresObject)([C.default, N.default, T.default], () => ({
    theme: N.default.darkSidebar ? O.ThemeTypes.DARK : n,
    keyboardModeEnabled: C.default.keyboardModeEnabled,
    version: null != t ? "".concat(t, ":").concat(T.default.getPrivateChannelsVersion()) : T.default.getPrivateChannelsVersion()
  })), p = i.useRef(null), m = i.useCallback(e => {
    let t = p.current,
      n = document.querySelector(e);
    null != t && null != n && t.scrollIntoViewNode({
      node: n,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
            preventScroll: !0
          })
        })
      }
    })
  }, []), g = i.useCallback(() => new Promise(e => {
    let t = p.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), A = i.useCallback(() => new Promise(e => {
    let t = p.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), x = (0, v.useUID)(), R = (0, u.default)({
    id: "private-channels-".concat(x),
    isEnabled: h.keyboardModeEnabled,
    scrollToStart: g,
    scrollToEnd: A,
    defaultFocused: (r + (a ? 1 : 0)).toString(),
    setFocus: m
  });
  return (0, s.jsx)(u.ListNavigatorProvider, {
    navigator: R,
    children: (0, s.jsx)(j, {
      channels: c,
      privateChannelIds: f,
      listRef: p,
      theme: n,
      version: t,
      ...e,
      children: l,
      ...h
    })
  })
}