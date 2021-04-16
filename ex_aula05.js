let writeOutput = function(text){
    document.write(`<h2>${text}</h2>`)
}


let truncateString = function(str, num)
{
    if(str.length <= num){
        writeOutput(str);
    }

    if(str.length > num){
        str = str.slice(0, num);
        writeOutput(str + "...");
    }
}

truncateString("Adoro programação e animação web", 5);

let titleCase = function(str){
    let separatedString = str.split(' ');
    for (let i = 0; i < separatedString.length; i++){
        separatedString[i] = separatedString[i].charAt(0).toUpperCase() + separatedString[i].substring(1);
    } 
    let finishedString = separatedString.join(' ');
    writeOutput(finishedString);
}

titleCase("o meu nome é júlio simaõ araújo");
