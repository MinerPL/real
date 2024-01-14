"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("222007"), s("808653");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("969176"),
  o = s.n(r),
  d = s("866227"),
  u = s.n(d),
  c = s("446674"),
  E = s("669491"),
  _ = s("77078"),
  T = s("75766"),
  I = s("923959"),
  S = s("381546"),
  N = s("423487"),
  g = s("701909"),
  f = s("299039"),
  A = s("592407"),
  L = s("49111"),
  m = s("782340"),
  C = s("497934");
let O = e => {
  let {
    name: t,
    failingName: s,
    description: n,
    checked: l,
    pending: i,
    pendingDescription: r,
    failingDescription: o
  } = e, d = t, u = null, c = null;
  return i ? (u = (0, a.jsx)(N.default, {
    color: E.default.unsafe_rawColors.YELLOW_300.css,
    width: 20,
    height: 20
  }), c = null != r ? r : n) : l ? (u = (0, a.jsx)(_.Checkbox, {
    readOnly: !0,
    shape: _.Checkbox.Shapes.ROUND,
    size: 20,
    type: _.Checkbox.Types.INVERTED,
    value: !0
  }), c = n) : (u = (0, a.jsx)(S.default, {
    color: E.default.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), d = null != s ? s : t, c = null != o ? o : n), (0, a.jsxs)("div", {
    className: C.checklistItem,
    children: [(0, a.jsx)("div", {
      className: C.checklistIcon,
      children: u
    }), (0, a.jsxs)("div", {
      className: C.checklistText,
      children: [(0, a.jsx)(_.Heading, {
        variant: "heading-md/semibold",
        children: d
      }), (0, a.jsx)(_.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: c
      })]
    })]
  })
};

