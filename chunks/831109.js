"use strict";
l.r(e), l.d(e, {
  default: function() {
    return u
  }
});
var a = l("446674"),
  i = l("913144");
let n = [],
  I = null;
class c extends a.default.Store {
  getLastFetchTimeMs() {
    return I
  }
  getCategories() {
    return n
  }
}
c.displayName = "ApplicationDirectoryCategoriesStore";
var u = new c(i.default, {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(t) {
    let {
      categories: e
    } = t;
    n = e, I = Date.now()
  }
})