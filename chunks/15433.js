            "use strict";
            n.r(t), n.d(t, {
                fetchDirectoryEntries: function() {
                    return o
                }
            });
            var a = n("483366"),
                l = n.n(a),
                s = n("872717"),
                i = n("913144"),
                r = n("730647"),
                u = n("49111");
            let o = l(async e => {
                try {
                    i.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_START"
                    });
                    let t = await s.default.get({
                        url: u.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
                        query: {
                            type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT
                        }
                    });
                    i.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                        channelId: e,
                        entries: t.body
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_FAILURE"
                    })
                }
            }, 200)