            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return l
                }
            }), s("222007");
            var a = s("884691"),
                n = s("448993");

            function l(t) {
                let {
                    onSubmit: e,
                    onClose: s
                } = t, [l, o] = a.useState(!1), [r, i] = a.useState(null), c = a.useCallback(async () => {
                    if (!l) {
                        o(!0), i(null);
                        try {
                            await e(), s()
                        } catch (e) {
                            let t = new n.APIError(e);
                            i(t.getAnyErrorMessage()), o(!1)
                        }
                    }
                }, [s, e, l]);
                return {
                    submitting: l,
                    errorMessage: r,
                    onSubmit: c
                }
            }