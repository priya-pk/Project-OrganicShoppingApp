export class ProductModel{
    constructor(
        public productId :number,
        public productName: string,
        public productCode: string,
        public category: string,
        // public releaseDate: string,
        public description: string,
        public price: number,
        public quantity: number,
        public starRating: number,
        public imageUrl: string
    ){}
}
 