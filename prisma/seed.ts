import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.posts.createMany({
        data: [


            {
                // Prepare Lifestyle post
                id: 8,
                title: 'The Benefits of Regular Exercise',
                slug: 'the-benefits-of-regular-exercise',
                featured_image: 'https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                teaser: 'Regular exercise offers a wide range of physical and mental health benefits. Learn about the advantages of staying active and incorporating exercise into your daily routine.',
                content: `
                <h2>The Benefits of Regular Exercise</h2>
                <p>Regular exercise is essential for maintaining good health and well-being. Physical activity offers a wide range of benefits, including improved cardiovascular health, weight management, and stress reduction. By incorporating exercise into your daily routine, you can enhance your quality of life and reduce the risk of developing chronic diseases.</p>
                <h3>Physical Health Benefits</h3>
                <p>Regular exercise can help improve cardiovascular health, strengthen muscles and bones, and enhance flexibility and balance. Physical activity also plays a crucial role in weight management and can help reduce the risk of developing conditions like obesity, heart disease, and diabetes. By staying active, you can improve your overall health and well-being.</p>
                `,
                category: 'Lifestyle',
            },
            {
                // Prepare automotive post
                id: 9,
                title: 'How to Maintain Your Car',
                slug: 'how-to-maintain-your-car',
                featured_image: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                teaser: 'Regular car maintenance is essential for keeping your vehicle in good condition. Learn about the key maintenance tasks you should perform to ensure your car runs smoothly and efficiently.',
                content: `
                <h2>How to Maintain Your Car</h2>
                <p>Regular car maintenance is essential for keeping your vehicle in good condition and preventing costly repairs. By performing routine maintenance tasks, you can ensure that your car runs smoothly and efficiently. Learn about the key maintenance tasks you should perform to keep your car in top shape.</p>
                <h3>Oil Changes</h3>
                <p>Regular oil changes are essential for keeping your engine running smoothly and preventing damage. Oil helps lubricate the engine's moving parts and absorbs heat, reducing friction and wear. By changing your oil regularly, you can extend the life of your engine and improve fuel efficiency.</p>
                `,
                category: 'Automotive',
            },
        ],
    });

    console.log('Seed data created successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });