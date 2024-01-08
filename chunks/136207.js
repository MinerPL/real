            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("77078"),
                d = n("450911"),
                u = n("254167"),
                s = n("679653"),
                o = n("782340");

            function r(e, t) {
                let n = (0, s.default)(e),
                    r = l.useCallback(() => {
                        let l = o.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                                name: n
                            }),
                            s = o.default.Messages.LEAVE_GROUP_DM_BODY.format({
                                name: n
                            });
                        e.isManaged() && (l = o.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                            name: n
                        }), s = o.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                            name: n
                        }));
                        let r = function(n) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            d.default.closePrivateChannel(e.id, t, a)
                        };
                        (0, i.openModal)(e => (0, a.jsx)(u.default, {
                            header: l,
                            body: s,
                            onSubmit: r,
                            ...e
                        }))
                    }, [e, n, t]);
                return (0, a.jsx)(i.MenuItem, {
                    id: "leave-channel",
                    label: o.default.Messages.LEAVE_GROUP_DM,
                    action: r,
                    color: "danger"
                })
            }