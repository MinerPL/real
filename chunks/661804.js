"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var a, s = n("37983"),
  i = n("884691"),
  l = n("414456"),
  r = n.n(l),
  o = n("77078"),
  u = n("913144"),
  d = n("939488"),
  c = n("157552"),
  f = n("444949"),
  E = n("901582"),
  _ = n("778043"),
  h = n("875358"),
  C = n("737295"),
  I = n("153034"),
  T = n("129215"),
  S = n("49111"),
  m = n("492249"),
  p = n("677654");
a = class extends i.PureComponent {
  componentDidMount() {
    d.setHomeLink(S.Routes.APPLICATION_LIBRARY), (0, _.deepLinkRouteIfLanded)(m.RPCDeepLinks.LIBRARY), u.default.wait(() => (0, c.fetchBranches)()), (0, f.fetchActivityStatistics)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
  }
  renderToolbar() {
    return (0, s.jsx)(h.default, {})
  }
  render() {
    let {
      includeUpdatesInScroller: e
    } = this.state, t = (0, s.jsx)("div", {
      children: (0, s.jsx)(E.default, {
        section: S.AnalyticsSections.LIBRARY_INSTALL_MODULE,
        children: (0, s.jsx)(T.default, {
          onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
        })
      })
    });
    return (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(C.default, {
        currentRoute: S.Routes.APPLICATION_LIBRARY,
        renderToolbar: this.renderToolbar
      }), e ? null : t, (0, s.jsxs)(o.AdvancedScrollerAuto, {
        className: r(p.container, p.scroller),
        ref: this._scrollerRef,
        children: [e ? t : null, (0, s.jsx)(E.default, {
          section: S.AnalyticsSections.LIBRARY_APPLICATION_LIST,
          children: (0, s.jsx)(I.default, {
            stickyHeader: !e,
            scrollToRow: this.scrollToRow
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this._scrollerRef = i.createRef(), this._scrollToPadding = 0, this.state = {
      includeUpdatesInScroller: !1
    }, this.handleHeightTallerThanHalfViewportChange = e => {
      this.setState({
        includeUpdatesInScroller: e
      })
    }, this.scrollToRow = (e, t) => {
      let n = this._scrollerRef.current;
      null != n ? (e.focus(), n.scrollIntoViewRect({
        start: t,
        end: t
      }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
    }
  }
}