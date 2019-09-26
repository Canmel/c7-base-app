var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l2']])
Z(z[0])
Z([3,'__e'])
Z(z[4])
Z(z[4])
Z([[4],[[5],[[5],[1,'cu-item list-item']],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[[2,'+'],[1,'move-box-'],[[7],[3,'index']]]],[1,'move-cur'],[1,'']]]])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'ListTouchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'ListTouchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'ListTouchEnd']],[[4],[[5],[[5],[1,'$event']],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'datas']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'+'],[1,'move-box-'],[[7],[3,'index']]])
Z([3,'height:170rpx;'])
Z(z[4])
Z([3,'content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'clickHandler']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'datas']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'height:170rpx;width:70%;'])
Z([3,'pi'])
Z([3,'prop'])
Z([[6],[[7],[3,'item']],[3,'l0']])
Z(z[15])
Z([[2,'<'],[[7],[3,'pi']],[1,3]])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'desc']])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'options']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-746bbea8'])
Z([3,'width:100%;'])
Z([[7],[3,'showFilter']])
Z([[2,'&&'],[[7],[3,'isF']],[[7],[3,'isBlock']]])
Z([[2,'>'],[[6],[[7],[3,'hList']],[3,'length']],[1,0]])
Z([[7],[3,'showWant']])
Z([[2,'&&'],[[7],[3,'isF']],[[2,'!'],[[7],[3,'isBlock']]]])
Z(z[4])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'formData']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'full'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^showbox']],[[4],[[5],[[4],[[5],[1,'toshow']]]]]]]],[[4],[[5],[[5],[1,'^search']],[[4],[[5],[[4],[[5],[1,'search']]]]]]]]])
Z([1,false])
Z(z[5])
Z([1,true])
Z([3,'width:100%;'])
Z([3,'1'])
Z([[7],[3,'isShowIndexPage']])
Z(z[1])
Z(z[2])
Z(z[2])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^handler']],[[4],[[5],[[4],[[5],[1,'optHandler']]]]]]]],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'itemClick']]]]]]]]])
Z([[7],[3,'mData']])
Z([3,'true'])
Z([3,'2'])
Z([[2,'&&'],[[7],[3,'isShowIndexPage']],[[7],[3,'showLoadMore']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'provider']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-master'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[[5],[[5],[1,'right']],[1,'content']],[1,'right']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-master'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[[5],[[5],[1,'right']],[1,'content']],[1,'right']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-master'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[[5],[[5],[1,'right']],[1,'content']],[1,'right']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-master'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[[5],[[5],[1,'right']],[1,'content']],[1,'right']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'btn-row'])
Z([[2,'!'],[[7],[3,'hasLogin']]])
Z([[7],[3,'hasLogin']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.wxml','./components/m-details/m-details.wxml','./components/m-icon/m-icon.wxml','./components/m-text-list/m-text-list.wxml','./components/zy-search/zy-search.wxml','./pages/common/services/services.wxml','./pages/login/login.wxml','./pages/manage/log/log.wxml','./pages/manage/menu/menu.wxml','./pages/manage/role/role.wxml','./pages/manage/user/detail/detail.wxml','./pages/manage/user/user.wxml','./pages/profile/profile.wxml','./pages/tabBar/analysis/analysis.wxml','./pages/tabBar/main/main.wxml','./pages/tabBar/manage/manage.wxml','./pages/tabBar/search/search.wxml','./pages/user/user.wxml','./pages/warning/warning.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_n('slot')
_rz(z,fE,'name',6,e,s,gg)
_(oD,fE)
_(xC,oD)
}
var cF=_n('slot')
_rz(z,cF,'name',7,e,s,gg)
_(oB,cF)
var hG=_n('slot')
_rz(z,hG,'name',8,e,s,gg)
_(oB,hG)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lK=_v()
_(r,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'view',['bindtouchend',4,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'data-target',5,'style',6],[],eN,tM,gg)
var cT=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2,'style',3],[],eN,tM,gg)
var hU=_v()
_(cT,hU)
var oV=function(oX,cW,lY,gg){
var t1=_v()
_(lY,t1)
if(_oz(z,19,oX,cW,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
return lY
}
hU.wxXCkey=2
_2z(z,17,oV,eN,tM,gg,hU,'prop','pi','pi')
_(xQ,cT)
var oR=_v()
_(xQ,oR)
if(_oz(z,20,eN,tM,gg)){oR.wxVkey=1
}
var fS=_v()
_(xQ,fS)
if(_oz(z,21,eN,tM,gg)){fS.wxVkey=1
}
oR.wxXCkey=1
fS.wxXCkey=1
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,2,aL,e,s,gg,lK,'item','index','index')
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var b3=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,2,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,3,e,s,gg)){x5.wxVkey=1
var f7=_v()
_(x5,f7)
if(_oz(z,4,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(x5,c8)
if(_oz(z,5,e,s,gg)){c8.wxVkey=1
}
f7.wxXCkey=1
c8.wxXCkey=1
}
var o6=_v()
_(b3,o6)
if(_oz(z,6,e,s,gg)){o6.wxVkey=1
var h9=_v()
_(o6,h9)
if(_oz(z,7,e,s,gg)){h9.wxVkey=1
}
var o0=_v()
_(o6,o0)
if(_oz(z,8,e,s,gg)){o0.wxVkey=1
}
h9.wxXCkey=1
o0.wxXCkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
_(r,b3)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var bGB=_mz(z,'m-details',['bind:__l',0,'formData',1,'vueId',1],[],e,s,gg)
_(r,bGB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var xIB=_n('view')
_rz(z,xIB,'class',0,e,s,gg)
var cLB=_mz(z,'zy-search',['bind:__l',1,'bind:search',1,'bind:showbox',2,'data-event-opts',3,'isBlock',4,'isFocus',5,'showWant',6,'style',7,'vueId',8],[],e,s,gg)
_(xIB,cLB)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,10,e,s,gg)){oJB.wxVkey=1
var hMB=_mz(z,'m-text-list',['bind:__l',11,'bind:click',1,'bind:handler',2,'data-event-opts',3,'datas',4,'option',5,'vueId',6],[],e,s,gg)
_(oJB,hMB)
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,18,e,s,gg)){fKB.wxVkey=1
}
oJB.wxXCkey=1
oJB.wxXCkey=3
fKB.wxXCkey=1
_(r,xIB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var cOB=_v()
_(r,cOB)
if(_oz(z,0,e,s,gg)){cOB.wxVkey=1
}
cOB.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var lQB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(r,lQB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var tSB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(r,tSB)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var bUB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(r,bUB)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var xWB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(r,xWB)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var fYB=_n('view')
_rz(z,fYB,'class',0,e,s,gg)
var cZB=_v()
_(fYB,cZB)
if(_oz(z,1,e,s,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(fYB,h1B)
if(_oz(z,2,e,s,gg)){h1B.wxVkey=1
}
cZB.wxXCkey=1
h1B.wxXCkey=1
_(r,fYB)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabBar/main/main","pages/login/login","pages/user/user","pages/tabBar/search/search","pages/tabBar/analysis/analysis","pages/tabBar/manage/manage","pages/common/services/services","pages/warning/warning","pages/profile/profile","pages/manage/user/user","pages/manage/role/role","pages/manage/menu/menu","pages/manage/log/log","pages/manage/user/detail/detail"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#01c0c8","backgroundColor":"#01c0c8"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabBar/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/tabBar/search/search","text":"实时查询","iconPath":"static/img/extuiIndex.png","selectedIconPath":"static/img/extuiHL.png"},{"pagePath":"pages/tabBar/analysis/analysis","text":"统计分析","iconPath":"static/img/templateIndex.png","selectedIconPath":"static/img/templateHL.png"},{"pagePath":"pages/tabBar/manage/manage","text":"系统管理","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"c7","compilerVersion":"2.3.3","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/cu-custom.wxml']=$gwx('./colorui/components/cu-custom.wxml');

__wxAppCode__['components/m-details/m-details.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-details/m-details.wxml']=$gwx('./components/m-details/m-details.wxml');

__wxAppCode__['components/m-icon/m-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-icon/m-icon.wxml']=$gwx('./components/m-icon/m-icon.wxml');

__wxAppCode__['components/m-text-list/m-text-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-text-list/m-text-list.wxml']=$gwx('./components/m-text-list/m-text-list.wxml');

__wxAppCode__['components/zy-search/zy-search.json']={"usingComponents":{"m-icon":"/components/m-icon/m-icon"},"component":true};
__wxAppCode__['components/zy-search/zy-search.wxml']=$gwx('./components/zy-search/zy-search.wxml');

__wxAppCode__['pages/common/services/services.json']={"navigationBarTitleText":"服务器选择","usingComponents":{}};
__wxAppCode__['pages/common/services/services.wxml']=$gwx('./pages/common/services/services.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/manage/log/log.json']={"navigationBarTitleText":"日志管理","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/manage/log/log.wxml']=$gwx('./pages/manage/log/log.wxml');

__wxAppCode__['pages/manage/menu/menu.json']={"navigationBarTitleText":"菜单管理","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/manage/menu/menu.wxml']=$gwx('./pages/manage/menu/menu.wxml');

__wxAppCode__['pages/manage/role/role.json']={"navigationBarTitleText":"角色管理","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/manage/role/role.wxml']=$gwx('./pages/manage/role/role.wxml');

__wxAppCode__['pages/manage/user/detail/detail.json']={"navigationBarTitleText":"用户详情","enablePullDownRefresh":true,"usingComponents":{"m-details":"/components/m-details/m-details"}};
__wxAppCode__['pages/manage/user/detail/detail.wxml']=$gwx('./pages/manage/user/detail/detail.wxml');

__wxAppCode__['pages/manage/user/user.json']={"navigationBarTitleText":"用户管理","enablePullDownRefresh":true,"usingComponents":{"m-text-list":"/components/m-text-list/m-text-list","zy-search":"/components/zy-search/zy-search"}};
__wxAppCode__['pages/manage/user/user.wxml']=$gwx('./pages/manage/user/user.wxml');

__wxAppCode__['pages/profile/profile.json']={"navigationBarTitleText":"个人信息","usingComponents":{}};
__wxAppCode__['pages/profile/profile.wxml']=$gwx('./pages/profile/profile.wxml');

__wxAppCode__['pages/tabBar/analysis/analysis.json']={"navigationBarTitleText":"统计分析","navigationStyle":"custom","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/tabBar/analysis/analysis.wxml']=$gwx('./pages/tabBar/analysis/analysis.wxml');

__wxAppCode__['pages/tabBar/main/main.json']={"navigationBarTitleText":"首页","navigationStyle":"custom","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/tabBar/main/main.wxml']=$gwx('./pages/tabBar/main/main.wxml');

__wxAppCode__['pages/tabBar/manage/manage.json']={"navigationBarTitleText":"管理","navigationStyle":"custom","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/tabBar/manage/manage.wxml']=$gwx('./pages/tabBar/manage/manage.wxml');

__wxAppCode__['pages/tabBar/search/search.json']={"navigationBarTitleText":"实时查询","navigationStyle":"custom","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/tabBar/search/search.wxml']=$gwx('./pages/tabBar/search/search.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"我的","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/warning/warning.json']={"navigationBarTitleText":"告警信息","usingComponents":{}};
__wxAppCode__['pages/warning/warning.wxml']=$gwx('./pages/warning/warning.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0e7c":function(t,e,o){"use strict";(function(t){o("e399"),o("921b");var e=a(o("66fd")),n=a(o("b2f4")),u=a(o("394b")),r=o("8f21"),c=o("c41d");function a(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){i(t,e,o[e])})}return t}function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}e.default.config.productionTip=!1,e.default.prototype.$store=u.default;var l=function(){return o.e("colorui/components/cu-custom").then(o.bind(null,"bd96"))};e.default.component("cu-custom",l),e.default.prototype.$http=r.http,e.default.prototype.$transfer=c.transfer,e.default.config.productionTip=!1,n.default.mpType="app";var f=new e.default(s({store:u.default},n.default));t(f).$mount()}).call(this,o("6e42")["createApp"])},"4e10":function(t,e,o){"use strict";o.r(e);var n=o("c0cc"),u=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=u.a},"9c4a":function(t,e,o){"use strict";var n=o("c80c"),u=o.n(n);u.a},b2f4:function(t,e,o){"use strict";o.r(e);var n=o("4e10");for(var u in n)"default"!==u&&function(t){o.d(e,t,function(){return n[t]})}(u);o("9c4a");var r,c,a=o("2877"),s=Object(a["a"])(n["default"],r,c,!1,null,null,null);e["default"]=s.exports},c0cc:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(o("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{title:"push",provider:[],pushServer:"http://demo.dcloud.net.cn/push/?",tranMsg:""}},onLaunch:function(){console.log(t(1," at App.vue:13")),this.openPush(),n.getSystemInfo({success:function(t){u.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?u.default.prototype.CustomBar=t.statusBarHeight+50:u.default.prototype.CustomBar=t.statusBarHeight+45}})},onShow:function(){console.log(t("App Show2"," at App.vue:42"))},onHide:function(){console.log(t("App Hide"," at App.vue:45"))},onLoad:function(){var e=this;console.log(t(3," at App.vue:48")),n.getProvider({service:"push",success:function(o){console.log(t("success",o," at App.vue:52")),e.provider=o.provider},fail:function(e){console.log(t("获取推送通道失败",e," at App.vue:56"))}})},methods:{openPush:function(){var t=this;n.subscribePush({provider:this.provider[0],success:function(e){n.showToast({title:"已开启push接收"}),t.listenTranMsg()}})},listenTranMsg:function(){var e=this,o=plus.push.getClientInfo();console.log(t(o," at App.vue:74")),n.onPush({provider:this.provider[0],success:function(t){n.showToast({title:"开始监听透传数据"})},callback:function(t){n.showToast({title:"接收到透传数据"}),e.tranMsg=JSON.stringify(t.data)}})}}};e.default=c}).call(this,o("0de9")["default"],o("6e42")["default"])},c80c:function(t,e,o){}},[["0e7c","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, a = t[0], u = t[1], s = t[2], l = 0, m = []; l < a.length; l++) {
      o = a[l], c[o] && m.push(c[o][0]), c[o] = 0;
    }

    for (r in u) {
      Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    }

    p && p(t);

    while (m.length) {
      m.shift()();
    }

    return i.push.apply(i, s || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== c[a] && (r = !1);
      }

      r && (i.splice(t--, 1), e = u(u.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      c = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return u.p + "" + e + ".js";
  }

  function u(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports;
  }

  u.e = function (e) {
    var t = [],
        n = {
      "components/m-text-list/m-text-list": 1,
      "components/zy-search/zy-search": 1,
      "components/m-icon/m-icon": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "colorui/components/cu-custom": "colorui/components/cu-custom",
        "components/m-text-list/m-text-list": "components/m-text-list/m-text-list",
        "components/zy-search/zy-search": "components/zy-search/zy-search",
        "components/m-details/m-details": "components/m-details/m-details",
        "components/m-icon/m-icon": "components/m-icon/m-icon"
      }[e] || e) + ".wxss", c = u.p + r, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var s = i[a],
            l = s.getAttribute("data-href") || s.getAttribute("href");
        if ("stylesheet" === s.rel && (l === r || l === c)) return t();
      }

      var m = document.getElementsByTagName("style");

      for (a = 0; a < m.length; a++) {
        s = m[a], l = s.getAttribute("data-href");
        if (l === r || l === c) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || c,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        i.request = r, delete o[e], p.parentNode.removeChild(p), n(i);
      }, p.href = c;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = c[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var i = new Promise(function (t, n) {
        r = c[e] = [t, n];
      });
      t.push(r[2] = i);
      var s,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, u.nc && l.setAttribute("nonce", u.nc), l.src = a(e), s = function s(t) {
        l.onerror = l.onload = null, clearTimeout(m);
        var n = c[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            i.type = r, i.request = o, n[1](i);
          }

          c[e] = void 0;
        }
      };
      var m = setTimeout(function () {
        s({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = s, document.head.appendChild(l);
    }
    return Promise.all(t);
  }, u.m = e, u.c = r, u.d = function (e, t, n) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, u.t = function (e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (u.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      u.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, u.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return u.d(t, "a", t), t;
  }, u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, u.p = "/", u.oe = function (e) {
    throw console.error(e), e;
  };
  var s = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = s.push.bind(s);
  s.push = t, s = s.slice();

  for (var m = 0; m < s.length; m++) {
    t(s[m]);
  }

  var p = l;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(i.length>1){var a=i.pop();o=i.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=i[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return O}),n.d(e,"mapState",function(){return D}),n.d(e,"mapMutations",function(){return C}),n.d(e,"mapGetters",function(){return M}),n.d(e,"mapActions",function(){return $}),n.d(e,"createNamespacedHelpers",function(){return L});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},i="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,u);var h=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;f(t.concat(r),e.getChild(r),n.modules[r])}}h.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},h.prototype.update=function(t){f([],this.root,t)},h.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new c(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&a(e.modules,function(e,i){r.register(t.concat(i),e,n)})},h.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"===typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var a=this,s=this,l=s.dispatch,c=s.commit;this.dispatch=function(t,e){return l.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=r,m(this,i,[],this._modules.root),x(this,i),n.forEach(function(t){return t(e)}),p.config.devtools&&o(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),x(t,n,e)}function x(t,e,n){var r=t._vm;t.getters={};var i=t._wrappedGetters,o={};a(i,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:o}),p.config.silent=s,t.strict&&T(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),p.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,i){var o=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!o&&!i){var s=P(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){p.set(s,l,r.state)})}var c=r.context=_(t,a,n);r.forEachMutation(function(e,n){var r=a+n;w(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,i=e.handler||e;S(t,r,i,c)}),r.forEachGetter(function(e,n){var r=a+n;A(t,r,e,c)}),r.forEachChild(function(r,o){m(t,e,n.concat(o),r,i)})}function _(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=k(n,r,i),a=o.payload,s=o.options,l=o.type;return s&&s.root||(l=e+l),t.dispatch(l,a)},commit:r?t.commit:function(n,r,i){var o=k(n,r,i),a=o.payload,s=o.options,l=o.type;s&&s.root||(l=e+l),t.commit(l,a,s)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return P(t.state,n)}}}),i}function b(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function w(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(e){n.call(t,r.state,e)})}function S(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var o=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return l(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function T(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function P(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function O(t){p&&t===p||(p=t,r(p))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,i=k(t,e,n),o=i.type,a=i.payload,s=(i.options,{type:o,payload:a}),l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=k(t,e),i=r.type,o=r.payload,a={type:i,payload:o},s=this._actions[i];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),x(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=P(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var D=F(function(t,e){var n={};return R(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=E(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0}),n}),C=F(function(t,e){var n={};return R(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=E(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),M=F(function(t,e){var n={};return R(e).forEach(function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||E(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0}),n}),$=F(function(t,e){var n={};return R(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=E(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),L=function(t){return{mapState:D.bind(null,t),mapGetters:M.bind(null,t),mapMutations:C.bind(null,t),mapActions:$.bind(null,t)}};function R(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function E(t,e,n){var r=t._modulesNamespaceMap[n];return r}var j={Store:d,install:O,version:"3.0.1",mapState:D,mapMutations:C,mapGetters:M,mapActions:$,createNamespacedHelpers:L};e["default"]=j},3144:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__A759791"};e.default=r},"394b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("66fd")),i=o(n("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}r.default.use(i.default);var a=new i.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:""},mutations:{login:function(t,e){t.userName=e||"新用户",t.hasLogin=!0},logout:function(t){t.userName="",t.hasLogin=!1}}}),s=a;e.default=s},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function h(t){return"[object RegExp]"===c.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function _(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,P=b(function(t){return t.replace(T,"-$1").toLowerCase()});function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var D=Function.prototype.bind?O:k;function C(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function M(t,e){for(var n in e)t[n]=e[n];return t}function $(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function L(t,e,n){}var R=function(t,e,n){return!1},F=function(t){return t};function E(t,e){if(t===e)return!0;var n=l(t),r=l(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return E(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return E(t[n],e[n])})}catch(c){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if(E(t[n],e))return n;return-1}function I(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var N=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:L,parsePlatformTagName:F,mustUseProp:R,async:!0,_lifecycleHooks:z},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+W.source+".$_\\d]");function V(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,X="__proto__"in{},J="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Y&&WXEnvironment.platform.toLowerCase(),Q=J&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===K),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(J)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===G&&(G=!J&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},ot=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=L,ut=0,ht=function(){this.id=ut++,this.subs=[]};function ft(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function pt(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){x(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var dt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function xt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,_t=Object.create(mt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=mt[t];U(_t,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var wt=Object.getOwnPropertyNames(_t),St=!0;function At(t){St=t}var Tt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,U(t,"__ob__",this),Array.isArray(t)?(X?t.push!==t.__proto__.push?kt(t,_t,wt):Pt(t,_t):kt(t,_t,wt),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function kt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];U(t,o,e[o])}}function Ot(t,e){var n;if(l(t)&&!(t instanceof dt))return _(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:St&&!it()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,r,i){var o=new ht,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!i&&Ot(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&$t(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!l||(l?l.call(t,e):n=e,c=!i&&Ot(e),o.notify())}})}}function Ct(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Dt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function $t(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&$t(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ot(t[e])};var Lt=B.optionMergeStrategies;function Rt(t,e){if(!e)return t;for(var n,r,i,o=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],_(t,n)?r!==i&&u(r)&&u(i)&&Rt(r,i):Ct(t,n,i));return t}function Ft(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Rt(r,i):i}:e?t?function(){return Rt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Et(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?jt(n):n}function jt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function It(t,e,n,r){var i=Object.create(t||null);return e?M(i,e):i}Lt.data=function(t,e,n){return n?Ft(t,e,n):e&&"function"!==typeof e?t:Ft(t,e)},z.forEach(function(t){Lt[t]=Et}),N.forEach(function(t){Lt[t+"s"]=It}),Lt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in M(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Lt.props=Lt.methods=Lt.inject=Lt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return M(i,t),e&&M(i,e),i},Lt.provide=Ft;var Nt=function(t,e){return void 0===e?t:e};function zt(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=S(i),a[o]={type:null})}else if(u(n))for(var s in n)i=n[s],o=S(s),a[o]=u(i)?i:{type:i};else 0;t.props=a}}function Bt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(u(n))for(var o in n){var a=n[o];r[o]=u(a)?M({from:o},a):{from:a}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function qt(t,e,n){if("function"===typeof e&&(e=e.options),zt(e,n),Bt(e,n),Wt(e),!e._base&&(e.extends&&(t=qt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=qt(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)_(t,o)||s(o);function s(r){var i=Lt[r]||Nt;a[r]=i(t[r],e[r],n,r)}return a}function Ut(t,e,n,r){if("string"===typeof n){var i=t[e];if(_(i,n))return i[n];var o=S(n);if(_(i,o))return i[o];var a=A(o);if(_(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Ht(t,e,n,r){var i=e[t],o=!_(n,t),a=n[t],s=Jt(Boolean,i.type);if(s>-1)if(o&&!_(i,"default"))a=!1;else if(""===a||a===P(t)){var l=Jt(String,i.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=Vt(r,i,t);var c=St;At(!0),Ot(a),At(c)}return a}function Vt(t,e,n){if(_(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Gt(e.type)?r.call(t):r}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Gt(t)===Gt(e)}function Jt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Xt(e[n],t))return n;return-1}function Yt(t,e,n){ft();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ei){Qt(ei,r,"errorCaptured hook")}}}Qt(t,e,n)}finally{pt()}}function Kt(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&p(o)&&!o._handled&&(o.catch(function(t){return Yt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ei){Yt(ei,r,i)}return o}function Qt(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(ei){ei!==t&&Zt(ei,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!J&&!Y||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(L)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var oe=1,ae=new MutationObserver(re),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ei){Yt(ei,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function ue(t){he(t,ce),ce.clear()}function he(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!l(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)he(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)he(t[r[n]],e)}}}var fe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function pe(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Kt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Kt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,i,a,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=fe(l),r(c)||(r(u)?(r(c.fns)&&(c=t[l]=pe(c,s)),o(h.once)&&(c=t[l]=a(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)r(t[l])&&(h=fe(l),i(h.name,e[l],h.capture))}function ve(t,e,n){var o=e.options.props;if(!r(o)){var a={},s=t.attrs,l=t.props;if(i(s)||i(l))for(var c in o){var u=P(c);ge(a,l,c,u,!0)||ge(a,s,c,u,!1)}return a}}function ge(t,e,n,r,o){if(i(e)){if(_(e,n))return t[n]=e[n],o||delete e[n],!0;if(_(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function xe(t){return s(t)?[yt(t)]:Array.isArray(t)?_e(t):void 0}function me(t){return i(t)&&i(t.text)&&a(t.isComment)}function _e(t,e){var n,a,l,c,u=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(l=u.length-1,c=u[l],Array.isArray(a)?a.length>0&&(a=_e(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(u[l]=yt(c.text+a[0].text),a.shift()),u.push.apply(u,a)):s(a)?me(c)?u[l]=yt(c.text+a):""!==a&&u.push(yt(a)):me(a)&&me(c)?u[l]=yt(c.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),u.push(a)));return u}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Se(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),At(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=lt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&_(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var l=t[o].default;n[o]="function"===typeof l?l.call(e):l}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var c in n)n[c].every(Te)&&delete n[c];return n}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var l in i={},t)t[l]&&"$"!==l[0]&&(i[l]=ke(e,l,t[l]))}else i={};for(var c in e)c in i||(i[c]=Oe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=i),U(i,"$stable",a),U(i,"$key",s),U(i,"$hasNormal",o),i}function ke(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:xe(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Oe(t,e){return function(){return t[e]}}function De(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length)),u=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function Ce(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=M(M({},r),n)),i=o(n)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Me(t){return Ut(this.$options,"filters",t,!0)||F}function $e(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Le(t,e,n,r,i){var o=B.keyCodes[e]||n;return i&&r&&!B.keyCodes[e]?$e(i,r):o?$e(o,t):r?P(r)!==e:void 0}function Re(t,e,n,r,i){if(n)if(l(n)){var o;Array.isArray(n)&&(n=$(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||B.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(a),c=P(a);if(!(l in o)&&!(c in o)&&(o[a]=n[a],i)){var u=t.on||(t.on={});u["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Fe(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),je(r,"__static__"+t,!1),r)}function Ee(t,e,n){return je(t,"__once__"+e+(n?"_"+n:""),!0),t}function je(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ie(t[r],e+"_"+r,n);else Ie(t,e,n)}function Ie(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ne(t,e){if(e)if(u(e)){var n=t.on=t.on?M({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function ze(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?ze(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Be(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function We(t,e){return"string"===typeof t?e+t:t}function qe(t){t._o=Ee,t._n=v,t._s=d,t._l=De,t._t=Ce,t._q=E,t._i=j,t._m=Fe,t._f=Me,t._k=Le,t._b=Re,t._v=yt,t._e=gt,t._u=ze,t._g=Ne,t._d=Be,t._p=We}function Ue(t,e,r,i,a){var s,l=this,c=a.options;_(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var u=o(c._compiled),h=!u;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Se(c.inject,i),this.slots=function(){return l.$slots||Pe(t.scopedSlots,l.$slots=Ae(r,i)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var o=rn(s,t,e,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,h)}}function He(t,e,r,o,a){var s=t.options,l={},c=s.props;if(i(c))for(var u in c)l[u]=Ht(u,c,e||n);else i(r.attrs)&&Ge(l,r.attrs),i(r.props)&&Ge(l,r.props);var h=new Ue(r,l,a,o,t),f=s.render.call(null,h._c,h);if(f instanceof dt)return Ve(f,r,h.parent,s,h);if(Array.isArray(f)){for(var p=xe(f)||[],d=new Array(p.length),v=0;v<p.length;v++)d[v]=Ve(p[v],r,h.parent,s,h);return d}}function Ve(t,e,n,r,i){var o=xt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Ge(t,e){for(var n in e)t[S(n)]=e[n]}qe(Ue.prototype);var Xe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Xe.prepatch(n,n)}else{var r=t.componentInstance=Ke(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;kn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Mn(n,"mounted")),t.data.keepAlive&&(e._isMounted?qn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Cn(e,!0):e.$destroy())}},Je=Object.keys(Xe);function Ye(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(r(t.cid)&&(u=t,t=dn(u,c),void 0===t))return pn(u,e,n,a,s);e=e||{},fr(t),i(e.model)&&tn(t.options,e);var h=ve(e,t,s);if(o(t.options.functional))return He(t,h,e,n,a);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Qe(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:a},u);return v}}}function Ke(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var r=Je[n],i=e[r],o=Xe[r];i===o||i&&i._merged||(e[r]=i?Ze(o,i):o)}}function Ze(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var en=1,nn=2;function rn(t,e,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=nn),on(t,e,n,r,i)}function on(t,e,n,r,o){if(i(n)&&i(n.__ob__))return gt();if(i(n)&&i(n.is)&&(e=n.is),!e)return gt();var a,s,l;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===nn?r=xe(r):o===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),a=B.isReservedTag(e)?new dt(B.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(l=Ut(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Ye(l,n,t,r,e)):a=Ye(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&an(a,s),i(n)&&sn(n),a):gt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];i(l.tag)&&(r(l.ns)||o(n)&&"svg"!==l.tag)&&an(l,e,n)}}function sn(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function ln(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Ae(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return rn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return rn(t,e,n,r,i,!0)};var o=r&&r.data;Dt(t,"$attrs",o&&o.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,un=null;function hn(t){qe(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Pe(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{un=e,t=r.call(e._renderProxy,e.$createElement)}catch(ei){Yt(ei,e,"render"),t=e._vnode}finally{un=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=i,t}}function fn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function pn(t,e,n,r,i){var o=gt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function dn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=un;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return x(a,n)});var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=I(function(n){t.resolved=fn(n,e),s?a.length=0:h(!0)}),d=I(function(e){i(t.errorComp)&&(t.error=!0,h(!0))}),v=t(f,d);return l(v)&&(p(v)?r(t.resolved)&&v.then(f,d):p(v.component)&&(v.component.then(f,d),i(v.error)&&(t.errorComp=fn(v.error,e)),i(v.loading)&&(t.loadingComp=fn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))},v.delay||200)),i(v.timeout)&&(u=setTimeout(function(){u=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function xn(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function _n(t,e){var n=cn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function bn(t,e,n){cn=t,de(e,n||{},xn,mn,_n,t),cn=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?C(n):n;for(var r=C(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Kt(n[o],e,r,e,i)}return e}}var Sn=null;function An(t){var e=Sn;return Sn=t,function(){Sn=e}}function Tn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=An(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Mn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Mn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(o||t.$options._renderChildren||l);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){At(!1);for(var u=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var p=h[f],d=t.$options.props;u[p]=Ht(p,d,e,t)}At(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,bn(t,r,v),c&&(t.$slots=Ae(o,i.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Mn(t,"activated")}}function Cn(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Cn(t.$children[n]);Mn(t,"deactivated")}}function Mn(t,e){ft();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Kt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var $n=[],Ln=[],Rn={},Fn=!1,En=!1,jn=0;function In(){jn=$n.length=Ln.length=0,Rn={},Fn=En=!1}var Nn=Date.now;if(J&&!Z){var zn=window.performance;zn&&"function"===typeof zn.now&&Nn()>document.createEvent("Event").timeStamp&&(Nn=function(){return zn.now()})}function Bn(){var t,e;for(Nn(),En=!0,$n.sort(function(t,e){return t.id-e.id}),jn=0;jn<$n.length;jn++)t=$n[jn],t.before&&t.before(),e=t.id,Rn[e]=null,t.run();var n=Ln.slice(),r=$n.slice();In(),Un(n),Wn(r),ot&&B.devtools&&ot.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Mn(r,"updated")}}function qn(t){t._inactive=!1,Ln.push(t)}function Un(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Hn(t){var e=t.id;if(null==Rn[e]){if(Rn[e]=!0,En){var n=$n.length-1;while(n>jn&&$n[n].id>t.id)n--;$n.splice(n+1,0,t)}else $n.push(t);Fn||(Fn=!0,le(Bn))}}var Vn=0,Gn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Vn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=V(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ei){if(!this.user)throw ei;Yt(ei,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),pt(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Hn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ei){Yt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Xn={enumerable:!0,configurable:!0,get:L,set:L};function Jn(t,e,n){Xn.get=function(){return this[e][n]},Xn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Xn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Kn(t,e.props),e.methods&&or(t,e.methods),e.data?Qn(t):Ot(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Kn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||At(!1);var a=function(o){i.push(o);var a=Ht(o,e,n,t);Dt(r,o,a),o in t||Jn(t,"_props",o)};for(var s in e)a(s);At(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?Zn(e,t):e||{},u(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&_(r,o)||q(o)||Jn(t,"_data",o)}Ot(e,!0)}function Zn(t,e){ft();try{return t.call(e,e)}catch(ei){return Yt(ei,e,"data()"),{}}finally{pt()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new Gn(t,a||L,L,tr)),i in t||nr(t,i,o)}}function nr(t,e,n){var r=!it();"function"===typeof n?(Xn.get=r?rr(e):ir(n),Xn.set=L):(Xn.get=n.get?r&&!1!==n.cache?rr(e):ir(n.get):L,Xn.set=n.set||L),Object.defineProperty(t,e,Xn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function or(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:D(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function lr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ct,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(u(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new Gn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(o){Yt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var cr=0;function ur(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?hr(e,t):e.$options=qt(fr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tn(e),yn(e),ln(e),Mn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Yn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Mn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fr(t){var e=t.options;if(t.super){var n=fr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=pr(t);i&&M(t.extendOptions,i),e=t.options=qt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=C(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gr(t){t.mixin=function(t){return this.options=qt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=qt(n.options,t),a["super"]=n,a.options.props&&xr(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,N.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=M({},a.options),i[r]=a,a}}function xr(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function _r(t){N.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function br(t){return t&&(t.Ctor.options.name||t.tag)}function wr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=br(a.componentOptions);s&&!e(s)&&Ar(n,o,r,i)}}}function Ar(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,x(n,e)}ur(dr),lr(dr),wn(dr),Pn(dr),hn(dr);var Tr=[String,RegExp,Array],Pr={name:"keep-alive",abstract:!0,props:{include:Tr,exclude:Tr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ar(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return wr(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!wr(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var r=br(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!wr(o,r))||a&&r&&wr(a,r))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,x(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&Ar(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},kr={KeepAlive:Pr};function Or(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:M,mergeOptions:qt,defineReactive:Dt},t.set=Ct,t.delete=Mt,t.nextTick=le,t.observable=function(t){return Ot(t),t},t.options=Object.create(null),N.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,kr),vr(t),gr(t),yr(t),_r(t)}Or(dr),Object.defineProperty(dr.prototype,"$isServer",{get:it}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:Ue}),dr.version="2.6.10";var Dr="[object Array]",Cr="[object Object]";function Mr(t,e){var n={};return $r(t,e),Lr(t,e,"",n),n}function $r(t,e){if(t!==e){var n=Fr(t),r=Fr(e);if(n==Cr&&r==Cr){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var o=t[i];void 0===o?t[i]=null:$r(o,e[i])}}else n==Dr&&r==Dr&&t.length>=e.length&&e.forEach(function(e,n){$r(t[n],e)})}}function Lr(t,e,n,r){if(t!==e){var i=Fr(t),o=Fr(e);if(i==Cr)if(o!=Cr||Object.keys(t).length<Object.keys(e).length)Rr(r,n,t);else{var a=function(i){var o=t[i],a=e[i],s=Fr(o),l=Fr(a);if(s!=Dr&&s!=Cr)o!=e[i]&&Rr(r,(""==n?"":n+".")+i,o);else if(s==Dr)l!=Dr?Rr(r,(""==n?"":n+".")+i,o):o.length<a.length?Rr(r,(""==n?"":n+".")+i,o):o.forEach(function(t,e){Lr(t,a[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==Cr)if(l!=Cr||Object.keys(o).length<Object.keys(a).length)Rr(r,(""==n?"":n+".")+i,o);else for(var c in o)Lr(o[c],a[c],(""==n?"":n+".")+i+"."+c,r)};for(var s in t)a(s)}else i==Dr?o!=Dr?Rr(r,n,t):t.length<e.length?Rr(r,n,t):t.forEach(function(t,i){Lr(t,e[i],n+"["+i+"]",r)}):Rr(r,n,t)}}function Rr(t,e,n){t[e]=n}function Fr(t){return Object.prototype.toString.call(t)}function Er(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function jr(t){return $n.find(function(e){return t._watcher===e})}function Ir(t,e){if(!t.__next_tick_pending&&!jr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ei){Yt(ei,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Nr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var zr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Nr(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var a=Mr(i,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Er(n)})):Er(this)}};function Br(){}function Wr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Br),t.$options.render||(t.$options.render=Br),"mp-toutiao"!==t.mpHost&&Mn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Gn(t,r,L,{before:function(){t._isMounted&&!t._isDestroyed&&Mn(t,"beforeUpdate")}},!0),n=!1,t}function qr(t,e){return i(t)||i(e)?Ur(t,Hr(e)):""}function Ur(t,e){return t?e?t+" "+e:t:e||""}function Hr(t){return Array.isArray(t)?Vr(t):l(t)?Gr(t):"string"===typeof t?t:""}function Vr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=Hr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Xr=b(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Jr(t){return Array.isArray(t)?$(t):"string"===typeof t?Xr(t):t}var Yr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Kr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Kr(t[r],n.slice(1).join("."))}function Qr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:C(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ir(this,t)},Yr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;ft();var r,i=n.$options[t],o=t+" hook";if(i)for(var a=0,s=i.length;a<s;a++)r=Kt(i[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Kr(e||this,t)},t.prototype.__get_class=function(t,e){return qr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Jr(t),r=e?M(e,n):n;return Object.keys(r).map(function(t){return P(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,o,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(l(t)){for(o=Object.keys(t),n=Object.create(null),r=0,i=o.length;r<i;r++)a=o[r],n[a]=e(t[a],a,r);return n}return[]}}var Zr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ti(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Zr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Zr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Zr}dr.prototype.__patch__=zr,dr.prototype.$mount=function(t,e){return Wr(this,t,e)},ti(dr),Qr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=Se,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){i=!0,o=l}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function l(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return p(t)||f(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function x(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function _(){}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],T={},P={};function k(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?O(n):n}function O(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function D(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function C(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&(t[n]=k(t[n],e[n]))})}function M(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&D(t[n],e[n])})}function $(t,e){"string"===typeof t&&x(e)?C(P[t]||(P[t]={}),e):x(t)&&C(T,t)}function L(t,e){"string"===typeof t?x(e)?M(P[t],e):delete P[t]:x(t)&&M(T,t)}function R(t){return function(e){return t(e)||e}}function F(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function E(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(R(i));else{var o=i(e);if(F(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){E(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function I(t,e){var n=[];Array.isArray(T.returnValue)&&n.push.apply(n,u(T.returnValue));var r=P[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,u(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(T).forEach(function(t){"returnValue"!==t&&(e[t]=T[t].slice())});var n=P[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function z(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=N(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=E(a.invoke,n);return s.then(function(t){return e.apply(void 0,[j(a,t)].concat(i))})}return e.apply(void 0,[j(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var B={returnValue:function(t){return F(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},W=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,q=/^create|Manager$/,U=/^on/;function H(t){return q.test(t)}function V(t){return W.test(t)}function G(t){return U.test(t)}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(H(t)||V(t)||G(t))}function Y(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return g(n.success)||g(n.fail)||g(n.complete)?I(t,z.apply(void 0,[t,e,n].concat(i))):I(t,X(new Promise(function(r,o){z.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var K=1e-4,Q=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+K),0===n?1!==et&&Z?.5:1:t<0?-n:n}var it={promiseInterceptor:B},ot=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:$,removeInterceptor:L}),at={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ut(t,e,n){return function(r){return e(ft(t,r,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x(e)){var o=!0===i?e:{};for(var a in g(n)&&(n=n(e,o)||{}),e)if(m(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:x(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=ut(t,e[a],r):i||(o[a]=e[a]);return o}return g(e)&&(e=ut(t,e,r)),e}function ft(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),ht(t,e,n,{},r)}function pt(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var i=n;g(n)&&(i=n(e)),e=ht(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return V(t)?ft(t,a,i.returnValue,H(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(i),g(r)&&r(i)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function xt(t,e,n){return t[e].apply(t,n)}function mt(){return xt(yt(),"$on",Array.prototype.slice.call(arguments))}function _t(){return xt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return xt(yt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return xt(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:mt,$off:_t,$once:bt,$emit:wt});function At(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var i=t.show,o=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},l=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function Tt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&At(e),e}function Pt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var kt=Object.freeze({requireNativePlugin:Pt,getSubNVueById:Tt}),Ot=Page,Dt=Component,Ct=/:/g,Mt=b(function(t){return S(t.replace(Ct,"-"))});function $t(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[Mt(n)].concat(i))}}}function Lt(t,e){var n=e[t];e[t]=n?function(){$t(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){$t(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("onLoad",t),Ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("created",t),Dt(t)};var Rt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ft(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Et(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Et(t,e)}):void 0}function jt(t,e,n){e.forEach(function(e){Et(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function It(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function zt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Bt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return x(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Wt=[String,Number,Boolean,Object,Array,null];function qt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ut(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),x(r)&&r.props&&a.push(e({properties:Vt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){x(t)&&t.props&&a.push(e({properties:Vt(t.props,!0)}))}),a}function Ht(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Vt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:qt(t)}}):x(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(x(r)){var i=r["default"];g(i)&&(i=i()),r.type=Ht(e,r.type),n[e]={type:-1!==Wt.indexOf(r.type)?r.type:null,value:i,observer:qt(e)}}else{var o=Ht(e,r);n[e]={type:-1!==Wt.indexOf(o)?o:null,observer:qt(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=_,t.preventDefault=_,t.target=t.target||{},m(t,"detail")||(t.detail={}),x(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===i}):x(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}function Jt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Xt(t,e)}),r}function Yt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Jt(t,r,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Yt(t)):"string"===typeof t&&m(s,t)?l.push(s[t]):l.push(t)}),l}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Zt;r=s?r.slice(1):r;var l=r.charAt(0)===Qt;r=l?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var a=i[r];if(!g(a))throw new Error(" _vm.".concat(r," is not a function"));if(l){if(a.once)return;a.once=!0}o.push(a.apply(i,Kt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Ft(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},jt(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=oe(n[i],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function he(t){return re(t,{mocks:ie,initRefs:ce})}var fe=["onUniNViewMessage"];function pe(t){var e=he(t);return jt(e,fe),e}function de(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=It(r.default,t),s=o(a,2),l=s[0],c=s[1],u={options:{multipleSlots:!0,addGlobalClass:!0},data:Bt(c,r.default.prototype),behaviors:Ut(c,ae),properties:Vt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};zt(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){u.methods[t]=function(e){return this.$vm[t](e)}}),n?u:[u,l]}function ge(t){return ve(t,{isPage:se,initRelation:le})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var xe=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return jt(n.methods,xe,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function _e(t){return me(t,{isPage:se,initRelation:le})}xe.push.apply(xe,Rt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=_e(t);return jt(e.methods,be),e}function Se(t){return Component(we(t))}function Ae(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),lt.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Te={};Object.keys(ot).forEach(function(t){Te[t]=ot[t]}),Object.keys(St).forEach(function(t){Te[t]=St[t]}),Object.keys(kt).forEach(function(t){Te[t]=Y(t,kt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Te[t]=Y(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Te,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=Ae;var Pe=Te,ke=Pe;e.default=ke}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"8f21":function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.http=void 0;var i=o(n("b493"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=new i.default;e.test=l,l.setConfig(function(t){return t.baseUrl="http://www.aaa.cn",t.header=a({},t.header,{"content-type":"application/json;charset=UTF-8"}),t}),l.interceptor.request(function(t,e){return t.header=a({},t.header,{a:1}),t}),l.interceptor.response(function(t){return t},function(t){return t});var c=new i.default;e.http=c,c.setConfig(function(t){return t.baseUrl="http://192.168.2.5:8080/",t}),c.validateStatus=function(t){return 200===t.statusCode},c.interceptor.request(function(e,n){e.header=a({},e.header,{a:1});var i=null;return t.getStorage({key:"access_token",success:function(t){i=t.data}}),i&&(e.params.access_token=i),console.log(r(e," at utils/luch-request/index.js:61")),e}),c.interceptor.response(function(t){return t},function(e){return t.navigateTo({url:"../../login/login",success:function(e){t.clearStorage()}}),e})}).call(this,n("6e42")["default"],n("0de9")["default"])},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var h=e.version,f="https://tongji.dcloud.io/uni/stat",p="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",x="__DC_UUID_VALUE";function m(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=x}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,x)}}return e}var _=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var o in n)r[n[o]]=t[n[o]],i+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==S()&&"qq"!==S()||(e=t.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===S()?plus.runtime.version:""},P=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=S(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},O="First__Visit__Time",D="Last__Visit__Time",C=function(){var e=t.getStorageSync(O),n=0;return e?n=e:(n=w(),t.setStorageSync(O,n),t.removeStorageSync(D)),n},M=function(){var e=t.getStorageSync(D),n=0;return n=e||"",t.setStorageSync(D,w()),n},$="__page__residence__time",L=0,R=0,F=function(){return L=w(),"n"===S()&&t.setStorageSync($,w()),L},E=function(){return R=w(),"n"===S()&&(L=t.getStorageSync($)),R-L},j="Total__Visit__Count",I=function(){var e=t.getStorageSync(j),n=1;return e&&(n=e,n++),t.setStorageSync(j,n),n},N=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},z=0,B=0,W=function(){var t=(new Date).getTime();return z=t,B=0,t},q=function(){var t=(new Date).getTime();return B=t,t},U=function(t){var e=0;if(0!==z&&(e=B-z),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},H=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},V=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===S()?r.$mp&&r.$mp.page.is+o:r.$scope&&r.$scope.route+o||r.$mp&&r.$mp.page.route+o},G=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},X=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("c81d").default,Y=n("3144").default||n("3144"),K=t.getSystemInfoSync(),Q=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:S(),mpn:A(),ak:Y.appid,usv:h,v:T(),ch:P(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){q();var t=U("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,q();var n=U();W();var r=V(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=V(this),e=H();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return W(),this.__licationShow=!1,void(this._lastPageRoute=t);q(),this._lastPageRoute=t;var n=U("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}W()}},{key:"_pageHide",value:function(){if(!this.__licationHide){q();var t=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=k(t.scene),this.statData.fvts=C(),this.statData.lvts=M(),this.statData.tvc=I(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=w(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===S()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",a),!(E()<g)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),F();var l=[],c=[],u=[],f=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?l.push(n):3===t?u.push(n):c.push(n)})};for(var p in s)f(p);l.push.apply(l,c.concat(u));var d={usv:h,t:i,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=_(N(t)).options;e.src=p+"?"+n}},{key:"sendEvent",value:function(t,e){X(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return l(this,n),e=r(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,F(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,G(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,G(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(Q),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"92e2":function(t,e,n){"use strict";(function(e,n){var r={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},i=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(null==t)throw new TypeError("Cannot convert undefined or null to object");if(!n||n.length<=0)return t;function i(t,e){for(var n in e)t[n]=t[n]&&"[object Object]"===t[n].toString()?i(t[n],e[n]):t[n]=e[n];return t}return n.forEach(function(e){t=i(t,e)}),t},o={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function a(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=t.replace(n,function(t,e,n,r){return e+e+n+n+r+r}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),o=parseInt(i[1],16),a=parseInt(i[2],16),s=parseInt(i[3],16);return"rgba("+o+","+a+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";var r=1;while(n<1)n*=10,r*=10;t="upper"===e?Math.ceil(t*r):Math.floor(t*r);while(t%n!==0)"upper"===e?t++:t--;return t/r}function l(t,e,n,r){for(var i=[],o=0;o<t.length;o++){for(var a={data:[],name:e[o],color:n[o]},s=0,l=r.length;s<l;s++)if(s<t[o])a.data.push(null);else{for(var c=0,u=0;u<t[o];u++)c+=r[s-u][1];a.data.push(+(c/t[o]).toFixed(3))}i.push(a)}return i}function c(t,e,n,r,i){var o=i.width-i.area[1]-i.area[3],a=n.eachSpacing*(i.chartData.xAxisData.xAxisPoints.length-1),s=e;return e>=0?(s=0,t.event.trigger("scrollLeft")):Math.abs(e)>=a-o&&(s=o-a,t.event.trigger("scrollRight")),s}function u(t,e,n){function r(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=r(t),e=r(e),n=r(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function h(t,e,n){var r=t,i=n-e,o=r+(n-i-r)/Math.sqrt(2);o*=-1;var a=(n-i)*(Math.sqrt(2)-1)-(n-i-r)/Math.sqrt(2);return{transX:o,transY:a}}function f(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var r=.2,i=.2,o=null,a=null,s=null,l=null;if(e<1?(o=t[0].x+(t[1].x-t[0].x)*r,a=t[0].y+(t[1].y-t[0].y)*r):(o=t[e].x+(t[e+1].x-t[e-1].x)*r,a=t[e].y+(t[e+1].y-t[e-1].y)*r),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*i,l=t[c].y-(t[c].y-t[c-1].y)*i}else s=t[e+1].x-(t[e+2].x-t[e].x)*i,l=t[e+1].y-(t[e+2].y-t[e].y)*i;return n(t,e+1)&&(l=t[e+1].y),n(t,e)&&(a=t[e].y),{ctrA:{x:o,y:a},ctrB:{x:s,y:l}}}function p(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)while(o.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function v(t,e,n){var r=0;return t.map(function(t){if(t.color||(t.color=n.colors[r],r=(r+1)%n.colors.length),t.index||(t.index=0),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function g(t,e){var n=0,r=e-t;return n=r>=1e4?1e3:r>=1e3?100:r>=100?10:r>=10?5:r>=1?1:r>=.1?.1:r>=.01?.01:r>=.001?.001:r>=1e-4?1e-4:r>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.fontSize;t=String(t);t=t.split("");for(var n=0,i=0;i<t.length;i++){var o=t[i];/[a-zA-Z]/.test(o)?n+=7:/[0-9]/.test(o)?n+=5.5:/\./.test(o)?n+=2.7:/-/.test(o)?n+=3.25:/[\u4e00-\u9fa5]/.test(o)?n+=10:/\(|\)/.test(o)?n+=3.73:/\s/.test(o)?n+=2.5:/%/.test(o)?n+=8:n+=10}return n*e/10}function x(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function m(t,e){for(var n=new Array(e),r=0;r<n.length;r++)n[r]=0;for(var i=0;i<t.length;i++)for(r=0;r<n.length;r++)n[r]+=t[i].data[r];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}function _(t,e,n){var r,i;return t.clientX?e.rotate?(i=e.height-t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(r=t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(i=e.height-t.x*e.pixelRatio,r=t.y*e.pixelRatio):(r=t.x*e.pixelRatio,i=t.y*e.pixelRatio),{x:r,y:i}}function b(t,e){for(var n=[],r=0;r<t.length;r++){var i=t[r];if(null!==i.data[e]&&"undefined"!==typeof i.data[e]&&i.show){var o={};o.color=i.color,o.type=i.type,o.style=i.style,o.pointShape=i.pointShape,o.disableLegend=i.disableLegend,o.name=i.name,o.show=i.show,o.data=i.format?i.format(i.data[e]):i.data[e],n.push(o)}}return n}function w(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function S(t){for(var e=2*Math.PI/t,n=[],r=0;r<t;r++)n.push(e*r);return n.map(function(t){return-1*t+Math.PI/2})}function A(t,e,n,r){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:i.format?i.format(t,r[n]):t.name+": "+t.data,color:t.color}}),a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var h=a[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=a.length,{textList:o,offset:s}}function T(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:i.format?i.format(t,r[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});o=o.filter(function(t){if(!0!==t.disableLegend)return t});for(var a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var h=a[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=a.length,{textList:o,offset:s}}function P(t,e,n,r,i,o){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var a=o.color.upFill,s=o.color.downFill,l=[a,a,s,a],c=[],u={text:i[r],color:null};c.push(u),e.map(function(e){0==r&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[r-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[r-1][1]&&(l[2]=a),e.data[3]<t[r-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},i={text:"收盘："+e.data[1],color:l[1]},o={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,i,o,u)});for(var h=[],f={x:0,y:0},p=0;p<n.length;p++){var d=n[p];"undefined"!==typeof d[r]&&null!==d[r]&&h.push(d[r])}return f.x=Math.round(h[0][0].x),{textList:c,offset:f}}function k(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}function O(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1,a=0;return"line"!=n.type&&"area"!=n.type||"justify"!=n.xAxis.boundaryGap||(a=n.chartData.eachSpacing/2),M(t,n,r)&&e.forEach(function(e,n){t.x+i+a>e&&(o=n)}),o}function D(t,e,n){var r=-1;if(C(t,e.area)){for(var i=e.points,o=-1,a=0,s=i.length;a<s;a++)for(var l=i[a],c=0;c<l.length;c++){o+=1;var u=l[c]["area"];if(t.x>u[0]&&t.x<u[2]&&t.y>u[1]&&t.y<u[3]){r=o;break}}return r}return r}function C(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function M(t,e,n){return t.x<=e.width-e.area[1]+10&&t.x>=e.area[3]-10&&t.y>=e.area[0]&&t.y<=e.height-e.area[2]}function $(t,e,n){var r=2*Math.PI/n,i=-1;if(j(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a*=-1,a<0&&(a+=2*Math.PI);var s=e.angleList.map(function(t){return t=o(-1*t),t});s.forEach(function(t,e){var n=o(t-r/2),s=o(t+r/2);s<n&&(s+=2*Math.PI),(a>=n&&a<=s||a+2*Math.PI>=n&&a+2*Math.PI<=s)&&(i=e)})}return i}function L(t,e){for(var n=-1,r=0,i=e.series.length;r<i;r++){var o=e.series[r];if(t.x>o.funnelArea[0]&&t.x<o.funnelArea[2]&&t.y>o.funnelArea[1]&&t.y<o.funnelArea[3]){n=r;break}}return n}function R(t,e){for(var n=-1,r=0,i=e.length;r<i;r++){var o=e[r];if(t.x>o.area[0]&&t.x<o.area[2]&&t.y>o.area[1]&&t.y<o.area[3]){n=r;break}}return n}function F(t,e){for(var n=-1,r=e.chartData.mapData,i=e.series,o=jt(t.y,t.x,r.bounds,r.scale,r.xoffset,r.yoffset),a=[o.x,o.y],s=0,l=i.length;s<l;s++){var c=i[s].geometry.coordinates;if(Nt(a,c)){n=s;break}}return n}function E(t,e){var n=-1;if(j(t,e.center,e.radius)){var r=Math.atan2(e.center.y-t.y,t.x-e.center.x);r=-r;for(var i=0,o=e.series.length;i<o;i++){var a=e.series[i];if(u(r,a._start_,a._start_+2*a._proportion_*Math.PI)){n=i;break}}}return n}function j(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function I(t){var e=[],n=[];return t.forEach(function(t,r){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function N(t,e,n,r){var i={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return r.legendData=i,i;var o=e.legend.padding,a=e.legend.margin,s=e.legend.fontSize,l=15*e.pixelRatio,c=5*e.pixelRatio,u=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var h=[],f=0,p=[],d=[],v=0;v<t.length;v++){var g=t[v],x=l+c+y(g.name||"undefined",s)+e.legend.itemGap;f+x>e.width-e.padding[1]-e.padding[3]?(h.push(d),p.push(f-e.legend.itemGap),f=x,d=[g]):(f+=x,d.push(g))}if(d.length){h.push(d),p.push(f-e.legend.itemGap),i.widthArr=p;var m=Math.max.apply(null,p);switch(e.legend.float){case"left":i.area.start.x=e.padding[3],i.area.end.x=e.padding[3]+2*o;break;case"right":i.area.start.x=e.width-e.padding[1]-m-2*o,i.area.end.x=e.width-e.padding[1];break;default:i.area.start.x=(e.width-m)/2-o,i.area.end.x=(e.width+m)/2+o}i.area.width=m+2*o,i.area.wholeWidth=m+2*o,i.area.height=h.length*u+2*o,i.area.wholeHeight=h.length*u+2*o+2*a,i.points=h}}else{var _=t.length,b=e.height-e.padding[0]-e.padding[2]-2*a-2*o,w=Math.min(Math.floor(b/u),_);switch(i.area.height=w*u+2*o,i.area.wholeHeight=w*u+2*o,e.legend.float){case"top":i.area.start.y=e.padding[0]+a,i.area.end.y=e.padding[0]+a+i.area.height;break;case"bottom":i.area.start.y=e.height-e.padding[2]-a-i.area.height,i.area.end.y=e.height-e.padding[2]-a;break;default:i.area.start.y=(e.height-i.area.height)/2,i.area.end.y=(e.height+i.area.height)/2}for(var S=_%w===0?_/w:Math.floor(_/w+1),A=[],T=0;T<S;T++){var P=t.slice(T*w,T*w+w);A.push(P)}if(i.points=A,A.length){for(var k=0;k<A.length;k++){for(var O=A[k],D=0,C=0;C<O.length;C++){var M=l+c+y(O[C].name||"undefined",s)+e.legend.itemGap;M>D&&(D=M)}i.widthArr.push(D),i.heightArr.push(O.length*u+2*o)}for(var $=0,L=0;L<i.widthArr.length;L++)$+=i.widthArr[L];i.area.width=$-e.legend.itemGap+2*o,i.area.wholeWidth=i.area.width+o}}switch(e.legend.position){case"top":i.area.start.y=e.padding[0]+a,i.area.end.y=e.padding[0]+a+i.area.height;break;case"bottom":i.area.start.y=e.height-e.padding[2]-i.area.height-a,i.area.end.y=e.height-e.padding[2]-a;break;case"left":i.area.start.x=e.padding[3],i.area.end.x=e.padding[3]+i.area.width;break;case"right":i.area.start.x=e.width-e.padding[1]-i.area.width,i.area.end.x=e.width-e.padding[1];break}return r.legendData=i,i}function z(t,e,n,r){var i={angle:0,xAxisHeight:n.xAxisHeight},o=t.map(function(t){return y(t)}),a=Math.max.apply(this,o);return 1==e.xAxis.rotateLabel&&a+2*n.xAxisTextPadding>r&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+a*Math.sin(i.angle)),i}function B(t,e,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=i.extra.radar||{};a.max=a.max||0;for(var s=Math.max(a.max,Math.max.apply(null,x(r))),l=[],c=function(i){var a=r[i],c={};c.color=a.color,c.legendShape=a.legendShape,c.pointShape=a.pointShape,c.data=[],a.data.forEach(function(r,i){var a={};a.angle=t[i],a.proportion=r/s,a.position=p(n*a.proportion*o*Math.cos(a.angle),n*a.proportion*o*Math.sin(a.angle),e),c.data.push(a)}),l.push(c)},u=0;u<r.length;u++)c(u);return l}function W(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=0,i=0,o=0;o<t.length;o++){var a=t[o];a.data=null===a.data?0:a.data,r+=a.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===r?1/t.length*n:l.data/r*n,l._radius_=e}for(var c=0;c<t.length;c++){var u=t[c];u._start_=i,i+=2*u._proportion_*Math.PI}return t}function q(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var r=0;r<t.length;r++)t[r].radius=t[r].data/t[0].data*e*n,t[r]._proportion_=t[r].data/t[0].data;return t.reverse()}function U(t,e,n,r){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=0,a=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,o+=c.data,s.push(c.data)}for(var u=Math.min.apply(null,s),h=Math.max.apply(null,s),f=r-n,p=0;p<t.length;p++){var d=t[p];d.data=null===d.data?0:d.data,0===o||"area"==e?(d._proportion_=d.data/o*i,d._rose_proportion_=1/t.length*i):(d._proportion_=d.data/o*i,d._rose_proportion_=d.data/o*i),d._radius_=n+f*((d.data-u)/(h-u))}for(var v=0;v<t.length;v++){var g=t[v];g._start_=a,a+=2*g._rose_proportion_*Math.PI}return t}function H(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var r=0;r<t.length;r++){var i=t[r];i.data=null===i.data?0:i.data;var o=void 0;o="circle"==e.type?2:e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle,i._proportion_=o*i.data*n+e.startAngle,i._proportion_>=2&&(i._proportion_=i._proportion_%2)}return t}function V(t,e,n){for(var r=e-n+1,i=e,o=0;o<t.length;o++)t[o].value=null===t[o].value?0:t[o].value,t[o]._startAngle_=i,t[o]._endAngle_=r*t[o].value+e,t[o]._endAngle_>=2&&(t[o]._endAngle_=t[o]._endAngle_%2),i=t[o]._endAngle_;return t}function G(t,e,n){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=0;i<t.length;i++){var o=t[i];if(o.data=null===o.data?0:o.data,"auto"==n.pointer.color){for(var a=0;a<e.length;a++)if(o.data<=e[a].value){o.color=e[a].color;break}}else o.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;o._endAngle_=s*o.data+n.startAngle,o._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(o._oldAngle_+=2),o.data>=n.oldData?o._proportion_=(o._endAngle_-o._oldAngle_)*r+n.oldAngle:o._proportion_=o._oldAngle_-(o._oldAngle_-o._endAngle_)*r,o._proportion_>=2&&(o._proportion_=o._proportion_%2)}return t}function X(t){t=W(t);for(var e=0,n=0;n<t.length;n++){var r=t[n],i=r.format?r.format(+r._proportion_.toFixed(2)):o.toFixed(100*r._proportion_)+"%";e=Math.max(e,y(i))}return e}function J(t,e,n,r,i,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/n),o.extra.column&&o.extra.column.width&&+o.extra.column.width>0&&(t.width=Math.min(t.width,+o.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(r+.5-n/2)*t.width,t)})}function Y(t,e,n,r,i,o,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/2),o.extra.column&&o.extra.column.width&&+o.extra.column.width>0&&(t.width=Math.min(t.width,+o.extra.column.width)),r>0&&(t.width-=2*a),t)})}function K(t,e,n,r,i,o,a){return t.map(function(t,n){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/2),o.extra.column&&o.extra.column.width&&+o.extra.column.width>0&&(t.width=Math.min(t.width,+o.extra.column.width)),t)})}function Q(t,e,n){var r=e.width-e.area[1]-e.area[3],i=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&i>1&&"justify"==e.xAxis.boundaryGap&&(i-=1);var o=r/i,a=[],s=e.area[3],l=e.width-e.area[1];return t.forEach(function(t,e){a.push(s+e*o)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?a.push(s+t.length*o):a.push(l)),{xAxisPoints:a,startX:s,endX:l,eachSpacing:o}}function Z(t,e,n,r,i,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=o.height-o.area[0]-o.area[2];return t.forEach(function(t,a){if(null===t)l.push(null);else{var u=[];t.forEach(function(t,l){var h={};h.x=r[a]+Math.round(i/2);var f=t.value||t,p=c*(f-e)/(n-e);p*=s,h.y=o.height-Math.round(p)-o.area[2],u.push(h)}),l.push(u)}}),l}function tt(t,e,n,r,i,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l="center";"line"!=o.type&&"area"!=o.type||(l=o.xAxis.boundaryGap);var c=[],u=o.height-o.area[0]-o.area[2];return t.forEach(function(t,a){if(null===t)c.push(null);else{var h={};h.color=t.color,h.x=r[a],"center"==l&&(h.x+=Math.round(i/2));var f=t;"object"===typeof t&&null!==t&&(f=t.value);var p=u*(f-e)/(n-e);p*=s,h.y=o.height-Math.round(p)-o.area[2],c.push(h)}}),c}function et(t,e,n,r,i,o,a,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],h=o.height-o.area[0]-o.area[2];return t.forEach(function(t,a){if(null===t)u.push(null);else{var f={};if(f.color=t.color,f.x=r[a]+Math.round(i/2),s>0){for(var p=0,d=0;d<=s;d++)p+=l[d].data[a];var v=p-t,g=h*(p-e)/(n-e),y=h*(v-e)/(n-e)}else p=t,g=h*(p-e)/(n-e),y=0;var x=y;g*=c,x*=c,f.y=o.height-Math.round(g)-o.area[2],f.y0=o.height-Math.round(x)-o.area[2],u.push(f)}}),u}function nt(t,e,n,r){var i,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;i="stack"==r?m(t,e.categories.length):x(t);var a=[];i=i.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),i.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){a.push(t)}):a.push(t.value):a.push(t)});var s=0,l=0;if(a.length>0&&(s=Math.min.apply(this,a),l=Math.max.apply(this,a)),o>-1?("number"===typeof e.yAxis.data[o].min&&(s=Math.min(e.yAxis.data[o].min,s)),"number"===typeof e.yAxis.data[o].max&&(l=Math.max(e.yAxis.data[o].max,l))):("number"===typeof e.yAxis.min&&(s=Math.min(e.yAxis.min,s)),"number"===typeof e.yAxis.max&&(l=Math.max(e.yAxis.max,l))),s===l){var c=l||10;l+=c}for(var u=g(s,l),h=u.minRange,f=u.maxRange,p=[],d=(f-h)/n.yAxisSplit,v=0;v<=n.yAxisSplit;v++)p.push(h+d*v);return p.reverse()}function rt(t,e,n){var r=i({},{type:""},e.extra.column),a=e.yAxis.data.length,s=new Array(a);if(a>0){for(var l=0;l<a;l++){s[l]=[];for(var c=0;c<t.length;c++)t[c].index==l&&s[l].push(t[c])}for(var u=new Array(a),h=new Array(a),f=new Array(a),p=function(t){var i=e.yAxis.data[t];1==e.yAxis.disabled&&(i.disabled=!0),u[t]=nt(s[t],e,n,r.type,t);var a=i.fontSize||n.fontSize;f[t]={position:i.position?i.position:"left",width:0},h[t]=u[t].map(function(e){return e=o.toFixed(e,6),e=i.format?i.format(Number(e)):e,f[t].width=Math.max(f[t].width,y(e,a)+5),e});var l=i.calibration?4*e.pixelRatio:0;f[t].width+=l+3*e.pixelRatio,!0===i.disabled&&(f[t].width=0)},d=0;d<a;d++)p(d)}else{u=new Array(1),h=new Array(1),f=new Array(1);u[0]=nt(t,e,n,r.type),f[0]={position:"left",width:0};var v=e.yAxis.fontSize||n.fontSize;h[0]=u[0].map(function(t){return t=o.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,f[0].width=Math.max(f[0].width,y(t,v)+5),t}),f[0].width+=3*e.pixelRatio,!0===e.yAxis.disabled?(f[0]={position:"left",width:0},e.yAxis.data[0]={disabled:!0}):e.yAxis.data[0]={disabled:!1,position:"left",max:e.yAxis.max,min:e.yAxis.min,format:e.yAxis.format}}return{rangesFormat:h,ranges:u,yAxisWidth:f}}function it(t,e,n,r,i){for(var o=[].concat(n.chartData.yAxisData.ranges),a=n.height-n.area[0]-n.area[2],s=n.area[0],l=[],c=0;c<o.length;c++){var u=o[c].shift(),h=o[c].pop(),f=u-(u-h)*(t-s)/a;f=n.yAxis.data[c].format?n.yAxis.data[c].format(Number(f)):f.toFixed(0),l.push(String(f))}return l}function ot(t,e){for(var n,r,i=e.height-e.area[0]-e.area[2],o=0;o<t.length;o++){t[o].yAxisIndex=t[o].yAxisIndex?t[o].yAxisIndex:0;var a=[].concat(e.chartData.yAxisData.ranges[t[o].yAxisIndex]);n=a.pop(),r=a.shift();var s=i*(t[o].value-n)/(r-n);t[o].y=e.height-Math.round(s)-e.area[2]}return t}function at(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function st(t,e,n,r,i){r.beginPath(),"hollow"==i.dataPointShapeType?(r.setStrokeStyle(e),r.setFillStyle(i.background),r.setLineWidth(2*i.pixelRatio)):(r.setStrokeStyle("#ffffff"),r.setFillStyle(e),r.setLineWidth(1*i.pixelRatio)),"diamond"===n?t.forEach(function(t,e){null!==t&&(r.moveTo(t.x,t.y-4.5),r.lineTo(t.x-4.5,t.y),r.lineTo(t.x,t.y+4.5),r.lineTo(t.x+4.5,t.y),r.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(r.moveTo(t.x+2.5*i.pixelRatio,t.y),r.arc(t.x,t.y,3*i.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(r.moveTo(t.x-3.5,t.y-3.5),r.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(r.moveTo(t.x,t.y-4.5),r.lineTo(t.x-4.5,t.y+4.5),r.lineTo(t.x+4.5,t.y+4.5),r.lineTo(t.x,t.y-4.5))}),r.closePath(),r.fill(),r.stroke()}function lt(t,e,n,r){var i=t.title.fontSize||e.titleFontSize,o=t.subtitle.fontSize||e.subtitleFontSize,a=t.title.name||"",s=t.subtitle.name||"",l=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,u=a?i:0,h=s?o:0,f=5;if(s){var p=y(s,o),d=r.x-p/2+(t.subtitle.offsetX||0),v=r.y+o/2+(t.subtitle.offsetY||0);a&&(v+=(u+f)/2),n.beginPath(),n.setFontSize(o),n.setFillStyle(c),n.fillText(s,d,v),n.closePath(),n.stroke()}if(a){var g=y(a,i),x=r.x-g/2+(t.title.offsetX||0),m=r.y+i/2+(t.title.offsetY||0);s&&(m-=(h+f)/2),n.beginPath(),n.setFontSize(i),n.setFillStyle(l),n.fillText(a,x,m),n.closePath(),n.stroke()}}function ct(t,e,n,r){var i=e.data;t.forEach(function(t,o){if(null!==t){r.beginPath(),r.setFontSize(e.textSize||n.fontSize),r.setFillStyle(e.textColor||"#666666");var a=i[o];"object"===typeof i[o]&&null!==i[o]&&(a=i[o].value);var s=e.format?e.format(a):a;r.fillText(String(s),t.x-y(s,e.textSize||n.fontSize)/2,t.y-4),r.closePath(),r.stroke()}})}function ut(t,e,n,r,i,o){e-=t.width/2+i.gaugeLabelTextMargin;for(var a=t.startAngle-t.endAngle+1,s=a/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,h=t.startNumber,f=0;f<t.splitLine.splitNumber+1;f++){var p={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)},d=t.labelFormat?t.labelFormat(h):h;p.x+=n.x-y(d)/2,p.y+=n.y;var v=p.x,g=p.y;o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(t.labelColor||"#666666"),o.fillText(d,v,g+i.fontSize/2),o.closePath(),o.stroke(),u+=s,u>=2&&(u%=2),h+=c}}function ht(t,e,n,r,i,a){var s=r.extra.radar||{};e+=i.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=p(c.x,c.y,n),h=u.x,f=u.y;o.approximatelyEqual(c.x,0)?h-=y(r.categories[l]||"")/2:c.x<0&&(h-=y(r.categories[l]||"")),a.beginPath(),a.setFontSize(i.fontSize),a.setFillStyle(s.labelColor||"#666666"),a.fillText(r.categories[l]||"",h,f+i.fontSize/2),a.closePath(),a.stroke()})}function ft(t,e,n,r,i,a){for(var s=n.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):o.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var n=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),r=t.color,i=t._radius_;return{arc:n,text:e,color:r,radius:i,textColor:t.textColor,textSize:t.textSize}}),h=0;h<u.length;h++){var f=u[h],v=Math.cos(f.arc)*(f.radius+s),g=Math.sin(f.arc)*(f.radius+s),x=Math.cos(f.arc)*f.radius,m=Math.sin(f.arc)*f.radius,_=v>=0?v+n.pieChartTextPadding:v-n.pieChartTextPadding,b=g,w=y(f.text),S=b;c&&o.isSameXCoordinateArea(c.start,{x:_})&&(S=_>0?Math.min(b,c.start.y):v<0?Math.max(b,c.start.y):b>0?Math.max(b,c.start.y):Math.min(b,c.start.y)),_<0&&(_-=w);var A={lineStart:{x:x,y:m},lineEnd:{x:v,y:g},start:{x:_,y:S},width:w,height:n.fontSize,text:f.text,color:f.color,textColor:f.textColor,textSize:f.textSize};c=d(A,c),l.push(c)}for(var T=0;T<l.length;T++){var P=l[T],k=p(P.lineStart.x,P.lineStart.y,a),O=p(P.lineEnd.x,P.lineEnd.y,a),D=p(P.start.x,P.start.y,a);r.setLineWidth(1*e.pixelRatio),r.setFontSize(n.fontSize),r.beginPath(),r.setStrokeStyle(P.color),r.setFillStyle(P.color),r.moveTo(k.x,k.y);var C=P.start.x<0?D.x+P.width:D.x,M=P.start.x<0?D.x-5:D.x+5;r.quadraticCurveTo(O.x,O.y,C,D.y),r.moveTo(k.x,k.y),r.stroke(),r.closePath(),r.beginPath(),r.moveTo(D.x+P.width,D.y),r.arc(C,D.y,2,0,2*Math.PI),r.closePath(),r.fill(),r.beginPath(),r.setFontSize(P.textSize||n.fontSize),r.setFillStyle(P.textColor||"#666666"),r.fillText(P.text,M,D.y+3),r.closePath(),r.stroke(),r.closePath()}}function pt(t,e,n,r){var i=e.extra.tooltip||{};i.gridType=void 0==i.gridType?"solid":i.gridType,i.dashLength=void 0==i.dashLength?4:i.dashLength;var o=e.area[0],s=e.height-e.area[2];if("dash"==i.gridType&&r.setLineDash([i.dashLength,i.dashLength]),r.setStrokeStyle(i.gridColor||"#cccccc"),r.setLineWidth(1*e.pixelRatio),r.beginPath(),r.moveTo(t,o),r.lineTo(t,s),r.stroke(),r.setLineDash([]),i.xAxisLabel){var l=e.categories[e.tooltip.index];r.setFontSize(n.fontSize);var c=y(l,n.fontSize),u=t-.5*c,h=s;r.beginPath(),r.setFillStyle(a(i.labelBgColor||n.toolTipBackground,i.labelBgOpacity||n.toolTipOpacity)),r.setStrokeStyle(i.labelBgColor||n.toolTipBackground),r.setLineWidth(1*e.pixelRatio),r.rect(u-n.toolTipPadding,h,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),r.closePath(),r.stroke(),r.fill(),r.beginPath(),r.setFontSize(n.fontSize),r.setFillStyle(i.labelFontColor||n.fontColor),r.fillText(String(l),u,h+n.toolTipPadding+n.fontSize),r.closePath(),r.stroke()}}function dt(t,e,n){for(var r=i({},{type:"solid",dashLength:4,data:[]},t.extra.markLine),o=t.area[3],s=t.width-t.area[1],l=ot(r.data,t),c=0;c<l.length;c++){var u=i({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},l[c]);if("dash"==r.type&&n.setLineDash([r.dashLength,r.dashLength]),n.setStrokeStyle(u.lineColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(o,u.y),n.lineTo(s,u.y),n.stroke(),n.setLineDash([]),u.showLabel){var h=t.yAxis.format?t.yAxis.format(Number(u.value)):u.value;n.setFontSize(e.fontSize);var f=y(h,e.fontSize),p=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,d=Math.max(t.area[3],f+2*e.toolTipPadding),v=d-p,g=p+(v-f)/2,x=u.y;n.setFillStyle(a(u.labelBgColor,u.labelBgOpacity)),n.setStrokeStyle(u.labelBgColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.rect(p,x-.5*e.fontSize-e.toolTipPadding,v,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(u.labelFontColor),n.fillText(String(h),g,x+.5*e.fontSize),n.stroke()}}}function vt(t,e,n,r,o){var s=i({},{gridType:"solid",dashLength:4},t.extra.tooltip),l=t.area[3],c=t.width-t.area[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(l,t.tooltip.offset.y),n.lineTo(c,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel)for(var u=it(t.tooltip.offset.y,t.series,t,e,r),h=t.chartData.yAxisData.yAxisWidth,f=t.area[3],p=t.width-t.area[1],d=0;d<u.length;d++){n.setFontSize(e.fontSize);var v=y(u[d],e.fontSize),g=void 0,x=void 0,m=void 0;"left"==h[d].position?(g=f-h[d].width,x=Math.max(g,g+v+2*e.toolTipPadding)):(g=p,x=Math.max(g+h[d].width,g+v+2*e.toolTipPadding)),m=x-g;var _=g+(m-v)/2,b=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(a(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(g,b-.5*e.fontSize-e.toolTipPadding,m,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(u[d],_,b+.5*e.fontSize),n.closePath(),n.stroke(),"left"==h[d].position?f-=h[d].width+t.yAxis.padding:p+=h[d].width+t.yAxis.padding}}function gt(t,e,n,r,o){var s=i({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),l=e.area[0],c=e.height-e.area[2];r.beginPath(),r.setFillStyle(a(s.activeBgColor,s.activeBgOpacity)),r.rect(t-o/2,l,o,c-l),r.closePath(),r.fill()}function yt(t,e,n,r,o,s,l){var c=i({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),u=4*n.pixelRatio,h=5*n.pixelRatio,f=8*n.pixelRatio,p=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||pt(n.tooltip.offset.x,n,r,o),e=i({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return y(t.text,r.fontSize)}),v=u+h+4*r.toolTipPadding+Math.max.apply(null,d),g=2*r.toolTipPadding+t.length*r.toolTipLineHeight;0!=c.showBox&&(e.x-Math.abs(n._scrollDistance_)+f+v>n.width&&(p=!0),g+e.y>n.height&&(e.y=n.height-g),o.beginPath(),o.setFillStyle(a(c.bgColor||r.toolTipBackground,c.bgOpacity||r.toolTipOpacity)),p?(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x-f,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x-f,e.y),o.lineTo(e.x-f-Math.round(v),e.y),o.lineTo(e.x-f-Math.round(v),e.y+g),o.lineTo(e.x-f,e.y+g),o.lineTo(e.x-f,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)):(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x+f,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x+f,e.y),o.lineTo(e.x+f+Math.round(v),e.y),o.lineTo(e.x+f+Math.round(v),e.y+g),o.lineTo(e.x+f,e.y+g),o.lineTo(e.x+f,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)),o.closePath(),o.fill(),t.forEach(function(t,n){if(null!==t.color){o.beginPath(),o.setFillStyle(t.color);var i=e.x+f+2*r.toolTipPadding,a=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding+1;p&&(i=e.x-v-f+2*r.toolTipPadding),o.fillRect(i,a,u,r.fontSize),o.closePath()}}),t.forEach(function(t,n){var i=e.x+f+2*r.toolTipPadding+u+h;p&&(i=e.x-v-f+2*r.toolTipPadding+ +u+h);var a=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding;o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(c.fontColor),o.fillText(t.text,i,a+r.fontSize),o.closePath(),o.stroke()}))}function xt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.chartData.xAxisData,s=a.xAxisPoints,l=a.eachSpacing,c=i({},{type:"group",width:l/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),u=[];r.save();var h=-2,f=s.length+2;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(r.translate(e._scrollDistance_,0),h=Math.floor(-e._scrollDistance_/l)-2,f=h+e.xAxis.itemCount+4),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===o&&gt(e.tooltip.offset.x,e,n,r,l),t.forEach(function(i,a){var p,d,v;p=[].concat(e.chartData.yAxisData.ranges[i.index]),d=p.pop(),v=p.shift();var g=i.data;switch(c.type){case"group":var y=tt(g,d,v,s,l,e,n,o),x=et(g,d,v,s,l,e,n,a,t,o);u.push(x),y=J(y,l,t.length,a,n,e);for(var m=0;m<y.length;m++){var _=y[m];if(null!==_&&m>h&&m<f){r.beginPath(),r.setStrokeStyle(_.color||i.color),r.setLineWidth(1),r.setFillStyle(_.color||i.color);var b=_.x-_.width/2,w=e.height-_.y-e.area[2];r.moveTo(b-1,_.y),r.lineTo(b+_.width-2,_.y),r.lineTo(b+_.width-2,e.height-e.area[2]),r.lineTo(b,e.height-e.area[2]),r.lineTo(b,_.y),r.closePath(),r.stroke(),r.fill()}}break;case"stack":y=et(g,d,v,s,l,e,n,a,t,o);u.push(y),y=K(y,l,t.length,a,n,e,t);for(var S=0;S<y.length;S++){var A=y[S];if(null!==A&&S>h&&S<f){r.beginPath(),r.setFillStyle(A.color||i.color);b=A.x-A.width/2+1,w=e.height-A.y-e.area[2];var T=e.height-A.y0-e.area[2];a>0&&(w-=T),r.moveTo(b,A.y),r.fillRect(b,A.y,A.width-2,w),r.closePath(),r.fill()}}break;case"meter":y=tt(g,d,v,s,l,e,n,o);if(u.push(y),y=Y(y,l,t.length,a,n,e,c.meter.border),0==a)for(var P=0;P<y.length;P++){var k=y[P];if(null!==k&&P>h&&P<f){r.beginPath(),r.setFillStyle(c.meter.fillColor);b=k.x-k.width/2,w=e.height-k.y-e.area[2];r.moveTo(b,k.y),r.fillRect(b,k.y,k.width,w),r.closePath(),r.fill(),c.meter.border>0&&(r.beginPath(),r.setStrokeStyle(i.color),r.setLineWidth(c.meter.border*e.pixelRatio),r.moveTo(b+.5*c.meter.border,k.y+w),r.lineTo(b+.5*c.meter.border,k.y+.5*c.meter.border),r.lineTo(b+k.width-.5*c.meter.border,k.y+.5*c.meter.border),r.lineTo(b+k.width-.5*c.meter.border,k.y+w),r.stroke())}}else for(var O=0;O<y.length;O++){var D=y[O];if(null!==D&&O>h&&O<f){r.beginPath(),r.setFillStyle(D.color||i.color);b=D.x-D.width/2,w=e.height-D.y-e.area[2];r.moveTo(b,D.y),r.fillRect(b,D.y,D.width,w),r.closePath(),r.fill()}}break}}),!1!==e.dataLabel&&1===o&&t.forEach(function(i,a){var u,h,f;u=[].concat(e.chartData.yAxisData.ranges[i.index]),h=u.pop(),f=u.shift();var p=i.data;switch(c.type){case"group":var d=tt(p,h,f,s,l,e,n,o);d=J(d,l,t.length,a,n,e),ct(d,i,n,r);break;case"stack":d=et(p,h,f,s,l,e,n,a,t,o);ct(d,i,n,r);break;case"meter":d=tt(p,h,f,s,l,e,n,o);ct(d,i,n,r);break}}),r.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function mt(t,e,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=i({},{color:{},average:{}},n.extra.candle);s.color=i({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=i({},{show:!1,name:[],day:[],color:r.colors},s.average),n.extra.candle=s;var l=n.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=[];o.save();var p=-2,d=c.length+2,v=0,g=n.width+u;return n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&(o.translate(n._scrollDistance_,0),p=Math.floor(-n._scrollDistance_/u)-2,d=p+n.xAxis.itemCount+4,v=-n._scrollDistance_-u+n.area[3],g=v+(n.xAxis.itemCount+4)*u),s.average.show&&e.forEach(function(t,e){var i,s,l;i=[].concat(n.chartData.yAxisData.ranges[t.index]),s=i.pop(),l=i.shift();for(var h=t.data,p=tt(h,s,l,c,u,n,r,a),d=I(p),y=0;y<d.length;y++){var x=d[y];if(o.beginPath(),o.setStrokeStyle(t.color),o.setLineWidth(1),1===x.length)o.moveTo(x[0].x,x[0].y),o.arc(x[0].x,x[0].y,1,0,2*Math.PI);else{o.moveTo(x[0].x,x[0].y);for(var m=0,_=0;_<x.length;_++){var b=x[_];if(0==m&&b.x>v&&(o.moveTo(b.x,b.y),m=1),_>0&&b.x>v&&b.x<g){var w=f(x,_-1);o.bezierCurveTo(w.ctrA.x,w.ctrA.y,w.ctrB.x,w.ctrB.y,b.x,b.y)}}o.moveTo(x[0].x,x[0].y)}o.closePath(),o.stroke()}}),t.forEach(function(t,e){var i,l,f;i=[].concat(n.chartData.yAxisData.ranges[t.index]),l=i.pop(),f=i.shift();var v=t.data,g=Z(v,l,f,c,u,n,r,a);h.push(g);for(var y=I(g),x=0;x<y[0].length;x++)if(x>p&&x<d){var m=y[0][x];o.beginPath(),v[x][1]-v[x][0]>0?(o.setStrokeStyle(s.color.upLine),o.setFillStyle(s.color.upFill),o.setLineWidth(1*n.pixelRatio),o.moveTo(m[3].x,m[3].y),o.lineTo(m[1].x,m[1].y),o.lineTo(m[1].x-u/4,m[1].y),o.lineTo(m[0].x-u/4,m[0].y),o.lineTo(m[0].x,m[0].y),o.lineTo(m[2].x,m[2].y),o.lineTo(m[0].x,m[0].y),o.lineTo(m[0].x+u/4,m[0].y),o.lineTo(m[1].x+u/4,m[1].y),o.lineTo(m[1].x,m[1].y),o.moveTo(m[3].x,m[3].y)):(o.setStrokeStyle(s.color.downLine),o.setFillStyle(s.color.downFill),o.setLineWidth(1*n.pixelRatio),o.moveTo(m[3].x,m[3].y),o.lineTo(m[0].x,m[0].y),o.lineTo(m[0].x-u/4,m[0].y),o.lineTo(m[1].x-u/4,m[1].y),o.lineTo(m[1].x,m[1].y),o.lineTo(m[2].x,m[2].y),o.lineTo(m[1].x,m[1].y),o.lineTo(m[1].x+u/4,m[1].y),o.lineTo(m[0].x+u/4,m[0].y),o.lineTo(m[0].x,m[0].y),o.moveTo(m[3].x,m[3].y)),o.closePath(),o.fill(),o.stroke()}}),o.restore(),{xAxisPoints:c,calPoints:h,eachSpacing:u}}function _t(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},e.extra.area),l=e.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=e.height-e.area[2],p=[];r.save();var d=0,v=e.width+u;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(r.translate(e._scrollDistance_,0),d=-e._scrollDistance_-u+e.area[3],v=d+(e.xAxis.itemCount+4)*u),t.forEach(function(t,i){var l,g,y;l=[].concat(e.chartData.yAxisData.ranges[t.index]),g=l.pop(),y=l.shift();var x=t.data,m=tt(x,g,y,c,u,e,n,o);p.push(m);for(var _=I(m),b=0;b<_.length;b++){var w=_[b];if(r.beginPath(),r.setStrokeStyle(a(t.color,s.opacity)),s.gradient){var S=r.createLinearGradient(0,e.area[0],0,e.height-e.area[2]);S.addColorStop("0",a(t.color,s.opacity)),S.addColorStop("1.0",a("#FFFFFF",.1)),r.setFillStyle(S)}else r.setFillStyle(a(t.color,s.opacity));if(r.setLineWidth(s.width*e.pixelRatio),w.length>1){var A=w[0],T=w[w.length-1];r.moveTo(A.x,A.y);var P=0;if("curve"===s.type)for(var k=0;k<w.length;k++){var O=w[k];if(0==P&&O.x>d&&(r.moveTo(O.x,O.y),P=1),k>0&&O.x>d&&O.x<v){var D=f(w,k-1);r.bezierCurveTo(D.ctrA.x,D.ctrA.y,D.ctrB.x,D.ctrB.y,O.x,O.y)}}else for(var C=0;C<w.length;C++){var M=w[C];0==P&&M.x>d&&(r.moveTo(M.x,M.y),P=1),C>0&&M.x>d&&M.x<v&&r.lineTo(M.x,M.y)}r.lineTo(T.x,h),r.lineTo(A.x,h),r.lineTo(A.x,A.y)}else{var $=w[0];r.moveTo($.x-u/2,$.y),r.lineTo($.x+u/2,$.y),r.lineTo($.x+u/2,h),r.lineTo($.x-u/2,h),r.moveTo($.x-u/2,$.y)}if(r.closePath(),r.fill(),s.addLine){if("dash"==t.lineType){var L=t.dashLength?t.dashLength:8;L*=e.pixelRatio,r.setLineDash([L,L])}if(r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(s.width*e.pixelRatio),1===w.length)r.moveTo(w[0].x,w[0].y),r.arc(w[0].x,w[0].y,1,0,2*Math.PI);else{r.moveTo(w[0].x,w[0].y);var R=0;if("curve"===s.type)for(var F=0;F<w.length;F++){var E=w[F];if(0==R&&E.x>d&&(r.moveTo(E.x,E.y),R=1),F>0&&E.x>d&&E.x<v){var j=f(w,F-1);r.bezierCurveTo(j.ctrA.x,j.ctrA.y,j.ctrB.x,j.ctrB.y,E.x,E.y)}}else for(var N=0;N<w.length;N++){var z=w[N];0==R&&z.x>d&&(r.moveTo(z.x,z.y),R=1),N>0&&z.x>d&&z.x<v&&r.lineTo(z.x,z.y)}r.moveTo(w[0].x,w[0].y)}r.stroke(),r.setLineDash([])}}!1!==e.dataPointShape&&st(m,t.color,t.pointShape,r,e)}),!1!==e.dataLabel&&1===o&&t.forEach(function(t,i){var a,s,l;a=[].concat(e.chartData.yAxisData.ranges[t.index]),s=a.pop(),l=a.shift();var h=t.data,f=tt(h,s,l,c,u,e,n,o);ct(f,t,n,r)}),r.restore(),{xAxisPoints:c,calPoints:p,eachSpacing:u}}function bt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=i({},{type:"straight",width:2},e.extra.line);a.width*=e.pixelRatio;var s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=[];r.save();var h=0,p=e.width+c;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(r.translate(e._scrollDistance_,0),h=-e._scrollDistance_-c+e.area[3],p=h+(e.xAxis.itemCount+4)*c),t.forEach(function(t,i){var s,d,v;s=[].concat(e.chartData.yAxisData.ranges[t.index]),d=s.pop(),v=s.shift();var g=t.data,y=tt(g,d,v,l,c,e,n,o);u.push(y);var x=I(y);if("dash"==t.lineType){var m=t.dashLength?t.dashLength:8;m*=e.pixelRatio,r.setLineDash([m,m])}r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(a.width),x.forEach(function(t,e){if(1===t.length)r.moveTo(t[0].x,t[0].y),r.arc(t[0].x,t[0].y,1,0,2*Math.PI);else{r.moveTo(t[0].x,t[0].y);var n=0;if("curve"===a.type)for(var i=0;i<t.length;i++){var o=t[i];if(0==n&&o.x>h&&(r.moveTo(o.x,o.y),n=1),i>0&&o.x>h&&o.x<p){var s=f(t,i-1);r.bezierCurveTo(s.ctrA.x,s.ctrA.y,s.ctrB.x,s.ctrB.y,o.x,o.y)}}else for(var l=0;l<t.length;l++){var c=t[l];0==n&&c.x>h&&(r.moveTo(c.x,c.y),n=1),l>0&&c.x>h&&c.x<p&&r.lineTo(c.x,c.y)}r.moveTo(t[0].x,t[0].y)}}),r.stroke(),r.setLineDash([]),!1!==e.dataPointShape&&st(y,t.color,t.pointShape,r,e)}),!1!==e.dataLabel&&1===o&&t.forEach(function(t,i){var a,s,u;a=[].concat(e.chartData.yAxisData.ranges[t.index]),s=a.pop(),u=a.shift();var h=t.data,f=tt(h,s,u,l,c,e,n,o);ct(f,t,n,r)}),r.restore(),{xAxisPoints:l,calPoints:u,eachSpacing:c}}function wt(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.chartData.xAxisData,s=o.xAxisPoints,l=o.eachSpacing,c=e.height-e.area[2],u=[],h=0,p=0;t.forEach(function(t,e){"column"==t.type&&(p+=1)}),r.save();var d=-2,v=s.length+2,g=0,y=e.width+l;if(e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(r.translate(e._scrollDistance_,0),d=Math.floor(-e._scrollDistance_/l)-2,v=d+e.xAxis.itemCount+4,g=-e._scrollDistance_-l+e.area[3],y=g+(e.xAxis.itemCount+4)*l),t.forEach(function(t,o){var x,m,_;x=[].concat(e.chartData.yAxisData.ranges[t.index]),m=x.pop(),_=x.shift();var b=t.data,w=tt(b,m,_,s,l,e,n,i);if(u.push(w),"column"==t.type){w=J(w,l,p,h,n,e);for(var S=0;S<w.length;S++){var A=w[S];if(null!==A&&S>d&&S<v){r.beginPath(),r.setStrokeStyle(A.color||t.color),r.setLineWidth(1),r.setFillStyle(A.color||t.color);var T=A.x-A.width/2;e.height,A.y,e.area[2];r.moveTo(T,A.y),r.moveTo(T-1,A.y),r.lineTo(T+A.width-2,A.y),r.lineTo(T+A.width-2,e.height-e.area[2]),r.lineTo(T,e.height-e.area[2]),r.lineTo(T,A.y),r.closePath(),r.stroke(),r.fill(),r.closePath(),r.fill()}}h+=1}if("area"==t.type)for(var P=I(w),k=0;k<P.length;k++){var O=P[k];if(r.beginPath(),r.setStrokeStyle(t.color),r.setFillStyle(a(t.color,.2)),r.setLineWidth(2*e.pixelRatio),O.length>1){var D=O[0],C=O[O.length-1];r.moveTo(D.x,D.y);var M=0;if("curve"===t.style)for(var $=0;$<O.length;$++){var L=O[$];if(0==M&&L.x>g&&(r.moveTo(L.x,L.y),M=1),$>0&&L.x>g&&L.x<y){var R=f(O,$-1);r.bezierCurveTo(R.ctrA.x,R.ctrA.y,R.ctrB.x,R.ctrB.y,L.x,L.y)}}else for(var F=0;F<O.length;F++){var E=O[F];0==M&&E.x>g&&(r.moveTo(E.x,E.y),M=1),F>0&&E.x>g&&E.x<y&&r.lineTo(E.x,E.y)}r.lineTo(C.x,c),r.lineTo(D.x,c),r.lineTo(D.x,D.y)}else{var j=O[0];r.moveTo(j.x-l/2,j.y),r.lineTo(j.x+l/2,j.y),r.lineTo(j.x+l/2,c),r.lineTo(j.x-l/2,c),r.moveTo(j.x-l/2,j.y)}r.closePath(),r.fill()}if("line"==t.type){var N=I(w);N.forEach(function(n,i){if("dash"==t.lineType){var o=t.dashLength?t.dashLength:8;o*=e.pixelRatio,r.setLineDash([o,o])}if(r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(2*e.pixelRatio),1===n.length)r.moveTo(n[0].x,n[0].y),r.arc(n[0].x,n[0].y,1,0,2*Math.PI);else{r.moveTo(n[0].x,n[0].y);var a=0;if("curve"==t.style)for(var s=0;s<n.length;s++){var l=n[s];if(0==a&&l.x>g&&(r.moveTo(l.x,l.y),a=1),s>0&&l.x>g&&l.x<y){var c=f(n,s-1);r.bezierCurveTo(c.ctrA.x,c.ctrA.y,c.ctrB.x,c.ctrB.y,l.x,l.y)}}else for(var u=0;u<n.length;u++){var h=n[u];0==a&&h.x>g&&(r.moveTo(h.x,h.y),a=1),u>0&&h.x>g&&h.x<y&&r.lineTo(h.x,h.y)}r.moveTo(n[0].x,n[0].y)}r.stroke(),r.setLineDash([])})}"point"==t.type&&(t.addPoint=!0),1==t.addPoint&&"column"!==t.type&&st(w,t.color,t.pointShape,r,e)}),!1!==e.dataLabel&&1===i){h=0;t.forEach(function(t,o){var a,c,u;a=[].concat(e.chartData.yAxisData.ranges[t.index]),c=a.pop(),u=a.shift();var f=t.data,d=tt(f,c,u,s,l,e,n,i);"column"!==t.type?ct(d,t,n,r):(d=J(d,l,p,h,n,e),ct(d,t,n,r),h+=1)})}return r.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function St(t,e,n,r,i,o){var a=t.extra.tooltip||{};a.horizentalLine&&t.tooltip&&1===r&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&vt(t,e,n,i,o),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===r&&yt(t.tooltip.textList,t.tooltip.offset,t,e,n,i,o),n.restore()}function At(t,e,n,r){var i=e.chartData.xAxisData,o=i.xAxisPoints,a=i.startX,s=i.endX,l=i.eachSpacing,c="center";"line"!=e.type&&"area"!=e.type||(c=e.xAxis.boundaryGap);var u=e.height-e.area[2],f=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var p=e.height-e.area[2]+n.xAxisHeight,d=s-a,v=l*(o.length-1),g=d*d/v,x=0;e._scrollDistance_&&(x=-e._scrollDistance_*d/v),r.beginPath(),r.setLineCap("round"),r.setLineWidth(6*e.pixelRatio),r.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),r.moveTo(a,p),r.lineTo(s,p),r.stroke(),r.closePath(),r.beginPath(),r.setLineCap("round"),r.setLineWidth(6*e.pixelRatio),r.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),r.moveTo(a+x,p),r.lineTo(a+x+g,p),r.stroke(),r.closePath(),r.setLineCap("butt")}if(r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&r.translate(e._scrollDistance_,0),!0===e.xAxis.calibration&&(r.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),r.setLineCap("butt"),r.setLineWidth(1*e.pixelRatio),o.forEach(function(t,n){n>0&&(r.beginPath(),r.moveTo(t-l/2,u),r.lineTo(t-l/2,u+3*e.pixelRatio),r.closePath(),r.stroke())})),!0!==e.xAxis.disableGrid&&(r.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),r.setLineCap("butt"),r.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&r.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),e.xAxis.gridEval=e.xAxis.gridEval||1,o.forEach(function(t,n){n%e.xAxis.gridEval==0&&(r.beginPath(),r.moveTo(t,u),r.lineTo(t,f),r.stroke())}),r.setLineDash([])),!0!==e.xAxis.disabled){var m=t.length;e.xAxis.labelCount&&(m=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,m-=1);for(var _=Math.ceil(t.length/m),b=[],w=t.length,S=0;S<w;S++)S%_!==0?b.push(""):b.push(t[S]);b[w-1]=t[w-1];var A=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?b.forEach(function(t,i){var a=-y(t,A)/2;"center"==c&&(a+=l/2);var s=0;e.xAxis.scrollShow&&(s=6*e.pixelRatio),r.beginPath(),r.setFontSize(A),r.setFillStyle(e.xAxis.fontColor||"#666666"),r.fillText(t,o[i]+a,u+A+(n.xAxisHeight-s-A)/2),r.closePath(),r.stroke()}):b.forEach(function(t,i){r.save(),r.beginPath(),r.setFontSize(A),r.setFillStyle(e.xAxis.fontColor||"#666666");var a=y(t),s=-a;"center"==c&&(s+=l/2);var f=h(o[i]+l/2,u+A/2+5,e.height),p=f.transX+15,d=f.transY;r.rotate(-1*n._xAxisTextAngle_),r.translate(p,d),r.fillText(t,o[i]+s,u+A+5),r.closePath(),r.stroke(),r.restore()})}r.restore(),e.xAxis.axisLine&&(r.beginPath(),r.setStrokeStyle(e.xAxis.axisLineColor),r.setLineWidth(1*e.pixelRatio),r.moveTo(a,e.height-e.area[2]),r.lineTo(s,e.height-e.area[2]),r.stroke())}function Tt(t,e,n,r){if(!0!==e.yAxis.disableGrid){for(var i=e.height-e.area[0]-e.area[2],o=i/n.yAxisSplit,a=e.area[3],s=e.chartData.xAxisData.xAxisPoints,l=e.chartData.xAxisData.eachSpacing,c=l*(s.length-1),u=a+c,h=[],f=0;f<n.yAxisSplit+1;f++)h.push(e.height-e.area[2]-o*f);r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&r.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&r.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),r.setStrokeStyle(e.yAxis.gridColor),r.setLineWidth(1*e.pixelRatio),h.forEach(function(t,e){r.beginPath(),r.moveTo(a,t),r.lineTo(u,t),r.stroke()}),r.setLineDash([]),r.restore()}}function Pt(t,e,n,r){if(!0!==e.yAxis.disabled){var i=e.height-e.area[0]-e.area[2],o=i/n.yAxisSplit,a=e.area[3],s=e.width-e.area[1],l=e.height-e.area[2],c=l+n.xAxisHeight;e.xAxis.scrollShow&&(c-=3*e.pixelRatio),e.xAxis.rotateLabel&&(c=e.height-e.area[2]+3),r.beginPath(),r.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&r.fillRect(0,0,a,c),1==e.enableScroll&&r.fillRect(s,0,e.width,c),r.closePath(),r.stroke();for(var u=[],h=0;h<=n.yAxisSplit;h++)u.push(e.area[0]+o*h);for(var f=e.area[3],p=e.width-e.area[1],d=function(t){var i=e.yAxis.data[t];if(!0!==i.disabled){var o=e.chartData.yAxisData.rangesFormat[t],a=i.fontSize||n.fontSize,s=e.chartData.yAxisData.yAxisWidth[t];if(o.forEach(function(t,n){var o=u[n]?u[n]:l;r.beginPath(),r.setFontSize(a),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(i.axisLineColor||"#cccccc"),r.setFillStyle(i.fontColor||"#666666"),"left"==s.position?(r.fillText(String(t),f-s.width,o+a/2),1==i.calibration&&(r.moveTo(f,o),r.lineTo(f-3*e.pixelRatio,o))):(r.fillText(String(t),p+4*e.pixelRatio,o+a/2),1==i.calibration&&(r.moveTo(p,o),r.lineTo(p+3*e.pixelRatio,o))),r.closePath(),r.stroke()}),!1!==i.axisLine&&(r.beginPath(),r.setStrokeStyle(i.axisLineColor||"#cccccc"),r.setLineWidth(1*e.pixelRatio),"left"==s.position?(r.moveTo(f,e.height-e.area[2]),r.lineTo(f,e.area[0])):(r.moveTo(p,e.height-e.area[2]),r.lineTo(p,e.area[0])),r.stroke()),e.yAxis.showTitle){var c=i.titleFontSize||n.fontSize,h=i.title;r.beginPath(),r.setFontSize(c),r.setFillStyle(i.titleFontColor||"#666666"),"left"==s.position?r.fillText(h,f-y(h,c)/2,e.area[0]-10*e.pixelRatio):r.fillText(h,p-y(h,c)/2,e.area[0]-10*e.pixelRatio),r.closePath(),r.stroke()}"left"==s.position?f-=s.width+e.yAxis.padding:p+=s.width+e.yAxis.padding}},v=0;v<e.yAxis.data.length;v++)d(v)}}function kt(t,e,n,r,i){if(!1!==e.legend.show){var o=i.legendData,a=o.points,s=o.area,l=e.legend.padding,c=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,f=e.legend.itemGap,p=Math.max(e.legend.lineHeight*e.pixelRatio,c);r.beginPath(),r.setLineWidth(e.legend.borderWidth),r.setStrokeStyle(e.legend.borderColor),r.setFillStyle(e.legend.backgroundColor),r.moveTo(s.start.x,s.start.y),r.rect(s.start.x,s.start.y,s.width,s.height),r.closePath(),r.fill(),r.stroke(),a.forEach(function(t,i){var a=0,d=0;a=o.widthArr[i],d=o.heightArr[i];var v=0,g=0;"top"==e.legend.position||"bottom"==e.legend.position?(v=s.start.x+(s.width-a)/2,g=s.start.y+l+i*p):(a=0==i?0:o.widthArr[i-1],v=s.start.x+l+a,g=s.start.y+l+(s.height-d)/2),r.setFontSize(n.fontSize);for(var x=0;x<t.length;x++){var m=t[x];switch(m.area=[0,0,0,0],m.area[0]=v,m.area[1]=g,m.area[3]=g+p,r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(m.show?m.color:e.legend.hiddenColor),r.setFillStyle(m.show?m.color:e.legend.hiddenColor),m.legendShape){case"line":r.moveTo(v,g+.5*p-2*e.pixelRatio),r.fillRect(v,g+.5*p-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":r.moveTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio),r.lineTo(v+2.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),r.lineTo(v+12.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),r.lineTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio);break;case"diamond":r.moveTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio),r.lineTo(v+2.5*e.pixelRatio,g+.5*p),r.lineTo(v+7.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),r.lineTo(v+12.5*e.pixelRatio,g+.5*p),r.lineTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio);break;case"circle":r.moveTo(v+7.5*e.pixelRatio,g+.5*p),r.arc(v+7.5*e.pixelRatio,g+.5*p,5*e.pixelRatio,0,2*Math.PI);break;case"rect":r.moveTo(v,g+.5*p-5*e.pixelRatio),r.fillRect(v,g+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:r.moveTo(v,g+.5*p-5*e.pixelRatio),r.fillRect(v,g+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}r.closePath(),r.fill(),r.stroke(),v+=u+h;var _=.5*p+.5*c-2;r.beginPath(),r.setFontSize(c),r.setFillStyle(m.show?e.legend.fontColor:e.legend.hiddenColor),r.fillText(m.name,v,g+_),r.closePath(),r.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(v+=y(m.name,c)+f,m.area[2]=v):(m.area[2]=v+y(m.name,c)+f,v-=u+h,g+=p)}})}}function Ot(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=W(t,c,o);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(a(t.color,e.extra.pie.activeOpacity||.5)),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_+u,t._start_,t._start_+2*t._proportion_*Math.PI),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(s.borderColor),r.setFillStyle(t.color),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),r.closePath(),r.fill(),1==s.border&&r.stroke()}),"ring"===e.type){var h=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(h=Math.max(0,c-e.extra.pie.ringWidth)),r.beginPath(),r.setFillStyle(e.background||"#ffffff"),r.moveTo(l.x,l.y),r.arc(l.x,l.y,h,0,2*Math.PI),r.closePath(),r.fill()}if(!1!==e.dataLabel&&1===o){for(var f=!1,p=0,d=t.length;p<d;p++)if(t[p].data>0){f=!0;break}f&&ft(t,e,n,r,c,l)}return 1===o&&"ring"===e.type&&lt(e,n,r,l),{center:l,radius:c,series:t}}function Dt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding),u=s.minRadius||.5*c;t=U(t,s.type,u,c,o);var h=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(a(t.color,s.activeOpacity||.5)),r.moveTo(l.x,l.y),r.arc(l.x,l.y,h+t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(s.borderColor),r.setFillStyle(t.color),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),r.closePath(),r.fill(),1==s.border&&r.stroke()}),!1!==e.dataLabel&&1===o){for(var f=!1,p=0,d=t.length;p<d;p++)if(t[p].data>0){f=!0;break}f&&ft(t,e,n,r,c,l)}return{center:l,radius:c,series:t}}function Ct(t,e,n,r){var o,a,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,l=i({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio,gap:2*e.pixelRatio},e.extra.arcbar);t=H(t,l,s),o=l.center?l.center:{x:e.width/2,y:e.height/2},l.radius?a=l.radius:(a=Math.min(o.x,o.y),a-=5*e.pixelRatio,a-=l.width/2);for(var c=0;c<t.length;c++){var u=t[c];r.setLineWidth(l.width),r.setStrokeStyle(l.backgroundColor||"#E9E9E9"),r.setLineCap("round"),r.beginPath(),"default"==l.type?r.arc(o.x,o.y,a-(l.width+l.gap)*c,l.startAngle*Math.PI,l.endAngle*Math.PI,!1):r.arc(o.x,o.y,a-(l.width+l.gap)*c,0,2*Math.PI,!1),r.stroke(),r.setLineWidth(l.width),r.setStrokeStyle(u.color),r.setLineCap("round"),r.beginPath(),r.arc(o.x,o.y,a-(l.width+l.gap)*c,l.startAngle*Math.PI,u._proportion_*Math.PI,!1),r.stroke()}return lt(e,n,r,o),{center:o,radius:a,series:t}}function Mt(t,e,n,r,o){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,l=i({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);void 0==l.oldAngle&&(l.oldAngle=l.startAngle),void 0==l.oldData&&(l.oldData=0),t=V(t,l.startAngle,l.endAngle);var c={x:n.width/2,y:n.height/2},u=Math.min(c.x,c.y);u-=5*n.pixelRatio,u-=l.width/2;var h=u-l.width,f=0;if("progress"==l.type){var p=u-3*l.width;o.beginPath();var d=o.createLinearGradient(c.x,c.y-p,c.x,c.y+p);d.addColorStop("0",a(e[0].color,.3)),d.addColorStop("1.0",a("#FFFFFF",.1)),o.setFillStyle(d),o.arc(c.x,c.y,p,0,2*Math.PI,!1),o.fill(),o.setLineWidth(l.width),o.setStrokeStyle(a(e[0].color,.3)),o.setLineCap("round"),o.beginPath(),o.arc(c.x,c.y,h,l.startAngle*Math.PI,l.endAngle*Math.PI,!1),o.stroke(),f=l.startAngle-l.endAngle+1;l.splitLine.splitNumber;var v=f/l.splitLine.splitNumber/l.splitLine.childNumber,g=-u-.5*l.width-l.splitLine.fixRadius,y=-u-l.width-l.splitLine.fixRadius+l.splitLine.width;o.save(),o.translate(c.x,c.y),o.rotate((l.startAngle-1)*Math.PI);for(var x=l.splitLine.splitNumber*l.splitLine.childNumber+1,m=e[0].data*s,_=0;_<x;_++)o.beginPath(),m>_/x?o.setStrokeStyle(a(e[0].color,1)):o.setStrokeStyle(a(e[0].color,.3)),o.setLineWidth(3*n.pixelRatio),o.moveTo(g,0),o.lineTo(y,0),o.stroke(),o.rotate(v*Math.PI);o.restore(),e=H(e,l,s),o.setLineWidth(l.width),o.setStrokeStyle(e[0].color),o.setLineCap("round"),o.beginPath(),o.arc(c.x,c.y,h,l.startAngle*Math.PI,e[0]._proportion_*Math.PI,!1),o.stroke();var b=u-2.5*l.width;o.save(),o.translate(c.x,c.y),o.rotate((e[0]._proportion_-1)*Math.PI),o.beginPath(),o.setLineWidth(l.width/3);var w=o.createLinearGradient(0,.6*-b,0,.6*b);w.addColorStop("0",a("#FFFFFF",0)),w.addColorStop("0.5",a(e[0].color,1)),w.addColorStop("1.0",a("#FFFFFF",0)),o.setStrokeStyle(w),o.arc(0,0,b,.85*Math.PI,1.15*Math.PI,!1),o.stroke(),o.beginPath(),o.setLineWidth(1),o.setStrokeStyle(e[0].color),o.setFillStyle(e[0].color),o.moveTo(-b-l.width/3/2,-4),o.lineTo(-b-l.width/3/2-4,0),o.lineTo(-b-l.width/3/2,4),o.lineTo(-b-l.width/3/2,-4),o.stroke(),o.fill(),o.restore()}else{o.setLineWidth(l.width),o.setLineCap("butt");for(var S=0;S<t.length;S++){var A=t[S];o.beginPath(),o.setStrokeStyle(A.color),o.arc(c.x,c.y,u,A._startAngle_*Math.PI,A._endAngle_*Math.PI,!1),o.stroke()}o.save(),f=l.startAngle-l.endAngle+1;var T=f/l.splitLine.splitNumber,P=f/l.splitLine.splitNumber/l.splitLine.childNumber,k=-u-.5*l.width-l.splitLine.fixRadius,O=-u-.5*l.width-l.splitLine.fixRadius+l.splitLine.width,D=-u-.5*l.width-l.splitLine.fixRadius+l.splitLine.childWidth;o.translate(c.x,c.y),o.rotate((l.startAngle-1)*Math.PI);for(var C=0;C<l.splitLine.splitNumber+1;C++)o.beginPath(),o.setStrokeStyle(l.splitLine.color),o.setLineWidth(2*n.pixelRatio),o.moveTo(k,0),o.lineTo(O,0),o.stroke(),o.rotate(T*Math.PI);o.restore(),o.save(),o.translate(c.x,c.y),o.rotate((l.startAngle-1)*Math.PI);for(var M=0;M<l.splitLine.splitNumber*l.splitLine.childNumber+1;M++)o.beginPath(),o.setStrokeStyle(l.splitLine.color),o.setLineWidth(1*n.pixelRatio),o.moveTo(k,0),o.lineTo(D,0),o.stroke(),o.rotate(P*Math.PI);o.restore(),e=G(e,t,l,s);for(var $=0;$<e.length;$++){var L=e[$];o.save(),o.translate(c.x,c.y),o.rotate((L._proportion_-1)*Math.PI),o.beginPath(),o.setFillStyle(L.color),o.moveTo(l.pointer.width,0),o.lineTo(0,-l.pointer.width/2),o.lineTo(-h,0),o.lineTo(0,l.pointer.width/2),o.lineTo(l.pointer.width,0),o.closePath(),o.fill(),o.beginPath(),o.setFillStyle("#FFFFFF"),o.arc(0,0,l.pointer.width/6,0,2*Math.PI,!1),o.fill(),o.restore()}!1!==n.dataLabel&&ut(l,u,c,n,r,o)}return lt(n,r,o,c),1===s&&"gauge"===n.type&&(n.extra.gauge.oldAngle=e[0]._proportion_,n.extra.gauge.oldData=e[0].data),{center:c,radius:u,innerRadius:h,categories:t,totalAngle:f}}function $t(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},e.extra.radar),l=S(e.categories.length),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min(c.x-(w(e.categories)+n.radarLabelTextMargin),c.y-n.radarLabelTextMargin);u-=e.padding[1],r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(s.gridColor),l.forEach(function(t){var e=p(u*Math.cos(t),u*Math.sin(t),c);r.moveTo(c.x,c.y),r.lineTo(e.x,e.y)}),r.stroke(),r.closePath();for(var h=function(t){var n={};r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(s.gridColor),l.forEach(function(e,i){var o=p(u/s.gridCount*t*Math.cos(e),u/s.gridCount*t*Math.sin(e),c);0===i?(n=o,r.moveTo(o.x,o.y)):r.lineTo(o.x,o.y)}),r.lineTo(n.x,n.y),r.stroke(),r.closePath()},f=1;f<=s.gridCount;f++)h(f);var d=B(l,c,u,t,e,o);return d.forEach(function(t,n){if(r.beginPath(),r.setFillStyle(a(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?r.moveTo(t.position.x,t.position.y):r.lineTo(t.position.x,t.position.y)}),r.closePath(),r.fill(),!1!==e.dataPointShape){var i=t.data.map(function(t){return t.position});st(i,t.color,t.pointShape,r,e)}}),ht(l,u,c,e,n,r),{center:c,radius:u,angleList:l}}function Lt(t,e,n){n=0==n?1:n;for(var r=[],i=0;i<n;i++)r[i]=Math.random();return Math.floor(r.reduce(function(t,e){return t+e})/n*(e-t))+t}function Rt(t,e,n,r){for(var i=!1,o=0;o<e.length;o++)if(e[o].area){if(!(t[3]<e[o].area[1]||t[0]>e[o].area[2]||t[1]>e[o].area[3]||t[2]<e[o].area[0])){i=!0;break}if(t[0]<0||t[1]<0||t[2]>n||t[3]>r){i=!0;break}i=!1}return i}function Ft(t){var e,n={};n.xMin=180,n.xMax=0,n.yMin=90,n.yMax=0;for(var r=0;r<t.length;r++)for(var i=t[r].geometry.coordinates,o=0;o<i.length;o++){e=i[o],1==e.length&&(e=e[0]);for(var a=0;a<e.length;a++){var s=e[a][0],l=e[a][1],c={x:s,y:l};n.xMin=n.xMin<c.x?n.xMin:c.x,n.xMax=n.xMax>c.x?n.xMax:c.x,n.yMin=n.yMin<c.y?n.yMin:c.y,n.yMax=n.yMax>c.y?n.yMax:c.y}}return n}function Et(t,e,n,r,i,o){return{x:(e-n.xMin)*r+i,y:(n.yMax-t)*r+o}}function jt(t,e,n,r,i,o){return{x:(e-i)/r+n.xMin,y:n.yMax-(t-o)/r}}function It(t,e,n){if(e[1]==n[1])return!1;if(e[1]>t[1]&&n[1]>t[1])return!1;if(e[1]<t[1]&&n[1]<t[1])return!1;if(e[1]==t[1]&&n[1]>t[1])return!1;if(n[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&n[1]<t[1])return!1;var r=n[0]-(n[0]-e[0])*(n[1]-t[1])/(n[1]-e[1]);return!(r<t[0])}function Nt(t,e){for(var n=0,r=0;r<e.length;r++){var i=e[r][0];1==e.length&&(i=e[r][0]);for(var o=0;o<i.length-1;o++){var a=i[o],s=i[o+1];It(t,a,s)&&(n+=1)}}return n%2==1}function zt(t,e,n,r){var o,s,l=i({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),c=t,u=Ft(c),h=e.width/Math.abs(u.xMax-u.xMin),f=e.height/Math.abs(u.yMax-u.yMin),p=h<f?h:f,d=e.width/2-Math.abs(u.xMax-u.xMin)/2*p,v=e.height/2-Math.abs(u.yMax-u.yMin)/2*p;r.beginPath(),r.clearRect(0,0,e.width,e.height),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill();for(var g=0;g<c.length;g++){r.beginPath(),r.setLineWidth(l.borderWidth*e.pixelRatio),r.setStrokeStyle(l.borderColor),r.setFillStyle(a(t[g].color,l.fillOpacity)),e.tooltip&&e.tooltip.index==g&&(r.setStrokeStyle(l.activeBorderColor),r.setFillStyle(a(l.activeFillColor,l.activeFillOpacity)));for(var x=c[g].geometry.coordinates,m=0;m<x.length;m++){o=x[m],1==o.length&&(o=o[0]);for(var _=0;_<o.length;_++)s=Et(o[_][1],o[_][0],u,p,d,v),0===_?(r.beginPath(),r.moveTo(s.x,s.y)):r.lineTo(s.x,s.y);r.fill(),1==l.border&&r.stroke()}if(1==e.dataLabel){var b=c[g].properties.centroid;if(b){s=Et(b[1],b[0],u,p,d,v);var w=c[g].textSize||n.fontSize,S=c[g].properties.name;r.beginPath(),r.setFontSize(w),r.setFillStyle(c[g].textColor||"#666666"),r.fillText(S,s.x-y(S,w)/2,s.y+w/2),r.closePath(),r.stroke()}}}e.chartData.mapData={bounds:u,scale:p,xoffset:d,yoffset:v},St(e,n,r,1),r.draw()}function Bt(t,e){var n=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var r=0;r<n.length;r++){var i=n[r].name,o=n[r].textSize,a=y(i,o),s=void 0,l=void 0,c=void 0,u=0;while(1){u++,s=Lt(-t.width/2,t.width/2,5)-a/2,l=Lt(-t.height/2,t.height/2,5)+o/2,c=[s-5+t.width/2,l-5-o+t.height/2,s+a+5+t.width/2,l+5+t.height/2];var h=Rt(c,n,t.width,t.height);if(!h)break;if(1e3==u){c=[-100,-100,-100,-100];break}}n[r].area=c}break;case"vertical":for(var f=function(){return Math.random()>.7},p=0;p<n.length;p++){var d=n[p].name,v=n[p].textSize,g=y(d,v),x=f(),m=void 0,_=void 0,b=void 0,w=void 0,S=0;while(1){S++;var A=void 0;if(x?(m=Lt(-t.width/2,t.width/2,5)-g/2,_=Lt(-t.height/2,t.height/2,5)+v/2,b=[_-5-g+t.width/2,-m-5+t.height/2,_+5+t.width/2,-m+v+5+t.height/2],w=[t.width-(t.width/2-t.height/2)-(-m+v+5+t.height/2)-5,t.height/2-t.width/2+(_-5-g+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-m+v+5+t.height/2)+v,t.height/2-t.width/2+(_-5-g+t.width/2)+g+5],A=Rt(w,n,t.height,t.width)):(m=Lt(-t.width/2,t.width/2,5)-g/2,_=Lt(-t.height/2,t.height/2,5)+v/2,b=[m-5+t.width/2,_-5-v+t.height/2,m+g+5+t.width/2,_+5+t.height/2],A=Rt(b,n,t.width,t.height)),!A)break;if(1e3==S){b=[-1e3,-1e3,-1e3,-1e3];break}}x?(n[p].area=w,n[p].areav=b):n[p].area=b,n[p].rotate=x}break}return n}function Wt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;i({},{type:"normal",autoColors:!0},e.extra.word);r.beginPath(),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill(),r.save();var a=e.chartData.wordCloudData;r.translate(e.width/2,e.height/2);for(var s=0;s<a.length;s++){r.save(),a[s].rotate&&r.rotate(90*Math.PI/180);var l=a[s].name,c=a[s].textSize,u=y(l,c);r.beginPath(),r.setStrokeStyle(a[s].color),r.setFillStyle(a[s].color),r.setFontSize(c),a[s].rotate?a[s].areav[0]>0&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(a[s].areav[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].areav[1]+5+c-e.height/2)*o):r.fillText(l,(a[s].areav[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].areav[1]+5+c-e.height/2)*o)):a[s].area[0]>0&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(a[s].area[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].area[1]+5+c-e.height/2)*o):r.fillText(l,(a[s].area[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].area[1]+5+c-e.height/2)*o)),r.stroke(),r.restore()}r.restore()}function qt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,h=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=q(t,h,o),r.save(),r.translate(c.x,c.y);for(var f=0;f<t.length;f++)0==f?(e.tooltip&&e.tooltip.index==f&&(r.beginPath(),r.setFillStyle(a(t[f].color,s.activeOpacity)),r.moveTo(-u,0),r.lineTo(-t[f].radius-u,-l),r.lineTo(t[f].radius+u,-l),r.lineTo(u,0),r.lineTo(-u,0),r.closePath(),r.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l,c.x+t[f].radius,c.y],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(a(t[f].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[f].radius,-l),r.lineTo(t[f].radius,-l),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()):(e.tooltip&&e.tooltip.index==f&&(r.beginPath(),r.setFillStyle(a(t[f].color,s.activeOpacity)),r.moveTo(0,0),r.lineTo(-t[f-1].radius-u,0),r.lineTo(-t[f].radius-u,-l),r.lineTo(t[f].radius+u,-l),r.lineTo(t[f-1].radius+u,0),r.lineTo(0,0),r.closePath(),r.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l*(f+1),c.x+t[f].radius,c.y-l*f],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(a(t[f].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[f-1].radius,0),r.lineTo(-t[f].radius,-l),r.lineTo(t[f].radius,-l),r.lineTo(t[f-1].radius,0),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()),r.translate(0,-l);return r.restore(),!1!==e.dataLabel&&1===o&&Ut(t,e,r,l,s.labelAlign,u,c),{center:c,radius:h,series:t}}function Ut(t,e,n,r,i,a,s){for(var l=0;l<t.length;l++){var c=t[l],u=void 0,h=void 0,f=void 0,p=void 0,d=c.format?c.format(+c._proportion_.toFixed(2)):o.toFixed(100*c._proportion_)+"%";"right"==i?(u=0==l?(c.funnelArea[2]+s.x)/2:(c.funnelArea[2]+t[l-1].funnelArea[2])/2,h=u+2*a,f=c.funnelArea[1]+r/2,p=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,f),n.lineTo(h,f),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,f),n.arc(h,f,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h+5,f+p/2-2),n.closePath(),n.stroke(),n.closePath()):(u=0==l?(c.funnelArea[0]+s.x)/2:(c.funnelArea[0]+t[l-1].funnelArea[0])/2,h=u-2*a,f=c.funnelArea[1]+r/2,p=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,f),n.lineTo(h,f),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,f),n.arc(h,f,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h-5-y(d),f+p/2-2),n.closePath(),n.stroke(),n.closePath())}}function Ht(t,e){e.draw()}var Vt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Gt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function n(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var r=n(),i=null,o=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===i&&(i=n),n-i<t.duration){var a=(n-i)/t.duration,s=Vt[t.timing];a=s(a),t.onProcess&&t.onProcess(a),r(o,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};o=o.bind(this),r(o,e)}function Xt(t,e,n,r){var o=this,a=e.series,s=e.categories;a=v(a,e,n);var c=e.animation?e.duration:0;this.animationInstance&&this.animationInstance.stop();var u=null;if("candle"==t){var h=i({},e.extra.candle.average);h.show?(u=l(h.day,h.name,h.color,a[0].data),u=v(u,e,n),e.seriesMA=u):u=e.seriesMA?e.seriesMA=v(e.seriesMA,e,n):a}else u=a;e._series_=a=k(a),e.area=new Array(4);for(var f=0;f<4;f++)e.area[f]=e.padding[f];var p=N(u,e,n,e.chartData),d=p.area.wholeHeight,g=p.area.wholeWidth;switch(e.legend.position){case"top":e.area[0]+=d;break;case"bottom":e.area[2]+=d;break;case"left":e.area[3]+=g;break;case"right":e.area[1]+=g;break}var y={},x=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type){if(y=rt(a,e,n),x=y.yAxisWidth,e.yAxis.showTitle){for(var m=0,_=0;_<e.yAxis.data.length;_++)m=Math.max(m,e.yAxis.data[_].titleFontSize?e.yAxis.data[_].titleFontSize:n.fontSize);e.area[0]+=(m+6)*e.pixelRatio}for(var b=0,w=0,S=0;S<x.length;S++)"left"==x[S].position?(e.area[3]+=w>0?x[S].width+e.yAxis.padding:x[S].width,w+=1):(e.area[1]+=b>0?x[S].width+e.yAxis.padding:x[S].width,b+=1)}else n.yAxisWidth=x;if(e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=Q(e.categories,e,n);var A=z(e.categories,e,n,e.chartData.xAxisData.eachSpacing),T=A.xAxisHeight,P=A.angle;n.xAxisHeight=T,n._xAxisTextAngle_=P,e.area[2]+=T,e.chartData.categoriesData=A}else e.chartData.xAxisData={xAxisPoints:[]};if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var O=0,D=e.chartData.xAxisData.xAxisPoints,C=e.chartData.xAxisData.startX,M=e.chartData.xAxisData.endX,$=e.chartData.xAxisData.eachSpacing,L=$*(D.length-1),R=M-C;O=R-L,o.scrollOption={currentOffset:O,startTouchX:O,distance:0,lastMoveTime:0},e._scrollDistance_=O}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:X(u)),t){case"word":var F=i({},{type:"normal",autoColors:!0},e.extra.word);1!=e.updateData&&void 0!=e.updateData||(e.chartData.wordCloudData=Bt(e,F.type)),this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Wt(a,e,n,r,t),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"map":r.clearRect(0,0,e.width,e.height),zt(a,e,n,r);break;case"funnel":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.funnelData=qt(a,e,n,r,t),kt(e.series,e,n,r,e.chartData),St(e,n,r,t),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),At(s,e,n,r);var i=bt(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(e,n,r),kt(e.series,e,n,r,e.chartData),St(e,n,r,t,c,o),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),At(s,e,n,r);var i=wt(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(e,n,r),kt(e.series,e,n,r,e.chartData),St(e,n,r,t,c,o),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),At(s,e,n,r);var i=xt(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(e,n,r),kt(e.series,e,n,r,e.chartData),St(e,n,r,t,c,o),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),At(s,e,n,r);var i=_t(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(e,n,r),kt(e.series,e,n,r,e.chartData),St(e,n,r,t,c,o),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.pieData=Ot(a,e,n,r,t),kt(e.series,e,n,r,e.chartData),St(e,n,r,t),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.pieData=Dt(a,e,n,r,t),kt(e.series,e,n,r,e.chartData),St(e,n,r,t),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.radarData=$t(a,e,n,r,t),kt(e.series,e,n,r,e.chartData),St(e,n,r,t),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.arcbarData=Ct(a,e,n,r,t),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.gaugeData=Mt(s,a,e,n,r,t),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Tt(s,e,n,r),At(s,e,n,r);var i=mt(a,u,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(e,n,r),kt(u||e.series,e,n,r,e.chartData),St(e,n,r,t,c,o),Ht(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break}}function Jt(){this.events={}}Gt.prototype.stop=function(){this.isStop=!0},Jt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Jt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0],o=n.slice(1);this.events[i]&&this.events[i].forEach(function(t){try{t.apply(null,o)}catch(n){console.error(e(n," at components/u-charts/u-charts.js:4921"))}})};var Yt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=i({},t.title),t.subtitle=i({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=i({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*t.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},t.yAxis),t.yAxis.dashLength*=t.pixelRatio,t.yAxis.padding*=t.pixelRatio,t.xAxis=i({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},t.xAxis),t.xAxis.dashLength*=t.pixelRatio,t.legend=i({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=i({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation,t.rotate=!!t.rotate;var e=JSON.parse(JSON.stringify(r));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:r.yAxisSplit,e.rotate=t.rotate,t.rotate){var o=t.width,a=t.height;t.width=a,t.height=o}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=r.yAxisWidth*t.pixelRatio,e.xAxisHeight=r.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=r.xAxisLineHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=r.titleFontSize*t.pixelRatio,e.subtitleFontSize=r.subtitleFontSize*t.pixelRatio,e.toolTipPadding=r.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=r.toolTipLineHeight*t.pixelRatio,e.columePadding=r.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Jt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Xt.call(this,t.type,t,e,this.context)};Yt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=i({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=rt(this.opts.series,this.opts,this.config),r=n.yAxisWidth;this.config.yAxisWidth=r;var o=0,a=Q(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,h=u*(s.length-1),f=c-l;o=f-h,this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o;break}Xt.call(this,this.opts.type,this.opts,this.config,this.context)},Yt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var r=rt(this.opts.series,this.opts,this.config),i=r.yAxisWidth;this.config.yAxisWidth=i;var o=0,a=Q(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,h=u*n,f=c-l,p=f-u*(s.length-1);o=f/2-h,o>0&&(o=0),o<p&&(o=p),this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o,Xt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at components/u-charts/u-charts.js:5095"))},Yt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Yt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Yt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=_(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?E({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?$({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?L({x:n.x,y:n.y},this.opts.chartData.funnelData):"map"===this.opts.type?F({x:n.x,y:n.y},this.opts):"word"===this.opts.type?R({x:n.x,y:n.y},this.opts.chartData.wordCloudData):O({x:n.x,y:n.y},this.opts.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Yt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=_(e,this.opts,t);return D({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},Yt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n){_(n,this.opts,t);var r=this.getLegendDataIndex(t);r>=0&&(this.opts.series[r].show=!this.opts.series[r].show,this.opts.animation=!!e.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Xt.call(this,this.opts.type,this.opts,this.config,this.context))}},Yt.prototype.showToolTip=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null;r=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],r||console.log(e("touchError"," at components/u-charts/u-charts.js:5232"));var o=_(r,this.opts,t),a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var l=this.getCurrentDataIndex(t);if(l>-1){var c=b(this.opts.series,l);if(0!==c.length){var u=A(c,this.opts.chartData.calPoints,l,this.opts.categories,n),h=u.textList,f=u.offset;f.y=o.y,s.tooltip={textList:h,offset:f,option:n,index:l}}}Xt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){var p=T(c,this.opts.chartData.calPoints,l,this.opts.categories,n);h=p.textList,f=p.offset;f.y=o.y,s.tooltip={textList:h,offset:f,option:n,index:l}}}Xt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){u=P(this.opts.series[0].data,c,this.opts.chartData.calPoints,l,this.opts.categories,this.opts.extra.candle,n),h=u.textList,f=u.offset;f.y=o.y,s.tooltip={textList:h,offset:f,option:n,index:l}}}Xt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.name+": "+c.data,color:c.color}],f={x:o.x,y:o.y};s.tooltip={textList:h,offset:f,option:n,index:l}}Xt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.properties.name,color:c.color}],f={x:o.x,y:o.y};s.tooltip={textList:h,offset:f,option:n,index:l}}s.updateData=!1,Xt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){h=c.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),f={x:o.x,y:o.y};s.tooltip={textList:h,offset:f,option:n,index:l}}}Xt.call(this,s.type,s,this.config,this.context)}},Yt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=i({},this.opts,{_scrollDistance_:t,animation:!1});Xt.call(this,this.opts.type,e,this.config,this.context)},Yt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var n=_(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},Yt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),r=n-this.scrollOption.lastMoveTime;if(!(r<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var o=null;if(o=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],o&&!0===this.opts.enableScroll){var a,s=_(o,this.opts,t);a=s.x-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(this,l+a,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=a=u-l;var h=i({},this.opts,{_scrollDistance_:l+a,animation:!1});return Xt.call(this,h.type,h,this.config,this.context),l+a}}},Yt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,r=e.distance;this.scrollOption.currentOffset=n+r,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Yt)}).call(this,n("0de9")["default"],n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"===typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{u=e.regeneratorRuntime=c?t.exports:{},u.wrap=_;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,x=y&&y(y($([])));x&&x!==r&&i.call(x,a)&&(g=x);var m=A.prototype=w.prototype=Object.create(g);S.prototype=m.constructor=A,A.constructor=S,A[l]=S.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(m),t},u.awrap=function(t){return{__await:t}},T(P.prototype),P.prototype[s]=function(){return this},u.AsyncIterator=P,u.async=function(t,e,n,r){var i=new P(_(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},T(m),m[l]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=$,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function _(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),a=new M(r||[]);return o._invoke=k(t,n,a),o}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function w(){}function S(){}function A(){}function T(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function P(t){function e(n,r,o,a){var s=b(t[n],t,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){l.value=t,o(l)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function k(t,e,n){var r=h;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return L()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=b(t,e,n);if("normal"===l.type){if(r=n.done?d:f,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function $(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},b493:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){h(t,e,n[e])})}return t}function a(t,e,n,r,i,o,a){try{var s=t[o](a),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,l,"next",t)}function l(t){a(o,r,i,s,l,"throw",t)}s(void 0)})}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){function e(){var t=this;l(this,e),h(this,"config",{baseUrl:"",header:{"content-type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text"}),h(this,"interceptor",{request:function(e){e&&(t.requestBeforeFun=e)},response:function(e,n){e&&n&&(t.requestComFun=e,t.requestComFail=n)}})}return u(e,[{key:"requestBeforeFun",value:function(t){return t}},{key:"requestComFun",value:function(t){return t}},{key:"requestComFail",value:function(t){return t}},{key:"validateStatus",value:function(t){return 200===t.statusCode}},{key:"setConfig",value:function(t){this.config=t(this.config)}},{key:"request",value:function(){var n=s(r.default.mark(function n(){var i,a=this,s=arguments;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return i=s.length>0&&void 0!==s[0]?s[0]:{},i.baseUrl=this.config.baseUrl,i.dataType=i.dataType||this.config.dataType,i.responseType=i.responseType||this.config.responseType,i.url=i.url||"",i.data=i.data||{},i.params=i.params||{},i.header=i.header||this.config.header,i.method=i.method||this.config.method,n.abrupt("return",new Promise(function(n,r){var s=!0,l={};i.complete=function(t){t.config=l,a.validateStatus(t)?(t=a.requestComFun(t),n(t)):(t=a.requestComFail(t),r(t))};var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,n={errMsg:t,config:e};r(n),s=!1};l=o({},a.requestBeforeFun(i,c));var u=o({},l);if(s){var h=e.posUrl(i.url)?i.url:i.baseUrl+i.url;if("{}"!==JSON.stringify(i.params)){var f=e.addQueryString(i.params);h+=-1===h.indexOf("?")?"?".concat(f):"&".concat(f)}u.url=h,t.request(u)}}));case 10:case"end":return n.stop()}},n,this)}));function i(){return n.apply(this,arguments)}return i}()},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(o({url:t,method:"GET"},e))}},{key:"post",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(o({url:t,data:e,method:"POST"},n))}},{key:"put",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(o({url:t,data:e,method:"PUT"},n))}},{key:"delete",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(o({url:t,data:e,method:"DELETE"},n))}},{key:"connect",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(o({url:t,data:e,method:"CONNECT"},n))}},{key:"head",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(o({url:t,data:e,method:"HEAD"},n))}},{key:"options",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(o({url:t,data:e,method:"OPTIONS"},n))}},{key:"trace",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(o({url:t,data:e,method:"TRACE"},n))}},{key:"upload",value:function(n,r){var i=this,a=r.files,s=r.filePath,l=r.name,c=r.header,u=r.formData;return new Promise(function(r,h){var f=!0,p={},d={baseUrl:i.config.baseUrl,url:n,files:a,filePath:s,method:"UPLOAD",name:l,header:c||i.config.header,formData:u,complete:function(t){t.config=p,200===t.statusCode?(t=i.requestComFun(t),r(t)):(t=i.requestComFail(t),h(t))}},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,n={errMsg:t,config:e};h(n),f=!1};p=o({},i.requestBeforeFun(d,v));var g=o({},p);f&&(g.url=e.posUrl(n)?n:i.config.baseUrl+n,t.uploadFile(g))})}}],[{key:"posUrl",value:function(t){return/(http|https):\/\/([\w.]+\/?)\S*/.test(t)}},{key:"addQueryString",value:function(t){var e="";return Object.keys(t).forEach(function(n){e+=n+"="+t[n]+"&"}),e.substring(0,e.length-1)}}]),e}();e.default=f}).call(this,n("6e42")["default"])},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c41d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.transfer=void 0;var n={};e.transfer=n,n.usersTransfer=function(e,n,r,i){var o=[];return e&&e.length>0&&e.forEach(function(e,a){console.log(t(e,a," at utils/data-transfer/index.js:6"));var s={data:[]};for(var l in r){var c={};c.name=r[l],c.value=e[l],s.data.push(c)}for(var u in n)s[u]=e[n[u]];console.log(t(i.name," at utils/data-transfer/index.js:19")),i&&(s.tags=[],"0"!==e[i.name]&&0!==e[i.name]||s.tags.push({name:"移除",color:"red"}),"1"!==e[i.name]&&1!==e[i.name]||s.tags.push({name:"正常",color:"green"})),s.options=[{name:"编辑",method:"details",color:"gray"},{name:"删除",method:"delete",color:"red"}],o.push(s)}),o}}).call(this,n("0de9")["default"])},c81d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/tabBar/main/main":{navigationBarTitleText:"首页",navigationStyle:"custom"},"pages/login/login":{navigationBarTitleText:"登录",navigationStyle:"custom"},"pages/user/user":{navigationBarTitleText:"我的",enablePullDownRefresh:!0},"pages/tabBar/search/search":{navigationBarTitleText:"实时查询",navigationStyle:"custom"},"pages/tabBar/analysis/analysis":{navigationBarTitleText:"统计分析",navigationStyle:"custom"},"pages/tabBar/manage/manage":{navigationBarTitleText:"管理",navigationStyle:"custom"},"pages/common/services/services":{navigationBarTitleText:"服务器选择"},"pages/warning/warning":{navigationBarTitleText:"告警信息"},"pages/profile/profile":{navigationBarTitleText:"个人信息"},"pages/manage/user/user":{navigationBarTitleText:"用户管理",enablePullDownRefresh:!0},"pages/manage/role/role":{navigationBarTitleText:"角色管理",enablePullDownRefresh:!0},"pages/manage/menu/menu":{navigationBarTitleText:"菜单管理",enablePullDownRefresh:!0},"pages/manage/log/log":{navigationBarTitleText:"日志管理",enablePullDownRefresh:!0},"pages/manage/user/detail/detail":{navigationBarTitleText:"用户详情",enablePullDownRefresh:!0}},globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#01c0c8",backgroundColor:"#01c0c8"}};e.default=r},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},e399:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/cu-custom.js';

define('colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/cu-custom"], {
  "0afc": function afc(t, a, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var n = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "cu-custom",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                a = this.CustomBar,
                n = this.bgImage,
                u = "height:".concat(a, "px;padding-top:").concat(t, "px;");
            return this.bgImage && (u = "".concat(u, "background-image:url(").concat(n, ");")), u;
          }
        },
        props: {
          bgColor: {
            type: String,
            default: ""
          },
          isBack: {
            type: [Boolean, String],
            default: !1
          },
          bgImage: {
            type: String,
            default: ""
          }
        },
        methods: {
          BackPage: function BackPage() {
            t.navigateBack({
              delta: 1
            });
          }
        }
      };
      a.default = n;
    }).call(this, n("6e42")["default"]);
  },
  bd96: function bd96(t, a, n) {
    "use strict";

    n.r(a);
    var u = n("cb62"),
        e = n("bdad");

    for (var c in e) {
      "default" !== c && function (t) {
        n.d(a, t, function () {
          return e[t];
        });
      }(c);
    }

    var o = n("2877"),
        r = Object(o["a"])(e["default"], u["a"], u["b"], !1, null, null, null);
    a["default"] = r.exports;
  },
  bdad: function bdad(t, a, n) {
    "use strict";

    n.r(a);
    var u = n("0afc"),
        e = n.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        n.d(a, t, function () {
          return u[t];
        });
      }(c);
    }

    a["default"] = e.a;
  },
  cb62: function cb62(t, a, n) {
    "use strict";

    var u = function u() {
      var t = this,
          a = t.$createElement;
      t._self._c;
    },
        e = [];

    n.d(a, "a", function () {
      return u;
    }), n.d(a, "b", function () {
      return e;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['colorui/components/cu-custom-create-component', {
  'colorui/components/cu-custom-create-component': function coloruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bd96"));
  }
}, [['colorui/components/cu-custom-create-component']]]);
});
require('colorui/components/cu-custom.js');
__wxRoute = 'components/m-details/m-details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-details/m-details.js';

define('components/m-details/m-details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-details/m-details"], {
  "2a08": function a08(t, a, n) {
    "use strict";

    n.r(a);
    var e = n("ef3a"),
        u = n("47ba");

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(a, t, function () {
          return u[t];
        });
      }(r);
    }

    var i = n("2877"),
        o = Object(i["a"])(u["default"], e["a"], e["b"], !1, null, null, null);
    a["default"] = o.exports;
  },
  "47ba": function ba(t, a, n) {
    "use strict";

    n.r(a);
    var e = n("fb32"),
        u = n.n(e);

    for (var r in e) {
      "default" !== r && function (t) {
        n.d(a, t, function () {
          return e[t];
        });
      }(r);
    }

    a["default"] = u.a;
  },
  ef3a: function ef3a(t, a, n) {
    "use strict";

    var e = function e() {
      var t = this,
          a = t.$createElement,
          n = (t._self._c, t.imageUrl(t.formData.image)),
          e = t.__map(t.formData.data, function (a, n) {
        var e = t.getValue(a);
        return {
          $orig: t.__get_orig(a),
          m1: e
        };
      });

      t.$mp.data = Object.assign({}, {
        $root: {
          m0: n,
          l0: e
        }
      });
    },
        u = [];

    n.d(a, "a", function () {
      return e;
    }), n.d(a, "b", function () {
      return u;
    });
  },
  fb32: function fb32(t, a, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var n = {
        props: {
          formData: {
            type: Object,
            default: new Array()
          }
        },
        methods: {
          getValue: function getValue(t) {
            return null === t.value || "null" === t.value ? "未知" : t.value;
          },
          onClick: function onClick() {
            this.$emit("click");
          },
          back: function back() {
            t.navigateBack({});
          },
          imageUrl: function imageUrl(t) {
            return t || "static/img/drawable-xhdpi/no_pic.png";
          }
        },
        onLoad: function onLoad() {}
      };
      a.default = n;
    }).call(this, n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-details/m-details-create-component', {
  'components/m-details/m-details-create-component': function componentsMDetailsMDetailsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2a08"));
  }
}, [['components/m-details/m-details-create-component']]]);
});
require('components/m-details/m-details.js');
__wxRoute = 'components/m-icon/m-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-icon/m-icon.js';

define('components/m-icon/m-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-icon/m-icon"], {
  "2a95": function a95(t, n, e) {
    "use strict";

    var u = e("7361"),
        r = e.n(u);
    r.a;
  },
  "34d0": function d0(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        type: String,
        color: String,
        size: {
          type: [Number, String],
          default: 24
        }
      },
      computed: {
        fontSize: function fontSize() {
          var t = Number(this.size);
          return t = isNaN(t) ? 24 : t, "".concat(t, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  7361: function _(t, n, e) {},
  "7abf": function abf(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("e133"),
        r = e("940c");

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(i);
    }

    e("2a95");
    var c = e("2877"),
        o = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  "940c": function c(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("34d0"),
        r = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = r.a;
  },
  e133: function e133(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-icon/m-icon-create-component', {
  'components/m-icon/m-icon-create-component': function componentsMIconMIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7abf"));
  }
}, [['components/m-icon/m-icon-create-component']]]);
});
require('components/m-icon/m-icon.js');
__wxRoute = 'components/m-text-list/m-text-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-text-list/m-text-list.js';

define('components/m-text-list/m-text-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-text-list/m-text-list"], {
  "7c2f": function c2f(t, n, i) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement,
          i = (t._self._c, t.__map(t.datas, function (n, i) {
        var o = t.imageUrl(n.image),
            e = t.__map(n.data, function (n, i) {
          var o = t.icon(n.icon),
              e = t.iconColor(n.icolor);
          return {
            $orig: t.__get_orig(n),
            m1: o,
            m2: e
          };
        }),
            c = t.__map(n.tags, function (n, i) {
          var o = t.iconColor(n.color);
          return {
            $orig: t.__get_orig(n),
            m3: o
          };
        });

        return {
          $orig: t.__get_orig(n),
          m0: o,
          l0: e,
          l1: c
        };
      }));
      t.$mp.data = Object.assign({}, {
        $root: {
          l2: i
        }
      });
    },
        e = [];

    i.d(n, "a", function () {
      return o;
    }), i.d(n, "b", function () {
      return e;
    });
  },
  ab1c: function ab1c(t, n, i) {
    "use strict";

    var o = i("b986"),
        e = i.n(o);
    e.a;
  },
  b986: function b986(t, n, i) {},
  ce2e: function ce2e(t, n, i) {
    "use strict";

    i.r(n);
    var o = i("7c2f"),
        e = i("eac7");

    for (var c in e) {
      "default" !== c && function (t) {
        i.d(n, t, function () {
          return e[t];
        });
      }(c);
    }

    i("ab1c");
    var a = i("2877"),
        r = Object(a["a"])(e["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  dc01: function dc01(t, n, i) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = {
        props: {
          datas: {
            type: Array
          }
        },
        computed: {},
        data: function data() {
          return {
            modalName: null
          };
        },
        methods: {
          imageUrl: function imageUrl(t) {
            return t || "static/img/drawable-xhdpi/no_pic.png";
          },
          clickHandler: function clickHandler(t) {
            this.$emit("click", t);
          },
          optionClickHandler: function optionClickHandler(n, i) {
            console.log(t(i, " at components/m-text-list/m-text-list.vue:63")), this.$emit("handler", {
              data: n,
              method: i.method
            });
          },
          iconColor: function iconColor(t) {
            return t || "gray";
          },
          icon: function icon(t) {
            return t || "infofill";
          },
          ListTouchStart: function ListTouchStart(t) {
            this.listTouchStart = t.touches[0].pageX;
          },
          ListTouchMove: function ListTouchMove(t) {
            this.listTouchDirection = t.touches[0].pageX - this.listTouchStart > 0 ? "right" : "left";
          },
          ListTouchEnd: function ListTouchEnd(t, n) {
            n.options && ("left" == this.listTouchDirection ? this.modalName = t.currentTarget.dataset.target : this.modalName = null), this.listTouchDirection = null;
          }
        }
      };
      n.default = i;
    }).call(this, i("0de9")["default"]);
  },
  eac7: function eac7(t, n, i) {
    "use strict";

    i.r(n);
    var o = i("dc01"),
        e = i.n(o);

    for (var c in o) {
      "default" !== c && function (t) {
        i.d(n, t, function () {
          return o[t];
        });
      }(c);
    }

    n["default"] = e.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-text-list/m-text-list-create-component', {
  'components/m-text-list/m-text-list-create-component': function componentsMTextListMTextListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ce2e"));
  }
}, [['components/m-text-list/m-text-list-create-component']]]);
});
require('components/m-text-list/m-text-list.js');
__wxRoute = 'components/zy-search/zy-search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/zy-search/zy-search.js';

define('components/zy-search/zy-search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/zy-search/zy-search"], {
  "05c9": function c9(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("4827"),
        r = n("ceeb");

    for (var c in r) {
      "default" !== c && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(c);
    }

    n("d1be");
    var o = n("2877"),
        i = Object(o["a"])(r["default"], a["a"], a["b"], !1, null, "746bbea8", null);
    t["default"] = i.exports;
  },
  4827: function _(e, t, n) {
    "use strict";

    var a = function a() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    n.d(t, "a", function () {
      return a;
    }), n.d(t, "b", function () {
      return r;
    });
  },
  "4ddf": function ddf(e, t, n) {
    "use strict";

    (function (e, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var r = function r() {
        return n.e("components/m-icon/m-icon").then(n.bind(null, "7abf"));
      },
          c = {
        name: "zy-search",
        components: {
          mIcon: r
        },
        props: {
          isFocus: {
            type: Boolean,
            value: !1
          },
          isBlock: {
            type: Boolean,
            value: !0
          },
          showWant: {
            type: Boolean,
            value: !1
          },
          show: {
            type: Boolean,
            value: !1
          },
          showFilter: {
            type: Boolean,
            value: !1
          }
        },
        computed: {},
        data: function data() {
          return {
            isF: !1,
            searchText: "",
            hList: e.getStorageSync("search_cache"),
            wantList: ["栏目1", "栏目2", "栏目3", "栏目4"]
          };
        },
        methods: {
          filterClick: function filterClick() {
            this.$emit("filter", null);
          },
          focusBack: function focusBack() {
            this.isF = !0, this.$emit("showbox", !1);
          },
          blurBack: function blurBack() {
            this.isF = !1, this.$emit("showbox", !0);
          },
          searchStart: function searchStart() {
            var t = this;
            if ("" == t.searchText) return e.showToast({
              title: "请输入关键字",
              icon: "none",
              duration: 1e3
            }), !1;
            e.getStorage({
              key: "search_cache",
              success: function success(n) {
                var r = n.data;

                if (console.log(a(r, " at components/zy-search/zy-search.vue:144")), r.length > 5) {
                  var c = !0,
                      o = !1,
                      i = void 0;

                  try {
                    for (var s, u = r[Symbol.iterator](); !(c = (s = u.next()).done); c = !0) {
                      var l = s.value;
                      if (l == t.searchText) return !1;
                    }
                  } catch (b) {
                    o = !0, i = b;
                  } finally {
                    try {
                      c || null == u.return || u.return();
                    } finally {
                      if (o) throw i;
                    }
                  }

                  r.pop(), r.unshift(t.searchText);
                } else {
                  var h = !0,
                      f = !1,
                      d = void 0;

                  try {
                    for (var v, y = r[Symbol.iterator](); !(h = (v = y.next()).done); h = !0) {
                      var p = v.value;
                      if (p == t.searchText) return !1;
                    }
                  } catch (b) {
                    f = !0, d = b;
                  } finally {
                    try {
                      h || null == y.return || y.return();
                    } finally {
                      if (f) throw d;
                    }
                  }

                  r.unshift(t.searchText);
                }

                t.hList = r, e.setStorage({
                  key: "search_cache",
                  data: t.hList
                });
              },
              fail: function fail() {
                t.hList = [], t.hList.push(t.searchText), e.setStorage({
                  key: "search_cache",
                  data: t.hList
                });
              }
            }), t.$emit("search", t.searchText);
          },
          keywordsClick: function keywordsClick(e) {
            this.searchText = e;
          },
          delhistory: function delhistory() {
            this.hList = [], e.setStorage({
              key: "search_cache",
              data: []
            });
          },
          startRecognize: function startRecognize() {
            var e = this,
                t = {
              engine: "iFly",
              punctuation: !1,
              timeout: 1e4
            };
            plus.speech.startRecognize(t, function (t) {
              e.searchText = e.searchText + t;
            });
          }
        }
      };

      t.default = c;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  b470: function b470(e, t, n) {},
  ceeb: function ceeb(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("4ddf"),
        r = n.n(a);

    for (var c in a) {
      "default" !== c && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(c);
    }

    t["default"] = r.a;
  },
  d1be: function d1be(e, t, n) {
    "use strict";

    var a = n("b470"),
        r = n.n(a);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/zy-search/zy-search-create-component', {
  'components/zy-search/zy-search-create-component': function componentsZySearchZySearchCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("05c9"));
  }
}, [['components/zy-search/zy-search-create-component']]]);
});
require('components/zy-search/zy-search.js');

__wxRoute = 'pages/tabBar/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/main/main.js';

define('pages/tabBar/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/main/main"],{3309:function(a,e,t){"use strict";t.r(e);var i=t("72b3"),n=t.n(i);for(var r in i)"default"!==r&&function(a){t.d(e,a,function(){return i[a]})}(r);e["default"]=n.a},"412e":function(a,e,t){"use strict";(function(a){t("e399"),t("921b");i(t("66fd"));var e=i(t("9a57"));function i(a){return a&&a.__esModule?a:{default:a}}a(e.default)}).call(this,t("6e42")["createPage"])},"51b8":function(a,e,t){},"72b3":function(a,e,t){"use strict";(function(a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t("2f62");var i,n=r(t("92e2"));function r(a){return a&&a.__esModule?a:{default:a}}var o=null,s=null,u={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,arcbarWidth:0,cServerData:"",rServerData:"",aServerData:"",test:1}},onLoad:function(){i=this,this.cWidth=a.upx2px(750),this.cHeight=a.upx2px(380),this.getColumnServerData(),this.getRadarServerData(),this.arcbarWidth=a.upx2px(26),this.getAreaServerData()},methods:{getColumnServerData:function(){var a={categories:[],series:[]};a.categories.push("总数","生产工器具","安全工器具","库存数","借调数","新购数","报废数","即将到期数","超期未检数","超期未还数","超期服役数"),a.series.push({name:"工器具概况",data:[15,{value:20,color:"#f04864"},45,37,43,80,99,12,52,65,23]}),i.showColumn("canvasColumn",a)},showColumn:function(a,e){o=new n.default({$this:i,canvasId:a,type:"column",legend:{show:!1},dataPointShape:!0,fontSize:11,background:"#FFFFFF",pixelRatio:i.pixelRatio,animation:!0,categories:e.categories,series:e.series,xAxis:{disableGrid:!0,rotateLabel:!0},yAxis:{disableGrid:!0},dataLabel:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{column:{type:"group",width:i.cWidth*i.pixelRatio*.45/e.categories.length}}})},touchColumn:function(a){o.showToolTip(a,{format:function(a,e){return"object"===typeof a.data?e+" "+a.name+":"+a.data.value:e+" "+a.name+":"+a.data}})},getRadarServerData:function(){var a={categories:[],series:[]};a.categories.push("新增未入库","待报废","暂时封存","待维修","待试验","使用中","库存可用"),a.series.push({name:"生产工器具数",data:[97,120,79,137,143,20,99]},{name:"安全工器具数",data:[115,20,145,37,43,80,99]}),i.showRadar("canvasRadar",a)},showRadar:function(a,e){s=new n.default({$this:i,canvasId:a,type:"radar",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:i.pixelRatio,animation:!0,dataLabel:!0,categories:e.categories,series:e.series,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{radar:{max:200}}})},touchRadar:function(a){s.touchLegend(a),s.showToolTip(a,{format:function(a){return a.name+":"+a.data}})},getAreaServerData:function(){var a={series:[{name:"分数",data:123},{name:"排名",data:1001},{name:"排名",data:56}]};this.textarea=JSON.stringify(a),this.showArea("canvasArea",a)},showArea:function(a,e){var t=this.arcbarWidth,r=this.cWidth/2-t,o=this.cHeight-t,s=(r*r+o*o)/o/2,u={x:this.cWidth/2*this.pixelRatio,y:(s+t)*this.pixelRatio};new n.default({$this:i,canvasId:a,type:"arcbar",fontSize:11,legend:{show:!1},background:"#FFFFFF",pixelRatio:i.pixelRatio,series:e.series,animation:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{arcbar:{type:"default",width:t*i.pixelRatio,backgroundColor:"rgba(233,233,233,0.4)",startAngle:9999,endAngle:1,radius:s*i.pixelRatio,gap:5*i.pixelRatio,center:u}}})}}};e.default=u}).call(this,t("6e42")["default"])},"9a57":function(a,e,t){"use strict";t.r(e);var i=t("db07"),n=t("3309");for(var r in n)"default"!==r&&function(a){t.d(e,a,function(){return n[a]})}(r);t("a227");var o=t("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},a227:function(a,e,t){"use strict";var i=t("51b8"),n=t.n(i);n.a},db07:function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement;a._self._c},n=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return n})}},[["412e","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/main/main.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{3032:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},d16d:function(t,n,e){"use strict";e.r(n);var a=e("3032"),o=e("dc12");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("f455");var r=e("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"78b031aa",null);n["default"]=i.exports},d8f6:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},onLoad:function(){},methods:{gotoRegistration:function(){t.navigateTo({url:"registration"})},gotoForgetPassword:function(){t.navigateTo({url:"forget-password"})},toMainPage:function(){t.navigateBack({})},doLogin:function(){var n=this;this.$http.post("auth/oauth/token?grant_type=password&username=admin@camel.com&password=123456",{},{header:{Authorization:"Basic YW5kcm9pZDphbmRyb2lk"}}).then(function(e){t.setStorage({key:"access_token",data:e.data.access_token}),t.setStorage({key:"refresh_token",data:e.data.refresh_token}),n.toMainPage()}).catch(function(t){console.log(e(t," at pages/login/login.vue:47"))})}}};n.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},dc12:function(t,n,e){"use strict";e.r(n);var a=e("d8f6"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=o.a},de55:function(t,n,e){"use strict";(function(t){e("e399"),e("921b");a(e("66fd"));var n=a(e("d16d"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},df6e:function(t,n,e){},f455:function(t,n,e){"use strict";var a=e("df6e"),o=e.n(a);o.a}},[["de55","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"78c5":function(t,n,e){"use strict";e.r(n);var o=e("d81c"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=r.a},"878f":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},a567:function(t,n,e){"use strict";(function(t){e("e399"),e("921b");o(e("66fd"));var n=o(e("d1ea"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},d1ea:function(t,n,e){"use strict";e.r(n);var o=e("878f"),r=e("78c5");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);var a=e("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},d81c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a={computed:r({},(0,o.mapState)(["hasLogin","forcedLogin"])),methods:r({},(0,o.mapMutations)(["logout"]),{bindLogin:function(){t.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&t.reLaunch({url:"../login/login"})}})};n.default=a}).call(this,e("6e42")["default"])}},[["a567","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/tabBar/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/search/search.js';

define('pages/tabBar/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/search/search"],{"3b91":function(t,n,e){"use strict";var u=e("c983"),r=e.n(u);r.a},7015:function(t,n,e){"use strict";e.r(n);var u=e("81d0"),r=e("98b8");for(var c in r)"default"!==c&&function(t){e.d(n,t,function(){return r[t]})}(c);e("3b91");var a=e("2877"),o=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"81d0":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},"98b8":function(t,n,e){"use strict";e.r(n);var u=e("cf9d"),r=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=r.a},c840:function(t,n,e){"use strict";(function(t){e("e399"),e("921b");u(e("66fd"));var n=u(e("7015"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c983:function(t,n,e){},cf9d:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{elements:[]}},methods:{}};n.default=u}},[["c840","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/search/search.js');
__wxRoute = 'pages/tabBar/analysis/analysis';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/analysis/analysis.js';

define('pages/tabBar/analysis/analysis.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/analysis/analysis"],{"4daf":function(n,t,e){"use strict";(function(n){e("e399"),e("921b");a(e("66fd"));var t=a(e("e183"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"50d2":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},bb36:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{elements:[]}},methods:{}};t.default=a},d937:function(n,t,e){},dfcc:function(n,t,e){"use strict";var a=e("d937"),u=e.n(a);u.a},e183:function(n,t,e){"use strict";e.r(t);var a=e("50d2"),u=e("efad");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);e("dfcc");var c=e("2877"),f=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=f.exports},efad:function(n,t,e){"use strict";e.r(t);var a=e("bb36"),u=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=u.a}},[["4daf","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/analysis/analysis.js');
__wxRoute = 'pages/tabBar/manage/manage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/manage/manage.js';

define('pages/tabBar/manage/manage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/manage/manage"],{"21f3":function(e,n,t){"use strict";var c=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return c}),t.d(n,"b",function(){return u})},"99de":function(e,n,t){},"9fcc":function(e,n,t){"use strict";var c=t("99de"),u=t.n(c);u.a},a8ca:function(e,n,t){"use strict";t.r(n);var c=t("21f3"),u=t("b6b2");for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);t("9fcc");var r=t("2877"),o=Object(r["a"])(u["default"],c["a"],c["b"],!1,null,null,null);n["default"]=o.exports},b6b2:function(e,n,t){"use strict";t.r(n);var c=t("bf42"),u=t.n(c);for(var a in c)"default"!==a&&function(e){t.d(n,e,function(){return c[e]})}(a);n["default"]=u.a},bf42:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={data:function(){return{elements:[{title:"用户管理",name:"user",color:"cyan",cuIcon:"friendadd"},{title:"角色管理",name:"role",color:"blue",cuIcon:"friend"},{title:"菜单管理",name:"menu",color:"purple",cuIcon:"read"},{title:"日志管理",name:"log",color:"brown",cuIcon:"edit"}]}},methods:{}};n.default=c},fbc3:function(e,n,t){"use strict";(function(e){t("e399"),t("921b");c(t("66fd"));var n=c(t("a8ca"));function c(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])}},[["fbc3","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/manage/manage.js');
__wxRoute = 'pages/common/services/services';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/common/services/services.js';

define('pages/common/services/services.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/services/services"],{"083e":function(t,e,n){"use strict";n.r(e);var i=n("35dc"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},"1fe4":function(t,e,n){"use strict";n.r(e);var i=n("9936"),a=n("083e");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("63e9");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"35dc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{switchA:!1,switchB:!0,addrA:"192.168.2.135",addrB:"67.182.12.44"}},methods:{SwitchA:function(t){this.switchA=t.detail.value,this.switchB=!this.switchA,this.updateStorage()},SwitchB:function(t){this.switchB=t.detail.value,this.switchA=!this.switchB,this.updateStorage()},updateStorage:function(){this.switchA&&t.setStorage({key:"server_address",data:this.addrA}),this.switchB&&t.setStorage({key:"server_address",data:this.addrB})}}};e.default=n}).call(this,n("6e42")["default"])},"63e9":function(t,e,n){"use strict";var i=n("fcd4"),a=n.n(i);a.a},9936:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},d44f:function(t,e,n){"use strict";(function(t){n("e399"),n("921b");i(n("66fd"));var e=i(n("1fe4"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fcd4:function(t,e,n){}},[["d44f","common/runtime","common/vendor"]]]);
});
require('pages/common/services/services.js');
__wxRoute = 'pages/warning/warning';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/warning/warning.js';

define('pages/warning/warning.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/warning/warning"],{"4a07":function(n,t,e){"use strict";e.r(t);var u=e("5547"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a},5547:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},"8b3c":function(n,t,e){"use strict";(function(n){e("e399"),e("921b");u(e("66fd"));var t=u(e("97cb"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"97cb":function(n,t,e){"use strict";e.r(t);var u=e("b8af"),a=e("4a07");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);var c=e("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},b8af:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})}},[["8b3c","common/runtime","common/vendor"]]]);
});
require('pages/warning/warning.js');
__wxRoute = 'pages/profile/profile';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/profile/profile.js';

define('pages/profile/profile.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/profile"],{"0ded":function(e,n,o){"use strict";o.r(n);var t=o("39c6"),s=o.n(t);for(var i in t)"default"!==i&&function(e){o.d(n,e,function(){return t[e]})}(i);n["default"]=s.a},"39c6":function(e,n,o){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"push",provider:[],pushServer:"http://demo.dcloud.net.cn/push/?",tranMsg:""}},onLoad:function(){var n=this;e.getProvider({service:"push",success:function(e){console.log(o("success",e," at pages/profile/profile.vue:35")),n.provider=e.provider},fail:function(e){console.log(o("获取推送通道失败",e," at pages/profile/profile.vue:39"))}})},onUnload:function(){this.tranMsg=""},methods:{openPush:function(){e.subscribePush({provider:this.provider[0],success:function(n){e.showToast({title:"已开启push接收"})}})},closePush:function(){e.unsubscribePush({provider:this.provider[0],success:function(n){e.showToast({title:"已关闭push接收"})}})},listenTranMsg:function(){var n=this;e.onPush({provider:this.provider[0],success:function(n){e.showToast({title:"开始监听透传数据"})},callback:function(o){e.showToast({title:"接收到透传数据"}),n.tranMsg=JSON.stringify(o.data)}})},removeTranMsg:function(){e.offPush({provider:this.provider[0],success:function(n){console.log(o("移除监听透传数据"," at pages/profile/profile.vue:88")),e.showToast({title:"移除监听透传数据"})}})},requireTranMsg:function(){var e=plus.push.getClientInfo(),n=this.pushServer+"type=tran&appid="+encodeURIComponent(plus.runtime.appid);e.id&&(n+="&id="+e.id),n+="&cid="+encodeURIComponent(e.clientid),console.log(o(plus.os.name," at pages/profile/profile.vue:100")),"iOS"==plus.os.name&&(n+="&token="+encodeURIComponent(e.token)),n+="&title="+encodeURIComponent("Hello uniapp"),n+="&content="+encodeURIComponent("带透传数据推送通知！"),"iOS"===plus.os.name?n+="&payload="+encodeURIComponent('{"title":"Hello uniapp Test","content":"test content"}'):n+="&payload="+encodeURIComponent('\'{"title":"Hello uniapp Test","content":"test content"}\''),n+="&version="+encodeURIComponent(plus.runtime.version),console.log(o(n," at pages/profile/profile.vue:112")),plus.runtime.openURL(n)}}};n.default=t}).call(this,o("6e42")["default"],o("0de9")["default"])},"5eb6":function(e,n,o){"use strict";o.r(n);var t=o("8358"),s=o("0ded");for(var i in s)"default"!==i&&function(e){o.d(n,e,function(){return s[e]})}(i);var u=o("2877"),r=Object(u["a"])(s["default"],t["a"],t["b"],!1,null,null,null);n["default"]=r.exports},8358:function(e,n,o){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},s=[];o.d(n,"a",function(){return t}),o.d(n,"b",function(){return s})},e569:function(e,n,o){"use strict";(function(e){o("e399"),o("921b");t(o("66fd"));var n=t(o("5eb6"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,o("6e42")["createPage"])}},[["e569","common/runtime","common/vendor"]]]);
});
require('pages/profile/profile.js');
__wxRoute = 'pages/manage/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/manage/user/user.js';

define('pages/manage/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/user/user"],{"0dfa":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"5d00":function(e,t,a){"use strict";a.r(t);var n=a("0dfa"),o=a("7749");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);var i=a("2877"),u=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},7749:function(e,t,a){"use strict";a.r(t);var n=a("9388"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},9388:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return a.e("components/m-text-list/m-text-list").then(a.bind(null,"ce2e"))},s=function(){return a.e("components/zy-search/zy-search").then(a.bind(null,"05c9"))},i={components:{mTextList:o,zySearch:s},data:function(){return{showLoadMore:!1,loadMoreText:"加载中...",max:0,isShowIndexPage:!0,mData:[]}},onPullDownRefresh:function(){this.initData(),e.stopPullDownRefresh()},onReachBottom:function(){this.mData.length>1e3?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,this.loadListData())},methods:{itemClick:function(t){e.setStorage({key:"details",data:t}),e.navigateTo({url:"detail/detail"})},searchFilter:function(){e.showModal({content:"打开filter",showCancel:!1})},optHandler:function(t){console.log(n(t.method," at pages/manage/user/user.vue:59")),"delete"===t.method&&e.showModal({content:"删除",showCancel:!1}),"details"===t.method&&e.navigateTo({url:"details/details"})},initData:function(){this.loadListData()},setData:function(){this.mData.push({name:"手提式强光巡检工作灯",data:[{name:"登记总数",value:"12",icolor:"green"},{name:"超期未检",value:"1",icon:"search",icolor:"yellow"},{name:"在库",value:"11"},{name:"试验到期",value:"0"},{name:"离枯",value:"1"},{name:"超期服役",value:"3",icolor:"red"}]})},toshow:function(e){this.isShowIndexPage=e},search:function(t){e.showModal({content:t,showCancel:!1})},transferData:function(e){this.mData=this.$transfer.usersTransfer(e,{name:"username"},{username:"用户名",nickname:"昵称",email:"邮箱",status:"状态",mobile:"手机",age:"年龄",gender:"性别",orgName:"部门",address:"坐标",remark:"个性签名"},{name:"status"})},loadListData:function(){var e=this;this.$http.get("system/sysUser",{}).then(function(t){console.log(n(t," at pages/manage/user/user.vue:121"));var a=t.data;e.transferData(a.data.list)}).catch(function(e){console.log(n(e," at pages/manage/user/user.vue:126"))})}},onLoad:function(){this.loadListData()}};t.default=i}).call(this,a("6e42")["default"],a("0de9")["default"])},e2e5:function(e,t,a){"use strict";(function(e){a("e399"),a("921b");n(a("66fd"));var t=n(a("5d00"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["e2e5","common/runtime","common/vendor"]]]);
});
require('pages/manage/user/user.js');
__wxRoute = 'pages/manage/role/role';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/manage/role/role.js';

define('pages/manage/role/role.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/role/role"],{"0742":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},"39d0":function(t,n,e){"use strict";e.r(n);var u=e("5a44"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},"5a44":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},"684f":function(t,n,e){"use strict";(function(t){e("e399"),e("921b");u(e("66fd"));var n=u(e("db65"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},db65:function(t,n,e){"use strict";e.r(n);var u=e("0742"),r=e("39d0");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);var o=e("2877"),f=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports}},[["684f","common/runtime","common/vendor"]]]);
});
require('pages/manage/role/role.js');
__wxRoute = 'pages/manage/menu/menu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/manage/menu/menu.js';

define('pages/manage/menu/menu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/menu/menu"],{"3f3b":function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return a})},"52ea":function(n,e,t){"use strict";t.r(e);var u=t("b61d"),a=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=a.a},7307:function(n,e,t){"use strict";(function(n){t("e399"),t("921b");u(t("66fd"));var e=u(t("fc9d"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},b61d:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{}},methods:{}};e.default=u},fc9d:function(n,e,t){"use strict";t.r(e);var u=t("3f3b"),a=t("52ea");for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);var f=t("2877"),c=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports}},[["7307","common/runtime","common/vendor"]]]);
});
require('pages/manage/menu/menu.js');
__wxRoute = 'pages/manage/log/log';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/manage/log/log.js';

define('pages/manage/log/log.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/log/log"],{5668:function(e,t,n){"use strict";n.r(t);var u=n("c4fd"),r=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=r.a},b346:function(e,t,n){"use strict";(function(e){n("e399"),n("921b");u(n("66fd"));var t=u(n("c9e9"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c4fd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},c9e9:function(e,t,n){"use strict";n.r(t);var u=n("d6eb"),r=n("5668");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var c=n("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},d6eb:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})}},[["b346","common/runtime","common/vendor"]]]);
});
require('pages/manage/log/log.js');
__wxRoute = 'pages/manage/user/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/manage/user/detail/detail.js';

define('pages/manage/user/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/user/detail/detail"],{"369e":function(t,e,n){"use strict";n.r(e);var a=n("7214"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},7214:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/m-details/m-details").then(n.bind(null,"2a08"))},u={components:{mDetails:a},data:function(){return{formData:{}}},methods:{},onLoad:function(){var e=this;t.getStorage({key:"details",success:function(t){e.formData=t.data}})}};e.default=u}).call(this,n("6e42")["default"])},"99f6":function(t,e,n){"use strict";(function(t){n("e399"),n("921b");a(n("66fd"));var e=a(n("cc6b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},cc6b:function(t,e,n){"use strict";n.r(e);var a=n("fe68"),u=n("369e");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var r=n("2877"),c=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},fe68:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})}},[["99f6","common/runtime","common/vendor"]]]);
});
require('pages/manage/user/detail/detail.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

