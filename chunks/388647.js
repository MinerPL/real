"use strict";
l.r(e), l.d(e, {
  FetchState: function() {
    return i
  },
  default: function() {
    return r
  }
});
var a, i, n = l("693566"),
  I = l.n(n),
  c = l("446674"),
  u = l("913144");

function o(t) {
  let {
    applicationId: e,
    guildId: l,
    page: a
  } = t;
  return "applicationId:".concat(e, " guildId:").concat(l, " page:").concat(a)
}(a = i || (i = {}))[a.NOT_FETCHED = 0] = "NOT_FETCHED", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.ERROR = 3] = "ERROR";
let d = new I({
    max: 20
  }),
  T = {};
class C extends c.default.Store {
  getSimilarApplications(t) {
    let {
      applicationId: e,
      guildId: l,
      page: a
    } = t;
    if (null == e) return;
    let i = o({
      applicationId: e,
      guildId: l,
      page: a
    });
    return d.get(i)
  }
  getFetchState(t) {
    let {
      applicationId: e,
      guildId: l,
      page: a
    } = t;
    if (null == e) return;
    let i = o({
      applicationId: e,
      guildId: l,
      page: a
    });
    return T[i]
  }
}
C.displayName = "ApplicationDirectorySimilarApplicationsStore";
var r = new C(u.default, {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(t) {
    let {
      applicationId: e,
      guildId: l,
      page: a
    } = t, i = o({
      applicationId: e,
      guildId: l,
      page: a
    });
    T = {
      ...T,
      [i]: 1
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(t) {
    let {
      applicationId: e,
      guildId: l,
      similarApplications: a,
      loadId: i,
      page: n,
      totalPages: I
    } = t, c = o({
      applicationId: e,
      guildId: l,
      page: n
    });
    d.set(c, {
      lastFetchTimeMs: Date.now(),
      applications: a,
      loadId: i,
      page: n,
      totalPages: I
    }), T = {
      ...T,
      [c]: 2
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(t) {
    let {
      applicationId: e,
      guildId: l,
      page: a
    } = t, i = o({
      applicationId: e,
      guildId: l,
      page: a
    });
    T = {
      ...T,
      [i]: 3
    }
  }
})