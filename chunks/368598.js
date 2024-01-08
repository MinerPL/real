            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                s = n("77078"),
                r = n("619443"),
                i = n("153498"),
                l = n("116460"),
                u = n("778588"),
                o = n("708169"),
                d = () => {
                    let e = (0, a.useStateFromStores)([u.default], () => u.default.hasLayers()),
                        t = (0, o.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0),
                        n = (0, i.useIsModalOpen)(),
                        d = (0, s.useModalsStore)(s.hasAnyModalOpen),
                        c = (0, a.useStateFromStores)([r.default], () => r.default.isConnected()),
                        f = (0, a.useStateFromStores)([l.default], () => l.default.isOpen());
                    return e || t || d || n || !c || f
                }