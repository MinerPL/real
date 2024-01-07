            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("70102");
            var i, a = n("522632"),
                l = n("872717"),
                s = n("605250"),
                r = n("49111");
            class u {
                async fetch(e, t, n) {
                    if (!this.isCanceled) try {
                        let a = await this.makeRequest();
                        if (null == a || this.isCanceled) return;
                        if (200 === a.status) e(a);
                        else if (202 === a.status) {
                            var i;
                            if (this.query.attempts = (null !== (i = this.query.attempts) && void 0 !== i ? i : 0) + 1, this.query.attempts > 5) return;
                            let l = 1e3 * a.body.retry_after;
                            this.retryDelay = isNaN(l) || 0 === l ? 5e3 : l, this.retryLater(e, t, n), t(a)
                        }
                    } catch (e) {
                        new(0, s.default)("SearchFetcher").error(e), n(e)
                    }
                }
                cancel() {
                    this.isCanceled = !0, null != this.indexingPollId && clearTimeout(this.indexingPollId)
                }
                retryLater(e, t, n) {
                    null != this.indexingPollId && clearTimeout(this.indexingPollId), this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
                }
                constructor(e, t, n) {
                    this.isCanceled = !1, this.searchId = e, this.searchType = t, this.query = n
                }
            }
            i = class extends u {
                getEndpoint() {
                    switch (this.searchType) {
                        case r.SearchTypes.DMS:
                            return r.Endpoints.SEARCH_DMS;
                        case r.SearchTypes.GUILD:
                            if (null == this.searchId || "" === this.searchId) return;
                            return r.Endpoints.SEARCH_GUILD(this.searchId);
                        case r.SearchTypes.CHANNEL:
                            if (null == this.searchId || "" === this.searchId) return;
                            return r.Endpoints.SEARCH_CHANNEL(this.searchId);
                        default:
                            throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
                    }
                }
                makeRequest() {
                    let e = this.getEndpoint();
                    return null == e ? null : l.default.get({
                        url: e,
                        query: a.stringify(this.query),
                        oldFormErrors: !0
                    })
                }
            }