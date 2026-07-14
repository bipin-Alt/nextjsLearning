const { redis } = require("@/lib/redis");
export  default async function home() {

// Storing a simple string
await redis.set('user:101:name', 'Alice');

// Storing a serialized JSON object
const blogPost = { id: 1, title: 'Learn Redis', content: '...' };
await redis.set('post:1', JSON.stringify(blogPost));
console.log(blogPost);

const getPosts = redis.get('post:1');
console.log("The posts from redis :" , getPosts);

  return (
    <div>
      
    </div>
  )
}