            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("446674"),
                s = n("77078"),
                i = n("305961"),
                u = n("476765"),
                o = n("228427"),
                c = n("834052"),
                d = n("119184"),
                f = n("444594"),
                E = n("813934"),
                h = n("767680"),
                g = n("249873"),
                _ = n("837979"),
                S = n("782340"),
                v = n("636843");

            function R(e) {
                let {
                    guild: t,
                    channel: n,
                    stageInstance: a,
                    headerId: r,
                    onClose: i,
                    loading: u,
                    error: c,
                    onSave: f,
                    defaultOptions: h,
                    isSlideReady: g
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: v.content,
                        children: [(0, l.jsx)(d.default, {
                            children: (0, l.jsx)("div", {
                                className: v.stageIconBackground,
                                children: (0, l.jsx)(o.default, {
                                    width: 32,
                                    height: 32,
                                    className: v.stageIcon
                                })
                            })
                        }), (0, l.jsx)(s.Heading, {
                            id: r,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: v.headerTitle,
                            children: null == a ? S.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : S.default.Messages.EDIT_STAGE_CHANNEL_TITLE
                        }), (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: v.headerSubtitle,
                            children: null == a ? S.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : S.default.Messages.EDIT_STAGE_SUBTITLE
                        })]
                    }), (0, l.jsx)(E.default, {
                        guild: t,
                        channel: n,
                        onSave: f,
                        error: c,
                        loading: u,
                        onClose: i,
                        defaultOptions: h,
                        isSlideReady: g
                    })]
                })
            }

            function m(e) {
                let {
                    channel: t,
                    onClose: n,
                    transitionState: o,
                    ...d
                } = e, E = (0, u.useUID)(), S = (0, r.useStateFromStores)([i.default], () => i.default.getGuild(t.guild_id)), m = a.useMemo(() => c.default.getStageInstanceByChannel(t.id), [t.id]), {
                    loading: C,
                    error: N,
                    onSave: T
                } = (0, h.default)(t, n), {
                    modalStep: p,
                    setModalStep: I,
                    readySlide: x,
                    handleSlideReady: L,
                    savedOptions: A,
                    handleSettingsSave: y,
                    handleDelayedSave: D
                } = (0, g.default)({
                    stageInstance: m,
                    defaultStep: _.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                    error: N,
                    onSave: T
                });
                return (a.useEffect(() => {
                    null == S && n()
                }, [S, n]), null == S) ? null : (0, l.jsx)(s.ModalRoot, {
                    transitionState: o,
                    "aria-labelledby": E,
                    ...d,
                    size: s.ModalSize.SMALL,
                    children: (0, l.jsxs)(s.Slides, {
                        activeSlide: p,
                        width: 440,
                        onSlideReady: L,
                        children: [(0, l.jsx)(s.Slide, {
                            id: _.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                            children: (0, l.jsx)("div", {
                                className: v.slideContainer,
                                children: (0, l.jsx)(R, {
                                    guild: S,
                                    channel: t,
                                    stageInstance: m,
                                    headerId: E,
                                    onClose: n,
                                    loading: C,
                                    error: N,
                                    onSave: y,
                                    defaultOptions: A,
                                    isSlideReady: x === _.StartStageSteps.STAGE_CHANNEL_SETTINGS
                                })
                            })
                        }), (0, l.jsx)(s.Slide, {
                            id: _.StartStageSteps.PUBLIC_STAGE_PREVIEW,
                            children: (0, l.jsx)("div", {
                                className: v.slideContainer,
                                children: (0, l.jsx)(f.default, {
                                    headerId: E,
                                    guild: S,
                                    channel: t,
                                    stageData: A,
                                    loading: C,
                                    onNext: D,
                                    onCancel: n,
                                    onBack: () => I(_.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                                })
                            })
                        })]
                    })
                })
            }