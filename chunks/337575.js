"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("808653"), l("222007"), l("781738"), l("506083"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("424973");
var s, u = l("917351"),
  i = l.n(u),
  n = l("132710"),
  r = l.n(n),
  a = l("872173"),
  o = l("233069"),
  h = l("813006"),
  d = l("741347"),
  c = l("42203"),
  p = l("319781"),
  _ = l("923959"),
  f = l("27618"),
  R = l("697218"),
  y = l("25292"),
  E = l("651879"),
  C = l("253981"),
  g = l("447909"),
  T = l("195547"),
  m = l("375822"),
  A = l("49111");
let U = Object.freeze({});

function I(e, t) {
  var l, s;
  if (!t.frecencyBoosters) return {};
  let u = p.default.getFrequentlyWithoutFetchingLatest(),
    i = u.reduce((e, t) => {
      let {
        id: l
      } = t, s = p.default.getScoreWithoutFetchingLatest(l);
      return s > e ? s : e
    }, 0),
    n = [];
  switch (e) {
    case m.AutocompleterResultTypes.GUILD:
      n = u.filter(e => e instanceof h.default);
      break;
    case m.AutocompleterResultTypes.USER:
      n = u.filter(e => e instanceof o.ChannelRecordBase && e.type === A.ChannelTypes.DM);
      break;
    case m.AutocompleterResultTypes.GROUP_DM:
      n = u.filter(e => e instanceof o.ChannelRecordBase && e.isMultiUserDM());
      break;
    case m.AutocompleterResultTypes.TEXT_CHANNEL:
      n = u.filter(e => e instanceof o.ChannelRecordBase && (0, o.isGuildSelectableChannelType)(e.type));
      break;
    case m.AutocompleterResultTypes.VOICE_CHANNEL:
      n = u.filter(e => e instanceof o.ChannelRecordBase && e.isGuildVocal())
  }
  let r = {};
  for (let t of n) {
    let {
      id: l
    } = t, s = p.default.getScoreWithoutFetchingLatest(l);
    if (e === m.AutocompleterResultTypes.USER && t instanceof o.PrivateChannelRecord) {
      if (t.type === A.ChannelTypes.DM) r[l = t.getRecipientId()] = 1 + s / i;
      else if (t.type === A.ChannelTypes.GROUP_DM) {
        let e = t.recipients.length;
        for (let l of t.recipients) r[l] = 1 + s / i * (1 / e)
      }
    } else r[l] = 1 + s / i
  }
  let a = f.default.getFriendIDs();
  for (let e of a) r[e] = (null !== (l = r[e]) && void 0 !== l ? l : 1) + .2;
  let d = c.default.getDMUserIds();
  for (let e of d) r[e] = (null !== (s = r[e]) && void 0 !== s ? s : 1) + .1;
  return r
}
s = class {
  createSearchContext() {
    null == this.userSearchContext && (this.userSearchContext = g.default.getSearchContext(this.parseUserResults, this._limit))
  }
  setLimit(e) {
    let {
      userSearchContext: t
    } = this;
    this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
  }
  setResultTypes(e) {
    this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(m.AutocompleterResultTypes.USER) ? this._userResults : [], this._groupDMResults = this._include(m.AutocompleterResultTypes.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(m.AutocompleterResultTypes.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(m.AutocompleterResultTypes.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(m.AutocompleterResultTypes.GUILD) ? this._guildResults : [], this._applicationResults = this._include(m.AutocompleterResultTypes.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(m.AutocompleterResultTypes.LINK) ? this._linkResults : []
  }
  _include(e) {
    return null == this.resultTypes || this.resultTypes.has(e)
  }
  _isAsyncSearch() {
    return this._include(m.AutocompleterResultTypes.USER)
  }
  setOptions(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    t ? this.options = {
      ...this.options,
      ...e
    } : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(e => e.startsWith("user:") ? e.replace("user:", "") : "").filter(e => "" !== e) : this._userBlacklist = null
  }
  search(e, t) {
    if (this.query = e, "" === e.trim()) {
      this.clear(), this.updateAllResults();
      return
    }
    let l = this.options.frecencyBoosters ? a.FrecencyUserSettingsActionCreators.loadIfNecessary() : Promise.resolve();
    l.finally(() => {
      this.queryUsers(e, t, this._limit), this._groupDMResults = this.queryGroupDMs(e, this._limit), this._textChannelResults = this.queryTextChannels(e, this._limit), this._voiceChannelResults = this.queryVoiceChannels(e, this._limit), this._guildResults = this.queryGuilds(e, this._limit), this._applicationResults = this.queryApplications(e, this._limit), this._linkResults = this.queryLink(e, this._limit), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), this._asyncTimeout = setTimeout(this.updateAllResults, 300)) : this.updateAllResults()
    })
  }
  clear() {
    let {
      userSearchContext: e
    } = this;
    null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = []
  }
  clean() {
    this.clear(), this.destroy(), this.query = "", this.updateAllResults()
  }
  pause() {
    var e, t;
    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t)
  }
  resume() {
    var e, t;
    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t)
  }
  destroy() {
    let {
      userSearchContext: e
    } = this;
    null != e && (e.destroy(), this.userSearchContext = null)
  }
  queryTextChannels(e, t) {
    if (!this._include(m.AutocompleterResultTypes.TEXT_CHANNEL)) return [];
    let l = I(m.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
      {
        blacklist: s
      } = this.options;
    return y.default.queryChannels({
      query: e,
      guildId: null,
      limit: t,
      fuzzy: !0,
      filter: null != s ? e => !s.has("channel:".concat(e.id)) : void 0,
      boosters: l
    })
  }
  queryVoiceChannels(e, t) {
    if (!this._include(m.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
    let {
      voiceChannelGuildFilter: l
    } = this.options, s = I(m.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
    return y.default.queryChannels({
      query: e,
      guildId: l,
      limit: t,
      fuzzy: !0,
      type: _.GUILD_VOCAL_CHANNELS_KEY,
      boosters: s
    })
  }
  queryGuilds(e, t) {
    if (!this._include(m.AutocompleterResultTypes.GUILD)) return [];
    let l = I(m.AutocompleterResultTypes.GUILD, this.options),
      {
        blacklist: s
      } = this.options;
    return y.default.queryGuilds({
      query: e,
      limit: t,
      fuzzy: !0,
      filter: null != s ? e => !s.has("guild:".concat(e.id)) : void 0,
      boosters: l
    })
  }
  queryUsers(e, t, l) {
    let {
      userSearchContext: s
    } = this;
    if (null == s || !this._include(m.AutocompleterResultTypes.USER)) return;
    let {
      userFilters: u
    } = this.options;
    void 0 !== t && E.default.requestMembers(t, e, 100), s.setLimit(l), s.setQuery(e, u, this._userBlacklist, I(m.AutocompleterResultTypes.USER, this.options))
  }
  queryGroupDMs(e, t) {
    if (!this._include(m.AutocompleterResultTypes.GROUP_DM)) return [];
    let {
      blacklist: l
    } = this.options, s = I(m.AutocompleterResultTypes.GROUP_DM, this.options);
    return y.default.queryGroupDMs({
      query: e,
      limit: t,
      fuzzy: !0,
      filter: null != l ? e => !l.has("channel:".concat(e.id)) : void 0,
      boosters: s
    })
  }
  queryApplications(e, t) {
    return this._include(m.AutocompleterResultTypes.APPLICATION) ? y.default.queryApplications({
      query: e,
      limit: t,
      fuzzy: !0
    }) : []
  }
  queryLink(e, t) {
    let l;
    if (!this._include(m.AutocompleterResultTypes.LINK)) return [];
    let s = r.sanitizeUrl(e);
    try {
      l = new URL(s)
    } catch (e) {
      return []
    }
    let {
      pathname: u,
      hostname: i = "",
      host: n
    } = l, a = C.default.isDiscordHostname(i) || window.location.host === n;
    return null !== u && a && C.default.isAppRoute(u) ? [{
      type: m.AutocompleterResultTypes.LINK,
      record: d.default.fromPath(u),
      score: 1
    }] : []
  }
  constructor(e, t, l = 100, s = U) {
    this.query = "", this.options = U, this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._userBlacklist = null, this.parseUserResults = e => {
      let {
        results: t
      } = e;
      if (this._include(m.AutocompleterResultTypes.USER)) {
        for (let {
            id: e,
            score: l,
            comparator: s
          }
          of(this._userResults = [], t)) {
          let t = R.default.getUser(e);
          null != t && this._userResults.push({
            type: m.AutocompleterResultTypes.USER,
            record: t,
            score: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
              return 1e3 * e * (null != t ? t : 1)
            }(l),
            comparator: null != s ? s : void 0
          })
        }
        this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults()
      }
    }, this.updateAllResults = () => {
      clearTimeout(this._asyncTimeout), this.results = i([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(T.default).value(), this.onResultsChange(this.results, this.query)
    }, this.onResultsChange = e, this.setOptions(s, !0), this._limit = l, this.createSearchContext(), this.setResultTypes(t)
  }
}