class NumProgram{
    constructor(){
        this.__namePlayer = 0;
        this.__nameRiddle = 0;
    }
    addPlayer(){
        ++this.__namePlayer;
        return this.__namePlayer
    }
    addRiddle(){
        ++this.__nameRiddle;
        return this.__nameRiddle
    }
}
const a = new NumProgram();
export default a
// const a = new NumProgram();
// console.log(a.addPlayer());
// console.log(a.addRiddle());
// console.log(a.__namePlayer); 