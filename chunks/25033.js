            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("446674"),
                i = n("913144"),
                l = n("988415");
            let r = (0, l.getDefaultCountryCode)();

            function o(e) {
                var t;
                let {
                    countryCode: n
                } = e;
                null != n && (r = null !== (t = (0, l.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, l.getDefaultCountryCode)())
            }
            class u extends s.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (a = e.selectedCountryCode)
                }
                getUserAgnosticState() {
                    return {
                        selectedCountryCode: a
                    }
                }
                getCountryCode() {
                    return null != a ? a : r
                }
            }
            u.displayName = "PhoneStore", u.persistKey = "PhoneStore";
            var d = new u(i.default, {
                PHONE_SET_COUNTRY_CODE: function(e) {
                    let {
                        countryCode: t
                    } = e;
                    a = t
                },
                CONNECTION_OPEN: o,
                SET_LOCATION_METADATA: o
            })