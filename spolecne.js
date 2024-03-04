// const menuTlacitkoElm = document.querySelector('#menu-tlacitko')
// const menuPolozkyElement = document.querySelector('#menu-polozky')
// const menuIkonaElement = menuTlacitkoElm.querySelector('i')

// const menuTlacitkoHandler =() =>{
//     const shown = menuPolozkyElement.classList.toggle('show')
//     menuIkonaElement.classList.toggle('fa-bars',!shown)
//     menuIkonaElement.classList.toggle('fa-xmark',shown)
// }
// menuTlacitkoElm.addEventListener('click', menuTlacitkoHandler)

// const menuTlacitkoHandler =() =>{
//     const shown = menuPolozkyElement.classList.toggle('show')
//     if(shown){
//         menuIkonaElement.classList.remove('fa-bars')
//         menuIkonaElement.classList.add('fa-xmark')
//     } else{
//         menuIkonaElement.classList.add('fa-bars')
//         menuIkonaElement.classList.remove('fa-xmark')
//     }
//treti moznost je napsat pres innerHTML ty ikony

const menuBtn = document.querySelector('#menu-tlacitko');
const menu = document.querySelector('#menu-polozky');
if (menuBtn && menu) {
    const menuIcon = menuBtn.querySelector('i');
    menuBtn.addEventListener('click', () => {
        const shown = menu.classList.toggle('show');
        if (!menuIcon) {
            return;
        }
        menuIcon.classList.toggle('fa-xmark', shown);
        menuIcon.classList.toggle('fa-bars', !shown);
    })
}

