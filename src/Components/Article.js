import React from 'react';
import './Article.css';

function Article(props) {
    return (
        <article>
            <a href={ "https://reddit.com" + props.article.permalink } target="_blank">
                <h3>{ props.article.title }</h3>
                <img src={ props.article.thumbnail } />
                <h4>{ props.article.ups } Upvotes</h4>
                <h4>Posted by { props.article.author }</h4>
                <h4>{ props.article.num_comments } comments</h4>
            </a>
        </article>
    )
}

export default Article;