(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(3),s=n.n(i),o=(n(12),n(4)),r=n(5),d=n(7),l=n(6),u=n(0);var b=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,i=t.positivePercentage;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Statistics"}),Object(u.jsxs)("p",{children:["Good: ",Object(u.jsx)("span",{children:e})]}),Object(u.jsxs)("p",{children:["Neutral: ",Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("p",{children:["Bad: ",Object(u.jsx)("span",{children:a})]}),Object(u.jsxs)("p",{children:["Total: ",Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("p",{children:["Positive feedback: ",Object(u.jsxs)("span",{children:[Math.round(i),"%"]})]})]})};var j=function(t){var e=t.options;return t.onLeaveFeedback,Object(u.jsx)("div",{children:e.map((function(t){return Object(u.jsx)("button",{type:"button",onClick:t.handleClick,children:t.name})}))})};var h=function(t){var e=t.message;return Object(u.jsx)("p",{children:e})},k=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onClickGood=function(t){a.setState({good:a.state.good+1})},a.onClickNeutral=function(t){a.setState({neutral:a.state.neutral+1})},a.onClickBad=function(t){a.setState({bad:a.state.bad+1})},a.state={good:0,neutral:0,bad:0},a.title=t.title,a}return Object(r.a)(n,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.countTotalFeedback();return t>0?100*this.state.good/t:0}},{key:"render",value:function(){var t=[{name:"Good",handleClick:this.onClickGood},{name:"Neutral",handleClick:this.onClickNeutral},{name:"Bad",handleClick:this.onClickBad}];return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:this.title}),Object(u.jsx)(j,{options:t}),0===this.countTotalFeedback()?Object(u.jsx)(h,{message:"No feedback given"}):Object(u.jsx)(b,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(c.a.Component);n(14);var v=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(k,{title:"Please leave feedback"})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),i(t),s(t)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.3ad3497b.chunk.js.map