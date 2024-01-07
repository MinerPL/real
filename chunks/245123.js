            "use strict";
            n.r(e), n.d(e, {
                FunctionToString: function() {
                    return r.FunctionToString
                },
                Hub: function() {
                    return r.Hub
                },
                InboundFilters: function() {
                    return r.InboundFilters
                },
                ModuleMetadata: function() {
                    return r.ModuleMetadata
                },
                SDK_VERSION: function() {
                    return r.SDK_VERSION
                },
                Scope: function() {
                    return r.Scope
                },
                addBreadcrumb: function() {
                    return r.addBreadcrumb
                },
                addGlobalEventProcessor: function() {
                    return r.addGlobalEventProcessor
                },
                addTracingExtensions: function() {
                    return r.addTracingExtensions
                },
                captureEvent: function() {
                    return r.captureEvent
                },
                captureException: function() {
                    return r.captureException
                },
                captureMessage: function() {
                    return r.captureMessage
                },
                configureScope: function() {
                    return r.configureScope
                },
                createTransport: function() {
                    return r.createTransport
                },
                extractTraceparentData: function() {
                    return r.extractTraceparentData
                },
                getActiveTransaction: function() {
                    return r.getActiveTransaction
                },
                getCurrentHub: function() {
                    return r.getCurrentHub
                },
                getHubFromCarrier: function() {
                    return r.getHubFromCarrier
                },
                makeMain: function() {
                    return r.makeMain
                },
                makeMultiplexedTransport: function() {
                    return r.makeMultiplexedTransport
                },
                setContext: function() {
                    return r.setContext
                },
                setExtra: function() {
                    return r.setExtra
                },
                setExtras: function() {
                    return r.setExtras
                },
                setTag: function() {
                    return r.setTag
                },
                setTags: function() {
                    return r.setTags
                },
                setUser: function() {
                    return r.setUser
                },
                spanStatusfromHttpCode: function() {
                    return r.spanStatusfromHttpCode
                },
                startTransaction: function() {
                    return r.startTransaction
                },
                trace: function() {
                    return r.trace
                },
                withScope: function() {
                    return r.withScope
                },
                WINDOW: function() {
                    return i.WINDOW
                },
                BrowserClient: function() {
                    return a.BrowserClient
                },
                makeFetchTransport: function() {
                    return s.makeFetchTransport
                },
                makeXHRTransport: function() {
                    return o.makeXHRTransport
                },
                chromeStackLineParser: function() {
                    return c.chromeStackLineParser
                },
                defaultStackLineParsers: function() {
                    return c.defaultStackLineParsers
                },
                defaultStackParser: function() {
                    return c.defaultStackParser
                },
                geckoStackLineParser: function() {
                    return c.geckoStackLineParser
                },
                opera10StackLineParser: function() {
                    return c.opera10StackLineParser
                },
                opera11StackLineParser: function() {
                    return c.opera11StackLineParser
                },
                winjsStackLineParser: function() {
                    return c.winjsStackLineParser
                },
                eventFromException: function() {
                    return l.eventFromException
                },
                eventFromMessage: function() {
                    return l.eventFromMessage
                },
                createUserFeedbackEnvelope: function() {
                    return u.createUserFeedbackEnvelope
                },
                captureUserFeedback: function() {
                    return d.captureUserFeedback
                },
                close: function() {
                    return d.close
                },
                defaultIntegrations: function() {
                    return d.defaultIntegrations
                },
                flush: function() {
                    return d.flush
                },
                forceLoad: function() {
                    return d.forceLoad
                },
                init: function() {
                    return d.init
                },
                lastEventId: function() {
                    return d.lastEventId
                },
                onLoad: function() {
                    return d.onLoad
                },
                showReportDialog: function() {
                    return d.showReportDialog
                },
                wrap: function() {
                    return d.wrap
                },
                Replay: function() {
                    return f.Replay
                },
                BrowserTracing: function() {
                    return p.BrowserTracing
                },
                defaultRequestInstrumentationOptions: function() {
                    return p.defaultRequestInstrumentationOptions
                },
                instrumentOutgoingRequests: function() {
                    return p.instrumentOutgoingRequests
                },
                makeBrowserOfflineTransport: function() {
                    return _.makeBrowserOfflineTransport
                },
                onProfilingStartRouteTransaction: function() {
                    return g.onProfilingStartRouteTransaction
                },
                BrowserProfilingIntegration: function() {
                    return m.BrowserProfilingIntegration
                },
                GlobalHandlers: function() {
                    return y.GlobalHandlers
                },
                TryCatch: function() {
                    return v.TryCatch
                },
                Breadcrumbs: function() {
                    return E.Breadcrumbs
                },
                LinkedErrors: function() {
                    return b.LinkedErrors
                },
                HttpContext: function() {
                    return S.HttpContext
                },
                Dedupe: function() {
                    return w.Dedupe
                },
                Integrations: function() {
                    return k
                }
            });
            var r = n("675065"),
                i = n("714090"),
                a = n("57738"),
                s = n("16113"),
                o = n("998211"),
                c = n("235410"),
                l = n("4362"),
                u = n("130178"),
                d = n("837808"),
                h = n("697637"),
                f = n("321798"),
                p = n("530271"),
                _ = n("252635"),
                g = n("127769"),
                m = n("502661"),
                y = n("233320"),
                v = n("558703"),
                E = n("585972"),
                b = n("200882"),
                S = n("743574"),
                w = n("882596");
            let T = {};
            i.WINDOW.Sentry && i.WINDOW.Sentry.Integrations && (T = i.WINDOW.Sentry.Integrations);
            let k = {
                ...T,
                ...r.Integrations,
                ...h
            }