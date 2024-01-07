            "use strict";
            n.r(t), n.d(t, {
                ComboboxPopout: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("130969"),
                l = n("960486"),
                u = n("29293");

            function c(e) {
                let {
                    children: t,
                    placeholder: n,
                    value: s,
                    onChange: c,
                    onClose: d,
                    showScrollbar: f,
                    className: E,
                    multiSelect: h,
                    ...p
                } = e, _ = r.useCallback(e => {
                    c(e), !h && (null == d || d())
                }, [c, d, h]);
                return (0, i.jsx)(o.Dialog, {
                    className: a(u.container, E, {
                        [u.scroller]: f
                    }),
                    children: (0, i.jsx)(l.Combobox, {
                        ...p,
                        showScrollbar: f,
                        value: s,
                        multiSelect: h,
                        onChange: _,
                        placeholder: n,
                        children: t,
                        listClassName: u.list
                    })
                })
            }