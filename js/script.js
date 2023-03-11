// select
const element = document.querySelector('.choices2');
const choices = new Choices(element, {
    searchEnabled: false,
    sorter: function (a, b) {
        return b.label.length = a.label.length;
    },
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
        containerOuter: 'choices select-choices',
    },

});

const multiDefault = () => {
    const elements = document.querySelectorAll('.selest-castom');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            sorter: function (a, b) {
                return b.label.length = a.label.length;
            },
            searchEnabled: false,
            itemSelectText: '',
            classNames: {
                containerOuter: 'choices select-choices',
            },

        });
    });
   

}

multiDefault();



// swiper
const swiper = new Swiper('.swiper1', {
    allowTouchMove: false,
    loop: true,
    speed: 600,
    spaceBetween: 24,
    
    

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
    

});



var swiper2 = new Swiper('.swiper2', {
    allowTouchMove: false,
    speed: 600,
    spaceBetween: 24,
    centeredSlides: false,
    slidesPerView: 4,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    
    },


    observer: true,
    observerParents: true,

    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        // when window width is <= 480px
        590: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is <= 640px
        920: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }



});




var swiper3 = new Swiper('.swiper3', {

    loop: true,
    

    pagination: {
        el: '.swiper-box-pagin ',
        clickable: true
    },
    

});

var swiper2 = new Swiper('.swiper4', {

    loop: true,
    speed: 600,
    spaceBetween: 24,
    centeredSlides: false,
    slidesPerView: 'auto',
  
    

    navigation: {
        nextEl: '.content-img-next',
        prevEl: '.content-img-prev',
    },

   


});

var swiper2 = new Swiper('.swiper5', {
    allowTouchMove: false,
    speed: 600,
    spaceBetween: 24,
    centeredSlides: false,
    slidesPerView: 'auto',

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    navigation: {
        nextEl: '.product-day-next',
        prevEl: '.product-day-prev',

    },


    observer: true,
    observerParents: true,


});


// sale


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.top-list-button').forEach(function (e) {
        e.addEventListener('click', function (e) {
            const tab = e.currentTarget.dataset.path
            document.querySelectorAll('.top-list-button').forEach(elem => {
                elem.classList.remove('top-list-button__active')
            })
            this.classList.add('top-list-button__active')
            document.querySelectorAll('.tab-content').forEach(function (e) {
                e.classList.remove('tab-content--active')
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active')
            })
        })
    })
})



// time


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 13 * 60 * 60 * 1000);
initializeClock('clock-time', deadline);


// выбор цвета
let colorItem = document.querySelectorAll('.discrip-color-item');

for (let i = 0; i < colorItem.length; i++) {
    colorItem[i].addEventListener("click", function () {
        for (let j = 0; j < colorItem.length; j++) {
            if (colorItem[j].classList.contains('active')) {
                colorItem[j].classList.remove('active');
            }
        };
        colorItem[i].classList.add('active');
    });
}

// выбор размера
let sizeItem = document.querySelectorAll('.size-item');

for (let i = 0; i < sizeItem.length; i++) {
    sizeItem[i].addEventListener("click", function () {
        for (let j = 0; j < sizeItem.length; j++) {
            if (sizeItem[j].classList.contains('activ')) {
                sizeItem[j].classList.remove('activ');
            }
        };
        sizeItem[i].classList.add('activ');
    });
}
