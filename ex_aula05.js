let writeOutput = function(text){
    document.write(`<h2>${text}</h2>`)
}


let truncateString = function(str, num)
{
    if(str.length > num){
        str = str.slice(0, num);
        writeOutput(str);
    }
    writeOutput(str.length);
}

truncateString("sup doods, o meu nome é wuant", 10);