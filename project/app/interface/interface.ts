
// For new products on homepage
export interface NewestProducts {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    rating: {
        average: number;
        count: number;
    };
    categoryName: string;
    name: string;
}

// Full product interface for product page
export interface FullProduct {
    _id: string;
    images: any;
    price: number;
    slug: string;
    rating: {
        average: number;
        count: number;
    };
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
}