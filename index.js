var password = document.getElementById('password');
var email = document.getElementById('email');
var bname = document.querySelector('#btnName');
var uid = document.getElementById('autoUID');  // unique id

var addBtn = document.querySelector('.btn-primary')
var btnUpdate = document.querySelector('.btn-info')
var btnDelete = document.querySelector('.btn-danger')


addBtn.addEventListener('click',function(e){
    var obj={
        name: bname.value,
        email: email.value,
        password: password.value

    }
    console.log(obj)
    var autoUID = firebase.database().ref().push().key;  // auto random key
    var myUID = uid.value;

    firebase.database().ref('learn').child(autoUID)
    .set(obj).then(()=>{
        console.log('saved')
    }).catch(err=>{
        console.log(err)
    })
})

// --------------

btnDelete.addEventListener('click',function(e){

    firebase.database().ref('learn').child(0) // remove this child
    .remove().then(()=>{
        console.log('removed')
    }).catch(err=>{
        console.log(err)
    })
})

// ---------------

btnUpdate.addEventListener('click',function(e){
    var obj={
        name: bname.value,
        email: email.value,
        // password: password.value
    }
    var myUID = uid.value;

    firebase.database().ref('learn').child(myUID)   //only password update
    .update(obj).then(()=>{
        console.log('updated')
    }).catch(err=>{
        console.log(err)
    })
});

var rootRef = firebase.database().ref('learn')

//_________________________  GET THE VALUE ______________________

firebase.database().ref('Blogs').on('value',(snapshot)=>{
    console.log(snapshot.val()) 
})


// --------------------every time trigger when the data base changed...---------

rootRef.on('child_removed',function(snapshot){
    console.log('child added')
    console.log(snapshot.val())
})

rootRef.on('child_changed',function(snapshot){
    console.log('child changed')
})