            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("424973");
            var i = n("917351"),
                l = n.n(i),
                s = n("693566"),
                a = n.n(s),
                o = n("851387"),
                u = n("305961"),
                d = n("697218"),
                c = n("158998"),
                _ = n("782340");
            let E = new a({
                maxAge: 6e4
            });

            function I(e, t, n) {
                null != r && clearTimeout(r), r = setTimeout(() => {
                    let r = [],
                        i = e => {
                            r.push(e.id)
                        };
                    if (null == e) l.forEach(u.default.getGuilds(), i);
                    else if (Array.isArray(e)) e.forEach(e => {
                        let t = u.default.getGuild(e);
                        null != t && i(t)
                    });
                    else {
                        let t = u.default.getGuild(e);
                        null != t && i(t)
                    }
                    r.length > 0 && o.default.requestMembers(r, t.toLocaleLowerCase(), n)
                }, 200)
            }

            function f(e, t) {
                let n = "".concat(null != e ? e : "", ":").concat(t),
                    r = E.get(n);
                if (null != r) return r;
                E.set(n, !0)
            }
            var A = {
                getGuildNameSuggestion: function(e) {
                    let t = d.default.getCurrentUser(),
                        n = c.getName(t);
                    return null == n || 0 === n.length ? "" : _.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
                    })
                },
                requestMembers(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        r = Array.isArray(e),
                        i = [],
                        l = !1;
                    if (r) e.forEach(e => {
                        let n = f(e, t);
                        null == n && i.push(e)
                    });
                    else {
                        let n = f(e, t);
                        null == n && (l = !0)
                    }
                    i.length > 0 && r ? I(i, t, n) : l && I(e, t, n)
                }
            }