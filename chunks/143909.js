            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("424973"), n("222007");
            var l = n("37983"),
                i = n("884691"),
                a = n("414456"),
                u = n.n(a),
                r = n("446674"),
                d = n("551042"),
                o = n("77078"),
                s = n("450911"),
                c = n("87657"),
                E = n("812204"),
                C = n("685665"),
                f = n("679653"),
                _ = n("419830"),
                A = n("123561"),
                T = n("144491"),
                S = n("161778"),
                h = n("233069"),
                I = n("27618"),
                L = n("162771"),
                N = n("697218"),
                g = n("941886"),
                D = n("810567"),
                U = n("904276"),
                R = n("875436"),
                p = n("449008"),
                O = n("6468"),
                v = n("16002"),
                P = n("782340"),
                m = n("827916"),
                G = n("855143"),
                x = n("934516");

            function H(e) {
                let {
                    channel: t,
                    ChannelIcon: n,
                    selected: i,
                    onClick: a
                } = e, u = (0, f.default)(t);
                return (0, l.jsxs)(o.Clickable, {
                    className: m.channelRow,
                    onClick: () => a(t.id),
                    children: [i ? (0, l.jsx)(R.default, {
                        className: m.radioIcon
                    }) : (0, l.jsx)(U.default, {
                        className: m.radioIcon
                    }), (0, l.jsx)(n, {
                        className: m.icon,
                        width: 16,
                        height: 16
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "interactive-active",
                        children: u
                    })]
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    selectedChannelId: n,
                    onSelectChannelId: a
                } = e, {
                    guildChannels: d
                } = (0, r.useStateFromStoresObject)([A.default], () => A.default.getGuildWithoutChangingCommunityRows(t)), s = i.useMemo(() => {
                    let e = [];
                    return d.forEachChannel(t => {
                        !1 !== (0, O.canAttachClipsToChannel)(t.id) && ((0, h.isGuildSelectableChannelType)(t.type) || (0, h.isGuildVocalChannelType)(t.type)) && e.push(t)
                    }), e
                }, [d]);
                return 0 === s.length ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: u(m.divider, m.bottomDivider)
                    }), (0, l.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: m.contentPadding,
                        children: P.default.Messages.CLIP_SHARE_SELECT_CHANNEL
                    }), (0, l.jsx)(o.List, {
                        sections: [s.length],
                        sectionHeight: 0,
                        renderRow: e => {
                            let {
                                section: t,
                                row: i
                            } = e;
                            if (t > 0) return null;
                            let u = s[i],
                                r = (0, _.getChannelIconComponent)(u);
                            return null == r ? null : (0, l.jsx)(H, {
                                channel: u,
                                ChannelIcon: r,
                                selected: n === u.id,
                                onClick: a
                            }, u.id)
                        },
                        rowHeight: (e, t) => {
                            if (e > 0) return 0;
                            let n = s[t];
                            return null != n ? 56 : 0
                        },
                        renderSection: () => null,
                        className: u(m.channelList, m.contentPadding),
                        fade: !0
                    })]
                })
            }

            function w(e) {
                let {
                    friends: t,
                    searchQuery: n,
                    disabled: a,
                    onShareClip: d
                } = e, s = i.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), E = (0, r.useStateFromStores)([S.default], () => S.default.theme);
                return 0 === s.length ? (0, l.jsxs)(g.default, {
                    theme: E,
                    className: m.emptyStateContainer,
                    children: [(0, l.jsx)(g.default.Image, {
                        width: 415,
                        height: 75,
                        lightSrc: x,
                        darkSrc: G
                    }), (0, l.jsx)(g.default.Text, {
                        note: P.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
                    })]
                }) : (0, l.jsx)(o.List, {
                    sections: [s.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let i = s[n],
                            u = s[n].username;
                        return (0, l.jsxs)("div", {
                            className: m.userRow,
                            children: [(0, l.jsx)(c.default, {
                                user: i
                            }), (0, l.jsx)(o.Text, {
                                className: m.username,
                                variant: "text-md/normal",
                                children: u
                            }), (0, l.jsx)(o.Button, {
                                disabled: a,
                                onClick: () => d(i.id),
                                className: m.friendShareButton,
                                look: o.ButtonLooks.OUTLINED,
                                size: o.ButtonSizes.SMALL,
                                color: o.ButtonColors.BRAND,
                                children: (0, l.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    children: P.default.Messages.SHARE
                                })
                            })]
                        }, i.id)
                    },
                    rowHeight: (e, t) => {
                        if (e > 0) return 0;
                        let n = s[t];
                        return null != n ? 52 : 0
                    },
                    renderSection: () => null,
                    className: u(m.friendsList, m.contentPadding),
                    fade: !0
                })
            }

            function j(e) {
                let {
                    clip: t,
                    editMetadata: n,
                    transitionState: a,
                    onClose: c
                } = e, [f, _] = i.useState(""), [A, S] = i.useState(!1), [h, g] = i.useState(null), U = (0, r.useStateFromStoresArray)([I.default], () => I.default.getFriendIDs()), R = (0, r.useStateFromStoresArray)([N.default], () => U.map(e => N.default.getUser(e)).filter(p.isNotNullish), [U]), O = (0, r.useStateFromStores)([L.default], () => L.default.getGuildId()), {
                    analyticsLocations: G
                } = (0, C.default)(E.default.CLIPS_SHARE_MODAL);
                async function x(e) {
                    let l = null != e ? e : h;
                    if (null != l) {
                        S(!0);
                        try {
                            await (0, v.shareClip)(t, {
                                channelId: l,
                                editMetadata: n,
                                analyticsLocations: G
                            }), null == e && (0, T.transitionToChannel)(l), d.closeAllModals()
                        } catch (e) {} finally {
                            S(!1)
                        }
                    }
                }
                async function H(e) {
                    let t = await s.default.openPrivateChannel(e);
                    await x(t)
                }
                return (0, l.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.SMALL,
                    transitionState: a,
                    children: [(0, l.jsx)(o.Heading, {
                        className: u(m.title, m.contentPadding),
                        variant: "heading-lg/semibold",
                        color: "interactive-active",
                        children: P.default.Messages.CLIP_SHARE_MODAL_TITLE
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        className: u(m.subtitle, m.contentPadding),
                        children: P.default.Messages.CLIP_SHARE_MODAL_SUBTITLE
                    }), (0, l.jsx)(D.default, {
                        className: m.searchBar,
                        query: f,
                        onChange: _,
                        size: D.default.Sizes.MEDIUM,
                        onClear: function() {
                            _("")
                        },
                        placeholder: P.default.Messages.INVITE_SEARCH_FOR_FRIENDS
                    }), (0, l.jsx)("div", {
                        className: u(m.divider, m.topDivider)
                    }), (0, l.jsx)(w, {
                        searchQuery: f,
                        friends: R,
                        onShareClip: H,
                        disabled: A
                    }), null != O && (0, l.jsx)(M, {
                        guildId: O,
                        selectedChannelId: h,
                        onSelectChannelId: g
                    }), (0, l.jsxs)(o.ModalFooter, {
                        children: [(0, l.jsx)(o.Button, {
                            disabled: null == h,
                            submitting: A,
                            color: o.Button.Colors.BRAND,
                            onClick: () => x(),
                            children: P.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, l.jsx)(o.Button, {
                            submitting: A,
                            look: o.ButtonLooks.LINK,
                            onClick: c,
                            color: o.ButtonColors.PRIMARY,
                            children: P.default.Messages.BACK
                        })]
                    })]
                })
            }