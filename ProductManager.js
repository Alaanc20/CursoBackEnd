class ProductManager {
    static id=0
    constructor() {
        this.products = [];
    }

    addProducts = (title, description, price, thumbnail, code, stock) => {
        const product = { title, description, price, thumbnail, code, stock, products: [] }

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }

    getProduct() {
        return this.products;
    }

    getProductById(id) {
        if (!this.products.find((product) => product.id === id)) {
            return 'Not Found';
        } else {
            return this.products.find((product) => product.id === id);
        }
    }
}

const products = new ProductManager();

console.log(products.getProduct());

products.addProducts('zapatillas', 'para correr', 2000, 'imagen.com', 'abc123', 10);
products.addProducts('camperas', 'para el frío', 1500, 'imagen2.com', 'abc124', 20);
products.addProducts('remeras', 'para el verano', 800, 'imagen3.com', 'def456', 15);

console.log(products.getProductById(1));
console.log(products.getProductById(2));
console.log(products.getProductById(3));