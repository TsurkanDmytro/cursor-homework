function* createIdGenerator(){
    let i = 0;
    while(true){
        yield i;
        i++;
        
    }
}


const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(fontSize){
    while(true){
        let number = yield fontSize;
        if(number==="up"){
            fontSize+=2;
        }else if( number ==="down" && fontSize>2){
            fontSize-=2;
            
        }
    }
}


const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next().value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next().value)

