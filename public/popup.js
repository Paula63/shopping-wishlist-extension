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

    dropdown.appendChild(li)

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
        $("#host").html("Click save to add the following item to your wish board: " + tab.url);
    })
});

// $(document).ready(function() {
//     $("#wishboard-options").click(function() {
//         var 
//     })
// })