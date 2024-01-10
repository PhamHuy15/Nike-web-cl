const container = document.querySelector('.container');
const overLay = document.querySelector('.modal__overlay');

const headerInput = document.querySelector('.header__search-input');
const headerInputBtn = document.querySelector('.header__search-input-btn');
const searchLayout = document.querySelector('.search__layout');
const outSearch = document.querySelector('.out-search');
const searchLayoutInput = document.querySelector('.search__layout-input input');
const searchProduct = document.querySelector('.row.search-box-product__container');
const layoutInput = document.querySelector('.search__layout-input');
const searchLayoutBox = document.querySelector('.search__layout-box');
const deleteAllInput = document.querySelector('.delete-all');

const cart = document.querySelector('.header__search-icon .header__search-icon--cart');
const cartContainer = document.querySelector('.cart__container');
const shoppingCart = document.querySelector('.shopping-cart');
const addCartBtn = document.querySelectorAll('.add-cart-btn');
const cartTotalsPrice = document.querySelector('.totals-price span');
const closeCart = document.querySelector('.close-cart');
// mobie
const mobieCart = document.querySelector('.nav__mobile-cart');

const minusBtn = document.querySelector('.minus-btn');

const productClassifyList = document.querySelector('.product__classify-list');
const productClassifyClother = document.querySelector('.product__classify-clothers .product__classify-list');

