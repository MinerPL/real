"use strict";
n.r(t), n.d(t, {
  categoryCollapse: function() {
    return s
  },
  categoryExpand: function() {
    return a
  },
  categoryCollapseAll: function() {
    return l
  },
  categoryExpandAll: function() {
    return u
  }
});
var i = n("913144");

function s(e) {
  i.default.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function a(e) {
  i.default.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function l(e) {
  i.default.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function u(e) {
  i.default.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}