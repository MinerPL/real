"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("627445"),
  i = s.n(l),
  r = s("77078"),
  o = s("191814"),
  d = s("476765"),
  u = s("837008"),
  c = s("757715"),
  E = s("406876"),
  _ = s("167109"),
  T = s("979778"),
  I = s("59767"),
  S = s("561205"),
  N = s("782340"),
  g = s("332227");

function f() {
  var e;
  let {
    editStateId: t
  } = (0, E.useEditStateContext)(), [s, l] = _.useTrialInterval(t), [f, A] = _.useTrialLimit(t), L = (0, u.useSubscriptionTrial)(t), {
    options: m
  } = (0, I.default)(null !== (e = null == L ? void 0 : L.active_trial) && void 0 !== e ? e : null), C = (0, T.default)(), O = null != s, h = n.useCallback(e => {
    let t = m.find(e => e.isDefault);
    i(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
  }, [l, m]), R = (0, c.useRoleSubscriptionSettingsDisabled)(), D = (0, d.useUID)(), M = (0, d.useUID)();
  return (0, a.jsxs)(S.default, {
    title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
    description: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DESCRIPTION,
    children: [(0, a.jsx)(r.FormSwitch, {
      onChange: (e, t) => h(e),
      value: O,
      disabled: R,
      hideBorder: !0,
      children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_ENABLE_FREE_TRIAL_CTA
    }), (0, a.jsxs)(r.FormSection, {
      title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_TITLE,
      titleId: D,
      disabled: !O || R,
      children: [(0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: g.formDescription,
        disabled: !O || R,
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_DESCRIPTION
      }), (0, a.jsx)(o.default, {
        size: 8
      }), (0, a.jsx)(r.SingleSelect, {
        "aria-labelledby": D,
        options: m,
        className: g.formInput,
        placeholder: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DISABLED,
        value: s,
        onChange: l,
        maxVisibleItems: 5,
        isDisabled: !O || R,
        look: r.SelectLooks.CUSTOM
      })]
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsxs)(r.FormSection, {
      title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_TITLE,
      titleId: M,
      disabled: !O || R,
      children: [(0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: g.formDescription,
        disabled: !O || R,
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_DESCRIPTION
      }), (0, a.jsx)(r.SingleSelect, {
        "aria-labelledby": M,
        options: C,
        className: g.formInput,
        value: f,
        onChange: A,
        maxVisibleItems: 5,
        isDisabled: !O || R,
        look: r.SelectLooks.CUSTOM
      })]
    })]
  })
}