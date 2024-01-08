            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("629109"),
                r = n("42887"),
                o = n("773336"),
                u = n("49111"),
                d = n("782340");

            function c() {
                let e = !o.isPlatformEmbedded,
                    t = (0, l.useStateFromStores)([r.default], () => r.default.getMode()),
                    n = (e, n) => (0, a.jsx)(s.MenuRadioItem, {
                        id: e,
                        group: "input-modes",
                        label: n,
                        checked: t === e,
                        action: () => i.default.setMode(e)
                    }, e);
                return [n(u.InputModes.VOICE_ACTIVITY, d.default.Messages.INPUT_MODE_VAD), n(u.InputModes.PUSH_TO_TALK, e ? d.default.Messages.INPUT_MODE_PTT_LIMITED : d.default.Messages.INPUT_MODE_PTT)]
            }