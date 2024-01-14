"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var u = n("872717"),
  l = n("913144"),
  r = n("987317"),
  d = n("393414"),
  i = n("271938"),
  a = n("299039"),
  c = n("271560"),
  o = n("398604"),
  E = n("189443"),
  s = n("745049"),
  _ = n("49111"),
  y = {
    startEvent: (e, t) => u.default.patch({
      url: _.Endpoints.GUILD_EVENT(t, e),
      body: {
        status: s.GuildScheduledEventStatus.ACTIVE
      }
    }),
    endEvent: (e, t) => u.default.patch({
      url: _.Endpoints.GUILD_EVENT(t, e),
      body: {
        status: s.GuildScheduledEventStatus.COMPLETED
      }
    }),
    joinVoiceEvent(e, t) {
      r.default.selectVoiceChannel(t), (0, d.transitionTo)(_.Routes.CHANNEL(e, t))
    },
    saveEvent(e, t, n, l) {
      let r = s.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
        d = s.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
        i = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
        a = {
          name: t.name,
          description: t.description,
          image: i,
          privacy_level: t.privacyLevel,
          scheduled_start_time: t.scheduledStartTime,
          scheduled_end_time: t.scheduledEndTime,
          entity_type: t.entityType,
          channel_id: r,
          entity_metadata: d,
          broadcast_to_directory_channels: l.broadcastToDirectoryChannels,
          recurrence_rule: (0, E.recurrenceRuleToServer)(t.recurrenceRule)
        };
      return u.default.patch({
        url: _.Endpoints.GUILD_EVENT(n, e),
        body: a
      })
    },
    createGuildEvent(e, t, n) {
      let l = {
        name: e.name,
        description: e.description,
        image: e.image,
        privacy_level: e.privacyLevel,
        scheduled_start_time: e.scheduledStartTime,
        scheduled_end_time: e.scheduledEndTime,
        entity_type: e.entityType,
        channel_id: e.channelId,
        entity_metadata: e.entityMetadata,
        broadcast_to_directory_channels: n.broadcastToDirectoryChannels,
        recurrence_rule: (0, E.recurrenceRuleToServer)(e.recurrenceRule)
      };
      return u.default.post({
        url: _.Endpoints.GUILD_EVENTS_FOR_GUILD(t),
        body: l
      })
    },
    async fetchGuildEvent(e, t) {
      let {
        body: n
      } = await (0, c.httpGetWithCountryCodeQuery)(_.Endpoints.GUILD_EVENT(e, t));
      return l.default.dispatch({
        type: "FETCH_GUILD_EVENT",
        guildScheduledEvent: n
      }), n
    },
    async fetchGuildEventsForGuild(e) {
      let t = {
          url: _.Endpoints.GUILD_EVENTS_FOR_GUILD(e)
        },
        {
          body: n
        } = await (0, c.httpGetWithCountryCodeQuery)(t);
      return l.default.dispatch({
        type: "FETCH_GUILD_EVENTS_FOR_GUILD",
        guildId: e,
        guildScheduledEvents: n
      }), n
    },
    async fetchGuildEventUserCounts(e, t, n) {
      let r = {
          url: _.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
          query: {
            guild_scheduled_event_exception_ids: n
          }
        },
        {
          body: {
            guild_scheduled_event_count: d,
            guild_scheduled_event_exception_counts: i
          }
        } = await u.default.get(r),
        a = {
          eventCount: d,
          recurrenceCounts: i
        };
      return l.default.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
        guildId: e,
        eventId: t,
        counts: a
      }), a
    },
    cancelGuildEvent: (e, t) => u.default.patch({
      url: _.Endpoints.GUILD_EVENT(t, e),
      body: {
        status: s.GuildScheduledEventStatus.CANCELED
      }
    }),
    deleteGuildEvent: (e, t) => u.default.delete({
      url: _.Endpoints.GUILD_EVENT(t, e)
    }),
    async getGuildEventsForCurrentUser(e) {
      let {
        body: t
      } = await u.default.get({
        url: _.Endpoints.USER_GUILD_EVENTS,
        query: {
          guild_ids: [e]
        }
      });
      l.default.dispatch({
        type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
        guildScheduledEventUsers: t,
        guildId: e
      })
    },
    async createRsvpForGuildEvent(e, t, n, r) {
      let d = i.default.getId();
      try {
        return l.default.dispatch({
          type: "GUILD_SCHEDULED_EVENT_USER_ADD",
          userId: d,
          guildId: n,
          guildEventId: e,
          guildEventExceptionId: t,
          response: r
        }), await u.default.put({
          url: _.Endpoints.USER_GUILD_EVENT(n, e, t),
          body: {
            response: r
          }
        })
      } catch (u) {
        throw l.default.dispatch({
          type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
          userId: d,
          guildId: n,
          guildEventId: e,
          guildEventExceptionId: t,
          response: r
        }), u
      }
    },
    async deleteRsvpForGuildEvent(e, t, n) {
      let r = i.default.getId(),
        d = o.default.getRsvp(e, t, r);
      if (null != d) try {
        return l.default.dispatch({
          type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
          userId: r,
          guildId: n,
          guildEventId: e,
          guildEventExceptionId: t,
          response: d.response
        }), await u.default.delete({
          url: _.Endpoints.USER_GUILD_EVENT(n, e, t)
        })
      } catch (u) {
        throw l.default.dispatch({
          type: "GUILD_SCHEDULED_EVENT_USER_ADD",
          userId: r,
          guildId: n,
          guildEventId: e,
          guildEventExceptionId: t,
          response: d.response
        }), u
      }
    },
    async fetchUsersForGuildEvent(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.MAX_RSVP_USER_DISPLAY_COUNT;
      if (null == e || null == n) return [];
      let d = await u.default.get({
        url: _.Endpoints.GUILD_EVENT_USERS(n, e, t),
        query: {
          limit: r,
          with_member: !0,
          upgrade_response_type: !0
        }
      });
      return l.default.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
        guildEventId: e,
        guildScheduledEventUsers: d.body,
        guildId: n,
        guildEventExceptionId: t
      }), d.body.users
    },
    createGuildEventException(e, t, n) {
      let {
        original_scheduled_start_time: l,
        scheduled_start_time: r,
        scheduled_end_time: d,
        is_canceled: i
      } = e;
      return u.default.post({
        url: _.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
        body: {
          original_scheduled_start_time: l,
          scheduled_start_time: r,
          scheduled_end_time: d,
          is_canceled: i
        }
      })
    },
    updateGuildEventException(e, t, n, l) {
      let {
        scheduled_start_time: r,
        scheduled_end_time: d,
        is_canceled: i
      } = e;
      return u.default.patch({
        url: _.Endpoints.GUILD_EVENT_EXCEPTION(t, n, l),
        body: {
          scheduled_start_time: r,
          scheduled_end_time: d,
          is_canceled: i
        }
      })
    },
    deleteGuildEventException: (e, t, n) => u.default.delete({
      url: _.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
    }),
    deleteRecurrence(e, t, n, u) {
      if (null != u) this.updateGuildEventException({
        scheduled_start_time: u.scheduled_start_time,
        scheduled_end_time: u.scheduled_end_time,
        is_canceled: !0
      }, e, t, n);
      else {
        let u = a.default.extractTimestamp(n);
        this.createGuildEventException({
          original_scheduled_start_time: new Date(u).toISOString(),
          is_canceled: !0
        }, e, t)
      }
    }
  }