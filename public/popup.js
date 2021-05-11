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
    let dropdown = document.createElement('div')
    let li = document.createElement('select');
    let title = document.createElement('option');

    li.setAttribute('data-id', doc.id);
    title.textContent = doc.data().title;

    li.appendChild(title);

    dropdown.appendChild(li);

    wishboardOptions.appendChild(dropdown);
}

db.collection('wishboards').get().then((snapshot) => {
    // snapshot.docs.forEach(doc => {
    //     passWishboards(doc);
    // });
    snapshot.docs.map(doc => {
        passWishboards(doc);
    })
})

$(document).ready(function () {
    chrome.tabs.getSelected(null, function (tab) {
        var link = document.createElement("a");
        link.href = tab.url;
        $("#host").html("Save item to your wish board: " + tab.url);
    }) 
});


// web scraping
function newEl(type, attrs={}) {
    const el = document.createElement(type);
    for (let attr in attrs) {
        const value = attrs[attr];
        if(attr == 'innerHTML') el.innerHTML = value;
        else el.setAttribute(attr, value);
    }
    return el;
}

async function loadItem() {

    const items = [
        {name: items.name, img: 'https://', price: items.price}
    ]
    
    const ctr = document.querySelector('#item-image');
    const card = newEl('img', {src: items.img});
    ctr.appendChild(card);
    
    const cont = document.querySelector('#item-details');
    const title = newEl('h4', {innerHTML: items.name});
    const prices = newEl('div', {innerHTML: items.price});
    cont.appendChild(title);
    cont.appendChild(prices);

}






//save new item
// 4: 02
function saveItem(){

}