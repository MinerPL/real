            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("454686"),
                l = s("839670"),
                i = s("279843"),
                r = s("447820"),
                o = s("154639"),
                d = s("599646"),
                u = s("309175");

            function c(e) {
                let {
                    rule: t,
                    isLoading: s,
                    onChangeRule: c
                } = e;
                return null == t ? null : (0, n.isRuleKeywordFilter)(t) ? (0, a.jsx)(i.default, {
                    rule: t,
                    isLoading: s,
                    onChangeRule: c
                }) : (0, n.isRuleMLSpamFilter)(t) ? (0, a.jsx)(r.default, {
                    rule: t,
                    isLoading: s,
                    onChangeRule: c
                }) : (0, n.isRuleDefaultKeywordListFilter)(t) ? (0, a.jsx)(l.default, {
                    rule: t,
                    isLoading: s,
                    onChangeRule: c
                }) : (0, n.isRuleMentionSpamFilter)(t) ? (0, a.jsx)(o.default, {
                    rule: t,
                    isLoading: s,
                    onChangeRule: c
                }) : (0, n.isRuleServerPolicyFilter)(t) ? (0, a.jsx)(d.default, {
                    rule: t,
                    isLoading: s,
                    onChangeRule: c
                }) : (0, n.isRuleUserProfileFilter)(t) ? (0, a.jsx)(u.default, {
                    rule: t,
                    isLoading: s,
                    onChangeRule: c
                }) : null
            }