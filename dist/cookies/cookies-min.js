"use strict";var cookie=function(e){var t=function(t,r,i){var o="";if(i){var u=new Date;u.setTime(u.getTime()+24*i*60*60*1e3),o="; expires="+u.toUTCString()}return e.cookie=t+"="+r+o+"; path=/",n.length>0?"cookie create => Name: "+t+", Value: "+r+", Expires in: "+i+" days":null},n=function(t){var n=("; "+e.cookie).split("; "+t+"=");return 2==n.length?n.pop().split(";").shift():null};return{create:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return t(e,n,r)},read:function(e){return n(e)},delete:function(e){return t(e,"",-1),n.length>0?"Cookie Deleted":null}}}(document);