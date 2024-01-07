            "use strict";
            n.r(t), n.d(t, {
                openCreateGuildModal: function() {
                    return _
                },
                updateCreateGuildModal: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("42963"),
                s = n("599110"),
                a = n("169626"),
                o = n("243338"),
                u = n("49111"),
                d = n("149806");

            function c(e, t, n, i) {
                return (0, r.jsx)(a.default, {
                    onSuccess: t => {
                        l.default.flowStep(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.SUCCESS), e.onClose(), null == i || i(t)
                    },
                    onSlideChange: e => (function(e, t) {
                        switch (e) {
                            case o.CreateGuildSlideTypes.GUILD_TEMPLATES:
                                l.default.flowStepOrStart(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.GUILD_TEMPLATES), s.default.track(u.AnalyticEvents.OPEN_MODAL, {
                                    type: "Create Guild Templates",
                                    location: t
                                });
                                break;
                            case o.CreateGuildSlideTypes.CUSTOMIZE_GUILD:
                                l.default.flowStep(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.GUILD_CREATE), s.default.track(u.AnalyticEvents.OPEN_MODAL, {
                                    type: "Create Guild Step 2",
                                    location: t
                                });
                                break;
                            case o.CreateGuildSlideTypes.CREATION_INTENT:
                                s.default.track(u.AnalyticEvents.OPEN_MODAL, {
                                    type: "Server Intent Discovery",
                                    location: t
                                });
                                break;
                            case o.CreateGuildSlideTypes.JOIN_GUILD:
                                l.default.flowStep(d.FlowType.CREATE_GUILD, d.CreateGuildSteps.JOIN_GUILD), s.default.track(u.AnalyticEvents.OPEN_MODAL, {
                                    type: "Join Guild",
                                    location: t
                                })
                        }
                    })(e, n),
                    initialSlide: t,
                    hasJoinButton: !0,
                    ...e
                })
            }
            let _ = e => {
                    let {
                        initialSlide: t,
                        location: n,
                        onSuccess: r
                    } = e;
                    (0, i.openModal)(e => c(e, t, n, r), {
                        modalKey: o.CREATE_GUILD_MODAL_KEY
                    })
                },
                E = e => {
                    let {
                        slide: t,
                        location: n
                    } = e;
                    (0, i.updateModal)(o.CREATE_GUILD_MODAL_KEY, e => c(e, t, n))
                }