var formValidator = function(formElement){
    
    
    if(formElement.tagName = 'FORM'){
       
        var blankElements = "";
       
        for(var i = 0; i < formElement.length; i++){
            
           var node = formElement[i];
           
            if(node.type == 'text'){
                console.log(node.attributes);
               if((node.value == null) || (node.value == " ") || noBlanckSpace(node)){
                    blankElements += "\n"+node.getAttribute("data-name");
                    continue;
                 }
            }
            
            
        }
        
        if(!blankElements)
            return false;
        else{
            
            var message = "I segenti campi sono obbligatori:";
            message += blankElements;
            alert(message);
        }
    }
        
        
        
    return false;
}

function noBlanckSpace(node){
    
  for(var i = 0; i < node.value.length; i++){
        var c = node.value.charAt(i);

        if((c != ' ') && (c != '\n') && (c != '\t')) 
            return false;


    }
    return true;
}

window.onerror = function(msg, url, line){
    var w = window.open("","erorr","reseizable, status, width=625,height=400");

    var d = w.document;

    d.write("<p>Error: "+msg+"</p>");
    d.write("<p>Url: "+url+"</p>");
    d.write("<p>Linea: "+line+"</p>");
}
