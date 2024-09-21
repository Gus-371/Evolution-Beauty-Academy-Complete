

//hamburger menu for phone
const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu-nav');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
}))



//drop down menu for services
const dropDownMenu = document.querySelector('.drop-down-menu');
const dropDownMenu2 = document.querySelector('.drop-down-menu2');
const dropDownArrow = document.querySelector('.fa-chevron-down');
const dropDownBtn = document.querySelector('.drop-down-btn');

dropDownBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
    dropDownMenu2.classList.toggle('active');
    dropDownArrow.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    dropDownMenu.classList.remove('active');
    dropDownMenu2.classList.remove('active');
    dropDownArrow.classList.remove('active');
}))





//gallery viewer modal


//get modal element
var modal = document.getElementById('modal-gallery');

//get open modal button
var openBtn1 = document.querySelector('.btn-open-gallery1');
var openBtn2 = document.querySelector('.btn-open-gallery2');
var openBtn3 = document.querySelector('.btn-open-gallery3');
var openBtn4 = document.querySelector('.btn-open-gallery4');
var openBtn5 = document.querySelector('.btn-open-gallery5');
var openBtn6 = document.querySelector('.btn-open-gallery6');
var openBtn7 = document.querySelector('.btn-open-gallery7');
var openBtn8 = document.querySelector('.btn-open-gallery8');
var openBtn9 = document.querySelector('.btn-open-gallery9');
var openBtn10 = document.querySelector('.btn-open-gallery10');
var openBtn11 = document.querySelector('.btn-open-gallery11');
var openBtn12 = document.querySelector('.btn-open-gallery12');
var openBtn13 = document.querySelector('.btn-open-gallery13');
var openBtn14 = document.querySelector('.btn-open-gallery14');
var openBtn15 = document.querySelector('.btn-open-gallery15');
var openBtn16 = document.querySelector('.btn-open-gallery16');
var openBtn17 = document.querySelector('.btn-open-gallery17');
var openBtn18 = document.querySelector('.btn-open-gallery18');
var openBtn19 = document.querySelector('.btn-open-gallery19');
var openBtn20 = document.querySelector('.btn-open-gallery20');
var openBtn21 = document.querySelector('.btn-open-gallery21');
var openBtn22 = document.querySelector('.btn-open-gallery22');
var openBtn23 = document.querySelector('.btn-open-gallery23');
var openBtn24 = document.querySelector('.btn-open-gallery24');
var openBtn25 = document.querySelector('.btn-open-gallery25');
var openBtn26 = document.querySelector('.btn-open-gallery26');
var openBtn27 = document.querySelector('.btn-open-gallery27');
var openBtn28 = document.querySelector('.btn-open-gallery28');


//get close button
var closeBtn = document.getElementById('close-btn-gallery');

//listen for open click
openBtn1.addEventListener('click', openModal);
openBtn2.addEventListener('click', openModal);
openBtn3.addEventListener('click', openModal);
openBtn4.addEventListener('click', openModal);
openBtn5.addEventListener('click', openModal);
openBtn6.addEventListener('click', openModal);
openBtn7.addEventListener('click', openModal);
openBtn8.addEventListener('click', openModal);
openBtn9.addEventListener('click', openModal);
openBtn10.addEventListener('click', openModal);
openBtn11.addEventListener('click', openModal);
openBtn12.addEventListener('click', openModal);
openBtn13.addEventListener('click', openModal);
openBtn14.addEventListener('click', openModal);
openBtn15.addEventListener('click', openModal);
openBtn16.addEventListener('click', openModal);
openBtn17.addEventListener('click', openModal);
openBtn18.addEventListener('click', openModal);
openBtn19.addEventListener('click', openModal);
openBtn20.addEventListener('click', openModal);
openBtn21.addEventListener('click', openModal);
openBtn22.addEventListener('click', openModal);
openBtn23.addEventListener('click', openModal);
openBtn24.addEventListener('click', openModal);
openBtn25.addEventListener('click', openModal);
openBtn26.addEventListener('click', openModal);
openBtn27.addEventListener('click', openModal);
openBtn28.addEventListener('click', openModal);


//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', outsideClick);


//function to open modal
function openModal(){
    modal.style.display = 'block';
}


//function to close modal
function closeModal(){
    modal.style.display = 'none';
}


//function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}





//gallery change image on click

var imageIndex = 1
var image = document.getElementById('image-replace')
openBtn1.addEventListener('click', () => {
    image.src="Images/1.png"
    imageIndex = 1
})

