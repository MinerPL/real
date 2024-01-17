"use strict";
n.r(t), n.d(t, {
  getPromiseableActionHandlers: function() {
    return i
  },
  openSubmitFeedback: function() {
    return a
  },
  openRaidResolveModal: function() {
    return E
  },
  openConfirmRemoveMentionRaid: function() {
    return s
  }
});
var o = n("37983");
n("884691");
var u = n("77078"),
  r = n("143460"),
  _ = n("782340");

function i(e) {
  return {
    [r.AutomodActionType.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
      (0, u.openModalLazy)(async () => {
        let {
          default: u
        } = await n.el("83965").then(n.bind(n, "83965"));
        return n => {
          var r;
          return (0, o.jsx)(u, {
            initialCustomMessage: null !== (r = t.metadata.customMessage) && void 0 !== r ? r : "",
            onSubmit: o => {
              t.metadata.customMessage = o, e(t), n.onClose()
            },
            ...n,
            onClose: () => (e(null), n.onClose())
          })
        }
      })
    }),
    [r.AutomodActionType.FLAG_TO_CHANNEL]: (t, _) => new Promise(i => {
      (0, u.openModalLazy)(async () => {
        let {
          default: u
        } = await n.el("998730").then(n.bind(n, "998730")), a = t.actions.find(e => e.type === r.AutomodActionType.FLAG_TO_CHANNEL);
        return n => (0, o.jsx)(u, {
          action: _,
          isEdit: null != a,
          triggerType: t.triggerType,
          guildId: e,
          onEditChannel: e => {
            _.metadata.channelId = e, t.exemptChannels.add(e), i(_), n.onClose()
          },
          ...n,
          onClose: () => (i(null), n.onClose())
        })
      })
    }),
    [r.AutomodActionType.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(_ => {
      (0, u.openModalLazy)(async () => {
        let {
          default: u
        } = await n.el("489118").then(n.bind(n, "489118")), i = e.actions.find(e => e.type === r.AutomodActionType.USER_COMMUNICATION_DISABLED);
        return n => (0, o.jsx)(u, {
          action: t,
          isEdit: null != i,
          triggerType: e.triggerType,
          onUpdateDuration: e => {
            null != e && (t.metadata.durationSeconds = e), _(t), n.onClose()
          },
          ...n,
          onClose: () => (_(null), n.onClose())
        })
      })
    })
  }
}

function a(e, t, r, _) {
  (0, u.openModalLazy)(async () => {
    let {
      default: u
    } = await n.el("593486").then(n.bind(n, "593486"));
    return n => (0, o.jsx)(u, {
      ...n,
      automodDecision: {
        messageId: e,
        messageContent: t,
        decisionId: r,
        channel: _
      }
    })
  })
}

function E(e, t) {
  (0, u.openModalLazy)(async () => {
    let {
      default: u
    } = await n.el("561956").then(n.bind(n, "561956"));
    return n => (0, o.jsx)(u, {
      ...n,
      messageId: e,
      guildId: t
    })
  })
}

function s(e) {
  (0, u.openModal)(t => (0, o.jsx)(u.ConfirmModal, {
    header: _.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
    confirmText: _.default.Messages.CONFIRM,
    onConfirm: e,
    cancelText: _.default.Messages.CANCEL,
    ...t,
    children: (0, o.jsx)(u.Text, {
      variant: "text-md/normal",
      children: _.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
    })
  }))
}