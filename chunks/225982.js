            "use strict";
            r.r(t), r.d(t, {
                searchGuildMembers: function() {
                    return o
                }
            });
            var n = r("811022"),
                u = r("913144"),
                l = r("127421"),
                a = r("828434");
            let i = new n.default("MemberSafetyGuildMemberSearchActionCreators");
            async function o(e, t, r) {
                let n = await (0, l.searchAllGuildMembers)(e, t, r);
                if (n.type === a.GuildMemberSearchResponseType.ERROR) throw n.body;
                let {
                    body: o
                } = n;
                i.info("JANK searchGuildMembers success", {
                    body: o
                }), u.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: o.members,
                    page_result_count: o.page_result_count,
                    total_result_count: o.total_result_count
                })
            }