const { redis } = require("@/lib/redis");
export  default async function home() {

const res1 = await redis.hset('bike:1',
    {
    'model': 'Deimos',
    'brand': 'Ergonom',
    'type': 'Enduro bikes',
    'price': 4972,
    }
)
console.log(res1);

const res2 = await redis.hget('bike:1', 'model')
console.log(res2)  // 'Deimos'

const res3 = await redis.hget('bike:1', 'price')
console.log(res3)  // '4972'

const res4 = await redis.hgetall('bike:1')
console.log(res4)  

const res5 = await redis.hincrby('bike:1','price',1000);
console.log(res5);
  return (
    <div>
      
    </div>
  )
}