function RenderData({fetchedData}) {
    console.log(fetchedData.posts)
    return ( 
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>You will see the fetched data here!!!</h1>
            <div style={{ display: 'grid', gap: '20px' }}>
                {
                  fetchedData.posts.map((post)=>
                  <div key={post.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', backgroundColor: '#f9f9f9', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                     <h2 style={{ color: '#555', marginBottom: '10px' }}>{post.title}</h2>
                     <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '10px' }}>{post.body}</p>
                     <div style={{ display: 'flex', gap: '20px' }}>
                         <p style={{ color: '#28a745', fontWeight: 'bold' }}>Likes: {post.reactions.likes}</p>
                         <p style={{ color: '#dc3545', fontWeight: 'bold' }}>Dislikes: {post.reactions.dislikes}</p>
                     </div>
                  </div>
                  )
                }
            </div>
        </div>
     );
}

export default RenderData;