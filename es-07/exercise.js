

function printName() {
    let helloName = "Hello John"
    function inner() {
        console.log(helloName);
    }
    inner()

}

let timeout;
function myFunction() {
    timeout = setTimeout(printName, 1000)
        ;
}

myFunction()


    ;