            "use strict";
            n.r(t), n.d(t, {
                channelEditorPopupStore: function() {
                    return o
                },
                useChannelEditorPopup: function() {
                    return s
                },
                dismissChannelEditorPopup: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("308503");
            let r = Object.freeze({
                    id: null,
                    activeDescendant: null
                }),
                o = (0, i.default)(() => r);

            function s(e, t, n) {
                (0, l.useEffect)(() => {
                    t ? o.setState({
                        id: e,
                        activeDescendant: n
                    }) : o.setState({
                        id: null,
                        activeDescendant: null
                    })
                }, [e, t, n])
            }

            function a() {
                o.setState(() => r)
            }