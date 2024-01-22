"use strict";
E.r(_), E.d(_, {
  default: function() {
    return S
  }
}), E("222007");
var t = E("95410"),
  o = E("689988"),
  n = E("697218"),
  r = E("553257"),
  a = E("363613"),
  i = E("275803"),
  I = E("935583");
let s = "lastSawPomelo";
class T extends o.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen()
    }, this.onPostConnectionOpen = () => {
      if (function() {
          let e = r.experiment.getCurrentConfig({
            location: "b9eb97_1"
          }, {
            autoTrackExposure: !1
          }).enabled;
          if (!e) return !1;
          let _ = n.default.getCurrentUser();
          if (null == _ || _.isPomelo() || !_.hasVerifiedEmailOrPhone()) return !1;
          let E = t.default.get(s);
          return !(null != E && Date.now() - E < 6048e5) && !0
        }()) {
        let e = i.UUOneClickExperiment.getCurrentConfig({
            location: "uu_one_click"
          }, {
            autoTrackExposure: !1
          }).enabled,
          _ = (0, a.openPomeloModal)(I.PomeloEntrypoints.APP_START, e, !1);
        _ && t.default.set(s, Date.now())
      }
    }
  }
}
var S = new T