            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("798609"),
                d = n("175528"),
                c = n("274800"),
                f = n("574073"),
                m = n("401642"),
                E = n("42203"),
                _ = n("305961"),
                h = n("697218"),
                p = n("666897"),
                I = n("49111"),
                T = n("406291"),
                g = n("782340"),
                C = n("532560");
            let S = {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary"
                },
                A = {
                    className: i("mention", C.mention)
                };

            function N(e) {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(o.Text, {
                        ...S,
                        color: "header-primary",
                        children: e
                    })
                })
            }
            var M = s.memo(function(e) {
                var t, n, l, i, M, v;
                let x, {
                        channel: O,
                        messageId: L,
                        interactionData: R
                    } = e,
                    {
                        onCopy: y,
                        copyRef: P
                    } = (0, d.default)(O, null == R ? void 0 : null === (t = R.application_command) || void 0 === t ? void 0 : t.id),
                    D = (0, r.useStateFromStores)([_.default], () => _.default.getGuild(O.guild_id), [O.guild_id]);
                if (s.useEffect(() => {
                        (null == R || R.type === u.ApplicationCommandType.CHAT && void 0 === R.application_command) && c.fetchMessageInteractionData(O.id, L)
                    }, [O.id, L, R]), null == R) x = (0, a.jsx)(o.Spinner, {
                    type: o.Spinner.Type.SPINNING_CIRCLE,
                    className: C.spinner
                });
                else {
                    let e = [],
                        t = Object.fromEntries((null !== (i = null === (n = R.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== i ? i : []).map(e => [e.name, e]));
                    for (let n of null !== (M = R.options) && void 0 !== M ? M : []) e = e.concat(function e(t, n, l, i, r) {
                        var d, c, _, C, M, v, x;
                        let O;
                        let L = null != i ? i + " " + t.name : t.name;
                        if (t.type === u.ApplicationCommandOptionType.SUB_COMMAND || t.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
                            let i = [(0, a.jsxs)(s.Fragment, {
                                    children: [" ", (0, a.jsx)(o.Text, {
                                        ...S,
                                        children: null !== (c = null == r ? void 0 : r.name_localized) && void 0 !== c ? c : t.name
                                    })]
                                }, L)],
                                u = Object.fromEntries(null === (d = null !== (_ = null == r ? void 0 : r.options) && void 0 !== _ ? _ : []) || void 0 === d ? void 0 : d.map(e => [e.name, e]));
                            for (let a of null !== (C = t.options) && void 0 !== C ? C : []) i = i.concat(e(a, n, l, L, u[a.name]));
                            return i
                        }
                        let R = t.value;
                        if (null != t.value) switch (t.type) {
                            case u.ApplicationCommandOptionType.USER: {
                                let e = t.value.toString(),
                                    s = h.default.getUser(e);
                                if (null != s) {
                                    let e = (0, f.getUserAuthor)(s, n);
                                    O = (0, a.jsxs)(p.default, {
                                        ...A,
                                        onClick: () => (0, m.openUserProfileModal)({
                                            userId: s.id,
                                            guildId: n.guild_id,
                                            analyticsLocation: {
                                                section: I.AnalyticsSections.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                                            }
                                        }),
                                        children: [T.MENTION_SENTINEL, e.nick]
                                    })
                                }
                                break
                            }
                            case u.ApplicationCommandOptionType.CHANNEL: {
                                let e = t.value.toString(),
                                    n = E.default.getChannel(e);
                                null != n && (O = (0, a.jsxs)(p.default, {
                                    ...A,
                                    children: [T.CHANNEL_SENTINEL, n.name]
                                }));
                                break
                            }
                            case u.ApplicationCommandOptionType.ROLE: {
                                let e = t.value.toString(),
                                    n = (null == l ? void 0 : l.roles) != null ? l.roles[e] : null;
                                null != n && (O = (0, a.jsxs)(p.default, {
                                    ...A,
                                    children: [T.MENTION_SENTINEL, n.name]
                                }));
                                break
                            }
                            case u.ApplicationCommandOptionType.MENTIONABLE: {
                                let e = t.value.toString(),
                                    s = (null == l ? void 0 : l.roles) != null ? l.roles[e] : null;
                                if (null != s) O = (0, a.jsxs)(p.default, {
                                    children: [T.MENTION_SENTINEL, s.name]
                                });
                                else {
                                    let t = h.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, f.getUserAuthor)(t, n);
                                        O = (0, a.jsxs)(p.default, {
                                            ...A,
                                            onClick: () => (0, m.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: n.guild_id,
                                                analyticsLocation: {
                                                    section: I.AnalyticsSections.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                                                }
                                            }),
                                            children: [T.MENTION_SENTINEL, e.nick]
                                        })
                                    }
                                }
                                break
                            }
                            case u.ApplicationCommandOptionType.ATTACHMENT:
                                O = N(g.default.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
                                break;
                            default: {
                                let e = null == r ? void 0 : null === (M = r.choices) || void 0 === M ? void 0 : M.find(e => e.value === t.value);
                                null != e && (R = null !== (v = e.name_localized) && void 0 !== v ? v : e.name)
                            }
                        }
                        return null == O && (O = N(null == R ? void 0 : R.toString())), [(0, a.jsxs)(s.Fragment, {
                            children: [(0, a.jsxs)(o.Text, {
                                ...S,
                                children: [" ", null !== (x = null == r ? void 0 : r.name_localized) && void 0 !== x ? x : t.name, ": "]
                            }), O]
                        }, L)]
                    }(n, O, D, null, t[n.name]));
                    x = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(o.Text, {
                            ...S,
                            children: ["/", null !== (v = null === (l = R.application_command) || void 0 === l ? void 0 : l.name_localized) && void 0 !== v ? v : R.name]
                        }), e]
                    })
                }
                return (0, a.jsxs)("div", {
                    className: C.container,
                    onCopy: e => {
                        var t, n, a;
                        let s = null !== (a = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== a ? a : "";
                        s.startsWith("/") && s.endsWith("\n") && y(e, R)
                    },
                    children: [(0, a.jsx)("div", {
                        className: C.tooltip,
                        ref: P,
                        children: x
                    }), (0, a.jsx)("div", {
                        className: C.tooltipPointer
                    })]
                })
            })