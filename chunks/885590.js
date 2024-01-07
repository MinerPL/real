            "use strict";
            n.r(t), n.d(t, {
                StageChannelNowPlayingDelegate: function() {
                    return h
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("65597"),
                i = n("77078"),
                r = n("42203"),
                o = n("716214"),
                u = n("118033"),
                d = n("834052"),
                c = n("782340");

            function f(e) {
                var t, n;
                let {
                    activity: f
                } = e, {
                    channelId: h
                } = null !== (t = (0, u.unpackStageChannelParty)(f)) && void 0 !== t ? t : {}, C = (0, s.default)([d.default], () => d.default.getStageInstanceByChannel(h), [h]), p = a.useRef(null), m = a.useCallback(() => {
                    let e = r.default.getChannel(h);
                    null != e && o.connectAndOpen(e)
                }, [h]), E = null !== (n = null == C ? void 0 : C.topic) && void 0 !== n ? n : f.name, g = c.default.Messages.STAGE_CHANNEL_ACTIVITY_FEED_JOIN.format({
                    channel: E
                });
                return (0, l.jsx)("div", {
                    ref: p,
                    children: (0, l.jsx)(i.Clickable, {
                        onClick: m,
                        focusProps: {
                            ringTarget: p
                        },
                        children: (0, l.jsx)(i.Heading, {
                            variant: "heading-sm/semibold",
                            children: g
                        })
                    })
                })
            }
            class h {
                shouldShow(e) {
                    return (0, u.shouldShowActivity)(e)
                }
                createHeader(e) {
                    return {
                        subtitle: c.default.Messages.STAGE_CHANNEL_ACTIVITY_FEED_DEFAULT,
                        icon: null
                    }
                }
                constructor() {
                    this.body = f
                }
            }