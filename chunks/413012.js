            "use strict";
            s.r(t), s.d(t, {
                ActivityAgeGateModal: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("77078"),
                a = s("440351"),
                l = s("782340"),
                o = s("836828");

            function r(e) {
                let {
                    application: t,
                    onAgree: s,
                    onClose: r,
                    onDisagree: u,
                    ...d
                } = e;
                return (0, i.jsx)(n.ModalRoot, {
                    ...d,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(a.default, {
                            onAgree: () => {
                                s(), r()
                            },
                            onDisagree: () => {
                                u(), r()
                            },
                            title: l.default.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_TITLE,
                            description: l.default.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_DESCRIPTION.format({
                                applicationName: t.name
                            }),
                            agreement: l.default.Messages.NSFW_ACCEPT,
                            disagreement: l.default.Messages.NSFW_DECLINE,
                            imageClassName: o.image
                        })
                    })
                })
            }