            "use strict";
            i.r(t), i.d(t, {
                useDeveloperActivityShelfItems: function() {
                    return d
                }
            });
            var l = i("884691"),
                a = i("446674"),
                n = i("84460"),
                r = i("954016");
            let d = () => {
                let {
                    isEnabled: e,
                    lastUsedObject: t
                } = (0, a.useStateFromStoresObject)([n.default], () => ({
                    isEnabled: n.default.getIsEnabled(),
                    lastUsedObject: n.default.getLastUsedObject()
                }), []), i = (0, a.useStateFromStoresArray)([n.default], () => n.default.getDeveloperShelfItems(), []), d = l.useMemo(() => e ? i.map(e => {
                    let t = {
                        application: e,
                        activity: {
                            ...r.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                            ...e.embeddedActivityConfig,
                            application_id: e.id
                        }
                    };
                    return t
                }).sort((e, i) => {
                    let l = t[e.application.id],
                        a = t[i.application.id];
                    return null == l ? 1 : null == a ? -1 : a - l
                }) : [], [i, e, t]);
                return d.length <= 0 ? [] : [
                    [r.ActivityAccessStatus.UNLOCKED, d]
                ]
            }