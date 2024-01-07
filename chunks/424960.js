            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("336522"),
                n = s("254490"),
                l = s("782340");

            function i(e) {
                (0, a.openUploadError)({
                    title: l.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: l.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, n.sizeString)(e)
                    })
                })
            }