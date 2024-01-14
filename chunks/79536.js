"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Q
  }
}), s("424973"), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  i = s.n(l),
  o = s("316693"),
  r = s("446674"),
  d = s("669491"),
  u = s("819855"),
  c = s("77078"),
  E = s("402309"),
  _ = s("679653"),
  N = s("292418"),
  f = s("592407"),
  I = s("766419"),
  T = s("900938"),
  L = s("610903"),
  m = s("978970"),
  M = s("161778"),
  O = s("923959"),
  p = s("305961"),
  S = s("27618"),
  C = s("697218"),
  x = s("476765"),
  h = s("578706"),
  A = s("68238"),
  g = s("599110"),
  R = s("991170"),
  v = s("730541"),
  U = s("69741"),
  D = s("49111"),
  b = s("782340"),
  j = s("291683"),
  y = s("741161"),
  P = s("687444"),
  B = s("492094"),
  F = s("300933"),
  G = s("499474"),
  Y = s("576285"),
  w = s("175717");
let k = e => {
    let {
      guild: t,
      onAcceptVerificationLevel: s,
      onAcceptContentFilter: a,
      disableContentFilter: l,
      disableVerificationLevel: i,
      headerId: o,
      theme: d
    } = e, E = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(t.id), [t.id]), _ = null != E && E.verificationLevel > D.VerificationLevels.NONE, N = (null == E ? void 0 : E.explicitContentFilter) === D.GuildExplicitContentFilterTypes.ALL_MEMBERS, f = (0, u.isThemeDark)(d) ? G : Y;
    return (0, n.jsxs)("div", {
      className: j.container,
      children: [(0, n.jsxs)("div", {
        className: j.content,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: f,
          width: 80
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          className: j.header,
          id: o,
          children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER
        }), (0, n.jsx)(c.Text, {
          color: "none",
          variant: "text-md/normal",
          className: j.headerCaption,
          children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY
        })]
      }), (0, n.jsxs)("div", {
        className: j.form,
        children: [(0, n.jsx)(c.FormTitle, {
          children: b.default.Messages.FORM_LABEL_VERIFICATION_LEVEL
        }), (0, n.jsx)(c.FormText, {
          type: c.FormTextTypes.DESCRIPTION,
          className: j.description,
          children: _ ? b.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET : b.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP
        }), (0, n.jsx)(c.Checkbox, {
          type: c.Checkbox.Types.ROW,
          disabled: i,
          value: t.verificationLevel > D.VerificationLevels.NONE,
          onChange: s,
          children: (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: b.default.Messages.ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION
          })
        })]
      }), (0, n.jsxs)("div", {
        className: j.form,
        children: [(0, n.jsx)(c.FormTitle, {
          children: b.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER
        }), (0, n.jsx)(c.FormText, {
          type: c.FormTextTypes.DESCRIPTION,
          className: j.description,
          children: N ? b.default.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET : b.default.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP
        }), (0, n.jsx)(c.Checkbox, {
          type: c.Checkbox.Types.ROW,
          disabled: l,
          value: t.explicitContentFilter === D.GuildExplicitContentFilterTypes.ALL_MEMBERS,
          onChange: a,
          children: (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: b.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH
          })
        })]
      })]
    })
  },
  H = e => {
    let {
      selectableChannels: t,
      onRuleChannelChange: s,
      ruleChannel: l,
      onPublicUpdatesChannelChange: i,
      publicUpdatesChannel: o,
      headerId: r,
      theme: d,
      guildId: E
    } = e;
    a.useEffect(() => {
      (0, v.trackEnableCommunityFlow)({
        fromStep: U.EnableCommunityModalSteps.SAFETY_CHECK,
        toStep: U.EnableCommunityModalSteps.BASICS,
        guildId: E
      })
    }, [E]);
    let _ = (0, u.isThemeDark)(d) ? y : P;
    return (0, n.jsxs)("div", {
      className: j.container,
      children: [(0, n.jsxs)("div", {
        className: j.content,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: _,
          width: 80
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          className: j.header,
          id: r,
          children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER
        }), (0, n.jsx)(c.Text, {
          color: "none",
          variant: "text-md/normal",
          className: j.headerCaption,
          children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY
        })]
      }), (0, n.jsxs)("div", {
        className: j.form,
        children: [(0, n.jsx)(c.FormTitle, {
          children: b.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE
        }), (0, n.jsx)(c.FormText, {
          type: c.FormTextTypes.DESCRIPTION,
          className: j.description,
          children: b.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP
        }), (0, n.jsx)(c.SearchableSelect, {
          options: t,
          onChange: s,
          value: l,
          maxVisibleItems: 4
        })]
      }), (0, n.jsxs)("div", {
        className: j.form,
        children: [(0, n.jsx)(c.FormTitle, {
          children: b.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
        }), (0, n.jsx)(c.FormText, {
          type: c.FormTextTypes.DESCRIPTION,
          className: j.description,
          children: b.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
        }), (0, n.jsx)(c.SearchableSelect, {
          options: t,
          onChange: i,
          value: o,
          popoutPosition: "top",
          maxVisibleItems: 4
        })]
      })]
    })
  },
  V = e => {
    let {
      guild: t,
      policyAccepted: s,
      everyoneRolePermissionsAccepted: l,
      onAcceptPolicy: o,
      onAcceptDefaultNotifications: r,
      onAcceptEveryoneRolePermissions: d,
      disableDefaultNotifications: E,
      disableEveryoneRolePermissions: _,
      headerId: f,
      theme: I
    } = e, T = (0, u.isThemeDark)(I) ? B : F;
    a.useEffect(() => {
      (0, v.trackEnableCommunityFlow)({
        fromStep: U.EnableCommunityModalSteps.BASICS,
        toStep: U.EnableCommunityModalSteps.FINISH,
        guildId: t.id
      })
    }, [t.id]);
    let L = (0, N.default)(null == t ? void 0 : t.id);
    return (0, n.jsxs)("div", {
      className: j.container,
      children: [(0, n.jsxs)("div", {
        className: j.content,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: T,
          width: 80
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          className: j.header,
          id: f,
          children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
        }), (0, n.jsx)(c.Text, {
          color: "none",
          variant: "text-md/normal",
          className: j.headerCaption,
          children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY
        })]
      }), (0, n.jsx)("div", {
        className: j.form,
        children: (0, n.jsx)(c.Tooltip, {
          text: E ? b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
          "aria-label": !!E && b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
          children: e => (0, n.jsx)("div", {
            ...e,
            children: (0, n.jsx)(c.Checkbox, {
              type: c.Checkbox.Types.ROW,
              disabled: E,
              value: t.defaultMessageNotifications === D.UserNotificationSettings.ONLY_MENTIONS,
              onChange: r,
              className: i({
                [j.disabled]: E
              }),
              children: (0, n.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                  infoHook: () => (0, n.jsx)(c.Tooltip, {
                    text: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                    "aria-label": b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                    children: e => (0, n.jsx)(A.default, {
                      className: j.icon,
                      ...e
                    })
                  })
                })
              })
            })
          })
        })
      }), (0, n.jsx)(c.Tooltip, {
        text: _ ? b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
        "aria-label": !!_ && b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
        children: e => (0, n.jsx)("div", {
          ...e,
          className: j.checkboxOption,
          children: (0, n.jsx)(c.Checkbox, {
            type: c.Checkbox.Types.ROW,
            disabled: _,
            value: l,
            onChange: d,
            className: i({
              [j.disabled]: _
            }),
            children: (0, n.jsx)(c.Text, {
              variant: "text-sm/normal",
              children: b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format({
                infoHook: () => (0, n.jsx)(c.Tooltip, {
                  text: b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                  "aria-label": b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                  children: e => (0, n.jsx)(A.default, {
                    className: j.icon,
                    ...e
                  })
                })
              })
            })
          })
        })
      }), (0, n.jsxs)("div", {
        className: j.form,
        children: [(0, n.jsx)(c.FormTitle, {
          children: b.default.Messages.PUBLIC_GUILD_POLICY_TITLE
        }), (0, n.jsx)(c.FormText, {
          type: c.FormTextTypes.DESCRIPTION,
          className: j.description,
          children: L
        }), (0, n.jsx)(c.Checkbox, {
          type: c.Checkbox.Types.ROW,
          value: s,
          onChange: o,
          children: (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: b.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT
          })
        })]
      })]
    })
  };

