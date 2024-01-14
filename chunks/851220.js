"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var s, a = n("37983"),
  l = n("884691"),
  i = n("734570"),
  r = n("884351"),
  o = n("49111"),
  u = n("782340"),
  d = n("453096");

function c(e) {
  e.stopPropagation()
}
s = class extends l.PureComponent {
  render() {
    let {
      className: e,
      textValue: t,
      richValue: n,
      message: s,
      channel: l,
      onCancel: i,
      children: r
    } = this.props;
    return (0, a.jsxs)("div", {
      className: e,
      ref: this.node,
      onContextMenu: c,
      children: [r({
        textValue: t,
        richValue: n,
        message: s,
        channel: l,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        onKeyDown: this.onKeyDown
      }), (0, a.jsx)("div", {
        className: d.operations,
        children: u.default.Messages.EDIT_TEXTAREA_HELP.format({
          onCancel: () => i(l.id),
          onSave: this.onClickSave
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this.node = l.createRef(), this.onClickSave = () => {
      let {
        textValue: e
      } = this.props;
      this.onSubmit(e)
    }, this.onSubmit = e => {
      let {
        message: t,
        channel: n,
        onConfirmDelete: s,
        onCancel: a,
        saveMessage: l,
        validateEdit: o
      } = this.props;
      return 0 === e.length ? (s(n, t), a(n.id), Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !1
      })) : o({
        value: e,
        channel: n
      }).then(t => {
        let {
          valid: s
        } = t;
        if (!s) return Promise.resolve({
          shouldClear: !1,
          shouldRefocus: !1
        });
        let o = (0, i.handleLegacyCommands)(e, {
          channel: n,
          isEdit: !0
        });
        (null == o ? void 0 : o.content) != null && (e = o.content);
        let u = r.default.parse(this.props.channel, e);
        return u.content !== this.props.message.content && l(this.props.channel.id, this.props.message.id, u), a(n.id), Promise.resolve({
          shouldClear: !0,
          shouldRefocus: !0
        })
      })
    }, this.onChange = (e, t, n) => {
      let {
        channel: s,
        onChange: a
      } = this.props;
      a(s.id, t, n)
    }, this.onKeyDown = e => {
      if (e.keyCode === o.KeyboardKeys.ESCAPE && !e.shiftKey) {
        let {
          channel: t,
          onCancel: n
        } = this.props;
        e.preventDefault(), e.stopPropagation(), n(t.id)
      }
    }
  }
}