            "use strict";
            r.r(t), r.d(t, {
                searchAllGuildMembers: function() {
                    return o
                }
            }), r("70102");
            var n = r("872717"),
                u = r("913144"),
                l = r("448993"),
                a = r("828434"),
                i = r("49111");
            async function o(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (d > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: s = !0,
                    signal: c
                } = r;
                try {
                    var _;
                    let l = await n.default.post({
                        url: i.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: c
                    });
                    if (l.status === a.INDEXING_RESPONSE_CODE) {
                        if (null == l.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!s) throw Error("Indexing response received but autoRetry is disabled");
                        return await u.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * l.body.retry_after)), o(e, t, r, d + 1)
                    }
                    return {
                        type: a.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (_ = l.body).guild_id,
                            members: _.members,
                            page_result_count: _.page_result_count,
                            total_result_count: _.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new l.APIError(t);
                    return {
                        type: a.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }