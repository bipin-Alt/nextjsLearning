

async function getData(){
    await new Promise((resolve)=> setTimeout((resolve),2000));
    return {
        stats:{
            users:1000,
        },
    }
}

export default async function loadingExample() {
 const data = await getData();
    return ( 
        <div>
          <h2>The Data is : </h2>
          <p> Users : {data.stats.users}
          </p>
        </div>
     );
}

