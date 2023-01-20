const order = {
    customer: { address: "via" }
};

//let person = order?.customer?.address?.city;

if (order?.customer?.address?.city == undefined) {
    console.log('City ');
}

if (order.cippa?.() == undefined) {
    console.log('City is required');
}else{
    console.log("Cippa")
}
