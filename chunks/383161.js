            "use strict";
            i.r(e), i.d(e, {
                mentionUser: function() {
                    return x
                },
                default: function() {
                    return g
                }
            }), i("222007");
            var l = i("37983");
            i("884691");
            var r = i("446674"),
                n = i("77078"),
                a = i("352674"),
                s = i("42203"),
                o = i("957255"),
                d = i("18494"),
                c = i("659500"),
                h = i("158998"),
                u = i("49111"),
                f = i("782340");

            function x(t, e) {
                let {
                    id: i
                } = t, l = "@".concat(h.default.getUserTag(t, {
                    decoration: "never"
                }));
                c.ComponentDispatch.dispatchToLastSubscribed(u.ComponentActions.INSERT_TEXT, {
                    plainText: l,
                    rawText: "<@".concat(i, ">")
                }), null != e && a.default.startTyping(e)
            }

            function g(t, e, i) {
                let [a, c] = (0, r.useStateFromStoresArray)([d.default, s.default, o.default], () => {
                    let t = d.default.getChannelId(e),
                        i = s.default.getChannel(t),
                        l = null != i && (i.isMultiUserDM() || o.default.can(u.Permissions.SEND_MESSAGES, i));
                    return [t, l]
                }, [e]), h = i === u.AppContext.POPOUT;
                return !c || h ? null : (0, l.jsx)(n.MenuItem, {
                    id: "mention",
                    label: f.default.Messages.MENTION,
                    action: function() {
                        x(t, a)
                    }
                })
            }