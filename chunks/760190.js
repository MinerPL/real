            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("913144"),
                s = n("789563");
            class a extends i.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                get hasLoadedExperiments() {
                    return s.default.hasLoadedExperiments
                }
                getExperimentBucket(e) {
                    return s.default.getUserExperimentBucket(e)
                }
                getEligibleExperiment(e) {
                    return s.default.getUserExperimentDescriptor(e)
                }
                getEligibleExperiments() {
                    return s.default.getAllUserExperimentDescriptors()
                }
                getRegisteredExperiments() {
                    return s.default.getRegisteredExperiments()
                }
                getExperimentOverrides() {
                    return s.default.getAllExperimentOverrideDescriptors()
                }
                getOverrideExperimentDescriptor(e) {
                    return s.default.getExperimentOverrideDescriptor(e)
                }
            }

            function o() {
                return !0
            }
            a.displayName = "LegacyExperimentStore";
            var l = new a(r.default, {
                LOGOUT: o,
                LOGIN_SUCCESS: o,
                CONNECTION_OPEN: o,
                EXPERIMENTS_FETCH_SUCCESS: o,
                OVERLAY_INITIALIZE: o,
                CACHE_LOADED: o,
                EXPERIMENTS_FETCH_FAILURE: o,
                EXPERIMENT_REGISTER_LEGACY: o,
                EXPERIMENT_OVERRIDE_BUCKET: o
            })