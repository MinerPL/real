            "use strict";
            t.r(n), t.d(n, {
                PlayStationLinkError: function() {
                    return a
                }
            });
            var i = t("37983");
            t("884691");
            var o = t("871988"),
                s = t("782340");

            function a(e) {
                let {
                    onContinue: n,
                    onClose: t
                } = e;
                return (0, i.jsx)(o.TwoWayLinkError, {
                    title: s.default.Messages.CONNECT_CONSOLE_ERROR_TITLE,
                    body: s.default.Messages.CONNECT_PS_ERROR_BODY,
                    onClose: t,
                    onContinue: n
                })
            }