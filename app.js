var txtInput= document.querySelector("#txt-input");
 var btnTranslate= document.querySelector("#btn-translate");
 var outputDiv= document.querySelector("#output");
 
 var serverURL="https://api.funtranslations.com/translate/shakespeare.json"

 function getTranslationURL(text){
     return serverURL+"?"+"text="+text
 }

 function errorHandler(error){
     console.log("error occured!",error);
     alert("something wrong with server! try again after sometime.")
 }
 function clickHandler(){
     var inputText=txtInput.value;  //taking input
     //calling server for processing
     fetch(getTranslationURL(inputText))
        .then(response=>response.json())
        .then(json=>{
            var TranslatedText= json.contents.translated;
            outputDiv.innerText= TranslatedText;  //output
        })
        .catch(errorHandler)
 };

 btnTranslate.addEventListener("click",clickHandler)