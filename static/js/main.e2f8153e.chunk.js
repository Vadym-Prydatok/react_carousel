(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n.n(a),s=n(2),l=n(3),c=n(5),r=n(4),o=n(1),m=n.n(o),u=(n(13),n(8)),h=n.n(u),p=(n(14),n(0)),b=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={scroll:0},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.images,a=e.itemWidth,i=e.frameSize,s=e.step,l=e.animationDuration,c=e.infinite,r=this.state.scroll,o=a/2*(n.length-i);i>n.length&&(i=n.length),s>n.length&&(s=n.length),r>o&&(r=o),r<0&&(r=0);var m={width:a,transform:"translateX(-".concat(r,"px)"),transition:"all ".concat(l,"ms")},u={width:a*i};return Object(p.jsxs)("div",{className:"Carousel",children:[Object(p.jsx)("ul",{style:u,className:h()("Carousel__list",{"Carousel__list--left":0===r&&!c,"Carousel__list--right":r===o&&!c}),children:n.map((function(t,e){return Object(p.jsx)("li",{style:m,className:"Carousel__item",children:Object(p.jsx)("img",{style:m,className:"Carousel__image",src:t,alt:"smille\u2116".concat(e+1)})},t)}))}),Object(p.jsxs)("div",{className:"Button__container",children:[Object(p.jsx)("button",{"data-cy":"prev",type:"button",disabled:0===r&&!1===c,className:"Button",onClick:function(){0!==r?t.setState((function(t){return{scroll:t.scroll-a*s/2}})):t.setState({scroll:o})},children:"Prev"}),Object(p.jsx)("button",{"data-cy":"next",type:"button",disabled:r===o&&!1===c,className:"Button",onClick:function(){r!==o?t.setState((function(t){return{scroll:t.scroll+a*s/2}})):t.setState({scroll:0})},children:"Next"})]})]})}}]),n}(m.a.Component),g=b,j=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],withOfItem:130,frameSize:3,rollingStep:3,animation:1e3,infiniteRolling:!1},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,a=e.withOfItem,i=e.frameSize,s=e.rollingStep,l=e.animation,c=e.infiniteRolling;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(n.length," images")}),Object(p.jsxs)("form",{className:"Options",children:[Object(p.jsxs)("label",{className:"label",htmlFor:"itemWidth",children:["Item width:",Object(p.jsx)("input",{type:"number",className:"input",value:a,id:"itemWidth",onChange:function(e){t.setState({withOfItem:+e.target.value})}})]}),Object(p.jsxs)("label",{className:"label",htmlFor:"frameSize",children:["Frame size:",Object(p.jsx)("input",{type:"number",min:0,max:10,className:"input",value:i,id:"frameSize",onChange:function(e){t.setState({frameSize:+e.target.value})}})]}),Object(p.jsxs)("label",{className:"label",htmlFor:"step",children:["Step:",Object(p.jsx)("input",{type:"number",min:0,max:10,className:"input",value:s,id:"step",onChange:function(e){t.setState({rollingStep:+e.target.value})}})]}),Object(p.jsxs)("label",{className:"label",htmlFor:"animationDuration",children:["Animation Duration:",Object(p.jsx)("input",{type:"number",className:"input",value:l,id:"animationDuration",onChange:function(e){t.setState({animation:+e.target.value})}})]}),Object(p.jsxs)("label",{className:"label",htmlFor:"infinity",children:["Infinite:",Object(p.jsx)("input",{type:"checkbox",className:"input",id:"infinite",checked:c,onChange:function(){t.setState({infiniteRolling:!c})}})]})]}),Object(p.jsx)(g,{images:n,step:s,frameSize:i,itemWidth:a,animationDuration:l,infinite:c})]})}}]),n}(m.a.Component),d=j;i.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e2f8153e.chunk.js.map