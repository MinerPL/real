"use strict";
E.r(_), E.d(_, {
  default: function() {
    return r
  }
}), E("222007");
var t = E("689988"),
  o = E("751520");
class n extends t.default {
  constructor(...e) {
    super(...e), this.actions = {
      USER_SETTINGS_PROTO_UPDATE: o.refreshSearchTokens,
      I18N_LOAD_SUCCESS: o.refreshSearchTokens,
      POST_CONNECTION_OPEN: o.refreshSearchTokens
    }
  }
}
var r = new n