"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
}), l("424973");
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("77078"),
  i = l("851387"),
  r = l("477566"),
  o = l("70919"),
  d = l("861370"),
  u = l("957255"),
  c = l("228220"),
  f = l("893455"),
  m = l("782340");

function I(e, t) {
  var l;
  let I = (0, a.useStateFromStores)([u.default], () => {
      let l = u.default.getHighestRole(e);
      return !u.default.isRoleHigher(e, l, t)
    }),
    T = [],
    N = (0, f.default)(e, t);
  null != N && T.push(N);
  let E = (0, d.default)({
    id: t.id,
    label: m.default.Messages.COPY_ID_ROLE
  });
  null != E && T.push(E);
  let h = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) === null,
    g = t.managed && !h,
    p = null != t && t.id === e.id;
  return !I && !g && !p && T.push((0, n.jsx)(s.MenuGroup, {
    children: (0, n.jsx)(s.MenuItem, {
      id: "delete-role",
      label: m.default.Messages.DELETE,
      color: "danger",
      icon: c.default,
      action: () => {
        r.default.show({
          title: m.default.Messages.SETTINGS_ROLES_DELETE_TITLE,
          body: m.default.Messages.SETTINGS_ROLES_DELETE_BODY.format({
            name: t.name
          }),
          cancelText: m.default.Messages.CANCEL,
          onConfirm: async () => {
            h && await (0, o.putRoleConnectionsConfigurations)(e.id, t.id, []), i.default.deleteRole(e.id, t.id)
          }
        })
      }
    })
  }, "delete-role")), T
}