let passBox = document.getElementById('passBox');
let range = document.getElementById('range');
let rangeVal = document.getElementById('rangeVal');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genbtn = document.getElementById('genbtn');
let icon = document.getElementById('icon');

rangeVal.textContent = range.value;

range.addEventListener('input' , ()=>{
    rangeVal.textContent = range.value;
});

genbtn.addEventListener('click' , ()=>{
    passBox.value = generate();
    
    
});

let up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lo = "abcdefghijklmnopqrstuvwxyz";
let no = "0123456789";
let sy = "!@#$%^&*_";
function generate(){
    let generatePass = "";
    let allChar = "";
    
    allChar  += lowercase.checked ? lo : "";
    allChar  += uppercase.checked ? up : "";
    allChar  += numbers.checked ? no : "";
    allChar  += symbols.checked ? sy : "";


    if(allChar == "" || allChar.length == 0) {
        return generatePass;
    }
    let i = 1;
    
    while(i <= range.value){
        generatePass += allChar.charAt(Math.floor(Math.random() * allChar.length));
        i++;
        
    }
    // generatePass = allchar.charAt(parseInt(Math.random() * allchar.length)) ;
    return generatePass;
}

icon.addEventListener('click' , ()=>{

    if(passBox.value != "" || passBox.value >=1){
        navigator.clipboard.writeText(passBox.value);
        icon.innerHTML = "Check"
        icon.title = "Passward Copied"


        setTimeout(()=>{
            icon.innerHTML = "content_copy";
            icon.title = ""
        },4000)
    }
})
