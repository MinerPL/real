"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var r = s("37983"),
  l = s("884691"),
  n = s("414456"),
  a = s.n(n),
  i = s("446674"),
  o = s("77078"),
  u = s("913144"),
  c = s("960476"),
  h = s("538282"),
  d = s("510849"),
  m = s("145131"),
  p = s("810567"),
  f = s("531470"),
  g = s("140331"),
  R = s("588155"),
  I = s("762518"),
  y = s("49111"),
  _ = s("115279"),
  E = s("782340"),
  F = s("705602");
let S = e => e.stopPropagation();
class T extends l.PureComponent {
  componentDidMount() {
    c.initializeSearch(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, y.GIFPickerResultTypes.SEARCH)
  }
  componentWillUnmount() {
    u.default.wait(() => c.resetSearch()), document.removeEventListener("keydown", this.backToFrontPage)
  }
  search(e, t, s) {
    c.search(e, t, s), "" === e ? this.setState({
      resultType: null
    }) : this.state.resultType !== y.GIFPickerResultTypes.SEARCH && this.setState({
      resultType: y.GIFPickerResultTypes.SEARCH
    })
  }
  renderHeaderContent() {
    let {
      query: e
    } = this.props, {
      resultType: t
    } = this.state;
    switch (t) {
      case y.GIFPickerResultTypes.FAVORITES:
        return (0, r.jsx)(o.FormTitle, {
          tag: "h5",
          className: F.searchHeader,
          children: E.default.Messages.CATEGORY_FAVORITE
        });
      case y.GIFPickerResultTypes.TRENDING_GIFS:
        return (0, r.jsx)(o.FormTitle, {
          tag: "h5",
          className: F.searchHeader,
          children: E.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
        });
      default:
        return (0, r.jsx)(p.default, {
          className: F.searchBar,
          size: p.default.Sizes.MEDIUM,
          query: e,
          onChange: this.handleChangeQuery,
          onClear: this.handleClearQuery,
          placeholder: E.default.Messages.SEARCH_TENOR,
          "aria-label": E.default.Messages.SEARCH_TENOR,
          ref: this.searchBarRef,
          autoFocus: !0
        })
    }
  }
  renderHeader() {
    let {
      resultType: e
    } = this.state, t = null;
    return null != e && (t = (0, r.jsx)(o.Clickable, {
      onClick: this.handleClearQuery,
      className: F.backButton,
      "aria-label": E.default.Messages.BACK,
      children: (0, r.jsx)(f.default, {
        title: E.default.Messages.BACK
      })
    })), (0, r.jsxs)(m.default, {
      align: m.default.Align.CENTER,
      children: [t, this.renderHeaderContent()]
    })
  }
  renderContent() {
    let {
      resultItems: e,
      resultQuery: t,
      query: s,
      favorites: l,
      searchOffset: n,
      searchLimit: a,
      searchTotalResults: i,
      suggestions: o,
      hideFavorites: u
    } = this.props, {
      resultType: c
    } = this.state;
    return null == c ? (0, r.jsx)(R.default, {
      hideFavoritesTile: u,
      onSelectItem: this.handleSelectItem
    }) : (0, r.jsx)(I.default, {
      data: c === y.GIFPickerResultTypes.FAVORITES ? l : e,
      onSelectGIF: this.handleSelectGIF,
      resultType: c,
      resultQuery: t,
      query: s,
      searchOffset: n,
      searchLimit: a,
      searchTotalResults: i,
      suggestions: o,
      onSelectSuggestion: this.handleSelectSuggestion
    })
  }
  render() {
    let {
      className: e,
      forwardedRef: t
    } = this.props;
    return (0, r.jsxs)("div", {
      id: _.GIF_PICKER_TAB_PANEL_ID,
      role: "tabpanel",
      "aria-labelledby": _.GIF_PICKER_TAB_ID,
      className: a(F.container, e),
      onClick: S,
      ref: t,
      children: [(0, r.jsx)("div", {
        className: F.header,
        children: this.renderHeader()
      }), (0, r.jsx)("div", {
        className: F.content,
        children: this.renderContent()
      })]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      resultType: null
    }, this.searchBarRef = l.createRef(), this.backToFrontPage = e => {
      let {
        resultType: t
      } = this.state;
      e.keyCode === y.KeyboardKeys.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
    }, this.handleChangeQuery = e => {
      (0, h.setSearchQuery)(e), this.search(e, y.GIFPickerResultTypes.SEARCH)
    }, this.handleSelectSuggestion = e => {
      (0, h.setSearchQuery)(""), c.resetSearch(), this.search(e, y.GIFPickerResultTypes.SEARCH_SUGGESTION, !0)
    }, this.handleClearQuery = () => {
      let {
        current: e
      } = this.searchBarRef;
      (0, h.setSearchQuery)(""), c.resetSearch(), this.setState({
        resultType: null
      }), null != e && e.focus()
    }, this.handleSelectGIF = e => {
      let {
        onSelectGIF: t
      } = this.props;
      null != t && t(e)
    }, this.handleSelectItem = (e, t) => {
      let {
        current: s
      } = this.searchBarRef;
      switch (e) {
        case y.GIFPickerResultTypes.TRENDING_CATEGORY:
          c.search(t, y.GIFPickerResultTypes.TRENDING_CATEGORY, !0), null != s && s.focus();
          break;
        case y.GIFPickerResultTypes.TRENDING_GIFS:
          c.fetchTrendingGIFs()
      }
      this.setState({
        resultType: e
      })
    }
  }
}
var C = l.forwardRef((e, t) => {
  !e.persistSearch && (0, h.setSearchQuery)("");
  let {
    query: s,
    resultQuery: l,
    resultItems: n,
    suggestions: a
  } = (0, i.useStateFromStoresObject)([d.default], () => ({
    query: d.default.getQuery(),
    resultQuery: d.default.getResultQuery(),
    resultItems: d.default.getResultItems(),
    suggestions: d.default.getSuggestions()
  })), o = (0, h.useExpressionPickerStore)(e => e.searchQuery), u = (0, g.useSortedFavoriteGIFs)();
  return (0, r.jsx)(T, {
    ...e,
    forwardedRef: t,
    query: null != o && "" !== o ? o : s,
    resultQuery: l,
    resultItems: n,
    suggestions: a,
    favorites: u,
    searchOffset: 0,
    searchTotalResults: d.default.getResultItems().length,
    searchLimit: null
  })
})