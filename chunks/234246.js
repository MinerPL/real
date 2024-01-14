"use strict";
n.r(t), n.d(t, {
  createInitialState: function() {
    return f
  },
  default: function() {
    return l
  }
}), n("222007");
var l, i = n("44170"),
  r = n("507217"),
  o = n("834725"),
  s = n("252931"),
  a = n("845579"),
  u = n("697218"),
  d = n("851745"),
  c = n("962254");

function f() {
  return {
    query: null,
    selectedIndex: null,
    isVisible: !1,
    didInitialQuery: !1
  }
}
l = class extends i.EventEmitter {
  updateProps(e) {
    let t = this.props.focused !== e.focused,
      n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
      l = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
    if (this.props = e, n || l) this.updateResults(l, n), !this.state.didInitialQuery && (this.state = {
      ...this.state,
      didInitialQuery: !0
    });
    else if (t) {
      let e = this.state.query;
      this.setState({
        isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo)
      })
    }
  }
  setSelectedIndex(e) {
    this.setState({
      selectedIndex: e
    })
  }
  onTabOrEnter(e) {
    if (!this.state.isVisible) return !1;
    if (null == this.state.selectedIndex) {
      var t;
      let n = null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo.focusMode;
      return !e && (n === d.FocusMode.MANUAL || n === d.FocusMode.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0)
    }
    return this.selectResult(this.state.selectedIndex, e, !0)
  }
  onMoveSelection(e) {
    var t, n;
    if (!this.state.isVisible) return !1;
    if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null === (t = this.state.query) || void 0 === t ? void 0 : t.type) === d.AutocompleteOptionTypes.COMMANDS) {
      let e = null === (n = this.state.query.results.commands) || void 0 === n ? void 0 : n[this.state.selectedIndex];
      null != e && r.setPreferredCommandId(this.props.channel.id, e.id)
    }
    return !0
  }
  onMaybeShowAutocomplete() {
    this.emit("update")
  }
  onHideAutocomplete() {
    let e = this.state.query;
    null != e && this.setState({
      isVisible: !1
    })
  }
  onResultHover(e) {
    this.props.navigator.setFocus(null), this.setSelectedIndex(null)
  }
  onResultClick(e) {
    this.selectResult(e, !0)
  }
  clearQuery() {
    this.setState({
      query: null,
      isVisible: !1,
      selectedIndex: null
    })
  }
  queryResults() {
    this.updateResults()
  }
  isVisible() {
    return this.state.isVisible
  }
  updateResults() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == this.props.editorRef.current) return;
    let i = (0, c.getOptions)(this.props),
      r = (0, c.findMatchingAutocompleteType)({
        channel: this.props.channel,
        guild: this.props.guild,
        options: i,
        currentWord: this.props.currentWord,
        currentWordIsAtStart: this.props.currentWordIsAtStart,
        textValue: this.props.textValue,
        optionText: this.props.optionText
      }),
      f = i.commands !== d.CommandMode.DISABLED ? (0, c.findCommandOptionAutocompleteType)(this.props.activeCommandOption, this.props.currentWord) : null;
    if (null == r && null != f) r = f;
    else if (null == r || null != f && r.type !== f.type) {
      this.clearQuery();
      return
    }
    let {
      type: p,
      typeInfo: m,
      query: h
    } = r, E = l || n && ((null === (e = this.state.query) || void 0 === e ? void 0 : e.queryText) !== h || (null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo) !== m), S = u.default.getCurrentUser(), g = (0, s.getInventoryGuildPacksUserExperimentConfig)({
      user: S,
      autoTrackExposure: !1
    }).viewAndUseEnabled;
    i.canViewAndUsePackEmoji = g;
    let C = a.IncludeStickersInAutocomplete.getSetting();
    i.allowStickers = i.allowStickers ? C : i.allowStickers;
    let {
      results: T,
      metadata: v
    } = m.queryResults(this.props.channel, this.props.guild, h, i, E), y = 0;
    for (let e of Object.values(T)) Array.isArray(e) && (y += e.length);
    let x = !0 === T.isLoading,
      I = this.shouldShow(y, x, m),
      N = this.state.selectedIndex;
    !I || x ? N = null : null != N && N >= y && (N = y - 1), I && !this.state.isVisible && (0, o.trackAutocompleteOpen)(p, this.props.channel, v), this.setState({
      query: {
        type: p,
        typeInfo: m,
        queryText: h,
        results: T,
        resultCount: y,
        options: i,
        isLoading: x
      },
      isVisible: I,
      selectedIndex: N
    })
  }
  shouldShow(e, t, n) {
    return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty)
  }
  selectResult(e, t, n) {
    var l, i, r;
    if (!this.state.isVisible) return !1;
    let {
      type: s,
      typeInfo: a,
      results: u,
      resultCount: c,
      options: f
    } = this.state.query;
    if (e >= c) return !1;
    let p = null === (i = a.onSelect) || void 0 === i ? void 0 : i.call(a, {
      results: u,
      index: e,
      type: t ? d.SelectType.SEND : d.SelectType.INSERT,
      options: f,
      channel: this.props.channel,
      tabOrEnter: n,
      queryText: null === (l = this.state.query) || void 0 === l ? void 0 : l.queryText
    });
    return null != p && (0, o.trackAutocompleteSelect)(s, null !== (r = p.type) && void 0 !== r ? r : null, this.props.channel, p.metadata), !0
  }
  setState(e) {
    for (let t in e)
      if (e[t] !== this.state[t]) {
        this.state = {
          ...this.state,
          ...e
        }, this.emit("change", this.state);
        return
      }
  }
  constructor(e) {
    super(), this.props = e, this.state = f()
  }
}