            "use strict";
            n.r(t), n.d(t, {
                ExpirationNoticeMobileWebExperiment: function() {
                    return a
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
                kind: "user",
                id: "2021-03_expiration_notice_mobile_web",
                label: "Show expiration notice on mobile web invite",
                defaultConfig: {
                    showExpirationNotice: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show expiration notice",
                    config: {
                        showExpirationNotice: !0
                    }
                }]
            });
            (0, s.createExperiment)({
                kind: "user",
                id: "2021-03_expiration_notice_ios",
                label: "Show expiration notice on ios invite",
                defaultConfig: {
                    showExpirationNotice: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show expiration notice",
                    config: {
                        showExpirationNotice: !0
                    }
                }]
            }), (0, s.createExperiment)({
                kind: "user",
                id: "2021-03_expiration_notice_ios_embed",
                label: "Show expiration notice on ios invite embed",
                defaultConfig: {
                    showExpirationNotice: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show expiration notice",
                    config: {
                        showExpirationNotice: !0
                    }
                }]
            })