            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("77078"),
                r = n("145079"),
                u = n("123377"),
                o = n("158998"),
                c = n("777003"),
                d = n("782340"),
                f = n("119111");

            function T(e) {
                let {
                    user: t,
                    shouldCopyOnClick: n,
                    nickname: l,
                    pronouns: T,
                    usernameIcon: E,
                    identityCTA: A,
                    className: _,
                    isTryItOut: S = !1,
                    lastSection: m
                } = e;
                return (0, a.jsx)(c.default, {
                    className: s(f.container, _),
                    lastSection: m,
                    children: (0, a.jsxs)("div", {
                        className: n ? f.copiableNameTag : void 0,
                        children: [(0, a.jsx)(u.CopiableField, {
                            className: f.copiableField,
                            copyMetaData: "User Tag",
                            copyValue: o.default.getUserTag(t, {
                                decoration: "never",
                                identifiable: "always"
                            }),
                            showCopyIcon: !0,
                            disableCopy: !n,
                            children: (0, a.jsxs)("div", {
                                className: f.userText,
                                children: [null != l ? (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: f.nickname,
                                    children: l
                                }) : null, (0, a.jsx)(r.default, {
                                    usernameIcon: E,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: S,
                                    className: null == l ? f.userTagNoNickname : f.userTagWithNickname,
                                    usernameClass: null == l ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                                    discriminatorClass: null == l ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                                    botClass: null == l ? f.headerBotTag : f.headerBotTagWithNickname
                                }), A]
                            })
                        }), null != T && "" !== T && (0, a.jsx)(i.Tooltip, {
                            text: d.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, a.jsx)(i.Text, {
                                ...e,
                                variant: "text-sm/normal",
                                className: f.pronouns,
                                children: T
                            })
                        })]
                    })
                })
            }