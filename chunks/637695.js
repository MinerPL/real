            "use strict";
            n.r(t), n.d(t, {
                useCommunicationDisabledCountdownCleanup: function() {
                    return i
                }
            });
            var a = n("884691"),
                s = n("174727"),
                l = n("658536");

            function i(e) {
                let {
                    communicationDisabledUntil: t,
                    userId: n,
                    guildId: i
                } = null != e ? e : {}, r = (0, s.default)(null != t ? Date.parse(t) : Date.now()), o = r.seconds, u = (0, a.useRef)(null);
                return (0, a.useEffect)(() => {
                    if (null == e || null == i || null == n) {
                        clearTimeout(u.current);
                        return
                    }
                    return o <= 0 && null == u.current && (u.current = setTimeout(() => {
                        l.default.clearGuildMemberTimeout(i, n)
                    }, 1e3)), () => {
                        null != u.current && (clearTimeout(u.current), u.current = null)
                    }
                }, [i, n, o, t, e]), r
            }