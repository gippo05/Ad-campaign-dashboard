


const CardDisplay = ({post}) => {

    return(
        <>
        <div className="rounded p-4 w-auto border border-gray-200">
    
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                    <p>{post.body}</p>
                    <p>⭐ {post.id}</p>

                </div>
        
        </>
    )


}

export default CardDisplay;