"use strict";
l.r(e), l.d(e, {
  playApplication: function() {
    return S
  }
}), l("70102"), l("222007");
var n = l("37983"),
  a = l("884691"),
  i = l("866227"),
  s = l.n(i),
  o = l("446674"),
  u = l("77078"),
  c = l("959254"),
  r = l("823411"),
  d = l("299285"),
  p = l("148813"),
  f = l("145131"),
  C = l("599110"),
  h = l("49111"),
  A = l("782340"),
  _ = l("141804"),
  y = l("926622");
class T extends a.PureComponent {
  renderConflictButton(t, e, l, a) {
    return (0, n.jsxs)(u.Button, {
      className: _.conflictButton,
      innerClassName: _.conflictButtonInner,
      onClick: a,
      children: [(0, n.jsx)("div", {
        className: l
      }), (0, n.jsxs)("div", {
        className: _.buttonBody,
        children: [(0, n.jsx)("div", {
          className: _.conflictTitle,
          children: t
        }), (0, n.jsx)("div", {
          children: A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED
        }), (0, n.jsx)("div", {
          className: _.timestamp,
          children: s(e).calendar()
        })]
      })]
    })
  }
  renderError() {
    let {
      application: t
    } = this.props;
    return (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsxs)(u.ModalContent, {
        children: [(0, n.jsx)(f.default, {
          justify: f.default.Justify.CENTER,
          children: (0, n.jsx)("div", {
            className: _.errorArt
          })
        }), (0, n.jsx)("div", {
          className: _.description,
          children: A.default.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({
            applicationName: t.name
          })
        })]
      }), (0, n.jsx)(u.ModalFooter, {
        children: (0, n.jsxs)(f.default, {
          justify: f.default.Justify.BETWEEN,
          children: [(0, n.jsx)(u.Button, {
            className: _.linkButton,
            size: _.linkButtonSize,
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.PRIMARY,
            onClick: this.onClose,
            children: A.default.Messages.CANCEL
          }), (0, n.jsxs)(f.default, {
            direction: f.default.Direction.HORIZONTAL,
            justify: f.default.Justify.END,
            children: [(0, n.jsx)(u.Button, {
              look: u.Button.Looks.LINK,
              color: u.Button.Colors.PRIMARY,
              onClick: () => this.handlePlay(),
              className: _.retryButton,
              children: A.default.Messages.RETRY
            }), (0, n.jsx)(u.Button, {
              onClick: () => this.handlePlay(!1),
              children: A.default.Messages.GAME_ACTION_BUTTON_PLAY
            })]
          })]
        })
      })]
    })
  }
  renderConflict() {
    let {
      application: t,
      cloudSyncState: e
    } = this.props;
    if (e.type !== h.CloudSyncStateTypes.CONFLICT) throw Error("Cannot render conflict for non conflict type");
    return (0, n.jsxs)(u.ModalContent, {
      className: y.marginBottom20,
      children: [(0, n.jsx)("div", {
        className: _.description,
        children: A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({
          applicationName: t.name
        })
      }), this.renderConflictButton(A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD, e.remote.timestamp, _.conflictDownloadArt, this.handleChooseDownload), (0, n.jsxs)(f.default, {
        className: _.choiceWrapper,
        align: f.default.Align.CENTER,
        children: [(0, n.jsx)("div", {
          className: _.choiceLine
        }), (0, n.jsx)("div", {
          className: _.choiceTitle,
          children: A.default.Messages.CLOUD_SYNC_MODAL_OR
        }), (0, n.jsx)("div", {
          className: _.choiceLine
        })]
      }), this.renderConflictButton(A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD, e.next.timestamp, _.conflictUploadArt, this.handleChooseUpload)]
    })
  }
  render() {
    let {
      cloudSyncState: t,
      transitionState: e
    } = this.props, l = t.type === h.CloudSyncStateTypes.CONFLICT ? A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER : A.default.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
    return (0, n.jsxs)(u.ModalRoot, {
      transitionState: e,
      className: _.modal,
      "aria-label": l,
      children: [(0, n.jsxs)(u.ModalHeader, {
        separator: !1,
        children: [(0, n.jsx)(u.ModalCloseButton, {
          className: _.closeButton,
          onClick: this.onClose
        }), (0, n.jsx)(u.FormTitle, {
          tag: "h2",
          className: y.marginReset,
          children: l
        })]
      }), t.type === h.CloudSyncStateTypes.CONFLICT ? this.renderConflict() : this.renderError()]
    })
  }
  constructor(...t) {
    var e;
    super(...t), e = this, this.onClose = () => {
      this.props.onClose()
    }, this.handlePlay = function() {
      let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        {
          libraryApplication: n,
          analyticsParams: a
        } = e.props;
      e.onClose(), S(n.id, n, {
        analyticsParams: a,
        cloudSync: t,
        cloudSyncForceHash: l
      })
    }, this.handleChooseDownload = () => {
      let {
        cloudSyncState: t
      } = this.props;
      t.type === h.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.remote.hash)
    }, this.handleChooseUpload = () => {
      let {
        cloudSyncState: t
      } = this.props;
      t.type === h.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.next.hash)
    }
  }
}
let E = o.default.connectStores([p.default, d.default], t => {
  let {
    libraryApplication: e,
    branchId: l
  } = t;
  return {
    cloudSyncState: p.default.getState(e.id, l),
    application: d.default.getApplication(e.id)
  }
})(T);
async function S(t, e, l) {
  let a = d.default.getApplication(t);
  if (null == a) return;
  let {
    cloudSync: i = !0,
    cloudSyncForceHash: s = null,
    analyticsParams: o
  } = l;
  if (i && null != e) {
    let t = e.branchId;
    try {
      await c.sync(e.id, t, s)
    } catch (l) {
      (0, u.openModal)(l => (0, n.jsx)(E, {
        libraryApplication: e,
        analyticsParams: o,
        branchId: t,
        ...l
      }));
      return
    }
  }
  return C.default.track(h.AnalyticEvents.APPLICATION_OPENED, {
    application_id: a.id,
    application_name: a.name,
    type: h.AnalyticsGameOpenTypes.LAUNCH,
    distributor: null != e ? e.getDistributor() : null,
    ...o
  }), r.default.launch(a.id, null == e ? void 0 : e.branchId)
}