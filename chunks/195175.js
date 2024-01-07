            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983"),
                r = a("884691"),
                s = a("446674"),
                l = a("77078"),
                o = a("82731"),
                u = a("40597"),
                c = a("926223"),
                i = a("712218"),
                d = a("782340"),
                E = a("266247");
            class p extends r.PureComponent {
                componentDidMount() {
                    null != this.props.venmoClient && o.tokenizeVenmo()
                }
                componentWillUnmount() {
                    o.teardownVenmo().then(() => o.createVenmoClient())
                }
                render() {
                    let {
                        venmoUsername: e,
                        className: t,
                        venmoClient: a
                    } = this.props, r = null != e && "" !== e;
                    return (0, n.jsxs)("div", {
                        className: t,
                        children: [(0, n.jsx)(i.default, {
                            type: i.default.Types.VENMO,
                            size: i.IconSizes.MEDIUM,
                            className: E.venmoIcon
                        }), r ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(l.Heading, {
                                variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                className: E.connectionInstructions,
                                children: d.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS.format({
                                    venmoUsername: e
                                })
                            }), (0, n.jsx)(l.Text, {
                                variant: "text-md/medium",
                                className: E.connectionInstructions,
                                children: d.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS_INSTRUCTIONS
                            })]
                        }) : (0, n.jsx)(l.Text, {
                            variant: "text-md/medium",
                            className: E.connectionInstructions,
                            children: null == a ? d.default.Messages.PAYMENT_SOURCE_VENMO_LOADING : d.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTION_INSTRUCTIONS
                        })]
                    })
                }
            }
            var f = s.default.connectStores([u.default, c.default], () => ({
                venmoUsername: c.default.venmoUsername,
                venmoClient: u.default.getVenmoClient()
            }))(p)