"use strict";
s.r(t), s.d(t, {
  default: function() {
    return w
  }
});
var l = s("37983"),
  a = s("884691"),
  n = s("446674"),
  i = s("77078"),
  r = s("913144"),
  o = s("18054"),
  d = s("54239"),
  u = s("800751"),
  c = s("534291"),
  h = s("575351"),
  E = s("716241"),
  f = s("679653"),
  m = s("419830"),
  g = s("817653"),
  T = s("300322"),
  S = s("161778"),
  N = s("233069"),
  C = s("161810"),
  _ = s("901998"),
  p = s("492114"),
  M = s("42203"),
  x = s("957255"),
  R = s("27618"),
  I = s("697218"),
  A = s("228220"),
  O = s("659500"),
  L = s("291013"),
  v = s("995553"),
  j = s("823362"),
  D = s("173446"),
  y = s("49111"),
  F = s("782340"),
  b = s("160659");

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    s = arguments.length > 2 ? arguments[2] : void 0;
  E.default.trackWithMetadata(y.AnalyticEvents.SETTINGS_PANE_VIEWED, {
    settings_type: "channel",
    origin_pane: t,
    destination_pane: e,
    location: s
  })
}
class H extends a.PureComponent {
  componentDidMount() {
    P(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    r.default.wait(() => (0, o.close)())
  }
  componentDidUpdate(e) {
    let {
      formState: t,
      section: s
    } = e, {
      formState: l,
      section: a,
      canManageRoles: n,
      canManageChannels: i,
      canManageWebhooks: r
    } = this.props;
    (i || n || r) && (l !== y.FormStates.CLOSED || l === t) && (n || a !== y.ChannelSettingsSections.PERMISSIONS) && (r || a !== y.ChannelSettingsSections.INTEGRATIONS) ? a !== s && P(a, s): (0, d.popLayer)()
  }
  render() {
    let {
      theme: e,
      sidebarTheme: t,
      section: s,
      channel: a,
      category: n,
      canManageRoles: r,
      canManageChannels: E,
      canDeleteChannels: T,
      canManageWebhooks: S
    } = this.props;
    return null == a ? null : (0, l.jsx)(u.default, {
      theme: e,
      sidebarTheme: t,
      section: null != s ? s : y.ChannelSettingsSections.OVERVIEW,
      onSetSection: o.setSection,
      onClose: d.popLayer,
      sections: function(e) {
        let {
          channel: t,
          category: s,
          canManageRoles: a,
          canManageChannels: n,
          canDeleteChannels: r,
          canManageWebhooks: u
        } = e, E = (0, m.getChannelIconComponent)(t), {
          GUILD_CATEGORY: T
        } = y.ChannelTypes, S = N.THREAD_CHANNEL_TYPES.has(t.type), M = t.type === T ? F.default.Messages.DELETE_CATEGORY : S ? t.isForumPost() ? F.default.Messages.DELETE_FORUM_POST : F.default.Messages.DELETE_THREAD : F.default.Messages.DELETE_CHANNEL;
        return [{
          section: c.SectionTypes.HEADER,
          label: null != t ? (0, l.jsxs)(l.Fragment, {
            children: [null != E ? (0, l.jsx)(E, {
              width: 12,
              height: 12,
              className: b.channelIcon
            }) : null, (0, f.computeChannelName)(t, I.default, R.default), null != s ? (0, l.jsx)(i.Text, {
              tag: "span",
              variant: "text-xs/semibold",
              color: "header-secondary",
              lineClamp: 1,
              className: b.category,
              children: (0, f.computeChannelName)(s, I.default, R.default)
            }) : null]
          }) : F.default.Messages.CHANNEL_SETTINGS
        }, {
          section: y.ChannelSettingsSections.OVERVIEW,
          label: F.default.Messages.OVERVIEW,
          ariaLabel: F.default.Messages.OVERVIEW,
          element: j.default,
          notice: {
            element: j.ChannelSettingsOverviewNotice,
            stores: [p.default]
          }
        }, {
          section: y.ChannelSettingsSections.PERMISSIONS,
          label: F.default.Messages.PERMISSIONS,
          element: g.default,
          notice: {
            element: D.ChannelSettingsPermissionsNotice,
            stores: [_.default]
          },
          predicate: () => a && !S
        }, {
          section: y.ChannelSettingsSections.INSTANT_INVITES,
          label: F.default.Messages.INVITES,
          element: v.default,
          type: c.ContentTypes.CUSTOM,
          predicate: () => t.type !== T && n && !S
        }, {
          section: y.ChannelSettingsSections.INTEGRATIONS,
          label: F.default.Messages.INTEGRATIONS_OVERVIEW,
          ariaLabel: F.default.Messages.INTEGRATIONS_OVERVIEW,
          element: L.default,
          notice: {
            stores: [C.default],
            element: L.ChannelSettingsIntegrationsNotice
          },
          predicate: () => !!u && N.GUILD_WEBHOOK_CHANNEL_TYPES.has(t.type)
        }, {
          section: c.SectionTypes.DIVIDER
        }, {
          section: y.ChannelSettingsSections.DELETE,
          onClick() {
            (0, i.openModal)(e => (0, l.jsx)(h.default, {
              ...e,
              onConfirm: () => {
                e.onClose(), O.ComponentDispatch.subscribeOnce(y.ComponentActions.LAYER_POP_COMPLETE, () => {
                  (0, o.deleteChannel)(t.id)
                }), (0, d.popLayer)()
              },
              channel: t
            }))
          },
          label: M,
          ariaLabel: M,
          icon: (0, l.jsx)(A.default, {
            width: 16,
            height: 16
          }),
          predicate: () => r
        }]
      }({
        channel: a,
        category: n,
        canManageRoles: r,
        canManageChannels: E,
        canDeleteChannels: T,
        canManageWebhooks: S
      })
    })
  }
}

function w() {
  let {
    channel: e,
    analyticsLocation: t
  } = (0, n.useStateFromStoresObject)([p.default], () => p.default.getProps()), s = (0, n.useStateFromStores)([p.default], () => p.default.getFormState()), a = (0, n.useStateFromStores)([p.default], () => p.default.getSection()), i = (0, n.useStateFromStores)([S.default], () => S.default.theme), r = (0, n.useStateFromStores)([S.default], () => S.default.darkSidebar ? y.ThemeTypes.DARK : void 0), o = (0, T.useCanManageThread)(e), d = (0, T.useIsThreadModerator)(e), {
    canManageChannels: u,
    canManageRoles: c,
    canManageWebhooks: h
  } = (0, n.useStateFromStoresObject)([x.default], () => ({
    canManageChannels: x.default.can(y.Permissions.MANAGE_CHANNELS, e),
    canManageRoles: null != e && x.default.can(y.Permissions.MANAGE_ROLES, e),
    canManageWebhooks: null != e && x.default.can(y.Permissions.MANAGE_WEBHOOKS, e)
  })), E = (0, n.useStateFromStores)([M.default], () => M.default.getChannel(null == e ? void 0 : e.parent_id));
  return (0, l.jsx)(H, {
    channel: e,
    category: E,
    canManageChannels: (null == e ? void 0 : e.isThread()) ? o : u,
    canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : u,
    canManageRoles: c,
    canManageWebhooks: h,
    formState: s,
    theme: i,
    sidebarTheme: r,
    section: a,
    analyticsLocation: t
  })
}