var image = document.getElementById('image-replace')
openBtn2.addEventListener('click', () => {
    image.src="Images/2.png"
    imageIndex = 2
})

var image = document.getElementById('image-replace')
openBtn3.addEventListener('click', () => {
    image.src="Images/3.png"
    imageIndex = 3
})

var image = document.getElementById('image-replace')
openBtn4.addEventListener('click', () => {
    image.src="Images/4.png"
    imageIndex = 4
})

var image = document.getElementById('image-replace')
openBtn5.addEventListener('click', () => {
    image.src="Images/5.png"
    imageIndex = 5
})

var image = document.getElementById('image-replace')
openBtn6.addEventListener('click', () => {
    image.src="Images/6.png"
    imageIndex = 6
})

var image = document.getElementById('image-replace')
openBtn7.addEventListener('click', () => {
    image.src="Images/7.png"
    imageIndex = 7
})

var image = document.getElementById('image-replace')
openBtn8.addEventListener('click', () => {
    image.src="Images/8.png"
    imageIndex = 8
})

var image = document.getElementById('image-replace')
openBtn9.addEventListener('click', () => {
    image.src="Images/9.png"
    imageIndex = 9
})

var image = document.getElementById('image-replace')
openBtn10.addEventListener('click', () => {
    image.src="Images/10.png"
    imageIndex = 10
})

var image = document.getElementById('image-replace')
openBtn11.addEventListener('click', () => {
    image.src="Images/11.png"
    imageIndex = 11
})

var image = document.getElementById('image-replace')
openBtn12.addEventListener('click', () => {
    image.src="Images/12.png"
    imageIndex = 12
    
})

var image = document.getElementById('image-replace')
openBtn13.addEventListener('click', () => {
    image.src="Images/13.png"
    imageIndex = 13
    
})

var image = document.getElementById('image-replace')
openBtn14.addEventListener('click', () => {
    image.src="Images/14.png"
    imageIndex = 14
    
})

var image = document.getElementById('image-replace')
openBtn15.addEventListener('click', () => {
    image.src="Images/15.png"
    imageIndex = 15
    
})

var image = document.getElementById('image-replace')
openBtn16.addEventListener('click', () => {
    image.src="Images/16.png"
    imageIndex = 16
    
})

var image = document.getElementById('image-replace')
openBtn17.addEventListener('click', () => {
    image.src="Images/17.png"
    imageIndex = 17
    
})

var image = document.getElementById('image-replace')
openBtn18.addEventListener('click', () => {
    image.src="Images/18.png"
    imageIndex = 18
    
})

var image = document.getElementById('image-replace')
openBtn19.addEventListener('click', () => {
    image.src="Images/19.png"
    imageIndex = 19
    
})

var image = document.getElementById('image-replace')
openBtn20.addEventListener('click', () => {
    image.src="Images/20.png"
    imageIndex = 20
    
})

var image = document.getElementById('image-replace')
openBtn21.addEventListener('click', () => {
    image.src="Images/21.png"
    imageIndex = 21
    
})

var image = document.getElementById('image-replace')
openBtn22.addEventListener('click', () => {
    image.src="Images/22.png"
    imageIndex = 22
    
})

var image = document.getElementById('image-replace')
openBtn23.addEventListener('click', () => {
    image.src="Images/23.png"
    imageIndex = 23
    
})

var image = document.getElementById('image-replace')
openBtn24.addEventListener('click', () => {
    image.src="Images/24.png"
    imageIndex = 24
    
})

var image = document.getElementById('image-replace')
openBtn25.addEventListener('click', () => {
    image.src="Images/25.png"
    imageIndex = 25
    
})

var image = document.getElementById('image-replace')
openBtn26.addEventListener('click', () => {
    image.src="Images/26.png"
    imageIndex = 26
    
})

var image = document.getElementById('image-replace')
openBtn27.addEventListener('click', () => {
    image.src="Images/27.png"
    imageIndex = 27
    
})

var image = document.getElementById('image-replace')
openBtn28.addEventListener('click', () => {
    image.src="Images/28.png"
    imageIndex = 28
    
})






//gallery arrow changer

var forwardsArrow = document.getElementById('next-image-arrow');
var backwardsArrow = document.getElementById('back-image-arrow');

