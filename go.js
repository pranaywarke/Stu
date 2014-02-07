document.ready = function(){
try{

	var _su = new su();
	var input1 = document.getElementById('input1');
	var input2 = document.getElementById('input2');
	var output1 = input2;
	var output2 = document.getElementById('output2');
	var find = document.getElementById('find');
	var gosplit = document.getElementById('gosplit');
	var gofind = document.getElementById('gofind');
	var toU = document.getElementById('toU');
	var toL = document.getElementById('toL');
	var toC = document.getElementById('toC');
	var base64 = document.getElementById('base64');
	var json = document.getElementById('json');
	var phpA = document.getElementById('phpA');
	var xml = document.getElementById('xml');
	var phpjson = document.getElementById('phpjson');
	
	input1.onchange = function(){
		var count = document.getElementById('count');
		count.innerHTML = this.value.length;
	};
	
	gosplit.onclick = function(){
		var occ = document.getElementById('split').value;
		var i = input1.value ;
		var tokens = i.split(occ);
		var str = '';
		for(var t in tokens){
			str += tokens[t]+"<br>";
		}
		output2.innerHTML = str;
		scroll();
	};

	toU.onclick = function(){
		output2.innerHTML = _su.uppercase(input1.value);
		scroll();
	};
	
	toL.onclick = function(){
		output2.innerHTML = _su.lowercase(input1.value);
		scroll();
	};
	
	toC.onclick = function(){
		output2.innerHTML = _su.camelcase(input1.value);
		scroll();
	};
	
	
	base64.onclick = function(){
		if(getselde()=='encode')
			output2.innerHTML = _su.encode(input1.value);
		else
			output2.innerHTML = _su.decode(input1.value);
		
		scroll();
	};
	url.onclick = function(){
		if(getselde()=='encode')
			output2.innerHTML = encodeURIComponent(input1.value);
		else
			output2.innerHTML = decodeURIComponent(input1.value);
		
		scroll();
	};
	
	/*	utf.onclick = function(){
		if(getselde()=='encode')
			output2.innerHTML = _su._utf8_encode(input1.value);
		else
			output2.innerHTML = _su._utf8_decode(input1.value);
		
		scroll();
	};
	
	url.onclick = function(){
		if(getselde()=='encode')
			output2.innerHTML = encodeURIComponent(input1.value);
		else
			output2.innerHTML = decodeURIComponent(input1.value);
		
		scroll();
	};
	
	html.onclick = function(){
		if(getselde()=='encode')
			output2.innerHTML = _su.encodeHtmlEntity(input1.value);
		else
			output2.innerHTML = _su.decodeHtmlEntity(input1.value);
		
		scroll();
	};*/
	
	
	phpA.onclick = function(){
		output2.innerHTML = _su.jsontophp(input1.value);
		phpredo();
		scroll();
	};
	
	json.onclick = function(){
		output2.innerHTML = _su.prettyjson(input1.value);
		scroll();
		
	}
	
	/*json.onclick = function(){
		 var el = {
		           input: input1,
		           result: $("#output2")
		        };
		 var json = el.input.value;
      var o;
      try{ o = JSON.parse(json); }
      catch(e){ 
          alert('not valid JSON');
          return;
      }
      
      var node = new PrettyJSON.view.Node({ 
          el:el.result, 
          data:o
      });
      scroll();
	};*/
	
	xml.onclick = function(){
		try{
			var json =JSON.parse(input1.value);
			output2.innerHTML = "<span class='BG boolean'> &lt;xml&gt;</span>"+_su.jsontoxml(json,1)+"<span class='BG boolean'> &lt;/xml&gt;</span>";
		}catch(e){
			alert(e);
		}
		xmlredo();
		scroll();
	};
	
	
}catch(e){
	alert(e);
}
};

function getselde(){
	var e = document.getElementById("de");
	return e.options[e.selectedIndex].value;
}

function scroll(){
	 $('html, body').animate({
	        scrollTop: $("#phpA").offset().top
	    }, 500);
	
}


function phpredo(){
	$(".php_d").each(function(){
		var id = $(this).attr("_id");
		$(this).click(function (){
			
			$(".php_"+id).toggle();
		});
	});
	
}

function xmlredo(){
	$(".xml_d").each(function(){
		var id = $(this).attr("_id");
		$(this).click(function (){
			
			$(".xml_"+id).toggle();
		});
	});
	
}

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}