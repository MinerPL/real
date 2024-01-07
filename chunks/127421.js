            "use strict";
            r.r(t), r.d(t, {
                searchAllGuildMembers: function() {
                    return s
                }
            }), r("70102");
            var n = r("811022"),
                u = r("872717"),
                l = r("913144"),
                a = r("448993"),
                i = r("828434"),
                o = r("49111");
            let d = new n.default("MemberSafetyElasticSearch");
            async function s(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (n > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: c = !0,
                    signal: _
                } = r;
                try {
                    var E;
                    let a = await u.default.post({
                        url: o.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: _
                    });
                    if (d.info("JANK searchAllGuildMembers", {
                            response: a
                        }), a.status === i.INDEXING_RESPONSE_CODE) {
                        if (null == a.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!c) throw Error("Indexing response received but autoRetry is disabled");
                        return await l.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * a.body.retry_after)), s(e, t, r, n + 1)
                    }
                    return {
                        type: i.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (E = a.body).guild_id,
                            members: E.members,
                            page_result_count: E.page_result_count,
                            total_result_count: E.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new a.APIError(t);
                    return d.info("JANK searchAllGuildMembers error", {
                        error: e
                    }), {
                        type: i.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }