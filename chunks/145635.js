            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007");
            var a, l, s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("627445"),
                d = n.n(u),
                c = n("446674"),
                f = n("77078"),
                h = n("272030"),
                p = n("308289"),
                m = n("750560"),
                E = n("506885"),
                C = n("981601"),
                g = n("26989"),
                S = n("957255"),
                _ = n("824563"),
                I = n("945330"),
                T = n("277174"),
                v = n("711486"),
                x = n("664336"),
                N = n("244480"),
                A = n("567469"),
                M = n("844208"),
                R = n("808422"),
                j = n("413882"),
                L = n("876534"),
                O = n("843455"),
                y = n("782340"),
                b = n("455518");
            let P = i.memo(function(e) {
                    let {
                        toggleRequestToSpeakSidebar: t,
                        chatOpen: n
                    } = e, a = (0, s.jsx)(x.default.Icon, {
                        icon: I.default,
                        tooltip: y.default.Messages.CLOSE,
                        onClick: t
                    });
                    return (0, s.jsxs)(x.default, {
                        toolbar: a,
                        className: o(b.headerContainer, {
                            [b.chatOpen]: n
                        }),
                        children: [(0, s.jsx)(x.default.Icon, {
                            icon: v.default,
                            disabled: !0,
                            "aria-label": y.default.Messages.REQUEST_TO_SPEAK_AREA_TITLE
                        }), (0, s.jsx)(x.default.Title, {
                            children: y.default.Messages.REQUEST_TO_SPEAK_AREA_TITLE
                        })]
                    })
                }),
                D = i.memo(function(e) {
                    let {
                        channel: t,
                        participant: a,
                        tempDisableOnInit: l = !1
                    } = e, [r, u] = i.useState(l);
                    i.useEffect(() => {
                        if (!r) return;
                        let e = setTimeout(() => u(!1), 1e3);
                        return () => clearTimeout(e)
                    }, []);
                    let S = t.getGuildId();
                    d(null != S, "Channel cannot be guildless");
                    let {
                        isMobile: v,
                        status: x
                    } = (0, c.useStateFromStoresObject)([_.default], () => ({
                        isMobile: _.default.isMobileOnline(a.user.id),
                        status: _.default.getStatus(a.user.id, S)
                    })), A = (0, c.useStateFromStores)([g.default], () => g.default.getMember(S, a.user.id)), j = i.useMemo(() => ({
                        [S]: [a.user.id]
                    }), [S, a.user.id]);
                    (0, m.useSubscribeGuildMembers)(j);
                    let L = a.rtsState === R.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;

                    function O() {
                        (0, N.setUserSuppress)(t, a.user.id, !1)
                    }

                    function P() {
                        (0, N.setUserSuppress)(t, a.user.id, !0)
                    }
                    let D = e => {
                        (0, h.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("834247").then(n.bind(n, "834247"));
                            return n => (0, s.jsx)(e, {
                                ...n,
                                user: a.user,
                                guildId: S,
                                channel: t,
                                showMediaItems: !0
                            })
                        })
                    };
                    return (0, s.jsxs)("div", {
                        className: b.participantRowContainer,
                        children: [(0, s.jsx)(f.Popout, {
                            preload: () => (0, E.default)(a.user.id, a.user.getAvatarURL(t.guild_id, 80), {
                                guildId: t.guild_id,
                                channelId: t.id
                            }),
                            renderPopout: e => (0, s.jsx)(C.default, {
                                ...e,
                                userId: a.user.id,
                                guildId: S,
                                channelId: t.id
                            }),
                            position: "left",
                            spacing: 16,
                            children: e => {
                                var t;
                                return (0, s.jsxs)(f.Clickable, {
                                    className: b.participantMemberContainer,
                                    onContextMenu: D,
                                    ...e,
                                    children: [(0, s.jsx)(p.default, {
                                        size: f.AvatarSizes.SIZE_40,
                                        className: b.participantAvatar,
                                        user: a.user,
                                        isMobile: v,
                                        status: x
                                    }), (0, s.jsxs)("div", {
                                        className: b.participantTextContainer,
                                        children: [(0, s.jsx)(f.NameWithRole, {
                                            name: a.userNick,
                                            color: null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : void 0,
                                            className: b.participantName
                                        }), (0, s.jsx)(f.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-secondary",
                                            children: (0, M.participantMemberInfo)(a)
                                        })]
                                    })]
                                })
                            }
                        }), (0, s.jsx)(f.Tooltip, {
                            text: L ? y.default.Messages.REQUEST_TO_SPEAK_INVITATION_SEND : y.default.Messages.REQUEST_TO_SPEAK_ACCEPT,
                            children: e => (0, s.jsx)(f.Button, {
                                ...e,
                                innerClassName: b.buttonContainer,
                                look: f.Button.Looks.BLANK,
                                size: f.Button.Sizes.NONE,
                                onClick: O,
                                disabled: L || r,
                                children: (0, s.jsx)(T.default, {
                                    width: 16,
                                    height: 16
                                })
                            })
                        }), (0, s.jsx)(f.Tooltip, {
                            text: y.default.Messages.REQUEST_TO_SPEAK_DECLINE,
                            children: e => (0, s.jsx)(f.Button, {
                                ...e,
                                innerClassName: o(b.buttonContainer, b.buttonMargin),
                                look: f.Button.Looks.BLANK,
                                size: f.Button.Sizes.NONE,
                                onClick: P,
                                children: (0, s.jsx)(I.default, {
                                    width: 16,
                                    height: 16
                                })
                            })
                        })]
                    })
                }),
                U = i.memo(function(e) {
                    let {
                        channel: t
                    } = e, [n, a] = (0, j.useRequestToSpeakPermission)(t.id);
                    return (0, s.jsx)(f.FormSwitch, {
                        className: b.toggle,
                        onChange: a,
                        value: n,
                        children: y.default.Messages.MODERATOR_ALLOW_EVERYONE_RAISE_HAND
                    })
                }),
                w = i.memo(function() {
                    return (0, s.jsxs)("div", {
                        className: b.emptyStateContainer,
                        children: [(0, s.jsx)(L.default, {}), (0, s.jsx)(f.Text, {
                            className: b.emptyStateTitle,
                            variant: "text-lg/semibold",
                            color: "header-primary",
                            children: y.default.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_TITLE
                        }), (0, s.jsx)(f.Text, {
                            className: b.emptyStateBody,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: y.default.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_BODY
                        })]
                    })
                });

            function F(e) {
                let {
                    channel: t,
                    toggleRequestToSpeakSidebar: n,
                    chatOpen: a
                } = e, l = (0, A.useSortedRequestToSpeakParticipants)(t.id), i = (0, c.useStateFromStores)([S.default], () => S.default.can(O.Permissions.MANAGE_CHANNELS, t) || S.default.can(O.Permissions.MANAGE_ROLES, t)), r = [i ? 1 : 0, Math.max(1, l.length)];
                return (0, s.jsxs)("div", {
                    className: o(b.container, {
                        [b.chatOpen]: a
                    }),
                    children: [(0, s.jsx)(P, {
                        toggleRequestToSpeakSidebar: n,
                        chatOpen: a
                    }), (0, s.jsx)(f.List, {
                        className: b.contentContainer,
                        sections: r,
                        sectionHeight: function(e) {
                            if (1 === e) return 40;
                            return 0
                        },
                        rowHeight: function(e) {
                            switch (e) {
                                case 0:
                                    return 66;
                                case 1:
                                    if (0 === l.length) return 178;
                                    return 48
                            }
                            return 0
                        },
                        renderRow: function(e) {
                            let {
                                section: n,
                                row: a
                            } = e;
                            switch (n) {
                                case 0:
                                    return (0, s.jsx)(U, {
                                        channel: t
                                    }, "rts-toggle");
                                case 1: {
                                    if (0 === l.length) return (0, s.jsx)(w, {}, "participants-empty");
                                    let e = l[a];
                                    return (0, s.jsx)(D, {
                                        channel: t,
                                        participant: e,
                                        tempDisableOnInit: !0
                                    }, e.id)
                                }
                            }
                            return null
                        },
                        renderSection: function(e) {
                            let {
                                section: t
                            } = e;
                            if (1 === t) return (0, s.jsx)(f.Text, {
                                className: b.listTitle,
                                variant: "text-xs/bold",
                                color: "header-secondary",
                                children: l.length > 0 ? y.default.Messages.REQUEST_TO_SPEAK_LIST_TITLE.format({
                                    numHands: l.length
                                }) : y.default.Messages.REQUEST_TO_SPEAK_AREA_TITLE
                            }, "participants-section");
                            return null
                        }
                    })]
                })
            }(l = a || (a = {}))[l.TOGGLE_REQUEST_TO_SPEAK = 0] = "TOGGLE_REQUEST_TO_SPEAK", l[l.PARTICIPANTS = 1] = "PARTICIPANTS"