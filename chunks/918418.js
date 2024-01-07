            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                r = n("77078"),
                s = n("782340"),
                i = n("45853"),
                d = n("926622");
            let u = e => {
                let {
                    data: {
                        title: t,
                        subtitle: n,
                        placeholder: u,
                        rows: o,
                        character_limit: c,
                        pattern: m
                    },
                    onChange: f,
                    initialText: _,
                    isRequired: E
                } = e, [h, v] = l.useState(""), [x, R] = l.useState("");
                l.useEffect(() => {
                    v(null != _ ? _ : "")
                }, [_]);
                let g = l.useCallback(e => {
                    let t = null != m ? new RegExp(m) : null;
                    null != t && null == t.exec(e) ? (R(s.default.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR), v(""), f("")) : null != e && (R(""), v(e), f(e))
                }, [f, m]);
                return (0, a.jsxs)("div", {
                    className: d.marginBottom8,
                    children: [null != t && (0, a.jsx)("div", {
                        className: d.marginBottom8,
                        children: (0, a.jsxs)(r.Text, {
                            variant: "text-sm/bold",
                            children: [t, E && (0, a.jsx)("span", {
                                className: i.required,
                                children: "*"
                            })]
                        })
                    }), (0, a.jsx)(r.TextArea, {
                        maxLength: c,
                        onChange: g,
                        value: h,
                        error: x,
                        rows: o,
                        placeholder: u,
                        autoFocus: !0
                    }), null != n && (0, a.jsx)("div", {
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: n
                        })
                    })]
                })
            };
            var o = e => {
                let {
                    elements: t,
                    onChange: n,
                    state: l
                } = e, r = t.map(e => {
                    var t;
                    let r = e.name;
                    return (0, a.jsx)(u, {
                        data: e.data,
                        onChange: e => n(r, e),
                        initialText: null !== (t = null == l ? void 0 : l[r]) && void 0 !== t ? t : void 0,
                        isRequired: e.should_submit_data
                    }, r)
                });
                return (0, a.jsx)("div", {
                    children: r
                })
            }