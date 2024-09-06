import React from 'react'
import './css/Catalog.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ProductsList from '../compontents/ProductsList/ProducttsList';
import ProductsItem from '../compontents/ProductsItem/ProductsItem';

function valuetext(value: number) {
    return `$${value}`;
}


const Catalog = () => {
    const [value, setValue] = React.useState<number[]>([70, 600]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <>
            <div className="catalog-wr d-f jc-sb">
                <aside className="catalog-filter">
                    <div className="catalog-filter-caption d-f jc-sb">
                        <h3 className="catalog-filter-title">Filter</h3>
                        <div><img src="/images/filter.png" alt="filter" /></div>
                    </div>
                    <div className="catalog-filter-categories d-f">
                        <div className='d-f jc-sb'>
                            <div className="category-title">Tops</div>
                            <a href="" className="d-b"><img src="/images/cat-icon.png" alt="cat-icon" /></a>
                        </div>
                        <div className='d-f jc-sb'>
                            <div className="category-title">Printed T-shirts</div>
                            <a href="" className="d-b"><img src="/images/cat-icon.png" alt="cat-icon" /></a>
                        </div>
                        <div className='d-f jc-sb'>
                            <div className="category-title">Plain T-shirts</div>
                            <a href="" className="d-b"><img src="/images/cat-icon.png" alt="cat-icon" /></a>
                        </div>
                        <div className='d-f jc-sb'>
                            <div className="category-title">Kurti</div>
                            <a href="" className="d-b"><img src="/images/cat-icon.png" alt="cat-icon" /></a>
                        </div>
                        <div className='d-f jc-sb'>
                            <div className="category-title">Boxers</div>
                            <a href="" className="d-b"><img src="/images/cat-icon.png" alt="cat-icon" /></a>
                        </div>
                        <div className='d-f jc-sb'>
                            <div className="category-title">Full sleeve T-shirts</div>
                            <a href="" className="d-b"><img src="/images/cat-icon.png" alt="cat-icon" /></a>
                        </div>
                        <div className='d-f jc-sb'>
                            <div className="category-title">Payjamas</div>
                            <a href="" className="d-b"><img src="/images/cat-icon.png" alt="cat-icon" /></a>
                        </div>
                        <div className='d-f jc-sb'>
                            <div className="category-title">Jeans</div>
                            <a href="" className="d-b"><img src="/images/cat-icon.png" alt="cat-icon" /></a>
                        </div>
                    </div>
                    <div className="price-caption d-f jc-sb">
                        <div className="price-title">Price</div>
                        <button className='btn-clear d-b'><img src="/images/up-icon.png" alt="up-icon" /></button>
                    </div>
                    <div className="price-content">
                        <Box sx={{ width: 225 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                max={1000}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Box>
                        <div className="price-info d-f">
                            <div className="price-info-bl">${value[0]}</div>
                            <div className="price-info-bl">${value[1]}</div>
                        </div>
                    </div>
                    <div className="colors-caption d-f jc-sb">
                        <div className="colors-title">Colors</div>
                        <button className='btn-clear d-b'><img src="/images/up-icon.png" alt="up-icon" /></button>
                    </div>
                    <div className="colors-content d-f jc-sb">
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Purple</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Black</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Red</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Orange</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Navy</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">White</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Broom</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Green</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Yellow</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Grey</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Pink</div>
                        </div>
                        <div className='colors-item'>
                            <div className="color-shape"></div>
                            <div className="color-name">Blue</div>
                        </div>
                    </div>
                    <div className="sizes-caption d-f jc-sb">
                        <div className="sizes-title">Size</div>
                        <button className='btn-clear d-b'><img src="/images/up-icon.png" alt="up-icon" /></button>
                    </div>
                    <div className="sizes-content d-f jc-sb">
                        <div className="sizes-item">xxs</div>
                        <div className="sizes-item">xl</div>
                        <div className="sizes-item">xs</div>
                        <div className="sizes-item">s</div>
                        <div className="sizes-item">m</div>
                        <div className="sizes-item">l</div>
                        <div className="sizes-item">xxl</div>
                        <div className="sizes-item">3xl</div>
                        <div className="sizes-item">4xl</div>
                    </div>
                    <div className="dress-caption d-f jc-sb">
                        <div className="dress-title">Dress Style</div>
                        <button className='btn-clear d-b'><img src="/images/up-icon.png" alt="up-icon" /></button>
                    </div>
                    <div className="dress-content d-f">
                        <div className="d-f jc-sb">
                            <div className="dress-style">Classic</div>
                            <button className='btn-clear d-b'><img src="/images/cat-icon.png" alt="cat-icon" /></button>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="dress-style">Casual</div>
                            <button className='btn-clear d-b'><img src="/images/cat-icon.png" alt="cat-icon" /></button>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="dress-style">Business</div>
                            <button className='btn-clear d-b'><img src="/images/cat-icon.png" alt="cat-icon" /></button>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="dress-style">Sport</div>
                            <button className='btn-clear d-b'><img src="/images/cat-icon.png" alt="cat-icon" /></button>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="dress-style">Elegant</div>
                            <button className='btn-clear d-b'><img src="/images/cat-icon.png" alt="cat-icon" /></button>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="dress-style">Formal (evening)</div>
                            <button className='btn-clear d-b'><img src="/images/cat-icon.png" alt="cat-icon" /></button>
                        </div>
                    </div>
                </aside>
                <main className='catalog-main'>
                    <div className="d-f jc-sb">
                        <h2 className="catalog-title">Women's Clothing</h2>
                        <div className="catalog-tabs d-f">
                            <button className='catalog-tabs-btn tabs-btn__active'>New</button>
                            <button className='catalog-tabs-btn'>Recommended</button>
                        </div>
                    </div>
                    <div className="catalog-box d-f jc-sb">
                        {
                            ProductsList.map((product) => {
                                return (
                                    <ProductsItem
                                        id={product.id}
                                        image={product.image}
                                        title={product.title}
                                        brand={product.brand}
                                        price={product.price}
                                    />
                                )
                            })
                        }
                    </div>
                </main>
            </div>
            <section className='catalog-info'>
                <h3 className="home-bl-title">Clothing for Women Online in India</h3>
                <h4 className="catalog-info-subtitle">Reexplore Women's Clothing Collection Online at Euphoria</h4>
                <p className="catalog-info-desc">
                    Women's Clothing - Are you searching for the best website to buy Clothing for Women online
                    in India? Well, your search for the coolest and most stylish womens clothing ends here.
                    From trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel,
                    <span>Euphoria</span> has closet of Women Collection covered with the latest and best designs of Women's
                    Clothing Online.
                </p>
                <p className="catalog-info-desc" style={{ marginTop: "20px" }}>
                    Our collection of clothes for women will make you the trendsetter with an iconic resemblance
                    of choice in Womens Wear.
                </p>
                <h4 className="catalog-info-subtitle" style={{ marginTop: "25px" }}>
                    One-Stop Destination to Shop Every Clothing for Women: Euphoria
                </h4>
                <p className="catalog-info-desc">
                    Today, Clothing for Women is gaining more popularity above all. This is because gone
                    are the days when women were used to carrying uncomfortable fashion. Today, a lady
                    looks prettier when she is in Casual Womens Wear which is a comfortable outfit.
                    Concerning this, <span>Euphoria</span> has a big fat range of Stylish Women's Clothing that
                    would make her the winner wherever she goes.
                </p>
                <p className="catalog-info-desc" style={{ marginTop: "20px" }}>
                    Our collection of clothes for women will make you the trendsetter with an iconic
                    resemblance of choice in Womens Wear. It is quite evident to say that there are very
                    few Womens Clothing online stores where you can buy Western Wear for Women comprising
                    the premium material and elegant design that you are always seeking for. Basically,
                </p>
                <button className="catalog-info-more">See more</button>
            </section>
            <section className='catalog-best'>
                <h2 className="home-bl-title">Buy Women's Clothing at Best Price</h2>
                <table className='catalog-best-tb'>
                    <thead>
                        <tr>
                            <th>Women's Clothing</th>
                            <th>Best Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pick Any 4- Womens Plain T-shirt Combo</td>
                            <td>₹1099</td>
                        </tr>
                        <tr>
                            <td>Pick Any 4- Plain Womens Boxer Combo</td>
                            <td>₹1099</td>
                        </tr>
                        <tr>
                            <td>Pick Any 4 - Women Plain Full Sleeve T-shirt Combo</td>
                            <td>₹1399</td>
                        </tr>
                        <tr>
                            <td>Multicolor Checkered Long Casual Shirts for Women</td>
                            <td>₹499</td>
                        </tr>
                        <tr>
                            <td>Pick Any 2: Plain Boxy Casual Shirts for Women Combo</td>
                            <td>₹799</td>
                        </tr>
                        <tr>
                            <td>Blue Floral Anarkali Kurti</td>
                            <td>₹599</td>
                        </tr>
                        <tr>
                            <td>Jade Black Narrow Cut Flexible Women Jeggings</td>
                            <td>₹998</td>
                        </tr>
                        <tr>
                            <td>Mustard-yellow Solid Straight-Fit Women Pant</td>
                            <td>₹499</td>
                        </tr>
                        <tr>
                            <td>Women Pants Combo - Pick Any 2</td>
                            <td>₹800</td>
                        </tr>
                        <tr>
                            <td>Pista Green Solid Boxy Casual Shirts for Women</td>
                            <td>₹449</td>
                        </tr>
                        <tr>
                            <td>Plain Burgundy Womens Boxer</td>
                            <td>₹349</td>
                        </tr>
                        <tr>
                            <td>Striped Front Tie Casual Shirts for Women</td>
                            <td>₹449</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Catalog