let receivesAFunction=(callback)=>{callback()}

function returnsANamedFunction(){
    function greet(name){
    }
    return greet;
}

function returnsAnAnonymousFunction(){
    return ()=>{
        console.log("Hello!!");
    }
}
