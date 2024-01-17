"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  },
  ViewingRolesSettingsNotice: function() {
    return P
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  u = n("446674"),
  o = n("669491"),
  s = n("77078"),
  a = n("921031"),
  d = n("471706"),
  c = n("937692"),
  f = n("432153"),
  S = n("592407"),
  E = n("393414"),
  h = n("18494"),
  g = n("162771"),
  p = n("246053"),
  _ = n("461380"),
  C = n("423487"),
  m = n("489622"),
  I = n("773336"),
  T = n("479756"),
  v = n("38654"),
  N = n("593916"),
  R = n("49111"),
  M = n("724210"),
  A = n("782340"),
  O = n("494449");

function L(e) {
  let {
    className: t,
    onClick: n,
    children: r
  } = e;
  return (0, i.jsx)(s.Button, {
    className: l(O.button, t),
    innerClassName: O.buttonInner,
    look: s.Button.Looks.OUTLINED,
    color: s.Button.Colors.WHITE,
    size: s.Button.Sizes.NONE,
    onClick: n,
    children: r
  })
}

function b(e) {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(L, {
    onClick: t,
    children: A.default.Messages.DISABLE
  })
}

function x() {
  let e = (0, u.useStateFromStores)([g.default], () => g.default.getGuildId()),
    t = (0, u.useStateFromStores)([h.default], () => h.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: r,
      isFullServerPreview: l
    } = (0, u.useStateFromStoresObject)([v.default], () => ({
      viewingRoles: null != e ? v.default.getViewingRoles(e) : null,
      backNavigationSection: v.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && v.default.isFullServerPreview(e)
    }));
  if (null == n || null == e) return null;
  let I = function(e) {
      switch (e) {
        case R.GuildSettingsSections.INTEGRATIONS:
          return A.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case R.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return A.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case R.GuildSettingsSections.ONBOARDING:
          return A.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return A.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(r),
    x = r === R.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? A.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : A.default.Messages.VIEWING_AS_ROLES_SELECT,
    P = t === M.StaticChannelRoute.GUILD_ONBOARDING,
    w = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (v.default.isFullServerPreview(e) && (0, E.transitionTo)(R.Routes.CHANNEL(e)), d.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, c.discardOnboardingPromise)(e)), (0, T.stopImpersonating)(e), n && S.default.open(e, r), r === R.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, i.jsxs)(m.default, {
    color: m.NoticeColors.BRAND,
    className: O.notice,
    children: [(0, i.jsxs)(L, {
      onClick: () => w({
        backToSettings: !0
      }),
      className: O.backButton,
      children: [(0, i.jsx)(p.default, {
        width: 16,
        height: 16,
        direction: p.default.Directions.LEFT,
        className: O.backArrow
      }), I]
    }), P && l ? (0, i.jsx)("div", {
      className: O.noticeContents,
      children: (0, i.jsx)("div", {
        className: O.noticeText,
        children: A.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, i.jsxs)("div", {
      className: O.noticeContents,
      children: [(0, i.jsx)("div", {
        className: O.noticeText,
        children: l ? A.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(n).length
        }) : A.default.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(n).length
        })
      }), (0, i.jsx)(s.Popout, {
        position: "bottom",
        renderPopout: () => (0, i.jsx)(N.default, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, i.jsxs)(L, {
            onClick: t,
            children: [x, (0, i.jsx)(_.default, {
              width: 16,
              height: 16,
              direction: _.default.Directions.DOWN,
              className: O.selectCaret
            })]
          })
        }
      }), l ? (0, i.jsx)(s.TooltipContainer, {
        className: O.previewWarning,
        text: A.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, i.jsx)(C.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      }) : null]
    }), l || r === R.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(b, {
      onClick: () => w({
        backToSettings: !1
      })
    })]
  })
}

function P(e) {
  let {
    guildId: t
  } = e, n = (0, u.useStateFromStores)([v.default], () => v.default.isViewingRoles(t));
  return n ? (0, i.jsx)("div", {
    className: l(O.settingsWrapper, {
      [O.windows]: (0, I.isWindows)(),
      [O.osx]: (0, I.isMac)()
    }),
    children: (0, i.jsx)(x, {})
  }) : null
}