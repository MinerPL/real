            "use strict";
            n.r(t), n.d(t, {
                usePollFocusManager: function() {
                    return o
                },
                PollFocusManager: function() {
                    return d
                }
            }), n("70102"), n("222007");
            var a, s, l = n("37983"),
                i = n("884691");
            (s = a || (a = {})).POLL_ANSWERS = "POLL_ANSWERS", s.ACTION_BUTTON = "ACTION_BUTTON";
            let r = i.createContext(void 0);

            function o() {
                let e = i.useContext(r);
                if (null == e) throw Error("No PollFocusContextProvider found");
                return e
            }

            function u(e) {
                let {
                    children: t,
                    actionButtonRef: n,
                    pollAnswerRef: a,
                    manageFocusOnAction: s
                } = e, o = i.useMemo(() => ({
                    actionButtonRef: n,
                    pollAnswerRef: a,
                    manageFocusOnAction: s
                }), [n, a, s]);
                return (0, l.jsx)(r.Provider, {
                    value: o,
                    children: t
                })
            }

            function d(e) {
                let {
                    children: t
                } = e, [n, a] = i.useState(), s = i.useRef(null), r = i.useRef(null);
                return i.useEffect(() => {
                    var e, t, a;
                    "POLL_ANSWERS" === n && null != r.current && (null === (t = r.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), "ACTION_BUTTON" === n && null != s.current && (null === (a = s.current) || void 0 === a || a.focus())
                }, [n]), (0, l.jsx)(u, {
                    pollAnswerRef: r,
                    actionButtonRef: s,
                    manageFocusOnAction: e => {
                        switch (e) {
                            case "submit":
                            case "cancel":
                                a("ACTION_BUTTON");
                                break;
                            case "edit":
                                a("POLL_ANSWERS")
                        }
                    },
                    children: t
                })
            }