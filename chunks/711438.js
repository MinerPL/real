"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
}), a("222007");
var s = a("37983"),
  l = a("884691"),
  n = a("627445"),
  u = a.n(n),
  r = a("446674"),
  i = a("77078"),
  o = a("430568"),
  S = a("901582"),
  d = a("86678"),
  c = a("845579"),
  h = a("52028"),
  m = a("697218"),
  f = a("882641"),
  T = a("381546"),
  p = a("599110"),
  A = a("158998"),
  C = a("921917"),
  g = a("413524"),
  _ = a("49111"),
  M = a("958706"),
  O = a("782340"),
  N = a("711103");
let j = Object.values(g.ClearAfterValues).filter(e => "number" == typeof e).sort((e, t) => e - t);

function U(e) {
  return (0, s.jsxs)("div", {
    className: N.statusOptionItem,
    children: [(0, s.jsx)(i.Status, {
      status: e.value,
      size: 10,
      className: N.statusIcon
    }), e.label]
  })
}
let x = [{
  key: 1,
  value: i.StatusTypes.ONLINE,
  label: (0, A.humanizeStatus)(i.StatusTypes.ONLINE)
}, {
  key: 2,
  value: i.StatusTypes.IDLE,
  label: (0, A.humanizeStatus)(i.StatusTypes.IDLE)
}, {
  key: 3,
  value: i.StatusTypes.DND,
  label: (0, A.humanizeStatus)(i.StatusTypes.DND)
}, {
  key: 4,
  value: i.StatusTypes.INVISIBLE,
  label: (0, A.humanizeStatus)(i.StatusTypes.INVISIBLE)
}];
class v extends l.PureComponent {
  componentDidMount() {
    let {
      sourceAnalyticsContext: e
    } = this.props;
    p.default.track(_.AnalyticEvents.OPEN_MODAL, {
      source: e.location,
      type: _.AnalyticsSections.CUSTOM_STATUS_MODAL,
      load_id: e.loadId
    })
  }
  get clearAfterOptions() {
    return [{
      key: 1,
      value: g.ClearAfterValues.TODAY,
      label: O.default.Messages.CUSTOM_STATUS_TODAY
    }, {
      key: 2,
      value: g.ClearAfterValues.HOURS_4,
      label: O.default.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 4
      })
    }, {
      key: 3,
      value: g.ClearAfterValues.HOURS_1,
      label: O.default.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 1
      })
    }, {
      key: 4,
      value: g.ClearAfterValues.MINUTES_30,
      label: O.default.Messages.CUSTOM_STATUS_MINUTES.format({
        minutes: 30
      })
    }, {
      key: 5,
      value: null,
      label: O.default.Messages.CUSTOM_STATUS_DONT_CLEAR
    }]
  }
  get analyticsLocation() {
    return {
      page: _.AnalyticsPages.CUSTOM_STATUS_MODAL
    }
  }
  getEmojiButtonRenderer() {
    let {
      emojiInfo: e
    } = this.state;
    return null == e ? null : () => (0, s.jsx)(o.default, {
      className: N.emoji,
      emojiId: e.id,
      emojiName: e.name,
      animated: !!e.animated
    })
  }
  renderCustomStatusInput() {
    let {
      user: e
    } = this.props, {
      text: t,
      emojiInfo: a
    } = this.state;
    return (0, s.jsx)(i.FormSection, {
      className: N.formGroup,
      title: O.default.Messages.CUSTOM_STATUS_MODAL_BODY.format({
        username: e.username
      }),
      children: (0, s.jsxs)("div", {
        className: N.inputContainer,
        children: [(0, s.jsx)("div", {
          className: N.emojiButtonContainer,
          children: (0, s.jsx)(i.Popout, {
            renderPopout: this.renderEmojiPicker,
            position: "left",
            animation: i.Popout.Animation.NONE,
            align: "top",
            children: (e, t) => {
              let {
                isShown: a
              } = t;
              return (0, s.jsx)(f.default, {
                ...e,
                active: a,
                className: N.emojiButton,
                tabIndex: 0,
                renderButtonContents: this.getEmojiButtonRenderer()
              })
            }
          })
        }), (0, s.jsx)(i.TextInput, {
          maxLength: g.STATUS_MAX_LENGTH,
          value: t,
          inputClassName: N.input,
          placeholder: O.default.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
          onChange: this.handleStatusChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: !0
        }), t.length > 0 || null != a ? (0, s.jsx)(i.Button, {
          focusProps: {
            offset: {
              top: 8,
              bottom: 8,
              left: -2,
              right: -2
            }
          },
          className: N.clearButton,
          onClick: this.handleClearStatus,
          look: i.Button.Looks.BLANK,
          size: i.Button.Sizes.NONE,
          children: (0, s.jsx)(T.default, {
            className: N.clearIcon
          })
        }) : null]
      })
    })
  }
  renderClearAfter() {
    let {
      clearAfter: e
    } = this.state;
    return (0, s.jsx)(i.FormSection, {
      className: N.formGroup,
      title: O.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
      children: (0, s.jsx)(i.SingleSelect, {
        placeholder: O.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
        maxVisibleItems: 5,
        value: e,
        options: this.clearAfterOptions,
        onChange: this.handleChangeClearAfter
      })
    })
  }
  renderStatusInput() {
    let {
      status: e
    } = this.state;
    return (0, s.jsx)(i.FormSection, {
      className: N.formGroup,
      title: O.default.Messages.CUSTOM_STATUS_STATUS_TITLE,
      children: (0, s.jsx)(i.SingleSelect, {
        maxVisibleItems: 4,
        value: e,
        options: x,
        onChange: this.handleChangeStatus,
        renderOptionLabel: U
      })
    })
  }
  render() {
    let {
      transitionState: e,
      onClose: t
    } = this.props;
    return (0, s.jsx)(S.default, {
      ...this.analyticsLocation,
      children: (0, s.jsxs)(i.ModalRoot, {
        transitionState: e,
        className: N.modalRoot,
        "aria-label": O.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
        children: [(0, s.jsxs)(i.ModalHeader, {
          separator: !1,
          className: N.headerContainer,
          children: [(0, s.jsx)("div", {
            className: N.art
          }), (0, s.jsx)("div", {
            className: N.header,
            children: (0, s.jsx)(i.H, {
              className: N.headerText,
              children: O.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
            })
          }), (0, s.jsx)(i.ModalCloseButton, {
            onClick: t,
            className: N.modalCloseButton
          })]
        }), (0, s.jsxs)(i.ModalContent, {
          children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, s.jsx)(i.FormDivider, {
            className: N.formDivider
          }), this.renderStatusInput()]
        }), (0, s.jsxs)(i.ModalFooter, {
          children: [(0, s.jsx)(i.Button, {
            onClick: this.handleSubmit,
            children: O.default.Messages.SAVE
          }), (0, s.jsx)(i.Button, {
            onClick: t,
            look: i.Button.Looks.LINK,
            color: N.cancelButton,
            children: O.default.Messages.CANCEL
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
      text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
      clearAfter: function() {
        var e, t, a;
        let s = c.CustomStatusSetting.getSetting();
        if (null == s || "" === s.expiresAtMs) return g.ClearAfterValues.TODAY;
        let l = Number(s.expiresAtMs);
        if (isNaN(l)) return g.ClearAfterValues.TODAY;
        let n = new Date,
          u = new Date(l);
        if (t = n, a = u, t.getFullYear() !== a.getFullYear() || t.getMonth() !== a.getMonth() || t.getDate() !== a.getDate()) return g.ClearAfterValues.TODAY;
        let r = Number(l) - Date.now();
        return null !== (e = j.find(e => r <= e)) && void 0 !== e ? e : g.ClearAfterValues.TODAY
      }(),
      status: function() {
        let e = c.StatusSetting.getSetting();
        return x.some(t => t.value === e) ? e : i.StatusTypes.ONLINE
      }()
    }, this.handleClearStatus = () => {
      this.setState({
        emojiInfo: null,
        text: ""
      })
    }, this.handleSubmit = e => {
      e.preventDefault(), this.handleSaveStatus()
    }, this.handleStatusChange = e => {
      this.setState({
        text: e
      })
    }, this.handleEmojiChange = e => {
      if (null == e) return;
      let t = null != e.id ? {
        id: e.id,
        name: e.name,
        animated: e.animated
      } : {
        id: null,
        name: e.optionallyDiverseSequence,
        animated: !1
      };
      this.setState({
        emojiInfo: t
      })
    }, this.handleChangeClearAfter = e => {
      this.setState({
        clearAfter: e
      })
    }, this.handleChangeStatus = e => {
      this.setState({
        status: e
      })
    }, this.handleSaveStatus = () => {
      let {
        sourceAnalyticsContext: e,
        onClose: t
      } = this.props, {
        emojiInfo: a,
        text: s,
        clearAfter: l,
        status: n
      } = this.state;
      c.StatusSetting.updateSetting(n), (0, C.default)(s, a, l, e), t()
    }, this.handleKeyPress = e => {
      e.which === _.KeyboardKeys.ENTER && this.handleSaveStatus()
    }, this.renderEmojiPicker = e => {
      let {
        closePopout: t
      } = e, {
        onClose: a
      } = this.props;
      return (0, s.jsx)(d.default, {
        closePopout: t,
        onSelectEmoji: (e, a) => {
          this.handleEmojiChange(e), a && t()
        },
        pickerIntention: M.EmojiIntention.STATUS,
        onNavigateAway: a
      })
    }
  }
}
var E = r.default.connectStores([h.default, m.default], () => {
  let e = m.default.getCurrentUser();
  return u(null != e, "CustomStatusModal: user cannot be null"), {
    customStatus: h.default.getCustomStatusActivity(),
    user: e
  }
}, {
  forwardRef: !0
})(v)