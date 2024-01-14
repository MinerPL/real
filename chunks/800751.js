"use strict";
n.r(t), n.d(t, {
  SHAKE_INTENSITY_DEFAULT: function() {
    return T
  },
  SHAKE_INTENSITY_MAX: function() {
    return g
  },
  SHAKE_INTENSITY_INCREMENT: function() {
    return N
  },
  default: function() {
    return R
  }
}), n("424973"), n("881410"), n("222007");
var s = n("37983"),
  i = n("884691"),
  l = n("759843"),
  o = n("669491"),
  r = n("77078"),
  a = n("428958"),
  c = n("69927"),
  u = n("384997"),
  d = n("304386"),
  h = n("423487"),
  f = n("956089"),
  m = n("659500"),
  p = n("286235"),
  S = n("901582"),
  C = n("534291"),
  b = n("49111"),
  _ = n("782340"),
  x = n("634917");
let v = Object.freeze({
    shouldPreventNavigation: !1,
    onPreventNavigation: null,
    sidebarOpen: !0
  }),
  T = 1.4,
  g = 15,
  N = 2;

function E(e) {
  var t, n;
  let {
    section: i,
    setPreventNavigation: o,
    scrollerRef: r
  } = e;
  (0, a.default)({
    type: l.ImpressionTypes.PANE,
    name: null == i ? void 0 : i.impressionName,
    properties: null == i ? void 0 : i.impressionProperties
  });
  let c = null !== (t = null == i ? void 0 : i.element) && void 0 !== t ? t : b.NOOP_NULL,
    u = null !== (n = null == i ? void 0 : i.elementProps) && void 0 !== n ? n : {};
  return (0, s.jsx)(S.default, {
    section: i.section,
    children: (0, s.jsx)(c, {
      ...u,
      setPreventNavigation: o,
      refToScroller: r
    })
  })
}
class j extends i.PureComponent {
  componentDidMount() {
    this.getPredicateSections().forEach(e => {
      let {
        notice: t
      } = e;
      if (null == t) return;
      let {
        stores: n
      } = t;
      null != n && n.forEach(e => {
        e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e)
      })
    })
  }
  componentDidUpdate(e) {
    let {
      section: t
    } = e;
    t !== this.props.section && (this._intensity = T)
  }
  componentWillUnmount() {
    this._unmounted = !0, this._subscribedStores.forEach(e => e.removeChangeListener(this.handleNoticeStoreUpdate)), this.props.sections.forEach(e => {
      var t;
      return null === (t = e.onSettingsClose) || void 0 === t ? void 0 : t.call(e)
    })
  }
  getPredicateSections() {
    return this.props.sections.filter(e => null == e.predicate || e.predicate())
  }
  validNavigation() {
    var e;
    let {
      section: t
    } = this.props, n = this.getPredicateSections(), {
      notice: s
    } = null !== (e = n.find(e => t === e.section)) && void 0 !== e ? e : {};
    return null != s && s.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (m.ComponentDispatch.dispatch(b.ComponentActions.SHAKE_APP, {
      duration: 300,
      intensity: this._intensity
    }), this._intensity = Math.min(this._intensity + N, g), m.ComponentDispatch.dispatch(b.ComponentActions.EMPHASIZE_NOTICE), !1) : (this._intensity = T, !0)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: n
    } = this.props, i = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), l = null != t ? t : e[0].section;
    return (0, s.jsx)(u.default, {
      contentTypes: i,
      children: t => {
        let {
          visibleContent: i
        } = t;
        return (0, s.jsx)(r.TabBar, {
          selectedItem: l,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": n,
          children: e.map((e, t) => {
            switch (e.section) {
              case C.SectionTypes.HEADER:
                return (0, s.jsx)(r.TabBar.Header, {
                  children: e.label
                }, t);
              case C.SectionTypes.DIVIDER:
                return (0, s.jsx)(r.TabBar.Separator, {}, t);
              case C.SectionTypes.CUSTOM:
                var n;
                let o = null !== (n = e.element) && void 0 !== n ? n : b.NOOP_NULL;
                return (0, s.jsx)(o, {}, t);
              default:
                return this.renderSettingsSectionTabBarItem(e, l === e.section, i)
            }
          })
        })
      }
    })
  }
  renderNotice(e) {
    let {
      theme: t
    } = this.props;
    if (null == e || null == e.notice) return null;
    let {
      stores: n,
      element: i
    } = e.notice;
    return null == n || n.some(e => e.showNotice()) ? (0, s.jsx)(i, {
      theme: t
    }) : null
  }
  render() {
    var e;
    let {
      sidebarTheme: t,
      section: n,
      title: i,
      onClose: l,
      hideSidebar: o
    } = this.props, r = this.getPredicateSections(), a = r.find(e => e.section === n);
    if (null == a || null == n) return null;
    let u = null !== (e = "string" == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : i;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(c.AppPageTitle, {
        location: i,
        subsection: u
      }), (0, s.jsx)(C.default, {
        sidebarTheme: t,
        scrollerRef: this.scrollerRef,
        section: n,
        sidebar: this.renderSidebar(r),
        content: (0, s.jsx)(E, {
          section: a,
          setPreventNavigation: this.setPreventNavigation,
          scrollerRef: this.scrollerRef
        }),
        mobileSidebarOpen: this.state.sidebarOpen,
        hideSidebar: o,
        toggleSidebar: () => this.setState({
          sidebarOpen: !0
        }),
        contentType: a.type,
        notice: this.renderNotice(a),
        closeAction: null != l ? this.handleClose : void 0
      })]
    })
  }
  constructor(...e) {
    super(...e), this._unmounted = !1, this._intensity = T, this._subscribedStores = [], this.scrollerRef = i.createRef(), this.state = {
      ...v,
      sidebarOpen: this.props.section !== b.UserSettingsSections.SUBSCRIPTIONS && this.props.section !== b.UserSettingsSections.PROFILE_CUSTOMIZATION
    }, this.setPreventNavigation = (e, t) => {
      this.setState({
        shouldPreventNavigation: e,
        onPreventNavigation: t
      })
    }, this.handleSetSection = e => {
      let {
        onSetSection: t,
        sections: n
      } = this.props, {
        shouldPreventNavigation: s,
        onPreventNavigation: i
      } = this.state, l = () => {
        var s;
        null == t || t(e);
        let {
          notice: i
        } = null !== (s = n.find(t => e === t.section)) && void 0 !== s ? s : {}, l = null != i ? i.stores : null;
        null != l && l.forEach(e => {
          !this._subscribedStores.includes(e) && (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e))
        }), this.setState({
          ...v,
          sidebarOpen: !1
        })
      };
      this.validNavigation() && !s && (l(), p.default.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), s && null != i && i(l)
    }, this.handleClose = () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }, this.handleNoticeStoreUpdate = () => {
      !this._unmounted && (this._intensity = T, this.forceUpdate())
    }, this.renderSettingsSectionTabBarItem = (e, t, n) => {
      let {
        section: i,
        label: l = null,
        ariaLabel: a,
        onClick: c,
        color: u,
        icon: m,
        className: p,
        newIndicator: S,
        newIndicatorDismissibleContentTypes: C,
        badgeCount: v
      } = e, T = null;
      i === b.UserSettingsSections.ACCOUNT && this.props.isEligibleForPomelo ? T = (0, s.jsx)(h.default, {
        color: o.default.colors.STATUS_WARNING.css
      }) : null != e.decoration ? T = (0, s.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: e.decoration
      }) : null != n && (null == C ? void 0 : C.includes(n)) && !t ? T = null != S ? S : (0, s.jsx)(f.TextBadge, {
        text: _.default.Messages.NEW
      }) : null != m ? T = m : null != v && v > 0 && (T = (0, s.jsx)(f.NumberBadge, {
        count: v
      }));
      let g = i === b.UserSettingsSections.PREMIUM ? (0, s.jsx)(d.default, {
        label: l,
        isSelected: t,
        decoration: T
      }) : null == T ? l : (0, s.jsxs)("div", {
        className: x.tabBarItemContainer,
        children: [l, T]
      });
      return (0, s.jsx)(r.TabBar.Item, {
        color: u,
        id: i,
        onClick: c,
        className: p,
        "aria-label": a,
        children: g
      }, i)
    }
  }
}
var R = j