"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007"), n("808653");
var a = n("37983"),
  i = n("884691"),
  l = n("77078"),
  s = n("272030"),
  u = n("353575"),
  r = n("296839"),
  d = n("348934"),
  o = n("151866"),
  c = n("462392"),
  f = n("155158"),
  E = n("592407"),
  M = n("49111"),
  m = n("143460"),
  g = n("782340"),
  I = n("490291");
let S = m.AutomodTriggerType.KEYWORD;

function p(e, t) {
  let {
    perGuildMaxCount: n
  } = r.triggerConfigs[S], {
    isLoading: m,
    saveRule: p
  } = (0, o.useAutomodEditingRuleActions)(), {
    createNewEditingRule: _
  } = (0, o.useAutomodEditingRuleState)(), [A, h] = i.useState(!1), [v, T] = (0, u.useSyncAutomodRules)(t), {
    rulesByTriggerType: C,
    updateRule: R
  } = (0, u.useAutomodRulesList)(t), O = i.useMemo(() => {
    var e;
    return null !== (e = C[S]) && void 0 !== e ? e : []
  }, [C]), y = 0 === O.length, x = n > O.length && !y, N = i.useMemo(() => (0, d.canCurrentUserManageMessageFilters)(t), [t]);
  if (!N || null == e || 0 === e.length || null == t) return null;
  let b = e.split(" ").length,
    D = () => {
      null != t && ((0, s.closeContextMenu)(), E.default.open(t, M.GuildSettingsSections.GUILD_AUTOMOD), setTimeout(() => {
        _(t, S, {
          triggerMetadata: {
            keywordFilter: [e],
            regexPatterns: [],
            allowList: []
          }
        })
      }, 400))
    },
    j = async t => {
      var n, a;
      (0, s.closeContextMenu)();
      let i = await (0, f.confirmAddKeyword)(t.name, e);
      if (!i) return;
      let l = {
        ...t,
        triggerMetadata: {
          ...t.triggerMetadata,
          keywordFilter: [...null !== (a = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== a ? a : [], e]
        }
      };
      await p(l, O), R(l)
    }, G = (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.MenuItem, {
        id: "automod-rules-loading",
        label: g.default.Messages.LOADING
      })
    });
  return !v && (G = (0, a.jsxs)(a.Fragment, {
    children: [y && (0, a.jsx)(l.MenuItem, {
      id: "add-first-rule",
      label: g.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
      action: D,
      disabled: m
    }), O.map(e => {
      let t = (0, r.getAvailableActionTypes)(S).reduce((t, n) => {
        let a = e.actions.find(e => {
          let {
            type: t
          } = e;
          return n === t
        });
        if (null == a) return t;
        let i = (0, c.getActionInfo)(n, a);
        return t += ", ".concat(null == i ? void 0 : i.headerText)
      }, "");
      return (0, a.jsx)(l.MenuRadioItem, {
        id: e.id,
        label: e.name,
        subtext: (0, a.jsx)(l.Text, {
          color: "text-muted",
          className: I.actionTextHeader,
          variant: "text-xs/normal",
          children: t.slice(2)
        }),
        group: "automod-rule-selection",
        checked: !1,
        disabled: m,
        action: () => j(e)
      }, e.id)
    }), x && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.MenuSeparator, {}), (0, a.jsx)(l.MenuItem, {
        id: "add-another-rule",
        label: g.default.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
        action: D,
        disabled: m
      })]
    })]
  })), (0, a.jsx)(l.MenuItem, {
    id: "guild-automod-add-selection",
    label: g.default.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
      keywordCount: b
    }),
    onFocus: () => {
      !A && (h(!0), T())
    },
    children: G
  })
}