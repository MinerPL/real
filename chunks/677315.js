"use strict";
n.r(t), n.d(t, {
  useGuildHomeExperiment: function() {
    return _
  },
  canSeeGuildHome: function() {
    return c
  },
  GuildFeedRenderSelectorExperiment: function() {
    return g
  },
  GuildFeedRefreshButtonExperiment: function() {
    return m
  },
  GuildHomeBadgeExperiment: function() {
    return h
  },
  GuildHomeFeedbackExperiment: function() {
    return v
  },
  GuildHomeDeprecationExperiment: function() {
    return E
  }
});
var s = n("446674"),
  i = n("203288"),
  r = n("862205"),
  a = n("21121"),
  o = n("934306"),
  d = n("923959"),
  u = n("305961"),
  l = n("49111");

function f(e, t, n) {
  let s = t.getChannels(e)[d.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
    let {
      channel: s
    } = t;
    return !n.isChannelGated(e, s.id)
  });
  return s.length > 5
}

function _(e) {
  arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  let t = (0, s.useStateFromStores)([d.default, i.default], () => null != e && f(e.id, d.default, i.default));
  return !__OVERLAY__ && !!t && null != e && e.hasFeature(l.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
}

function c(e) {
  if (__OVERLAY__ || e === l.ME || e === l.FAVORITES || (0, a.isInMainTabsExperiment)() && !(0, o.isOnNewPanels)()) return !1;
  let t = u.default.getGuild(e);
  return !!(null != t && f(e, d.default, i.default)) && t.hasFeature(l.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
}
let g = (0, r.createExperiment)({
    kind: "user",
    id: "2022-01_home_feed_toggle",
    label: "Show Guild Feed Sorting Selector",
    defaultConfig: {
      showSelector: !1
    },
    treatments: [{
      id: 1,
      label: "Yes Selector",
      config: {
        showSelector: !0
      }
    }]
  }),
  m = (0, r.createExperiment)({
    kind: "user",
    id: "2022-06_home_refresh_button",
    label: "Show refresh button",
    defaultConfig: {
      showRefreshButton: !1
    },
    treatments: [{
      id: 1,
      label: "Yes button",
      config: {
        showRefreshButton: !0
      }
    }]
  }),
  h = (0, r.createExperiment)({
    kind: "user",
    id: "2022-08_home_badge",
    label: "Show badge on home channel",
    defaultConfig: {
      showBadge: !1
    },
    treatments: [{
      id: 1,
      label: "show badge",
      config: {
        showBadge: !0
      }
    }]
  });
(0, r.createExperiment)({
  kind: "user",
  id: "2022-08_home_drawer_autoclose",
  label: "Auto close home drawer",
  defaultConfig: {
    autoCloseDrawer: !1,
    animation: !1,
    delay: null
  },
  treatments: [{
    id: 1,
    label: "normal animation",
    config: {
      autoCloseDrawer: !0,
      animation: !0,
      delay: null
    }
  }, {
    id: 2,
    label: "no animate",
    config: {
      autoCloseDrawer: !0,
      animation: !1,
      delay: null
    }
  }, {
    id: 3,
    label: "150 delayed animation",
    config: {
      autoCloseDrawer: !0,
      animation: !0,
      delay: 150
    }
  }, {
    id: 4,
    label: "250 delayed animation",
    config: {
      autoCloseDrawer: !0,
      animation: !0,
      delay: 250
    }
  }, {
    id: 5,
    label: "500 delayed animation",
    config: {
      autoCloseDrawer: !0,
      animation: !0,
      delay: 500
    }
  }]
}), (0, r.createExperiment)({
  kind: "user",
  id: "2022-09_welcome_header",
  label: "Show welcome header for home",
  defaultConfig: {
    showWelcomeHeader: !1
  },
  treatments: [{
    id: 1,
    label: "show welcome header",
    config: {
      showWelcomeHeader: !0
    }
  }]
});
let v = (0, r.createExperiment)({
    kind: "user",
    id: "2022-12_home_feedback_ux",
    label: "Show post feedback for home",
    defaultConfig: {
      showFeedback: !1
    },
    treatments: [{
      id: 100,
      label: "show feedback",
      config: {
        showFeedback: !0
      }
    }]
  }),
  E = (0, r.createExperiment)({
    kind: "guild",
    id: "2023-03_home_deprecation",
    label: "Home Deprecation",
    defaultConfig: {
      showDeprecationNotice: !1
    },
    treatments: [{
      id: 1,
      label: "Show notice",
      config: {
        showDeprecationNotice: !0
      }
    }]
  })