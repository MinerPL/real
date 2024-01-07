            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("77078"),
                i = r("484894"),
                l = r("579921"),
                o = r("926622");
            let s = () => {
                r.el("776502").then(r.bind(r, "776502")).then(e => {
                    let {
                        openMFAModal: t
                    } = e;
                    t({
                        ticket: "ticket",
                        methods: [{
                            type: "webauthn",
                            challenge: "{}"
                        }, {
                            type: "totp",
                            backup_codes_allowed: !0
                        }, {
                            type: "sms"
                        }, {
                            type: "password"
                        }]
                    }, console.log, console.error)
                })
            };

            function c() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: [l.buttonsContainer, o.marginBottom20].join(" "),
                        children: (0, a.jsx)(i.OverridePremiumTypeDropDown, {
                            isDevTools: !0
                        })
                    }), (0, a.jsx)("div", {
                        className: [l.buttonsContainer, o.marginBottom20].join(" "),
                        children: (0, a.jsx)(n.Button, {
                            onClick: s,
                            children: "Launch MFA"
                        })
                    })]
                })
            }