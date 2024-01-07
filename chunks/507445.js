            "use strict";
            var a, e;

            function n(r) {
                return {
                    captchaService: r.captcha_service,
                    sitekey: r.captcha_sitekey,
                    options: {
                        rqdata: r.captcha_rqdata,
                        rqtoken: r.captcha_rqtoken
                    }
                }
            }
            c.r(t), c.d(t, {
                CaptchaError: function() {
                    return a
                },
                extractCaptchaPropsFromResponseBody: function() {
                    return n
                }
            }), (e = a || (a = {})).CANCEL = "cancel", e.ERROR = "error", e.EXPIRED = "expired"