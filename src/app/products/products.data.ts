import { ProductModel } from './models/product';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProductData implements InMemoryDbService {

    createDb() {
        const products: ProductModel[] = [
            {
                id: 1,
                name: 'Gorgeous Frozen Pants',
                description: 'Iure qui commodi occaecati qui ipsum. Natus quas cumque.',
                price: 395.00,
                imageUrl: 'https://source.unsplash.com/1600x900/?product',
                quantity: 4671
              },
              {
                id: 4,
                name: 'Licensed Wooden Sausages',
                description: 'Aut ullam voluptatem dignissimos rerum earum illum error. Quia fuga totam vero quisquam et delectus suscipit quaerat.',
                price: 708.00,
                imageUrl: 'https://source.unsplash.com/1600x900/?product',
                quantity: 37450
              },
              {
                id: 5,
                name: 'Intelligent Frozen Car',
                description: 'Rerum adipisci neque voluptatem sed voluptatem a eum. Id laudantium quaerat voluptatem.',
                price: 773.00,
                imageUrl: 'https://source.unsplash.com/1600x900/?product',
                quantity: 25563
              },
              {
                id: 6,
                name: 'Incredible Rubber Gloves',
                description: 'Facilis quae aut sed nemo iusto excepturi nulla. Rerum optio velit fugit.',
                price: 535.00,
                imageUrl:' https://source.unsplash.com/1600x900/?product',
                quantity: 24475
              },
              {
                id: 7,
                name: 'Tasty Wooden Computer',
                description: 'Saepe fugit impedit aperiam. Aut dolorem nesciunt necessitatibus reiciendis iure est expedita ad.',
                price: 718.00,
                imageUrl: 'https://source.unsplash.com/1600x900/?product',
                quantity: 66668
              },
              {
                id: 8,
                name: 'Intelligent Soft Pants',
                description: 'Non porro quisquam ut nam ut sit omnis asperiores nostrum. Corporis excepturi sit eum autem animi dignissimos.',
                price: 391.00,
                imageUrl:' https://source.unsplash.com/1600x900/?product',
                quantity: 4050
              },
              {
                id: 9,
                name: 'Gorgeous Wooden Gloves',
                description:' Est animi praesentium culpa. Cum vel debitis ut beatae quaerat quibusdam assumenda quia.',
                price: 908.00,
                imageUrl: 'https://source.unsplash.com/1600x900/?product',
                quantity: 88935
              },
              {
                id: 10,
                name: 'Handcrafted Fresh Fish',
                description: 'Eos neque nihil nihil qui et. Beatae ipsam quia voluptatibus quo qui dolores.',
                price: 457.00,
                imageUrl: 'https://source.unsplash.com/1600x900/?product',
                quantity: 76400
              }
        ];
        return { products };
    }
}
