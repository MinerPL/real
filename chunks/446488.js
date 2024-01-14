"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("446674"),
  r = n("913144");
let l = {
  fetched: !1,
  affinities: []
};
class s extends i.default.Store {
  get hasFetched() {
    return l.fetched
  }
  get affinities() {
    return l.affinities
  }
}
var a = new s(r.default, {
  BILLING_NITRO_AFFINITY_FETCHED: function(e) {
    let {} = e;
    l.fetched = !0
  },
  BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
    let {
      res: t
    } = e;
    l.affinities = t
  }
})