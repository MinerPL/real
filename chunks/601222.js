            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("347672"),
                r = n("214647");
            async function s() {
                let e = null;
                try {
                    e = await i.default.getThermalState()
                } catch (e) {
                    if (e.message === r.GET_THERMAL_STATE_NOT_IMPLEMENTED_ERROR_MESSAGE) return Promise.resolve(null);
                    throw e
                }
                return Promise.resolve(e)
            }