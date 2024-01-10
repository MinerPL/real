            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                i = l("448105"),
                s = l.n(i),
                r = l("917351"),
                o = l.n(r),
                d = l("759843"),
                u = l("446674"),
                c = l("551042"),
                f = l("77078"),
                p = l("812204"),
                m = l("685665"),
                h = l("428958"),
                E = l("299039"),
                v = l("386045"),
                _ = l("803725"),
                C = l("142485"),
                g = l("552022"),
                L = l("548405"),
                x = l("411445"),
                T = l("80028"),
                I = l("305085");

            function S(e) {
                let {
                    channelId: t,
                    onClose: i,
                    transitionState: r
                } = e, [S, N] = n.useState(""), [A, M] = n.useState("descending"), [R, P] = n.useState(!0), [j, y] = n.useState(null), D = n.useDeferredValue(S), O = (0, u.useStateFromStores)([v.default], () => v.default.getClips()), H = (0, u.useStateFromStores)([v.default], () => v.default.getPendingClips()), w = (0, u.useStateFromStores)([v.default], () => v.default.getSettings().storageLocation), b = (0, u.useStateFromStoresArray)([v.default], () => v.default.getNewClipIds()), {
                    AnalyticsLocationProvider: k
                } = (0, m.default)(p.default.CLIPS_GALLERY), U = n.useMemo(() => [...H, ...O], [O, H]);
                (0, h.default)({
                    type: d.ImpressionTypes.MODAL,
                    name: d.ImpressionNames.CLIP_GALLERY_VIEWED,
                    properties: {
                        number_of_clips_loaded: U.length
                    }
                }, {
                    disableTrack: R
                }, [U.length, R]), n.useEffect(() => ((0, _.clearClipsSession)(), () => {
                    (0, _.clearClipsSession)(), (0, _.clearNewClipIds)()
                }), []);
                let B = n.useMemo(() => o(U).filter(e => {
                    if ("" === D.trim()) return !0;
                    let t = D.toLowerCase();
                    return null != e.name && "" !== e.name && s(t, e.name.toLowerCase()) || s(t, e.applicationName.toLowerCase())
                }).sort((e, t) => "ascending" === A ? E.default.compare(e.id, t.id) : "descending" === A ? E.default.compare(t.id, e.id) : 0).chunk(3).value(), [U, D, A]);
                n.useEffect(() => {
                    (async function e() {
                        P(!0);
                        try {
                            await _.loadClipsDirectory(w)
                        } finally {
                            P(!1)
                        }
                    })()
                }, [w]);
                let V = n.useCallback(e => {
                        (0, f.openModalLazy)(async () => {
                            let {
                                default: n
                            } = await l.el("473070").then(l.bind(l, "473070"));
                            return l => (0, a.jsx)(n, {
                                ...l,
                                channelId: t,
                                clip: e
                            })
                        }, {
                            modalKey: T.CLIPS_EDIT_MODAL_KEY
                        })
                    }, [t]),
                    {
                        onShareClick: z
                    } = (0, C.default)({
                        channelId: t,
                        setExporting: y
                    }),
                    F = n.useCallback(e => {
                        (0, f.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await l.el("386092").then(l.bind(l, "386092"));
                            return l => (0, a.jsx)(t, {
                                clip: e,
                                ...l,
                                onDelete: () => l.onClose()
                            })
                        })
                    }, []),
                    G = n.useCallback(e => {
                        let {
                            row: t
                        } = e, l = B[t];
                        return (0, a.jsx)("div", {
                            className: I.clipsRow,
                            children: l.map(e => {
                                let t = 0 === e.length;
                                return (0, a.jsx)(g.default, {
                                    actionsDisabled: null != j || t,
                                    exporting: j === e.id,
                                    isNew: b.includes(e.id),
                                    onDelete: F,
                                    onEdit: V,
                                    onShare: e => z({
                                        clip: e,
                                        onShareComplete: () => c.closeModal(T.CLIPS_GALLERY_MODAL_KEY)
                                    }),
                                    clip: e
                                }, e.id)
                            })
                        }, "clips-gallery-".concat(t))
                    }, [B, b, j, z, F, V]),
                    Y = R || 0 !== B.length ? R ? (0, a.jsx)("div", {
                        className: I.spinnerContainer,
                        children: (0, a.jsx)(f.Spinner, {})
                    }) : (0, a.jsx)(f.List, {
                        className: I.clipGrid,
                        sections: [B.length],
                        sectionHeight: 0,
                        rowHeight: 328.25,
                        renderRow: G
                    }) : (0, a.jsx)(L.default, {
                        isEmptyBecauseQuery: U.length > 0,
                        closePopout: i
                    });
                return (0, a.jsx)(f.ModalRoot, {
                    size: f.ModalSize.DYNAMIC,
                    transitionState: r,
                    className: I.root,
                    children: (0, a.jsxs)(k, {
                        children: [(0, a.jsx)(x.default, {
                            onClose: i,
                            filterQuery: S,
                            setFilterQuery: N,
                            sortOrder: A,
                            setSortOrder: M
                        }), Y]
                    })
                })
            }