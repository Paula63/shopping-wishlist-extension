// getting wish boards collections
db.collection('wishboards').get().then((snapshot) => {
    console.log("wishboard here", snapshot.docs);
})

db.collection('wishboards').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log("doc", doc.data());
    });
})


// getting wishboards from firebase
const wishboardOptions = document.querySelector('#wishboard-options');

//creating element and rendering wishboards in dropdown list
function passWishboards(doc){
    let title = document.createElement('option');

    title.setAttribute = doc.id;
    title.textContent = doc.data().title.charAt(0) + doc.data().title.slice(1);

    wishboardOptions.appendChild(title);
}

db.collection('wishboards').get().then((snapshot) => {
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




// getting items collection
db.collection('items').get().then((snap) => {
    console.log("items", snap.docs);
})

// getting items collection
db.collection('items').get().then((snap) => {
    snap.docs.forEach(doc => {
        console.log("doc", doc.data());
    });
})


// saving item to firestore
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