forwardsArrow.addEventListener('click', () => {
    switch (imageIndex) {
        case (1):
            imageIndex=2
            image.src="Images/2.png"
            break;
        case (2):
            imageIndex=3
            image.src="Images/3.png"
            break;
        case (3):
            imageIndex=4
            image.src="Images/4.png"
            break;
        case (4):
            imageIndex=5
            image.src="Images/5.png"
            break;
        case (5):
            imageIndex=6
            image.src="Images/6.png"
            break;
        case (6):
            imageIndex=7
            image.src="Images/7.png"
            break;
        case (7):
            imageIndex=8
            image.src="Images/8.png"
            break;
        case (8):
            imageIndex=9
            image.src="Images/9.png"
            break;
        case (9):
            imageIndex=10
            image.src="Images/10.png"
            break;
        case (10):
            imageIndex=11
            image.src="Images/11.png"
            break;
        case (11):
            imageIndex=12
            image.src="Images/12.png"
            break;
        case (12):
            imageIndex=13
            image.src="Images/13.png"
            break;
        case (13):
            imageIndex=14
            image.src="Images/14.png"
            break;
        case (14):
            imageIndex=15
            image.src="Images/15.png"
            break; 
        case (15):
            imageIndex=16
            image.src="Images/16.png"
            break;
        case (16):
            imageIndex=17
            image.src="Images/17.png"
            break;
        case (17):
            imageIndex=18
            image.src="Images/18.png"
            break;
        case (18):
            imageIndex=19
            image.src="Images/19.png"
            break;
        case (19):
            imageIndex=20
            image.src="Images/20.png"
            break;
        case (20):
            imageIndex=21
            image.src="Images/21.png"
            break;
        case (21):
            imageIndex=22
            image.src="Images/22.png"
            break;
        case (22):
            imageIndex=23
            image.src="Images/23.png"
            break;
        case (23):
            imageIndex=24
            image.src="Images/24.png"
            break;
        case (24):
            imageIndex=25
            image.src="Images/25.png"
            break;
        case (25):
            imageIndex=26
            image.src="Images/26.png"
            break;
        case (26):
            imageIndex=27
            image.src="Images/27.png"
            break;
        case (27):
            imageIndex=28
            image.src="Images/28.png"
            break;
        case (28):
            imageIndex=1
            image.src="Images/1.png"
            break;
             
    }
})

backwardsArrow.addEventListener('click', () => {
    switch (imageIndex) {
        case (1):
            imageIndex=28
            image.src="Images/28.png"
            break;
        case (2):
            imageIndex=1
            image.src="Images/1.png"
            break;
        case (3):
            imageIndex=2
            image.src="Images/2.png"
            break;
        case (4):
            imageIndex=3
            image.src="Images/3.png"
            break;
        case (5):
            imageIndex=4
            image.src="Images/4.png"
            break;
        case (6):
            imageIndex=5
            image.src="Images/5.png"
            break;
        case (7):
            imageIndex=6
            image.src="Images/6.png"
            break;
        case (8):
            imageIndex=7
            image.src="Images/7.png"
            break;
        case (9):
            imageIndex=8
            image.src="Images/8.png"
            break;
        case (10):
            imageIndex=9
            image.src="Images/9.png"
            break;
        case (11):
            imageIndex=10
            image.src="Images/10.png"
            break;
        case (12):
            imageIndex=11
            image.src="Images/11.png"
            break;
        case (13):
            imageIndex=12
            image.src="Images/12.png"
            break;
        case (14):
            imageIndex=13
            image.src="Images/13.png"
            break;
        case (15):
            imageIndex=14
            image.src="Images/14.png"
            break;
        case (16):
            imageIndex=15
            image.src="Images/15.png"
            break;
        case (17):
            imageIndex=16
            image.src="Images/16.png"
            break;
        case (18):
            imageIndex=17
            image.src="Images/17.png"
            break;
        case (19):
            imageIndex=18
            image.src="Images/18.png"
            break;
        case (20):
            imageIndex=19
            image.src="Images/19.png"
            break;
        case (21):
            imageIndex=20
            image.src="Images/20.png"
            break;
        case (22):
            imageIndex=21
            image.src="Images/21.png"
            break;
        case (23):
            imageIndex=22
            image.src="Images/22.png"
            break;
        case (24):
            imageIndex=23
            image.src="Images/23.png"
            break;
        case (25):
            imageIndex=24
            image.src="Images/24.png"
            break;
        case (26):
            imageIndex=25
            image.src="Images/25.png"
            break;
        case (27):
            imageIndex=26
            image.src="Images/26.png"
            break;
        case (28):
            imageIndex=27
            image.src="Images/27.png"
            break;
    }
})







