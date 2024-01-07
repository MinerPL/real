            "use strict";
            i.r(t), i.d(t, {
                useUsernameHook: function() {
                    return d
                }
            });
            var a = i("37983"),
                l = i("884691"),
                n = i("77078"),
                o = i("506885"),
                s = i("981601"),
                r = i("42203"),
                u = i("441823");

            function d(e, t, i) {
                var d, c;
                let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    h = arguments.length > 4 ? arguments[4] : void 0;
                let f = (d = e, c = t, l.useCallback(e => {
                    let t = r.default.getChannel(c);
                    null != t && null != d && (0, u.openUserContextMenu)(e, d, t)
                }, [d, c]));
                return l.useCallback(r => (u, d) => {
                    let c = (e, t) => (0, l.createElement)(n.NameWithRoleAnchor, {
                            ...null != e ? e : {},
                            key: t,
                            onContextMenu: f,
                            name: u,
                            color: null == r ? void 0 : r.colorString,
                            roleName: null == r ? void 0 : r.colorRoleName,
                            "aria-label": h
                        }),
                        T = e => t => {
                            p && t.stopPropagation(), e(t)
                        };
                    return null != e ? (0, a.jsx)(n.Popout, {
                        position: "right",
                        preload: () => (0, o.default)(e.id, e.getAvatarURL(i, 80), {
                            guildId: i,
                            channelId: t
                        }),
                        renderPopout: l => (0, a.jsx)(s.default, {
                            ...l,
                            userId: e.id,
                            guildId: i,
                            channelId: t
                        }),
                        children: e => {
                            let {
                                onClick: t,
                                ...i
                            } = e;
                            return c({
                                onClick: T(t),
                                ...i
                            })
                        }
                    }, d) : c(void 0, d)
                }, [e, t, i, f, p, h])
            }