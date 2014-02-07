
function su(){
	
	this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	this.entityTable = {
            34 : 'quot', 
            38 : 'amp', 
            39 : 'apos', 
            60 : 'lt', 
            62 : 'gt', 
            160 : 'nbsp', 
            161 : 'iexcl', 
            162 : 'cent', 
            163 : 'pound', 
            164 : 'curren', 
            165 : 'yen', 
            166 : 'brvbar', 
            167 : 'sect', 
            168 : 'uml', 
            169 : 'copy', 
            170 : 'ordf', 
            171 : 'laquo', 
            172 : 'not', 
            173 : 'shy', 
            174 : 'reg', 
            175 : 'macr', 
            176 : 'deg', 
            177 : 'plusmn', 
            178 : 'sup2', 
            179 : 'sup3', 
            180 : 'acute', 
            181 : 'micro', 
            182 : 'para', 
            183 : 'middot', 
            184 : 'cedil', 
            185 : 'sup1', 
            186 : 'ordm', 
            187 : 'raquo', 
            188 : 'frac14', 
            189 : 'frac12', 
            190 : 'frac34', 
            191 : 'iquest', 
            192 : 'Agrave', 
            193 : 'Aacute', 
            194 : 'Acirc', 
            195 : 'Atilde', 
            196 : 'Auml', 
            197 : 'Aring', 
            198 : 'AElig', 
            199 : 'Ccedil', 
            200 : 'Egrave', 
            201 : 'Eacute', 
            202 : 'Ecirc', 
            203 : 'Euml', 
            204 : 'Igrave', 
            205 : 'Iacute', 
            206 : 'Icirc', 
            207 : 'Iuml', 
            208 : 'ETH', 
            209 : 'Ntilde', 
            210 : 'Ograve', 
            211 : 'Oacute', 
            212 : 'Ocirc', 
            213 : 'Otilde', 
            214 : 'Ouml', 
            215 : 'times', 
            216 : 'Oslash', 
            217 : 'Ugrave', 
            218 : 'Uacute', 
            219 : 'Ucirc', 
            220 : 'Uuml', 
            221 : 'Yacute', 
            222 : 'THORN', 
            223 : 'szlig', 
            224 : 'agrave', 
            225 : 'aacute', 
            226 : 'acirc', 
            227 : 'atilde', 
            228 : 'auml', 
            229 : 'aring', 
            230 : 'aelig', 
            231 : 'ccedil', 
            232 : 'egrave', 
            233 : 'eacute', 
            234 : 'ecirc', 
            235 : 'euml', 
            236 : 'igrave', 
            237 : 'iacute', 
            238 : 'icirc', 
            239 : 'iuml', 
            240 : 'eth', 
            241 : 'ntilde', 
            242 : 'ograve', 
            243 : 'oacute', 
            244 : 'ocirc', 
            245 : 'otilde', 
            246 : 'ouml', 
            247 : 'divide', 
            248 : 'oslash', 
            249 : 'ugrave', 
            250 : 'uacute', 
            251 : 'ucirc', 
            252 : 'uuml', 
            253 : 'yacute', 
            254 : 'thorn', 
            255 : 'yuml', 
            402 : 'fnof', 
            913 : 'Alpha', 
            914 : 'Beta', 
            915 : 'Gamma', 
            916 : 'Delta', 
            917 : 'Epsilon', 
            918 : 'Zeta', 
            919 : 'Eta', 
            920 : 'Theta', 
            921 : 'Iota', 
            922 : 'Kappa', 
            923 : 'Lambda', 
            924 : 'Mu', 
            925 : 'Nu', 
            926 : 'Xi', 
            927 : 'Omicron', 
            928 : 'Pi', 
            929 : 'Rho', 
            931 : 'Sigma', 
            932 : 'Tau', 
            933 : 'Upsilon', 
            934 : 'Phi', 
            935 : 'Chi', 
            936 : 'Psi', 
            937 : 'Omega', 
            945 : 'alpha', 
            946 : 'beta', 
            947 : 'gamma', 
            948 : 'delta', 
            949 : 'epsilon', 
            950 : 'zeta', 
            951 : 'eta', 
            952 : 'theta', 
            953 : 'iota', 
            954 : 'kappa', 
            955 : 'lambda', 
            956 : 'mu', 
            957 : 'nu', 
            958 : 'xi', 
            959 : 'omicron', 
            960 : 'pi', 
            961 : 'rho', 
            962 : 'sigmaf', 
            963 : 'sigma', 
            964 : 'tau', 
            965 : 'upsilon', 
            966 : 'phi', 
            967 : 'chi', 
            968 : 'psi', 
            969 : 'omega', 
            977 : 'thetasym', 
            978 : 'upsih', 
            982 : 'piv', 
            8226 : 'bull', 
            8230 : 'hellip', 
            8242 : 'prime', 
            8243 : 'Prime', 
            8254 : 'oline', 
            8260 : 'frasl', 
            8472 : 'weierp', 
            8465 : 'image', 
            8476 : 'real', 
            8482 : 'trade', 
            8501 : 'alefsym', 
            8592 : 'larr', 
            8593 : 'uarr', 
            8594 : 'rarr', 
            8595 : 'darr', 
            8596 : 'harr', 
            8629 : 'crarr', 
            8656 : 'lArr', 
            8657 : 'uArr', 
            8658 : 'rArr', 
            8659 : 'dArr', 
            8660 : 'hArr', 
            8704 : 'forall', 
            8706 : 'part', 
            8707 : 'exist', 
            8709 : 'empty', 
            8711 : 'nabla', 
            8712 : 'isin', 
            8713 : 'notin', 
            8715 : 'ni', 
            8719 : 'prod', 
            8721 : 'sum', 
            8722 : 'minus', 
            8727 : 'lowast', 
            8730 : 'radic', 
            8733 : 'prop', 
            8734 : 'infin', 
            8736 : 'ang', 
            8743 : 'and', 
            8744 : 'or', 
            8745 : 'cap', 
            8746 : 'cup', 
            8747 : 'int', 
            8756 : 'there4', 
            8764 : 'sim', 
            8773 : 'cong', 
            8776 : 'asymp', 
            8800 : 'ne', 
            8801 : 'equiv', 
            8804 : 'le', 
            8805 : 'ge', 
            8834 : 'sub', 
            8835 : 'sup', 
            8836 : 'nsub', 
            8838 : 'sube', 
            8839 : 'supe', 
            8853 : 'oplus', 
            8855 : 'otimes', 
            8869 : 'perp', 
            8901 : 'sdot', 
            8968 : 'lceil', 
            8969 : 'rceil', 
            8970 : 'lfloor', 
            8971 : 'rfloor', 
            9001 : 'lang', 
            9002 : 'rang', 
            9674 : 'loz', 
            9824 : 'spades', 
            9827 : 'clubs', 
            9829 : 'hearts', 
            9830 : 'diams', 
            338 : 'OElig', 
            339 : 'oelig', 
            352 : 'Scaron', 
            353 : 'scaron', 
            376 : 'Yuml', 
            710 : 'circ', 
            732 : 'tilde', 
            8194 : 'ensp', 
            8195 : 'emsp', 
            8201 : 'thinsp', 
            8204 : 'zwnj', 
            8205 : 'zwj', 
            8206 : 'lrm', 
            8207 : 'rlm', 
            8211 : 'ndash', 
            8212 : 'mdash', 
            8216 : 'lsquo', 
            8217 : 'rsquo', 
            8218 : 'sbquo', 
            8220 : 'ldquo', 
            8221 : 'rdquo', 
            8222 : 'bdquo', 
            8224 : 'dagger', 
            8225 : 'Dagger', 
            8240 : 'permil', 
            8249 : 'lsaquo', 
            8250 : 'rsaquo', 
            8364 : 'euro'
       
    };
	this.reverse = function(s){
		if(s!=null)
			return s.split("").reverse().join("");
	};
	
	this.lowercase = function(s){
		if (s!=null)
			return s.toLowerCase();
	};
	
	this.uppercase = function(s){
		if (s!=null)
			return s.toUpperCase();
	};
	
	this.camelcase = function(s){
		if(s!=null)
		return s.split(/ +/).map( function(item) { return item.replace(/^[a-z]/g,function ($1){return $1.toUpperCase();}); } ).join(" ");
	};
	
	this.len = function(s){
		if(s!=null)
		return s.length;
	};
	
	this.contains = function(needle,haystack){
		if(haystack!=null)
			return haystack.indexOf(needle);
	};
	this.find = function(needle,haystack){
		//todo
	};
	
	this.intersection = function(a,b){
		var aa = a.split(/ +/);
		var bb = a.split(/ +/);
		var set ={};
		for(var i =0;i<aa.length;i++)
			set[aa[i]]=1;
		for(var i =0;i<bb.length;i++)
			set[bb[i]]=1;
		return Object.keys(set);
		
	};
	
	this.difference = function(a,b){
		var aa = a.split(/ +/);
		var bb = b.split(/ +/);
		var set ={};
		for(var i =0;i<aa.length;i++)
			set[aa[i]]=1;
		for(var i =0;i<bb.length;i++)
			set[bb[i]]=0;
		var ret = [];
		for (var key in set) {
			 if(set[key]==1)
				 ret.push(key);
		}
		return ret;
	};
	
	this.sdifference = function(a,b){
		return this.intersection(this.difference(a,b).join(' '),this.difference(b,a).join(' '));
	};
	
	this.split = function(needle,haystack){
		if(haystack!=null)
		return haystack.split(needle);
	};
	
	this.prettyjson = function(json){
		
		for(var t in json){
			if(json[t] instanceof Object)
				this.prettyjson(json[t]);
			var str = JSON.stringify(json[t]);
			str = str.replace("{","OPENBR <br>");
			str = str.replace("}","CLOSEBR <br>");
			str = str.replace("[","OPEN <br>");
			str = str.replace("]","CLOSE <br>");
			json[t]=str;
		}
		return json;
	}
	
	this.jsontophp = function(json){
		this.iterator++;
		try{
			json = JSON.parse(json);
			var tab =1;
			str = '<span _id='+this.iterator+' class="php_d boolean"> array</span> <span class="php_'+this.iterator+'"> (<br>';
			var count = 0;
			for(var i in json){
				
				var obj = json[i];
				if(count++!=0)
		        	str+=',<br>';
				for(var j=0;j<tab;j++)
					str+='<span class=tab></span>';
				if(isNaN(i))
					str+='<span class=boolean>"'+i+'"</span> => '+this._jsontophp(obj,tab+1);
				else
					str+='<span class=boolean>'+i+' => </span>'+this._jsontophp(obj,tab+1);
			
			}
			
			str +='<br>';
			for(var j=0;j<tab;j++)
				str+='<span class=tab></span>';
			str+=')</span>';
			return str;
		}catch(e){
			alert(e);
			return json;
		}
	};
	
	this.iterator=0;
	this._jsontophp = function(json,tab){
		this.iterator++;
		try{
			if(json instanceof Object){
				str = '<span _id='+this.iterator+' class="php_d boolean"> array</span> <span class="php_'+this.iterator+'"> (<br>';
				var count = 0;
				for(var i in json){
					var obj = json[i];
					if(count++!=0)
			        	str+=',<br>';
					for(var j=0;j<tab;j++)
						str+='<span class=tab></span>';
					if(isNaN(i))
						str+='<span class=boolean>"'+i+'"</span> => '+this._jsontophp(obj,tab+1);
					else
						str+='<span class=boolean>'+i+' => </span>'+this._jsontophp(obj,tab+1);
				
				}
				str +='<br>';
				for(var j=0;j<tab;j++)
					str+='<span class=tab></span>';
				str+=')</span>';
				return str;
			}else 
				return '<span class=string>"'+json+'"</span>';
		}catch(e){
			alert(e);
			return json;
		}
	};
	
	this.jsontoxml = function (arr,tab){
		this.iterator++;
	 	var str="<br>";
		if(arr){		   
		  for(var i in arr){
			var key =i;
			var value = arr[i];
			if(!isNaN(key))
				key = "item";
			for(var j=0;j<tab;j++)
				str+='<span class=tab></span>';
			if(value instanceof Object){
		 		str+= "<span _id="+this.iterator+" class='xml_d boolean'>&lt;"+key+"&gt;</span><span class='xml_"+this.iterator+"'/>"+this.jsontoxml(value,tab+1)+"</span>";
				for(var j=0;j<tab;j++)
					str+='<span class=tab></span>';
			}
			 else{
			 	str+= "<span class='boolean'> &lt;"+key+"&gt;</span><span class='string'>"+value+"</span>";
			 }
			if(value instanceof Object){
				str+="<span class='BG boolean'> &lt;/"+key+"&gt;</span><br>";
			}else
				str+="<span class='boolean'> &lt;/"+key+"&gt;</span><br>";
		 	}
		 }
		 return str;
	};
	
	
	this.phptojson = function(php){
		php = php.replace(/ /g,'');
		php = php.replace(/array/g,'');
		php = php.replace(/=>/g,':');
		var stack = [];
		for(var i in php){
			stack.push(php[i]);
			if(php[i]==")"){
				var c = stack.length;
				var popstack = [];
				while(c>0){
					var t = stack.pop();
					popstack.push(t);
					if(t=="(")
						break;
					c--;
				}
				stack.push(this._getphp(popstack.reverse().join("")));
			}
		}
		alert(stack.join(",").replace(/-@-/g,","));
	}
	/*this.phptojson = function(php){
		php = php.replace(/ /g,'');
		var stack = [];
		var toPop = false;
		for(var i in php){
			if(php[i]=='(')
				toPop = true;
			stack.push(php[i]);
			if(php[i]==")"){
				var c = stack.length;
				var popstack = [];
				while(c>0){
					var t = stack.pop();
					popstack.push(t);
					if(t=="(")
						c=6;
					c--;
				}
				stack.push(this._getphp(popstack.reverse().join("")));
			}
			toPop = false;
		}
		return stack.join("").replace("/-@-/g",',');
	}*/
	
	this._getphp= function(php){
		var regExp = /\(([^)]+)\)/;
		var matches = regExp.exec(php);
		var tokens = matches[1].split(",");
		var isA = false;
		var container=[];
		for(var token in tokens){
			var t = tokens[token].split(":");
			if(t.length==2){
			//	tokens[token] = '"'+t[0]+'":'+t[1];
			}else{
				isA=true;
			}
			container.push(tokens[token].trim());
		}
		if(isA){
			for(var token in tokens){
				var t = tokens[token].split(":");
				if(t.length==2){
					tokens[token]="{"+tokens[token]+"}";
				}
				container.push(tokens[token]);
			}
		}
		if(isA){
			return "["+container.join("-@-")+"]";
		}else{
			return "{"+container.join("-@-")+"}";
		}
		
	}
	this.encode = function (input) {
	    var output = "";
	    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	    var i = 0;

	    input = this._utf8_encode(input);

	    while (i < input.length) {

	        chr1 = input.charCodeAt(i++);
	        chr2 = input.charCodeAt(i++);
	        chr3 = input.charCodeAt(i++);

	        enc1 = chr1 >> 2;
	        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	        enc4 = chr3 & 63;

	        if (isNaN(chr2)) {
	            enc3 = enc4 = 64;
	        } else if (isNaN(chr3)) {
	            enc4 = 64;
	        }

	        output = output +
	        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
	        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

	    }

	    return output;
	};
	
	this.decode = function (input) {
	    var output = "";
	    var chr1, chr2, chr3;
	    var enc1, enc2, enc3, enc4;
	    var i = 0;

	    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	    while (i < input.length) {

	        enc1 = this._keyStr.indexOf(input.charAt(i++));
	        enc2 = this._keyStr.indexOf(input.charAt(i++));
	        enc3 = this._keyStr.indexOf(input.charAt(i++));
	        enc4 = this._keyStr.indexOf(input.charAt(i++));

	        chr1 = (enc1 << 2) | (enc2 >> 4);
	        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	        chr3 = ((enc3 & 3) << 6) | enc4;

	        output = output + String.fromCharCode(chr1);

	        if (enc3 != 64) {
	            output = output + String.fromCharCode(chr2);
	        }
	        if (enc4 != 64) {
	            output = output + String.fromCharCode(chr3);
	        }

	    }

	    output = this._utf8_decode(output);

	    return output;

	};
	
	this._utf8_encode = function (string) {
	    string = string.replace(/\r\n/g,"\n");
	    var utftext = "";

	    for (var n = 0; n < string.length; n++) {

	        var c = string.charCodeAt(n);

	        if (c < 128) {
	            utftext += String.fromCharCode(c);
	        }
	        else if((c > 127) && (c < 2048)) {
	            utftext += String.fromCharCode((c >> 6) | 192);
	            utftext += String.fromCharCode((c & 63) | 128);
	        }
	        else {
	            utftext += String.fromCharCode((c >> 12) | 224);
	            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
	            utftext += String.fromCharCode((c & 63) | 128);
	        }

	    }

	    return utftext;
	},

	// private method for UTF-8 decoding
	this._utf8_decode = function (utftext) {
	    var string = "";
	    var i = 0;
	    var c = c1 = c2 = 0;

	    while ( i < utftext.length ) {

	        c = utftext.charCodeAt(i);

	        if (c < 128) {
	            string += String.fromCharCode(c);
	            i++;
	        }
	        else if((c > 191) && (c < 224)) {
	            c2 = utftext.charCodeAt(i+1);
	            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
	            i += 2;
	        }
	        else {
	            c2 = utftext.charCodeAt(i+1);
	            c3 = utftext.charCodeAt(i+2);
	            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
	            i += 3;
	        }

	    }

	    return string;
	};
	
	this.encodeHtmlEntity = function(str) {
		return str.replace(/&#(\d+);/g, function(match, dec) {
		return String.fromCharCode(dec);
		});
	};
		 
	this.decodeHtmlEntity = function(str) {
		
		alert(this.entityTable);
	            return str.replace(/[\u00A0-\u2666<>\&]/g, function(c) {
	                return '&' + 
	                (this.entityTable[c.charCodeAt(0)] || '#'+c.charCodeAt(0)) + ';';
	            });
	      
	        
	};
	
}

