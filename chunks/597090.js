"use strict";
E.r(_), E.d(_, {
  default: function() {
    return I
  }
}), E("222007");
var t = E("823411"),
  o = E("568131"),
  n = E("689988"),
  r = E("686470"),
  i = E("773336");
class a extends n.default {
  handlePostConnectionOpen() {
    (0, i.isDesktop)() && (!r.default.fetched && (0, o.fetchLibrary)(), t.default.getDetectableGames())
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    }
  }
}
var I = new a