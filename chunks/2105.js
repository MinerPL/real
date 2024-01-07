            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                s = n("913144");
            let i = {};
            class l extends a.default.Store {
                getSkuIdForChannel(e) {
                    return i[e]
                }
            }
            l.displayName = "ChannelSKUStore";
            var r = new l(s.default, {
                CONNECTION_OPEN: function() {
                    i = {}
                },
                STORE_LISTING_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        storeListing: n
                    } = e;
                    null != t && (i[t] = n.sku.id)
                }
            })