"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i, r = n("666038"),
  s = n("782340");
i = class e extends r.default {
  static createFromServer(t) {
    return new e({
      id: t.id,
      liveBuildId: t.live_build_id,
      name: t.name
    })
  }
  getName(e) {
    return null != this.name ? this.name : this.id === e ? s.default.Messages.APPLICATION_BRANCH_NAME_MASTER : s.default.Messages.APPLICATION_BRANCH_NAME_UNKNOWN
  }
  constructor(e) {
    super(), this.id = e.id, this.liveBuildId = e.liveBuildId, this.name = e.name
  }
}