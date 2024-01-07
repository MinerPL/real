            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("222007");
            var n, r = s("37983"),
                a = s("884691"),
                o = s("661201"),
                i = s.n(o),
                l = s("375128"),
                u = s.n(l),
                d = s("77078"),
                c = s("782340"),
                h = s("387236");
            n = class extends a.Component {
                render() {
                    let {
                        selectedValue: e
                    } = this.state;
                    return (0, r.jsxs)(a.Fragment, {
                        children: [(0, r.jsx)(d.Heading, {
                            className: h.prompt,
                            variant: "heading-md/semibold",
                            children: this.props.prompt
                        }), (0, r.jsx)("hr", {
                            className: h.separator
                        }), (0, r.jsx)(d.Text, {
                            className: h.selectYourAnswer,
                            variant: "text-xs/normal",
                            children: c.default.Messages.HYPESQUAD_QUIZ_SELECT_ANSWER
                        }), (0, r.jsx)(d.RadioGroup, {
                            options: this.getQuestionOptions(),
                            onChange: this.handleOptionChange,
                            value: e
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        selectedValue: null
                    }, this.getQuestionOptions = i(() => u(this.props.options.map(e => ({
                        name: e.copy,
                        value: e.house
                    })))), this.handleOptionChange = e => {
                        let {
                            onSelect: t
                        } = this.props;
                        this.setState({
                            selectedValue: e.value
                        }), t(e.value)
                    }
                }
            }