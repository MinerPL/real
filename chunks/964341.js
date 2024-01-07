            "use strict";
            n.r(e), n.d(e, {
                prepareEvent: function() {
                    return s
                }
            }), n("222007"), n("808653"), n("424973");
            var r = n("103787"),
                i = n("958679"),
                a = n("321506");

            function s(t, e, n, s) {
                let {
                    normalizeDepth: c = 3,
                    normalizeMaxBreadth: l = 1e3
                } = t, u = {
                    ...e,
                    event_id: e.event_id || n.event_id || (0, r.uuid4)(),
                    timestamp: e.timestamp || (0, r.dateTimestampInSeconds)()
                }, d = n.integrations || t.integrations.map(t => t.name);
                (function(t, e) {
                    let {
                        environment: n,
                        release: a,
                        dist: s,
                        maxValueLength: o = 250
                    } = e;
                    !("environment" in t) && (t.environment = "environment" in e ? n : i.DEFAULT_ENVIRONMENT), void 0 === t.release && void 0 !== a && (t.release = a), void 0 === t.dist && void 0 !== s && (t.dist = s), t.message && (t.message = (0, r.truncate)(t.message, o));
                    let c = t.exception && t.exception.values && t.exception.values[0];
                    c && c.value && (c.value = (0, r.truncate)(c.value, o));
                    let l = t.request;
                    l && l.url && (l.url = (0, r.truncate)(l.url, o))
                })(u, t),
                function(t, e) {
                    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
                }(u, d), void 0 === e.type && function(t, e) {
                    let n;
                    let i = r.GLOBAL_OBJ._sentryDebugIds;
                    if (!i) return;
                    let a = o.get(e);
                    a ? n = a : (n = new Map, o.set(e, n));
                    let s = Object.keys(i).reduce((t, r) => {
                        let a;
                        let s = n.get(r);
                        s ? a = s : (a = e(r), n.set(r, a));
                        for (let e = a.length - 1; e >= 0; e--) {
                            let n = a[e];
                            if (n.filename) {
                                t[n.filename] = i[r];
                                break
                            }
                        }
                        return t
                    }, {});
                    try {
                        t.exception.values.forEach(t => {
                            t.stacktrace.frames.forEach(t => {
                                t.filename && (t.debug_id = s[t.filename])
                            })
                        })
                    } catch (t) {}
                }(u, t.stackParser);
                let h = s;
                n.captureContext && (h = a.Scope.clone(h).update(n.captureContext));
                let f = (0, r.resolvedSyncPromise)(u);
                if (h) {
                    if (h.getAttachments) {
                        let t = [...n.attachments || [], ...h.getAttachments()];
                        t.length && (n.attachments = t)
                    }
                    f = h.applyToEvent(u, n)
                }
                return f.then(t => (t && function(t) {
                    let e = {};
                    try {
                        t.exception.values.forEach(t => {
                            t.stacktrace.frames.forEach(t => {
                                t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                            })
                        })
                    } catch (t) {}
                    if (0 === Object.keys(e).length) return;
                    t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
                    let n = t.debug_meta.images;
                    Object.keys(e).forEach(t => {
                        n.push({
                            type: "sourcemap",
                            code_file: t,
                            debug_id: e[t]
                        })
                    })
                }(t), "number" == typeof c && c > 0) ? function(t, e, n) {
                    if (!t) return null;
                    let i = {
                        ...t,
                        ...t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map(t => ({
                                ...t,
                                ...t.data && {
                                    data: (0, r.normalize)(t.data, e, n)
                                }
                            }))
                        },
                        ...t.user && {
                            user: (0, r.normalize)(t.user, e, n)
                        },
                        ...t.contexts && {
                            contexts: (0, r.normalize)(t.contexts, e, n)
                        },
                        ...t.extra && {
                            extra: (0, r.normalize)(t.extra, e, n)
                        }
                    };
                    return t.contexts && t.contexts.trace && i.contexts && (i.contexts.trace = t.contexts.trace, t.contexts.trace.data && (i.contexts.trace.data = (0, r.normalize)(t.contexts.trace.data, e, n))), t.spans && (i.spans = t.spans.map(t => (t.data && (t.data = (0, r.normalize)(t.data, e, n)), t))), i
                }(t, c, l) : t)
            }
            let o = new WeakMap