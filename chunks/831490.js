            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("913144"),
                o = s("997289"),
                d = s("659558"),
                u = s("154867"),
                c = s("439141"),
                S = s("739477"),
                E = s("42887"),
                f = s("697218"),
                m = s("49111"),
                T = s("782340"),
                _ = s("967790");
            let g = {
                width: 387,
                height: 218
            };

            function h(e) {
                let {
                    previewEnabled: t,
                    onEnablePreview: s
                } = e, h = E.default.getCameraComponent(), [I, N] = n.useState((0, d.getLastUsedVideoBackgroundOption)(f.default.getCurrentUser())), p = n.useRef(!1), C = n.useRef(I), A = (0, o.useAnalyticsContext)(), O = (0, l.useStateFromStores)([E.default], () => Object.values(E.default.getVideoDevices()).length > 0);
                return n.useEffect(() => () => {
                    p.current && r.default.wait(() => (0, u.saveLastUsedBackgroundOption)(C.current))
                }, []), (0, a.jsx)(S.default, {
                    selectedBackgroundOption: I,
                    onSelectBackgroundOption: e => {
                        p.current = !0, C.current = e, N(e), (0, c.applyBackgroundOptionLive)(e, {
                            location: A.location
                        }).catch(m.NOOP)
                    },
                    renderCamera: e => t ? (0, a.jsx)("div", {
                        className: _.cameraWrapper,
                        children: (0, a.jsxs)("div", {
                            className: _.camera,
                            children: [(0, a.jsx)(h, {
                                deviceId: e,
                                width: g.width,
                                height: g.height,
                                disabled: !t
                            }), (0, a.jsx)(S.FilterLoadingIndicator, {})]
                        })
                    }) : (0, a.jsxs)("div", {
                        className: _.cameraWrapper,
                        children: [(0, a.jsx)("div", {
                            className: _.previewImage
                        }), (0, a.jsx)(i.Tooltip, {
                            text: O ? null : T.default.Messages.CAMERA_UNAVAILABLE,
                            children: e => (0, a.jsx)(i.Button, {
                                ...e,
                                onClick: s,
                                disabled: !O,
                                children: T.default.Messages.TEST_VIDEO
                            })
                        })]
                    })
                })
            }