            "use strict";
            let n;
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("424973");
            var a = l("917351"),
                r = l.n(a),
                i = l("693566"),
                u = l.n(i),
                o = l("851387"),
                s = l("305961"),
                c = l("697218"),
                d = l("158998"),
                f = l("782340");
            let p = new u({
                maxAge: 6e4
            });

            function h(e, t, l) {
                null != n && clearTimeout(n), n = setTimeout(() => {
                    let n = [],
                        a = e => {
                            n.push(e.id)
                        };
                    if (null == e) r.forEach(s.default.getGuilds(), a);
                    else if (Array.isArray(e)) e.forEach(e => {
                        let t = s.default.getGuild(e);
                        null != t && a(t)
                    });
                    else {
                        let t = s.default.getGuild(e);
                        null != t && a(t)
                    }
                    n.length > 0 && o.default.requestMembers(n, t.toLocaleLowerCase(), l)
                }, 200)
            }

            function E(e, t) {
                let l = "".concat(null != e ? e : "", ":").concat(t),
                    n = p.get(l);
                if (null != n) return n;
                p.set(l, !0)
            }
            var g = {
                getGuildNameSuggestion: function(e) {
                    let t = c.default.getCurrentUser(),
                        l = d.getName(t);
                    return null == l || 0 === l.length ? "" : f.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? l.slice(0, 20) : l
                    })
                },
                requestMembers(e, t) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        n = Array.isArray(e),
                        a = [],
                        r = !1;
                    if (n) e.forEach(e => {
                        let l = E(e, t);
                        null == l && a.push(e)
                    });
                    else {
                        let l = E(e, t);
                        null == l && (r = !0)
                    }
                    a.length > 0 && n ? h(a, t, l) : r && h(e, t, l)
                }
            }