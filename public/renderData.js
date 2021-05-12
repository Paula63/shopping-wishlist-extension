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

// function start() {

//     const item = document.querySelector('#item-name');
//     const itemURL = document.querySelector('#host');
//     const radio = document.querySelector('#radio-choice');
//     const submit = document.querySelector('#addBtn');

//     function addNewItem(){
//         db.collection("items").add(
//             {
//                 displayName: item,
//                 location: itemURL,
//                 reduction: radio
//             }
//         )
//         .then(function (docRef) {
//             console.log("Item added with ID: ", docRef.id);
//         })
//         .catch(function(error){
//             console.error("Error occured", error)
//         })
//     }

//     submit.onclick = addNewItem();

// }

// window.onload=start;

