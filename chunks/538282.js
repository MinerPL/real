"use strict";
i.r(t), i.d(t, {
  openExpressionPicker: function() {
    return c
  },
  closeExpressionPicker: function() {
    return d
  },
  toggleMultiExpressionPicker: function() {
    return f
  },
  toggleExpressionPicker: function() {
    return E
  },
  setExpressionPickerView: function() {
    return m
  },
  setSearchQuery: function() {
    return I
  },
  useExpressionPickerStore: function() {
    return p
  }
});
var n = i("995008"),
  l = i.n(n),
  s = i("308503"),
  a = i("136759"),
  r = i("13030");
let o = Object.freeze({
    activeView: null,
    lastActiveView: null,
    activeViewType: null,
    searchQuery: "",
    isSearchSuggestion: !1,
    pickerId: function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
      return l(e)
    }()
  }),
  u = (0, s.default)((0, a.persist)((e, t) => o, {
    name: "expression-picker-last-active-view",
    partialize: e => ({
      lastActiveView: e.lastActiveView
    })
  })),
  c = (e, t) => {
    u.setState({
      activeView: e,
      activeViewType: t,
      lastActiveView: u.getState().activeView
    })
  },
  d = e => {
    let t = u.getState();
    if (void 0 === e || e === t.activeViewType) null !== t.activeView && u.setState({
      activeView: null,
      activeViewType: null,
      lastActiveView: t.activeView
    })
  },
  f = e => {
    let t = u.getState();
    if (null == t.activeView) {
      var i;
      c(null !== (i = t.lastActiveView) && void 0 !== i ? i : r.ExpressionPickerViewType.EMOJI, e)
    } else d()
  },
  E = (e, t) => {
    u.getState().activeView === e ? d() : c(e, t)
  },
  m = e => {
    u.setState({
      activeView: e,
      lastActiveView: u.getState().activeView
    })
  },
  I = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    u.setState({
      searchQuery: e,
      isSearchSuggestion: t
    })
  },
  p = u