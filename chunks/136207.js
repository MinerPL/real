            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983"),
                l = a("884691"),
                i = a("77078"),
                d = a("450911"),
                u = a("254167"),
                s = a("679653"),
                o = a("782340");

            function r(e, t) {
                let a = (0, s.default)(e),
                    r = l.useCallback(() => {
                        let l = o.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                                name: a
                            }),
                            s = o.default.Messages.LEAVE_GROUP_DM_BODY.format({
                                name: a
                            });
                        e.isManaged() && (l = o.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                            name: a
                        }), s = o.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                            name: a
                        }));
                        let r = function(a) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            d.default.closePrivateChannel(e.id, t, n)
                        };
                        (0, i.openModal)(e => (0, n.jsx)(u.default, {
                            header: l,
                            body: s,
                            onSubmit: r,
                            ...e
                        }))
                    }, [e, a, t]);
                return (0, n.jsx)(i.MenuItem, {
                    id: "leave-channel",
                    label: o.default.Messages.LEAVE_GROUP_DM,
                    action: r,
                    color: "danger"
                })
            }