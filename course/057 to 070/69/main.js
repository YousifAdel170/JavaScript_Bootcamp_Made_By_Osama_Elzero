function parent(){
    let a = 10;
    function child(){
        // let a = 20;      // if this line uncomment o/p: 20 else o/p: 10
        console.log(`From Child: ${a}`)
        function grand(){
            console.log(`From Grand: ${a}`)
        }
        grand();
    }
    child();
}

parent();