            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("759843"),
                i = n("65597"),
                r = n("77078"),
                o = n("428958"),
                u = n("18494"),
                d = n("79798"),
                c = n("174622"),
                f = n("335189"),
                m = n("473591"),
                E = n("371348"),
                _ = n("857697"),
                h = n("988268"),
                p = n("782340"),
                I = n("786860");

            function T(e) {
                let {
                    code: t
                } = e, {
                    clydeProfile: n,
                    isFetching: T
                } = (0, i.useStateFromStoresObject)([m.default], () => ({
                    clydeProfile: m.default.getProfile(t),
                    isFetching: m.default.isFetchingProfile(t)
                })), g = (0, i.default)([u.default], u.default.getCurrentlySelectedChannelId);
                if (s.useEffect(() => {
                        (0, f.fetchClydeProfile)(t)
                    }, [t]), (0, o.default)({
                        type: l.ImpressionTypes.VIEW,
                        name: l.ImpressionNames.CLYDE_AI_PROFILE_EMBED_VIEWED,
                        properties: {
                            clyde_profile_id: null == n ? void 0 : n.clyde_profile_id,
                            channel_id: g
                        }
                    }, {
                        disableTrack: null == n || null == g
                    }), T) return (0, a.jsxs)(c.default, {
                    children: [(0, a.jsx)(c.default.Header, {
                        text: p.default.Messages.CLYDE_PROFILE_EMBED_RESOLVING_HEADER
                    }), (0, a.jsx)(c.default.Body, {
                        resolving: !0
                    })]
                });
                if (null == n) return (0, a.jsxs)(c.default, {
                    children: [(0, a.jsx)(c.default.Header, {
                        text: p.default.Messages.CLYDE_PROFILE_EMBED_INVALID_HEADER
                    }), (0, a.jsx)(c.default.Body, {
                        children: (0, a.jsxs)("div", {
                            className: I.invalidBody,
                            children: [(0, a.jsx)(c.default.Icon, {
                                expired: !0
                            }), (0, a.jsx)(c.default.Info, {
                                expired: !0,
                                title: p.default.Messages.CLYDE_PROFILE_EMBED_INVALID_INFO_TITLE,
                                children: p.default.Messages.CLYDE_PROFILE_EMBED_INVALID_INFO_BODY
                            })]
                        })
                    })]
                });
                let C = (0, E.default)(n, !1, 56);
                return (0, a.jsxs)(c.default, {
                    children: [(0, a.jsx)(c.default.Header, {
                        text: p.default.Messages.CLYDE_PROFILE_EMBED_HEADER
                    }), (0, a.jsxs)(c.default.Body, {
                        children: [(0, a.jsxs)(r.Clickable, {
                            className: I.profileInfoContainer,
                            onClick: () => (0, _.default)(n),
                            children: [(0, a.jsx)(r.Avatar, {
                                src: C,
                                size: r.AvatarSizes.SIZE_56,
                                "aria-hidden": !0
                            }), (0, a.jsxs)("div", {
                                className: I.profileNameContainer,
                                children: [(0, a.jsx)(c.default.Info, {
                                    title: n.name
                                }), (0, a.jsx)(d.default, {
                                    type: h.BotTagTypes.AI
                                })]
                            })]
                        }), (0, a.jsx)(c.default.Button, {
                            className: I.applyButton,
                            onClick: () => {
                                (0, _.default)(n)
                            },
                            color: c.default.Button.Colors.BRAND,
                            children: p.default.Messages.CLYDE_PROFILE_APPLY
                        })]
                    })]
                })
            }