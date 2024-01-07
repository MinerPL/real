            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("222007");
            var a = s("884691"),
                n = s("448993"),
                l = s("197509");

            function i(e) {
                let [t, s] = a.useState(!0), [i, r] = a.useState(), [o, d] = a.useState(), u = a.useCallback(async e => {
                    s(!0), r(void 0);
                    try {
                        let t = await l.getCreatorMonetizationOnboardingMarketing(e);
                        d(t)
                    } catch (e) {
                        r(new n.APIError(e))
                    } finally {
                        s(!1)
                    }
                }, []);
                return a.useEffect(() => {
                    u(e)
                }, [e, u]), {
                    isLoading: t,
                    error: i,
                    creatorMonetizationOnboardingMarketing: o
                }
            }