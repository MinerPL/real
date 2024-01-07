            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("77078"),
                n = s("945330"),
                u = s("781896"),
                r = s("664336"),
                o = s("158998"),
                d = s("781609"),
                c = s("709863"),
                E = s("227457"),
                I = s("782340"),
                S = s("536043"),
                f = function(e) {
                    let {
                        guild: t,
                        guildJoinRequest: s,
                        guildJoinRequestUser: f,
                        onClose: T
                    } = e, _ = l.useMemo(() => {
                        var e;
                        return null !== (e = s.formResponses) && void 0 !== e ? e : []
                    }, [s.formResponses]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(r.default, {
                            toolbar: (0, a.jsx)(r.default.Icon, {
                                icon: n.default,
                                onClick: T,
                                tooltip: I.default.Messages.CLOSE
                            }),
                            children: [(0, a.jsx)(r.default.Icon, {
                                icon: u.default,
                                disabled: !0,
                                "aria-label": I.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
                            }), (0, a.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: o.default.getName(f)
                            })]
                        }), (0, a.jsx)(c.default, {
                            guildJoinRequest: s,
                            guildJoinRequestUser: f,
                            guild: t
                        }), (0, a.jsxs)(i.Scroller, {
                            children: [(0, a.jsx)(E.default, {
                                user: f,
                                className: S.container
                            }), (0, a.jsx)("div", {
                                className: S.disabledFormRenderer,
                                children: (0, a.jsx)(d.default, {
                                    guildId: t.id,
                                    formFields: _,
                                    user: f
                                })
                            })]
                        })]
                    })
                }