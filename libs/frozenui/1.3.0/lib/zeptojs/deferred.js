!function(a){function b(c){var d=[["resolve","done",a.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",a.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",a.Callbacks({memory:1})]],e="pending",f={state:function(){return e},always:function(){return g.done(arguments).fail(arguments),this},then:function(){var c=arguments;return b(function(b){a.each(d,function(d,e){var h=a.isFunction(c[d])&&c[d];g[e[1]](function(){var c=h&&h.apply(this,arguments);if(c&&a.isFunction(c.promise))c.promise().done(b.resolve).fail(b.reject).progress(b.notify);else{var d=this===f?b.promise():this,g=h?[c]:arguments;b[e[0]+"With"](d,g)}})}),c=null}).promise()},promise:function(b){return null!=b?a.extend(b,f):f}},g={};return a.each(d,function(a,b){var c=b[2],h=b[3];f[b[1]]=c.add,h&&c.add(function(){e=h},d[1^a][2].disable,d[2][2].lock),g[b[0]]=function(){return g[b[0]+"With"](this===g?f:this,arguments),this},g[b[0]+"With"]=c.fireWith}),f.promise(g),c&&c.call(g,g),g}var c=Array.prototype.slice;a.when=function(d){var e,f,g,h=c.call(arguments),i=h.length,j=0,k=1!==i||d&&a.isFunction(d.promise)?i:0,l=1===k?d:b(),m=function(a,b,d){return function(f){b[a]=this,d[a]=arguments.length>1?c.call(arguments):f,d===e?l.notifyWith(b,d):--k||l.resolveWith(b,d)}};if(i>1)for(e=new Array(i),f=new Array(i),g=new Array(i);i>j;++j)h[j]&&a.isFunction(h[j].promise)?h[j].promise().done(m(j,g,h)).fail(l.reject).progress(m(j,f,e)):--k;return k||l.resolveWith(g,h),l.promise()},a.Deferred=b}(Zepto);