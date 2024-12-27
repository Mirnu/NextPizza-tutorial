import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients, products } from "./constants";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = (
    productId: number,
    pizzaType?: 1 | 2,
    size?: 20 | 30 | 40
) => {
    return {
        productId,
        price: randomNumber(190, 600),
        pizzaType,
        size,
    };
};

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "John Doe",
                email: "john@example.com",
                password: hashSync("people", 10),
                verified: new Date(),
                role: "ADMIN",
            },
            {
                fullName: "Jane Doe",
                email: "jane@example.com",
                password: hashSync("women", 10),
                verified: new Date(),
            },
        ],
    });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.ingredient.createMany({
        data: ingredients,
    });

    await prisma.product.createMany({
        data: products,
    });

    const pizza1 = await prisma.product.create({
        data: {
            name: "Ветчина и грибы",
            imageUrl:
                "https://media.dodostatic.net/image/r:233x233/11EF5B10B39BBBBDA9F8C4E4FF1B067C.avif",
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5),
            },
        },
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: "Жюльен",
            imageUrl:
                "https://media.dodostatic.net/image/r:233x233/11EE7D6175C10773BFE36E56D48DF7E3.avif",
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 10),
            },
        },
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: "Двойной цыпленок",
            imageUrl:
                "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 40),
            },
        },
    });

    await prisma.productVariant.createMany({
        data: [
            generateProductItem(pizza1.id, 1, 20),
            generateProductItem(pizza1.id, 2, 30),
            generateProductItem(pizza1.id, 2, 40),
            generateProductItem(pizza2.id, 1, 20),
            generateProductItem(pizza2.id, 2, 30),
            generateProductItem(pizza2.id, 2, 40),
            generateProductItem(pizza3.id, 1, 20),
            generateProductItem(pizza3.id, 2, 30),
            ...Array.from({ length: 17 }, (_, i) => i + 1).map((i) =>
                generateProductItem(i)
            ),
        ],
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: "1111",
            },
            {
                userId: 2,
                totalAmount: 0,
                token: "2222",
            },
        ],
    });

    await prisma.cartItem.create({
        data: {
            productVariantId: 1,
            quantity: 1,
            cartId: 1,
            ingredients: {
                connect: [{ id: 1 }, { id: 2 }],
            },
        },
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
