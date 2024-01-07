            "use strict";
            var s, a;
            n.r(t), n.d(t, {
                PhoneOrEmailSelectorForceMode: function() {
                    return s
                },
                shouldShowCountryCodeSelector: function() {
                    return i
                }
            }), (a = s || (s = {})).PHONE = "phone", a.EMAIL = "email";
            let l = /^[-() \d]+$/,
                r = e => e.startsWith("+");

            function i(e, t) {
                return "phone" === e ? !r(t) : "email" !== e && !(t.length < 3) && l.test(t)
            }