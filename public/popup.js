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
    let li = document.createElement('li');
    let title = document.createElement('option');

    li.setAttribute('data-id', doc.id);
    title.textContent = doc.data().title;

    li.appendChild(title);

    wishboardOptions.appendChild(li);
}

db.collection('wishboards').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        passWishboards(doc);
    });
})

//<select id="wishboard-options" name="list" style="margin-left: 10px;" onchange="wishboardChoices(wishboards)">
{/* <option value="default">one</option>
</select>   */}