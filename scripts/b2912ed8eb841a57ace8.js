(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67204"], {
        665718: function(e, s, t) {
            "use strict";
            e.exports = t.p + "5420f8fd9d89897c6448.svg"
        },
        897327: function(e, s, t) {
            "use strict";
            e.exports = t.p + "d8197d45ef3e7289594d.svg"
        },
        49214: function(e, s, t) {
            "use strict";
            e.exports = t.p + "8f974a9393ea1fa82fa7.svg"
        },
        413012: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                ActivityAgeGateModal: function() {
                    return c
                }
            });
            var a = t("37983");
            t("884691");
            var i = t("77078"),
                n = t("440351"),
                d = t("782340"),
                r = t("836828");

            function c(e) {
                let {
                    application: s,
                    onAgree: t,
                    onClose: c,
                    onDisagree: o,
                    ...u
                } = e;
                return (0, a.jsx)(i.ModalRoot, {
                    ...u,
                    children: (0, a.jsx)("div", {
                        children: (0, a.jsx)(n.default, {
                            onAgree: () => {
                                t(), c()
                            },
                            onDisagree: () => {
                                o(), c()
                            },
                            title: d.default.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_TITLE,
                            description: d.default.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_DESCRIPTION.format({
                                applicationName: s.name
                            }),
                            agreement: d.default.Messages.NSFW_ACCEPT,
                            disagreement: d.default.Messages.NSFW_DECLINE,
                            imageClassName: r.image
                        })
                    })
                })
            }
        }
    }
]);