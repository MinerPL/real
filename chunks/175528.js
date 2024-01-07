            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("884691"),
                s = n("240249");

            function l(e, t) {
                let n = a.useRef(null),
                    l = a.useCallback((e, t) => {
                        var a, s, l;
                        e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null !== (l = null === (s = n.current) || void 0 === s ? void 0 : null === (a = s.textContent) || void 0 === a ? void 0 : a.trim()) && void 0 !== l ? l : "")
                    }, []);
                return s.useCommand(e, t), {
                    onCopy: l,
                    copyRef: n
                }
            }