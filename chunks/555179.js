            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("446674"),
                l = i("913144");
            let a = {};

            function u() {
                a = {}
            }
            class r extends n.default.Store {
                getNote(e) {
                    return a[e]
                }
            }
            r.displayName = "NoteStore";
            var d = new r(l.default, {
                CONNECTION_OPEN: u,
                OVERLAY_INITIALIZE: u,
                USER_NOTE_UPDATE: function(e) {
                    a[e.id] = {
                        loading: !1,
                        note: e.note
                    }
                },
                USER_NOTE_LOAD_START: function(e) {
                    let {
                        userId: t
                    } = e;
                    a[t] = {
                        loading: !0,
                        note: null
                    }
                },
                USER_NOTE_LOADED: function(e) {
                    let {
                        userId: t,
                        note: i
                    } = e;
                    a[t] = {
                        loading: !1,
                        note: null == i ? void 0 : i.note
                    }
                }
            })