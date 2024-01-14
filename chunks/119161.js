"use strict";
a.r(t), a.d(t, {
  makeEmptyTitleError: function() {
    return u
  },
  makeEmptyMessageError: function() {
    return d
  },
  makeAutomodViolationError: function() {
    return c
  },
  renderError: function() {
    return m
  }
});
var s, n, l = a("600798"),
  r = a("782340");

function i(e, t) {
  return {
    type: e,
    message: null != t ? t : null
  }
}

function o(e) {
  return i(0, e)
}

function u() {
  return i(0, r.default.Messages.FORUM_POST_EMPTY_TITLE_ERROR)
}

function d() {
  return i(0, r.default.Messages.FORUM_POST_EMPTY_MESSAGE_ERROR)
}

function c(e, t) {
  return i(1, (0, l.getAutomodErrorMessageFromErrorResponse)(e, null == t ? void 0 : t.id))
}

function m(e, t) {
  var a;
  return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 || 2 === e.type && null != t.tags && t.tags.length > 0 ? null : null !== (a = e.message) && void 0 !== a ? a : null
}(s = n || (n = {}))[s.EmptyContent = 0] = "EmptyContent", s[s.AutomodViolation = 1] = "AutomodViolation", s[s.EmptyTags = 2] = "EmptyTags"