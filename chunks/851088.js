"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  i = s("191814"),
  r = s("476765"),
  o = s("757715"),
  d = s("406876"),
  u = s("167109"),
  c = s("7370"),
  E = s("561205"),
  _ = s("958671"),
  T = s("104967"),
  I = s("677847"),
  S = s("88681"),
  N = s("798204"),
  g = s("677795"),
  f = s("782340"),
  A = s("332227");

function L(e) {
  let {
    allSubscriptionListings: t
  } = e, {
    editStateId: s,
    guildId: L
  } = (0, d.useEditStateContext)(), [m, C] = u.useChannelBenefits(s), [O, h] = u.useIntangibleBenefits(s), R = n.useMemo(() => t.filter(e => e.id !== s), [t, s]), {
    isFullServerGating: D
  } = (0, c.default)(L), M = (0, r.useUID)(), G = (0, o.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(E.default, {
    title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_TITLE,
    description: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_SUBTITLE,
    children: [(0, a.jsxs)(l.FormSection, {
      title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_TITLE,
      disabled: G,
      children: [(0, a.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: A.formDescription,
        disabled: G,
        children: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_SUBTITLE
      }), (0, a.jsx)(_.default, {
        channelBenefits: m,
        intangibleBenefits: O,
        subscriptionListings: R,
        onImport: function(e, t) {
          C(t => t.concat(e)), h(e => e.concat(t))
        }
      }), (0, a.jsx)(i.default, {
        size: 8
      }), (0, a.jsx)(_.ImportRoleCard, {
        guildId: L,
        onImport: function(e) {
          C(t => {
            let s = new Set(t.map(e => {
                let {
                  ref_id: t
                } = e;
                return t
              })),
              a = e.filter(e => !s.has(e)).map(e => ({
                ref_id: e,
                ref_type: g.GuildRoleSubscriptionBenefitTypes.CHANNEL
              }));
            return [...t, ...a]
          })
        },
        disabled: G
      })]
    }), (0, a.jsx)(i.default, {
      size: 24
    }), (0, a.jsxs)(l.FormSection, {
      title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
      titleId: M,
      disabled: G,
      children: [(0, a.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: A.formDescription,
        disabled: G,
        children: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_DESCRIPTION
      }), D && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(T.default, {
          "aria-labelledby": M,
          disabled: G
        }), (0, a.jsx)(i.default, {
          size: 8
        })]
      }), (0, a.jsx)(I.default, {})]
    }), (0, a.jsx)(i.default, {
      size: 24
    }), (0, a.jsxs)(l.FormSection, {
      title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
      disabled: G,
      children: [(0, a.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: A.formDescription,
        disabled: G,
        children: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_DESCRIPTION
      }), (0, a.jsx)(N.default, {})]
    }), (0, a.jsx)(i.default, {
      size: 24
    }), (0, a.jsx)(S.default, {})]
  })
}