"use strict";
l.r(t), l.d(t, {
  waitForGuild: function() {
    return v
  },
  default: function() {
    return w
  }
}), l("70102"), l("860677");
var d = l("759843"),
  a = l("316693"),
  r = l("872717"),
  n = l("913144"),
  o = l("333805"),
  i = l("81732"),
  u = l("248967"),
  s = l("21121"),
  E = l("693051"),
  _ = l("153498"),
  c = l("934306"),
  p = l("258158"),
  L = l("393414"),
  f = l("239380"),
  I = l("271938"),
  T = l("42203"),
  D = l("383173"),
  G = l("923959"),
  U = l("305961"),
  S = l("18494"),
  y = l("162771"),
  h = l("697218"),
  A = l("599110"),
  R = l("991170"),
  C = l("719923"),
  m = l("840707"),
  g = l("404118"),
  O = l("49111"),
  N = l("782340");
let F = e => {
    g.default.show({
      title: N.default.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
      body: N.default.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({
        quantity: e
      })
    })
  },
  M = e => {
    n.default.dispatch({
      type: "GUILD_DELETE",
      guild: {
        id: e
      }
    })
  },
  b = () => {
    g.default.show({
      title: N.default.Messages.SERVER_IS_CURRENTLY_FULL,
      body: N.default.Messages.PLEASE_TRY_AGAIN_LATER
    })
  };
async function P(e) {
  var t, d, a, o, i;
  let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      source: s,
      loadId: E,
      lurkLocation: _
    } = u,
    c = null !== (t = u.lurker) && void 0 !== t && t,
    f = h.default.getCurrentUser();
  if (null !== (d = null == f ? void 0 : f.hasFlag(O.UserFlags.QUARANTINED)) && void 0 !== d && d) return (0, p.default)(), new Promise((e, t) => t(Error()));
  n.default.wait(() => n.default.dispatch({
    type: "GUILD_JOIN",
    guildId: e,
    lurker: c,
    source: s,
    loadId: E
  }));
  try {
    let t = y.default.getGuildId(),
      d = e === t && null != U.default.getGuild(e),
      a = d ? S.default.getChannelId(e) : null,
      o = await r.default.put({
        url: O.Endpoints.GUILD_JOIN(e),
        query: {
          lurker: c,
          session_id: c ? I.default.getSessionId() : null,
          recommendation_load_id: E,
          location: c && null != _ ? _ : null
        },
        context: {
          source: s
        },
        oldFormErrors: !0,
        body: {}
      });
    if (null != o.body.join_request && n.default.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
        guildId: e,
        request: o.body.join_request
      }), null == U.default.getGuild(e) && o.body.show_verification_form) return (0, L.transitionTo)(O.Routes.GUILD_MEMBER_VERIFICATION(e)), o;
    if (null != o.body.welcome_screen && n.default.dispatch({
        type: "WELCOME_SCREEN_UPDATE",
        guildId: o.body.id,
        welcomeScreen: o.body.welcome_screen
      }), null != o.body.approximate_presence_count && n.default.dispatch({
        type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
        guildId: o.body.id,
        count: o.body.approximate_presence_count
      }), !c) {
      let {
        default: t
      } = await l.el("937692").then(l.bind(l, "937692"));
      await t({
        guildId: e,
        returnChannelId: a
      })
    }
    return o
  } catch (t) {
    if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === O.AbortCodes.TOO_MANY_USER_GUILDS) {
      let e = h.default.getCurrentUser(),
        t = C.default.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff());
      t ? F(O.MAX_USER_GUILDS_PREMIUM) : F(O.MAX_USER_GUILDS)
    }
    throw (null === (o = t.body) || void 0 === o ? void 0 : o.code) === O.AbortCodes.GUILD_AT_CAPACITY && b(), c && (null === (i = t.body) || void 0 === i ? void 0 : i.code) === O.AbortCodes.UNKNOWN_GUILD && M(e), t
  }
}