function h(e, t) {
  return o(null == e ? void 0 : e.map(e => {
    let [t, s] = e;
    return null == t ? void 0 : t.id
  }), null == t ? void 0 : t.map(e => {
    let [t, s] = e;
    return null == t ? void 0 : t.id
  }))
}
var R = e => {
  let {
    guild: t,
    guildId: l,
    className: r,
    noHeader: o = !1,
    failedItemsOnly: d = !1
  } = e, [E, S] = (0, c.useStateFromStoresArray)([T.default], () => [T.default.getDiscoveryChecklist(l), T.default.isLoading()], [l]), {
    nsfwProperties: N
  } = null != E ? E : {}, R = null == t ? void 0 : t.hasFeature(L.GuildFeatures.PARTNERED), D = null == N ? void 0 : N.channels_banned_keywords, M = (0, c.useStateFromStores)([I.default], () => {
    var e, s, a;
    if (null == D) return [];
    let n = null !== (s = (null !== (e = I.default.getChannels(t.id)) && void 0 !== e ? e : {})[I.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== s ? s : [],
      l = null !== (a = null == n ? void 0 : n.map(e => e.channel).reduce((e, t) => ({
        ...e,
        [t.id]: t
      }), {})) && void 0 !== a ? a : {};
    return null == D ? [] : Object.entries(D).map(e => {
      let [t, s] = e;
      return [l[t], s]
    })
  }, [t.id, D], h);
  if (S || null == E) return (0, a.jsxs)("div", {
    className: i(C.container, C.loaderContainer, r),
    children: [(0, a.jsx)(_.Heading, {
      className: C.loadingText,
      variant: "heading-md/semibold",
      color: "header-secondary",
      children: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_LOADING
    }), (0, a.jsx)(_.Spinner, {
      className: C.spinner
    })]
  });
  let G = R ? m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAILING_PARTNERS : m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAIL,
    x = [{
      name: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE,
      failingName: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_FAILING,
      description: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION,
      failingDescription: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION_FAILING_GUIDELINES.format({
        termsURL: L.MarketingURLs.TERMS,
        guidelinesURL: g.default.getArticleURL(L.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: null == E ? void 0 : E.safeEnvironment
    }, {
      name: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE.format({
        minMembers: E.minimumGuildSize
      }),
      failingName: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_FAIL.format({
        minMembers: E.minimumGuildSize.toLocaleString()
      }),
      description: null,
      failingDescription: G.format({
        minMembers: E.minimumGuildSize.toLocaleString()
      }),
      checked: null == E ? void 0 : E.size
    }, {
      name: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE,
      failingName: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_FAILING,
      description: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION.format({
        minimumGuildAge: Math.ceil(E.minimumGuildAge / 7)
      }),
      failingDescription: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION_FAILING.format({
        minimumGuildAge: Math.ceil(E.minimumGuildAge / 7),
        passDate: u(f.default.extractTimestamp(l)).add(E.minimumGuildAge, "days").format("LL")
      }),
      checked: null == E ? void 0 : E.age
    }, {
      name: (null == E ? void 0 : E.healthScorePending) ? m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_PENDING : m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY,
      failingName: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_FAILING,
      description: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION,
      failingDescription: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(_.Text, {
          color: "text-muted",
          className: C.healthFailingDescription,
          variant: "text-sm/normal",
          children: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_FAILING
        }), (null == E ? void 0 : E.engagementHealthy) ? null : (0, a.jsx)(_.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_ENGAGEMENT_FAILING
        }), (null == E ? void 0 : E.retentionHealthy) ? null : (0, a.jsx)(_.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING
        }), (() => {
          if (null == E || null == E.healthScore) return !1;
          let {
            retentionHealthy: e,
            engagementHealthy: t,
            healthScore: s
          } = E, {
            avg_nonnew_participators: a,
            avg_nonnew_communicators: n,
            perc_ret_w1_intentful: l
          } = s;
          return !e && null != l || !t && null != a && null != n
        })() && (0, a.jsx)(_.Button, {
          className: C.detailsButton,
          look: _.Button.Looks.LINK,
          size: _.Button.Sizes.NONE,
          color: _.Button.Colors.LINK,
          onClick: () => (0, _.openModalLazy)(async () => {
            let {
              default: e
            } = await s.el("127407").then(s.bind(s, "127407"));
            return t => (0, a.jsx)(e, {
              ...t,
              guildChecklist: E
            })
          }),
          children: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTH_VIEW_DETAILS
        })]
      }),
      pendingDescription: (null == E ? void 0 : E.size) ? m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING.format({
        checkBackHook: (e, t) => (0, a.jsx)("strong", {
          className: C.healthPending,
          children: e
        }, t)
      }) : m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING_SIZE.format({
        minMembers: 200
      }),
      checked: null == E ? void 0 : E.healthy,
      pending: null == E ? void 0 : E.healthScorePending
    }, {
      name: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW,
      failingName: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_FAILING,
      description: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_DESCRIPTION,
      failingDescription: (0, a.jsxs)(a.Fragment, {
        children: [(null == N ? void 0 : N.channels) != null ? (0, a.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_CHANNEL_NAMES_2.format({
            channelHook: (e, t) => (0, a.jsx)("span", {
              className: C.doesNot,
              children: e
            }, t)
          })
        }) : null, M.length > 0 ? (0, a.jsx)("div", {
          className: C.indent,
          children: M.map(e => {
            let [t, s] = e;
            return null != t ? (0, a.jsxs)(_.Text, {
              color: "text-muted",
              variant: "text-sm/normal",
              children: ["#", t.name, ": ", s.join(", ")]
            }, t.id) : null
          })
        }) : null, (null == N ? void 0 : N.name) != null ? (0, a.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_NAME.format({
            nameHook: (e, t) => (0, a.jsx)("span", {
              className: C.doesNot,
              children: e
            }, t)
          })
        }) : null, (null == N ? void 0 : N.description) != null ? (0, a.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_DESCRIPTION.format({
            descriptionHook: (e, t) => (0, a.jsx)("span", {
              className: C.doesNot,
              children: e
            }, t)
          })
        }) : null]
      }),
      checked: null == N || 0 === Object.keys(N).length
    }, {
      name: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA,
      failingName: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_FAILING,
      description: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION,
      failingDescription: m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION_FAILING.format({
        onClick: () => A.default.setSection(L.GuildSettingsSections.SAFETY, L.GuildSettingsSubsections.SAFETY_PERMISSIONS)
      }),
      checked: null == E ? void 0 : E.protected
    }];
  return (0, a.jsxs)("div", {
    className: i(C.container, r),
    children: [(() => {
      let e = m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_DOES_NOT_PASS,
        t = (null == E ? void 0 : E.sufficient) ? s("624563") : s("487663"),
        n = o ? null : (0, a.jsxs)("div", {
          className: C.header,
          children: [(0, a.jsx)("img", {
            alt: "",
            src: t,
            className: C.headerIcon,
            width: 40
          }), (0, a.jsx)(_.Heading, {
            variant: "heading-md/semibold",
            children: (null == E ? void 0 : E.sufficient) ? m.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_GOOD_STANDING : e.format({
              doesNotHook: (e, t) => (0, a.jsx)("strong", {
                className: C.doesNot,
                children: e
              }, t)
            })
          })]
        });
      return n
    })(), x.filter(e => !d || null == e.checked || !e.checked).map((e, t) => (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(O, {
        ...e
      }), t < x.length - 1 ? (0, a.jsx)("hr", {
        className: C.separator
      }) : null]
    }, e.name))]
  })
}