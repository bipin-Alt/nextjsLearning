
const dummyData = {
    "1":{
        title:"Hello",
        description:"It is the greeting english world."
    },
      "2":{
        title:"Good Morning",
        description:"It is the greeting english world used to wish in the begining of a new day."
    },
      "3":{
        title:"Bye",
        description:"It is a greeting English word which means 'Be With You Everytime' this is said when you are getting seperated with loved ones."
    }
}
export async function generateMetadata({params}){
    const{slug} = await params;
    const data = dummyData[slug];
    return {
        title:data.title,
        description:data.description
    }
}
 async function DyanmicMetadata({params}) {
const {slug} = await params;
const data = dummyData[slug]

    return ( 
        <>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        </>
     );
}

export default DyanmicMetadata;