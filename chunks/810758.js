            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            }), s("222007");
            var n = s("884691"),
                a = e => {
                    let [t, s] = n.useState(!1), a = n.useCallback(t => {
                        e(t), s(!0)
                    }, [e, s]);
                    return {
                        isFocused: t,
                        handleFocus: a,
                        handleBlur: () => {
                            s(!1)
                        }
                    }
                }