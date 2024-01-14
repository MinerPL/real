"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  i = l("77078"),
  r = l("272030"),
  o = l("85027"),
  u = l("33942"),
  d = l("252063"),
  c = l("42203"),
  f = l("18494"),
  m = l("191814"),
  p = l("758710"),
  E = l("351825"),
  T = l("306160"),
  _ = l("253981"),
  S = l("613676"),
  h = l("49111"),
  I = l("782340"),
  A = l("834680");

function g(e) {
  var t;
  let {
    application: l,
    className: a
  } = e, g = c.default.getChannel(f.default.getChannelId()), {
    appsInGDMEnabled: v,
    availableApplications: C
  } = (0, d.usePrivateChannelIntegrationState)({
    channelId: null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : ""
  });
  if (null == l || !(0, S.canInstallApplication)(l.id, l.customInstallUrl, l.installParams)) return null;
  let N = v && null != C.find(e => e.id === (null == l ? void 0 : l.id));
  return (0, n.jsx)(i.Button, {
    color: i.Button.Colors.PRIMARY,
    look: i.Button.Looks.FILLED,
    size: i.Button.Sizes.SMALL,
    onContextMenu: T.SUPPORTS_COPY ? e => {
      var t, a;
      let s = (0, o.getApplicationInstallURL)({
        id: l.id,
        custom_install_url: null !== (t = l.customInstallUrl) && void 0 !== t ? t : void 0,
        install_params: null !== (a = l.installParams) && void 0 !== a ? a : void 0
      });
      (0, r.openContextMenu)(e, e => (0, n.jsx)(i.Menu, {
        navId: "component-button",
        onClose: r.closeContextMenu,
        "aria-label": I.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, n.jsx)(i.MenuGroup, {
          children: (0, n.jsx)(i.MenuItem, {
            id: "copy",
            label: I.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS_COPY,
            action: () => (0, T.copy)(s)
          })
        })
      }))
    } : void 0,
    onClick: () => {
      N ? (0, u.openOAuth2Modal)({
        clientId: l.id,
        scopes: [h.OAuth2Scopes.APPLICATIONS_COMMANDS],
        channelId: g.id,
        disableGuildSelect: !0
      }) : (0, S.installApplication)({
        applicationId: l.id,
        customInstallUrl: l.customInstallUrl,
        installParams: l.installParams
      })
    },
    className: s(A.applicationInstallButton, a),
    children: (0, n.jsxs)("div", {
      className: A.applicationInstallButtonContent,
      children: [(0, n.jsx)(E.default, {
        width: 16,
        height: 16
      }), (0, n.jsx)(m.default, {
        size: 4,
        horizontal: !0
      }), (0, n.jsx)("span", {
        className: A.applicationInstallButtonText,
        children: N ? I.default.Messages.ADD : I.default.Messages.APPLICATION_ADD_BUTTON
      }), null == l.customInstallUrl || _.default.isDiscordUrl(l.customInstallUrl) ? null : (0, n.jsx)(p.default, {
        className: A.launchIcon,
        width: 16,
        height: 16
      })]
    })
  })
}