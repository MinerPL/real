"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("781738");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("98159"),
  o = n("369470"),
  u = n.n(o),
  d = n("446674"),
  c = n("77078"),
  f = n("378438"),
  E = n("137223"),
  h = n("76385"),
  _ = n("955513"),
  S = n("180748"),
  T = n("206230"),
  p = n("716241"),
  N = n("42203"),
  I = n("923959"),
  m = n("744983"),
  A = n("18494"),
  g = n("476765"),
  C = n("659500"),
  R = n("202752"),
  M = n("751520"),
  O = n("313483"),
  L = n("653291"),
  v = n("49111"),
  D = n("782340"),
  y = n("84691");
n("525840");
let x = (0, g.uid)(),
  P = u(f.search, 500);
class U extends a.PureComponent {
  componentDidMount() {
    var e, t;
    C.ComponentDispatch.subscribe(v.ComponentActions.PERFORM_SEARCH, this.search), C.ComponentDispatch.subscribe(v.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), C.ComponentDispatch.subscribe(v.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute("aria-haspopup", "listbox")
  }
  componentDidUpdate(e) {
    let {
      editorState: t,
      searchId: n
    } = this.props;
    if (t !== e.editorState) {
      let e = M.tokenizeQuery(R.getFirstTextBlock(t)),
        l = O.getSelectionScope(e, t);
      f.updateAutocompleteQuery(n, e, l), null != this._editorRef && R.scrollCursorIntoView(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    C.ComponentDispatch.unsubscribe(v.ComponentActions.PERFORM_SEARCH, this.search), C.ComponentDispatch.unsubscribe(v.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), C.ComponentDispatch.unsubscribe(v.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = M.tokenizeQuery(R.getFirstTextBlock(e)).filter(e => e.type !== h.default.NON_TOKEN_TYPE);
    return R.applyTokensAsEntities(t, e, _.default)
  }
  clearSearch() {
    let {
      searchId: e
    } = this.props;
    null != e && f.clearSearchState(e)
  }
  handlePastedFiles() {
    return !0
  }
  handleDroppedFiles() {
    return !0
  }
  handleDrop() {
    return !0
  }
  renderInput(e) {
    let {
      editorState: t
    } = this.props;
    return (0, l.jsx)(r.Editor, {
      autoCorrect: "off",
      ref: this.setEditorRef,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      handleReturn: this.handleReturn,
      handleBeforeInput: this.handleBeforeInput,
      handleKeyCommand: this.handleKeyCommand,
      handlePastedText: this.handlePastedText,
      handlePastedFiles: this.handlePastedFiles,
      handleDroppedFiles: this.handleDroppedFiles,
      handleDrop: this.handleDrop,
      keyBindingFn: this.handleKeyBind,
      placeholder: D.default.Messages.SEARCH,
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? x : void 0,
      ariaLabel: D.default.Messages.SEARCH,
      ariaAutocomplete: "list"
    })
  }
  render() {
    let {
      searchId: e,
      editorState: t,
      hasResults: n,
      className: a
    } = this.props, {
      focused: s
    } = this.state, r = R.getFirstTextBlock(t).length > 0;
    return null == e ? null : (0, l.jsx)(c.Popout, {
      renderPopout: this.renderPopout,
      position: "bottom",
      animation: c.Popout.Animation.NONE,
      shouldShow: s,
      autoInvert: !1,
      children: (t, o) => {
        var u;
        let {
          isShown: d
        } = o;
        return (0, l.jsx)("div", {
          className: a,
          children: (0, l.jsx)("div", {
            className: i(y.search, {
              [y.open]: r || s,
              [y.focused]: s
            }),
            children: (0, l.jsx)(c.FocusRing, {
              focusTarget: {
                current: null === (u = this._editorRef) || void 0 === u ? void 0 : u.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, l.jsxs)("div", {
                className: y.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(d), (0, l.jsx)(E.SearchBarIcon, {
                  onClear: this.handleClearSearch,
                  hasContent: r || n,
                  className: y.icon
                })]
              }, e)
            })
          })
        })
      }
    })
  }
  constructor(e) {
    super(e), this.state = {
      focused: !1,
      selectedIndex: void 0
    }, this._searchBarRef = a.createRef(), this._searchPopoutRef = a.createRef(), this.handleSetSearchQuery = e => {
      let {
        query: t,
        anchor: n,
        focus: l,
        performSearch: a,
        replace: s
      } = e, {
        editorState: i
      } = this.props, r = R.getFirstTextBlock(i);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== r.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), s ? (i = R.replaceAllContent(t, i), n = 0) : i = R.updateContent(t, i, n, l), i = R.truncateContent(i, 512), i = this.tokenize(i);
      let o = Number(n) + t.length;
      i = R.setCollapsedSelection(o, i), this.setEditorState(i), a && this.search(R.getFirstTextBlock(i))
    }, this.handleSelectedIndexChanged = e => {
      var t, n;
      null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute("aria-activedescendant", null != e ? "".concat(x, "-").concat(e) : void 0), this.setState({
        selectedIndex: e
      })
    }, this.renderPopout = () => (0, l.jsx)(L.default, {
      ref: this._searchPopoutRef,
      navId: x,
      onSelectedIndexChanged: this.handleSelectedIndexChanged
    }), this.search = e => {
      let {
        searchId: t,
        isSearching: n
      } = this.props;
      if (null == e || "" === e) {
        let {
          editorState: t
        } = this.props;
        e = R.getFirstTextBlock(t)
      }
      if (null != t && !n) {
        let n = M.tokenizeQuery(e),
          l = M.getSearchQueryFromTokens(n);
        for (let t = 0; t < n.length; t++) !M.filterHasAnswer(n[t], n[t + 1]) && (e = e.substring(0, n[t].start) + e.substring(n[t].end));
        if (0 === n.length || 0 === Object.keys(l).length) return !1;
        P(t, l, e), this.onBlur()
      }
      return !0
    }, this.handleClearSearch = e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      e.preventDefault(), e.stopPropagation();
      let l = R.getFirstTextBlock(t);
      if ("" === l) {
        this.focusEditor();
        return
      }
      t = R.truncateContent(t, 0), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor())
    }, this.handleFocusSearch = e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) {
        this.focusEditor();
        return
      }
      let n = A.default.getChannelId(),
        l = N.default.getChannel(n);
      if ((null == l ? void 0 : l.isThread()) && (l = N.default.getChannel(null == l ? void 0 : l.parent_id)), null == l || l.isPrivate()) {
        this.focusEditor();
        return
      }
      let a = I.default.getTextChannelNameDisambiguations(l.getGuildId()),
        s = a[l.id],
        i = null != s ? s.name : l.name;
      this.handleSetSearchQuery({
        query: _.default[v.SearchTokenTypes.FILTER_IN].key + "#".concat(i, " "),
        replace: !0
      })
    }, this.focusEditor = () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }, this.blurEditor = () => {
      var e;
      null === (e = this._editorRef) || void 0 === e || e.blur()
    }, this.setEditorRef = e => {
      this._editorRef = e
    }, this.onFocus = () => {
      let {
        searchType: e
      } = this.props;
      p.default.trackWithMetadata(v.AnalyticEvents.SEARCH_OPENED, {
        search_type: e
      }), this.setState({
        focused: !0
      })
    }, this.onBlur = () => {
      this.setState({
        focused: !1
      }, () => {
        R.isEmpty(this.props.editorState) && this.clearSearch()
      })
    }, this.handleReturn = e => {
      e.preventDefault();
      let {
        current: t
      } = this._searchPopoutRef, n = null != t && t.selectOption();
      return !n && this.search(), !0
    }, this.handleBeforeInput = e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state, l = R.getFirstTextBlock(t);
      return !!(l.length >= 512) || (t = R.updateContent(e, t), t = R.truncateContent(t, 512), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
        focused: !0
      }), !0)
    }, this.handleKeyCommand = e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      switch (e) {
        case "backspace":
        case "backspace-word":
        case "backspace-to-start-of-line":
        case "delete":
        case "delete-word":
          return t = R.deleteContent(e, t), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
            focused: !0
          }), !0;
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = R.miscCommand(e, t), t = this.tokenize(t), this.setEditorState(t), !0;
        case "split-block":
        case "underline":
        case "bold":
        case "italic":
          return !0
      }
    }, this.handlePastedText = e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = R.updateContent(e, t), t = R.truncateContent(t, 512), t = this.tokenize(t), !n && this.setState({
        focused: !0
      }), this.setEditorState(t), !0
    }, this.setEditorState = e => {
      let {
        searchId: t
      } = this.props;
      f.setSearchState(t, e)
    }, this.handleKeyBind = e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: l
      } = e, {
        editorState: a,
        searchId: s,
        keyboardModeEnabled: i
      } = this.props;
      if (e.stopPropagation(), "Escape" === t) {
        if (e.preventDefault(), R.isEmpty(a)) this.blurEditor();
        else {
          let e = R.clearContent(a);
          f.setSearchState(s, e), this.setState({
            focused: !0
          })
        }
        return !0
      }
      if ("ArrowUp" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusPreviousOption(), !0
      }
      if ("ArrowDown" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusNextOption(), !0
      }
      if ("Tab" === t) {
        if (i) return;
        return (0, S.enableKeyboardMode)(), !0
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), a = l ? R.setToStartSelection(a) : R.setCollapsedStartSelection(a), this.setEditorState(a), !0;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), a = l ? R.setToEndSelection(a) : R.setCollapsedEndSelection(a), this.setEditorState(a), !0;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = R.clearContent(a);
        return this.setEditorState(e), !0
      }
      return R.getDefaultKeyBinding(e)
    }, M.clearTokenCache()
  }
}
var F = d.default.connectStores([T.default, m.default], () => {
  var e;
  let t = m.default.getCurrentSearchId(),
    n = m.default.getSearchType(),
    l = null != t && m.default.isSearching(t),
    a = null != t && null !== (e = m.default.getEditorState(t)) && void 0 !== e ? e : R.createEmptyEditorState(O.generateDecorators(_.default)),
    s = T.default.keyboardModeEnabled;
  return {
    searchId: t,
    searchType: n,
    isSearching: l,
    editorState: a,
    hasResults: m.default.hasResults(t),
    keyboardModeEnabled: s
  }
})(U)