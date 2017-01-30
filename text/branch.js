function branch(){
	parent.select.location.href= "https://mps2016js.github.io/dummy.html";
	var s = sessionStorage.sel;
	if (s == "1"){
		parent.text.location.href= t1;
		parent.media.location.href= m1;
		}
	else if (s == "2"){
		parent.text.location.href= t2;
		parent.media.location.href= m2;
		}
	else if (s == "3"){
		parent.text.location.href= t3;
		parent.media.location.href= m3;
		}
	}
