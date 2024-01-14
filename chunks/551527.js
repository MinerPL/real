"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
}), l("424973"), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("316693"),
  i = l("446674"),
  r = l("77078"),
  o = l("851387"),
  d = l("581583"),
  u = l("549825"),
  c = l("978970"),
  f = l("766274"),
  m = l("26989"),
  I = l("79798"),
  T = l("145131"),
  N = l("449008"),
  E = l("991170"),
  h = l("782340"),
  g = l("992693");

function p(e) {
  var t;
  let {
    guild: l,
    applicationIntegration: p
  } = e, {
    application: S
  } = p, O = null != S.bot ? new f.default(S.bot) : null, _ = (0, i.useStateFromStores)([m.default], () => null != O ? m.default.getMember(l.id, O.id) : null, [O, l]), A = null == O ? void 0 : O.id;
  a.useEffect(() => {
    null != A && o.default.requestMembersById(l.id, A)
  }, [l.id, A]);
  let C = a.useMemo(() => {
    var e, t, n;
    let a = l.getRole(l.id),
      i = null !== (t = null == _ ? void 0 : null === (e = _.roles) || void 0 === e ? void 0 : e.map(e => l.getRole(e)).filter(N.isNotNullish)) && void 0 !== t ? t : [],
      r = null !== (n = null == a ? void 0 : a.permissions) && void 0 !== n ? n : E.default.NONE;
    for (let e of i) r = s.default.add(r, e.permissions);
    return r
  }, [l, _]);
  return null == O ? null : (0, n.jsx)(r.Card, {
    editable: !0,
    className: g.card,
    children: (0, n.jsxs)(T.default, {
      direction: T.default.Direction.VERTICAL,
      children: [(0, n.jsxs)(T.default, {
        align: T.default.Align.CENTER,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: O.getAvatarURL(l.id, 32),
          className: g.iconWrapper
        }), (0, n.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: h.default.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({
            user: O
          })
        }), (0, n.jsx)(I.default, {
          className: g.tag,
          verified: O.isVerifiedBot()
        })]
      }), function(e, t, l, a) {
        let i = [],
          o = [];
        for (let e of c.OrderedPermissions) s.default.has(a, e) ? i.push(e) : o.push(e);
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(r.FormDivider, {
            className: g.divider
          }), l.length > 0 ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(r.FormTitle, {
              className: g.permissionHeader,
              children: h.default.Messages.ROLES_LIST.format({
                numRoles: l.length
              })
            }), (0, n.jsx)(d.default, {
              className: g.rolePills,
              user: e,
              guild: t,
              userRoles: l,
              wrap: !1,
              readOnly: !0
            })]
          }) : null, i.length > 0 || o.length > 0 ? (0, n.jsx)(u.default, {
            className: g.permissionList,
            grantedPermissions: i,
            grantedPermissionsHeader: h.default.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
            disabledPermissions: o,
            disabledPermissionsHeader: h.default.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
          }) : null]
        })
      }(O, l, null !== (t = null == _ ? void 0 : _.roles) && void 0 !== t ? t : [], C)]
    })
  })
}