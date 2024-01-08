            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return Y
                }
            }), t("222007"), t("511434"), t("313619"), t("654714"), t("287168"), t("956660"), t("424973");
            var s = t("37983"),
                l = t("884691"),
                i = t("414456"),
                n = t.n(i),
                d = t("87682"),
                r = t.n(d),
                o = t("759843"),
                u = t("446674"),
                c = t("77078"),
                m = t("450911"),
                f = t("685073"),
                p = t("81594"),
                T = t("783480"),
                h = t("966724"),
                E = t("428958"),
                y = t("442939"),
                g = t("843962"),
                C = t("679653"),
                I = t("884351"),
                _ = t("42203"),
                M = t("474643"),
                N = t("305961"),
                S = t("705955"),
                R = t("27618"),
                v = t("585722"),
                x = t("697218"),
                A = t("646240"),
                w = t("578706"),
                D = t("413709"),
                j = t("599110"),
                b = t("315102"),
                k = t("354023"),
                F = t("773336"),
                O = t("159885"),
                P = t("158998"),
                L = t("50885"),
                U = t("191225"),
                B = t("837707"),
                H = t("49111"),
                G = t("91366"),
                V = t("782340"),
                z = t("468738");

            function Y(e) {
                let {
                    applicationId: a,
                    mediaUrl: t,
                    channelId: i,
                    onClose: n,
                    transitionState: d,
                    ...g
                } = e, C = (0, u.useStateFromStores)([U.default], () => U.default.getSelfEmbeddedActivityForChannel(i));
                (0, E.default)({
                    type: o.ImpressionTypes.MODAL,
                    name: o.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
                    properties: {
                        application_id: a,
                        activity_session_id: (0, B.default)(C)
                    }
                });
                let [N] = (0, y.default)([a]), R = (0, u.useStateFromStores)([x.default], () => x.default.getCurrentUser()), [w, D] = l.useState(""), [b, F] = l.useState([]), [O, P] = l.useState(null), [L, Y] = l.useState(null);
                l.useEffect(() => {
                    let e = async () => {
                        let e = r.basename(new URL(t).pathname),
                            a = await fetch(t),
                            s = await a.arrayBuffer(),
                            l = new File([s], e);
                        P(l);
                        let i = new FileReader;
                        i.onload = () => {
                            var e;
                            return Y(null == i ? void 0 : null === (e = i.result) || void 0 === e ? void 0 : e.toString())
                        }, i.readAsDataURL(l)
                    };
                    e()
                }, [t, P]);
                let W = (0, u.useStateFromStoresArray)([S.default], () => S.default.getInviteSuggestionRows());
                l.useEffect(() => {
                    (0, f.loadInviteSuggestions)({
                        omitUserIds: new Set,
                        applicationId: a,
                        inviteTargetType: G.InviteTargetTypes.EMBEDDED_APPLICATION
                    })
                }, [a]), l.useEffect(() => (0, f.searchInviteSuggestions)(w), [w]);
                let X = l.useCallback(async () => {
                    await Promise.all(b.map(async e => {
                        let a = W.find(a => a.item.id === e);
                        if (null != a) {
                            let e = a.item.id;
                            (a.type === k.RowTypes.DM || a.type === k.RowTypes.FRIEND) && (e = await m.default.ensurePrivateChannel(a.item.id)), p.default.clearAll(e, M.DraftType.ChannelMessage)
                        }
                    }))
                }, [b, W]);
                l.useEffect(() => {
                    d === c.ModalTransitionState.EXITING && X()
                }, [X, d]);
                let q = l.useCallback(async () => {
                        await X(), n()
                    }, [n, X]),
                    J = l.useCallback(async () => {
                        let e = 0,
                            t = 0,
                            s = 0;
                        async function l(l) {
                            switch (l.type) {
                                case k.RowTypes.DM:
                                case k.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case k.RowTypes.GROUP_DM:
                                    t++;
                                    break;
                                case k.RowTypes.CHANNEL:
                                    s++
                            }
                            let i = l.item.id;
                            (l.type === k.RowTypes.DM || l.type === k.RowTypes.FRIEND) && (i = await m.default.ensurePrivateChannel(l.item.id));
                            let n = v.default.getUploads(i, M.DraftType.ChannelMessage),
                                d = _.default.getChannel(i);
                            T.default.uploadFiles({
                                channelId: i,
                                uploads: n,
                                parsedMessage: null != N ? I.default.parse(d, V.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
                                    applicationName: "**".concat(N.name, "**")
                                })) : void 0,
                                draftType: M.DraftType.ChannelMessage,
                                options: {
                                    applicationId: a
                                }
                            }), p.default.clearAll(i, M.DraftType.ChannelMessage)
                        }
                        let i = S.default.getInviteSuggestionRows().filter(e => b.includes(e.item.id)).map(e => l(e));
                        j.default.track(H.AnalyticEvents.ACTIVITY_SHARE_MOMENT_SEND, {
                            user_id: null == R ? void 0 : R.id,
                            application_id: a,
                            activity_session_id: (0, B.default)(C),
                            n_users: e,
                            n_gdms: t,
                            n_channels: s
                        });
                        try {
                            await Promise.all(i), null != N && (0, c.showToast)((0, c.createToast)(V.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
                                applicationName: N.name
                            }), c.ToastType.SUCCESS))
                        } catch (e) {
                            throw (0, c.showToast)((0, c.createToast)(V.default.Messages.UPLOAD_ERROR_TITLE, c.ToastType.FAILURE)), e
                        }
                        q()
                    }, [C, N, a, b, q, R]),
                    Q = e => {
                        let a = async () => {
                            let a = e.item.id;
                            (e.type === k.RowTypes.DM || e.type === k.RowTypes.FRIEND) && (a = await m.default.ensurePrivateChannel(e.item.id));
                            let t = [...b];
                            if (t.includes(e.item.id)) p.default.clearAll(a, M.DraftType.ChannelMessage), t = t.filter(a => a !== e.item.id);
                            else {
                                if (t.length >= 10) return;
                                null != O && (p.default.addFile({
                                    file: {
                                        file: O,
                                        platform: h.UploadPlatform.WEB
                                    },
                                    channelId: a,
                                    draftType: M.DraftType.ChannelMessage
                                }), t.push(e.item.id))
                            }
                            F(t)
                        };
                        return () => a()
                    };
                return null == L ? (0, s.jsx)(c.Spinner, {}) : (0, s.jsxs)(c.ModalRoot, {
                    transitionState: d,
                    ...g,
                    className: z.modalRoot,
                    children: [(0, s.jsxs)(c.ModalHeader, {
                        className: z.header,
                        children: [(0, s.jsxs)("div", {
                            className: z.headerTitle,
                            children: [(0, s.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: V.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_HEADING
                            }), (0, s.jsx)(c.ModalCloseButton, {
                                onClick: q
                            })]
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)("img", {
                                alt: t,
                                className: z.img,
                                src: L
                            })
                        })]
                    }), (0, s.jsxs)(c.ModalContent, {
                        className: z.modalContent,
                        children: [(0, s.jsx)(A.default, {
                            className: z.searchBar,
                            placeholder: V.default.Messages.SEARCH,
                            label: V.default.Messages.SEARCH,
                            searchTerm: w,
                            onChange: e => D(e),
                            onClear: () => D("")
                        }), W.map((e, a) => (0, s.jsxs)(l.Fragment, {
                            children: [0 === a ? null : (0, s.jsx)("div", {
                                className: z.rowDivider
                            }), (0, s.jsx)(Z, {
                                row: e,
                                onClick: Q(e),
                                checked: b.includes(e.item.id),
                                disabled: !b.includes(e.item.id) && b.length >= 10
                            })]
                        }, e.item.id))]
                    }), (0, s.jsx)(c.ModalFooter, {
                        className: z.footer,
                        children: (0, s.jsxs)("div", {
                            className: z.copySendBar,
                            children: [(0, s.jsx)(K, {
                                applicationId: a,
                                activitySessionId: (0, B.default)(C),
                                mediaUrl: t
                            }), b.length >= 10 ? (0, s.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                children: V.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LIMIT_WARNING.format({
                                    maxShares: 10
                                })
                            }) : null, (0, s.jsx)(c.Button, {
                                onClick: J,
                                disabled: b.length <= 0,
                                children: V.default.Messages.SEND
                            })]
                        })
                    })]
                })
            }

            function Z(e) {
                let {
                    row: a,
                    onClick: t,
                    checked: l,
                    disabled: i
                } = e, d = null, r = null, o = null;
                switch (a.type) {
                    case k.RowTypes.DM:
                    case k.RowTypes.FRIEND:
                        d = (0, s.jsx)(c.Avatar, {
                            size: c.AvatarSizes.SIZE_40,
                            src: a.item.getAvatarURL(null, 128, !1),
                            "aria-label": a.item.username
                        }), r = P.default.getName(a.item), o = P.default.getUserTag(a.item);
                        break;
                    case k.RowTypes.GROUP_DM: {
                        let e = (0, g.getChannelIconURL)(a.item),
                            t = (0, C.computeChannelName)(a.item, x.default, R.default);
                        d = (0, s.jsx)(c.Avatar, {
                            src: e,
                            "aria-label": t,
                            size: c.AvatarSizes.SIZE_40
                        }), r = (0, C.computeChannelName)(a.item, x.default, R.default);
                        break
                    }
                    case k.RowTypes.CHANNEL: {
                        let e = a.item,
                            t = N.default.getGuild(e.guild_id);
                        if (null == t) return null;
                        if (r = "#".concat((0, C.computeChannelName)(e, x.default, R.default)), o = t.name, null != t.icon) {
                            let a = b.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: t.icon,
                                size: 40
                            });
                            d = (0, s.jsx)(c.Avatar, {
                                src: a,
                                "aria-label": r,
                                size: c.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, O.getAcronym)(t.name);
                            d = (0, s.jsx)("div", {
                                className: z.acronym,
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
                    onClick: t,
                    className: n(z.rowContainer, {
                        [z.disabled]: i
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: z.rowLeft,
                        children: [(0, s.jsx)("div", {
                            className: z.rowAvatar,
                            children: d
                        }), (0, s.jsxs)("div", {
                            className: z.rowNameContainer,
                            children: [(0, s.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                className: n(z.rowName, {
                                    [z.disabled]: i
                                }),
                                children: r
                            }), (0, s.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                className: n(z.rowSubName, {
                                    [z.disabled]: i
                                }),
                                children: o
                            })]
                        })]
                    }), (0, s.jsx)(c.Checkbox, {
                        disabled: i,
                        value: l,
                        type: c.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: z.rowRight
                    })]
                })
            }

            function K(e) {
                let {
                    applicationId: a,
                    mediaUrl: t,
                    activitySessionId: i
                } = e, [n, d] = l.useState(!1), r = (0, u.useStateFromStores)([x.default], () => x.default.getCurrentUser());
                async function o() {
                    j.default.track(H.AnalyticEvents.ACTIVITY_SHARE_MOMENT_COPY, {
                        user_id: null == r ? void 0 : r.id,
                        application_id: a,
                        activity_session_id: i
                    }), await L.default.copyImage(t), d(!0)
                }
                return (l.useEffect(() => {
                    let e;
                    return n && (e = setTimeout(() => {
                        d(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [n]), F.isPlatformEmbedded && L.default.canCopyImage(t)) ? (0, s.jsxs)(c.Button, {
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    onClick: o,
                    innerClassName: z.copyButton,
                    children: [n ? (0, s.jsx)(w.default, {}) : (0, s.jsx)(D.default, {}), n ? V.default.Messages.COPIED : V.default.Messages.COPY_IMAGE_MENU_ITEM]
                }) : (0, s.jsx)("div", {})
            }