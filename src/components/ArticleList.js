import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
    // console.log({posts})
    const postsMapped = posts.map((postObj) => {
        return <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} />
    })

    return (
        <main>
            {postsMapped}
        </main>
    )
}

export default ArticleList;