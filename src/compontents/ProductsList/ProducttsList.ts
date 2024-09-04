type TProduct = {
    id: number
    image: string
    title: string
    brand: string
    price: string
}

const ProductsList:TProduct[] = [
    {
        id: 0,
        image: "/images/catalog/1.png",
        title: "Black Sweatshirt with ....",
        brand: "Jhanvi's  Brand",
        price: "123.00"
    },

    {
        id: 1,
        image: "/images/catalog/2.png",
        title: "line Pattern Black H...",
        brand: "AS's  Brand",
        price: "37.00"
    },

    {
        id: 2,
        image: "/images/catalog/3.png",
        title: "Black Shorts",
        brand: "MM's  Brand",
        price: "37.00"
    },

    {
        id: 3,
        image: "/images/catalog/4.png",
        title: "Levender Hoodie with ....",
        brand: "MM's  Brand",
        price: "119.00"
    },
] 

export default ProductsList