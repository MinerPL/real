            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            }), s("222007"), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("843762");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("151426"),
                d = s("95410"),
                u = s("77078"),
                c = s("872173"),
                S = s("374363"),
                E = s("145131"),
                f = s("810567"),
                m = s("258078"),
                T = s("674268"),
                _ = s("585653"),
                g = s("989691"),
                h = s("862853"),
                I = s("47317"),
                N = s("926622");

            function p(e) {
                let {
                    contents: t,
                    content: s,
                    onChange: n
                } = e, l = (0, T.hasBit)(t, o.DismissibleContent[s]);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(u.FormSwitch, {
                        value: l,
                        onChange: function() {
                            n(s), l ? (0, c.removeDismissedContent)(o.DismissibleContent[s]) : (0, c.addDismissedContent)(o.DismissibleContent[s])
                        },
                        children: (0, a.jsx)(u.FormText, {
                            size: m.default.Sizes.SIZE_16,
                            className: N.marginTop4,
                            children: "".concat(s.toLowerCase(), " (").concat(o.DismissibleContent[s], ")")
                        })
                    })
                })
            }

            function C(e) {
                let {
                    items: t,
                    dismissedContents: s,
                    handleChange: n
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: t.filter(e => isNaN(Number(e))).map(e => (0, a.jsx)(p, {
                        contents: s,
                        content: e,
                        onChange: n
                    }, e))
                })
            }

            function A() {
                var e;
                let t = (0, h.default)(e => e.recentlyShown),
                    {
                        dailyCapReached: s,
                        dailyCapOverridden: l
                    } = (0, r.useStateFromStoresObject)([g.default], () => ({
                        dailyCapReached: g.default.hasUserHitDCCap(),
                        dailyCapOverridden: g.default.dailyCapOverridden
                    })),
                    [m, T] = n.useState(""),
                    p = null !== (e = (0, r.useStateFromStores)([S.default], () => {
                        var e;
                        return null === (e = S.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                    })) && void 0 !== e ? e : new Uint8Array,
                    [A, O] = function(e, t) {
                        let [s, a] = n.useState(() => {
                            let s = d.default.get(e);
                            return null != s ? s : t
                        });
                        return n.useEffect(() => {
                            d.default.set(e, s)
                        }, [e, s]), [s, a]
                    }("RecentDismissibleOverrides", []),
                    x = e => {
                        O(t => {
                            let s = new Set(t);
                            s.delete(e);
                            let a = Array.from(s).slice(0, 4);
                            return a.unshift(e), a
                        })
                    },
                    M = t.map(e => o.DismissibleContent[e]),
                    R = A.filter(e => e.toLowerCase().includes(m.toLowerCase())).filter(e => !M.includes(e)),
                    v = Object.keys(o.DismissibleContent).filter(e => !M.includes(e)).filter(e => !A.includes(e)).filter(e => e.toLowerCase().includes(m.toLowerCase())).sort((e, t) => e.localeCompare(t));
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(u.FormSection, {
                        title: "Dismissible Content Fatigue",
                        tag: u.FormTitleTags.H1,
                        className: N.marginBottom60,
                        children: [(0, a.jsx)(u.FormItem, {
                            children: (0, a.jsxs)(u.FormText, {
                                className: N.marginBottom4,
                                children: ["Daily Cap Reached: ", s ? "Yes" : "No"]
                            })
                        }), (0, a.jsx)(u.FormSwitch, {
                            value: l,
                            onChange: _.overrideDismissibleContentFramework,
                            children: "Override Dismissible Content Daily Cap"
                        }), (0, a.jsxs)(u.FormItem, {
                            children: [(0, a.jsx)(u.Button, {
                                onClick: () => (0, _.resetDismissibleContentFrameworkStore)(),
                                children: "Reset DismissibleContentFrameworkStore"
                            }), (0, a.jsx)(u.FormText, {
                                className: N.marginTop4,
                                children: "This will reset the daily cap and content seen during session"
                            })]
                        })]
                    }), (0, a.jsxs)(u.FormSection, {
                        title: "Dismissible Contents",
                        tag: u.FormTitleTags.H1,
                        children: [(0, a.jsx)(f.default, {
                            className: N.marginBottom20,
                            size: f.default.Sizes.LARGE,
                            query: m,
                            onChange: T,
                            onClear: () => T("")
                        }), (0, a.jsxs)(u.FormItem, {
                            className: I.buttonsContainer,
                            children: [(0, a.jsx)(u.Button, {
                                onClick: c.clearDismissedContents,
                                children: "Clear All Dismissed Contents"
                            }), (0, a.jsx)(u.Button, {
                                onClick: c.checkAllDismissedContents,
                                children: "Check All Dismissed Contents"
                            })]
                        }), t.length > 0 ? (0, a.jsxs)("div", {
                            className: N.marginBottom20,
                            children: [(0, a.jsx)("div", {
                                className: N.marginBottom20,
                                children: (0, a.jsx)(u.FormTitle, {
                                    children: "Recently Shown"
                                })
                            }), (0, a.jsx)(C, {
                                items: M,
                                dismissedContents: p,
                                handleChange: x
                            })]
                        }) : null, R.length > 0 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: N.marginBottom20,
                                children: (0, a.jsx)(u.FormTitle, {
                                    children: "Recent Overrides"
                                })
                            }), (0, a.jsx)(C, {
                                items: R,
                                dismissedContents: p,
                                handleChange: x
                            })]
                        }) : null, (0, a.jsx)(E.default, {
                            className: i(N.marginBottom20, N.marginTop20),
                            children: (0, a.jsx)(u.FormTitle, {
                                children: "Available Dismissible Contents"
                            })
                        }), (0, a.jsx)(C, {
                            items: v,
                            dismissedContents: p,
                            handleChange: x
                        })]
                    })]
                })
            }