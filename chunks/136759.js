            "use strict";
            r.r(e), r.d(e, {
                persist: function() {
                    return s
                }
            }), r("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var n = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable,
                c = (t, e, r) => e in t ? n(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                l = (t, e) => {
                    for (var r in e || (e = {})) o.call(e, r) && c(t, r, e[r]);
                    if (i)
                        for (var r of i(e)) a.call(e, r) && c(t, r, e[r]);
                    return t
                };
            let u = t => e => {
                    try {
                        let r = t(e);
                        if (r instanceof Promise) return r;
                        return {
                            then: t => u(t)(r),
                            catch (t) {
                                return this
                            }
                        }
                    } catch (t) {
                        return {
                            then(t) {
                                return this
                            },
                            catch: e => u(e)(t)
                        }
                    }
                },
                s = (t, e) => (r, n, i) => {
                    let o, a, c = l({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: t => t,
                        version: 0,
                        merge: (t, e) => l(l({}, e), t)
                    }, e);
                    (c.blacklist || c.whitelist) && console.warn("The ".concat(c.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let s = !1,
                        f = new Set,
                        p = new Set;
                    try {
                        o = c.getStorage()
                    } catch (t) {}
                    if (!o) return t(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(c.name, "', the given storage is currently unavailable.")), r(...e)
                    }, n, i);
                    !o.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(c.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let d = u(c.serialize),
                        v = () => {
                            let t;
                            let e = c.partialize(l({}, n()));
                            c.whitelist && Object.keys(e).forEach(t => {
                                var r;
                                (null == (r = c.whitelist) ? void 0 : r.includes(t)) || delete e[t]
                            }), c.blacklist && c.blacklist.forEach(t => delete e[t]);
                            let r = d({
                                state: e,
                                version: c.version
                            }).then(t => o.setItem(c.name, t)).catch(e => {
                                t = e
                            });
                            if (t) throw t;
                            return r
                        },
                        h = i.setState;
                    i.setState = (t, e) => {
                        h(t, e), v()
                    };
                    let g = t(function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            r(...e), v()
                        }, n, i),
                        m = () => {
                            var t;
                            if (!o) return;
                            s = !1, f.forEach(t => t(n()));
                            let e = (null == (t = c.onRehydrateStorage) ? void 0 : t.call(c, n())) || void 0;
                            return u(o.getItem.bind(o))(c.name).then(t => {
                                if (t) return c.deserialize(t)
                            }).then(t => {
                                if (t) {
                                    if ("number" != typeof t.version || t.version === c.version) return t.state;
                                    if (c.migrate) return c.migrate(t.state, t.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(t => {
                                var e;
                                return r(a = c.merge(t, null != (e = n()) ? e : g), !0), v()
                            }).then(() => {
                                null == e || e(a, void 0), s = !0, p.forEach(t => t(a))
                            }).catch(t => {
                                null == e || e(void 0, t)
                            })
                        };
                    return i.persist = {
                        setOptions: t => {
                            c = l(l({}, c), t), t.getStorage && (o = t.getStorage())
                        },
                        clearStorage: () => {
                            var t;
                            null == (t = null == o ? void 0 : o.removeItem) || t.call(o, c.name)
                        },
                        rehydrate: () => m(),
                        hasHydrated: () => s,
                        onHydrate: t => (f.add(t), () => {
                            f.delete(t)
                        }),
                        onFinishHydration: t => (p.add(t), () => {
                            p.delete(t)
                        })
                    }, m(), a || g
                }