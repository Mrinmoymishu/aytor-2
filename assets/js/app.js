let crossBtn = document.querySelector('.cross-btn')
let searchBtn = document.querySelector('.search_btn')
let searchBox = document.querySelector('.search-box')



searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    // alert('shv');
    searchBox.classList.add('active_search')
})
 
searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    searchBox.classList.remove('active_search')
})



$(function(){
    //*jquary*//

    $('.bannerslider') .slick({
        arrows: false,
        dots: true,
        dotsClass: 'aytorDots container'
    })
})
   


  




//**  tool-tip */

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//**  tool-tip-end */

//*ARRIVAL*//

$('.parent-arrival').slick({
  dots: false,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});



//*BEST-SELLER*//

$('.parent-seller-1').slick({
  dots: false,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});



$('.parent-seller-2').slick({
  dots: false,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});
    //*-----TIME-----*
    $('.bannerslider-2').slick({
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 200,
    });
      
      