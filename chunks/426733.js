            "use strict";
            s.r(t), s.d(t, {
                processImages: function() {
                    return c
                },
                default: function() {
                    return _
                }
            }), s("70102"), s("424973"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("371642"),
                r = s("694187"),
                o = s("166382"),
                d = s("991207");
            async function u(e) {
                try {
                    var t;
                    let s = await (t = e, new Promise((e, s) => {
                            if (null != t) {
                                let a = new FileReader;
                                a.onload = t => {
                                    var a;
                                    "string" == typeof(null === (a = t.target) || void 0 === a ? void 0 : a.result) ? e(t.target.result): s(Error("Failed to read file"))
                                }, a.readAsDataURL(t)
                            }
                        })),
                        a = new Image;
                    return a.src = s, await a.decode(), {
                        image: a,
                        dataURI: s
                    }
                } catch {
                    throw o.ImageInputUploadErrors.WRONG_TYPE
                }
            }
            async function c(e, t) {
                let s = [];
                for (let a = 0; a < e.length; a++) {
                    let n = e[a];
                    try {
                        let {
                            image: e,
                            dataURI: a
                        } = await u(n), l = n.type === d.FileTypes.MP4 ? await t(a, n) : await t(a, n, e);
                        null != l && s.push({
                            type: l,
                            filename: n.name
                        })
                    } catch (e) {
                        s.push({
                            type: e,
                            filename: n.name
                        })
                    }
                }
                s.length > 0 && E(s)
            }
            let E = e => {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await s.el("299052").then(s.bind(s, "299052"));
                    return s => (0, a.jsx)(t, {
                        errors: e,
                        ...s
                    })
                })
            };
            var _ = e => {
                let {
                    onChange: t,
                    multiple: o = !0,
                    disabled: d,
                    className: u,
                    tabIndex: E = -1,
                    "aria-label": _,
                    filters: T,
                    setLoading: I
                } = e, S = n.createRef(), N = n.useRef(null), [g, f] = n.useState(!1);
                n.useEffect(() => {
                    g && A()
                }, [g]);
                let A = () => {
                        null !== N.current && ((0, l.closeModal)(N.current), N.current = null)
                    },
                    L = async e => {
                        null == I || I(!0), await c(e, t), f(!0), null == I || I(!1)
                    }, m = async e => {
                        var t, n, i;
                        if (e.stopPropagation(), e.preventDefault(), (null === (t = e.currentTarget) || void 0 === t ? void 0 : t.files) == null || (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (n = i.files) || void 0 === n ? void 0 : n.length) === 0) return;
                        let r = e.currentTarget.files;
                        N.current = await (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("7476").then(s.bind(s, "7476"));
                            return t => (0, a.jsx)(e, {
                                processFiles: () => L(r),
                                ...t
                            })
                        })
                    };
                return (0, a.jsx)(i.default, {
                    onChange: m,
                    filters: null != T ? T : (0, r.getFilters)(),
                    multiple: o,
                    disabled: d,
                    className: u,
                    tabIndex: E,
                    "aria-label": _,
                    ref: S
                })
            }