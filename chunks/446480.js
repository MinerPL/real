"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("482402"),
  l = n("42203"),
  a = n("349778"),
  s = n("688169"),
  r = new class e {
    constructor() {
      this.filterTagIds = null, this.sortOrder = null, this.layout = null, this.setFilterTagIds = e => {
        this.filterTagIds = e
      }, this.setSortOrder = e => {
        this.sortOrder = e
      }, this.setLayout = e => {
        this.layout = e
      }, this.getFilterTagIdsAnalytics = () => null != this.filterTagIds ? Array.from(this.filterTagIds) : [], this.getSortOrderAnalytics = e => {
        var t, n;
        return null !== (n = this.sortOrder) && void 0 !== n ? n : null === (t = l.default.getChannel(e)) || void 0 === t ? void 0 : t.getDefaultSortOrder()
      }, this.getLayoutAnalytics = e => {
        var t;
        let n = l.default.getChannel(e),
          r = null !== (t = this.layout) && void 0 !== t ? t : null == n ? void 0 : n.getDefaultLayout(),
          u = (0, a.isForumActivityExperimentEnabled)(null == n ? void 0 : n.guild_id),
          d = u && r === i.ForumLayout.LIST ? s.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : r;
        return d
      }
    }
  }