(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94626"], {
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return a.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var r = n("14716"),
                a = n("745510"),
                i = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");

            function a() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");
            let a = {};

            function i(e) {
                let t = (0, r.useRef)(a);
                return t.current === a && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                a = n("48174");
            let i = [];

            function o(e, t) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(i);
                return o.current === i ? (n.current = e(), o.current = t) : !(0, a.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return f
                },
                removeFavoriteChannel: function() {
                    return C
                },
                setFavoriteChannelNickname: function() {
                    return v
                },
                addFavoriteCategory: function() {
                    return h
                },
                removeFavoriteCategory: function() {
                    return p
                },
                updateFavoriteChannels: function() {
                    return E
                },
                toggleFavoriteServerMuted: function() {
                    return g
                }
            });
            var r = n("249654"),
                a = n("151426"),
                i = n("872173"),
                o = n("42203"),
                u = n("957255"),
                s = n("379881"),
                l = n("843455");

            function c() {
                let e = s.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function d(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === a.FavoriteChannelType.CATEGORY) continue;
                    let r = o.default.getChannel(t);
                    if (null == r || !r.isPrivate() && !u.default.can(l.Permissions.VIEW_CHANNEL, r)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function f(e, t) {
                let n = s.default.isFavorite(e);
                !n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = a.FavoriteChannel.create({
                        nickname: "",
                        type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: c(),
                        parentId: null != t ? t : "0"
                    }), d(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e) {
                let t = s.default.getFavorite(e);
                null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === a.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    d(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function v(e, t) {
                let n = s.default.isFavorite(e);
                n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function h(e) {
                let t = r.default.fromTimestamp(Date.now());
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = a.FavoriteChannel.create({
                        nickname: e,
                        type: a.FavoriteChannelType.CATEGORY,
                        position: c(),
                        parentId: "0"
                    })
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function p(e) {
                C(e)
            }

            function E(e) {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let r of e)
                        if (null != r.position && (t.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id) {
                            var n;
                            t.favoriteChannels[r.id].parentId = null !== (n = r.parent_id) && void 0 !== n ? n : "0"
                        }
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function g() {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        515680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("77078"),
                o = n("476765"),
                u = n("200008"),
                s = n("782340"),
                l = n("37805");

            function c(e) {
                let {
                    onClose: t,
                    transitionState: n
                } = e, c = (0, o.useUID)(), [d, f] = a.useState("");
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": c,
                    children: [(0, r.jsxs)(i.ModalContent, {
                        children: [(0, r.jsx)(i.Heading, {
                            id: c,
                            className: l.header,
                            variant: "heading-xl/semibold",
                            children: s.default.Messages.CREATE_CATEGORY
                        }), (0, r.jsx)(i.ModalCloseButton, {
                            onClick: t,
                            className: l.closeButton
                        }), (0, r.jsx)(i.FormItem, {
                            title: s.default.Messages.CATEGORY_NAME,
                            className: l.name,
                            children: (0, r.jsx)(i.TextInput, {
                                value: d,
                                onChange: f,
                                maxLength: 100,
                                placeholder: s.default.Messages.CATEGORY_NAME_PLACEHOLDER,
                                className: l.inputWrapper,
                                autoFocus: !0
                            })
                        })]
                    }), (0, r.jsxs)(i.ModalFooter, {
                        children: [(0, r.jsx)(i.Button, {
                            onClick: function() {
                                (0, u.addFavoriteCategory)(d), t()
                            },
                            disabled: "" === d,
                            children: s.default.Messages.CREATE_CATEGORY
                        }), (0, r.jsx)(i.Button, {
                            onClick: t,
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            children: s.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return u
                },
                UID: function() {
                    return s
                }
            });
            var r = n("995008"),
                a = n.n(r),
                i = n("775560");
            let o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return a(e)
                },
                u = () => (0, i.useLazyValue)(() => o()),
                s = e => {
                    let {
                        children: t
                    } = e;
                    return t(u())
                }
        }
    }
]);