"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("77078"),
  n = s("567054"),
  u = s("782340"),
  r = function(e) {
    let {
      className: t,
      sortOrder: s,
      onSortChange: r
    } = e, o = l.useMemo(() => [{
      value: n.GuildJoinRequestSortOrders.TIMESTAMP_DESC,
      label: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST
    }, {
      value: n.GuildJoinRequestSortOrders.TIMESTAMP_ASC,
      label: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST
    }], []);
    return (0, a.jsx)(i.SingleSelect, {
      className: t,
      onChange: r,
      value: s,
      options: o
    })
  }