(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28145"], {
        533007: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setDevice: function() {
                    return s
                },
                ignoreDevice: function() {
                    return i
                },
                neverShowModal: function() {
                    return o
                }
            });
            var a = n("913144");

            function s(e, t, n) {
                a.default.dispatch({
                    type: "CONNECTED_DEVICE_SET",
                    displayName: e,
                    connectedDevicePreference: t,
                    location: n
                })
            }

            function i(e) {
                a.default.dispatch({
                    type: "CONNECTED_DEVICE_IGNORE",
                    displayName: e
                })
            }

            function o() {
                a.default.dispatch({
                    type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL"
                })
            }
        },
        134064: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a, s, i = n("37983"),
                o = n("884691"),
                E = n("77078"),
                d = n("533007"),
                l = n("145131"),
                c = n("599110"),
                r = n("49111"),
                T = n("782340"),
                D = n("706287");
            (a = s || (s = {})).CERTIFIED = "New Audio Device Detected - Certified", a.NOT_CERTIFIED = "New Audio Device Detected - Not Certified";
            class C extends o.Component {
                track() {
                    let {
                        certifiedDeviceMetadata: e,
                        device: t
                    } = this.props;
                    c.default.track(r.AnalyticEvents.OPEN_MODAL, {
                        type: null != e ? s.CERTIFIED : s.NOT_CERTIFIED,
                        device_name: null != e ? "".concat(e.vendor.name, " ").concat(e.model.name) : t.displayName
                    })
                }
                componentDidMount() {
                    this.track()
                }
                componentDidUpdate(e) {
                    let {
                        device: t
                    } = this.props;
                    t.displayName !== e.device.displayName && this.track()
                }
                renderBody() {
                    let e;
                    let {
                        device: t,
                        certifiedDeviceMetadata: n
                    } = this.props, {
                        devicePreference: a
                    } = this.state;
                    switch (t.type) {
                        case r.ConnectedDeviceType.INPUT:
                            e = null != n ? T.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_BODY.format({
                                vendorName: n.vendor.name,
                                modelName: n.model.name
                            }) : T.default.Messages.CONNECTED_DEVICE_DETECTED_INPUT_BODY.format({
                                name: t.displayName
                            });
                            break;
                        case r.ConnectedDeviceType.OUTPUT:
                            e = null != n ? T.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_OUTPUT_BODY.format({
                                vendorName: n.vendor.name,
                                modelName: n.model.name
                            }) : T.default.Messages.CONNECTED_DEVICE_DETECTED_OUTPUT_BODY.format({
                                name: t.displayName
                            });
                            break;
                        default:
                            e = (0, i.jsxs)(o.Fragment, {
                                children: [null != n ? T.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_AND_OUTPUT_BODY.format({
                                    vendorName: n.vendor.name,
                                    modelName: n.model.name
                                }) : T.default.Messages.CONNECTED_DEVICE_DETECTED_INPUT_AND_OUTPUT_BODY.format({
                                    name: t.displayName
                                }), (0, i.jsx)(E.RadioGroup, {
                                    value: a,
                                    className: D.options,
                                    onChange: this.handleConnectedDeviceType,
                                    options: [{
                                        name: T.default.Messages.CONNECTED_DEVICE_DETECTED_OPTION_INPUT_AND_OUTPUT,
                                        value: r.ConnectedDeviceType.INPUT_AND_OUTPUT
                                    }, {
                                        name: T.default.Messages.CONNECTED_DEVICE_DETECTED_OPTION_INPUT,
                                        value: r.ConnectedDeviceType.INPUT
                                    }, {
                                        name: T.default.Messages.CONNECTED_DEVICE_DETECTED_OPTION_OUTPUT,
                                        value: r.ConnectedDeviceType.OUTPUT
                                    }]
                                })]
                            })
                    }
                    return (0, i.jsxs)(o.Fragment, {
                        children: [e, (0, i.jsx)(E.Button, {
                            className: D.neverShow,
                            look: E.Button.Looks.LINK,
                            color: E.Button.Colors.LINK,
                            onClick: this.neverShow,
                            children: T.default.Messages.DONT_SHOW_AGAIN
                        })]
                    }, t.displayName)
                }
                render() {
                    let {
                        certifiedDeviceMetadata: e,
                        transitionState: t
                    } = this.props, n = null != e ? T.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_TITLE : T.default.Messages.CONNECTED_DEVICE_DETECTED_TITLE;
                    return (0, i.jsxs)(E.ModalRoot, {
                        transitionState: t,
                        "aria-label": n,
                        children: [(0, i.jsx)(E.ModalHeader, {
                            separator: !1,
                            children: (0, i.jsx)(E.Heading, {
                                variant: "heading-lg/semibold",
                                children: n
                            })
                        }), (0, i.jsx)(E.ModalContent, {
                            children: (0, i.jsx)(E.Text, {
                                variant: "text-md/normal",
                                children: this.renderBody()
                            })
                        }), (0, i.jsx)(E.ModalFooter, {
                            children: (0, i.jsxs)(l.default, {
                                justify: l.default.Justify.END,
                                children: [(0, i.jsx)(E.Button, {
                                    color: E.Button.Colors.PRIMARY,
                                    onClick: this.cancel,
                                    className: D.cancelButton,
                                    children: T.default.Messages.CONNECTED_DEVICE_DETECTED_CANCEL_BUTTON
                                }), (0, i.jsx)(E.Button, {
                                    onClick: this.confirm,
                                    children: T.default.Messages.CONNECTED_DEVICE_DETECTED_CONFIRM_BUTTON
                                })]
                            })
                        })]
                    })
                }
                constructor(e) {
                    super(e), this.confirm = () => {
                        let {
                            device: e,
                            onClose: t
                        } = this.props, {
                            devicePreference: n
                        } = this.state;
                        null != n && (d.setDevice(e.displayName, n, "New Audio Device Detected Modal"), t())
                    }, this.cancel = () => {
                        let {
                            device: e,
                            onClose: t
                        } = this.props;
                        d.ignoreDevice(e.displayName), t()
                    }, this.neverShow = () => {
                        let {
                            certifiedDeviceMetadata: e,
                            onClose: t
                        } = this.props;
                        d.neverShowModal(), t(), c.default.track(r.AnalyticEvents.MODAL_DISMISSED, {
                            type: null != e ? s.CERTIFIED : s.NOT_CERTIFIED,
                            dismiss_type: "permanent"
                        })
                    }, this.handleConnectedDeviceType = e => {
                        let {
                            value: t
                        } = e;
                        this.setState({
                            devicePreference: t
                        })
                    }, this.state = {
                        devicePreference: null != e.device ? function(e) {
                            switch (e) {
                                case r.ConnectedDeviceType.INPUT:
                                    return r.ConnectedDevicePreference.INPUT;
                                case r.ConnectedDeviceType.OUTPUT:
                                    return r.ConnectedDevicePreference.OUTPUT;
                                case r.ConnectedDeviceType.INPUT_AND_OUTPUT:
                                    return r.ConnectedDevicePreference.INPUT_AND_OUTPUT;
                                default:
                                    return null
                            }
                        }(e.device.type) : null
                    }
                }
            }
        }
    }
]);