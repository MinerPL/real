"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("913144"),
  a = n("592407"),
  l = n("482391"),
  r = n("611183"),
  s = {
    init() {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_INIT"
      })
    },
    setSection(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SET_SECTION",
        section: e,
        sectionId: t
      })
    },
    startEditingCommandPermissions(e) {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
        commandId: e
      })
    },
    stopEditingCommandPermissions(e) {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
        commandId: e
      })
    },
    startEditingIntegration(e) {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
        integrationId: e
      })
    },
    stopEditingIntegration() {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
      })
    },
    updateIntegration(e) {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
        settings: e
      })
    },
    startEditingWebhook(e) {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
        webhookId: e
      })
    },
    stopEditingWebhook() {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
      })
    },
    updateWebhook(e) {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
        settings: e
      })
    },
    async saveApplicationPermissions(e, t, n) {
      try {
        i.default.dispatch({
          type: "INTEGRATION_SETTINGS_SUBMITTING"
        }), await l.updateApplicationCommandPermissions({
          applicationId: e,
          commandId: e,
          defaultEveryoneValue: !0,
          defaultEverywhereValue: !0,
          guildId: t,
          permissions: n
        }), i.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
        })
      } catch (e) {
        i.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
          errors: e.body
        })
      }
    },
    async saveIntegration(e, t) {
      try {
        i.default.dispatch({
          type: "INTEGRATION_SETTINGS_SUBMITTING"
        }), await a.default.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), i.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
        })
      } catch (e) {
        i.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
          errors: e.body
        })
      }
    },
    async saveWebhook(e, t) {
      try {
        i.default.dispatch({
          type: "INTEGRATION_SETTINGS_SUBMITTING"
        }), await r.default.update(e, t.id, t), i.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
        })
      } catch (e) {
        i.default.dispatch({
          type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
          errors: e.body
        })
      }
    }
  }