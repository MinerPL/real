"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("702976");
var i = n("843117"),
  l = n("872717"),
  a = n("913144"),
  s = n("404118"),
  r = n("295426"),
  u = n("716241"),
  d = n("507217"),
  o = n("233069"),
  c = n("271938"),
  _ = n("42203"),
  f = n("957255"),
  h = n("449008"),
  E = n("821343"),
  g = n("755624"),
  m = n("487269"),
  A = n("25932"),
  T = n("49111"),
  p = n("724210"),
  S = n("782340");

function M(e, t) {
  return l.default.patch({
    url: T.Endpoints.CHANNEL(e.id),
    body: t
  }).then(t => (a.default.dispatch({
    type: "THREAD_UPDATE",
    channel: (0, o.createChannelRecordFromServer)(t.body)
  }), e.isForumPost() && null != e.parent_id && a.default.dispatch({
    type: "RESORT_THREADS",
    channelId: e.parent_id
  }), t))
}

function N(e, t) {
  a.default.dispatch({
    type: "THREAD_MEMBER_LOCAL_UPDATE",
    id: e.id,
    guildId: e.getGuildId(),
    userId: c.default.getId(),
    isJoining: t
  })
}
var v = {
  archiveThread(e, t) {
    let n = {
      archived: !0
    };
    return t && (n.locked = !0), M(e, n)
  },
  async lockThread(e) {
    let t = e.isArchivedThread();
    return t && await this.unarchiveThread(e, !1), M(e, {
      locked: !0,
      archived: t
    })
  },
  async unlockThread(e) {
    let t = e.isArchivedThread();
    return t && await this.unarchiveThread(e, !0), M(e, {
      locked: !1,
      archived: t
    })
  },
  async unarchiveThread(e, t) {
    let n = {
        archived: !1
      },
      i = e.isForumPost();
    t && (n.locked = !1);
    try {
      return await M(e, n)
    } catch (e) {
      var l, a;
      throw (null === (l = e.body) || void 0 === l ? void 0 : l.code) === T.AbortCodes.TOO_MANY_THREADS ? s.default.show({
        title: i ? S.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : S.default.Messages.CANNOT_UNARCHIVE_THREAD,
        body: i ? S.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : S.default.Messages.TOO_MANY_THREADS_MESSAGE
      }) : (null === (a = e.body) || void 0 === a ? void 0 : a.code) === T.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? s.default.show({
        title: S.default.Messages.CANNOT_UNARCHIVE_THREAD,
        body: S.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
      }) : 429 === e.status ? s.default.show({
        title: i ? S.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : S.default.Messages.CANNOT_UNARCHIVE_THREAD,
        body: S.default.Messages.RATE_LIMITED
      }) : s.default.show({
        title: S.default.Messages.ERROR,
        body: S.default.Messages.ERROR_OCCURRED_TRY_AGAIN
      }), e
    }
  },
  async unarchiveThreadIfNecessary(e) {
    var t;
    let n = _.default.getChannel(e),
      i = f.default.can(T.Permissions.MANAGE_THREADS, n);
    null != n && n.isArchivedThread() && (i || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && await this.unarchiveThread(n, !1)
  },
  setInvitable: (e, t) => M(e, {
    invitable: t
  }),
  async joinThread(e, t) {
    e.isForumPost() && N(e, !0);
    try {
      return await l.default.post({
        url: T.Endpoints.THREAD_MEMBER(e.id),
        query: {
          location: t
        }
      })
    } catch (t) {
      var n;
      if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === T.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
        let t = e.isForumPost();
        s.default.show({
          title: t ? S.default.Messages.CANNOT_JOIN_FORUM_POST : S.default.Messages.CANNOT_JOIN_THREAD,
          body: t ? S.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : S.default.Messages.TOO_MANY_MEMBERS_MESSAGE
        })
      } else s.default.show({
        title: S.default.Messages.ERROR,
        body: S.default.Messages.ERROR_OCCURRED_TRY_AGAIN
      });
      e.isForumPost() && N(e, !1)
    }
  },
  async addMember(e, t, n) {
    try {
      return await l.default.post({
        url: T.Endpoints.THREAD_MEMBER(e.id, t),
        query: {
          location: n
        }
      })
    } catch (t) {
      var i;
      if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === T.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
        let t = e.isForumPost();
        s.default.show({
          title: t ? S.default.Messages.CANNOT_ADD_USER_TO_FORUM_POST : S.default.Messages.CANNOT_ADD_USER_TO_THREAD,
          body: t ? S.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : S.default.Messages.TOO_MANY_MEMBERS_MESSAGE
        })
      } else s.default.show({
        title: S.default.Messages.ERROR,
        body: S.default.Messages.ERROR_OCCURRED_TRY_AGAIN
      })
    }
  },
  leaveThread: (e, t) => (e.isForumPost() && N(e, !1), l.default.delete({
    url: T.Endpoints.THREAD_MEMBER(e.id),
    query: {
      location: t
    }
  })),
  removeMember: (e, t, n) => l.default.delete({
    url: T.Endpoints.THREAD_MEMBER(e.id, t),
    query: {
      location: n
    }
  }),
  setAutoArchiveDuration: (e, t) => l.default.patch({
    url: T.Endpoints.CHANNEL(e.id),
    body: {
      auto_archive_duration: t
    }
  }),
  pin(e) {
    let t = e.flags | p.ChannelFlags.PINNED;
    this.updateFlags(e, t, e.isArchivedThread())
  },
  unpin(e) {
    let t = e.flags & ~p.ChannelFlags.PINNED;
    this.updateFlags(e, t)
  },
  async updateFlags(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a.default.dispatch({
      type: "THREAD_UPDATE",
      channel: e.merge({
        flags: t
      })
    });
    let i = {
      flags: t
    };
    n && (i.archived = !1);
    try {
      await l.default.patch({
        url: T.Endpoints.CHANNEL(e.id),
        body: i
      })
    } catch {
      a.default.dispatch({
        type: "THREAD_UPDATE",
        channel: e
      })
    }
  },
  async replacePin(e, t) {
    let n = e.merge({
        flags: e.flags & ~p.ChannelFlags.PINNED
      }),
      i = t.merge({
        flags: t.flags | p.ChannelFlags.PINNED
      });
    a.default.dispatch({
      type: "THREAD_UPDATE",
      channel: n
    }), a.default.dispatch({
      type: "THREAD_UPDATE",
      channel: i
    }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
    try {
      await l.default.patch({
        url: T.Endpoints.CHANNEL(e.id),
        body: {
          flags: e.flags & ~p.ChannelFlags.PINNED
        }
      })
    } catch {
      a.default.dispatch({
        type: "THREAD_UPDATE",
        channel: e
      }), a.default.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      });
      return
    }
    try {
      await l.default.patch({
        url: T.Endpoints.CHANNEL(t.id),
        body: {
          flags: t.flags | p.ChannelFlags.PINNED
        }
      })
    } catch {
      a.default.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      })
    }
  },
  openThreadCreationForMobile(e, t, n) {
    (0, u.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
      location: n,
      channel_id: e.id,
      guild_id: e.guild_id
    }), r.default.changeThreadSettings(e.id, {
      parentMessageId: t,
      isPrivate: !1,
      location: n
    }), null == t && (0, d.setActiveCommand)({
      channelId: e.id,
      command: null,
      section: null
    })
  },
  async setNotificationSettings(e, t) {
    return (0, m.trackThreadNotificationSettingsUpdated)(e, t), !g.default.hasJoined(e.id) && await this.joinThread(e, "Change Notification Settings"), l.default.patch({
      url: T.Endpoints.THREAD_MEMBER_SETTINGS(e.id),
      body: t
    })
  },
  loadArchivedThreads(e, t, n, s, r) {
    !E.default.isLoading(t, n, s) && (a.default.dispatch({
      type: "LOAD_ARCHIVED_THREADS",
      channelId: t,
      sortOrder: n,
      tagFilter: s
    }), l.default.get({
      url: T.Endpoints.THREAD_SEARCH(t),
      query: {
        archived: !0,
        sort_by: "last_message_time",
        sort_order: "desc",
        limit: E.PAGE_SIZE,
        tag: s.size > 0 ? Array.from(s).join(",") : void 0,
        tag_setting: i.ThreadSearchTagSetting.MATCH_SOME,
        offset: r
      },
      retries: 2
    }).then(i => {
      let {
        body: {
          threads: l,
          members: u,
          has_more: d,
          first_messages: o,
          most_recent_messages: c
        }
      } = i;
      a.default.dispatch({
        type: "LOAD_ARCHIVED_THREADS_SUCCESS",
        guildId: e,
        channelId: t,
        offset: r,
        sortOrder: n,
        tagFilter: s,
        threads: l,
        firstMessages: o,
        mostRecentMessages: c,
        members: (null != u ? u : []).map(e => (0, A.default)(e)),
        owners: l.map(e => e.owner).filter(h.isNotNullish),
        hasMore: d
      })
    }, () => {
      a.default.dispatch({
        type: "LOAD_ARCHIVED_THREADS_FAIL",
        channelId: t,
        sortOrder: n,
        tagFilter: s
      })
    }))
  },
  async searchThreads(e, t, n, s) {
    let r = null != s && s.size > 0 ? Array.from(s).join(",") : void 0,
      {
        body: {
          threads: u,
          members: d,
          first_messages: o,
          most_recent_messages: c
        }
      } = await l.default.get({
        url: T.Endpoints.THREAD_SEARCH(t),
        query: {
          name: n,
          tag: r,
          tag_setting: i.ThreadSearchTagSetting.MATCH_SOME
        }
      });
    return a.default.dispatch({
      type: "LOAD_THREADS_SUCCESS",
      threads: u,
      members: d,
      guildId: e,
      firstMessages: o,
      mostRecentMessages: c
    }), u.map(e => e.id)
  }
}