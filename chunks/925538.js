"use strict";
s.r(t), s.d(t, {
  GuildSettingsCommunityOverviewNotice: function() {
    return p
  },
  default: function() {
    return j
  }
}), s("222007"), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("872717"),
  d = s("95410"),
  u = s("77078"),
  c = s("45299"),
  E = s("679653"),
  _ = s("413476"),
  T = s("239380"),
  I = s("923959"),
  S = s("525065"),
  N = s("305961"),
  g = s("957255"),
  f = s("27618"),
  A = s("697218"),
  L = s("945330"),
  m = s("592407"),
  C = s("900938"),
  O = s("271407"),
  h = s("49111"),
  R = s("447621"),
  D = s("782340"),
  M = s("133226"),
  G = s("936815");
let x = "dismissedCommunityFeaturesUpsell",
  p = () => {
    let e;
    let {
      guild: t,
      submitting: s,
      errors: n
    } = (0, r.useStateFromStoresObject)([C.default], () => ({
      submitting: C.default.isSubmitting(),
      guild: C.default.getGuild(),
      errors: C.default.getErrors()
    })), l = Object.keys(n), i = l.length > 0 ? l[0] : null;
    if ("rules_channel_id" === i) e = D.default.Messages.GUILD_RULES_INVALID_CHANNEL;
    else e = null != i ? n[i] : void 0;
    return (0, a.jsx)(c.default, {
      submitting: s,
      onReset: () => {
        null != t && m.default.init(t.id)
      },
      onSave: () => {
        null != t && m.default.saveGuild(t.id, {
          rulesChannelId: t.rulesChannelId,
          preferredLocale: t.preferredLocale,
          safetyAlertsChannelId: t.safetyAlertsChannelId,
          publicUpdatesChannelId: t.publicUpdatesChannelId,
          description: t.description,
          features: t.features
        })
      },
      errorMessage: e
    })
  },
  U = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: s,
      guild: l
    } = e, [i, c] = n.useState(!0 === d.default.get(x)), E = (0, r.useStateFromStores)([S.default], () => {
      var e;
      return null !== (e = S.default.getMemberCount(l.id)) && void 0 !== e ? e : 0
    }), [_, I] = n.useState(!1);
    n.useEffect(() => {
      o.default.get(h.Endpoints.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id)).then(e => {
        I(e.body.eligible_for_admin_server)
      }).catch(() => I(!1))
    }, []);
    let g = (0, r.useStateFromStores)([N.default], () => N.default.getGuild("942897714956472401")),
      f = l.isCommunity() && E >= 1e3 && _ && !(null != g);
    if (t && s && !f) return null;
    let A = async () => {
      try {
        let e = await o.default.post({
          url: h.Endpoints.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: !0
        });
        m.default.close(), (0, T.transitionToGuild)(e.body.id)
      } catch {}
    };
    return i && !f ? null : (0, a.jsxs)("div", {
      className: M.upsellContainer,
      children: [(0, a.jsxs)("div", {
        className: M.upsellContent,
        children: [(0, a.jsx)("img", {
          src: G,
          alt: "",
          width: 60,
          className: M.upsellImage
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: M.upsellHeader,
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_HEADER
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BODY
          })]
        })]
      }), (0, a.jsx)(u.Button, {
        "aria-label": D.default.Messages.CLOSE,
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        className: M.upsellClose,
        onClick: () => {
          d.default.set(x, !0), c(!0)
        },
        children: (0, a.jsx)(L.default, {
          width: 24,
          height: 24
        })
      }), (0, a.jsxs)("div", {
        className: M.upsellFooter,
        children: [f && (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: A,
          className: M.upsellButton,
          children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ADMIN_SERVER
        }), s ? null : (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: () => {
            m.default.setSection(h.GuildSettingsSections.ONBOARDING)
          },
          className: M.upsellButton,
          children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ONBOARDING
        }), t ? null : (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: () => {
            m.default.setSection(h.GuildSettingsSections.DISCOVERY)
          },
          className: M.upsellButton,
          color: u.Button.Colors.PRIMARY,
          children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_DISCOVERY
        }), (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: () => {
            m.default.setSection(h.GuildSettingsSections.ANALYTICS)
          },
          className: M.upsellButton,
          color: u.Button.Colors.PRIMARY,
          children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ANALYTICS
        })]
      })]
    })
  },
  v = () => {
    var e;
    let t = (0, r.useStateFromStores)([C.default], () => C.default.getGuild()),
      {
        canManageGuild: s,
        isGuildAdmin: l
      } = (0, r.useStateFromStoresObject)([g.default], () => ({
        canManageGuild: g.default.can(h.Permissions.MANAGE_GUILD, t),
        isGuildAdmin: g.default.can(h.Permissions.ADMINISTRATOR, t)
      })),
      o = (0, r.useStateFromStores)([I.default], () => null != t ? I.default.getChannels(t.id) : null),
      c = n.useMemo(R.calculateLocaleOptions, []),
      T = !0 !== d.default.get(x),
      {
        enableRaidAlerts: S
      } = _.RaidAlertExperiment.useExperiment({
        guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "",
        location: "c1af51_2"
      }, {
        autoTrackExposure: s
      });
    if (null == t) return null;
    let N = [];
    null != o && o[0, I.GUILD_SELECTABLE_CHANNELS_KEY].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === h.ChannelTypes.GUILD_TEXT && N.push({
        value: t.id,
        label: (0, E.computeChannelName)(t, A.default, f.default, !0)
      })
    });
    let L = () => {
        m.default.init(t.id), m.default.open(t.id, h.GuildSettingsSections.MEMBER_VERIFICATION)
      },
      O = () => {
        if (null == t) return;
        let e = new Set(t.features);
        e.delete(h.GuildFeatures.COMMUNITY), e.delete(h.GuildFeatures.DISCOVERABLE), e.delete(h.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED), e.delete(h.GuildFeatures.PREVIEW_ENABLED), m.default.updateGuild({
          features: e,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      G = e => {
        m.default.updateGuild({
          rulesChannelId: e
        })
      },
      p = e => {
        m.default.updateGuild({
          safetyAlertsChannelId: e
        })
      },
      v = e => {
        m.default.updateGuild({
          publicUpdatesChannelId: e
        })
      },
      j = e => {
        m.default.updateGuild({
          preferredLocale: e
        })
      },
      P = e => {
        m.default.updateGuild({
          description: e
        })
      },
      y = () => {
        t.features.has(h.GuildFeatures.DISCOVERABLE) && t.features.has(h.GuildFeatures.PARTNERED) ? (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
          ...e,
          header: D.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: D.default.Messages.CONFIRM,
          cancelText: D.default.Messages.NEVERMIND,
          onConfirm: O,
          children: (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: D.default.Messages.GUILD_SETTINGS_PARTNER_AND_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : t.features.has(h.GuildFeatures.DISCOVERABLE) ? (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
          ...e,
          header: D.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: D.default.Messages.CONFIRM,
          cancelText: D.default.Messages.NEVERMIND,
          onConfirm: O,
          children: (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: D.default.Messages.GUILD_SETTINGS_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : t.features.has(h.GuildFeatures.PARTNERED) ? (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
          ...e,
          header: D.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: D.default.Messages.CONFIRM,
          cancelText: D.default.Messages.NEVERMIND,
          onConfirm: O,
          children: (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: D.default.Messages.GUILD_SETTINGS_PARTNER_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : t.features.has(h.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) ? (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
          ...e,
          header: D.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmButtonColor: u.Button.Colors.BRAND,
          confirmText: D.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION_CONFIRM,
          cancelText: D.default.Messages.NEVERMIND,
          onConfirm: L,
          children: (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION
          })
        })) : O()
      };
    return (0, a.jsxs)(u.FormSection, {
      title: D.default.Messages.GUILD_SETTINGS_COMMUNITY,
      tag: u.FormTitleTags.H1,
      children: [T ? (0, a.jsx)(U, {
        discoveryEnabled: t.features.has(h.GuildFeatures.DISCOVERABLE),
        onboardingEnabled: t.features.has(h.GuildFeatures.GUILD_ONBOARDING),
        guild: t
      }) : null, (0, a.jsxs)(u.FormSection, {
        className: i(M.twoColumnFormSection, M.firstSection),
        children: [(0, a.jsxs)("div", {
          className: M.descriptionColumn,
          children: [(0, a.jsx)(u.FormTitle, {
            className: M.formTitle,
            children: D.default.Messages.FORM_LABEL_DISCOVERY_RULES_CHANNEL
          }), (0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: M.formDescription,
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_RULES_CHANNEL_HELP
          })]
        }), (0, a.jsx)("div", {
          className: M.selectColumn,
          children: (0, a.jsx)(u.SearchableSelect, {
            value: t.rulesChannelId,
            options: N,
            onChange: G,
            isDisabled: !s
          })
        })]
      }), (0, a.jsx)(u.FormDivider, {
        className: M.divider
      }), (0, a.jsxs)(u.FormSection, {
        className: i(M.twoColumnFormSection, M.firstSection),
        children: [(0, a.jsxs)("div", {
          className: M.descriptionColumn,
          children: [(0, a.jsx)(u.FormTitle, {
            className: M.formTitle,
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
          }), (0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: M.formDescription,
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
          })]
        }), (0, a.jsx)("div", {
          className: M.selectColumn,
          children: (0, a.jsx)(u.SearchableSelect, {
            value: t.publicUpdatesChannelId,
            options: N,
            onChange: v,
            isDisabled: !s
          })
        })]
      }), (0, a.jsx)(u.FormDivider, {
        className: M.divider
      }), S && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(u.FormSection, {
          className: i(M.twoColumnFormSection, M.firstSection),
          children: [(0, a.jsxs)("div", {
            className: M.descriptionColumn,
            children: [(0, a.jsx)(u.FormTitle, {
              className: M.formTitle,
              children: D.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
            }), (0, a.jsx)(u.FormText, {
              type: u.FormTextTypes.DESCRIPTION,
              className: M.formDescription,
              children: D.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_DESCRIPTION
            })]
          }), (0, a.jsx)("div", {
            className: M.selectColumn,
            children: (0, a.jsx)(u.SearchableSelect, {
              value: t.safetyAlertsChannelId,
              options: N,
              onChange: p,
              isDisabled: !s
            })
          })]
        }), (0, a.jsx)(u.FormDivider, {
          className: M.divider
        })]
      }), (0, a.jsxs)(u.FormSection, {
        className: M.twoColumnFormSection,
        children: [(0, a.jsxs)("div", {
          className: M.descriptionColumn,
          children: [(0, a.jsx)(u.FormTitle, {
            className: M.formTitle,
            children: D.default.Messages.FORM_LABEL_SERVER_LANGUAGE
          }), (0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: M.formDescription,
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_LOCALE_HELP
          })]
        }), (0, a.jsx)("div", {
          className: M.selectColumn,
          children: (0, a.jsx)(u.SearchableSelect, {
            value: t.preferredLocale,
            options: c,
            onChange: j,
            isDisabled: !s
          })
        })]
      }), (0, a.jsx)(u.FormDivider, {
        className: M.divider
      }), (() => {
        var e;
        if (null != t) return (0, a.jsxs)(u.FormSection, {
          children: [(0, a.jsx)(u.FormTitle, {
            className: M.formTitle,
            children: D.default.Messages.FORM_LABEL_SERVER_DESCRIPTION
          }), (0, a.jsx)(u.FormText, {
            className: M.description,
            type: u.FormTextTypes.DESCRIPTION,
            children: D.default.Messages.FORM_HELP_SERVER_DESCRIPTION
          }), (0, a.jsx)(u.TextArea, {
            value: null !== (e = t.description) && void 0 !== e ? e : "",
            placeholder: D.default.Messages.SERVER_DESCIPTION_EMPTY,
            onChange: P,
            maxLength: 120,
            disabled: !s
          })]
        })
      })(), (0, a.jsx)(u.FormDivider, {
        className: M.divider
      }), (0, a.jsxs)(u.FormSection, {
        className: M.twoColumnFormSection,
        children: [(0, a.jsxs)("div", {
          className: M.descriptionColumn,
          children: [(0, a.jsx)(u.FormTitle, {
            className: M.formTitle,
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
          }), (0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: M.formDescription,
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY_DESCRIPTION
          })]
        }), (0, a.jsx)(u.Tooltip, {
          text: l ? null : D.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
          "aria-label": l ? void 0 : D.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
          children: e => (0, a.jsx)(u.Button, {
            size: u.Button.Sizes.SMALL,
            onClick: y,
            color: u.Button.Colors.RED,
            disabled: !l,
            ...e,
            children: D.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
          })
        })]
      })]
    })
  };
var j = () => {
  let e = (0, r.useStateFromStores)([C.default], () => C.default.getGuild());
  if (null == e) return null;
  let t = e.features.has(h.GuildFeatures.COMMUNITY);
  return t ? (0, a.jsx)(v, {}) : (0, a.jsx)(O.default, {
    guild: e
  })
}