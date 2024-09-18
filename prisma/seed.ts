import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.posts.createMany({
        data: [
            {
                title: `Why Use Frontend Frameworks?`,
                slug: `why-use-frontend-frameworks`,
                featured_image: `https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-internet-polaczenie-kontakt-technologia.jpeg`,
                teaser: `Frontend frameworks like React, Angular, and Vue have been gaining popularity among developers for years. Learn about the benefits they offer and why it's worth investing time in learning them.`,
                content: `<h2>Why Use Frontend Frameworks?</h2><p>In today's world, building web applications has become significantly more complex. Frontend frameworks like React, Angular, and Vue offer ready-made solutions that speed up the process of creating modern user interfaces. Thanks to these frameworks, developers can focus on business logic rather than spending time writing basic functions from scratch.</p><h3>Benefits of Using Frameworks</h3><p>One of the greatest advantages of frameworks is their modularity and the ability to reuse code. Components that are created once can easily be deployed in various parts of the application. Moreover, frameworks offer advanced tools such as state management, rendering optimization, and support for the latest web technologies. Frameworks like Next.js further expand possibilities by enabling server-side applications based on React, making them even more versatile.</p>`,
                tags: 'frontend, frameworks, react, angular, vue',
                category: `Technology`,
                published: true,
            },

            {
                title: `How to Effectively Manage Application State in React?`,
                slug: `how-to-effectively-manage-application-state-in-react`,
                featured_image: `https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                teaser: `Managing state in React can be a challenge, especially in more complex applications. Discover the best practices and tools that will make this process easier.`,
                content: ` <h3>How to Effectively Manage Application State in React?</h3> <p>As a framework, React offers its own mechanisms for state management through hooks like useState and useReducer. However, in more complex applications, these tools may not be sufficient. In such situations, it’s worth turning to additional libraries like Redux or the Context API.</p> <h3>State Management Tools</h3> <p>Redux is one of the most popular solutions that allows for centralized state management in an application. This makes it easy for every part of the application to access and update data in a controlled way. On the other hand, the Context API, built into React, allows for passing data between components without the need for external libraries, which is convenient in smaller projects.</p> `,
                tags: 'react, state management, redux, context api',
                category: `Technology`,
                published: true,
            },

            {
                title: `The Benefits of Functional Programming`,
                slug: `the-benefits-of-functional-programming`,
                featured_image: `https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                teaser: `Functional programming has gained popularity in recent years due to its focus on simplicity and immutability. Learn about the advantages of this programming paradigm and why it's worth exploring.`,
                content: ` <h2>The Benefits of Functional Programming</h2> <p>Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. This approach offers several benefits, such as easier debugging, improved code quality, and better support for parallel programming.</p> <h3>Advantages of Functional Programming</h3> <p>One of the key advantages of functional programming is its emphasis on immutability, which eliminates side effects and makes programs easier to reason about. Additionally, functional programming languages often provide higher-order functions, which allow for more concise and expressive code. By embracing functional programming, developers can write more robust and maintainable software.</p> `,
                tags: 'functional programming, programming paradigm, immutability',
                category: `Technology`,
                published: true,
            },

            {
                title: `What Are the Advantages of Electric Cars?`,
                slug: `what-are-the-advantages-of-electric-cars`,
                featured_image: `https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                teaser: `Electric cars are becoming increasingly popular on our roads. Learn why so many people choose electric vehicles and the benefits they offer.`,
                content: ` <h2>What Are the Advantages of Electric Cars?</h2> <p>Electric cars are an increasingly common sight on the roads. What drives their growing popularity? One of the main arguments for buying an electric vehicle is environmental. Electric cars produce no emissions, contributing to reduced air pollution, especially in cities. Additionally, lower operating costs, driven by reduced energy consumption and cheaper maintenance, make electric vehicles an appealing choice for many drivers.</p> <h3>Modern Technology and Savings</h3> <p>Beyond environmental benefits, electric vehicles come equipped with advanced technologies, such as driver assistance systems (ADAS), as well as the capability for fast charging. Electric cars are also quieter, enhancing driving comfort and reducing noise in urban areas. In the long run, the cost of maintaining an electric vehicle is lower than that of traditional combustion cars – there’s no need to worry about oil changes or complex engine repairs.</p> `,
                tags: 'electric cars, electric vehicles, environmental benefits',
                category: `Automotive`,
                published: true,
            },

            {
                title: `How to Maintain a Combustion Engine to Extend Its Lifespan?`,
                slug: `how-to-maintain-a-combustion-engine-to-extend-its-lifespan`,
                featured_image: `https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                teaser: `The combustion engine is the heart of every car. Learn how regular maintenance and proper usage can significantly extend its lifespan and ensure trouble-free driving for many years.`,
                content: `<h2>How to Maintain a Combustion Engine to Extend Its Lifespan?</h2> <p>A combustion engine requires regular maintenance to operate efficiently over the long term. One of the key aspects is regular oil changes. Oil ensures proper lubrication of all engine components, minimizing friction and wear. Failing to change the oil regularly can lead to serious breakdowns or even engine damage.</p> <h3>The Importance of Filters and Technical Inspections</h3> <p>Another crucial aspect is caring for the filters – air, fuel, and oil. These filters protect the engine from contaminants and ensure optimal combustion conditions. It's also important to regularly check the cooling system, as overheating can severely damage the engine. Finally, don’t forget about regular technical inspections and addressing any unusual noises or vibrations. Following these steps will ensure many years of trouble-free driving.</p> `,
                tags: 'combustion engine, maintenance, oil change',
                category: `Automotive`,
                published: true,
            },

            {
                title: `The Benefits of Regular Exercise`,
                slug: `the-benefits-of-regular-exercise`,
                featured_image: `https://images.pexels.com/photos/8534495/pexels-photo-8534495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                teaser: `Regular exercise has numerous benefits for both physical and mental health. Discover why incorporating physical activity into your daily routine is essential for overall well-being.`,
                content: ` <h2>The Benefits of Regular Exercise</h2> <p>Regular exercise is essential for maintaining good physical and mental health. Physical activity has numerous benefits, including weight management, improved cardiovascular health, and increased muscle strength. Additionally, exercise releases endorphins, which are known as "feel-good" hormones that can help reduce stress and anxiety.</p> <h3>Physical and Mental Well-being</h3> <p>Engaging in regular exercise can also improve sleep quality, boost energy levels, and enhance overall mood. Exercise has been linked to a reduced risk of chronic diseases, such as heart disease, diabetes, and certain types of cancer. By incorporating physical activity into your daily routine, you can enjoy a healthier and happier life.</p> `,
                tags: 'exercise, physical activity, mental health, well-being',
                category: `Lifestyle`,
                published: true,
            },

            {
                title: `The Importance of a Balanced Diet`,
                slug: `the-importance-of-a-balanced-diet`,
                featured_image: `https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                teaser: `A balanced diet is essential for overall health and well-being. Learn about the key components of a healthy diet and how it can impact your physical and mental health.`,
                content: ` <h2>The Importance of a Balanced Diet</h2> <p>A balanced diet plays a crucial role in maintaining good health and preventing chronic diseases. A healthy diet should include a variety of nutrient-dense foods, such as fruits, vegetables, whole grains, lean proteins, and healthy fats. By consuming a balanced diet, you provide your body with essential nutrients that support overall well-being.</p> <h3>Nutrition and Health</h3> <p>A balanced diet can help reduce the risk of developing conditions like obesity, heart disease, diabetes, and certain cancers. Proper nutrition is also essential for maintaining a healthy weight, supporting immune function, and promoting optimal growth and development. By making healthy food choices, you can improve your quality of life and enjoy long-term health benefits.</p> `,
                tags: 'balanced diet, nutrition, health, well-being',
                category: `Lifestyle`,
                published: true,
            },

            {
                title: `Best Practice Advices for Begginers`,
                slug: `best-practice-advices-for-begginers`,
                featured_image: `https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                teaser: `Regular exercise offers a wide range of physical and mental health benefits. Learn about the advantages of staying active and incorporating exercise into your daily routine.`,
                content: ` <h2>The Benefits of Regular Exercise</h2> <p>Regular exercise is essential for maintaining good health and well-being. Physical activity offers a wide range of benefits, including improved cardiovascular health, weight management, and stress reduction. By incorporating exercise into your daily routine, you can enhance your quality of life and reduce the risk of developing chronic diseases.</p> <h3>Physical Health Benefits</h3> <p>Regular exercise can help improve cardiovascular health, strengthen muscles and bones, and enhance flexibility and balance. Physical activity also plays a crucial role in weight management and can help reduce the risk of developing conditions like obesity, heart disease, and diabetes. By staying active, you can improve your overall health and well-being.</p> `,
                tags: 'exercise, physical activity, health, well-being',
                category: `Lifestyle`,
                published: true,
            },
        ]

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