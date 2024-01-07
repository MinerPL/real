            "use strict";
            n.r(e), n.d(e, {
                captureUserFeedback: function() {
                    return R
                },
                close: function() {
                    return w
                },
                defaultIntegrations: function() {
                    return g
                },
                flush: function() {
                    return S
                },
                forceLoad: function() {
                    return E
                },
                init: function() {
                    return m
                },
                lastEventId: function() {
                    return v
                },
                onLoad: function() {
                    return b
                },
                showReportDialog: function() {
                    return y
                },
                wrap: function() {
                    return T
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("57738"),
                s = n("714090"),
                o = n("233320"),
                c = n("558703"),
                l = n("585972"),
                u = n("200882"),
                d = n("743574"),
                h = n("882596"),
                f = n("235410"),
                p = n("16113"),
                _ = n("998211");
            let g = [new r.Integrations.InboundFilters, new r.Integrations.FunctionToString, new c.TryCatch, new l.Breadcrumbs, new o.GlobalHandlers, new u.LinkedErrors, new h.Dedupe, new d.HttpContext];

            function m() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                void 0 === t.defaultIntegrations && (t.defaultIntegrations = g), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), s.WINDOW.SENTRY_RELEASE && s.WINDOW.SENTRY_RELEASE.id && (t.release = s.WINDOW.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
                let e = {
                    ...t,
                    stackParser: (0, i.stackParserFromStackParserOptions)(t.stackParser || f.defaultStackParser),
                    integrations: (0, r.getIntegrationsToSetup)(t),
                    transport: t.transport || ((0, i.supportsFetch)() ? p.makeFetchTransport : _.makeXHRTransport)
                };
                (0, r.initAndBind)(a.BrowserClient, e), t.autoSessionTracking && function() {
                    if (void 0 === s.WINDOW.document) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                        return
                    }
                    let t = (0, r.getCurrentHub)();
                    t.captureSession && (k(t), (0, i.addInstrumentationHandler)("history", t => {
                        let {
                            from: e,
                            to: n
                        } = t;
                        !(void 0 === e || e === n) && k((0, r.getCurrentHub)())
                    }))
                }()
            }

            function y() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.getCurrentHub)();
                if (!s.WINDOW.document) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("Global document not defined in showReportDialog call");
                    return
                }
                let {
                    client: n,
                    scope: a
                } = e.getStackTop(), o = t.dsn || n && n.getDsn();
                if (!o) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("DSN not configured for showReportDialog call");
                    return
                }
                a && (t.user = {
                    ...a.getUser(),
                    ...t.user
                }), !t.eventId && (t.eventId = e.lastEventId());
                let c = s.WINDOW.document.createElement("script");
                c.async = !0, c.crossOrigin = "anonymous", c.src = (0, r.getReportDialogEndpoint)(o, t), t.onLoad && (c.onload = t.onLoad);
                let l = s.WINDOW.document.head || s.WINDOW.document.body;
                l ? l.appendChild(c) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("Not injecting report dialog. No injection point found in HTML")
            }

            function v() {
                return (0, r.getCurrentHub)().lastEventId()
            }

            function E() {}

            function b(t) {
                t()
            }

            function S(t) {
                let e = (0, r.getCurrentHub)().getClient();
                return e ? e.flush(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Cannot flush events. No client defined."), (0, i.resolvedSyncPromise)(!1))
            }

            function w(t) {
                let e = (0, r.getCurrentHub)().getClient();
                return e ? e.close(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Cannot flush events and disable SDK. No client defined."), (0, i.resolvedSyncPromise)(!1))
            }

            function T(t) {
                return (0, s.wrap)(t)()
            }

            function k(t) {
                t.startSession({
                    ignoreDuration: !0
                }), t.captureSession()
            }

            function R(t) {
                let e = (0, r.getCurrentHub)().getClient();
                e && e.captureUserFeedback(t)
            }