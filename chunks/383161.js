            "use strict";
            n.r(t), n.d(t, {
                mentionUser: function() {
                    return _
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("352674"),
                s = n("42203"),
                u = n("957255"),
                o = n("18494"),
                d = n("659500"),
                c = n("158998"),
                E = n("49111"),
                f = n("782340");

            function _(e, t) {
                let {
                    id: n
                } = e, i = "@".concat(c.default.getUserTag(e, {
                    decoration: "never"
                }));
                d.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
                    plainText: i,
                    rawText: "<@".concat(n, ">")
                }), null != t && r.default.startTyping(t)
            }

            function I(e, t, n) {
                let [r, d] = (0, a.useStateFromStoresArray)([o.default, s.default, u.default], () => {
                    let e = o.default.getChannelId(t),
                        n = s.default.getChannel(e),
                        i = null != n && (n.isMultiUserDM() || u.default.can(E.Permissions.SEND_MESSAGES, n));
                    return [e, i]
                }, [t]), c = n === E.AppContext.POPOUT;
                return !d || c ? null : (0, i.jsx)(l.MenuItem, {
                    id: "mention",
                    label: f.default.Messages.MENTION,
                    action: function() {
                        _(e, r)
                    }
                })
            }