function W(e) {
  let {
    guild: t
  } = e, s = t.getRole(t.id);
  if (null == s) return null;
  let {
    name: a,
    color: l
  } = s;
  return (0, n.jsx)("div", {
    className: j.role,
    children: (0, n.jsxs)("span", {
      className: j.roleRow,
      children: [(0, n.jsx)(c.RoleDot, {
        className: j.roleDot,
        color: l.toString(),
        background: !1,
        tooltip: !1
      }), (0, n.jsx)(c.Text, {
        className: j.roleName,
        variant: "text-sm/medium",
        color: "interactive-active",
        children: a
      })]
    })
  })
}

function z(e) {
  let {
    enabledPermissions: t,
    onGetPermisisonName: s
  } = e;
  return (0, n.jsxs)("div", {
    className: j.tableContainer,
    children: [(0, n.jsx)(c.Text, {
      className: j.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: b.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
    }), (0, n.jsx)("div", {
      className: j.permissionsTable,
      children: t.map((e, t) => (0, n.jsxs)("div", {
        className: j.permissionRow,
        children: [(0, n.jsx)("div", {
          className: j.bulletWarning
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: s(e)
        })]
      }, t))
    })]
  })
}

function K(e) {
  let {
    disabledPermissions: t,
    onGetPermisisonName: s
  } = e, a = b.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
  return t.length === U.MODERATOR_PERMISSIONS.length && (a = b.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED), (0, n.jsxs)("div", {
    className: j.tableContainer,
    children: [(0, n.jsx)(c.Text, {
      className: j.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: a
    }), (0, n.jsx)("div", {
      className: j.permissionsTable,
      children: t.map((e, t) => (0, n.jsxs)("div", {
        className: j.permissionRow,
        children: [(0, n.jsx)("div", {
          className: j.bullet
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: s(e)
        })]
      }, t))
    })]
  })
}

