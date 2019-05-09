console.log(`There are ${characters.length} characters in the array.`);


charArray = [];
charArrayZ = [];
charArrayDead = [];
hasMostTitles = [];
mostTitles = 0;
hasMostTitle = "";
count = 0;

characters.forEach(function(character){
    if(character.name.charAt(0)==="A"){
        charArray.push(character.name)
    }
    });
console.log(charArray);


characters.forEach(function(char){
    if(char.name.charAt(0)==="Z"){
        charArrayZ.push(char.name);
    }
    });
console.log(charArrayZ);

characters.forEach(function(char){
    if(char.died !=""){
        charArrayDead.push(char.name);
    }
    });
    console.log(charArrayDead);

characters.forEach(function(char){
    if(char.titles.length>mostTitles){
        mostTitles=char.titles.length;
        hasMostTitle = char.name;
    }
    });
    console.log(hasMostTitle);

    characters.forEach(function(char){
        if(char.culture === 'Valyrian'){
            count+= 1;
        }
    })
    console.log(count);

    characters.forEach(function(char){
        if(char.name ==="Hot Pie"){
            console.log(char.playedBy);
        }
    });

        




    //  characters.forEach(function(char)