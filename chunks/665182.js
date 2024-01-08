            "use strict";
            n.r(t), n.d(t, {
                ChatSidebarType: function() {
                    return s
                },
                default: function() {
                    return E
                }
            }), n("222007");
            var s, a, l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("917351"),
                d = n("669491"),
                c = n("452804"),
                f = n("594203"),
                h = n("168973"),
                C = n("332374"),
                p = n("207058");
            (a = s || (s = {}))[a.PostSidebar = 0] = "PostSidebar", a[a.ThreadSidebar = 1] = "ThreadSidebar", a[a.CallChatSidebar = 2] = "CallChatSidebar", a[a.MessageRequestSidebar = 3] = "MessageRequestSidebar", a[a.HomeSidebar = 4] = "HomeSidebar";

            function m(e) {
                let {
                    resizableNode: t,
                    onResize: n,
                    onResizeEnd: s,
                    maxWidth: a
                } = e, i = (0, f.default)({
                    minDimension: C.MIN_CHAT_SIDEBAR_WIDTH,
                    maxDimension: a,
                    resizableDomNodeRef: t,
                    onElementResize: n,
                    onElementResizeEnd: s,
                    orientation: f.ResizeOrientation.HORIZONTAL_LEFT
                });
                return (0, l.jsx)("div", {
                    onMouseDown: i,
                    className: p.resizeHandle
                })
            }

            function E(e) {
                let {
                    sidebarType: t,
                    maxWidth: n,
                    onWidthChange: s,
                    children: a,
                    floatingLayer: r
                } = e, f = i.useRef(null), E = function(e) {
                    switch (e) {
                        case 0:
                            return "postSidebarWidth";
                        case 1:
                            return "threadSidebarWidth";
                        case 2:
                            return "callChatSidebarWidth";
                        case 3:
                            return "messageRequestSidebarWidth";
                        case 4:
                            return "homeSidebarWidth"
                    }
                }(t), [g, S] = i.useState(h.default[E]), A = i.useCallback(e => {
                    c.default.updatedUnsyncedSettings({
                        [E]: e
                    })
                }, [E]), _ = (0, C.shouldChannelChatFloat)({
                    maxWidth: n
                }), T = (0, u.clamp)(g, C.MIN_CHAT_SIDEBAR_WIDTH, n), M = _ ? T : T + d.default.modules.chat.RESIZE_HANDLE_WIDTH;
                i.useEffect(() => {
                    null == s || s(T, _)
                }, [T, s, _]);
                let I = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: o(p.chatTarget, {
                            [p.floating]: _,
                            [p.notFloating]: !_
                        }),
                        style: {
                            width: M
                        }
                    }), !_ && (0, l.jsx)(m, {
                        maxWidth: n,
                        resizableNode: f,
                        onResize: S,
                        onResizeEnd: A
                    }), (0, l.jsx)("div", {
                        ref: f,
                        className: o(p.container, {
                            [p.floating]: _
                        }),
                        style: {
                            width: T
                        },
                        children: a
                    })]
                });
                if (_) {
                    let e = null != r ? r : i.Fragment;
                    return (0, l.jsx)(e, {
                        children: (0, l.jsx)("div", {
                            className: p.chatLayerWrapper,
                            children: I
                        })
                    })
                }
                return (0, l.jsx)(l.Fragment, {
                    children: I
                })
            }