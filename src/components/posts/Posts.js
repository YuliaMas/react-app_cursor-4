import React from 'react';
import Post from './Post';

const ANAKIN_IMAGE =
		"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE =
		"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const RAY_Y_IMAGE = "https://vignette.wikia.nocookie.net/starwars/images/0/0b/Rey_on_Ahch-To.png/revision/latest?cb=20160417023349" ;
const LEYA_IMAGE = "https://vignette.wikia.nocookie.net/starwars/images/f/f1/Leia_Organa_TROS.png/revision/latest/scale-to-width-down/500?cb=20200102034101" ;

const postsContent = [
	{
		author: {
			name: "Anakin Skywalker",
			photo: ANAKIN_IMAGE,
			nickname: "@dart_vader"
		},
		content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
		image: RAY_IMAGE,
		date: "26 февр.",
		numComment: 482,
		numLike: 146,
		numTweet: 887,
	},
	{
		author: {
			name: "Leia Organa",
			photo: LEYA_IMAGE,
			nickname: "@leya_organa"
		},
		content: '"Rey. May the Force be with you."',
		image: RAY_Y_IMAGE,
		date: "Oct. 30",
		numComment: 325,
		numLike: 624,
		numTweet: 159,
	}
]

function Posts() {
	return (
			<div className={'wrapper'}>
				{ postsContent.map(postContent => <Post {...postContent} />) }
			</div>
	);
}

export default Posts;