            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                i = s("446674"),
                o = s("77078"),
                n = s("145079"),
                u = s("775377"),
                d = s("824563"),
                c = s("158998"),
                f = s("49111"),
                S = s("782340"),
                m = s("811136");

            function x(e) {
                let {
                    user: t,
                    displayProfile: s
                } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), x = c.default.getName(t);
                return (0, a.jsxs)("div", {
                    className: m.container,
                    children: [null == x && (0, a.jsx)(n.default, {
                        user: t,
                        className: m.nameTag,
                        usernameClass: m.username,
                        discriminatorClass: m.discriminator
                    }), null != x && (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(o.Text, {
                            variant: "text-lg/semibold",
                            style: {
                                marginRight: "12px"
                            },
                            children: x
                        }), (0, a.jsx)(n.default, {
                            user: t,
                            forceUsername: !0,
                            usernameClass: m.discriminator,
                            discriminatorClass: m.discriminator,
                            className: r(m.nameTag, m.nameTagSmall)
                        })]
                    }), (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== "" && (0, a.jsx)(o.Tooltip, {
                        text: S.default.Messages.USER_PROFILE_PRONOUNS,
                        children: e => (0, a.jsx)(o.Text, {
                            ...e,
                            variant: "text-sm/normal",
                            className: r(m.pronouns, m.nameTagSmall),
                            children: s.pronouns
                        })
                    }), null != l ? (0, a.jsx)("div", {
                        className: m.customStatusActivity,
                        children: (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: m.customStatusText,
                            children: (0, a.jsx)(u.default, {
                                activity: l,
                                className: m.customStatus,
                                emojiClassName: m.customStatusEmoji,
                                soloEmojiClassName: m.customStatusSoloEmoji
                            })
                        })
                    }) : null]
                })
            }