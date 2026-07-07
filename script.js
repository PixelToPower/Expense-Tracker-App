document.getElementById("btn").addEventListener("click",(btn) =>{
    console.log(btn);
    console.log("pressed calculate");

    const dte = document.getElementById("dt").value;
    console.log(dte);


    const pos = document.getElementById("ps").value;
    pos.split(",");
    Number(pos);
    console.log(typeof dte[0]);
    console.log(pos);

    const qt = document.getElementById("qty").value;
    Number(qt);
    typeof Number;
    console.log(qt);

    const htn = document.getElementById("ht").value;
    console.log(htn);
})


