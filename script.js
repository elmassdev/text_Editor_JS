let textarea, inputEl, resultEl, result, i=0, current = 0, txtname; 

document.getElementById('upload')
			.addEventListener('change', function() {
			
			var fl=new FileReader();
			fl.onload=function(){
				document.getElementById('text')
						.textContent=fl.result;
			}			
            fl.readAsText(this.files[0]);
        })
        

const removewords = () => {
    if(inputEl.value!==''){
        if(textarea.value.includes(inputEl.value)){
            while(textarea.value.includes(inputEl.value)){
                textarea.value = textarea.value.replace(inputEl.value,'');
        }if(!textarea.value.includes(inputEl.value)){
            alert("successfully done!");
        }
    }else{
        alert("The text doesn't contain this word!");
        }
    resultEl.innerHTML = textarea.value;}else{
        alert("Merci de remplir le champs!");
    }
};

const removenumbers = () => {
    textarea.value = textarea.value.replace(/\d/g,'');
    resultEl.innerHTML = textarea.value;
};


const replacenumbers = () => {
    if(replace.value!==''){
        textarea.value = textarea.value.replace(/\d{5,}/g,replace.value);
        resultEl.innerHTML = textarea.value;}else{
            alert('Please fill the replace text');
            replace.setAttribute("class","clignotant");
        }
};

 const removenumbers4 = () => {
    textarea.value = textarea.value.replace(/\d{5,}/g,'');
//     var regex= new RegExp(/\D/g);
//     if(textarea.value.match(regex)){
//         while(textarea.value.includes(regex)){
//             textarea.value = textarea.value.replace(/\D/g,'');
//     }if(!textarea.value.includes(regex)){
//         alert("successfully done!");
//     }
// }else{
//     alert("The text doesn't contain numbers");
//     }
resultEl.innerHTML = textarea.value;
};

const replacewords = () => {
    if(inputEl.value!=='' && replace.value!==''){
        if(textarea.value.includes(inputEl.value)){
            while(textarea.value.includes(inputEl.value)){
                textarea.value = textarea.value.replace(inputEl.value,replace.value);
        }if(!textarea.value.includes(inputEl.value)){
            alert("successfully done!");
        }
    }else{
        alert("The text doesn't contain this word!");
        }
    resultEl.innerHTML = textarea.value;}else{
        alert("Merci de remplir le champs!");
    }
};

function downloadFile() {
    if(txtname.value==''){
        var fname = 'Modified'+i+'.txt';
    }else{
        var fname = txtname.value+'.txt';
    }
    const content = document.getElementById('text').value;
    const filename = fname;
       
 
    const element = document.createElement('a');
    
   
    const blob = new Blob([content], { type: 'plain/text' });
  
     
    const fileUrl = URL.createObjectURL(blob);
    
    
    element.setAttribute('href', fileUrl); //file location
    element.setAttribute('download', filename); // file name
    element.style.display = 'none';    
     
    document.body.appendChild(element);
    element.click();
    
    document.body.removeChild(element);
    i++;
  };
  
//   window.onload = () => {
//     document.getElementById('download').
//     addEventListener('click', e => {     
    
//       const content = document.getElementById('text').value;
//       const filename = 'Modified'+i+'.txt';
//           i++; 
   
//       if (filename && content) {
//         downloadFile(filename, content);
//       }
//     });
//   };


window.onload = () => {        
    textarea = document.querySelector('#text');
    inputEl = document.querySelector('#search');
    replace = document.querySelector('#replace');
    resultEl = document.querySelector('#printResult');
    txtname = document.querySelector('#txtname');
};
