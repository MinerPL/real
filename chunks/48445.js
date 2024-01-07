            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var r = a("37983"),
                n = a("884691"),
                i = a("446674"),
                l = a("77078"),
                s = a("661919"),
                o = a("245622"),
                d = a("782340");
            class u extends n.PureComponent {
                render() {
                    let {
                        outbound: e
                    } = this.props;
                    return null == e ? (0, r.jsx)(l.Spinner, {
                        type: l.Spinner.Type.SPINNING_CIRCLE
                    }) : (0, r.jsx)(l.FormSection, {
                        tag: l.FormTitleTags.H2,
                        title: d.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
                        children: (0, o.renderStreams)(e)
                    })
                }
            }
            var c = i.default.connectStores([s.default], e => {
                let {
                    context: t,
                    index: a
                } = e, r = s.default.getAllStats(t)[a];
                return {
                    outbound: null != r ? r.rtp.outbound : null
                }
            })(u)