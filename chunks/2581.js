"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i = n("693566"),
  a = n.n(i),
  s = n("446674"),
  r = n("913144"),
  o = n("718517");
let u = {
    taken: null,
    error: void 0,
    rateLimited: !0
  },
  l = {
    validations: new a({
      max: 100,
      maxAge: 6e4
    }),
    currentUsernameInvalid: !1,
    retryAfterTime: null,
    suggestions: {
      migration: {
        suggestion: {
          username: void 0
        },
        fetched: !1,
        usernameSuggestionLoading: !1
      },
      registration: {
        suggestion: {
          username: void 0
        },
        source: void 0,
        fetched: !1
      }
    }
  };
class d extends s.default.Store {
  isRateLimited() {
    return null != l.retryAfterTime && Date.now() < l.retryAfterTime
  }
  validate(e) {
    let t = l.validations.get(e);
    return this.isRateLimited() && (null == t || t.rateLimited) ? u : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
  }
  registrationUsernameSuggestion() {
    return l.suggestions.registration.suggestion.username
  }
  usernameSuggestion() {
    return l.suggestions.migration.suggestion.username
  }
  usernameSuggestionLoading() {
    return l.suggestions.migration.usernameSuggestionLoading
  }
  isCurrentUsernameInvalid() {
    return l.currentUsernameInvalid
  }
  wasRegistrationSuggestionFetched(e) {
    return l.suggestions.registration.source === e && l.suggestions.registration.fetched
  }
  wasSuggestionsFetched() {
    return l.suggestions.migration.fetched
  }
}
d.displayName = "PomeloStore";
var g = new d(r.default, {
  POMELO_ATTEMPT_SUCCESS: function(e) {
    let {
      username: t,
      taken: n
    } = e;
    l.validations.set(t, {
      taken: n
    })
  },
  POMELO_ATTEMPT_FAILURE: function(e) {
    let {
      username: t,
      error: n,
      statusCode: i,
      retryAfter: a
    } = e;
    429 === i ? l.validations.set(t, {
      taken: null,
      error: n,
      rateLimited: !0
    }, (null != a ? a : 7) * o.default.Millis.SECOND) : l.validations.set(t, {
      taken: null,
      error: n
    }), null != a && (l.retryAfterTime = Date.now() + a * o.default.Millis.SECOND)
  },
  POMELO_SUGGESTIONS_RESET: function() {
    l.suggestions.migration = {
      suggestion: {
        username: void 0
      },
      fetched: !1,
      usernameSuggestionLoading: !1
    }, l.suggestions.registration = {
      suggestion: {
        username: void 0
      },
      source: void 0,
      fetched: !1
    }
  },
  POMELO_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t
    } = e;
    l.suggestions.migration = {
      suggestion: t,
      fetched: !0,
      usernameSuggestionLoading: !1
    }, (null == t ? void 0 : t.invalid_current_username) === !0 && (l.currentUsernameInvalid = !0)
  },
  POMELO_SUGGESTIONS_FETCH: function(e) {
    let {
      usernameSuggestionLoading: t
    } = e;
    l.suggestions.migration.usernameSuggestionLoading = t
  },
  POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t,
      source: n
    } = e;
    l.suggestions.registration = {
      suggestion: t,
      source: n,
      fetched: !0
    }, (null == t ? void 0 : t.username) != null && l.validations.set(t.username, {
      taken: !1
    })
  }
})