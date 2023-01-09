const cart =document.querySelector('.cart');
const navMenu= document.querySelector('.nav-links');
const openMenu=document.querySelector('.phone-menu');
const closeMenu=document.querySelector('.close-phone-menu');
const overlay=document.querySelector('.black-cover');

const body=document.body;




const cartIcon=document.querySelector('.cart')
const cartBox=document.querySelector('.cart-box-information')
cartIcon.addEventListener('click' , (e)=>{
  cartBox.style.display='block'
  

})

// body.addEventListener('click' , ()=>{
//   cartBox.style.display='none'
// })



const modalLightbox=document.querySelector(".light-box")
const bigImage=document.querySelector(".big-image")
const closeLightbox=document.querySelector('.close-light-box')
const lightboxNext=document.querySelector('.icon-next')
const lightboxPrev=document.querySelector('.icon-prev')
const lightBoxImages=document.querySelectorAll('.light-box-slide img')
const lightBoxWrap=document.querySelector('.light-box-image-wrap')


const thumbnailImg=document.querySelectorAll('.thumbnails img')
const imageDesktop=document.querySelector('.big-image img')
const lightboxThumbImg=document.querySelectorAll('.lightbox-thumb-img img')


const mobilePrev=document.querySelector('.mobile-prev')
const mobileNext=document.querySelector('.mobile-next')
const mobileSlideContainer =document.querySelectorAll('.mobile-slide-container')
const mobileSlide=document.querySelector('.mobile-slide')
const closeCart=document.querySelector('.close-cart')

closeCart.addEventListener('click' , ()=>{
  cartBox.style.display='none'
})



const plusButton=document.querySelector('.plus')
const minusButton=document.querySelector('.minus')
const numberOfProducts=document.querySelector('.number-of-product')
const addToCart=document.querySelector('.add-to-cart-button')
const cartBoxContainer=document.querySelector('.cart-container')


const emptyCart=document.querySelector('.empty-cart')
const checkOutButton=document.querySelector('.checkout-cart')
const numberProductsIndicator=document.querySelector('.product-number')

const checkoutCard=document.querySelector('.checkout-cart')


let orderedProducts=0 
plusButton.addEventListener('click' , ()=>{
  orderedProducts++
  numberOfProducts.textContent=orderedProducts
})
minusButton.addEventListener('click' , ()=>{
  if(orderedProducts === 0){
    return
  }
  else{
    orderedProducts--
  }
  numberOfProducts.textContent=orderedProducts
})

function hideCart(){
  cartBox.style.display='none'
  
}
let cartItems;
let numberOfOrders=0;
const productArray=[];

addToCart.addEventListener('click' , ()=>{
  cartItems = document.createElement('div')
  let price = 125


  if(orderedProducts===0){
    return
  }
  emptyCart.classList.remove('flex')
  checkOutButton.classList.remove('none')

  emptyCart.classList.add('none')
  checkOutButton.classList.add('block')

  cartBox.style.display='block'
  cartItems.innerHTML= 
    `
    <div class="items-information">
      <div class="item-image">
        <img src="/images/image-product-1-thumbnail.jpg" alt="">
      </div>
      <div class="item-info-box">
        <p class="item-title">Fall Limited Edition Sneakers</p>
          <p class="item-price">${price}$
            <span class="item-count">x ${orderedProducts}</span>
            <span class="total-sum"> $${price * orderedProducts}</span>
        </p>
      </div>
      </div>
      <div class="trash-icon">
        <img src="/images/icon-delete.svg" alt="">
      </div>
  
    `
  cartItems.classList.add('cart-items')
  orderedProducts=0;
  numberOfProducts.textContent=orderedProducts
  cartBoxContainer.appendChild(cartItems)
  productArray.push(cartItems)

  numberProductsIndicator.textContent=cartBoxContainer.childElementCount-1
  
   
  
  productArray.forEach(item=>{
    item.lastElementChild.addEventListener('click' , ()=>{
      
      item.remove();
      numberProductsIndicator.textContent=cartBoxContainer.childElementCount-1;

      if(cartBoxContainer.childElementCount-1 === 0){
        emptyCart.classList.remove('none')
        checkOutButton.classList.remove('block')
        emptyCart.classList.add('flex')
        checkOutButton.classList.add('none')

      }

     
    })
    
    console.log(cartBoxContainer.childElementCount-1)

  })


 


});








checkoutCard.addEventListener('click', ()=>{
  let totalMoney=0;
  const totalSum=document.querySelectorAll('.total-sum')
  

  totalSum.forEach(item =>{
    let priceArray = item.innerText.slice(1);
    let numberItem= parseInt(priceArray)
    totalMoney=totalMoney + numberItem
    
  })

  


  alert("You ordered " + totalMoney + " in total value "+" Thank You for Your Purchase!!")

  for(let i = 0 ; i< productArray.length; i++){
    productArray[i].remove();
    numberProductsIndicator.textContent=cartBoxContainer.childElementCount-1;

  }
  emptyCart.classList.remove('none')
  checkOutButton.classList.remove('block')
  emptyCart.classList.add('flex')
  checkOutButton.classList.add('none')
  cartBox.style.display='block'




  
})














  

















  



































































