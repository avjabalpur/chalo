import {db} from '../config/firebaseconfig'
import _ from 'lodash'

const ref = db.ref().child('users');

export const login =  (request, success, fail) => {

    ref.once('value').then(snapshot => {
        let users = [];
        snapshot.forEach((item) => {
          users.push(item.val());
        });
        if (users.length > 0) {
          let loggedUser =  _.find(users, function(o) { 
                return (o.email == request.username && o.password == request.password); 
            })
            if (loggedUser) {
                success(loggedUser);
            }
            else {
               fail('Invalid username and password');  
            }
        }
       
    }).catch((error) => {
        fail(error);
    })
}


export const newRegiser =  (user, success, fail) => {
    ref.push({
        firstName: '',
	    lastName : '',
	    dob : '',
	    address : '',
	    email : user.email,
	    isEmailVerified : false,
	    phone:user.phone,
	    isPhoneVerified : false,
	    password : user.password
    }).then((data)=>{
       success(data);
    }).catch((error)=>{
        fail(error);
    })
}


export const updateUser =  (user, success, fail) => {
    var userRef = db.ref().child('users')
    ref.push({
        firstName: '',
        lastName : '',
        dob : '',
        address : '',
        email : user.email,
        isEmailVerified : false,
        phone:user.phone,
        isPhoneVerified : false,
        password : user.password
    }).then((data)=>{
       success(data);
    }).catch((error)=>{
        fail(error);
    })
}