function q(e) {
  let {
    permissions: t
  } = e, s = e => {
    switch (e.toString()) {
      case D.Permissions.MENTION_EVERYONE.toString():
        return b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
      case D.Permissions.CREATE_GUILD_EXPRESSIONS.toString():
        return b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
      case D.Permissions.MANAGE_GUILD_EXPRESSIONS.toString():
        return b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
      default:
        return (0, m.getPermissionName)(e)
    }
  }, {
    enabledPermissions: a,
    disabledPermissions: l
  } = t;
  return (0, n.jsxs)("div", {
    className: j.table,
    children: [0 !== a.length ? (0, n.jsx)(z, {
      enabledPermissions: a,
      onGetPermisisonName: s
    }) : null, (0, n.jsx)(K, {
      disabledPermissions: l,
      onGetPermisisonName: s
    })]
  })
}
let X = e => {
  let {
    guild: t,
    policyAccepted: s,
    onAcceptPolicy: l,
    headerId: i,
    theme: o
  } = e, r = (0, u.isThemeDark)(o) ? B : F, E = (0, N.default)(null == t ? void 0 : t.id);
  a.useEffect(() => {
    (0, v.trackEnableCommunityFlow)({
      fromStep: U.EnableCommunityModalSteps.BASICS,
      toStep: U.EnableCommunityModalSteps.FINISH,
      guildId: t.id
    })
  }, [t.id]);
  let _ = a.useMemo(() => {
    let e = [],
      s = [];
    return U.MODERATOR_PERMISSIONS.map(n => {
      let a = R.default.canEveryone(n, t);
      a ? e.push(n) : s.push(n)
    }), {
      enabledPermissions: e,
      disabledPermissions: s
    }
  }, [t]);
  return (0, n.jsxs)("div", {
    className: j.container,
    children: [(0, n.jsxs)("div", {
      className: j.content,
      children: [(0, n.jsx)("img", {
        alt: "",
        src: r,
        width: 80
      }), (0, n.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: j.updatedHeader,
        id: i,
        children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
      })]
    }), (0, n.jsxs)("div", {
      className: j.updatedForm,
      children: [(0, n.jsx)(c.FormTitle, {
        className: j.formTitle,
        children: b.default.Messages.ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL
      }), (0, n.jsxs)("div", {
        className: j.checklistRow,
        children: [(0, n.jsx)(h.default, {
          className: j.checklistIcon,
          color: d.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
        }), (0, n.jsx)(c.Text, {
          variant: "text-md/normal",
          children: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
            infoHook: () => (0, n.jsx)(c.Tooltip, {
              text: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              "aria-label": b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              children: e => (0, n.jsx)(A.default, {
                className: j.icon,
                ...e
              })
            })
          })
        })]
      }), (0, n.jsxs)("div", {
        className: j.checklistRow,
        children: [(0, n.jsx)(h.default, {
          className: j.checklistIcon,
          color: d.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
        }), (0, n.jsx)(c.Text, {
          variant: "text-md/normal",
          children: b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
        }), (0, n.jsx)(W, {
          guild: t
        })]
      }), (0, n.jsx)(q, {
        permissions: _
      })]
    }), (0, n.jsxs)("div", {
      className: j.updatedForm,
      children: [(0, n.jsx)(c.FormTitle, {
        className: j.formTitle,
        children: b.default.Messages.PUBLIC_GUILD_POLICY_TITLE
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: j.description,
        children: E
      }), (0, n.jsx)(c.Checkbox, {
        type: c.Checkbox.Types.ROW,
        value: s,
        onChange: l,
        children: (0, n.jsx)(c.Text, {
          className: j.acceptText,
          variant: "text-md/medium",
          color: "header-primary",
          children: b.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT
        })
      })]
    })]
  })
};
var Q = e => {
  var t;
  let {
    transitionState: s,
    onClose: l
  } = e;
  a.useEffect(() => {
    g.default.track(D.AnalyticEvents.OPEN_MODAL, {
      type: U.ENABLE_COMMUNITY_FLOW_MODAL_KEY
    })
  }, []);
  let {
    guild: i
  } = (0, r.useStateFromStoresObject)([T.default], () => T.default.getProps()), d = (0, r.useStateFromStores)([M.default], () => M.default.theme), [u, c] = a.useState(!1), [N, m] = a.useState(!U.MODERATOR_PERMISSIONS.some(e => R.default.canEveryone(e, i))), [p, h] = a.useState(U.CREATE_NEW_CHANNEL_VALUE), [A, v] = a.useState(U.CREATE_NEW_CHANNEL_VALUE), [y] = a.useState(null == i ? void 0 : i.defaultMessageNotifications), [P] = a.useState(null == i ? void 0 : i.verificationLevel), [B] = a.useState(null == i ? void 0 : i.explicitContentFilter), [F] = a.useState(N), G = null == i ? void 0 : i.getRole(null == i ? void 0 : i.id), Y = (0, r.useStateFromStores)([O.default], () => null != i ? O.default.getChannels(i.id) : null, [i]), W = (0, x.useUID)(), {
    enabled: z
  } = (0, E.useIsMassMentionsDefaultDisabledExperiment)(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : "");
  if (null == i) return null;
  let K = [{
    value: U.CREATE_NEW_CHANNEL_VALUE,
    label: b.default.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL
  }];
  Y[0, O.GUILD_SELECTABLE_CHANNELS_KEY].forEach(e => {
    let {
      channel: t
    } = e;
    t.type === D.ChannelTypes.GUILD_TEXT && K.push({
      value: t.id,
      label: (0, _.computeChannelName)(t, C.default, S.default, !0)
    })
  });
  let q = P !== D.VerificationLevels.NONE,
    Q = B === D.GuildExplicitContentFilterTypes.ALL_MEMBERS,
    Z = y === D.UserNotificationSettings.ONLY_MENTIONS,
    J = async () => {
      if (null == G || !u) return;
      let e = new Set(i.features);
      e.add(D.GuildFeatures.COMMUNITY);
      let t = N ? o.default.remove(G.permissions, U.MODERATOR_PERMISSIONS_FLAG) : G.permissions,
        s = {
          ...G,
          permissions: t
        };
      t !== G.permissions && await (0, I.saveRoleSettings)(i.id, [s]), f.default.updateGuild({
        features: e,
        rulesChannelId: p,
        publicUpdatesChannelId: A
      }), await f.default.saveGuild(i.id, {
        features: e,
        rulesChannelId: p,
        verificationLevel: i.verificationLevel,
        explicitContentFilter: i.explicitContentFilter,
        publicUpdatesChannelId: A,
        defaultMessageNotifications: i.defaultMessageNotifications
      }), setTimeout(() => {
        l()
      }, 0)
    }, $ = (0, n.jsx)(k, {
      guild: i,
      disableVerificationLevel: q,
      disableContentFilter: Q,
      onAcceptVerificationLevel: (e, t) => {
        if (!t) {
          f.default.updateGuild({
            verificationLevel: P
          });
          return
        }
        t && f.default.updateGuild({
          verificationLevel: D.VerificationLevels.LOW
        })
      },
      onAcceptContentFilter: (e, t) => {
        if (!t) {
          f.default.updateGuild({
            explicitContentFilter: B
          });
          return
        }
        f.default.updateGuild({
          explicitContentFilter: D.GuildExplicitContentFilterTypes.ALL_MEMBERS
        })
      },
      headerId: W,
      theme: d
    }), ee = (0, n.jsx)(H, {
      selectableChannels: K,
      onRuleChannelChange: e => {
        h(e)
      },
      onPublicUpdatesChannelChange: e => {
        v(e)
      },
      ruleChannel: p,
      publicUpdatesChannel: A,
      headerId: W,
      theme: d,
      guildId: i.id
    }), et = z ? (0, n.jsx)(X, {
      guild: i,
      policyAccepted: u,
      onAcceptPolicy: (e, t) => {
        if (t) {
          c(!0), !Z && f.default.updateGuild({
            defaultMessageNotifications: D.UserNotificationSettings.ONLY_MENTIONS
          }), !N && null != G && m(!0);
          return
        }
        c(!1), Z && f.default.updateGuild({
          defaultMessageNotifications: y
        }), N && null != G && m(!1)
      },
      headerId: W,
      theme: d
    }) : (0, n.jsx)(V, {
      guild: i,
      disableDefaultNotifications: Z,
      disableEveryoneRolePermissions: F,
      policyAccepted: u,
      everyoneRolePermissionsAccepted: N,
      onAcceptPolicy: (e, t) => {
        if (t) {
          c(!0);
          return
        }
        c(!1)
      },
      onAcceptDefaultNotifications: (e, t) => {
        if (!t) {
          f.default.updateGuild({
            defaultMessageNotifications: y
          });
          return
        }
        f.default.updateGuild({
          defaultMessageNotifications: D.UserNotificationSettings.ONLY_MENTIONS
        })
      },
      onAcceptEveryoneRolePermissions: (e, t) => {
        null != G && (t ? m(!0) : m(!1))
      },
      headerId: W,
      theme: d
    }), es = (0, n.jsx)("img", {
      alt: "",
      src: w,
      className: j.footerImage,
      width: 240
    }), en = [{
      modalContent: $,
      disableNextStep: i.explicitContentFilter !== D.GuildExplicitContentFilterTypes.ALL_MEMBERS || i.verificationLevel === D.VerificationLevels.NONE,
      overviewTitle: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE
    }, {
      modalContent: ee,
      disableNextStep: null == p || null == A,
      overviewTitle: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE
    }, {
      modalContent: et,
      disableNextStep: !u,
      overviewTitle: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE
    }];
  return (0, n.jsx)(L.default, {
    stepData: en,
    title: b.default.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
    transitionState: s,
    onClose: () => {
      l(), g.default.track(D.AnalyticEvents.MODAL_DISMISSED, {
        type: U.ENABLE_COMMUNITY_FLOW_MODAL_KEY
      })
    },
    completeButtonText: b.default.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
    onComplete: J,
    overviewFooter: es,
    sequencerClassName: j.container,
    autoCloseOnComplete: !1
  })
}