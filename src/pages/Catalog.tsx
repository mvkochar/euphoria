import React from 'react'
import './css/Catalog.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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
            <div className="catalog-wr d-f">
                <div className="catalog-filter">
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
                </div>
            </div>
        </>
    )
}

export default Catalog