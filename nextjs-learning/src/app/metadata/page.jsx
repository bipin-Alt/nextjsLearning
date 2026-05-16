

export const metadata ={
    title:"Example Metadata",
    description:"Teach about the greeting words in English..."
}

function metadataExample() {
    const exampleData = [
        {
            id : 1, title:"Hello", description:"It is the greeting english world."
        },
        {
            id :2, title:"Good Morning" , description:"It is the greeting english world used to wish in the begining of a new day."
        },
        {
            id:3, title:"Bye", description:"It is a greeting English word which means 'Be With You Everytime' this is said when you are getting seperated with loved ones."
        }
    ]
    return ( 
    <>
      <div>
        {
          exampleData.map(item=>(
            <div key={item.id}>
                <h1>{ item.title}</h1>
                <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </> 
    );
}

export default metadataExample;