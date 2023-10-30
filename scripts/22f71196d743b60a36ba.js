(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54057"], {
        145106: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
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
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("917351"),
                r = l.n(s),
                o = l("446674"),
                i = l("77078"),
                u = l("923959"),
                d = l("476765"),
                c = l("423487"),
                N = l("898260"),
                h = l("449008"),
                m = l("385334"),
                f = l("330724"),
                x = l("136278"),
                E = l("869447"),
                O = l("619594"),
                g = l("653138"),
                I = l("782340"),
                R = l("326696");

            function T(e) {
                var t, l, s, c, h;
                let {
                    transitionState: m,
                    onClose: T,
                    onSave: L,
                    onDelete: C,
                    option: _,
                    guild: j,
                    prompt: p,
                    index: P
                } = e, S = (0, d.useUID)(), M = (0, o.useStateFromStores)([u.default], () => u.default.getDefaultChannel(j.id)), [A, b] = a.useState(() => null !== (t = null == _ ? void 0 : _.emoji) && void 0 !== t ? t : null), [H, w] = a.useState(() => null !== (l = null == _ ? void 0 : _.title) && void 0 !== l ? l : ""), [D, B] = a.useState(() => null !== (s = null == _ ? void 0 : _.description) && void 0 !== s ? s : ""), [y, k] = a.useState(() => new Set(null !== (c = null == _ ? void 0 : _.channelIds) && void 0 !== c ? c : [])), [U, G] = a.useState(() => new Set(null !== (h = null == _ ? void 0 : _.roleIds) && void 0 !== h ? h : [])), [F, z] = a.useState({}), V = a.useRef(null);
                return a.useLayoutEffect(() => {
                    var e;
                    return null === (e = V.current) || void 0 === e ? void 0 : e.focus()
                }, []), (0, n.jsxs)(i.ModalRoot, {
                    transitionState: m,
                    "aria-labelledby": S,
                    children: [(0, n.jsxs)("div", {
                        className: R.container,
                        children: [(0, n.jsx)(i.ModalCloseButton, {
                            className: R.closeButton,
                            onClick: T
                        }), (0, n.jsx)(i.Text, {
                            className: R.questionNumber,
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: I.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
                                index: P + 1
                            })
                        }), (0, n.jsx)(i.Heading, {
                            id: S,
                            className: R.header,
                            variant: "heading-lg/semibold",
                            children: null != p.title && p.title.length > 0 ? p.title : I.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE
                        }), (0, n.jsx)(i.Heading, {
                            className: R.nameHeader,
                            variant: "heading-md/semibold",
                            children: I.default.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER
                        }), (0, n.jsx)(i.TextInput, {
                            inputRef: V,
                            placeholder: I.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
                            value: H,
                            onChange: e => w(e),
                            maxLength: g.MAX_PROMPT_OPTION_TITLE_LENGTH,
                            autoFocus: !0
                        }), (0, n.jsx)(i.InputError, {
                            error: F.title
                        }), (0, n.jsx)(i.TextInput, {
                            className: R.descriptionInput,
                            placeholder: I.default.Messages.ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
                            value: D,
                            onChange: e => B(e),
                            maxLength: g.MAX_PROMPT_OPTION_DESCRIPTION_LENGTH
                        }), (0, n.jsx)(N.default, {
                            className: R.divider
                        }), (0, n.jsx)(i.Heading, {
                            className: R.rolesHeader,
                            variant: "heading-md/semibold",
                            children: I.default.Messages.ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER
                        }), (0, n.jsx)(O.default, {
                            guildId: j.id,
                            selectedChannelIds: y,
                            selectedRoleIds: U,
                            disableEveryoneRole: !0,
                            placeholder: I.default.Messages.ONBOARDING_PROMPT_OPTION_CHANNEL_ROLES_PLACEHOLDER,
                            onChannelChange: e => k(e),
                            onRoleChange: e => G(e)
                        }), null == F.roles ? null : (0, n.jsx)(i.InputError, {
                            error: F.roles
                        }), (0, n.jsx)(v, {
                            guild: j,
                            roleIds: U
                        }), (0, n.jsx)(N.default, {
                            className: R.divider
                        }), (0, n.jsxs)("div", {
                            className: R.emojiQuestionContainer,
                            children: [(0, n.jsxs)("div", {
                                className: R.emojiQuestionText,
                                children: [(0, n.jsx)(i.Heading, {
                                    variant: "heading-md/semibold",
                                    children: I.default.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_HEADER
                                }), (0, n.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: I.default.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER
                                })]
                            }), (0, n.jsx)(E.default, {
                                emoji: A,
                                setEmoji: b,
                                channel: M
                            })]
                        })]
                    }), (0, n.jsx)(i.ModalFooter, {
                        children: (0, n.jsxs)("div", {
                            className: R.footerButtons,
                            children: [(0, n.jsx)("div", {
                                className: R.removeButton,
                                children: (0, n.jsx)(i.Button, {
                                    size: i.Button.Sizes.SMALL,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.RED,
                                    onClick: () => {
                                        C(), T()
                                    },
                                    children: I.default.Messages.REMOVE
                                })
                            }), (0, n.jsxs)("div", {
                                className: R.rightButtons,
                                children: [(0, n.jsx)(i.Button, {
                                    onClick: T,
                                    size: i.Button.Sizes.SMALL,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    children: I.default.Messages.CANCEL
                                }), (0, n.jsx)(i.Button, {
                                    onClick: () => {
                                        var e;
                                        let t = {
                                                id: null !== (e = null == _ ? void 0 : _.id) && void 0 !== e ? e : "".concat(Date.now()),
                                                title: H,
                                                description: D,
                                                channelIds: Array.from(y).sort(),
                                                roleIds: Array.from(U).sort(),
                                                emoji: null == A ? void 0 : A
                                            },
                                            l = x.default.editedOnboardingPrompts,
                                            n = function(e, t, l, n) {
                                                let a = {};
                                                n.title.length <= 0 && (a.title = I.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
                                                let s = (0, f.validateOptionRoles)(e, t, l, n);
                                                return null != s && (a.roles = s), a
                                            }(j, l, p, t);
                                        z(n), r.isEmpty(n) && (L(t), T())
                                    },
                                    children: I.default.Messages.SAVE
                                })]
                            })]
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    guild: t,
                    roleIds: l
                } = e, a = Array.from(l).map(e => t.getRole(e)).filter(h.isNotNullish).find(m.isRolePowerful);
                return null == a ? null : (0, n.jsx)("div", {
                    className: R.notice,
                    children: (0, n.jsxs)("div", {
                        className: R.noticeMessage,
                        children: [(0, n.jsx)(c.default, {
                            className: R.noticeIcon
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: I.default.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({
                                permissions: (0, m.getPowerfulPermissionTitles)(t, a).join(", ")
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
                    channel: N
                } = e, h = e => (t, l) => {
                    var n, a;
                    null != t && (null == t.id ? c({
                        name: null !== (n = t.optionallyDiverseSequence) && void 0 !== n ? n : ""
                    }) : c({
                        id: t.id,
                        name: null !== (a = t.originalName) && void 0 !== a ? a : t.name,
                        animated: t.animated
                    }), l && e())
                }, m = null == d || null == d.name ? null : () => {
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
                                onSelectEmoji: h(t),
                                pickerIntention: u.EmojiIntention.COMMUNITY_CONTENT,
                                channel: N
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
                                renderButtonContents: m
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
            });
            var n, a, s, r, o, i, u = l("37983"),
                d = l("884691"),
                c = l("414456"),
                N = l.n(c),
                h = l("714617"),
                m = l.n(h),
                f = l("448105"),
                x = l.n(f),
                E = l("446674"),
                O = l("77078"),
                g = l("137223"),
                I = l("656038"),
                R = l("679653"),
                T = l("419830"),
                v = l("405645"),
                L = l("19766"),
                C = l("42203"),
                _ = l("923959"),
                j = l("305961"),
                p = l("27618"),
                P = l("697218"),
                S = l("476765"),
                M = l("483093"),
                A = l("991170"),
                b = l("49111"),
                H = l("782340"),
                w = l("470514");
            let D = (0, S.uid)(),
                B = (0, S.uid)(),
                y = (0, S.uid)(),
                k = (0, S.uid)();

            function U(e) {
                return e.type === r.ROLE
            }

            function G(e) {
                return e.type === r.CHANNEL
            }

            function F(e) {
                let t = "".concat(e.name.includes(L.EVERYONE_ID) ? "" : "@").concat(e.name);
                return {
                    tag: {
                        type: g.RichTagTypes.ROLE,
                        label: t
                    },
                    row: {
                        id: e.id,
                        display: t,
                        type: r.ROLE,
                        record: e
                    }
                }
            }

            function z(e) {
                let t = (0, R.computeChannelName)(e, P.default, p.default);
                return {
                    tag: {
                        type: g.RichTagTypes.CHANNEL,
                        label: t
                    },
                    row: {
                        id: e.id,
                        display: t,
                        type: r.CHANNEL,
                        record: e
                    }
                }
            }(n = r || (r = {})).CHANNEL = "CHANNEL", n.ROLE = "ROLE";
            let V = d.memo(function(e) {
                let {
                    row: t,
                    guildId: l
                } = e, {
                    id: n,
                    name: a
                } = t.record, s = (0, v.useRoleIcon)({
                    guildId: l,
                    roleId: n,
                    size: 16
                }), r = a.includes(L.EVERYONE_ID) ? "" : "@";
                return (0, u.jsx)("div", {
                    className: w.roleTagContainer,
                    children: (0, u.jsxs)("div", {
                        className: w.roleTag,
                        children: [null != s ? (0, u.jsx)(M.default, {
                            className: w.roleTagIcon,
                            ...s,
                            enableTooltip: !1
                        }) : r, (0, u.jsx)(O.Text, {
                            className: w.roleTagLabel,
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
                    className: w.noIndent,
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
                } = e, a = null != t.parent_id, s = (0, T.getChannelIconComponent)(t), r = (0, u.jsx)(O.Text, {
                    variant: "text-xs/medium",
                    children: l
                });
                return t.isCategory() && (r = (0, u.jsx)(O.Text, {
                    variant: "eyebrow",
                    children: l
                })), (0, u.jsxs)("div", {
                    className: N(w.rowLabel, w.channelLabel, {
                        [w.hasParent]: a
                    }, n),
                    children: [null != s && (0, u.jsx)(s, {
                        width: 16,
                        height: 16,
                        className: w.channelIcon
                    }), r]
                })
            }

            function q(e) {
                var t;
                let {
                    guildId: l,
                    selectedChannelIds: n,
                    selectedRoleIds: a,
                    roleRows: s,
                    channelRows: r,
                    onChannelChange: c,
                    onRoleChange: h
                } = e, m = (0, E.useStateFromStores)([j.default], () => {
                    var e;
                    return null !== (t = null === (e = j.default.getGuild(l)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : {}
                }, [l]), f = d.useMemo(() => (function(e) {
                    if (null == e) return {};
                    let t = {};
                    return e.forEach(e => {
                        let l = C.default.getChannel(e);
                        null != l && (t[e] = z(l))
                    }), t
                })(n), [n]), I = d.useMemo(() => Object.keys(f), [f]), R = d.useMemo(() => (function(e, t) {
                    let l = {};
                    return e.forEach(e => {
                        e in t && (l[e] = F(t[e]))
                    }), l
                })(a, m), [a, m]), T = d.useMemo(() => Object.keys(R), [R]), [v, L] = d.useState(""), [_, p] = d.useState(""), [P, S] = d.useState(!1), [M, A] = d.useState(!1), [b, V] = d.useState(!1), [q, K] = d.useState(!1), [J, W] = d.useState(!1), [Z, $] = d.useState(!1), {
                    sections: ee,
                    sectionCounts: et
                } = d.useMemo(() => {
                    let e = "" !== v ? r.filter(e => x(v, e.display.toLocaleLowerCase())) : r,
                        t = [],
                        l = [];
                    return t[o.CHANNELS] = e, l[o.CHANNELS] = e.length, {
                        sections: t,
                        sectionCounts: l
                    }
                }, [v, r]), {
                    sections: el,
                    sectionCounts: en
                } = d.useMemo(() => {
                    let e = "" !== _ ? s.filter(e => x(_, e.display.toLocaleLowerCase())) : s,
                        t = [],
                        l = [];
                    return t[o.ROLES] = e, l[o.ROLES] = e.length, {
                        sections: t,
                        sectionCounts: l
                    }
                }, [_, s]), ea = d.useCallback(e => {
                    let t = Object.values(e),
                        l = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return G(t)
                        }).map(e => e.row.record.id);
                    c(new Set(l))
                }, [c]), es = d.useCallback(e => {
                    let t = Object.values(e),
                        l = t.filter(e => {
                            let {
                                row: t
                            } = e;
                            return U(t)
                        }).map(e => e.row.record.id);
                    h(new Set(l))
                }, [h]), er = e => {
                    e ? (S(!1), A(!1)) : (V(!1), K(!1))
                };
                d.useEffect(() => {
                    let e = setTimeout(() => {
                        W(P || M)
                    }, 32);
                    return () => {
                        clearTimeout(e)
                    }
                }, [P, M]), d.useEffect(() => {
                    let e = setTimeout(() => {
                        $(b || q)
                    }, 32);
                    return () => {
                        clearTimeout(e)
                    }
                }, [b, q]);
                let eo = (e, t, l, n) => {
                        l.stopPropagation(), l.preventDefault(), t === i.INPUT ? n ? S(e) : V(e) : t === i.LIST ? n ? A(e) : K(e) : n ? (S(e), A(e)) : (V(e), K(e))
                    },
                    ei = d.useCallback(e => {
                        let t = {
                            ...f
                        };
                        t[e.id] = z(e.record), ea(t), L("")
                    }, [ea, f]),
                    eu = d.useCallback(e => {
                        let t = {
                            ...R
                        };
                        t[e.id] = F(e.record), es(t), p("")
                    }, [es, R]),
                    ed = d.useRef(null),
                    ec = d.useRef(null),
                    eN = d.useCallback(e => {
                        let {
                            section: t,
                            row: l
                        } = e, n = ee[t][l];
                        return (0, u.jsx)(O.Clickable, {
                            className: N(w.selectableSearchRow, w.rowHeight),
                            onClick: e => {
                                var t;
                                e.stopPropagation(), ei(n), null === (t = ed.current) || void 0 === t || t.focus()
                            },
                            children: (0, u.jsx)("div", {
                                className: w.rowContainer,
                                children: (0, u.jsx)(X, {
                                    channel: n.record,
                                    className: w.channelRowLabel,
                                    children: n.display
                                }, n.record.id)
                            })
                        }, n.id)
                    }, [ei, ee]),
                    eh = d.useCallback(e => {
                        let {
                            section: t,
                            row: n
                        } = e, a = el[t][n];
                        return (0, u.jsx)(O.Clickable, {
                            className: N(w.selectableSearchRow, w.rowHeight),
                            onClick: e => {
                                var t;
                                e.stopPropagation(), eu(a), null === (t = ec.current) || void 0 === t || t.focus()
                            },
                            children: (0, u.jsx)("div", {
                                className: w.rowContainer,
                                children: (0, u.jsx)(O.Text, {
                                    className: N(w.rowLabel, w.roleLabel),
                                    variant: "text-xs/medium",
                                    children: Y(a, l)
                                })
                            })
                        }, a.id)
                    }, [l, eu, el]),
                    em = d.useMemo(() => I.map(e => Q(f[e], l)), [f, I, l]),
                    ef = d.useMemo(() => T.map(e => Q(R[e], l)), [R, T, l]);
                return (0, u.jsxs)("div", {
                    className: w.channelAndRoleContainer,
                    children: [(0, u.jsx)("div", {
                        className: w.searchContainer,
                        children: (0, u.jsxs)("div", {
                            className: w.searchBox,
                            children: [(0, u.jsx)(g.default, {
                                tags: em,
                                maxHeight: 98,
                                size: g.default.Sizes.MEDIUM,
                                query: v,
                                onRemoveTag: e => {
                                    let t = I[e],
                                        {
                                            [t]: l,
                                            ...n
                                        } = f;
                                    ea(n), L(""), er(!0)
                                },
                                onQueryChange: e => {
                                    L(e.trim().toLocaleLowerCase())
                                },
                                placeholder: H.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
                                sections: [I.length],
                                inputProps: {
                                    "aria-labelledby": D,
                                    "aria-controls": B,
                                    "aria-expanded": J,
                                    onFocus: e => eo(!0, i.INPUT, e, !0),
                                    onBlur: e => eo(!1, i.INPUT, e, !0)
                                }
                            }), J && (0, u.jsx)("div", {
                                ref: ed,
                                className: w.resultsListParent,
                                onFocus: e => eo(!0, i.LIST, e, !0),
                                onBlur: e => eo(!1, i.LIST, e, !0),
                                tabIndex: -1,
                                children: (0, u.jsx)(O.ListAuto, {
                                    className: w.resultsList,
                                    sections: et,
                                    renderRow: eN,
                                    rowHeight: 24,
                                    sectionHeight: 0,
                                    role: void 0,
                                    innerRole: "listbox",
                                    innerId: B,
                                    innerAriaOrientation: "vertical"
                                })
                            })]
                        })
                    }), (0, u.jsx)(O.Text, {
                        className: w.helperText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: H.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS
                    }), (0, u.jsx)("div", {
                        className: w.searchContainer,
                        children: (0, u.jsxs)("div", {
                            className: w.searchBox,
                            children: [(0, u.jsx)(g.default, {
                                tags: ef,
                                maxHeight: 98,
                                size: g.default.Sizes.MEDIUM,
                                query: _,
                                onRemoveTag: e => {
                                    let t = T[e],
                                        {
                                            [t]: l,
                                            ...n
                                        } = R;
                                    es(n), p(""), er(!1)
                                },
                                onQueryChange: e => {
                                    p(e.trim().toLocaleLowerCase())
                                },
                                placeholder: H.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
                                sections: [T.length],
                                inputProps: {
                                    "aria-labelledby": y,
                                    "aria-controls": k,
                                    "aria-expanded": Z,
                                    onFocus: e => eo(!0, i.INPUT, e, !1),
                                    onBlur: e => eo(!1, i.INPUT, e, !1)
                                }
                            }), Z && (0, u.jsx)("div", {
                                ref: ec,
                                className: w.resultsListParent,
                                onFocus: e => eo(!0, i.LIST, e, !1),
                                onBlur: e => eo(!1, i.LIST, e, !1),
                                tabIndex: -1,
                                children: (0, u.jsx)(O.ListAuto, {
                                    className: w.resultsList,
                                    sections: en,
                                    renderRow: eh,
                                    rowHeight: 24,
                                    sectionHeight: 0,
                                    role: void 0,
                                    innerRole: "listbox",
                                    innerId: k,
                                    innerAriaOrientation: "vertical"
                                })
                            })]
                        })
                    }), (0, u.jsx)(O.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: H.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT
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
                } = (0, E.useStateFromStores)([j.default, P.default, _.default], () => {
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
                        if (!(t.isThread() || l.has(t.id))) !(!o && (0, I.default)(t)) && (null == t.parent_id ? u.push({
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
                        N = j.default.getGuild(t),
                        h = P.default.getCurrentUser();
                    if (null == N || null == h) return {
                        channelRows: [],
                        roleRows: []
                    };
                    let m = A.default.getHighestRole(N, h.id),
                        f = Object.values(null !== (a = null === (e = j.default.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== a ? a : {}).filter(e => !e.managed).filter(e => !n.has(e.id)).filter(e => !r || e.id !== t).filter(e => A.default.isRoleHigher(N, h.id, m, e)).map(e => F(e).row);
                    return {
                        channelRows: c,
                        roleRows: f
                    }
                }, [r, t, o, l, n], m);
                return (0, u.jsx)(q, {
                    channelRows: i,
                    roleRows: d,
                    guildId: t,
                    selectedChannelIds: l,
                    selectedRoleIds: n,
                    onChannelChange: a,
                    onRoleChange: s
                })
            }(a = o || (o = {}))[a.CHANNELS = 0] = "CHANNELS", a[a.ROLES = 1] = "ROLES", (s = i || (i = {})).NONE = "NONE", s.LIST = "LIST", s.INPUT = "INPUT"
        }
    }
]);