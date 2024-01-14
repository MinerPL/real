"use strict";
n.r(t), n.d(t, {
  sortList: function() {
    return s
  },
  updateLibraryFilter: function() {
    return i
  },
  updateActiveRowKey: function() {
    return l
  }
});
var a = n("913144");

function s(e, t) {
  a.default.dispatch({
    type: "LIBRARY_TABLE_SORT_UPDATE",
    key: e,
    direction: t
  })
}

function i(e) {
  a.default.dispatch({
    type: "LIBRARY_APPLICATION_FILTER_UPDATE",
    query: e
  })
}

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  a.default.dispatch({
    type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE",
    key: e,
    isKeyboardEvent: t
  })
}