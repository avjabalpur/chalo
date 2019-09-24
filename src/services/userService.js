import {db} from '../config/firebaseconfig'

export const newRegiser =  (user) => {
	console.log('1111111111111111111111111111111111111111111111111111111111111', user, db);
    /*db.ref('/users').set({
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
      console.log('&&&&&&&&&&&&&&&&&&success', data);
        console.log('data ' , data)
    }).catch((error)=>{
        console.log('&&&&&&&&&&&&&&&&&&error', error);
        console.log('error ' , error)
    })*/

    db.ref('/users').set({
    	name: 'amit',
    	check:'amit'
    }).then((data)=>{
      console.log('&&&&&&&&&&&&&&&&&&success', data);
        console.log('data ' , data)
    }).catch((error)=>{
        console.log('&&&&&&&&&&&&&&&&&&error', error);
        console.log('error ' , error)
    })
}