
//hosting issue explained

class Twillio {
    //mock send and mail
    send(){
        console.log('notification send')
        return true
    }
    mail(userName,password){
        console.log('mail send')
        if(userName=='xxx' &&  password=='yyyy'){
            //send email
            return true
        }
        
    }
}


function sendNotificationAndEmail(){
    if(userName){
        new Twillio().send()
    }

    var userName='xxx';
    var password='yyyy'

    new Twillio().mail(userName,password)
}


sendNotificationAndEmail()