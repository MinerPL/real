"use strict";
n.r(t), n.d(t, {
  getPromiseableActionHandlers: function() {
    return _
  },
  openSubmitFeedback: function() {
    return E
  },
  openRaidResolveModal: function() {
    return i
  },
  openConfirmRemoveMentionRaid: function() {
    return s
  }
});
var o = n("37983");
n("884691");
var u = n("77078"),
  r = n("143460"),
  a = n("782340");

function _(e) {
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
    [r.AutomodActionType.FLAG_TO_CHANNEL]: (t, a) => new Promise(_ => {
      (0, u.openModalLazy)(async () => {
        let {
          default: u
        } = await n.el("998730").then(n.bind(n, "998730")), E = t.actions.find(e => e.type === r.AutomodActionType.FLAG_TO_CHANNEL);
        return n => (0, o.jsx)(u, {
          action: a,
          isEdit: null != E,
          triggerType: t.triggerType,
          guildId: e,
          onEditChannel: e => {
            a.metadata.channelId = e, t.exemptChannels.add(e), _(a), n.onClose()
          },
          ...n,
          onClose: () => (_(null), n.onClose())
        })
      })
    }),
    [r.AutomodActionType.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(a => {
      (0, u.openModalLazy)(async () => {
        let {
          default: u
        } = await n.el("489118").then(n.bind(n, "489118")), _ = e.actions.find(e => e.type === r.AutomodActionType.USER_COMMUNICATION_DISABLED);
        return n => (0, o.jsx)(u, {
          action: t,
          isEdit: null != _,
          triggerType: e.triggerType,
          onUpdateDuration: e => {
            null != e && (t.metadata.durationSeconds = e), a(t), n.onClose()
          },
          ...n,
          onClose: () => (a(null), n.onClose())
        })
      })
    })
  }
}

function E(e, t, r, a) {
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
        channel: a
      }
    })
  })
}

function i(e, t) {
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
    header: a.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
    confirmText: a.default.Messages.CONFIRM,
    onConfirm: e,
    cancelText: a.default.Messages.CANCEL,
    ...t,
    children: (0, o.jsx)(u.Text, {
      variant: "text-md/normal",
      children: a.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
    })
  }))
}