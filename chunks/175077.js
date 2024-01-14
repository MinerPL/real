"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("568734"),
  d = s("241088"),
  u = s("845579"),
  c = s("49111"),
  S = s("782340"),
  E = s("926622");

function f() {
  let e = u.FriendSourceFlagsSetting.useSetting(),
    t = n.useMemo(() => (0, d.computeFlags)(e), [e]);
  return (0, a.jsx)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: S.default.Messages.FRIEND_REQUESTS,
    children: (0, a.jsxs)(r.FormSection, {
      title: S.default.Messages.FRIEND_PERMITTED_SOURCE,
      className: E.marginBottom40,
      children: [(0, a.jsx)(r.FormSwitch, {
        className: i(E.marginTop8, E.marginBottom20),
        value: t.all,
        onChange: e => u.FriendSourceFlagsSetting.updateSetting(e ? c.AllFriendSourceFlags : c.AllFriendSourceFlags & ~c.FriendSourceFlags.NO_RELATION),
        children: S.default.Messages.FRIEND_PERMITTED_SOURCE_ALL
      }), (0, a.jsx)(r.FormSwitch, {
        value: t.all || t.mutualFriends,
        onChange: t => u.FriendSourceFlagsSetting.updateSetting(t ? o.addFlag(e, c.FriendSourceFlags.MUTUAL_FRIENDS) : o.removeFlags(e, c.FriendSourceFlags.MUTUAL_FRIENDS, c.FriendSourceFlags.NO_RELATION)),
        children: S.default.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_FRIENDS
      }), (0, a.jsx)(r.FormSwitch, {
        value: t.all || t.mutualGuilds,
        onChange: t => u.FriendSourceFlagsSetting.updateSetting(t ? o.addFlag(e, c.FriendSourceFlags.MUTUAL_GUILDS) : o.removeFlags(e, c.FriendSourceFlags.MUTUAL_GUILDS, c.FriendSourceFlags.NO_RELATION)),
        children: S.default.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_GUILDS
      })]
    })
  })
}