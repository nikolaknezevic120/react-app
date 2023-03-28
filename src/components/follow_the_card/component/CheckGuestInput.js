export default function checkGuestInput (){

        if( 
            (localStorage.getItem('userName') === '') ||
            (localStorage.getItem('guestName') === '') ||
            (localStorage.getItem('guestLastName') === '') ||
            (localStorage.getItem('guestDateOfBirth') === '') ||
            (localStorage.getItem('guestMail') === '') ||
            (localStorage.getItem('guestPhone') === '') ||
            (localStorage.getItem('guestPassword') === '') ||
            (localStorage.getItem('guestRePassword') === '') 
            ) {
                alert('Nisu uneseni svi podatci')
            } else if( (localStorage.getItem('guestPassword') !== localStorage.getItem('guestRePassword')) ){
                alert('Niste unijeli iste lozinke!')
            } else {
                window.location.href='.#/followTheCard'
            }
    
    
}