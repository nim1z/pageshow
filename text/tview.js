<!--
	var count=0;
	window.onload = function (){
		count++;
		//要素ノードオブジェクト
		var novel=document.getElementById('novel');
		//新たにテキストノードを作成
		var textNode=document.createTextNode(text.substr(count-1,1));
		//作成したテキストノードを子要素して追加する
		novel.appendChild(textNode);
	myTimer=setTimeout("reload()",100);
	if(count==text.length){
		clearTimeout(myTimer);
		count=0;
		}
	}
