            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return F
                }
            }), s("222007"), s("424973");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s.n(r),
                d = s("65597"),
                u = s("77078"),
                c = s("272030"),
                E = s("851387"),
                _ = s("599417"),
                T = s("84339"),
                I = s("841098"),
                S = s("716241"),
                N = s("685665"),
                g = s("770115"),
                f = s("102985"),
                A = s("697218"),
                L = s("941886"),
                m = s("810567"),
                C = s("124299"),
                O = s("258078"),
                h = s("599110"),
                R = s("334572"),
                D = s("158998"),
                M = s("592407"),
                G = s("900938"),
                x = s("431451"),
                p = s("772871"),
                U = s("49111"),
                v = s("782340"),
                j = s("282802");

            function P(e) {
                var t;
                let {
                    transitionState: s,
                    guild: l,
                    user: i,
                    ban: r,
                    hideDiscriminator: o,
                    onClose: d
                } = e, [c, T] = n.useState(!1), [I, g] = n.useState(null), {
                    analyticsLocations: f
                } = (0, N.default)(), A = null !== (t = null == f ? void 0 : f[0]) && void 0 !== t ? t : null;
                async function L() {
                    if (null != l) {
                        g(null), T(!0);
                        try {
                            await E.default.unbanUser(l.id, i.id), d(), h.default.track(U.AnalyticEvents.GUILD_BAN_REMOVED, {
                                ...(0, S.collectGuildAnalyticsMetadata)(l.id),
                                target_user_id: i.id,
                                reason: r.reason,
                                location: A
                            })
                        } catch (e) {
                            g(new _.default(e)), T(!1)
                        }
                    }
                }
                return (0, a.jsxs)(u.ModalRoot, {
                    className: j.bannedUserModal,
                    transitionState: s,
                    children: [(0, a.jsxs)(u.ModalHeader, {
                        className: j.header,
                        separator: !1,
                        children: [(0, a.jsx)(O.default, {
                            size: O.default.Sizes.SIZE_24,
                            className: j.userUsername,
                            children: D.default.getUserTag(i, {
                                mode: "username",
                                identifiable: o ? "never" : "always"
                            })
                        }), o || i.isPomelo() ? null : (0, a.jsxs)(O.default, {
                            size: O.default.Sizes.SIZE_24,
                            className: j.userDiscrim,
                            children: ["#", i.discriminator]
                        })]
                    }), (0, a.jsxs)(u.ModalContent, {
                        className: j.content,
                        children: [(0, a.jsx)(u.Text, {
                            className: j.reasonHeader,
                            variant: "text-xs/normal",
                            children: v.default.Messages.BAN_REASON
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: null != r.reason && "" !== r.reason ? r.reason : v.default.Messages.NO_BAN_REASON
                        }), null != I ? (0, a.jsx)(u.Text, {
                            className: j.error,
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: I.getAnyErrorMessage()
                        }) : null]
                    }), (0, a.jsxs)(u.ModalFooter, {
                        className: j.footer,
                        children: [(0, a.jsx)(u.Button, {
                            onClick: L,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.RED,
                            submitting: c,
                            children: v.default.Messages.REVOKE_BAN
                        }), (0, a.jsx)(u.Button, {
                            onClick: d,
                            children: v.default.Messages.DONE
                        })]
                    })]
                })
            }
            class y extends n.PureComponent {
                render() {
                    let {
                        user: e,
                        hideDiscriminator: t,
                        guild: s
                    } = this.props, n = D.default.getGlobalName(e);
                    return (0, a.jsxs)(u.Clickable, {
                        className: i(j.bannedUser),
                        onClick: this.handleShowModal,
                        onContextMenu: this.handleContextMenu,
                        children: [(0, a.jsx)(u.Avatar, {
                            src: e.getAvatarURL(null == s ? void 0 : s.id, 40),
                            "aria-label": e.username,
                            size: u.AvatarSizes.SIZE_40,
                            className: j.bannedUserAvatar
                        }), (0, a.jsxs)("div", {
                            className: j.username,
                            children: [D.default.getUserTag(e, {
                                mode: "username",
                                identifiable: t ? "never" : "always"
                            }), !t && !e.isPomelo() && (0, a.jsxs)("span", {
                                className: j.discrim,
                                children: ["#", e.discriminator]
                            }), e.isPomelo() && (0, a.jsxs)("span", {
                                className: j.discrim,
                                children: ["(", n, ")"]
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleShowModal = () => {
                        let {
                            guild: e,
                            user: t,
                            hideDiscriminator: s,
                            ban: n
                        } = this.props;
                        (0, u.openModal)(l => (0, a.jsx)(P, {
                            ...l,
                            guild: e,
                            user: t,
                            ban: n,
                            hideDiscriminator: s
                        }))
                    }, this.handleContextMenu = e => {
                        (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("590079").then(s.bind(s, "590079"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                user: this.props.user
                            })
                        })
                    }
                }
            }
            let b = n.forwardRef(function(e, t) {
                let {
                    guild: s,
                    sortedBans: l,
                    bans: i
                } = e, r = (0, d.default)([f.default], () => f.default.hidePersonalInformation, []), o = n.useCallback(e => {
                    var t;
                    if (null == i && 0 === e) return 60;
                    let s = l[e],
                        a = null == i ? void 0 : i.get(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "");
                    return null == s || null == a ? 0 : 60
                }, [i, l]), c = n.useCallback(e => {
                    var t;
                    if (null == i && 0 === e) return (0, a.jsx)(u.Spinner, {
                        className: j.spinner,
                        type: u.Spinner.Type.SPINNING_CIRCLE
                    }, "spinner");
                    let n = l[e],
                        o = null == i ? void 0 : i.get(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "");
                    if (null != n && null != o) return (0, a.jsx)(y, {
                        user: n,
                        ban: o,
                        hideDiscriminator: r,
                        guild: s
                    }, n.id)
                }, [i, s, l, r]);
                return (0, a.jsx)(C.default, {
                    role: "listbox",
                    listPadding: [8, 8, 8, 8],
                    rowCount: l.length,
                    rowHeight: o,
                    renderRow: c,
                    ref: t
                })
            });

            function B(e) {
                let {
                    guildId: t,
                    storedSearchQuery: s
                } = e, [l, i] = n.useState(null != s ? s : ""), [r, o] = n.useState(!1), d = n.useCallback(() => {
                    M.default.setSection(U.GuildSettingsSections.SAFETY), (0, x.setSafetyPage)(p.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION)
                }, []), c = n.useCallback(e => {
                    i(e), 0 === e.trim().length && M.default.setSearchQuery(e)
                }, []), _ = n.useCallback(() => {
                    i(""), M.default.setSearchQuery("")
                }, []), T = n.useCallback(async () => {
                    if (0 === l.trim().length) {
                        M.default.setSearchQuery(l), o(!1);
                        return
                    }
                    if (!r) try {
                        o(!0);
                        let [e, s] = (0, g.splitQuery)(l), a = e[0];
                        M.default.setSearchQuery(l), await E.default.searchGuildBans(t, a, s), o(!1)
                    } catch (e) {
                        o(!1)
                    }
                }, [t, r, l]), I = n.useCallback(e => {
                    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), T())
                }, [T]);
                return (0, a.jsxs)(u.FormSection, {
                    tag: u.FormTitleTags.H1,
                    title: v.default.Messages.BANS_HEADER_NEW,
                    children: [(0, a.jsx)("div", {
                        className: j.settingsHeader,
                        children: (0, a.jsx)(u.FormText, {
                            type: u.FormTextTypes.DESCRIPTION,
                            className: j.description,
                            children: v.default.Messages.BANS_HINT.format({
                                onModerationClick: d
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: j.bansSearchContainer,
                        children: [(0, a.jsx)(m.default, {
                            className: j.searchBar,
                            query: null != l ? l : "",
                            placeholder: v.default.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
                            "aria-label": v.default.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
                            onChange: c,
                            onKeyDown: I,
                            onClear: _,
                            size: m.default.Sizes.MEDIUM,
                            isLoading: r
                        }), (0, a.jsx)(u.Button, {
                            color: u.Button.Colors.BRAND,
                            onClick: T,
                            size: u.Button.Sizes.SMALL,
                            disabled: r,
                            submitting: r,
                            className: j.searchButton,
                            children: v.default.Messages.SEARCH
                        })]
                    })]
                }, "bans-header")
            }

            function F() {
                var e, t;
                let {
                    guild: l,
                    searchQuery: c
                } = (0, d.default)([G.default], () => G.default.getProps(), [], r.isEqual), _ = null != c && c.trim().length > 0, S = (0, T.default)(_), N = _ !== S, [f] = (0, d.default)([G.default], () => G.default.getBans(), [], R.isVersionEqual), m = null !== (e = null == f ? void 0 : f.size) && void 0 !== e ? e : 0, C = (0, I.default)(), O = null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "", h = n.useRef(null), D = n.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
                    if (null == t || 0 === e.trim().length) return !1;
                    let [
                        [s], a
                    ] = (0, g.splitQuery)(e);
                    return !!a.includes(t.id) || null != s && (!!(t.username.toLowerCase().includes(s.toLowerCase()) || null != t.globalName && t.globalName.toLowerCase().includes(s.toLowerCase())) || !1)
                }, []), M = n.useCallback((e, t, s) => {
                    if (null == e || 0 === s) return [];
                    let a = [];
                    for (let s of e.keys()) {
                        let e = A.default.getUser(s);
                        null != e && D(t)(e) && a.push(e)
                    }
                    return a
                }, [D]), x = n.useMemo(() => M(f, c, m), [f, M, c, m]), p = null != f, U = x.length % 1e3 == 0 && x.length > 0 && p, P = 0 === x.length, [y, F] = n.useState({
                    currentPage: 1,
                    pageSize: 100
                });
                n.useEffect(() => {
                    N && 1 !== y.currentPage && F(e => ({
                        ...e,
                        currentPage: 1
                    }))
                }, [N, y.currentPage]);
                let H = n.useCallback(e => {
                        E.default.fetchGuildBansBatch(O, 1e3, e)
                    }, [O]),
                    V = n.useMemo(() => o.chunk(x, y.pageSize), [y.pageSize, x]),
                    k = n.useCallback(e => {
                        var t, s, a;
                        null === (t = h.current) || void 0 === t || t.scrollToSectionTop(0);
                        let n = (e + 1) * y.pageSize,
                            l = n > x.length;
                        l && U && !_ && (w.current = null !== (a = null === (s = x[x.length - 1]) || void 0 === s ? void 0 : s.id) && void 0 !== a ? a : null, H(w.current)), (null != V[e - 1] || U) && F(t => ({
                            ...t,
                            currentPage: e
                        }))
                    }, [y.pageSize, x, U, V, H, _]),
                    w = n.useRef(null);
                n.useEffect(() => {
                    H(w.current)
                }, [H]);
                let Y = n.useMemo(() => {
                    var e;
                    return null !== (e = V[y.currentPage - 1]) && void 0 !== e ? e : []
                }, [V, y.currentPage]);
                return null == l ? null : (0, a.jsxs)("div", {
                    className: i(j.container),
                    children: [(0, a.jsx)(B, {
                        guildId: O,
                        storedSearchQuery: c
                    }), (0, a.jsxs)("div", {
                        className: i(j.scrollerContainer),
                        children: [!P && (0, a.jsx)(b, {
                            guild: l,
                            bans: f,
                            sortedBans: Y,
                            ref: h
                        }), !U && P && (0, a.jsxs)(L.default, {
                            theme: C,
                            className: j.emptyState,
                            children: [(0, a.jsx)(L.EmptyStateImage, {
                                darkSrc: s("325911"),
                                lightSrc: s("138147"),
                                width: 256,
                                height: 212
                            }), (0, a.jsx)(L.EmptyStateText, {
                                note: v.default.Messages.BANS_NO_USERS_BANNED,
                                style: {
                                    maxWidth: 300
                                },
                                children: v.default.Messages.NO_BANS
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: i(j.paginationContainer),
                        children: (0, a.jsx)(u.Paginator, {
                            className: i(j.paginationInput),
                            totalCount: x.length + (U ? y.pageSize : 0),
                            pageSize: y.pageSize,
                            currentPage: y.currentPage,
                            onPageChange: k,
                            maxVisiblePages: 9
                        })
                    })]
                })
            }