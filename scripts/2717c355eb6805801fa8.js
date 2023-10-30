(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25855"], {
        685073: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                loadInviteSuggestions: function() {
                    return i
                },
                searchInviteSuggestions: function() {
                    return n
                }
            });
            var s = a("913144"),
                l = a("777273");

            function i(e) {
                let {
                    omitUserIds: t,
                    guild: a,
                    channel: i,
                    applicationId: n,
                    inviteTargetType: d
                } = e;
                return (0, l.fetchUserAffinities)().then(() => {
                    s.default.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: a,
                        channel: i,
                        applicationId: n,
                        inviteTargetType: d
                    })
                })
            }

            function n(e) {
                s.default.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        611598: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return z
                }
            });
            var s = a("37983"),
                l = a("884691"),
                i = a("414456"),
                n = a.n(i),
                d = a("87682"),
                r = a.n(d),
                o = a("759843"),
                u = a("446674"),
                c = a("77078"),
                f = a("450911"),
                m = a("685073"),
                p = a("81594"),
                T = a("783480"),
                g = a("966724"),
                E = a("428958"),
                I = a("442939"),
                h = a("843962"),
                y = a("679653"),
                S = a("884351"),
                _ = a("42203"),
                C = a("474643"),
                N = a("305961"),
                v = a("705955"),
                M = a("27618"),
                A = a("585722"),
                w = a("697218"),
                R = a("646240"),
                D = a("578706"),
                x = a("413709"),
                j = a("599110"),
                U = a("315102"),
                b = a("354023"),
                O = a("773336"),
                k = a("159885"),
                L = a("158998"),
                P = a("50885"),
                F = a("191225"),
                B = a("49111"),
                G = a("91366"),
                H = a("782340"),
                V = a("468738");

            function z(e) {
                let {
                    applicationId: t,
                    mediaUrl: a,
                    channelId: i,
                    onClose: n,
                    transitionState: d,
                    ...h
                } = e, y = (0, u.useStateFromStores)([F.default], () => F.default.getSelfEmbeddedActivityForChannel(i));
                (0, E.default)({
                    type: o.ImpressionTypes.MODAL,
                    name: o.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
                    properties: {
                        application_id: t,
                        activity_session_id: null == y ? void 0 : y.activity_id
                    }
                });
                let [N] = (0, I.default)([t]), M = (0, u.useStateFromStores)([w.default], () => w.default.getCurrentUser()), [D, x] = l.useState(""), [U, O] = l.useState([]), [k, L] = l.useState(null), [P, z] = l.useState(null);
                l.useEffect(() => {
                    let e = async () => {
                        let e = r.basename(new URL(a).pathname),
                            t = await fetch(a),
                            s = await t.arrayBuffer(),
                            l = new File([s], e);
                        L(l);
                        let i = new FileReader;
                        i.onload = () => {
                            var e;
                            return z(null == i ? void 0 : null === (e = i.result) || void 0 === e ? void 0 : e.toString())
                        }, i.readAsDataURL(l)
                    };
                    e()
                }, [a, L]);
                let W = (0, u.useStateFromStoresArray)([v.default], () => v.default.getInviteSuggestionRows());
                l.useEffect(() => {
                    (0, m.loadInviteSuggestions)({
                        omitUserIds: new Set,
                        applicationId: t,
                        inviteTargetType: G.InviteTargetTypes.EMBEDDED_APPLICATION
                    })
                }, [t]), l.useEffect(() => (0, m.searchInviteSuggestions)(D), [D]);
                let Z = l.useCallback(async () => {
                    await Promise.all(U.map(async e => {
                        let t = W.find(t => t.item.id === e);
                        if (null != t) {
                            let e = t.item.id;
                            (t.type === b.RowTypes.DM || t.type === b.RowTypes.FRIEND) && (e = await f.default.ensurePrivateChannel(t.item.id)), p.default.clearAll(e, C.DraftType.ChannelMessage)
                        }
                    }))
                }, [U, W]);
                l.useEffect(() => {
                    d === c.ModalTransitionState.EXITING && Z()
                }, [Z, d]);
                let Q = l.useCallback(async () => {
                        await Z(), n()
                    }, [n, Z]),
                    X = l.useCallback(async () => {
                        let e = 0,
                            a = 0,
                            s = 0;
                        async function l(l) {
                            switch (l.type) {
                                case b.RowTypes.DM:
                                case b.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case b.RowTypes.GROUP_DM:
                                    a++;
                                    break;
                                case b.RowTypes.CHANNEL:
                                    s++
                            }
                            let i = l.item.id;
                            (l.type === b.RowTypes.DM || l.type === b.RowTypes.FRIEND) && (i = await f.default.ensurePrivateChannel(l.item.id));
                            let n = A.default.getUploads(i, C.DraftType.ChannelMessage),
                                d = _.default.getChannel(i);
                            T.default.uploadFiles({
                                channelId: i,
                                uploads: n,
                                parsedMessage: null != N ? S.default.parse(d, H.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
                                    applicationName: "**".concat(N.name, "**")
                                })) : void 0,
                                draftType: C.DraftType.ChannelMessage,
                                options: {
                                    applicationId: t
                                }
                            }), p.default.clearAll(i, C.DraftType.ChannelMessage)
                        }
                        let i = v.default.getInviteSuggestionRows().filter(e => U.includes(e.item.id)).map(e => l(e));
                        j.default.track(B.AnalyticEvents.ACTIVITY_SHARE_MOMENT_SEND, {
                            user_id: null == M ? void 0 : M.id,
                            application_id: t,
                            activity_session_id: null == y ? void 0 : y.activity_id,
                            n_users: e,
                            n_gdms: a,
                            n_channels: s
                        });
                        try {
                            await Promise.all(i), null != N && (0, c.showToast)((0, c.createToast)(H.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
                                applicationName: N.name
                            }), c.ToastType.SUCCESS))
                        } catch (e) {
                            throw (0, c.showToast)((0, c.createToast)(H.default.Messages.UPLOAD_ERROR_TITLE, c.ToastType.FAILURE)), e
                        }
                        Q()
                    }, [y, N, t, U, Q, M]),
                    J = e => {
                        let t = async () => {
                            let t = e.item.id;
                            (e.type === b.RowTypes.DM || e.type === b.RowTypes.FRIEND) && (t = await f.default.ensurePrivateChannel(e.item.id));
                            let a = [...U];
                            if (a.includes(e.item.id)) p.default.clearAll(t, C.DraftType.ChannelMessage), a = a.filter(t => t !== e.item.id);
                            else {
                                if (a.length >= 10) return;
                                null != k && (p.default.addFile({
                                    file: {
                                        file: k,
                                        platform: g.UploadPlatform.WEB
                                    },
                                    channelId: t,
                                    draftType: C.DraftType.ChannelMessage
                                }), a.push(e.item.id))
                            }
                            O(a)
                        };
                        return () => t()
                    };
                return null == P ? (0, s.jsx)(c.Spinner, {}) : (0, s.jsxs)(c.ModalRoot, {
                    transitionState: d,
                    ...h,
                    className: V.modalRoot,
                    children: [(0, s.jsxs)(c.ModalHeader, {
                        className: V.header,
                        children: [(0, s.jsxs)("div", {
                            className: V.headerTitle,
                            children: [(0, s.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: H.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_HEADING
                            }), (0, s.jsx)(c.ModalCloseButton, {
                                onClick: Q
                            })]
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)("img", {
                                alt: a,
                                className: V.img,
                                src: P
                            })
                        })]
                    }), (0, s.jsxs)(c.ModalContent, {
                        className: V.modalContent,
                        children: [(0, s.jsx)(R.default, {
                            className: V.searchBar,
                            placeholder: H.default.Messages.SEARCH,
                            label: H.default.Messages.SEARCH,
                            searchTerm: D,
                            onChange: e => x(e),
                            onClear: () => x("")
                        }), W.map((e, t) => (0, s.jsxs)(l.Fragment, {
                            children: [0 === t ? null : (0, s.jsx)("div", {
                                className: V.rowDivider
                            }), (0, s.jsx)(Y, {
                                row: e,
                                onClick: J(e),
                                checked: U.includes(e.item.id),
                                disabled: !U.includes(e.item.id) && U.length >= 10
                            })]
                        }, e.item.id))]
                    }), (0, s.jsx)(c.ModalFooter, {
                        className: V.footer,
                        children: (0, s.jsxs)("div", {
                            className: V.copySendBar,
                            children: [(0, s.jsx)(K, {
                                applicationId: t,
                                activitySessionId: null == y ? void 0 : y.activity_id,
                                mediaUrl: a
                            }), U.length >= 10 ? (0, s.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                children: H.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LIMIT_WARNING.format({
                                    maxShares: 10
                                })
                            }) : null, (0, s.jsx)(c.Button, {
                                onClick: X,
                                disabled: U.length <= 0,
                                children: H.default.Messages.SEND
                            })]
                        })
                    })]
                })
            }

            function Y(e) {
                let {
                    row: t,
                    onClick: a,
                    checked: l,
                    disabled: i
                } = e, d = null, r = null, o = null;
                switch (t.type) {
                    case b.RowTypes.DM:
                    case b.RowTypes.FRIEND:
                        d = (0, s.jsx)(c.Avatar, {
                            size: c.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), r = L.default.getName(t.item), o = L.default.getUserTag(t.item);
                        break;
                    case b.RowTypes.GROUP_DM: {
                        let e = (0, h.getChannelIconURL)(t.item),
                            a = (0, y.computeChannelName)(t.item, w.default, M.default);
                        d = (0, s.jsx)(c.Avatar, {
                            src: e,
                            "aria-label": a,
                            size: c.AvatarSizes.SIZE_40
                        }), r = (0, y.computeChannelName)(t.item, w.default, M.default);
                        break
                    }
                    case b.RowTypes.CHANNEL: {
                        let e = t.item,
                            a = N.default.getGuild(e.guild_id);
                        if (null == a) return null;
                        if (r = "#".concat((0, y.computeChannelName)(e, w.default, M.default)), o = a.name, null != a.icon) {
                            let t = U.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: a.icon,
                                size: 40
                            });
                            d = (0, s.jsx)(c.Avatar, {
                                src: t,
                                "aria-label": r,
                                size: c.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, k.getAcronym)(a.name);
                            d = (0, s.jsx)("div", {
                                className: V.acronym,
                                "aria-hidden": !0,
                                children: (0, s.jsx)(c.Text, {
                                    variant: "text-md/semibold",
                                    children: e
                                })
                            })
                        }
                    }
                }
                return (0, s.jsxs)(c.Clickable, {
                    onClick: a,
                    className: n(V.rowContainer, {
                        [V.disabled]: i
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: V.rowLeft,
                        children: [(0, s.jsx)("div", {
                            className: V.rowAvatar,
                            children: d
                        }), (0, s.jsxs)("div", {
                            className: V.rowNameContainer,
                            children: [(0, s.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                className: n(V.rowName, {
                                    [V.disabled]: i
                                }),
                                children: r
                            }), (0, s.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                className: n(V.rowSubName, {
                                    [V.disabled]: i
                                }),
                                children: o
                            })]
                        })]
                    }), (0, s.jsx)(c.Checkbox, {
                        disabled: i,
                        value: l,
                        type: c.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: V.rowRight
                    })]
                })
            }

            function K(e) {
                let {
                    applicationId: t,
                    mediaUrl: a,
                    activitySessionId: i
                } = e, [n, d] = l.useState(!1), r = (0, u.useStateFromStores)([w.default], () => w.default.getCurrentUser());
                async function o() {
                    j.default.track(B.AnalyticEvents.ACTIVITY_SHARE_MOMENT_COPY, {
                        user_id: null == r ? void 0 : r.id,
                        application_id: t,
                        activity_session_id: i
                    }), await P.default.copyImage(a), d(!0)
                }
                return (l.useEffect(() => {
                    let e;
                    return n && (e = setTimeout(() => {
                        d(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [n]), O.isPlatformEmbedded && P.default.canCopyImage(a)) ? (0, s.jsxs)(c.Button, {
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    onClick: o,
                    innerClassName: V.copyButton,
                    children: [n ? (0, s.jsx)(D.default, {}) : (0, s.jsx)(x.default, {}), n ? H.default.Messages.COPIED : H.default.Messages.COPY_IMAGE_MENU_ITEM]
                }) : (0, s.jsx)("div", {})
            }
        },
        705955: function(e, t, a) {
            "use strict";
            let s, l, i, n, d, r, o;
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var u = a("446674"),
                c = a("913144"),
                f = a("116460"),
                m = a("449008"),
                p = a("354023"),
                T = a("42203"),
                g = a("27618"),
                E = a("843823"),
                I = a("49111"),
                h = a("91366");
            let y = new Set,
                S = [],
                _ = new Map;

            function C(e) {
                let t = new Set,
                    a = null == n || o === h.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : n.id,
                    s = (0, p.getMostRecentDMedUser)(y, a);
                for (let e of (null != s && !g.default.isBlocked(s.id) && t.add(s.id), E.default.getUserAffinitiesUserIds())) t.add(e);
                let l = new Set;
                if (o === h.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    let e = f.default.getChannelHistory();
                    e.map(e => T.default.getChannel(e)).filter(m.isNotNullish).filter(e => e.type === I.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => l.add(e.id))
                }
                return (0, p.generateRowsForQuery)({
                    query: e,
                    omitUserIds: y,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: a,
                    suggestedChannelIds: l,
                    inviteTargetType: o
                })
            }

            function N(e) {
                S = e, _ = new Map, e.forEach((e, t) => {
                    _.set(e, {
                        index: t
                    })
                })
            }
            class v extends u.default.Store {
                initialize() {
                    this.waitFor(g.default, E.default)
                }
                getInviteSuggestionRows() {
                    return S
                }
                getTotalSuggestionsCount() {
                    return l
                }
                getInitialCounts() {
                    return s
                }
                getSelectedInviteMetadata(e) {
                    let t = _.get(e),
                        a = E.default.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: S.length,
                        numAffinityConnections: a.size,
                        isFiltered: i
                    } : null
                }
            }
            v.displayName = "InviteSuggestionsStore";
            var M = new v(c.default, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    let {
                        omitUserIds: t,
                        guild: a,
                        channel: u,
                        applicationId: c,
                        inviteTargetType: f
                    } = e;
                    n = null != u ? a : null, d = u, r = c, o = f;
                    let m = g.default.getRelationships(),
                        T = Object.keys(m).filter(e => m[e] === I.RelationshipTypes.BLOCKED),
                        E = (0, p.getUsersAlreadyJoined)({
                            channel: d,
                            applicationId: r,
                            inviteTargetType: f
                        });
                    y = new Set([...t, ...T, ...E]), i = !1;
                    let {
                        rows: h,
                        counts: _
                    } = C("");
                    N(h), s = _, l = S.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    let {
                        query: t
                    } = e;
                    i = "" !== t;
                    let {
                        rows: a
                    } = C(t);
                    N(a)
                }
            })
        }
    }
]);