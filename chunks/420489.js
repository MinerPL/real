            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                s = i("945330"),
                a = i("51947"),
                r = i("994428"),
                o = i("782340"),
                u = i("580612"),
                c = e => {
                    let {
                        markAsDismissed: t
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: u.wrapper,
                        children: [(0, n.jsx)(a.default, {
                            className: u.icon
                        }), (0, n.jsx)("div", {
                            className: u.content,
                            children: (0, n.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                children: o.default.Messages.EMOJI_PICKER_FAVORITES_TIP
                            })
                        }), (0, n.jsx)(l.Clickable, {
                            onClick: () => t(r.ContentDismissActionType.UNKNOWN),
                            children: (0, n.jsx)(s.default, {
                                className: u.close
                            })
                        })]
                    })
                }