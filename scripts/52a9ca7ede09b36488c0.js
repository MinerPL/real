(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46944"], {
        417814: function(a, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return o
                }
            });
            var c = t("920040");
            t("773670");
            var n = t("77078"),
                r = t("668596"),
                o = {
                    showCaptcha: function(a, e) {
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                sitekey: i,
                                captchaService: h,
                                options: p
                            } = a;
                        (0, n.openModalLazy)(async () => {
                            let {
                                default: a
                            } = await t.el("899945").then(t.bind(t, "899945"));
                            return t => (0, c.jsx)(a, {
                                onCaptchaVerify: (a, t) => e({
                                    captcha_key: a,
                                    captcha_rqtoken: t
                                }),
                                captchaService: h,
                                sitekey: i,
                                ...o,
                                ...p,
                                ...t
                            })
                        }, {
                            Layer: r.default
                        })
                    },
                    showCaptchaAsync: function(a) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                sitekey: o,
                                captchaService: i,
                                options: h
                            } = a;
                        return new Promise((a, p) => {
                            (0, n.openModalLazy)(async () => {
                                let {
                                    default: n
                                } = await t.el("899945").then(t.bind(t, "899945"));
                                return t => (0, c.jsx)(n, {
                                    onCaptchaVerify: (e, t) => a({
                                        captcha_key: e,
                                        captcha_rqtoken: t
                                    }),
                                    captchaService: i,
                                    sitekey: o,
                                    onReject: () => p(Error("cancel captcha")),
                                    ...e,
                                    ...h,
                                    ...t
                                })
                            }, {
                                Layer: r.default
                            })
                        })
                    }
                }
        }
    }
]);