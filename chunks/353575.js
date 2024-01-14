"use strict";
n.r(t), n.d(t, {
  getRuleCountByTriggerType: function() {
    return A
  },
  useSyncAutomodRules: function() {
    return _
  },
  useSyncAutomodRulesEffect: function() {
    return c
  },
  useAutomodRulesList: function() {
    return f
  }
}), n("424973"), n("222007"), n("808653");
var r = n("884691"),
  o = n("308503"),
  i = n("16470"),
  u = n("448993"),
  a = n("702873"),
  l = n("254365"),
  d = n("143460");
let s = {},
  T = e => {
    let t = {
      [d.AutomodTriggerType.KEYWORD]: [],
      [d.AutomodTriggerType.ML_SPAM]: [],
      [d.AutomodTriggerType.DEFAULT_KEYWORD_LIST]: [],
      [d.AutomodTriggerType.MENTION_SPAM]: [],
      [d.AutomodTriggerType.USER_PROFILE]: [],
      [d.AutomodTriggerType.SERVER_POLICY]: []
    };
    return e.forEach(e => {
      var n;
      let {
        triggerType: r
      } = e;
      null === (n = t[r]) || void 0 === n || n.push(e)
    }), t
  },
  E = (0, o.default)((e, t) => ({
    rules: {},
    fetching: !1,
    error: null,
    updateRule: n => {
      var r, o;
      let {
        guildId: i,
        id: u,
        triggerType: a
      } = n, {
        rules: d
      } = t(), s = null !== (r = d[i]) && void 0 !== r ? r : {}, T = null !== (o = s[a]) && void 0 !== o ? o : [], E = T.some(e => e.id === u), A = T.filter(e => (!(0, l.isDefaultRuleId)(e.id) || e.triggerType !== a) && !0), _ = E ? A.map(e => e.id === u ? n : e) : [...A, n];
      e({
        rules: {
          ...d,
          [i]: {
            ...s,
            [a]: _
          }
        },
        error: null
      })
    },
    removeRule: (n, r) => {
      let {
        rules: o
      } = t(), i = o[r], u = Object.keys(i).reduce((e, t) => {
        var r;
        let o = Number(t),
          u = null !== (r = i[o]) && void 0 !== r ? r : [];
        return e[o] = u.filter(e => e.id !== n), e
      }, i);
      e({
        rules: {
          ...o,
          [r]: u
        },
        error: null
      })
    },
    syncRules: async n => {
      if (function(e) {
          var t;
          let n = Date.now(),
            r = null !== (t = s[e]) && void 0 !== t ? t : 0;
          return n - r > 2e4
        }(n)) {
        s[n] = Date.now();
        try {
          let r = await (0, a.fetchAutomodRules)(n),
            o = T(r),
            i = t().rules;
          e({
            rules: {
              ...i,
              [n]: o
            },
            error: null
          })
        } catch (n) {
          let t = new u.APIError(n);
          e({
            error: t
          })
        }
      }
    }
  })),
  A = (e, t) => {
    var n, r;
    let o = E.getState().rules,
      i = null !== (r = null === (n = o[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : [];
    return i.length
  };

function _(e) {
  let [t, n] = r.useState(!1), [o, u] = E(e => [e.syncRules, e.fetching], i.default), a = r.useCallback(async () => {
    if (!u && null != e) try {
      n(!0), await o(e)
    } finally {
      n(!1)
    }
  }, [e, u, o]);
  return [t, a]
}

function c(e) {
  let [t, n] = _(e);
  return r.useEffect(() => {
    (async () => {
      await n()
    })()
  }, [e, n]), [t, n]
}

function f(e) {
  return E(t => {
    var n;
    return {
      rulesByTriggerType: null !== (n = t.rules[null != e ? e : ""]) && void 0 !== n ? n : {},
      updateRule: t.updateRule,
      removeRule: t.removeRule
    }
  })
}