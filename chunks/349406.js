"use strict";
i.r(t), i.d(t, {
  default: function() {
    return I
  }
}), i("222007");
var n = i("37983"),
  s = i("884691"),
  a = i("77078"),
  d = i("347924"),
  r = i("916650"),
  u = i("845579"),
  l = i("701909"),
  c = i("241088"),
  S = i("49111"),
  o = i("782340"),
  E = i("593217");

function T(e) {
  var t;
  let {
    isGuildRestricted: i,
    handleRestrictedGuildChange: s,
    isGuildActivityRestricted: u,
    handleActivityRestrictedGuildChange: c,
    isGuildActivityJoiningRestricted: T,
    handleActivityJoiningRestrictedGuildChange: I,
    isGuildMessageRequestRestricted: _,
    handleMessageRequestRestrictedGuildChange: g,
    guild: f,
    transitionState: N,
    onClose: R
  } = e, A = (0, r.default)(), C = "".concat(o.default.Messages.PRIVACY_SETTINGS, "—").concat(null != f ? f.toString() : "??"), G = f.hasFeature(S.GuildFeatures.HUB), M = (0, d.useInServerBadgingExperiment)(null !== (t = null == f ? void 0 : f.id) && void 0 !== t ? t : "");
  return (0, n.jsxs)(a.ModalRoot, {
    transitionState: N,
    size: a.ModalSize.SMALL,
    "aria-label": C,
    children: [(0, n.jsx)(a.ModalHeader, {
      children: (0, n.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: C
      })
    }), (0, n.jsxs)(a.ModalContent, {
      className: E.content,
      children: [(0, n.jsx)(a.FormItem, {
        children: (0, n.jsx)(a.FormSwitch, {
          value: !i,
          note: G ? o.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : o.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
          onChange: s,
          hideBorder: !0,
          children: o.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
        })
      }), (0, n.jsx)(a.FormDivider, {
        className: E.divider
      }), !A && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.FormItem, {
          children: (0, n.jsx)(a.FormSwitch, {
            value: !_,
            note: G ? o.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
              helpdeskArticle: l.default.getArticleURL(S.HelpdeskArticles.MESSAGE_REQUESTS)
            }) : o.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
              helpdeskArticle: l.default.getArticleURL(S.HelpdeskArticles.MESSAGE_REQUESTS)
            }),
            onChange: g,
            disabled: i,
            hideBorder: !0,
            children: o.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
          })
        }), (0, n.jsx)(a.FormDivider, {
          className: E.divider
        })]
      }), (0, n.jsx)(a.FormItem, {
        children: (0, n.jsx)(a.FormSwitch, {
          value: !u,
          onChange: c,
          hideBorder: !0,
          note: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
            helpdeskArticle: l.default.getArticleURL(S.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
          }),
          children: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
        })
      }), (0, n.jsx)(a.FormDivider, {
        className: E.divider
      }), (0, n.jsx)(a.FormItem, {
        children: (0, n.jsx)(a.FormSwitch, {
          value: !T,
          onChange: I,
          hideBorder: !0,
          note: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
            helpdeskArticle: l.default.getArticleURL(S.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
          }),
          children: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
        })
      }), M ? (0, n.jsxs)(a.FormItem, {
        className: E.disclaimer,
        children: [(0, n.jsx)(a.FormDivider, {
          className: E.divider
        }), (0, n.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: o.default.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
            policyLink: "https://discord.com/safety/360043709612-our-policies"
          })
        })]
      }) : null]
    }), (0, n.jsx)(a.ModalFooter, {
      children: (0, n.jsx)(a.Button, {
        onClick: () => R(),
        children: o.default.Messages.DONE
      })
    })]
  })
}

function I(e) {
  let {
    guild: t,
    transitionState: i,
    onClose: a
  } = e, d = t.id, r = u.RestrictedGuildIds.useSetting().includes(d), l = u.MessageRequestRestrictedGuildIds.useSetting().includes(d), S = u.ActivityRestrictedGuilds.useSetting().includes(d), o = u.ActivityJoiningRestrictedGuilds.useSetting().includes(d), E = s.useCallback(e => {
    let t = new Set((0, c.getSanitizedRestrictedGuilds)());
    e ? t.delete(d) : t.add(d), u.RestrictedGuildIds.updateSetting(Array.from(t))
  }, [d]), I = s.useCallback(e => {
    let t = new Set((0, c.getSanitizedActivityRestrictedGuilds)());
    e ? t.delete(d) : t.add(d), u.ActivityRestrictedGuilds.updateSetting([...t])
  }, [d]), _ = s.useCallback(e => {
    let t = new Set((0, c.getSanitizedActivityJoiningRestrictedGuilds)());
    e ? t.delete(d) : t.add(d), u.ActivityJoiningRestrictedGuilds.updateSetting([...t])
  }, [d]), g = s.useCallback(e => {
    let t = new Set((0, c.getSanitizedMessageRequestRestrictedGuilds)());
    e ? t.delete(d) : t.add(d), u.MessageRequestRestrictedGuildIds.updateSetting(Array.from(t))
  }, [d]);
  return (0, n.jsx)(T, {
    isGuildRestricted: r,
    handleRestrictedGuildChange: E,
    isGuildActivityRestricted: S,
    handleActivityRestrictedGuildChange: I,
    isGuildActivityJoiningRestricted: o,
    handleActivityJoiningRestrictedGuildChange: _,
    isGuildMessageRequestRestricted: l,
    handleMessageRequestRestrictedGuildChange: g,
    guild: t,
    transitionState: i,
    onClose: a
  })
}