            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                i = n("77078"),
                l = n("145079"),
                r = n("206230"),
                o = n("606292"),
                u = n("688318"),
                d = n("843962"),
                c = n("27618"),
                E = n("158998"),
                f = n("50885"),
                _ = n("91830"),
                h = n("214621"),
                C = n("782340"),
                T = n("556559");
            let I = f.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

            function S(e) {
                var t;
                let {
                    channel: n,
                    otherUser: f,
                    active: S
                } = e, N = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), A = (0, s.useStateFromStores)([c.default], () => null == f ? null : c.default.getNickname(f.id)), m = (0, _.useMessageRequestRelativeTimestampText)(n), {
                    avatarDecorationSrc: p
                } = (0, u.default)({
                    user: f,
                    size: (0, o.getDecorationSizeForAvatarSize)(i.AvatarSizes.SIZE_40),
                    animateOnHover: !0
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(I, {
                        className: T.avatar,
                        src: (0, d.getChannelIconURL)(n, 40, !N && S),
                        avatarDecoration: p,
                        size: i.AvatarSizes.SIZE_40,
                        "aria-label": null !== (t = null == f ? void 0 : f.username) && void 0 !== t ? t : C.default.Messages.UNKNOWN_USER
                    }), (0, a.jsxs)("div", {
                        className: T.userPreview,
                        children: [(0, a.jsxs)("div", {
                            className: T.userContainerWithPreview,
                            children: [(0, a.jsx)(l.default, {
                                nick: A,
                                user: f,
                                showAccountIdentifier: !0,
                                className: T.tagContainer,
                                usernameClass: T.username,
                                discriminatorClass: null != E.default.getGlobalName(f) ? T.globalName : T.discriminator
                            }), (0, a.jsx)(i.Text, {
                                className: T.timestampWithPreview,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: m
                            })]
                        }), (0, a.jsx)("div", {
                            className: T.messagePreview,
                            children: (0, a.jsx)(h.default, {
                                channel: n
                            })
                        })]
                    })]
                })
            }