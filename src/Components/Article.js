import React from 'react';
import './Article.css';

function Article(props) {
    return (
        <article>
            <a href={ "https://reddit.com" + props.article.permalink } target="_blank">
                <h3>{ props.article.title }</h3>
                <img src={ props.article.thumbnail } />
            </a>
            <h5>{ props.article.ups } Upvotes</h5>
            <h5>Posted by <span class="pink">{ props.article.author }</span></h5>
            <h5><span class="pink">{ props.article.num_comments }</span> comments</h5>
        </article>
    )
}

export default Article;