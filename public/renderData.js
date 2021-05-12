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