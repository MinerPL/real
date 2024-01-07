            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("446674"),
                a = s("913144");
            let l = {};
            class i extends n.default.PersistedStore {
                initialize(e) {
                    Object.assign(l, e)
                }
                getState() {
                    return l
                }
                shouldShowEducation(e) {
                    return !0 !== l[e]
                }
            }
            i.displayName = "ActivityInviteEducationStore", i.persistKey = "ActivityInviteEducationExperimentStore";
            var r = new i(a.default, {
                ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
                    return l[e.key] = e.value, !0
                }
            })