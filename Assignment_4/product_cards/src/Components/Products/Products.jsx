 import Product from '../Product/Product';
const Products = () => {
    const productsCart = [
        {
          id: 1,
          name: 'Laptop',
          price: 30000,
          imgURL: 'https://qualitycomputer.com.np/web/image/product.template/40833/image_512/Lenovo%20Ideapad%203%2015IIL05%20i3%281005G1%29%204GB-256GB%20SSD-10th-15.6%22%20FHD-Windows%2011%20Home%20Laptop?unique=8b42454'
        },
        {
          id: 2,
          name: 'Smartphone',
          price: 15000,
          imgURL: 'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/15%20pro/iPhone-15-Plus-(2)-(1)-6945-800x800.jpg'
        },
        {
          id: 3,
          name: 'Headphones',
          price: 1000,
          imgURL: 'https://stech.com.bd/wp-content/uploads/2023/05/havit-h926bt-sport-stereo-black-silver-wireless-11585110645-5.webp'
        },
        {
          id: 4,
          name: 'Backpack',
          price: 1500,
          imgURL: 'https://www.thule.com/-/p/BqQQ3zv_GsS7myXOsY5vM26sDG7AlIzKP_qxV_zBNXA/rs:fit/h:991/cb:1.4/w:991/plain/approved/std.lang.all/25/72/1382572.png'
        },
        {
          id: 5,
          name: 'Running Shoes',
          price: 800,
          imgURL: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8bc17cbdc83646a6b093cb217a850fbd_9366/Ultra_4DFWD_Running_Shoes_White_ID1687_HM1.jpg'
        },
        {
          id: 6,
          name: 'Water Bottle',
          price: 20,
          imgURL: 'https://pebel.in/cdn/shop/products/IMG_0750copy_1100x.jpg?v=1678796647'
        },
      ];

    return (
        <div>
            <div className='d-flex'>
                {productsCart.map(product =>  <Product key = {product.id} p = {product}/>)}
            </div>
        </div>
    );
};

export default Products;