(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.graphDraw = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/*

 Copyright 2000, Silicon Graphics, Inc. All Rights Reserved.
 Copyright 2015, Google Inc. All Rights Reserved.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice including the dates of first publication and
 either this permission notice or a reference to http://oss.sgi.com/projects/FreeB/
 shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 SILICON GRAPHICS, INC. BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 Original Code. The Original Code is: OpenGL Sample Implementation,
 Version 1.2.1, released January 26, 2000, developed by Silicon Graphics,
 Inc. The Original Code is Copyright (c) 1991-2000 Silicon Graphics, Inc.
 Copyright in any portions created by third parties is as indicated
 elsewhere herein. All Rights Reserved.
*/
'use strict';var n;function t(a,b){return a.b===b.b&&a.a===b.a}function u(a,b){return a.b<b.b||a.b===b.b&&a.a<=b.a}function v(a,b,c){var d=b.b-a.b,e=c.b-b.b;return 0<d+e?d<e?b.a-a.a+d/(d+e)*(a.a-c.a):b.a-c.a+e/(d+e)*(c.a-a.a):0}function x(a,b,c){var d=b.b-a.b,e=c.b-b.b;return 0<d+e?(b.a-c.a)*d+(b.a-a.a)*e:0}function z(a,b){return a.a<b.a||a.a===b.a&&a.b<=b.b}function aa(a,b,c){var d=b.a-a.a,e=c.a-b.a;return 0<d+e?d<e?b.b-a.b+d/(d+e)*(a.b-c.b):b.b-c.b+e/(d+e)*(c.b-a.b):0}
function ba(a,b,c){var d=b.a-a.a,e=c.a-b.a;return 0<d+e?(b.b-c.b)*d+(b.b-a.b)*e:0}function ca(a){return u(a.b.a,a.a)}function da(a){return u(a.a,a.b.a)}function A(a,b,c,d){a=0>a?0:a;c=0>c?0:c;return a<=c?0===c?(b+d)/2:b+a/(a+c)*(d-b):d+c/(a+c)*(b-d)};function ea(a){var b=B(a.b);C(b,a.c);C(b.b,a.c);D(b,a.a);return b}function E(a,b){var c=!1,d=!1;a!==b&&(b.a!==a.a&&(d=!0,F(b.a,a.a)),b.d!==a.d&&(c=!0,G(b.d,a.d)),H(b,a),d||(C(b,a.a),a.a.c=a),c||(D(b,a.d),a.d.a=a))}function I(a){var b=a.b,c=!1;a.d!==a.b.d&&(c=!0,G(a.d,a.b.d));a.c===a?F(a.a,null):(a.b.d.a=J(a),a.a.c=a.c,H(a,J(a)),c||D(a,a.d));b.c===b?(F(b.a,null),G(b.d,null)):(a.d.a=J(b),b.a.c=b.c,H(b,J(b)));fa(a)}
function K(a){var b=B(a),c=b.b;H(b,a.e);b.a=a.b.a;C(c,b.a);b.d=c.d=a.d;b=b.b;H(a.b,J(a.b));H(a.b,b);a.b.a=b.a;b.b.a.c=b.b;b.b.d=a.b.d;b.f=a.f;b.b.f=a.b.f;return b}function L(a,b){var c=!1,d=B(a),e=d.b;b.d!==a.d&&(c=!0,G(b.d,a.d));H(d,a.e);H(e,b);d.a=a.b.a;e.a=b.a;d.d=e.d=a.d;a.d.a=e;c||D(d,a.d);return d}function B(a){var b=new M,c=new M,d=a.b.h;c.h=d;d.b.h=b;b.h=a;a.b.h=c;b.b=c;b.c=b;b.e=c;c.b=b;c.c=c;return c.e=b}function H(a,b){var c=a.c,d=b.c;c.b.e=b;d.b.e=a;a.c=d;b.c=c}
function C(a,b){var c=b.f,d=new N(b,c);c.e=d;b.f=d;c=d.c=a;do c.a=d,c=c.c;while(c!==a)}function D(a,b){var c=b.d,d=new ga(b,c);c.b=d;b.d=d;d.a=a;d.c=b.c;c=a;do c.d=d,c=c.e;while(c!==a)}function fa(a){var b=a.h;a=a.b.h;b.b.h=a;a.b.h=b}function F(a,b){var c=a.c,d=c;do d.a=b,d=d.c;while(d!==c);c=a.f;d=a.e;d.f=c;c.e=d}function G(a,b){var c=a.a,d=c;do d.d=b,d=d.e;while(d!==c);c=a.d;d=a.b;d.d=c;c.b=d};function ha(a){var b=0;Math.abs(a[1])>Math.abs(a[0])&&(b=1);Math.abs(a[2])>Math.abs(a[b])&&(b=2);return b};var O=4*1E150;function P(a,b){a.f+=b.f;a.b.f+=b.b.f}function ia(a,b,c){a=a.a;b=b.a;c=c.a;if(b.b.a===a)return c.b.a===a?u(b.a,c.a)?0>=x(c.b.a,b.a,c.a):0<=x(b.b.a,c.a,b.a):0>=x(c.b.a,a,c.a);if(c.b.a===a)return 0<=x(b.b.a,a,b.a);b=v(b.b.a,a,b.a);a=v(c.b.a,a,c.a);return b>=a}function Q(a){a.a.i=null;var b=a.e;b.a.c=b.c;b.c.a=b.a;a.e=null}function ja(a,b){I(a.a);a.c=!1;a.a=b;b.i=a}function ka(a){var b=a.a.a;do a=R(a);while(a.a.a===b);a.c&&(b=L(S(a).a.b,a.a.e),ja(a,b),a=R(a));return a}
function la(a,b,c){var d=new ma;d.a=c;d.e=na(a.f,b.e,d);return c.i=d}function oa(a,b){switch(a.s){case 100130:return 0!==(b&1);case 100131:return 0!==b;case 100132:return 0<b;case 100133:return 0>b;case 100134:return 2<=b||-2>=b}return!1}function pa(a){var b=a.a,c=b.d;c.c=a.d;c.a=b;Q(a)}function T(a,b,c){a=b;for(b=b.a;a!==c;){a.c=!1;var d=S(a),e=d.a;if(e.a!==b.a){if(!d.c){pa(a);break}e=L(b.c.b,e.b);ja(d,e)}b.c!==e&&(E(J(e),e),E(b,e));pa(a);b=d.a;a=d}return b}
function U(a,b,c,d,e,f){var g=!0;do la(a,b,c.b),c=c.c;while(c!==d);for(null===e&&(e=S(b).a.b.c);;){d=S(b);c=d.a.b;if(c.a!==e.a)break;c.c!==e&&(E(J(c),c),E(J(e),c));d.f=b.f-c.f;d.d=oa(a,d.f);b.b=!0;!g&&qa(a,b)&&(P(c,e),Q(b),I(e));g=!1;b=d;e=c}b.b=!0;f&&ra(a,b)}function sa(a,b,c,d,e){var f=[b.g[0],b.g[1],b.g[2]];b.d=null;b.d=a.o?a.o(f,c,d,a.c)||null:null;null===b.d&&(e?a.n||(V(a,100156),a.n=!0):b.d=c[0])}
function ta(a,b,c){var d=[null,null,null,null];d[0]=b.a.d;d[1]=c.a.d;sa(a,b.a,d,[.5,.5,0,0],!1);E(b,c)}function ua(a,b,c,d,e){var f=Math.abs(b.b-a.b)+Math.abs(b.a-a.a),g=Math.abs(c.b-a.b)+Math.abs(c.a-a.a),h=e+1;d[e]=.5*g/(f+g);d[h]=.5*f/(f+g);a.g[0]+=d[e]*b.g[0]+d[h]*c.g[0];a.g[1]+=d[e]*b.g[1]+d[h]*c.g[1];a.g[2]+=d[e]*b.g[2]+d[h]*c.g[2]}
function qa(a,b){var c=S(b),d=b.a,e=c.a;if(u(d.a,e.a)){if(0<x(e.b.a,d.a,e.a))return!1;if(!t(d.a,e.a))K(e.b),E(d,J(e)),b.b=c.b=!0;else if(d.a!==e.a){var c=a.e,f=d.a.h;if(0<=f){var c=c.b,g=c.d,h=c.e,k=c.c,l=k[f];g[l]=g[c.a];k[g[l]]=l;l<=--c.a&&(1>=l?W(c,l):u(h[g[l>>1]],h[g[l]])?W(c,l):va(c,l));h[f]=null;k[f]=c.b;c.b=f}else for(c.c[-(f+1)]=null;0<c.a&&null===c.c[c.d[c.a-1]];)--c.a;ta(a,J(e),d)}}else{if(0>x(d.b.a,e.a,d.a))return!1;R(b).b=b.b=!0;K(d.b);E(J(e),d)}return!0}
function wa(a,b){var c=S(b),d=b.a,e=c.a,f=d.a,g=e.a,h=d.b.a,k=e.b.a,l=new N;x(h,a.a,f);x(k,a.a,g);if(f===g||Math.min(f.a,h.a)>Math.max(g.a,k.a))return!1;if(u(f,g)){if(0<x(k,f,g))return!1}else if(0>x(h,g,f))return!1;var r=h,p=f,q=k,y=g,m,w;u(r,p)||(m=r,r=p,p=m);u(q,y)||(m=q,q=y,y=m);u(r,q)||(m=r,r=q,q=m,m=p,p=y,y=m);u(q,p)?u(p,y)?(m=v(r,q,p),w=v(q,p,y),0>m+w&&(m=-m,w=-w),l.b=A(m,q.b,w,p.b)):(m=x(r,q,p),w=-x(r,y,p),0>m+w&&(m=-m,w=-w),l.b=A(m,q.b,w,y.b)):l.b=(q.b+p.b)/2;z(r,p)||(m=r,r=p,p=m);z(q,y)||
(m=q,q=y,y=m);z(r,q)||(m=r,r=q,q=m,m=p,p=y,y=m);z(q,p)?z(p,y)?(m=aa(r,q,p),w=aa(q,p,y),0>m+w&&(m=-m,w=-w),l.a=A(m,q.a,w,p.a)):(m=ba(r,q,p),w=-ba(r,y,p),0>m+w&&(m=-m,w=-w),l.a=A(m,q.a,w,y.a)):l.a=(q.a+p.a)/2;u(l,a.a)&&(l.b=a.a.b,l.a=a.a.a);r=u(f,g)?f:g;u(r,l)&&(l.b=r.b,l.a=r.a);if(t(l,f)||t(l,g))return qa(a,b),!1;if(!t(h,a.a)&&0<=x(h,a.a,l)||!t(k,a.a)&&0>=x(k,a.a,l)){if(k===a.a)return K(d.b),E(e.b,d),b=ka(b),d=S(b).a,T(a,S(b),c),U(a,b,J(d),d,d,!0),!0;if(h===a.a){K(e.b);E(d.e,J(e));f=c=b;g=f.a.b.a;
do f=R(f);while(f.a.b.a===g);b=f;f=S(b).a.b.c;c.a=J(e);e=T(a,c,null);U(a,b,e.c,d.b.c,f,!0);return!0}0<=x(h,a.a,l)&&(R(b).b=b.b=!0,K(d.b),d.a.b=a.a.b,d.a.a=a.a.a);0>=x(k,a.a,l)&&(b.b=c.b=!0,K(e.b),e.a.b=a.a.b,e.a.a=a.a.a);return!1}K(d.b);K(e.b);E(J(e),d);d.a.b=l.b;d.a.a=l.a;d.a.h=xa(a.e,d.a);d=d.a;e=[0,0,0,0];l=[f.d,h.d,g.d,k.d];d.g[0]=d.g[1]=d.g[2]=0;ua(d,f,h,e,0);ua(d,g,k,e,2);sa(a,d,l,e,!0);R(b).b=b.b=c.b=!0;return!1}
function ra(a,b){for(var c=S(b);;){for(;c.b;)b=c,c=S(c);if(!b.b&&(c=b,b=R(b),null===b||!b.b))break;b.b=!1;var d=b.a,e=c.a,f;if(f=d.b.a!==e.b.a)a:{f=b;var g=S(f),h=f.a,k=g.a,l=void 0;if(u(h.b.a,k.b.a)){if(0>x(h.b.a,k.b.a,h.a)){f=!1;break a}R(f).b=f.b=!0;l=K(h);E(k.b,l);l.d.c=f.d}else{if(0<x(k.b.a,h.b.a,k.a)){f=!1;break a}f.b=g.b=!0;l=K(k);E(h.e,k.b);l.b.d.c=f.d}f=!0}f&&(c.c?(Q(c),I(e),c=S(b),e=c.a):b.c&&(Q(b),I(d),b=R(c),d=b.a));if(d.a!==e.a)if(d.b.a===e.b.a||b.c||c.c||d.b.a!==a.a&&e.b.a!==a.a)qa(a,
b);else if(wa(a,b))break;d.a===e.a&&d.b.a===e.b.a&&(P(e,d),Q(b),I(d),b=R(c))}}
function ya(a,b){a.a=b;for(var c=b.c;null===c.i;)if(c=c.c,c===b.c){var c=a,d=b,e=new ma;e.a=d.c.b;var f=c.f,g=f.a;do g=g.a;while(null!==g.b&&!f.c(f.b,e,g.b));var f=g.b,h=S(f),e=f.a,g=h.a;if(0===x(e.b.a,d,e.a))e=f.a,t(e.a,d)||t(e.b.a,d)||(K(e.b),f.c&&(I(e.c),f.c=!1),E(d.c,e),ya(c,d));else{var k=u(g.b.a,e.b.a)?f:h,h=void 0;f.d||k.c?(k===f?h=L(d.c.b,e.e):h=L(g.b.c.b,d.c).b,k.c?ja(k,h):(e=c,f=la(c,f,h),f.f=R(f).f+f.a.f,f.d=oa(e,f.f)),ya(c,d)):U(c,f,d.c,d.c,null,!0)}return}c=ka(c.i);e=S(c);f=e.a;e=T(a,
e,null);if(e.c===f){var f=e,e=f.c,g=S(c),h=c.a,k=g.a,l=!1;h.b.a!==k.b.a&&wa(a,c);t(h.a,a.a)&&(E(J(e),h),c=ka(c),e=S(c).a,T(a,S(c),g),l=!0);t(k.a,a.a)&&(E(f,J(k)),f=T(a,g,null),l=!0);l?U(a,c,f.c,e,e,!0):(u(k.a,h.a)?d=J(k):d=h,d=L(f.c.b,d),U(a,c,d,d.c,d.c,!1),d.b.i.c=!0,ra(a,c))}else U(a,c,e.c,f,f,!0)}function za(a,b){var c=new ma,d=ea(a.b);d.a.b=O;d.a.a=b;d.b.a.b=-O;d.b.a.a=b;a.a=d.b.a;c.a=d;c.f=0;c.d=!1;c.c=!1;c.h=!0;c.b=!1;d=a.f;d=na(d,d.a,c);c.e=d};function Aa(a){this.a=new Ba;this.b=a;this.c=ia}function na(a,b,c){do b=b.c;while(null!==b.b&&!a.c(a.b,b.b,c));a=new Ba(c,b.a,b);b.a.c=a;return b.a=a};function Ba(a,b,c){this.b=a||null;this.a=b||this;this.c=c||this};function X(){this.d=Y;this.p=this.b=this.q=null;this.j=[0,0,0];this.s=100130;this.n=!1;this.o=this.a=this.e=this.f=null;this.m=!1;this.c=this.r=this.i=this.k=this.l=this.h=null}var Y=0;n=X.prototype;n.x=function(){Z(this,Y)};n.B=function(a,b){switch(a){case 100142:return;case 100140:switch(b){case 100130:case 100131:case 100132:case 100133:case 100134:this.s=b;return}break;case 100141:this.m=!!b;return;default:V(this,100900);return}V(this,100901)};
n.y=function(a){switch(a){case 100142:return 0;case 100140:return this.s;case 100141:return this.m;default:V(this,100900)}return!1};n.A=function(a,b,c){this.j[0]=a;this.j[1]=b;this.j[2]=c};
n.z=function(a,b){var c=b?b:null;switch(a){case 100100:case 100106:this.h=c;break;case 100104:case 100110:this.l=c;break;case 100101:case 100107:this.k=c;break;case 100102:case 100108:this.i=c;break;case 100103:case 100109:this.p=c;break;case 100105:case 100111:this.o=c;break;case 100112:this.r=c;break;default:V(this,100900)}};
n.C=function(a,b){var c=!1,d=[0,0,0];Z(this,2);for(var e=0;3>e;++e){var f=a[e];-1E150>f&&(f=-1E150,c=!0);1E150<f&&(f=1E150,c=!0);d[e]=f}c&&V(this,100155);c=this.q;null===c?(c=ea(this.b),E(c,c.b)):(K(c),c=c.e);c.a.d=b;c.a.g[0]=d[0];c.a.g[1]=d[1];c.a.g[2]=d[2];c.f=1;c.b.f=-1;this.q=c};n.u=function(a){Z(this,Y);this.d=1;this.b=new Ca;this.c=a};n.t=function(){Z(this,1);this.d=2;this.q=null};n.v=function(){Z(this,2);this.d=1};
n.w=function(){Z(this,1);this.d=Y;var a=this.j[0],b=this.j[1],c=this.j[2],d=!1,e=[a,b,c];if(0===a&&0===b&&0===c){for(var b=[-2*1E150,-2*1E150,-2*1E150],f=[2*1E150,2*1E150,2*1E150],c=[],g=[],d=this.b.c,a=d.e;a!==d;a=a.e)for(var h=0;3>h;++h){var k=a.g[h];k<f[h]&&(f[h]=k,g[h]=a);k>b[h]&&(b[h]=k,c[h]=a)}a=0;b[1]-f[1]>b[0]-f[0]&&(a=1);b[2]-f[2]>b[a]-f[a]&&(a=2);if(f[a]>=b[a])e[0]=0,e[1]=0,e[2]=1;else{b=0;f=g[a];c=c[a];g=[0,0,0];f=[f.g[0]-c.g[0],f.g[1]-c.g[1],f.g[2]-c.g[2]];h=[0,0,0];for(a=d.e;a!==d;a=
a.e)h[0]=a.g[0]-c.g[0],h[1]=a.g[1]-c.g[1],h[2]=a.g[2]-c.g[2],g[0]=f[1]*h[2]-f[2]*h[1],g[1]=f[2]*h[0]-f[0]*h[2],g[2]=f[0]*h[1]-f[1]*h[0],k=g[0]*g[0]+g[1]*g[1]+g[2]*g[2],k>b&&(b=k,e[0]=g[0],e[1]=g[1],e[2]=g[2]);0>=b&&(e[0]=e[1]=e[2]=0,e[ha(f)]=1)}d=!0}g=ha(e);a=this.b.c;b=(g+1)%3;c=(g+2)%3;g=0<e[g]?1:-1;for(e=a.e;e!==a;e=e.e)e.b=e.g[b],e.a=g*e.g[c];if(d){e=0;d=this.b.a;for(a=d.b;a!==d;a=a.b)if(b=a.a,!(0>=b.f)){do e+=(b.a.b-b.b.a.b)*(b.a.a+b.b.a.a),b=b.e;while(b!==a.a)}if(0>e)for(e=this.b.c,d=e.e;d!==
e;d=d.e)d.a=-d.a}this.n=!1;e=this.b.b;for(a=e.h;a!==e;a=d)if(d=a.h,b=a.e,t(a.a,a.b.a)&&a.e.e!==a&&(ta(this,b,a),I(a),a=b,b=a.e),b.e===a){if(b!==a){if(b===d||b===d.b)d=d.h;I(b)}if(a===d||a===d.b)d=d.h;I(a)}this.e=e=new Da;d=this.b.c;for(a=d.e;a!==d;a=a.e)a.h=xa(e,a);Ea(e);this.f=new Aa(this);za(this,-O);for(za(this,O);null!==(e=Fa(this.e));){for(;;){a:if(a=this.e,0===a.a)d=Ga(a.b);else if(d=a.c[a.d[a.a-1]],0!==a.b.a&&(a=Ga(a.b),u(a,d))){d=a;break a}if(null===d||!t(d,e))break;d=Fa(this.e);ta(this,e.c,
d.c)}ya(this,e)}this.a=this.f.a.a.b.a.a;for(e=0;null!==(d=this.f.a.a.b);)d.h||++e,Q(d);this.f=null;e=this.e;e.b=null;e.d=null;this.e=e.c=null;e=this.b;for(a=e.a.b;a!==e.a;a=d)d=a.b,a=a.a,a.e.e===a&&(P(a.c,a),I(a));if(!this.n){e=this.b;if(this.m)for(a=e.b.h;a!==e.b;a=d)d=a.h,a.b.d.c!==a.d.c?a.f=a.d.c?1:-1:I(a);else for(a=e.a.b;a!==e.a;a=d)if(d=a.b,a.c){for(a=a.a;u(a.b.a,a.a);a=a.c.b);for(;u(a.a,a.b.a);a=a.e);b=a.c.b;for(c=void 0;a.e!==b;)if(u(a.b.a,b.a)){for(;b.e!==a&&(ca(b.e)||0>=x(b.a,b.b.a,b.e.b.a));)c=
L(b.e,b),b=c.b;b=b.c.b}else{for(;b.e!==a&&(da(a.c.b)||0<=x(a.b.a,a.a,a.c.b.a));)c=L(a,a.c.b),a=c.b;a=a.e}for(;b.e.e!==a;)c=L(b.e,b),b=c.b}if(this.h||this.i||this.k||this.l)if(this.m)for(e=this.b,d=e.a.b;d!==e.a;d=d.b){if(d.c){this.h&&this.h(2,this.c);a=d.a;do this.k&&this.k(a.a.d,this.c),a=a.e;while(a!==d.a);this.i&&this.i(this.c)}}else{e=this.b;d=!!this.l;a=!1;b=-1;for(c=e.a.d;c!==e.a;c=c.d)if(c.c){a||(this.h&&this.h(4,this.c),a=!0);g=c.a;do d&&(f=g.b.d.c?0:1,b!==f&&(b=f,this.l&&this.l(!!b,this.c))),
this.k&&this.k(g.a.d,this.c),g=g.e;while(g!==c.a)}a&&this.i&&this.i(this.c)}if(this.r){e=this.b;for(a=e.a.b;a!==e.a;a=d)if(d=a.b,!a.c){b=a.a;c=b.e;g=void 0;do g=c,c=g.e,g.d=null,null===g.b.d&&(g.c===g?F(g.a,null):(g.a.c=g.c,H(g,J(g))),f=g.b,f.c===f?F(f.a,null):(f.a.c=f.c,H(f,J(f))),fa(g));while(g!==b);b=a.d;a=a.b;a.d=b;b.b=a}this.r(this.b);this.c=this.b=null;return}}this.b=this.c=null};
function Z(a,b){if(a.d!==b)for(;a.d!==b;)if(a.d<b)switch(a.d){case Y:V(a,100151);a.u(null);break;case 1:V(a,100152),a.t()}else switch(a.d){case 2:V(a,100154);a.v();break;case 1:V(a,100153),a.w()}}function V(a,b){a.p&&a.p(b,a.c)};function ga(a,b){this.b=a||this;this.d=b||this;this.a=null;this.c=!1};function M(){this.h=this;this.i=this.d=this.a=this.e=this.c=this.b=null;this.f=0}function J(a){return a.b.e};function Ca(){this.c=new N;this.a=new ga;this.b=new M;this.d=new M;this.b.b=this.d;this.d.b=this.b};function N(a,b){this.e=a||this;this.f=b||this;this.d=this.c=null;this.g=[0,0,0];this.h=this.a=this.b=0};function Da(){this.c=[];this.d=null;this.a=0;this.e=!1;this.b=new Ha}function Ea(a){a.d=[];for(var b=0;b<a.a;b++)a.d[b]=b;a.d.sort(function(a){return function(b,e){return u(a[b],a[e])?1:-1}}(a.c));a.e=!0;Ia(a.b)}function xa(a,b){if(a.e){var c=a.b,d=++c.a;2*d>c.f&&(c.f*=2,c.c=Ja(c.c,c.f+1));var e;0===c.b?e=d:(e=c.b,c.b=c.c[c.b]);c.e[e]=b;c.c[e]=d;c.d[d]=e;c.h&&va(c,d);return e}c=a.a++;a.c[c]=b;return-(c+1)}
function Fa(a){if(0===a.a)return Ka(a.b);var b=a.c[a.d[a.a-1]];if(0!==a.b.a&&u(Ga(a.b),b))return Ka(a.b);do--a.a;while(0<a.a&&null===a.c[a.d[a.a-1]]);return b};function Ha(){this.d=Ja([0],33);this.e=[null,null];this.c=[0,0];this.a=0;this.f=32;this.b=0;this.h=!1;this.d[1]=1}function Ja(a,b){for(var c=Array(b),d=0;d<a.length;d++)c[d]=a[d];for(;d<b;d++)c[d]=0;return c}function Ia(a){for(var b=a.a;1<=b;--b)W(a,b);a.h=!0}function Ga(a){return a.e[a.d[1]]}function Ka(a){var b=a.d,c=a.e,d=a.c,e=b[1],f=c[e];0<a.a&&(b[1]=b[a.a],d[b[1]]=1,c[e]=null,d[e]=a.b,a.b=e,0<--a.a&&W(a,1));return f}
function W(a,b){for(var c=a.d,d=a.e,e=a.c,f=b,g=c[f];;){var h=f<<1;h<a.a&&u(d[c[h+1]],d[c[h]])&&(h+=1);var k=c[h];if(h>a.a||u(d[g],d[k])){c[f]=g;e[g]=f;break}c[f]=k;e[k]=f;f=h}}function va(a,b){for(var c=a.d,d=a.e,e=a.c,f=b,g=c[f];;){var h=f>>1,k=c[h];if(0===h||u(d[k],d[g])){c[f]=g;e[g]=f;break}c[f]=k;e[k]=f;f=h}};function ma(){this.e=this.a=null;this.f=0;this.c=this.b=this.h=this.d=!1}function S(a){return a.e.c.b}function R(a){return a.e.a.b};this.libtess={GluTesselator:X,windingRule:{GLU_TESS_WINDING_ODD:100130,GLU_TESS_WINDING_NONZERO:100131,GLU_TESS_WINDING_POSITIVE:100132,GLU_TESS_WINDING_NEGATIVE:100133,GLU_TESS_WINDING_ABS_GEQ_TWO:100134},primitiveType:{GL_LINE_LOOP:2,GL_TRIANGLES:4,GL_TRIANGLE_STRIP:5,GL_TRIANGLE_FAN:6},errorType:{GLU_TESS_MISSING_BEGIN_POLYGON:100151,GLU_TESS_MISSING_END_POLYGON:100153,GLU_TESS_MISSING_BEGIN_CONTOUR:100152,GLU_TESS_MISSING_END_CONTOUR:100154,GLU_TESS_COORD_TOO_LARGE:100155,GLU_TESS_NEED_COMBINE_CALLBACK:100156},
gluEnum:{GLU_TESS_MESH:100112,GLU_TESS_TOLERANCE:100142,GLU_TESS_WINDING_RULE:100140,GLU_TESS_BOUNDARY_ONLY:100141,GLU_INVALID_ENUM:100900,GLU_INVALID_VALUE:100901,GLU_TESS_BEGIN:100100,GLU_TESS_VERTEX:100101,GLU_TESS_END:100102,GLU_TESS_ERROR:100103,GLU_TESS_EDGE_FLAG:100104,GLU_TESS_COMBINE:100105,GLU_TESS_BEGIN_DATA:100106,GLU_TESS_VERTEX_DATA:100107,GLU_TESS_END_DATA:100108,GLU_TESS_ERROR_DATA:100109,GLU_TESS_EDGE_FLAG_DATA:100110,GLU_TESS_COMBINE_DATA:100111}};X.prototype.gluDeleteTess=X.prototype.x;
X.prototype.gluTessProperty=X.prototype.B;X.prototype.gluGetTessProperty=X.prototype.y;X.prototype.gluTessNormal=X.prototype.A;X.prototype.gluTessCallback=X.prototype.z;X.prototype.gluTessVertex=X.prototype.C;X.prototype.gluTessBeginPolygon=X.prototype.u;X.prototype.gluTessBeginContour=X.prototype.t;X.prototype.gluTessEndContour=X.prototype.v;X.prototype.gluTessEndPolygon=X.prototype.w; if (typeof module !== 'undefined') { module.exports = this.libtess; }

},{}],2:[function(require,module,exports){
// Graph-draw
// version: 2.0.2
// author: Manuel Baclet <mbaclet@gmail.com>
// license: MIT

'use strict';

var tess = new (require('./tessellator'))();

/* Stack class with no duplicates */

function TaskList() {
	this.list = [];
	this.hash = Object.create(null);
}
TaskList.prototype.push = function(index) {
	if (this.hash[index]) return;
	this.hash[index] = true;
	this.list.push(index);
};
TaskList.prototype.pop = function() {
	if (this.list.length) {
		var value = this.list.pop();
		delete this.hash[value];
		return value;
	} else return null;
};

/* Union-find functions */

function unionFindUnion(obj1, obj2) {
	var root1 = unionFindFind(obj1);
	var root2 = unionFindFind(obj2);
	if (root1 !== root2) {
		if (root1.rank < root2.rank) {
			root1.parent = root2;
		} else {
			root2.parent = root1;
			if (root1.rank === root2.rank) root1.rank += 1;
		}
	}
}

function unionFindFind(x) {
	if (x.parent !== x) x.parent = unionFindFind(x.parent);
	return x.parent;
}

/* Fast collision test for rectangles*/

function subTest(p1, p2 , r) {
	var position;
	var norm = norm2(p1, p2);
	var product, localPosition;
	for (var i = 0; i < 4; i++) {
		product = innerProduct(p1, p2, p1, r[i]);
		if (product <= 0) localPosition = -1;
		else if (product >= norm) localPosition = 1;
		else return false;
		if (i === 0) {
			position = localPosition;
		} else {
			if (localPosition !== position) {
				return false;
			}
		}
	}
	return true;
}

function rectanglesCollide(r1, r2) {
	return !(subTest(r1[0], r1[1], r2) || subTest(r1[1], r1[2], r2) || subTest(r2[0], r2[1], r1) || subTest(r2[1], r2[2], r1));
}

/* Geometry helpers */

function innerProduct(p1, p2, p3, p4) {
	return (p2[0] - p1[0]) * (p4[0] - p3[0]) + (p2[1] - p1[1]) * (p4[1] - p3[1]);
}
function norm2(p1, p2) {
	var dx = p2[0] - p1[0];
	var dy = p2[1] - p1[1];
	return dx * dx + dy * dy;
}

function segmentIntersection(p1, p2, p3, p4) {
	// find intersection point of [p1, p2] and [p3, p4], supposing it exists
	var dx = p2[0] - p1[0];
	var dy = p2[1] - p1[1];
	var dx2 = p4[0] - p3[0];
	var dy2 = p4[1] - p3[1];
	var lambda = ((p2[0] - p3[0]) * dy - dx * (p2[1] - p3[1])) /
		(dx2 * dy - dx * dy2);
	return [p3[0] + lambda * dx2, p3[1] + lambda * dy2];
}
function rayIntersection(p1, p2, p3, p4) {
	// find intersection point of (p1, p2] and (p3, p4]
	var dx = p2[0] - p1[0];
	var dy = p2[1] - p1[1];
	var dx2 = p4[0] - p3[0];
	var dy2 = p4[1] - p3[1];
	var denom = dx2 * dy - dx * dy2;
	if (denom === 0) return {point: p1, valid: true};
	var lambda = ((p2[0] - p3[0]) * dy - dx * (p2[1] - p3[1])) / denom;
	var inter = [p3[0] + lambda * dx2, p3[1] + lambda * dy2];
	if (lambda > 1 || innerProduct(p2, inter, p2, p1) < 0) return {point: inter, valid: false};
	else return {point: inter, valid: true};
}

function getData(from, to, w) {
	var ux = to[0] - from[0];
	var uy = to[1] - from [1];
	var Nu = Math.sqrt(ux * ux + uy * uy);
	var theta = Math.acos(ux / Nu);
	if (uy < 0) theta *= -1;
	return {
		angle: theta,
		norm: Nu,
		dir: [ux, uy],
		ortho: [- w * uy / Nu, w * ux / Nu]
	};
}

/* main function */

function graphDraw(graph, width, cb, maxAngle) {
	var w = width / 2;
	maxAngle = Math.max(Math.PI, maxAngle || 2 * Math.PI);

	/* Data structures setup */

	var vertices = graph.vertices.map(function(coords) {
		return {
			coords: coords,
			neighList: []
		};
	});
	var edges = graph.edges.map(function(edge, index) {
		var from = edge[0];
		var to = edge[1];
		var vertexFrom = vertices[from];
		var vertexTo = vertices[to];
		var data = getData(vertexFrom.coords, vertexTo.coords, w);
		vertexFrom.neighList.push({
			to: to,
			angle: data.angle,
			dir: data.dir,
			ortho: data.ortho,
			index: index
		});
		vertexTo.neighList.push({
			to: from,
			angle: data.angle <= 0 ? data.angle + Math.PI : data.angle - Math.PI,
			dir: [-data.dir[0], -data.dir[1]],
			ortho: [-data.ortho[0], -data.ortho[1]],
			index: index
		});
		var obj = {
			rank: 0,
			edge: edge,
			points: {}
		};
		obj.points[to] = {};
		obj.points[from] = {};
		obj.parent = obj;
		return obj;
	});

	/* Build edges contour points */

	var toPostProcess = [];
	vertices.forEach(function(vertex, vindex) {
		var point = vertex.coords;
		var prepared = vertex.neighList;
		prepared.sort(function(a, b) {return a.angle - b.angle;});
		var n = prepared.length;
		if (n === 1) {
			var edge = prepared[0];
			var p1 = [point[0] + edge.ortho[0], point[1] + edge.ortho[1]];
			var p2 = [point[0] - edge.ortho[0], point[1] - edge.ortho[1]];
			var edgePoints = edges[edge.index].points;
			edgePoints[vindex].first_vertex = edge.index;
			edgePoints[vindex].last_vertex = edge.index;
			edgePoints[vindex].first = p1;
			edgePoints[vindex].remove_middle_first = true;
			edgePoints[vindex].remove_middle_last = true;
			edgePoints[vindex].last = p2;
		} else {
			prepared.forEach(function(edge, index) {
				var last = (index === n - 1);
				var next = prepared[last ? 0 : index + 1];
				var edgePoints = edges[edge.index].points;
				var nextPoints = edges[next.index].points;
				edgePoints[vindex].first_vertex = next.index;
				nextPoints[vindex].last_vertex = edge.index;
				var p1 = [point[0] + edge.ortho[0], point[1] + edge.ortho[1]];
				var p2 = [p1[0] + edge.dir[0], p1[1] + edge.dir[1]];
				var p3 = [point[0] - next.ortho[0], point[1] - next.ortho[1]];
				var p4 = [p3[0] + next.dir[0], p3[1] + next.dir[1]];
				var intersection = rayIntersection(p1, p2, p3, p4);
				var newPoint = intersection.point;
				if (intersection.valid) {
					var nextAngle = last ? next.angle + 2 * Math.PI : next.angle;
					if (nextAngle - edge.angle > maxAngle) {
						edgePoints[vindex].first = p1;
						nextPoints[vindex].last = p3;
						var vec = [newPoint[0] - point[0], newPoint[1] - point[1]];
						var invNorm = 1 / Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
						edgePoints[vindex].miter_first = nextPoints[vindex].miter_last = [
							point[0] + w * vec[0] * invNorm,
							point[1] + w * vec[1] * invNorm
						];
					} else {
						edgePoints[vindex].first = newPoint;
						nextPoints[vindex].last = newPoint;
					}
					if (n === 2) {
						edgePoints[vindex].remove_middle_first = true;
						nextPoints[vindex].remove_middle_last = true;
					}
				} else {
					var q1 = [newPoint[0] - edge.ortho[0], newPoint[1] - edge.ortho[1]];
					var q3 = [newPoint[0] + next.ortho[0], newPoint[1] + next.ortho[1]];

					toPostProcess.push({
						done: [edge.index, next.index],
						todo: [vindex, edge.to, next.to],
						rectangles: [[p1, newPoint, q1, point], [p3, newPoint, q3, point]]
					});

					edgePoints[vindex].first = p1;
					nextPoints[vindex].last = p3;
				}
			});
		}
	});

	/* Build each edge polygon */

	edges.forEach(function(obj) {
		var edge = obj.edge;
		var from = edge[0];
		var to = edge[1];
		var obj1 = obj.points[from];
		var obj2 = obj.points[to];
		var fromCoords = vertices[from].coords;
		var toCoords = vertices[to].coords;
		var newPoly = obj.polygon = [];

		if (innerProduct(obj1.last, obj2.first, fromCoords, toCoords) < 0) {
			var i1 = obj1.last_vertex;
			var i2 = obj2.first_vertex;
			unionFindUnion(edges[i1], edges[i2]);
			newPoly.push(segmentIntersection(obj1.miter_last || fromCoords, obj1.last, obj2.first, obj2.miter_first || toCoords));
		} else {
			newPoly.push(obj1.last, obj2.first);
		}
		if (obj2.miter_first) newPoly.push(obj2.miter_first);
		if (!(obj2.remove_middle_first && obj2.remove_middle_last)) newPoly.push(toCoords);
		if (obj2.miter_last) newPoly.push(obj2.miter_last);
		if (innerProduct(obj1.first, obj2.last, fromCoords, toCoords) < 0) {
			var i1 = obj1.first_vertex;
			var i2 = obj2.last_vertex;
			unionFindUnion(edges[i1], edges[i2]);
			newPoly.push(segmentIntersection(obj1.first, obj1.miter_first || fromCoords, obj2.miter_last || toCoords, obj2.last));
		} else {
			newPoly.push(obj2.last, obj1.first);
		}
		if (obj1.miter_first) newPoly.push(obj1.miter_first);
		if (!(obj1.remove_middle_first && obj1.remove_middle_last)) newPoly.push(fromCoords);
		if (obj1.miter_last) newPoly.push(obj1.miter_last);
	});

	/* Find locally overlapping edges */

	var shapeMemo = Object.create(null);

	toPostProcess.forEach(function(obj) {
		var done = Object.create(null);
		var i1 = obj.done[0];
		var i2 = obj.done[1];
		var e1 = edges[i1];
		var e2 = edges[i2];
		unionFindUnion(e1, e2);
		done[i1] = true;
		done[i2] = true;
		var todo = new TaskList();
		obj.todo.forEach(function(vertex) {
			todo.push(vertex);
		});
		var from;
		var r1 = obj.rectangles[0];
		var r2 = obj.rectangles[1];
		while((from = todo.pop()) !== null) {
			vertices[from].neighList.forEach(function(neigh) {
				var index = neigh.index;
				if (done[index]) return;
				var to = neigh.to;
				var rectangle = shapeMemo[index];
				if (!rectangle) {
					var fromCoords = vertices[from].coords;
					var toCoords = vertices[to].coords;
					var p1 = [fromCoords[0] + neigh.ortho[0], fromCoords[1] + neigh.ortho[1]];
					var p2 = [toCoords[0] + neigh.ortho[0], toCoords[1] + neigh.ortho[1]];
					var p3 = [toCoords[0] - neigh.ortho[0], toCoords[1] - neigh.ortho[1]];
					var p4 = [fromCoords[0] - neigh.ortho[0], fromCoords[1] - neigh.ortho[1]];
					rectangle = shapeMemo[index] = [p1, p2, p3, p4];
				}
				done[index] = true;
				if (rectanglesCollide(rectangle, r1) || rectanglesCollide(rectangle, r2)) {
					unionFindUnion(e1, edges[index]);
					todo.push(to);
				}
			});
		}
	});

	/* Execute cb on each polygon */

	var needUnion = [];
	edges.forEach(function(obj, index) {
		if (obj.rank > 0 && obj.parent === obj) {
			obj.union = obj.union || [];
			obj.union.push(obj.polygon);
			needUnion.push(index);
		} else {
			if (obj.parent === obj) {
				cb(obj.polygon);
			} else {
				var root = unionFindFind(obj);
				root.union = root.union || [];
				root.union.push(obj.polygon);
			}
		}
	});

	tess._cb = cb;
	needUnion.forEach(function(index) {
		tess.run(edges[index].union);
	});
	delete tess._cb;
}

module.exports = graphDraw;

},{"./tessellator":3}],3:[function(require,module,exports){
// Graph-draw Tesselator
// author: Manuel Baclet <mbaclet@gmail.com>
// license: MIT

'use strict';

var tess;

try {
  tess = require('libtess');
} catch (e) {
	if (typeof window.libtess === 'undefined') {
			throw new Error('libtess must be loaded before graph-draw');
	}
  tess = window.libtess;
}

var GluTesselator = tess.GluTesselator, gluEnum = tess.gluEnum, primitiveType = tess.primitiveType;

var GLU_TESS_BOUNDARY_ONLY = gluEnum.GLU_TESS_BOUNDARY_ONLY;
var GL_LINE_LOOP = tess.primitiveType.GL_LINE_LOOP;

function Tesselator() {
	GluTesselator.call(this);

	this.gluTessNormal(0, 0, 1);
	this.gluTessProperty(gluEnum.GLU_TESS_WINDING_RULE, tess.windingRule.GLU_TESS_WINDING_POSITIVE);

	this.gluTessCallback(gluEnum.GLU_TESS_VERTEX_DATA, this._vertex);
	this.gluTessCallback(gluEnum.GLU_TESS_BEGIN, this._begin);
	this.gluTessCallback(gluEnum.GLU_TESS_END, this._end);
	this.gluTessCallback(gluEnum.GLU_TESS_ERROR, this._error);
	this.gluTessCallback(gluEnum.GLU_TESS_COMBINE, this._combine);
}

Tesselator.prototype = Object.create(GluTesselator.prototype);
Tesselator.prototype.constructor = Tesselator;

Tesselator.prototype.run = function(polygons) {
	var self = this;
	this.gluTessBeginPolygon();
	polygons.forEach(function(poly) {
		self.gluTessBeginContour();
		poly.forEach(function(point) {
			self.gluTessVertex([point[0], point[1], 0], point);
		});
		self.gluTessEndContour();
	});
	this.gluTessProperty(GLU_TESS_BOUNDARY_ONLY, true);
	this._output = [];
	this.gluTessEndPolygon();

	this.gluTessBeginPolygon();
	this._output.forEach(function(poly) {
		self.gluTessBeginContour();
		poly.forEach(function(point) {
			self.gluTessVertex([point[0], point[1], 0], point);
		});
		self.gluTessEndContour();
	});
	this.gluTessProperty(GLU_TESS_BOUNDARY_ONLY, false);
	this.gluTessEndPolygon();
};

Tesselator.prototype.clean = function() {
	this._accu = [];
	this._output = [];
};

Tesselator.prototype._begin = function(type) {
	this._primitiveType = type;
	this._accu = [];
};

Tesselator.prototype._vertex = function(v) {
	this._accu.push(v);
};

Tesselator.prototype._error = function(err) {
	console.error('libtess error: ' + err);
};

Tesselator.prototype._combine = function(v) {
	return [v[0], v[1]];
};

Tesselator.prototype._end = function() {
	if (this._primitiveType === GL_LINE_LOOP) {
		this._output.push(this._accu);
	} else {
		for (var i = 0; i < this._accu.length; i += 3) {
			this._cb([this._accu[i], this._accu[i+1], this._accu[i+2]]);
		}
	}
};

module.exports = Tesselator;

},{"libtess":1}]},{},[2])(2)
});
