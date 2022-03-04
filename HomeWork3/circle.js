
function circleArea(r) {

    const result = Math.PI * (r * r);

    //return result;
    console.log(result);
}


//Daire çevre  C = d x π



function circleCircumference(d) {

    const result = Math.PI * d;
    // return result;
    console.log(result);


}

//console.log(circleCircumference(2));
//console.log(circleArea(4));



module.exports = {
    circleArea,
    circleCircumference
}
