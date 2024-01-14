"use strict";
let i, r;
n.r(t), n.d(t, {
  updateIsInTabsUI: function() {
    return c
  },
  updateIsInNewPanels: function() {
    return d
  }
});
var s = n("411916"),
  a = n("827032"),
  o = n("599110"),
  l = n("286235");

function u() {
  let e = i ? r ? s.DesignIds.DESIGN_TABS_IA : s.DesignIds.DESIGN_IA : s.DesignIds.CLASSIC_IA;
  o.default.extendSuperProperties({
    design_id: e
  }), a.addGlobalTag("design_id", e), l.default.setTags({
    design_id: "".concat(e)
  })
}

function c(e) {
  i !== e && (i = e, u())
}

function d(e) {
  r !== e && (r = e, u())
}