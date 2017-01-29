function branch(){
	parent.select.location.href= "https://mps2016js.github.io/dummy.html";
	var s = sessionStorage.sel;
	if (s = 1){
		parent.text.location.href= ta;
		parent.media.location.href= ma;
		}
	if (s = 2){
		parent.text.location.href= tb;
		parent.media.location.href= mb;
		}
	if (s = 3){
		parent.text.location.href= tc;
		parent.media.location.href= mc;
		}
	else{
		alert('1～3を選びなおせ')
		}
	}
