import React from "react";
import './normalize.css';
import './posts.css';
import retweet from "./img/retweet.svg";
import downArrow from "./img/down-arrow.svg";
import comment from "./img/comment.svg";
import share from "./img/share.svg";
import warranty from "./img/warranty.svg";
import heart from "./img/heart.svg";

	function Post(props) {
		return (
					<div className={'post'}>
						<div className={"header"} >
							<div className={'author'}>
								<div className={'author-avatar'}>
									<img src={props.author.photo} alt={props.author.name} />
								</div>
								<div className={'author-title'}>
									<p>{props.author.name}
										<img className={"svg"} src={warranty} alt="warranty" />
										<a href={props.author.nickname}>{props.author.nickname}</a>
										<span className={"dot"}>.</span>
											{props.date}</p>
									<p>{props.content}</p>
								</div>
							</div>
							<div>
								<img className={"downArrow"} src={downArrow} alt={"down arrow"}/>
							</div>
						</div>
						<div className={"main"}>
							<div className={'content'}>
								<img src={props.image} alt={"Ray"}/>
							</div>
						</div>
						<div className={"footer"}>
							<div className={'icons'}>
								<p><img src={comment} alt="comment" /><span>{props.numComment}</span></p>
								<p><img src={retweet} alt="retweet" /><span>{props.numTweet}</span></p>
								<p><img src={heart} alt="heart" /><span>{props.numLike}</span></p>
								<p><img src={share} alt="share" /></p>
							</div>
						</div>
					 </div>
		)
	}

export default Post;
