/* reduction of DavidWalsh blog jQuery link/ Snippler's http://snipplr.com/view/8406/ */

<a href="javascript:(function()%7Bvar%20d=document,w=window,ds=d.getSelection,ws=w.getSelection,ss=d.selection,e=encodeURIComponent;t=(ws)%3Fws():(ds)%3Fds():(ss)%3Fss.createRange().text:'';t=(t.toString().length)%3Ft:prompt('Please select the code you would like to research.','');if(t)%7Ba='http://docs.jquery.com/Special:Search?search=';u=a+e(t);f=function()%7Bx=w.open(u,'nfx','scrollbars=1,toolbar=0,resizable=1,status=1,width=600,height=600');if(!x)w.location.href=u;%7D;if(/Firefox/.test(navigator.userAgent))setTimeout(f,0);else%20f();%7D%7D)();">jQuery Docs</a>

// Below is the same code string exploded to show the code without the escape characters and compression
//<a href="
	javascript:(function() {
<a href="javascript:
	(function() {

function() {
		var d = document, w = window, ds = d.getSelection, ws = w.getSelection, ss = d.selection, e = endcodeURIComponent;
		
			t = (ws)?ws():(ds)?ds():(ss)?ss.createRange().text:'';
			t = (t.toString().length)?t:prompt('Please select the code you would like to research.','');
				if (t) {
					a = 'http://docs.jquery.com/Special:Search?search = ';
					u = a + e(t);
					f = function() {
						x = w.open(u, 'nfx', 'scrollbars = 1, toolbar = 0, resizable = 1, status = 1, width = 600, height = 600'); 
							if (!x) w.location.href=u;
							}
							if (/Firefox/.test(navigator.userAgent)) 
								setTimeout(f,0);
									else f();
						}
})();
//	">jQeury Docs</a>
	
<!-- This Script is from www.htmlfreecodes.com, Coded by: Krishna Eydat-->
<SCRIPT language=JavaScript>
var NS4 = (document.layers);    
var IE4 = (document.all);
var w = window;    
var n   = 0;
function findInPage(str) {
  var txt, i, found;
  if (str == "")
    return false;
  if (NS4) {
    if (!w.find(str))
      while(w.find(str, false, true))
        n++;	

%3Cscript%20language=javascript%3Evar%20NS4%20(document.layers);var%20IE4%20=%20(document.all);var%20win%20=%20window;var%20n%20=%200;function%20findingInPage(str)%20%7Bvar%20txt,%20i%20found;if%20(str%20==%20"")return%20false;if%20(NS4)%20%7Bif%20(!win.find(str))while(win.find(str,false,true))n++;
