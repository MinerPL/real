"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var l = s("37983");
s("884691");
var i = s("257869"),
  r = s("837008"),
  a = s("167109"),
  n = s("176687"),
  d = s("430780"),
  o = s("904698"),
  u = s("900076"),
  c = s("108314"),
  C = s("49111"),
  _ = s("854771");

function f(e) {
  var t;
  let {
    guildId: s
  } = e, i = (0, r.useGroupListingsForGuild)(s)[0], {
    editStateIds: f
  } = a.useEditStateIds(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null, s), {
    activeSubscription: h
  } = (0, n.default)(null == i ? void 0 : i.id);
  return (0, l.jsxs)("div", {
    className: _.container,
    children: [null != i ? (0, l.jsx)(d.default, {
      groupListingId: i.id,
      subscription: h
    }) : null, (0, l.jsx)(o.default, {
      subscription: h
    }), (0, l.jsx)(u.default, {
      guildId: s,
      children: f.map(e => {
        var t;
        return (0, l.jsx)(c.default, {
          guildId: s,
          groupListingId: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : "",
          listingId: e,
          analyticsLocation: C.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
        }, e)
      })
    })]
  })
}

function h(e) {
  let {
    guildId: t
  } = e;
  return (0, l.jsx)(i.GroupListingsFetchContextProvider, {
    guildId: t,
    refetchOnMount: !0,
    children: (0, l.jsx)(f, {
      guildId: t
    })
  })
}