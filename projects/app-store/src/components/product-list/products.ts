interface Product {
    productId: number,
    name: string,
    price?: number,
    details: string,
    description: string
}

const products: Product[] = [
    {
        productId: 1,
        name: 'iphonex',
        price: 800,
        details: 'iphonex is wonderful in 2020',
        description: 'iphonex is published'
    },
    {
        productId: 2,
        name: 'iphonex2',
        price: 600,
        details: 'iphonex2 is wonderful in 2020',
        description: 'iphonex2 is published'
    }
]

export { products };