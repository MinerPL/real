"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("446674"),
  o = n("77078"),
  u = n("913144"),
  d = n("259083"),
  c = n("778588"),
  E = n("577427"),
  f = n("946749"),
  _ = n("810567"),
  h = n("791776"),
  C = n("780009"),
  T = n("49111"),
  I = n("782340"),
  S = n("948063");
class N extends s.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    u.default.wait(() => d.updateActiveRowKey(null)), document.removeEventListener("keydown", this.handleKeyDown)
  }
  reset() {
    d.updateActiveRowKey(null), d.updateLibraryFilter("")
  }
  focusInput() {
    let {
      searchBarRef: e
    } = this;
    null != e && e.focus()
  }
  updateActiveRow(e) {
    let {
      applicationViewItems: t,
      activeRowKey: n
    } = this.props, a = t.findIndex(e => e.key === n), s = 0;
    a >= 0 && (s = (a + e) % t.length) < 0 && (s = t.length - 1);
    let i = t[s];
    d.updateActiveRowKey(null != i ? i.key : null, !0)
  }
  render() {
    let {
      filterQuery: e
    } = this.props, {
      focused: t
    } = this.state;
    return (0, a.jsx)("div", {
      className: l({
        [S.libraryFilter]: !0,
        [S.focused]: t
      }),
      children: (0, a.jsx)(_.default, {
        className: S.searchBar,
        ref: this.setRef,
        onChange: d.updateLibraryFilter,
        onFocus: () => this.setState({
          focused: !0
        }),
        onBlur: () => this.setState({
          focused: !1
        }),
        name: "filter",
        onClear: () => {
          this.reset(), this.focusInput()
        },
        maxLength: 100,
        query: e,
        placeholder: I.default.Messages.APPLICATION_LIBRARY_FILTER_PLACEHOLDER
      })
    })
  }
  constructor(...e) {
    super(...e), this.searchBarRef = null, this.state = {
      focused: !1
    }, this.setRef = e => {
      this.searchBarRef = e
    }, this.handleKeyDown = e => {
      var t;
      let {
        activeRowKey: n,
        hasModalOpen: a,
        applicationViewItems: s
      } = this.props, {
        searchBarRef: i
      } = this;
      if (a || e.ctrlKey || e.altKey || e.metaKey || null == i) return;
      let l = null === (t = (0, h.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
      if (!(l !== i.inputRef.current && (0, h.isInputLikeElement)(l))) switch (e.which) {
        case T.KeyboardKeys.ESCAPE:
          e.target !== i.inputRef.current ? this.reset() : null != i.inputRef.current && i.blur();
          break;
        case T.KeyboardKeys.ENTER:
          if (null != n) {
            e.preventDefault();
            let t = s.find(e => e.key === n);
            if (null == t) return;
            let a = t.libraryApplication;
            C.performDefaultLibraryApplicationAction(a, {
              analyticsParams: {
                source: T.AnalyticsLocations.APPLICATION_LIBRARY,
                location: {
                  page: T.AnalyticsPages.LIBRARY,
                  section: T.AnalyticsSections.LIBRARY_APPLICATION_LIST,
                  object: T.AnalyticsObjects.BUTTON_CTA
                }
              }
            })
          }
          break;
        case T.KeyboardKeys.ARROW_DOWN:
        case T.KeyboardKeys.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === T.KeyboardKeys.ARROW_DOWN ? 1 : -1);
          break;
        default:
          null != i.inputRef.current && e.target !== i.inputRef.current && i.focus()
      }
    }
  }
}

function A() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.hasLayers()),
    t = (0, o.useModalsStore)(o.hasAnyModalOpenSelector);
  return (0, a.jsx)(N, {
    activeRowKey: (0, r.useStateFromStores)([f.default], () => f.default.activeRowKey),
    hasModalOpen: t || e,
    filterQuery: (0, r.useStateFromStores)([E.default], () => E.default.applicationFilterQuery),
    applicationViewItems: (0, r.useStateFromStores)([E.default], () => E.default.sortedFilteredLibraryApplicationViewItems)
  })
}