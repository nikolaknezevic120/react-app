export default function checkLogIn(){
    if (localStorage.getItem('userName') === ''){
        alert('Unesite korisničko ime')
    } else if (localStorage.getItem('userName') !== 'nikola65'){
        alert('Unijelio ste krivo korisničko ime')
    } else {
        window.location.href='.#/followTheCard';
    }
}