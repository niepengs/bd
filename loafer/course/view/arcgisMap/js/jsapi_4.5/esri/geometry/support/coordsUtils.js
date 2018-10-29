// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define([],function(){var v=function(a,d,b){var c=b[0];b=b[1];for(var f=0,l,g,k,e,h=0,m=d.length;h<m;h++)f++,f===m&&(f=0),l=d[h][0],g=d[f][0],k=d[h][1],e=d[f][1],(k<b&&e>=b||e<b&&k>=b)&&l+(b-k)/(e-k)*(g-l)<c&&(a=!a);return a},y=function(a,d,b,c){for(var f=0,l=0,g=0,k,e,h,m,n,t,q,p,r,u=0,w=0,x=0,v=d.length-1;x<v;x++)k=d[x],e=k[0],h=k[1],m=k[2],n=d[x+1],t=n[0],q=n[1],p=n[2],r=e*q-t*h,u+=r,f+=(e+t)*r,l+=(h+q)*r,b&&2<k.length&&2<n.length&&(r=e*p-t*m,g+=(m+p)*r,w+=r),e<c[0]&&(c[0]=e),e>c[1]&&(c[1]=e),h<
c[2]&&(c[2]=h),h>c[3]&&(c[3]=h),b&&(m<c[4]&&(c[4]=m),m>c[5]&&(c[5]=m));0<u&&(u*=-1);0<w&&(w*=-1);u?(a[0]=f,a[1]=l,a[2]=.5*u,b?(a[3]=g,a[4]=.5*w):a.length=3):a.length=0;return a},z=function(a,d){for(var b=0,c=0,f=0,l=0,g=d?[0,0,0]:[0,0],k=d?[0,0,0]:[0,0],e,h,m,n=0,t=a.length;n<t-1;n++)if(e=a[n],h=a[n+1],e&&h){g[0]=e[0];g[1]=e[1];k[0]=h[0];k[1]=h[1];d&&2<e.length&&2<h.length&&(g[2]=e[2],k[2]=h[2]);m=k[0]-g[0];var q=k[1]-g[1],p=0;2<g.length&&2<k.length&&(p=g[2]-k[2]);if(m=Math.sqrt(m*m+q*q+p*p))b+=m,
q=e[0]+.5*(h[0]-e[0]),p=e[1]+.5*(h[1]-e[1]),e=2<e.length&&2<h.length?[q,p,e[2]+.5*(h[2]-e[2])]:[q,p],c+=m*e[0],f+=m*e[1],d&&2<e.length&&(l+=m*e[2])}return 0<b?d?[c/b,f/b,l/b]:[c/b,f/b]:a.length?a[0]:null};return{fromGeom:function(a){if(!a)return null;if(Array.isArray(a))return a;var d=a.hasZ,b=a.hasM;if("point"===a.type)return b&&d?[a.x,a.y,a.z,a.m]:d?[a.x,a.y,a.z]:b?[a.x,a.y,a.m]:[a.x,a.y];if("polygon"===a.type)return a.rings.slice(0);if("polyline"===a.type)return a.path.slice(0);if("multipoint"===
a.type)return a.points.slice(0);if("extent"===a.type){a=a.clone().normalize();if(!a)return null;d=b=!1;a.map(function(a){a.hasZ&&(d=!0);a.hasM&&(b=!0)});return a.map(function(a){var c=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];if(d&&a.hasZ)for(var l=.5*(a.zmax-a.zmin),g=0;g<c.length;g++)c[g].push(l);if(b&&a.hasM)for(a=.5*(a.mmax-a.mmin),g=0;g<c.length;g++)c[g].push(a);return c})}return null},contains:function(a,d){if(!a)return!1;if(!Array.isArray(a[0][0]))return v(!1,
a,d);for(var b=!1,c=0,f=a.length;c<f;c++)b=v(b,a[c],d);return b},centroid:function(a,d,b){var c=[],f;a.length=0;for(var l=b?[Infinity,-Infinity,Infinity,-Infinity,Infinity,-Infinity]:[Infinity,-Infinity,Infinity,-Infinity],g=0,k=d.length;g<k;g++)f=y([],d[g],b,l),f.length&&c.push(f);c.sort(function(a,c){var d=a[2]-c[2];0===d&&b&&(d=a[4]-c[4]);return d});c.length&&(f=6*c[0][2],a[0]=c[0][0]/f,a[1]=c[0][1]/f,b&&(f=6*c[0][4],a[2]=0!==f?c[0][3]/f:0),a[0]<l[0]||a[0]>l[1]||a[1]<l[2]||a[1]>l[3]||b&&(a[2]<
l[4]||a[2]>l[5]))&&(a.length=0);!a.length&&(d=d[0]&&d[0].length?z(d[0],b):null)&&(a[0]=d[0],a[1]=d[1],b&&2<d.length&&(a[2]=d[2]));return a},isClockwise:function(a){for(var d=0,b=0,c=b+1,f=a.length;b<f;b++,c+=1%f)d+=a[b][0]*a[c][1]-a[c][0]*a[b][1];return 0>=.5*d}}});