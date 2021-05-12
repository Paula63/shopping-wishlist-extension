// function fetchData(){
//     db.collection('wishboards').get().then((snapshot) => {
//         snapshot.docs.forEach(doc => {
//             console.log("doc", doc.data());
//         });
//     })
// }

db.collection('wishboards').get().then((snapshot) => {
    // snapshot.docs.forEach(doc => {
    //     renderWishboards(doc);
    // })
    console.log("wishboard here", snapshot.docs);
})

db.collection('wishboards').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log("doc", doc.data());
    });
})

const wishboardOptions = document.querySelector('#wishboard-options');

//creating element and rendering wishboards
function passWishboards(doc){
    let title = document.createElement('option');

    title.setAttribute = doc.id;
    title.textContent = doc.data().title.charAt(0) + doc.data().title.slice(1);

    wishboardOptions.appendChild(title);
}

db.collection('wishboards').get().then((snapshot) => {
    // snapshot.docs.forEach(doc => {
    //     passWishboards(doc);
    // });
    snapshot.docs.map(doc => {
        passWishboards(doc);
    })
})

// getting current window address
$(document).ready(function () {
    chrome.tabs.getSelected(null, function (tab) {
        var link = document.createElement("input");
        link.href = tab.url;
        $("#host").html(link.href);
    }) 
});


// web scraping
// function newEl(type, attrs={}) {
//     const el = document.createElement(type);
//     for (let attr in attrs) {
//         const value = attrs[attr];
//         if(attr == 'innerHTML') el.innerHTML = value;
//         else el.setAttribute(attr, value);
//     }
//     return el;
// }

// async function loadItem() {

//     const items = [
//         {name: items.name, img: 'https://', price: items.price}
//     ]
    
//     const ctr = document.querySelector('#item-image');
//     const card = newEl('img', {src: items.img});
//     ctr.appendChild(card);
    
//     const cont = document.querySelector('#item-details');
//     const title = newEl('h4', {innerHTML: items.name});
//     const prices = newEl('div', {innerHTML: items.price});
//     cont.appendChild(title);
//     cont.appendChild(prices);

// }

// saving data to the items collection
db.collection('items').get().then((snap) => {
    // snapshot.docs.forEach(doc => {
    //     renderWishboards(doc);
    // })
    console.log("items", snap.docs);
})

db.collection('items').get().then((snap) => {
    snap.docs.forEach(doc => {
        console.log("doc", doc.data());
    });
})

// const itemName = document.getElementById('itemName');
// const itemURL = document.getElementById('host');
// const radio = document.getElementById('radio-choice');
// const submit = document.getElementById('submit');

// submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     db.collection('items').add({
//         // displayName: itemName.value,
//         location: itemURL.value,
//         // reduction: radio.value
//     })
//     .then(() => {console.log("data saved")})
//     .catch(error => {console.log(error)})
//     // db.collection("items").add({
//     //     displayName: submitDetails.itemName.value,
//     //     location: submitDetails.host.value,
//     //     reduction: submitDetails.reduction.value
//     // });
// })

// function start() {

//     const item = document.querySelector('#itemName');
//     const itemURL = document.querySelector('#host');
//     const radio = document.querySelector('#radio-choice');
//     // const submit = document.querySelector('#submit');

//     function addNewItem(){
//         db.collection("items").add(
//             {
//                 displayName: item
                
//             }
            
//         )
//         // console.log(item.value)
//         .then(function (docRef) {
//             console.log("Item added with ID: ", docRef.id);
//         })
//         .catch(function(error){
//             console.error("Error occured", error)
//         })
//     }

//     document.querySelector('#addBtn').onclick=function(){
//         addNewItem();
//     }

// }

// window.onload=start();

function start() {

    const form = document.querySelector('#add-item');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        db.collection('items').add({
            displayName: form.itemName.value,
            reduction: form.twentyPercent.value,
            wishboard: form.wishboardOptions.value,
            pathURL: form.host.value
        });
    })
      
}

window.onload=start;