// MOBILE SLIDER (VISIBLE ONLY ON MOBILE VIEW)
let moveIndex=0;
mobileNext.addEventListener('click' , ()=>{
  moveIndex++;
  mobileSlide.style.transform= `translateX(${-moveIndex* 25}%)`;
  if(moveIndex>mobileSlideContainer.length-1){
    moveIndex=0;
    mobileSlide.style.transform= `translateX(${-moveIndex* 25}%)`;
  }
})
mobilePrev.addEventListener('click' , ()=>{
  moveIndex--;
  mobileSlide.style.transform= `translateX(${-moveIndex* 25}%)`;
  if(moveIndex < 0 ){
    moveIndex=mobileSlideContainer.length-1;
    mobileSlide.style.transform= `translateX(${-moveIndex* 25}%)`;
  }
})


// THUMBNAIL IMAGES ON DESKTOP VIEW
thumbnailImg.forEach((img,index) => {
  let highResImg=lightBoxImages[index].src;
  img.addEventListener('click' , ()=>{
    thumbnailImg.forEach(img =>{
      img.parentElement.classList.remove('active-thumbnail')
      img.classList.remove('active-thumbnail')
    })
    imageDesktop.src=highResImg;
    img.parentElement.classList.add('active-thumbnail')
    img.classList.add('active-thumbnail')
  })
});


// MODAL LIGHTBOX ON DESKTOP VIEW
let windowSize= window.innerWidth
if (windowSize < 771) {
  bigImage.removeEventListener("click" , window);

 
  
  
  
  
}

// CLIK LISTENER FOR MODAL LIGHTBOX
let index=0;
bigImage.addEventListener('click' , ()=>{ 
    //LIGHTBOX OPEN
    modalLightbox.style.display='block';
    overlay.style.display='block';
  
    // RESET THE LIGHTBOX TO OPEN AGAIN AFTER CLOSE
    lightBoxWrap.style.transform= `translateX(0px)`;
    lightboxPrev.style.display='none'
    lightboxNext.style.display='flex'

    //THUMBNAIL IMAGES LOGIC ACCORDING TO THE INDEX OF SLIDE
    let count= index
    for(let position = 0; position < lightboxThumbImg.length ; position++){
      lightboxThumbImg[position].parentElement.classList.remove('active-thumbnail')
      lightboxThumbImg[position].classList.remove('active-thumbnail')
    }

    // APPLY CLASSES ACCORDING TO THE COUNT INDEX 
    // MAKE THEM LOOK AS INDICATORS ON ACTIVE SLIDE 
    lightboxThumbImg[count].parentElement.classList.add('active-thumbnail')
    lightboxThumbImg[count].classList.add('active-thumbnail')
})     
  

// NEXT ARROW/IMAGE CLICK EVENT 
lightboxNext.addEventListener('click' ,()=>{
  lightboxPrev.style.display='flex'  // SHOW NEXT ICON 
  index++  // INCREMENT INDEX TO SLIDE ON NEXT 
  let count= index  // TRACK THE INDEX BUT ON THE THUMBNAIL IMAGES
  
  //THUMNAIL LOGIC ACCORDING TO THE ACTIVE SLIDE 
  for(let position = 0; position < lightboxThumbImg.length ; position++){
    lightboxThumbImg[position].parentElement.classList.remove('active-thumbnail')
    lightboxThumbImg[position].classList.remove('active-thumbnail')
  }
  lightboxThumbImg[count].parentElement.classList.add('active-thumbnail')
  lightboxThumbImg[count].classList.add('active-thumbnail')

  // SLIDE THE IMAGES ACCORDING TO THE INDEX 
  lightBoxWrap.style.transform= `translateX(${-index * 500}px)`;

  // CHECK FOR THE LAST IMAGE ON THE SLIDER
  if(index === lightBoxImages.length-1){
    // REMOVE ICON IF LAST 
    lightboxNext.style.display='none' 
  }  
})    
  

// PREVIOUS ARROW/IMAGE CLICK EVENT 
lightboxPrev.addEventListener('click' ,()=>{
  lightboxNext.style.display='flex'
  index--  // DECREMENT INDEX TO SLIDE ON NEXT 
  lightBoxWrap.style.transform= `translateX(${-index * 500}px)`;
  
  let count= index
  for(let position = 0; position < lightboxThumbImg.length ; position++){
    lightboxThumbImg[position].parentElement.classList.remove('active-thumbnail')
    lightboxThumbImg[position].classList.remove('active-thumbnail')
  }
  lightboxThumbImg[count].parentElement.classList.add('active-thumbnail')
  lightboxThumbImg[count].classList.add('active-thumbnail')
  // CHECK IF ON FIRST IMAGE ON THE SLIDER
  if(index === 0){
    lightboxPrev.style.display='none'
  }
})

// CLOSE MODAL CLICK EVENT 
closeLightbox.addEventListener('click', ()=>{
  // RESET THE MODAL VALUES IF CLOSED WITH NO PAGE RELOAD 
  modalLightbox.style.display='none';
  overlay.style.display='none';
  index=0;
  count=0;
  lightBoxWrap.style.transform= `translateX(${-index * 500}px)`;
})


// MOBILE MENU OPEN/CLOSE
let mobileState=navMenu.getAttribute('data-open');
openMenu.addEventListener('click' ,()=>{
  cartBox.style.display='none'
  navMenu.setAttribute('data-open' ,'open')
  overlay.style.display='block';
  window.onscroll = () => { window.scroll(0, 0); };
})
closeMenu.addEventListener('click', ()=>{
  navMenu.setAttribute('data-open' ,'closed')
  overlay.style.display='none';
  window.onscroll = () => { window.scroll(); };
})