            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2021-07_popout_autocomplete",
                label: "Popout Autocomplete experiment",
                defaultConfig: {
                    usePopoutAutocomplete: !1
                },
                treatments: [{
                    id: 1,
                    label: "New autocomplete style",
                    config: {
                        usePopoutAutocomplete: !0
                    }
                }]
            })