function v(e) {
  return new Promise(t => U.default.addConditionalChangeListener(() => {
    let l = U.default.getGuild(e);
    return null == l || (t(l), !1)
  }))
}
var w = {
  joinGuild: P,
  waitForGuild: v,
  async transitionToGuildSync(e, t, l, d) {
    var a, r;
    let n = await v(e);
    let o = (a = n.id, null != (r = l) ? r : !(0, s.isInMainTabsExperiment)() || (0, c.isOnNewPanels)() ? (0, f.getChannelIdForGuildTransition)(a) : void 0),
      i = t;
    (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (i = {
      ...t,
      welcomeModalChannelId: o
    }), (0, L.transitionTo)(O.Routes.CHANNEL(e, o), i, void 0, d), await new Promise(setImmediate)
  },
  deleteGuild: M,
  selectGuild(e) {
    (0, u.stopLurking)(e)
  },
  createGuild(e) {
    n.default.dispatch({
      type: "GUILD_CREATE",
      guild: e
    })
  },
  setServerMute: (e, t, l) => r.default.patch({
    url: O.Endpoints.GUILD_MEMBER(e, t),
    body: {
      mute: l
    },
    oldFormErrors: !0
  }),
  setServerDeaf: (e, t, l) => r.default.patch({
    url: O.Endpoints.GUILD_MEMBER(e, t),
    body: {
      deaf: l
    },
    oldFormErrors: !0
  }),
  setChannel(e, t, l) {
    r.default.patch({
      url: O.Endpoints.GUILD_MEMBER(e, t),
      body: {
        channel_id: l
      },
      oldFormErrors: !0
    })
  },
  setMemberFlags(e, t, l) {
    r.default.patch({
      url: O.Endpoints.GUILD_MEMBER(e, t),
      body: {
        flags: l
      },
      oldFormErrors: !0
    })
  },
  kickUser: (e, t, l) => r.default.delete({
    url: O.Endpoints.GUILD_MEMBER(e, t),
    reason: l,
    oldFormErrors: !0
  }),
  setCommunicationDisabledUntil(e) {
    let {
      guildId: t,
      userId: l,
      communicationDisabledUntilTimestamp: a,
      duration: r,
      reason: n,
      location: o
    } = e;
    return m.default.patch({
      url: O.Endpoints.GUILD_MEMBER(t, l),
      reason: n,
      body: {
        communication_disabled_until: a
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: d.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
        properties: {
          guild_id: t,
          target_user_id: l,
          duration: null != r ? r : null,
          reason: null != n ? n : null,
          communication_disabled_until: a,
          location: null != o ? o : null
        }
      }
    })
  },
  banUser: (e, t, l, d) => r.default.put({
    url: O.Endpoints.GUILD_BAN(e, t),
    reason: d,
    body: {
      delete_message_seconds: l
    },
    oldFormErrors: !0
  }),
  unbanUser: (e, t) => r.default.delete({
    url: O.Endpoints.GUILD_BAN(e, t),
    oldFormErrors: !0
  }),
  banMultipleUsers: (e, t, l, d) => r.default.post({
    url: O.Endpoints.BULK_GUILD_BAN(e),
    body: {
      user_ids: t,
      delete_message_seconds: l,
      reason: d
    },
    oldFormErrors: !0
  }),
  async createRole(e, t, l) {
    let d = {
      name: null != t && "" !== t ? t : N.default.Messages.NEW_ROLE,
      color: null != l ? l : 0,
      permissions: R.default.NONE
    };
    try {
      let t = await r.default.post({
          url: O.Endpoints.GUILD_ROLES(e),
          oldFormErrors: !0,
          body: d
        }),
        l = t.body;
      return l.permissions = a.default.deserialize(l.permissions), n.default.dispatch({
        type: "GUILD_SETTINGS_ROLE_SELECT",
        roleId: t.body.id,
        role: l
      }), i.default.checkGuildTemplateDirty(e), l
    } catch (e) {
      throw new o.default(e)
    }
  },
  async updateRole(e, t, l) {
    let {
      icon: d,
      unicodeEmoji: a,
      ...n
    } = l, o = null === d || (null == d ? void 0 : d.startsWith("data:")) ? d : void 0, u = await r.default.patch({
      url: O.Endpoints.GUILD_ROLE(e, t),
      body: {
        ...n,
        icon: o,
        unicode_emoji: a
      },
      oldFormErrors: !0
    });
    return i.default.checkGuildTemplateDirty(e), u
  },
  updateRolePermissions: (e, t, l) => r.default.patch({
    url: O.Endpoints.GUILD_ROLE(e, t),
    body: {
      permissions: l
    },
    oldFormErrors: !0
  }),
  deleteRole(e, t) {
    r.default.delete({
      url: O.Endpoints.GUILD_ROLE(e, t),
      oldFormErrors: !0
    }).then(() => {
      i.default.checkGuildTemplateDirty(e)
    })
  },
  async batchChannelUpdate(e, t) {
    let l = await r.default.patch({
      url: O.Endpoints.GUILD_CHANNELS(e),
      body: t,
      oldFormErrors: !0
    });
    return i.default.checkGuildTemplateDirty(e), l
  },
  async batchRoleUpdate(e, t) {
    let l = await r.default.patch({
      url: O.Endpoints.GUILD_ROLES(e),
      body: t,
      oldFormErrors: !0
    });
    return i.default.checkGuildTemplateDirty(e), l
  },
  requestMembers(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      d = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return n.default.dispatch({
      type: "GUILD_MEMBERS_REQUEST",
      guildIds: Array.isArray(e) ? e : [e],
      query: t,
      limit: l,
      presences: d
    })
  },
  searchRecentMembers(e, t) {
    let {
      query: l,
      continuationToken: d
    } = null != t ? t : {};
    return n.default.dispatch({
      type: "GUILD_SEARCH_RECENT_MEMBERS",
      guildId: e,
      query: l,
      continuationToken: d
    })
  },
  requestMembersById(e, t) {
    let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return n.default.dispatch({
      type: "GUILD_MEMBERS_REQUEST",
      guildIds: Array.isArray(e) ? e : [e],
      userIds: Array.isArray(t) ? t : [t],
      presences: l
    })
  },
  move(e, t, l, d) {
    n.default.dispatch({
      type: "GUILD_MOVE",
      fromIndex: e,
      toIndex: t,
      fromFolderIndex: l,
      toFolderIndex: d
    })
  },
  moveById(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    n.default.dispatch({
      type: "GUILD_MOVE_BY_ID",
      sourceId: e,
      targetId: t,
      moveToBelow: l,
      combine: d
    })
  },
  createGuildFolderLocal(e, t) {
    A.default.track(O.AnalyticEvents.GUILD_FOLDER_CREATED), n.default.dispatch({
      type: "GUILD_FOLDER_CREATE_LOCAL",
      sourceIds: e,
      name: t
    })
  },
  editGuildFolderLocal(e, t, l) {
    n.default.dispatch({
      type: "GUILD_FOLDER_EDIT_LOCAL",
      targetId: e,
      sourceIds: t,
      name: l
    })
  },
  deleteGuildFolderLocal(e) {
    n.default.dispatch({
      type: "GUILD_FOLDER_DELETE_LOCAL",
      targetId: e
    })
  },
  toggleGuildFolderExpand(e) {
    let t = D.default.isFolderExpanded(e);
    A.default.track(O.AnalyticEvents.GUILD_FOLDER_CLICKED, {
      source: "sidebar",
      action: t ? "collapsed" : "expanded"
    }), n.default.dispatch({
      type: "TOGGLE_GUILD_FOLDER_EXPAND",
      folderId: e
    })
  },
  setGuildFolderExpanded(e, t) {
    n.default.dispatch({
      type: "SET_GUILD_FOLDER_EXPANDED",
      folderId: e,
      expanded: t
    })
  },
  collapseAllFolders() {
    n.default.dispatch({
      type: "GUILD_FOLDER_COLLAPSE"
    })
  },
  nsfwAgree(e) {
    n.default.dispatch({
      type: "GUILD_NSFW_AGREE",
      guildId: e
    })
  },
  nsfwReturnToSafety(e) {
    if ((0, s.isInMainTabsExperiment)() && !(0, c.isOnNewPanels)()) {
      let e = (0, E.getRootNavigationRef)();
      if ((null == e ? void 0 : e.isReady()) !== !0) return;
      let t = (0, _.coerceModalRoute)(e.getCurrentRoute());
      for (null != t && e.goBack();;) {
        let t = (0, _.coerceChannelRoute)(e.getCurrentRoute());
        if (null == t) break;
        let l = T.default.getChannel(t.params.channelId);
        if (null == l || !l.isNSFW()) break;
        e.goBack()
      }
      return
    }
    if (null == e) {
      (0, L.transitionTo)(O.Routes.FRIENDS);
      return
    }
    let t = G.default.getDefaultChannel(e);
    null == t || t.isNSFW() ? (0, L.transitionTo)(O.Routes.FRIENDS) : (0, L.transitionTo)(O.Routes.CHANNEL(e, t.id))
  },
  escapeToDefaultChannel(e) {
    let t = G.default.getDefaultChannel(e);
    null != t ? (0, L.transitionTo)(O.Routes.CHANNEL(e, t.id)) : (0, L.transitionTo)(O.Routes.FRIENDS)
  },
  async fetchApplications(e, t) {
    let l = {
      url: O.Endpoints.GUILD_APPLICATIONS(e),
      oldFormErrors: !0
    };
    null != t && (l.query = {
      channel_id: t
    });
    let d = await r.default.get(l),
      a = d.body;
    n.default.dispatch({
      type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
      guildId: e,
      applications: a
    })
  },
  async fetchGuildBansBatch(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
      l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      d = {
        limit: t
      };
    null != l && (d.after = l), await r.default.get({
      url: O.Endpoints.GUILD_BANS(e),
      oldFormErrors: !0,
      query: d
    }).then(t => {
      n.default.dispatch({
        type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
        bans: t.body,
        guildId: e
      })
    })
  },
  async searchGuildBans(e, t, l) {
    let d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
      a = {
        limit: d
      };
    null != l && l.length > 0 && (a.user_ids = l), null != t && t.trim().length > 0 && (a.query = t), await r.default.get({
      url: O.Endpoints.GUILD_BANS_SEARCH(e),
      oldFormErrors: !0,
      query: a
    }).then(t => {
      n.default.dispatch({
        type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
        bans: t.body,
        guildId: e
      })
    })
  },
  async fetchGuildBans(e) {
    await r.default.get({
      url: O.Endpoints.GUILD_BANS(e),
      oldFormErrors: !0
    }).then(e => {
      n.default.dispatch({
        type: "GUILD_SETTINGS_LOADED_BANS",
        bans: e.body
      })
    })
  },
  fetchGuildRoleConnectionsEligibility: (e, t) => r.default.get({
    url: O.Endpoints.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
    oldFormErrors: !0
  }).then(e => {
    let {
      body: l
    } = e;
    return n.default.dispatch({
      type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
      roleId: t,
      roleConnectionEligibility: l
    }), l
  }),
  async assignGuildRoleConnection(e, t) {
    await r.default.post({
      url: O.Endpoints.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
      oldFormErrors: !0
    })
  },
  async unassignGuildRoleConnection(e, t) {
    await r.default.post({
      url: O.Endpoints.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
      oldFormErrors: !0
    })
  },
  async getGuildRoleConnectionsConfigurations(e) {
    let t = await r.default.get({
      url: O.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
      oldFormErrors: !0
    });
    return t.body
  }
}