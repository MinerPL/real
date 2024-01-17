"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("913144"),
  o = n("592407"),
  i = n("482391"),
  u = n("611183"),
  a = {
    init() {
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_INIT"
      })
    },
    setSection(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_SET_SECTION",
        section: e,
        sectionId: t
      })
    },
    startEditingCommandPermissions(e) {
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
        commandId: e
      })
    },
    stopEditingCommandPermissions(e) {
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
        commandId: e
      })
    },
    startEditingIntegration(e) {
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
        integrationId: e
      })
    },
    stopEditingIntegration() {
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
      })
    },
    updateIntegration(e) {
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
        settings: e
      })
    },
    startEditingWebhook(e) {
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
        webhookId: e
      })
    },
    stopEditingWebhook() {
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
      })
    },
    updateWebhook(e) {
      r.default.dispatch({
        type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
        settings: e
      })
    },
    async saveApplicationPermissions(e, t, n) {
      try {
        r.default.dispatch({
          type: "INTEGRATION_SETTINGS_SUBMITTING"
        }), await i.updateApplicationCommandPermissions({
          applicationId: e,
          commandId: e,
          defaultEveryoneValue: !0,
          defaultEverywhereValue: !0,
          guildId: t,
          permissions: n
        }), r.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
        })
      } catch (e) {
        r.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
          errors: e.body
        })
      }
    },
    async saveIntegration(e, t) {
      try {
        r.default.dispatch({
          type: "INTEGRATION_SETTINGS_SUBMITTING"
        }), await o.default.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), r.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
        })
      } catch (e) {
        r.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
          errors: e.body
        })
      }
    },
    async saveWebhook(e, t) {
      try {
        r.default.dispatch({
          type: "INTEGRATION_SETTINGS_SUBMITTING"
        }), await u.default.update(e, t.id, t), r.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
        })
      } catch (e) {
        r.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
          errors: e.body
        })
      }
    }
  }