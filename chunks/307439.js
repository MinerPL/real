"use strict";
n.r(t), n.d(t, {
  setPromoEmailConsentState: function() {
    return l
  },
  setPromoEmailConsentChecked: function() {
    return a
  },
  usePromoEmailConsentStore: function() {
    return i
  }
});
var s = n("308503");
let o = (0, s.default)(() => ({
    required: !1,
    checked: !1,
    preChecked: !1
  })),
  l = e => {
    o.setState(e)
  },
  a = e => {
    o.setState({
      checked: e
    })
  },
  i = o