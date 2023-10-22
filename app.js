var mobiles = {
    Samsung:{

        glaxyfold5: {
            name: 'Glaxy Fold 5',
            price: "66,000",
            image: "images/fold5.jpg",
            colors: ["red", "Blue", "Green"]

        },
        samsungs23: {
            name: "Glaxy S23",
            price: "100,000",
            image: "images/s23.jpg",
            colors: ["red", "Blue", "Green"]

        },
        samsungglaxy: {
            name: "Samsung Glaxy S21",
            price: "90,000",
            image: "images/s21.jpg",
            colors: ["red", "Blue", "Green"]

        },

    },
    Oppo: {

        reno6pro: {
            name: "Oppo Reno 6 Pro",
            price: "70,000",
            image: "images/reno6.jpg",
            colors: ["red", "Blue", "Green"]

        },
        A54: {
            name: "Oppo A54",
            price: "166,666",
            image: "images/a54.jpg",
            colors: ["red", "Blue", "Green"]

        },
        a76: {
            name: "Oppo A76",
            price: "55,000",
            image: "images/a76.jpg",
            colors: ["red", "Blue", "Green"]

        },

    },
    realme: {

        realme9proplus: {
            name: "Realme 9 pro plus",
            price: "555,55",
            image: "images/realme9.jpg",
            colors: ["red", "Blue", "Green"]


        },
        c33: {
            name: "Realme C33",
            price: "22,222",
            image: "images/c33.jpg",
            colors: ["red", "Blue", "Green"]

        },
        realme7proplus: {
            name: "Realme 7 Pro Plus",
            price: "56,000",
            image: "images/realme7.jpg",
            colors: ["red", "Blue", "Green"]

        },

    },
}
var selectlist = document.getElementById('select1');
var selectlist1 = document.getElementById('select2')
var card = document.getElementById('card')
selectlist.innerHTML =`<option value="">Select Company</option>`
selectlist1.innerHTML =`<option value="">Select Model</option>`

for(var key in mobiles){
    selectlist.innerHTML += `<option value="${key}">${key.toUpperCase()}</option>`
    for(var key1 in mobiles[key]){
var mobData = mobiles[key][key1]
        card.innerHTML += `<div class="card" style="width: 18rem;">
            <img class="mob" src="${mobData.image}" alt="...">
            <div class="card-body">
            <h4>${mobData.name}</h4>
            <h5 style="color:rgb(165, 29, 42)">Rs ${mobData.price} /-</h5>
            </div>`
}
}

function selectItem(){
    selectlist1.innerHTML = ""
    selectlist1.innerHTML =`<option value="">Select Mobile Model</option>`
    for(var key in mobiles[selectlist.value]){
        selectlist1.innerHTML += `<option value="${key}">${key.toUpperCase()}</option>`
    }
}
function renderData(){
    card.innerHTML = ""
    if(!selectlist.value){
        for(var key in mobiles){
            for (var key2 in mobiles[key]){
                console.log(key2);
                card.innerHTML += `<div class="card" style="width: 18rem;">
                <img class="mob" src="${mobiles[key][key2].image}" alt="...">
                <div class="card-body">
                <h4>${mobiles[key][key2].name}</h4>
                <h5 style="color:rgb(165, 29, 42)">Rs ${mobiles[key][key2].price} /-</h5>
                </div>`
            }
        }
    }
    if(!selectlist1.value){
        for(var key2 in mobiles[selectlist.value]){
           console.log(key2);
            card.innerHTML += `<div class="card" style="width: 18rem;">
            <img class="mob" src="${mobiles[selectlist.value][key2].image}" alt="...">
            <div class="card-body">
            <h4>${mobiles[selectlist.value][key2].name}</h4>
            <h5 style="color:rgb(165, 29, 42)">Rs ${mobiles[selectlist.value][key2].price} /-</h5>
            </div>`
        }
    }
    if(selectlist.value && selectlist1.value){
        card.innerHTML = `<div class="card" style="width: 18rem;">
            <img class="mob" src="${mobiles[selectlist.value][selectlist1.value].image}" alt="...">
            <div class="card-body">
            <h4>${mobiles[selectlist.value][selectlist1.value].name}</h4>
            <h5 style="color:rgb(165, 29, 42)">Rs ${mobiles[selectlist.value][selectlist1.value].price} /-</h5>
            </div>`
    }
}