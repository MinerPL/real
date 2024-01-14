"use strict";
a.r(s), a.d(s, {
  default: function() {
    return c
  }
}), a("424973"), a("222007");
var n = a("37983");
a("884691");
var i = a("316693"),
  l = a("77078"),
  r = a("549825"),
  t = a("978970"),
  d = a("782340"),
  o = a("871213");

function c(e) {
  let {
    defaultMemberPermissions: s,
    onClose: a,
    transitionState: c
  } = e, u = [];
  for (let e of t.OrderedPermissions) i.default.has(s, e) && u.push(e);
  return (0, n.jsxs)(l.ModalRoot, {
    size: l.ModalSize.DYNAMIC,
    "aria-label": d.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_ARIA_LABEL,
    transitionState: c,
    children: [(0, n.jsx)(l.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)(l.Heading, {
        className: o.header,
        variant: "heading-xl/semibold",
        children: d.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_HEADER
      })
    }), (0, n.jsx)(l.ModalContent, {
      children: (0, n.jsx)(r.default, {
        className: o.permissionList,
        grantedPermissions: u
      })
    }), (0, n.jsx)(l.ModalFooter, {
      className: o.footer,
      children: (0, n.jsx)(l.Button, {
        size: l.ButtonSizes.MEDIUM,
        onClick: a,
        color: l.ButtonColors.BRAND,
        children: d.default.Messages.DONE
      })
    })]
  })
}