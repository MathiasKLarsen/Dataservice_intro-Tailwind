export default function ArticlePost({ category, item }) {
    return (
        <a className="" href={item.url} target="_blank">
            <img className="" src={item.urlToImage} alt={item.description}/>
            <div className="">
                <h5 className="">{category}</h5>
                {item.author && <p className="">{item.author}</p>}
                <p className="">{new Date(item.publishedAt).toLocaleString("en-us", {month: "short", day: "2-digit", year: "numeric"})}</p>
                <h2 className="">{item.title}</h2>
                <h4 className="">{item.description}</h4>
            </div>
        </a> 
    )
}