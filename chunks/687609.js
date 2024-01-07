            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("49111"),
                a = n("782340"),
                s = {
                    getStatus: function(e) {
                        let t, n, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        switch (e) {
                            case l.RTCConnectionStates.CONNECTING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_CONNECTING;
                                break;
                            case l.RTCConnectionStates.AUTHENTICATING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_AUTHENTICATING;
                                break;
                            case l.RTCConnectionStates.AWAITING_ENDPOINT:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_AWAITING_ENDPOINT;
                                break;
                            case l.RTCConnectionStates.RTC_CONNECTED:
                                t = l.ConnectionStatus.CONNECTED, n = s ? a.default.Messages.CONNECTION_STATUS_VIDEO_CONNECTED : a.default.Messages.CONNECTION_STATUS_VOICE_CONNECTED;
                                break;
                            case l.RTCConnectionStates.RTC_CONNECTING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_RTC_CONNECTING;
                                break;
                            case l.RTCConnectionStates.ICE_CHECKING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_ICE_CHECKING;
                                break;
                            case l.RTCConnectionStates.DTLS_CONNECTING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_DTLS_CONNECTING;
                                break;
                            case l.RTCConnectionStates.NO_ROUTE:
                                t = l.ConnectionStatus.ERROR, n = a.default.Messages.CONNECTION_STATUS_NO_ROUTE;
                                break;
                            case l.RTCConnectionStates.RTC_DISCONNECTED:
                                t = l.ConnectionStatus.ERROR, n = a.default.Messages.CONNECTION_STATUS_RTC_DISCONNECTED;
                                break;
                            case l.RTCConnectionStates.DISCONNECTED:
                            default:
                                t = l.ConnectionStatus.ERROR, n = a.default.Messages.CONNECTION_STATUS_DISCONNECTED
                        }
                        return {
                            connectionStatus: t,
                            connectionStatusText: n
                        }
                    },
                    getShortHostname: function(e) {
                        return null == e ? "" : e.split(".")[0]
                    }
                }