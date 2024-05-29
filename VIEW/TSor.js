export default class TSor{
    #termekObj={};
    #szuloElem;
    #sorElem;
    #torlesElem;
    constructor(termekObj, szuloElem){
        this.#termekObj=termekObj;
        this.#szuloElem=szuloElem;
        this.#sorokletrehozasa();
        console.log(this.#szuloElem)
        this.#torlesElem=this.#szuloElem.children("tr:last-child").children("td").children(".torol");
        console.log(this.#torlesElem);
        this.#torlesElem.on("click", ()=>{
            this.#trigger("torol")
        });
    }
    #trigger(esemenynev){
        const e= new CustomEvent(esemenynev, {detail:this.#termekObj.id});
        window.dispatchEvent(e);
    }

    #sorokletrehozasa(){
        let txt=`<tr>`;
        for(const key in this.#termekObj){
            txt+=`<td>${this.#termekObj[key]}</td>`;
        };
        txt += `<td><button class="torol">🗑️</button></td>`;
        txt += `</tr>`;
        this.#szuloElem.append(txt);
    }
}