"use strict";
var n = r("884691"),
  i = r("348262"),
  o = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    r = e, o = t, r.prototype = Object.create(o.prototype), r.prototype.constructor = r, r.__proto__ = o;
    var r, o, a = e.prototype;
    return a.shouldComponentUpdate = function(t) {
      return this.props.text !== t.text || this.props.editorState.getSelection().getHasFocus() !== t.editorState.getSelection().getHasFocus()
    }, a.render = function() {
      var t = i({
        "public/DraftEditorPlaceholder/root": !0,
        "public/DraftEditorPlaceholder/hasFocus": this.props.editorState.getSelection().getHasFocus()
      });
      return n.createElement("div", {
        className: t
      }, n.createElement("div", {
        className: i("public/DraftEditorPlaceholder/inner"),
        id: this.props.accessibilityID,
        style: {
          whiteSpace: "pre-wrap"
        }
      }, this.props.text))
    }, e
  }(n.Component);
t.exports = o