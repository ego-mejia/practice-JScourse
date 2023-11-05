{/* <li class="navbar-email">platzi@example.com</li> */}
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail')


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleAsideCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    //if desktop menu has class INACTIVE
       //erase that class
       //removeClass
       //If there is no class INACTIVE
       //add the class
       //addClass
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        //si mobileMenu esta open hay que cerrarlo
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    // if (desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // } else{
    //     desktopMenu.classList.add('inactive');
    // }
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        //si mobileMenu esta open hay que cerrarlo
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    
}

function toggleAsideCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isToggleDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    

    if(!isMobileMenuClosed){
        //si mobileMenu esta open hay que cerrarlo
        mobileMenu.classList.add('inactive');
    }
    
    if(!isToggleDesktopMenuClosed){
        //si mobileMenu esta open hay que cerrarlo
        desktopMenu.classList.add('inactive');
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        //si mobileMenu esta open hay que cerrarlo
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Nintendo Switch',
    price: 4700,
    image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo",
});

productList.push({
    name: 'Xbox',
    price: 7000,
    image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2013/05/225410-especificaciones-xbox-one-asi-es-nueva-consola.png?tf=3840x",
});

productList.push({
    name: 'Playstation',
    price: 9800,
    image: "https://cdn.vox-cdn.com/thumbor/uoyErWtvL5PJj4Nom2Kndj9VVe4=/0x0:3000x2000/1200x675/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/67747373/jbareham_201022_ply1040_ps5_lead_0002.0.jpg",
});

function renderProducts (arr){
    for (product of arr){
        const productCard =  document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg =  document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        

        const productInfo =  document.createElement('div');
        productInfo.classList.add('product-info');
    
        const  productInfoDiv = document.createElement('div');
        
        const  productPrice = document.createElement('p');
        productPrice.innerText = 'Mxn ' + product.price;
        const  productName = document.createElement('p');
        productName.innerText =  product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const  productInfoFigure = document.createElement('figure');
        const  productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        // productInfoFigure.appendChild(productImgCart);
        // productImg.setAttribute('src', product.image);
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
        /*
        <section class="main-container">
        <div class="cards-container">
          <div class="product-card">
            <productImg src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <productImg src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
        </div>
        </section>
        */
    }
}

//se crea una funcion que recibe un array y regresa la concatenacion de los
renderProducts(productList);