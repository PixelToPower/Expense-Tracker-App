document.getElementById("btn").addEventListener("click", (btn) => {
    console.log(btn);
    console.log("pressed calculate");

    let mindte = new Date(document.getElementById("dt").value);
    console.log(typeof mindte);
    if (isNaN(mindte.getTime())) {
        alert("Please Enter Date")
    }

    let maxdte = new Date(document.getElementById("dt").value);
    console.log(typeof maxdte);
    if (isNaN(mindte.getTime())) {
        alert("Please Enter Date")
    }

    let pos = document.getElementById("ps").value;
    if (pos === "") {
        alert("Please Enter Prices of a Stock")
    }
    pos = pos.split(",");
    pos = pos.map(Number)
    console.log(typeof pos);

    let qt = document.getElementById("qty").value;
    if (qt === "") {
        alert("Please Enter Quantity")
    }
    qt = Number(qt);
    console.log(typeof qt);

    let htn = document.getElementById("ht").value;
    if (htn === "") {
        alert("Please Enter Holding Time of Stock")
    }
    htn = Number(htn);
    console.log(typeof htn);

    if (pos.length < htn) {
        alert("Holding Days can't be more then the no. of Prices are filled !")
        return
    }

    let mind = 0;
    let minp = pos[0];
    for (let i = 0; i < pos.length; i++) {
        if (pos[i] < minp) {
            minp = pos[i]
            mind = i
        }
    }
    mindte.getDate();
    mindte.setDate(mindte.getDate() + mind);

    document.getElementById("minn").textContent = minp;
    document.getElementById("minnd").textContent = mindte.toLocaleDateString();


    let maxd = 0;
    let maxp = pos[0];
    for (let g = 0; g < pos.length; g++) {
        if (pos[g] > maxp) {
            maxp = pos[g];
            maxd = g;
        }
    }
    
    maxdte.getDate();
    maxdte.setDate(maxdte.getDate() + maxd);
    document.getElementById("maxx").textContent = maxp;
    document.getElementById("maxxd").textContent = maxdte.toLocaleDateString();

    for (let i = 1; i < pos.length; i++) {
        let profit = (pos[i] - pos[0]) * qt;
        let daynum = i + 1;
        if (profit < 0) {
            profit = 0;
        }
        document.getElementById("d" + daynum).textContent = profit;
    }

    let netpl = (pos[htn - 1] - pos[0]) * qt;
    document.getElementById("np").textContent = netpl;


    for( let i = 2  ; i <= 15 ; i++){

        let row = document.getElementById("row" + i);
        if( i-1 < pos.length){
            row.style.display = "block";
        }
        else{
            row.style.display = "none";
        }
    }

})






