            "use strict";
            n.r(t), n.d(t, {
                UPLOAD_FILE: function() {
                    return u
                }
            });
            var i = n("42203"),
                o = n("18494"),
                l = n("659500"),
                a = n("49111");
            let u = {
                binds: ["mod+shift+u"],
                comboKeysBindGlobal: !0,
                action() {
                    let e = i.default.getChannel(o.default.getChannelId());
                    return null != e && !e.isManaged() && l.ComponentDispatch.dispatch(a.ComponentActions.UPLOAD_FILE), !1
                }
            }