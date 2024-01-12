            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("627445"),
                o = l.n(r),
                u = l("446674"),
                d = l("77078"),
                c = l("450911"),
                f = l("54239"),
                m = l("819689"),
                p = l("850391"),
                E = l("884351"),
                T = l("42203"),
                _ = l("27618"),
                S = l("158998"),
                h = l("718422"),
                I = l("49111"),
                A = l("782340"),
                g = l("22531");

            function v(e) {
                let {
                    user: t,
                    autoFocus: l = !1,
                    onClose: s,
                    className: r,
                    inputClassName: v
                } = e, C = a.useRef(null), N = (0, u.useStateFromStores)([_.default], () => _.default.isBlocked(t.id)), y = a.useCallback(e => {
                    if ("Enter" === e.key) {
                        e.preventDefault(), o(null != C.current, "Keypress on Input when not mounted");
                        let l = C.current.value.trim();
                        return (0, h.applyChatRestrictions)({
                            type: p.ChatInputTypes.NORMAL,
                            content: l,
                            channel: null
                        }).then(e => {
                            let {
                                valid: n
                            } = e;
                            n && (c.default.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(e => {
                                let t = T.default.getChannel(e);
                                o(null != t, "Newly created PrivateChannel is null"), m.default.sendMessage(t.id, E.default.parse(t, l)), (0, f.popLayer)()
                            }), null == s || s())
                        }), !0
                    }
                    e.which === I.KeyboardKeys.SPACE && e.stopPropagation()
                }, [s, t]), O = N ? A.default.Messages.QUICK_DM_BLOCKED : A.default.Messages.QUICK_DM_USER.format({
                    name: S.default.getName(t)
                });
                return (0, n.jsx)(d.TextInput, {
                    className: r,
                    inputClassName: i(v, g.input),
                    inputRef: C,
                    autoFocus: l,
                    placeholder: O,
                    "aria-label": O,
                    onKeyPress: y,
                    disabled: N
                })
            }