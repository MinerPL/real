"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
});
var i = a("37983"),
  n = a("884691"),
  l = a("77078"),
  d = a("349649"),
  u = a("401642"),
  s = a("271938"),
  o = a("102985"),
  r = a("599110"),
  c = a("49111"),
  f = a("590456"),
  I = a("782340");

function p(e) {
  let {
    user: t,
    guildId: a,
    context: p
  } = e, {
    id: T
  } = t, {
    loading: A,
    note: S
  } = (0, d.default)(T), v = !A && null != S && S.length > 0, _ = p === c.AppContext.POPOUT, m = n.useContext(r.AnalyticsContext);
  return T === s.default.getId() || o.default.hidePersonalInformation || _ ? null : (0, i.jsx)(l.MenuItem, {
    id: "note",
    label: A ? I.default.Messages.LOADING_NOTE : v ? I.default.Messages.EDIT_NOTE : I.default.Messages.ADD_NOTE,
    action: () => {
      (0, u.openUserProfileModal)({
        userId: t.id,
        section: f.UserProfileSections.USER_INFO,
        guildId: a,
        autoFocusNote: !0,
        analyticsLocation: m.location
      })
    }
  })
}