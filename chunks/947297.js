"use strict";
n.r(t), n.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return l
  },
  default: function() {
    return r
  }
});
var r, i = n("376556"),
  s = n("653047");
let l = "xbox:";
r = class extends s.default {
  getIconURL() {
    return i.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(l).concat(e.name), this.name = e.name
  }
}