(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54057"], {
        145106: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("133403"),
                r = l("49622");

            function o(e) {
                let {
                    hasSetEmoji: t,
                    onClick: l,
                    children: o
                } = e, [i, u] = a.useState(!1);
                return (0, n.jsxs)("div", {
                    className: r.container,
                    onMouseEnter: () => {
                        if (t) {
                            u(!0);
                            return
                        }
                        u(!1)
                    },
                    onMouseLeave: () => {
                        u(!1)
                    },
                    children: [o, t && i && (0, n.jsx)(s.default, {
                        onClick: l,
                        className: r.removeButton
                    })]
                })
            }
        },
        679844: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("917351"),
                r = l.n(s),
                o = l("446674"),
                i = l("77078"),
                u = l("923959"),
                d = l("476765"),
                c = l("423487"),
                h = l("898260"),
                m = l("449008"),
                N = l("385334"),
                f = l("330724"),
                x = l("136278"),
                O = l("869447"),
                E = l("619594"),
                g = l("653138"),
                v = l("782340"),
                I = l("326696");

            function T(e) {
                let {
                    transitionState: t,
                    onClose: l,
                    onSave: s,
                    onDelete: c,
                    option: m,
                    guild: N,
                    prompt: T,
                    index: C
                } = e, L = (0, d.useUID)(), _ = (0, o.useStateFromStores)([u.default], () => u.default.getDefaultChannel(N.id)), [j, p] = a.useState(() => {
                    var e;
                    return null !== (e = null == m ? void 0 : m.emoji) && void 0 !== e ? e : null
                }), [P, M] = a.useState(() => {
                    var e;
                    return null !== (e = null == m ? void 0 : m.title) && void 0 !== e ? e : ""
                }), [S, A] = a.useState(() => {
                    var e;
                    return null !== (e = null == m ? void 0 : m.description) && void 0 !== e ? e : ""
                }), [b, w] = a.useState(() => {
                    var e;
                    return new Set(null !== (e = null == m ? void 0 : m.channelIds) && void 0 !== e ? e : [])
                }), [H, D] = a.useState(() => {
                    var e;
                    return new Set(null !== (e = null == m ? void 0 : m.roleIds) && void 0 !== e ? e : [])
                }), [B, y] = a.useState({}), k = a.useRef(null);
                return a.useLayoutEffect(() => {
                    var e;
                    return null === (e = k.current) || void 0 === e ? void 0 : e.focus()
                }, []), (0, n.jsxs)(i.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": L,
                    children: [(0, n.jsxs)("div", {
                        className: I.container,
                        children: [(0, n.jsx)(i.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: l
                        }), (0, n.jsx)(i.Text, {
                            className: I.questionNumber,
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: v.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
                                index: C + 1
                            })
                        }), (0, n.jsx)(i.Heading, {
                            id: L,
                            className: I.header,
                            variant: "heading-lg/semibold",
                            children: null != T.title && T.title.length > 0 ? T.title : v.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE
                        }), (0, n.jsx)(i.Heading, {
                            className: I.nameHeader,
                            variant: "heading-md/semibold",
                            children: v.default.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER
                        }), (0, n.jsx)(i.TextInput, {
                            inputRef: k,
                            placeholder: v.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
                            value: P,
                            onChange: e => M(e),
                            maxLength: g.MAX_PROMPT_OPTION_TITLE_LENGTH,
                            autoFocus: !0
                        }), (0, n.jsx)(i.InputError, {
                            error: B.title
                        }), (0, n.jsx)(i.TextInput, {
                            className: I.descriptionInput,
                            placeholder: v.default.Messages.ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
                            value: S,
                            onChange: e => A(e),
                            maxLength: g.MAX_PROMPT_OPTION_DESCRIPTION_LENGTH
                        }), (0, n.jsx)(h.default, {
                            className: I.divider
                        }), (0, n.jsx)(i.Heading, {
                            className: I.rolesHeader,
                            variant: "heading-md/semibold",
                            children: v.default.Messages.ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER
                        }), (0, n.jsx)(E.default, {
                            guildId: N.id,
                            selectedChannelIds: b,
                            selectedRoleIds: H,
                            disableEveryoneRole: !0,
                            placeholder: v.default.Messages.ONBOARDING_PROMPT_OPTION_CHANNEL_ROLES_PLACEHOLDER,
                            onChannelChange: e => w(e),
                            onRoleChange: e => D(e)
                        }), null == B.roles ? null : (0, n.jsx)(i.InputError, {
                            error: B.roles
                        }), (0, n.jsx)(R, {
                            guild: N,
                            roleIds: H
                        }), (0, n.jsx)(h.default, {
                            className: I.divider
                        }), (0, n.jsxs)("div", {
                            className: I.emojiQuestionContainer,
                            children: [(0, n.jsxs)("div", {
                                className: I.emojiQuestionText,
                                children: [(0, n.jsx)(i.Heading, {
                                    variant: "heading-md/semibold",
                                    children: v.default.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_HEADER
                                }), (0, n.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: v.default.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER
                                })]
                            }), (0, n.jsx)(O.default, {
                                emoji: j,
                                setEmoji: p,
                                channel: _
                            })]
                        })]
                    }), (0, n.jsx)(i.ModalFooter, {
                        children: (0, n.jsxs)("div", {
                            className: I.footerButtons,
                            children: [(0, n.jsx)("div", {
                                className: I.removeButton,
                                children: (0, n.jsx)(i.Button, {
                                    size: i.Button.Sizes.SMALL,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.RED,
                                    onClick: () => {
                                        c(), l()
                                    },
                                    children: v.default.Messages.REMOVE
                                })
                            }), (0, n.jsxs)("div", {
                                className: I.rightButtons,
                                children: [(0, n.jsx)(i.Button, {
                                    onClick: l,
                                    size: i.Button.Sizes.SMALL,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    children: v.default.Messages.CANCEL
                                }), (0, n.jsx)(i.Button, {
                                    onClick: () => {
                                        var e;
                                        let t = {
                                                id: null !== (e = null == m ? void 0 : m.id) && void 0 !== e ? e : "".concat(Date.now()),
                                                title: P,
                                                description: S,
                                                channelIds: Array.from(b).sort(),
                                                roleIds: Array.from(H).sort(),
                                                emoji: null == j ? void 0 : j
                                            },
                                            n = x.default.editedOnboardingPrompts,
                                            a = function(e, t, l, n) {
                                                let a = {};
                                                n.title.length <= 0 && (a.title = v.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
                                                let s = (0, f.validateOptionRoles)(e, t, l, n);
                                                return null != s && (a.roles = s), a
                                            }(N, n, T, t);
                                        y(a), r.isEmpty(a) && (s(t), l())
                                    },
                                    children: v.default.Messages.SAVE
                                })]
                            })]
                        })
                    })]
                })
            }

            function R(e) {
                let {
                    guild: t,
                    roleIds: l
                } = e, a = Array.from(l).map(e => t.getRole(e)).filter(m.isNotNullish).find(N.isRolePowerful);
                return null == a ? null : (0, n.jsx)("div", {
                    className: I.notice,
                    children: (0, n.jsxs)("div", {
                        className: I.noticeMessage,
                        children: [(0, n.jsx)(c.default, {
                            className: I.noticeIcon
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: v.default.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({
                                permissions: (0, N.getPowerfulPermissionTitles)(t, a).join(", ")
                            })
                        })]
                    })
                })
            }
        },
        869447: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("430568"),
                r = l("86678"),
                o = l("145106"),
                i = l("882641"),
                u = l("958706");

            function d(e) {
                let {
                    className: t,
                    emojiClassName: l,
                    emoji: d,
                    setEmoji: c,
                    channel: h
                } = e, m = e => (t, l) => {
                    var n, a;
                    null != t && (null == t.id ? c({
                        name: null !== (n = t.optionallyDiverseSequence) && void 0 !== n ? n : ""
                    }) : c({
                        id: t.id,
                        name: null !== (a = t.originalName) && void 0 !== a ? a : t.name,
                        animated: t.animated
                    }), l && e())
                }, N = null == d || null == d.name ? null : () => {
                    var e;
                    return (0, n.jsx)(s.default, {
                        className: l,
                        animated: null !== (e = d.animated) && void 0 !== e && e,
                        emojiId: d.id,
                        emojiName: d.name
                    })
                };
                return (0, n.jsx)(o.default, {
                    hasSetEmoji: null != d && null != d.name,
                    onClick: () => {
                        c(null)
                    },
                    children: (0, n.jsx)(a.Popout, {
                        position: "bottom",
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, n.jsx)(r.default, {
                                closePopout: t,
                                onSelectEmoji: m(t),
                                pickerIntention: u.EmojiIntention.COMMUNITY_CONTENT,
                                channel: h
                            })
                        },
                        children: (e, l) => {
                            let {
                                isShown: a
                            } = l;
                            return (0, n.jsx)(i.default, {
                                ...e,
                                tabIndex: 0,
                                active: a,
                                className: t,
                                renderButtonContents: N
                            })
                        }
                    })
                })
            }
        },
        619594: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return K
                }
            }), l("222007"), l("424973"), l("808653");
            var n, a, s, r, o, i, u = l("37983"),
                d = l("884691"),
                c = l("414456"),
                h = l.n(c),
                m = l("714617"),
                N = l.n(m),
                f = l("448105"),
                x = l.n(f),
                O = l("446674"),
                E = l("77078"),
                g = l("137223"),
                v = l("656038"),
                I = l("679653"),
                T = l("419830"),
                R = l("405645"),
                C = l("19766"),
                L = l("42203"),
                _ = l("923959"),
                j = l("305961"),
                p = l("27618"),
                P = l("697218"),
                M = l("476765"),
                S = l("483093"),
                A = l("991170"),
                b = l("49111"),
                w = l("782340"),
                H = l("470514");
            let D = (0, M.uid)(),
                B = (0, M.uid)(),
                y = (0, M.uid)(),
                k = (0, M.uid)();

            function U(e) {
                return "ROLE" === e.type
            }

            function G(e) {
                return "CHANNEL" === e.type
            }

            function F(e) {
                let t = "".concat(e.name.includes(C.EVERYONE_ID) ? "" : "@").concat(e.name);
                return {
                    tag: {
                        type: g.RichTagTypes.ROLE,
                        label: t
                    },
                    row: {
                        id: e.id,
                        display: t,
                        type: "ROLE",
                        record: e
                    }
                }
            }

            function z(e) {
                let t = (0, I.computeChannelName)(e, P.default, p.default);
                return {
                    tag: {
                        type: g.RichTagTypes.CHANNEL,
                        label: t
                    },
                    row: {
                        id: e.id,
                        display: t,
                        type: "CHANNEL",
                        record: e
                    }
                }
            }(r = n || (n = {})).CHANNEL = "CHANNEL", r.ROLE = "ROLE";
            let V = d.memo(function(e) {
                let {
                    row: t,
                    guildId: l
                } = e, {
                    id: n,
                    name: a
                } = t.record, s = (0, R.useRoleIcon)({
                    guildId: l,
                    roleId: n,
                    size: 16
                }), r = a.includes(C.EVERYONE_ID) ? "" : "@";
                return (0, u.jsx)("div", {
                    className: H.roleTagContainer,
                    children: (0, u.jsxs)("div", {
                        className: H.roleTag,
                        children: [null != s ? (0, u.jsx)(S.default, {
                            className: H.roleTagIcon,
                            ...s,
                            enableTooltip: !1
                        }) : r, (0, u.jsx)(E.Text, {
                            className: H.roleTagLabel,
                            variant: "text-xs/medium",
                            children: a
                        })]
                    })
                }, n)
            });

            function Y(e, t) {
                return U(e) ? (0, u.jsx)(V, {
                    row: e,
                    guildId: t
                }) : G(e) ? (0, u.jsx)(X, {
                    channel: e.record,
                    className: H.noIndent,
                    children: e.display
                }, e.record.id) : null
            }

            function Q(e, t) {
                return {
                    ...e.tag,
                    label: Y(e.row, t)
                }
            }

            function X(e) {
                let {
                    channel: t,
                    children: l,
                    className: n
                } = e, a = null != t.parent_id, s = (0, T.getChannelIconComponent)(t), r = (0, u.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    children: l
                });
                return t.isCategory() && (r = (0, u.jsx)(E.Text, {
                    variant: "eyebrow",
                    children: l
                })), (0, u.jsxs)("div", {
                    className: h(H.rowLabel, H.channelLabel, {
                        [H.hasParent]: a
                    }, n),
                    children: [null != s && (0, u.jsx)(s, {
                        width: 16,
                        height: 16,
                        className: H.channelIcon
                    }), r]
                })
            }

            function q(e) {
                let {
                    guildId: t,
                    selectedChannelIds: l,
                    selectedRoleIds: n,
                    roleRows: a,
                    channelRows: s,
                    onChannelChange: r,
                    onRoleChange: o
                } = e, i = (0, O.useStateFromStores)([j.default], () => {
                    var e, l;
                    return null !== (l = null === (e = j.default.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== l ? l : {}
                }, [t]), c = d.useMemo(() => (function(e) {
                    if (null == e) return {};
                    let t = {};
                    return e.forEach(e => {
                        let l = L.default.getChannel(e);
                        null != l && (t[e] = z(l))
                    }), t
                })(l), [l]), m = d.useMemo(() => Object.keys(c), [c]), N = d.useMemo(() => (function(e, t) {
                    let l = {};
                    return e.forEach(e => {
                        e in t && (l[e] = F(t[e]))
                    }), l
                })(n, i), [n, i]), f = d.useMemo(() => Object.keys(N), [N]), [v, I] = d.useState(""), [T, R] = d.useState(""), [C, _] = d.useState(!1), [p, P] = d.useState(!1), [M, S] = d.useState(!1), [A, b] = d.useState(!1), [V, q] = d.useState(!1), [K, J] = d.useState(!1), {
                    sections: W,
                    sectionCounts: Z
                } = d.useMemo(() => {
                    let e = "" !== v ? s.filter(e => x(v, e.display.toLocaleLowerCase())) : s,
                        t = [],
                        l = [];
                    return t[0] = e, l[0] = e.length, {
                        sections: t,
                        sectionCounts: l
                    }
                }, [v, s]), {
                    sections: $,
                    sectionCounts: ee
                } = d.useMemo(() => {
                    let e = "" !== T ? a.filter(e => x(T, e.display.toLocaleLowerCase())) : a,
                        t = [],
                        l = [];
                    return t[1] = e, l[1] = e.length, {
                        sections: t,
                        sectionCounts: l
                    }
                }, [T, a]), et = d.useCallback(e => {
                    let t = Object.values(e),
                        l = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return G(t)
                        }).map(e => e.row.record.id);
                    r(new Set(l))
                }, [r]), el = d.useCallback(e => {
                    let t = Object.values(e),
                        l = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return U(t)
                        }).map(e => e.row.record.id);
                    o(new Set(l))
                }, [o]), en = e => {
                    e ? (_(!1), P(!1)) : (S(!1), b(!1))
                };
                d.useEffect(() => {
                    let e = setTimeout(() => {
                        q(C || p)
                    }, 32);
                    return () => {
                        clearTimeout(e)
                    }
                }, [C, p]), d.useEffect(() => {
                    let e = setTimeout(() => {
                        J(M || A)
                    }, 32);
                    return () => {
                        clearTimeout(e)
                    }
                }, [M, A]);
                let ea = (e, t, l, n) => {
                        l.stopPropagation(), l.preventDefault(), "INPUT" === t ? n ? _(e) : S(e) : "LIST" === t ? n ? P(e) : b(e) : n ? (_(e), P(e)) : (S(e), b(e))
                    },
                    es = d.useCallback(e => {
                        let t = {
                            ...c
                        };
                        t[e.id] = z(e.record), et(t), I("")
                    }, [et, c]),
                    er = d.useCallback(e => {
                        let t = {
                            ...N
                        };
                        t[e.id] = F(e.record), el(t), R("")
                    }, [el, N]),
                    eo = d.useRef(null),
                    ei = d.useRef(null),
                    eu = d.useCallback(e => {
                        let {
                            section: t,
                            row: l
                        } = e, n = W[t][l];
                        return (0, u.jsx)(E.Clickable, {
                            className: h(H.selectableSearchRow, H.rowHeight),
                            onClick: e => {
                                var t;
                                e.stopPropagation(), es(n), null === (t = eo.current) || void 0 === t || t.focus()
                            },
                            children: (0, u.jsx)("div", {
                                className: H.rowContainer,
                                children: (0, u.jsx)(X, {
                                    channel: n.record,
                                    className: H.channelRowLabel,
                                    children: n.display
                                }, n.record.id)
                            })
                        }, n.id)
                    }, [es, W]),
                    ed = d.useCallback(e => {
                        let {
                            section: l,
                            row: n
                        } = e, a = $[l][n];
                        return (0, u.jsx)(E.Clickable, {
                            className: h(H.selectableSearchRow, H.rowHeight),
                            onClick: e => {
                                var t;
                                e.stopPropagation(), er(a), null === (t = ei.current) || void 0 === t || t.focus()
                            },
                            children: (0, u.jsx)("div", {
                                className: H.rowContainer,
                                children: (0, u.jsx)(E.Text, {
                                    className: h(H.rowLabel, H.roleLabel),
                                    variant: "text-xs/medium",
                                    children: Y(a, t)
                                })
                            })
                        }, a.id)
                    }, [t, er, $]),
                    ec = d.useMemo(() => m.map(e => Q(c[e], t)), [c, m, t]),
                    eh = d.useMemo(() => f.map(e => Q(N[e], t)), [N, f, t]);
                return (0, u.jsxs)("div", {
                    className: H.channelAndRoleContainer,
                    children: [(0, u.jsx)("div", {
                        className: H.searchContainer,
                        children: (0, u.jsxs)("div", {
                            className: H.searchBox,
                            children: [(0, u.jsx)(g.default, {
                                tags: ec,
                                maxHeight: 98,
                                size: g.default.Sizes.MEDIUM,
                                query: v,
                                onRemoveTag: e => {
                                    let t = m[e],
                                        {
                                            [t]: l,
                                            ...n
                                        } = c;
                                    et(n), I(""), en(!0)
                                },
                                onQueryChange: e => {
                                    I(e.trim().toLocaleLowerCase())
                                },
                                placeholder: w.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
                                sections: [m.length],
                                inputProps: {
                                    "aria-labelledby": D,
                                    "aria-controls": B,
                                    "aria-expanded": V,
                                    onFocus: e => ea(!0, "INPUT", e, !0),
                                    onBlur: e => ea(!1, "INPUT", e, !0)
                                }
                            }), V && (0, u.jsx)("div", {
                                ref: eo,
                                className: H.resultsListParent,
                                onFocus: e => ea(!0, "LIST", e, !0),
                                onBlur: e => ea(!1, "LIST", e, !0),
                                tabIndex: -1,
                                children: (0, u.jsx)(E.ListAuto, {
                                    className: H.resultsList,
                                    sections: Z,
                                    renderRow: eu,
                                    rowHeight: 24,
                                    sectionHeight: 0,
                                    role: void 0,
                                    innerRole: "listbox",
                                    innerId: B,
                                    innerAriaOrientation: "vertical"
                                })
                            })]
                        })
                    }), (0, u.jsx)(E.Text, {
                        className: H.helperText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: w.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS
                    }), (0, u.jsx)("div", {
                        className: H.searchContainer,
                        children: (0, u.jsxs)("div", {
                            className: H.searchBox,
                            children: [(0, u.jsx)(g.default, {
                                tags: eh,
                                maxHeight: 98,
                                size: g.default.Sizes.MEDIUM,
                                query: T,
                                onRemoveTag: e => {
                                    let t = f[e],
                                        {
                                            [t]: l,
                                            ...n
                                        } = N;
                                    el(n), R(""), en(!1)
                                },
                                onQueryChange: e => {
                                    R(e.trim().toLocaleLowerCase())
                                },
                                placeholder: w.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
                                sections: [f.length],
                                inputProps: {
                                    "aria-labelledby": y,
                                    "aria-controls": k,
                                    "aria-expanded": K,
                                    onFocus: e => ea(!0, "INPUT", e, !1),
                                    onBlur: e => ea(!1, "INPUT", e, !1)
                                }
                            }), K && (0, u.jsx)("div", {
                                ref: ei,
                                className: H.resultsListParent,
                                onFocus: e => ea(!0, "LIST", e, !1),
                                onBlur: e => ea(!1, "LIST", e, !1),
                                tabIndex: -1,
                                children: (0, u.jsx)(E.ListAuto, {
                                    className: H.resultsList,
                                    sections: ee,
                                    renderRow: ed,
                                    rowHeight: 24,
                                    sectionHeight: 0,
                                    role: void 0,
                                    innerRole: "listbox",
                                    innerId: k,
                                    innerAriaOrientation: "vertical"
                                })
                            })]
                        })
                    }), (0, u.jsx)(E.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: w.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT
                    })]
                })
            }

            function K(e) {
                let {
                    guildId: t,
                    selectedChannelIds: l,
                    selectedRoleIds: n,
                    onChannelChange: a,
                    onRoleChange: s,
                    disableEveryoneRole: r,
                    includeRoleRestrictedPrivateChannels: o = !1
                } = e, {
                    channelRows: i,
                    roleRows: d
                } = (0, O.useStateFromStores)([j.default, P.default, _.default], () => {
                    var e, a;
                    let s = _.default.getChannels(t)[b.ChannelTypes.GUILD_CATEGORY],
                        i = [..._.default.getChannels(t)[_.GUILD_SELECTABLE_CHANNELS_KEY], ..._.default.getChannels(t)[_.GUILD_VOCAL_CHANNELS_KEY]],
                        u = [],
                        d = {};
                    s.forEach(e => {
                        let {
                            channel: t,
                            comparator: l
                        } = e;
                        "null" !== t.id && (d[t.id] = [], u.push({
                            channel: t,
                            comparator: l
                        }))
                    }), i.forEach(e => {
                        let {
                            channel: t,
                            comparator: n
                        } = e;
                        if (!(t.isThread() || l.has(t.id))) !(!o && (0, v.default)(t)) && (null == t.parent_id ? u.push({
                            channel: t,
                            comparator: n
                        }) : (null == d[t.parent_id] && (d[t.parent_id] = []), d[t.parent_id].push({
                            channel: t,
                            comparator: n
                        })))
                    });
                    let c = u.sort((e, t) => {
                            let {
                                comparator: l,
                                channel: n
                            } = e, {
                                comparator: a,
                                channel: s
                            } = t;
                            return n.isCategory() && !s.isCategory() ? 1 : !n.isCategory() && s.isCategory() ? -1 : a - l
                        }).reduce((e, t) => {
                            let {
                                channel: n
                            } = t;
                            if (n.isGuildStageVoice() || n.isThread() || l.has(n.id)) return e;
                            e.push(z(n).row);
                            let a = d[n.id];
                            return null != a && a.length > 0 && a.forEach(t => {
                                let {
                                    channel: l
                                } = t;
                                e.push(z(l).row)
                            }), e
                        }, []),
                        h = j.default.getGuild(t),
                        m = P.default.getCurrentUser();
                    if (null == h || null == m) return {
                        channelRows: [],
                        roleRows: []
                    };
                    let N = A.default.getHighestRole(h, m.id),
                        f = Object.values(null !== (a = null === (e = j.default.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== a ? a : {}).filter(e => !e.managed).filter(e => !n.has(e.id)).filter(e => !r || e.id !== t).filter(e => A.default.isRoleHigher(h, m.id, N, e)).map(e => F(e).row);
                    return {
                        channelRows: c,
                        roleRows: f
                    }
                }, [r, t, o, l, n], N);
                return (0, u.jsx)(q, {
                    channelRows: i,
                    roleRows: d,
                    guildId: t,
                    selectedChannelIds: l,
                    selectedRoleIds: n,
                    onChannelChange: a,
                    onRoleChange: s
                })
            }(o = a || (a = {}))[o.CHANNELS = 0] = "CHANNELS", o[o.ROLES = 1] = "ROLES", (i = s || (s = {})).NONE = "NONE", i.LIST = "LIST", i.INPUT = "INPUT"
        }
    }
]);