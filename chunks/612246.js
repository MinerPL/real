            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("394846"),
                a = n("446674"),
                l = n("913144"),
                i = n("619443"),
                r = n("624309"),
                o = n("492397");
            let u = {},
                d = {},
                c = !0,
                f = {},
                h = !1;

            function C() {
                return r.default
            }

            function p() {
                if (f = {}, c) return;
                let e = r.default;
                for (let [t, n] of Object.entries(e)) {
                    let e = !1 !== u[t];
                    if (f[t] = e, e && null != n.prerequisites)
                        for (let e of n.prerequisites) {
                            let n = !1 === u[e];
                            !n && (f[t] = !1)
                        }
                }
            }
            class m extends a.default.Store {
                initialize() {
                    p(), this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(i.default)
                }
                shouldShow(e) {
                    var t;
                    return !(!h || c || o.CONFERENCE_MODE_ENABLED || (t = e, s.isMobile && ["writing-messages", "organize-by-topic"].includes(t))) && (f[e] || !1)
                }
                shouldShowAnyIndicators() {
                    return !c
                }
                getIndicators() {
                    return d
                }
                getData() {
                    return r.default
                }
                getDefinition(e) {
                    let t = this.getData();
                    return null != t ? t[e] : null
                }
            }
            m.displayName = "TutorialIndicatorStore";
            var E = new m(l.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        tutorial: t
                    } = e;
                    h = !0, c = !0, u = {}, null != t && (c = t.indicators_suppressed, t.indicators_confirmed.forEach(e => u[e] = !1)), p()
                },
                CONNECTION_CLOSED: function() {
                    h = !1
                },
                TUTORIAL_INDICATOR_DISMISS: function(e) {
                    u = {
                        ...u,
                        [e.tutorialId]: !1
                    }, d = {
                        ...d
                    }, delete d[e.tutorialId], p()
                },
                TUTORIAL_INDICATOR_SHOW: function(e) {
                    d = {
                        ...d,
                        [e.tutorialId]: e.renderData
                    }
                },
                TUTORIAL_INDICATOR_HIDE: function(e) {
                    d = {
                        ...d
                    }, delete d[e.tutorialId]
                },
                TUTORIAL_INDICATOR_SUPPRESS_ALL: function() {
                    c = !0
                }
            })