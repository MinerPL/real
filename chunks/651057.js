"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("872717"),
  r = n("913144"),
  l = n("568734"),
  o = n("299285"),
  u = n("49111"),
  a = {
    async createApplication(e) {
      let {
        name: t,
        guildId: n,
        type: l,
        teamId: o
      } = e, a = await i.default.post({
        url: u.Endpoints.APPLICATIONS,
        body: {
          name: t,
          type: l,
          guild_id: n,
          team_id: o
        }
      }), s = a.body;
      return null != n && null != l && r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: s
      }), s
    },
    async getApplicationsForGuild(e) {
      let {
        includeTeam: t,
        ...n
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = await i.default.get({
        url: u.Endpoints.GUILD_APPLICATIONS(e),
        query: {
          ...n,
          include_team: t
        }
      }), o = l.body;
      return r.default.dispatch({
        type: "APPLICATIONS_FETCH_SUCCESS",
        applications: o
      }), o
    },
    async transferApplication(e) {
      let {
        applicationId: t,
        teamId: n
      } = e, l = await i.default.post({
        url: u.Endpoints.APPLICATION_OWNER_TRANSFER(t),
        body: {
          team_id: n
        }
      }), o = l.body;
      return r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: o
      }), o
    },
    async fetchApplications(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
      if (!t && (n = e.filter(e => {
          var t, n;
          let i = o.default.getApplication(e),
            r = (0, l.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, u.ApplicationFlags.EMBEDDED),
            a = r && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
          return !(null != i && !a) && !o.default.isFetchingApplication(e) && !o.default.didFetchingApplicationFail(e) && e.length > 0
        })), n.length > 0) {
        let e;
        r.default.dispatch({
          type: "APPLICATIONS_FETCH",
          applicationIds: n
        });
        try {
          e = await i.default.get({
            url: u.Endpoints.APPLICATIONS_PUBLIC,
            query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
            oldFormErrors: !0
          })
        } catch (e) {
          throw r.default.dispatch({
            type: "APPLICATIONS_FETCH_FAIL",
            applicationIds: n
          }), e
        }
        r.default.dispatch({
          type: "APPLICATIONS_FETCH_SUCCESS",
          applications: e.body
        })
      }
    },
    fetchApplication(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return r.default.dispatch({
        type: "APPLICATION_FETCH",
        applicationId: e
      }), i.default.get({
        url: u.Endpoints.APPLICATION_PUBLIC(e),
        query: {
          with_guild: t
        },
        oldFormErrors: !0
      }).then(e => (r.default.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: e.body
      }), e.body)).catch(t => (r.default.dispatch({
        type: "APPLICATION_FETCH_FAIL",
        applicationId: e
      }), Promise.reject(t)))
    }
  }