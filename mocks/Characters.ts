import { Character } from "@/types/Character";
import { v4 as uuidv4 } from 'uuid';

function mockCharacters(elements:number): Character[] {

    let characters:Character[] = []
    let counter:number = 0;

    while(counter<elements){
        characters.push({
            id:counter,
            created:"1928",
            episode:[""],
            gender:"Female",
            image:"/hero_bg.png",
            liked:true,
            location:{name:"", url:""},
            name:"FAKE NAME",
            origin:{name:"da", url:""},
            species:"Human",
            status:"Alive",
            type:"Undefined",
            url:""


        })
        counter++;
    }

    return characters;
}


export { mockCharacters }