import 'dotenv/config';
import db from "./index"
import { Urls } from './schema';

const seedData = [
    { originalUrl: 'https://google.com', shortCode: 'google', clicks: 0 },
    { originalUrl: 'https://github.com', shortCode: 'gho', clicks: 0 },
    { originalUrl: 'https://stackoverflow.com', shortCode: 'so', clicks: 0 },
    { originalUrl: 'https://youtube.com', shortCode: 'yt', clicks: 0 },
    { originalUrl: 'https://twitter.com', shortCode: 'tw', clicks: 0 },
    { originalUrl: 'https://facebook.com', shortCode: 'fb', clicks: 0 },
    { originalUrl: 'https://instagram.com', shortCode: 'ig', clicks: 0 },
    { originalUrl: 'https://linkedin.com', shortCode: 'li', clicks: 0 },
    { originalUrl: 'https://reddit.com', shortCode: 'rd', clicks: 0 },
    { originalUrl: 'https://amazon.com', shortCode: 'amz', clicks: 0 },
    { originalUrl: 'https://netflix.com', shortCode: 'nf', clicks: 0 },
    { originalUrl: 'https://spotify.com', shortCode: 'sp', clicks: 0 },
    { originalUrl: 'https://discord.com', shortCode: 'dc', clicks: 0 },
    { originalUrl: 'https://slack.com', shortCode: 'slk', clicks: 0 },
    { originalUrl: 'https://notion.so', shortCode: 'ntn', clicks: 0 },
    { originalUrl: 'https://figma.com', shortCode: 'fig', clicks: 0 },
    { originalUrl: 'https://dribbble.com', shortCode: 'drb', clicks: 0 },
    { originalUrl: 'https://behance.net', shortCode: 'bh', clicks: 0 },
    { originalUrl: 'https://medium.com', shortCode: 'med', clicks: 0 },
    { originalUrl: 'https://dev.to', shortCode: 'dev', clicks: 0 },
    { originalUrl: 'https://hashnode.com', shortCode: 'hn', clicks: 0 },
    { originalUrl: 'https://vercel.com', shortCode: 'vcl', clicks: 0 },
    { originalUrl: 'https://netlify.com', shortCode: 'ntl', clicks: 0 },
    { originalUrl: 'https://heroku.com', shortCode: 'hrk', clicks: 0 },
    { originalUrl: 'https://digitalocean.com', shortCode: 'do', clicks: 0 },
    { originalUrl: 'https://aws.amazon.com', shortCode: 'aws', clicks: 0 },
    { originalUrl: 'https://cloud.google.com', shortCode: 'gcp', clicks: 0 },
    { originalUrl: 'https://azure.microsoft.com', shortCode: 'azr', clicks: 0 },
    { originalUrl: 'https://mongodb.com', shortCode: 'mdb', clicks: 0 },
    { originalUrl: 'https://postgresql.org', shortCode: 'pg', clicks: 0 },
    { originalUrl: 'https://mysql.com', shortCode: 'sql', clicks: 0 },
    { originalUrl: 'https://redis.io', shortCode: 'rds', clicks: 0 },
    { originalUrl: 'https://docker.com', shortCode: 'dkr', clicks: 0 },
    { originalUrl: 'https://kubernetes.io', shortCode: 'k8s', clicks: 0 },
    { originalUrl: 'https://reactjs.org', shortCode: 'rct', clicks: 0 },
    { originalUrl: 'https://vuejs.org', shortCode: 'vue', clicks: 0 },
    { originalUrl: 'https://angular.io', shortCode: 'ang', clicks: 0 },
    { originalUrl: 'https://svelte.dev', shortCode: 'svt', clicks: 0 },
    { originalUrl: 'https://nextjs.org', shortCode: 'nxt', clicks: 0 },
    { originalUrl: 'https://nuxt.com', shortCode: 'nux', clicks: 0 },
    { originalUrl: 'https://expressjs.com', shortCode: 'exp', clicks: 0 },
    { originalUrl: 'https://fastify.io', shortCode: 'fst', clicks: 0 },
    { originalUrl: 'https://nestjs.com', shortCode: 'nst', clicks: 0 },
    { originalUrl: 'https://prisma.io', shortCode: 'prm', clicks: 0 },
    { originalUrl: 'https://drizzle.team', shortCode: 'drz', clicks: 0 },
    { originalUrl: 'https://tailwindcss.com', shortCode: 'tz', clicks: 0 },
    { originalUrl: 'https://chakra-ui.com', shortCode: 'chk', clicks: 0 },
    { originalUrl: 'https://mui.com', shortCode: 'mui', clicks: 0 },
    { originalUrl: 'https://ant.design', shortCode: 'ant', clicks: 0 },
    { originalUrl: 'https://shadcn.com', shortCode: 'shd', clicks: 0 },
];

async function seed() {
    console.log(`🌱 Seeding database...`)

    //it's always good idea to delete/clear db before seeding it!!
    await db.delete(Urls);

    await db.insert(Urls).values(seedData)

    console.log(`✅ Seeding complete!'`)
    process.exit(0);
}


seed().catch((err) => {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
})
