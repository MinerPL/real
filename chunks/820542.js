"use strict";
n.r(t), n.d(t, {
  categoryCollapse: function() {
    return r
  },
  categoryExpand: function() {
    return l
  },
  categoryCollapseAll: function() {
    return a
  },
  categoryExpandAll: function() {
    return s
  }
});
var i = n("913144");

function r(e) {
  i.default.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function l(e) {
  i.default.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function a(e) {
  i.default.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function s(e) {
  i.default.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}