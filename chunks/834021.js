            "use strict";
            l.r(t), l.d(t, {
                getErrorHelp: function() {
                    return o
                },
                filesExceedUploadLimits: function() {
                    return d
                },
                getWebUploadFiles: function() {
                    return u
                }
            }), l("808653"), l("424973");
            var a = l("966724"),
                n = l("254490"),
                i = l("719923"),
                s = l("646718"),
                r = l("782340");

            function o(e, t) {
                let l = n.sizeString(n.maxFileSize(t));
                return i.default.isPremium(e, s.PremiumTypes.TIER_2) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: l
                }) : i.default.isPremium(e, s.PremiumTypes.TIER_1) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: l
                }) : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: l
                })
            }

            function d(e, t) {
                return n.anyFileTooLarge(e, t) || n.uploadSumTooLarge(e)
            }

            function u(e) {
                return e.reduce((e, t) => (t.item.platform === a.UploadPlatform.WEB && e.push(t.item.file), e), [])
            }