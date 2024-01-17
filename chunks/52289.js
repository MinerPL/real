"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var s = n("913144"),
  l = {
    setEnabled(e) {
      this.update({
        enabled: e
      })
    },
    update(e) {
      for (let t of Object.keys(e)) s.default.dispatch({
        type: "STREAMER_MODE_UPDATE",
        key: t,
        value: e[t]
      })
    }
  }