            "use strict";
            let O, T;
            A.r(N), A.d(N, {
                setLocale: function() {
                    return G
                },
                updateLocaleLoadingStatus: function() {
                    return R
                }
            }), A("424973"), A("222007"), A("860677");
            var _ = A("913144"),
                E = A("787910"),
                e = A("782340");
            O = A("792788").default;
            let V = !1;

            function G(I) {
                T = e.default.loadPromise, O && O.setLocale(I), e.default.setLocale(I), R(I)
            }

            function R(I) {
                let N = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (V && e.default.loadPromise === T) return;
                V = !0, N ? (0, E.setLocaleHack)(I) : _.default.dispatch({
                    type: "I18N_LOAD_START",
                    locale: I
                });
                let A = [e.default.loadPromise];
                O && A.push(O.loadPromise);
                let G = Promise.all(A);
                setImmediate(() => {
                    G.then(() => {
                        _.default.dispatch({
                            type: "I18N_LOAD_SUCCESS",
                            locale: I
                        })
                    }).catch(N => {
                        _.default.dispatch({
                            type: "I18N_LOAD_ERROR",
                            error: N,
                            locale: I
                        })
                    })
                })
            }