const app = {
    // danh sach giay
    shoes: [
        {
            id: 1,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/767687a0-142e-4d66-b437-998dee9a0a4f/image.jpg',
            title: 'NikeCourt Royale 2 Next Nature"',
            subTitle: 'Mens Shoes',
            price: 1609000,
        },

        {
            id: 2,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/13721f24-2774-443e-a27d-998d2c6be068/image.jpg',
            title: 'Nike Air Force 1 07 EasyOn',
            subTitle: 'Shoes',
            price: 3239000,
        },
        {
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/350e7f3a-979a-402b-9396-a8a998dd76ab/image.jpg',
            id: 3,
            title: 'Nike Air Force 1 07',
            subTitle: 'Mens Shoes',
            price: 3519000,
        },
        {
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/bff3d49a-fd0e-4471-8a97-e7973551ddb4/image.jpg',
            id: 4,
            title: 'Nike Air Force 1 07',
            subTitle: 'Mens Shoes',
            price: 3519000,
        },
        {
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/99e03819-8373-46e5-9930-cd433d900213/image.jpg',
            id: 5,
            title: 'Nike Free Terra Vista',
            subTitle: 'Mens Shoes',
            price: 3063199,
        },

        {
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/16044b46-f5a9-4293-bb97-193013788eab/image.jpg',
            id: 6,
            title: 'Nike Winflo 10',
            subTitle: 'Mens Road Running Shoes',
            price: 1757400,
        },

        {
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/89e331f5-a78d-43a5-8411-c4b3b96bdb0a/image.jpg',
            id: 7,
            title: 'KD Trey 5 X EP',
            subTitle: 'Mens Golf Shoe (Wide)',
            price: 2649000,
        },
        {
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/ece27fc1-1c28-43b2-ae8e-fb39db26c71c/image.jpg',
            id: 8,
            title: 'Nike Victory Pro 3',
            subTitle: 'Basketball Shoes',
            price: 3519000,
        },
        {
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/992bc7e6-fca5-478a-81bc-206719724a54/image.jpg',
            id: 9,
            title: 'Nike G.T. Hustle 2 EP',
            subTitle: 'Mens Basketball Shoes',
            price: 4999000,
        },

        {
            id: 10,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/93233fe3-b0bc-42db-8673-8ba98d8561f7/image.jpg',
            subTitle: 'MG High-Top Football Boot',
            title: 'Nike Superfly 9 Academy Mercurial Dream Speed',
            price: 2929000,
        },

        {
            id: 11,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/51a9b14a-6883-4d20-bd9f-d4087a496aaa/image.jpg',
            subTitle: 'Firm-Ground Low-Top Football Boot',
            title: 'Nike Mercurial Vapor 15 Elite',
            price: 1909000,
        },

        {
            id: 12,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/195382b3-7ff3-4b51-98e6-74f1a3f9f186/image.jpg',
            subTitle: "Men's Slides",
            title: 'Jordan Hydro 4 Retro',
            price: 2069000,
        },

        {
            id: 13,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/89e331f5-a78d-43a5-8411-c4b3b96bdb0a/image.jpg',
            subTitle: "Men's Slides",
            title: 'Nike Air Max Cirro',
            price: 3829000,
        },

        {
            id: 14,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/9b489664-ce52-48fb-9a61-cd3e6bfbb6cb/image.jpg',
            subTitle: "Men's Trail-Running Shoes",
            title: 'Nike Pegasus Trail 4',
            price: 5279000,
        },

        {
            id: 15,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/e47b4385-11ff-4274-af6f-351e49670434/image.jpg',
            subTitle: "Men's Shoes",
            title: 'Nike ACG Mountain Fly 2 Low GORE-TEX',
            price: 5279000,
        },

        {
            id: 16,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/e47b4385-11ff-4274-af6f-351e49670434/image.jpg',
            subTitle: "Men's Road Running Shoes",
            title: 'Nike Interact Run',
            price: 5279000,
        },

        {
            id: 17,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/4f986d85-2681-4405-907c-b38e44529d5a/image.jpg',
            subTitle: 'Skate Shoes',
            title: 'Nike SB Zoom Nyjah 3',
            price: 2349000,
        },

        {
            id: 18,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/92cfb448-2a6d-4a6a-bf96-af9a9fc97959/image.jpg',
            subTitle: "Men's Road Running Shoes",
            title: 'Nike Pegasus Turbo',
            price: 4409000,
        },

        {
            id: 19,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/061808a6-5407-47fe-90ed-35664a93fd6b/image.jpg',
            subTitle: 'Indoor Court Low-Top Football Shoes',
            title: 'Nike Tiempo Legend 10 Academy',
            price: 2349000,
        },

        {
            id: 20,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/7337ea52-7e01-478e-90e9-5839aa3b2f2c/image.jpg',
            subTitle: "Men's Walking Shoes",
            title: 'Nike Motiva',
            price: 3239000,
        },

        {
            id: 21,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/41e9e295-f11a-4bf4-ab18-9d08ca7310d1/image.jpg',
            subTitle: "Men's Workout Shoes",
            title: 'Nike Air Zoom TR 1',
            price: 3519000,
        },
    ],

    //danh sach trang phuc
    clothers: [
        {
            id: 1,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/f369ca53-1a6b-4f95-952a-e7de6c372b92/image.jpg',
            subTitle: 'Older Kids Joggers',
            title: 'Nike Sportswear Club Fleece',
            price: 969000,
        },
        {
            id: 2,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/3d367a22-bd8f-472a-ba68-9f21911fcf66/image.jpg',
            subTitle: "Men's Repel Running Jacket",
            title: 'Nike Windrunner',
            price: 2859000,
        },
        {
            id: 3,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/5ee32627-0110-4774-8144-55bf9d45aee7/image.jpg',
            subTitle: "Older Kids' T-Shirt",
            title: 'Nike Sportswear',
            price: 559000,
        },
        {
            id: 4,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/adf59c41-e98f-4f33-86a2-b10cf5924477/image.jpg',
            subTitle: "Older Kids' Long-Sleeve T-Shirt",
            title: 'Nike Sportswear',
            price: 659000,
        },

        {
            id: 5,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/016efaf6-c181-4b4d-a8a3-e106986b4aab/image.jpg',
            subTitle: "Older Kids' (Girls') Joggers",
            title: 'Nike Sportswear Tech Fleece',
            price: 2039000,
        },

        {
            id: 6,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/f5a5af1c-d5cc-44ea-8bf0-9ca19e513048/image.jpg',
            subTitle: "Men's Short-Sleeve Running Top",
            title: 'Nike Dri-FIT UV Miler',
            price: 819000,
        },

        {
            id: 7,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/29054f25-9009-486c-a6cc-a463e19ee4db/image.jpg',
            subTitle: "Older Kids' T-Shirt",
            title: 'Nike Sportswear',
            price: 559000,
        },

        {
            id: 8,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/351ca599-960d-4b9d-acd4-c521c36c68d1/image.jpg',
            subTitle: "Older Kids' Woven Full-Zip Jacket",
            title: 'Nike Sportswear Amplify',
            price: 1379000,
        },

        {
            id: 9,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/9d3421fa-07e1-429e-b8da-1a0bd2ead719/image.jpg',
            subTitle: "Girls' Dri-FIT Leggings",
            title: 'Nike Pro Leak Protection: Period',
            price: 1119000,
        },

        {
            id: 0,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/287932d4-9edc-4add-a6a3-fd4b4f0440d8/image.jpg',
            subTitle: "Older Kids' (Boys') Dri-FIT Woven Shorts",
            title: 'Nike Multi',
            price: 659000,
        },

        {
            id: 11,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/036b4ae3-337f-43bc-ae71-6ecfa9af9cdb/image.jpg',
            subTitle: "Men's Short-Sleeve Football Top",
            title: 'Nike Dri-FIT Academy',
            price: 659000,
        },

        {
            id: 12,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/1269b0de-351d-4655-99f1-04c1e0b70fe0/image.jpg',
            subTitle: "Older Kids' (Girls') Dri-FIT Leggings",
            title: 'Nike One',
            price: 819000,
        },

        {
            id: 13,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/0504f230-6be5-4b3b-b8f8-9c97dd585825/image.jpg',
            subTitle: "Older Kids' Nike Football T-Shirt",
            title: 'Paris Saint-Germain Air',
            price: 559000,
        },

        {
            id: 14,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/5063ba0d-8795-4b7f-b91a-caf4f8833f74/image.jpg',
            subTitle: "Older Kids' Joggers",
            title: 'Nike Sportswear Amplify',
            price: 1169000,
        },

        {
            id: 15,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/7d64f030-cf8f-4c6b-87ed-ab128e150565/image.jpg',
            subTitle: "Men's Basketball T-shirt",
            title: 'Nike',
            price: 1019000,
        },

        {
            id: 16,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/3952946c-93c0-4eb1-ad14-78c74d89fff0/image.jpg',
            subTitle: "Older Kids' (Boys') Dri-FIT Training Top",
            title: 'Nike Multi',
            price: 559000,
        },

        {
            id: 17,
            images: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/846ce2ba-de20-4b58-91f7-99ee09d255f0/image.jpg',
            subTitle: "Men's Dri-FIT Hyverse Long-Sleeve Running Top",
            title: 'Nike Track Club',
            price: 1379000,
        },
    ],

    render: function () {
        // hiện thị product khi tìm kiếm
        var products = [];
        products.push(...this.shoes, ...this.clothers);

        const searchProductHtml = products.map((item) => {
            return `
                <div class="col l-2-6 m-12 c-12 search-box-product__list hide">
                    <div class="search-box-product">
                        <a href="#" class="search-box-product__body">
                            <div class="search-box-product--img">
                                <img
                                    src="${item.images}"
                                    alt=""
                                />
                            </div>
                            <div class="search-box-product-item">
                                <h4 class="search-box-product-item--heading">${item.title}</h4>
                                <span class="search-box-product-item--name">${item.subTitle}</span>
                                <span class="search-box-product-item--footer">
                                    ${item.price}
                                    <sup>₫</sup>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            `;
        });
        searchProduct.innerHTML = searchProductHtml.join('');

        // hiện thị ra shoes...
        const shoesProduct = this.showProduct(this.shoes);
        const selectedShoes = shoesProduct.slice(0, 7);

        const productItem = selectedShoes.map((item) => {
            return `
                <div class="col l-2-6 m-5 c-6">
                    <div class="product__classify-typical">
                        <div href="" class="product__classify-typical-body">
                            <img
                                class="product__classify-typical-img"
                                src="${item.images}"
                                alt=""
                            />
                            <div class="product__classify-typical-item">
                                <h3 class="product__classify-typical-item-name">${item.title}</h3>
                                <h3 class="product__classify-typical-item-price">
                                    <span>${item.price}</span>
                                    <sup>₫</sup>
                                </h3>
                            </div>
                            <p class="product__classify-typical-item__footer">${item.subTitle}</p>
                        </div>
                    </div>
                    <button class="add-cart-btn">
                        <i class="fa-solid fa-cart-shopping cart-icon-left"></i>
                        Add To Cart
                        <i class="fa-solid fa-cart-shopping cart-icon-right"></i>
                    </button>
                </div>
            `;
        });

        productClassifyList.innerHTML = productItem.join('');

        // hiện thị ra clother...

        const clotherProduct = this.showProduct(this.clothers);
        const selectedClother = clotherProduct.slice(0, 7);

        const productClotherItem = selectedClother.map((item) => {
            return `
                <div class="col l-2-6 m-5 c-6">
                    <div class="product__classify-typical">
                        <div href="" class="product__classify-typical-body">
                            <img
                                class="product__classify-typical-img"
                                src="${item.images}"
                                alt=""
                            />
                            <div class="product__classify-typical-item">
                                <h3 class="product__classify-typical-item-name">${item.title}</h3>
                               <h3 class="product__classify-typical-item-price">
                                    <span>${item.price}</span>
                                    <sup>₫</sup>
                                </h3>
                            </div>
                            <p class="product__classify-typical-item__footer">${item.subTitle}</p>
                        </div>

                    </div>
                    <button class="add-cart-btn">
                        <i class="fa-solid fa-cart-shopping cart-icon-left"></i>
                        Add To Cart
                        <i class="fa-solid fa-cart-shopping cart-icon-right"></i>
                    </button>
                </div>
            `;
        });
        productClassifyClother.innerHTML = productClotherItem.join('');
    },

    handleEvents: function () {
        //su li khi an vao input cua search
        headerInput.oninput = (e) => {
            var headerInputValue = e.target.value;

            if (headerInputValue) {
                searchLayout.classList.remove('hide');
                searchLayoutBox.classList.remove('hide');
                searchLayout.classList.add('h-400px');
                searchLayout.classList.remove('h-1000px');
                searchLayoutInput.focus();
                searchLayoutInput.value = headerInputValue;
            }
        };

        //goi i san pham khi nhap vao input
        layoutInput.oninput = (e) => {
            let textSearch = e.target.value.trim();
            let searchProductDOM = document.querySelectorAll('.search-box-product__list');

            if (textSearch.length > 2) {
                searchLayout.classList.remove('h-400px');
                searchProduct.style.removeProperty('display');
                searchProduct.style.display = 'flex';
                searchLayoutBox.classList.add('hide');
                searchLayout.classList.add('h-1000px');
            }

            searchProductDOM.forEach((item) => {
                if (item.innerText.toLowerCase().includes(textSearch)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        };

        outSearch.onclick = () => {
            searchLayout.classList.add('hide');
            searchProduct.style.display = 'none';
            headerInputBtn.value = '';
        };

        deleteAllInput.onclick = () => {
            searchLayoutInput.value = '';
            searchLayoutInput.focus();
        };

        //hien gio hang khi click vao
        cart.onclick = () => {
            cartContainer.classList.remove('hide');
            overLay.classList.toggle('hide');
        };

        closeCart.onclick = () => {
            cartContainer.classList.add('hide');
            overLay.classList.add('hide');
        };

        // add san pham vao gio hang khi click
        document.addEventListener('DOMContentLoaded', function () {
            const addCartBtns = document.querySelectorAll('.add-cart-btn');
            // Lấy dữ liệu từ localStorage khi tải lại trang
            const cartProductStorage = localStorage.getItem('cartProduct')
                ? JSON.parse(localStorage.getItem('cartProduct'))
                : [];

            // Khởi tạo cartStorage từ dữ liệu đã lưu trước đó
            let cartStorage = cartProductStorage.slice();

            // Thêm sản phẩm vào mảng cartStorage

            // Hiển thị thông tin giỏ hàng khi tải lại trang
            cartProductStorage.forEach((item) => {
                app.addToCart(item.cartImg, item.cartTitle, item.cartSubtitle, item.cartPrice);
            });

            addCartBtns.forEach((btn) => {
                btn.onclick = (e) => {
                    const cartBtnItem = e.target;
                    const cartParent = cartBtnItem.parentElement;

                    const cartImg = cartParent.querySelector('.product__classify-typical-img').src;
                    const cartTitle = cartParent.querySelector('.product__classify-typical-item-name').innerText;
                    const cartSubtitle = cartParent.querySelector('.product__classify-typical-item__footer').innerText;
                    const cartPrice = cartParent.querySelector('.product__classify-typical-item-price span').innerText;

                    const cartIconLeft = cartParent.querySelector('.add-cart-btn .cart-icon-left');
                    const cartIconRight = cartParent.querySelector('.add-cart-btn .cart-icon-right');

                    //su li khi add cart animations
                    cartIconLeft.style.animation = 'CartIn 2s forwards';

                    setTimeout(() => {
                        cartIconRight.style.animation = 'CartOut 2.5s forwards';
                    }, 1100);

                    // Lưu cartStorage vào localStorage
                    cartStorage.push({
                        cartImg,
                        cartTitle,
                        cartSubtitle,
                        cartPrice,
                    });
                    localStorage.setItem('cartProduct', JSON.stringify(cartStorage));

                    //luu sp khi them vao gio hang
                    // app.saveProductCart(cartImg, cartTitle, cartSubtitle, cartPrice);
                    // Gọi hàm addToCart để cập nhật giao diện ngay sau khi thêm sản phẩm vào giỏ hàng
                    app.addToCart(cartImg, cartTitle, cartSubtitle, cartPrice);
                };
            });
        });
    },

    addToCart: function (cartImg, cartTitle, cartSubtitle, cartPrice) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('shopping-cart-item');

        if ((cartImg, cartTitle, cartSubtitle, cartPrice) === undefined) {
            cartItem.style.display = 'none';
        } else {
            cartItem.innerHTML = `
                <div class="shopping-cart-buttons">
                    <span class="delete-btn">Xóa</span>
                </div>
                <div class="shopping-cart-image">
                    <img
                        src="${cartImg}"
                        alt=""
                    />
                </div>
                <div class="shopping-cart-description">
                    <span>${cartTitle}</span>
                    <span>${cartSubtitle}</span>
                </div>
                <div class="shopping-cart-quantity">
                    <input type="number" name="name" min="1" max="1000" value="1" />
                </div>
                <div class="cart-price">
                    <span>${cartPrice}</span>
                    <sup>₫</sup>
                </div>
            `;
        }

        shoppingCart.append(cartItem);
        this.cartTotals();
        this.deleteCart();
    },

    cartTotals: function () {
        const cartItem = document.querySelectorAll('.shopping-cart .shopping-cart-item');
        let totalPrice = 0;

        for (let i = 0; i < cartItem.length; i++) {
            const inputCartItem = cartItem[i]?.querySelector('.shopping-cart-quantity input')?.value;
            const cartItemPrice = cartItem[i]?.querySelector('.cart-price span')?.innerHTML;
            const multiTotal = inputCartItem * cartItemPrice;

            if (inputCartItem && cartItemPrice !== undefined) {
                totalPrice += multiTotal;
            }
        }

        const dotTotal = totalPrice.toLocaleString('vie', { style: 'currency', currency: 'VND' });
        cartTotalsPrice.innerHTML = dotTotal;
        app.inputValueCart();
    },

    deleteCart: function () {
        const cartItems = document.querySelectorAll('.shopping-cart .shopping-cart-item');
        const cartProductStorage = localStorage.getItem('cartProduct')
            ? JSON.parse(localStorage.getItem('cartProduct'))
            : [];

        for (var i = 0; i < cartItems.length; i++) {
            const cartDeleBtn = document.querySelectorAll('.shopping-cart-buttons .delete-btn');

            cartDeleBtn[i]?.addEventListener('click', function (e) {
                const deleteBtn = e.target;
                const cartItemParent = deleteBtn.parentElement.parentElement;

                cartItemParent.remove();
                app.cartTotals();

                cartProductStorage.splice(cartItemParent, 1);
                localStorage.setItem('cartProduct', JSON.stringify(cartProductStorage));
            });
        }
    },

    inputValueCart: function () {
        const cartItems = document.querySelectorAll('.shopping-cart .shopping-cart-item');

        for (var i = 0; i < cartItems.length; i++) {
            const cartInput = document.querySelectorAll('.shopping-cart-quantity input');

            cartInput[i]?.addEventListener('change', function () {
                app.cartTotals();
            });
        }
    },

    showProduct: function (product) {
        let currentIndex = product?.length;
        let temporaryProduct;
        let randomProduct;

        while (currentIndex > 0) {
            randomProduct = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryProduct = product[currentIndex];
            product[currentIndex] = product[randomProduct];
            product[randomProduct] = temporaryProduct;
        }

        return product;
    },

    start: function () {
        this.handleEvents();
        this.addToCart();
        this.showProduct();
        this.cartTotals();
        this.deleteCart();
        this.inputValueCart();
        this.render();
    },
};

app.start();
