import React, {Component} from 'react';
import './photos.css';
import img1 from './img/1.jpg';
import img2 from './img/12.jpg';
import img3 from './img/287_3008x2000_all-free-download.com_3476674.jpg';
import img4 from './img/autumn_background_208623.jpg';
import img9 from './img/autumn_in_the_world_of_mountains_513525.jpg';
import img6 from './img/background_with_flower_and_butterfly_201511.jpg';
import img7 from './img/blackberry_background_186066.jpg';
import img8 from './img/blue_grapes_516586.jpg';
import img5 from './img/conkers_leaf_182689.jpg';
import img10 from './img/dinner_204546.jpg';
import img11 from './img/GM_0002.JPG';
import img12 from './img/idyllic_beach_187063.jpg';
import img13 from './img/ivy_on_house_in_autumn_192599.jpg';
import img14 from './img/leaves_decoration_background_187453.jpg';
import img15 from './img/never_give_up_514099.jpg';
import img16 from './img/peeled_mandarin_187517.jpg';
import img17 from './img/raspberry_background_186058.jpg';
import img18 from './img/warming_autumn_rays_513747.jpg';
import img19 from './img/waterdrop_background_201564.jpg';
import img20 from './img/halloween_autumn_theme_192437.jpg';

const imgArr = [
	{
		photo: img1,
		name: "heard"
	},
	{
		photo: img2,
		name: "stone"
	},
	{
		photo: img3,
		name: "apples"
	},
	{
		photo: img4,
		name: "leaf"
	},
	{
		photo: img5,
		name: "conkers_leaf"
	},
	{
		photo: img6,
		name: "butterfly"
	},
	{
		photo: img7,
		name: "blackberry"
	},
	{
		photo: img8,
		name: "blue_grapes"
	},
	{
		photo: img9,
		name: "autumn_in_the_world_of_mountains"
	},
	{
		photo: img10,
		name: "dinner"
	},
	{
		photo: img11,
		name: "sea"
	},
	{
		photo: img12,
		name: "idyllic_beach"
	},
	{
		photo: img13,
		name: "ivy_on_house_in_autumn"
	},
	{
		photo: img14,
		name: "leaves_decoration"
	},
	{
		photo: img15,
		name: "never_give_up"
	},
	{
		photo: img16,
		name: "peeled_mandarin"
	},
	{
		photo: img17,
		name: "raspberry"
	},
	{
		photo: img18,
		name: "waterdrop"
	},
	{
		photo: img19,
		name: "peeled_mandarin"
	},
	{
		photo: img20,
		name: "halloween_autumn"
	},
];

class Photos extends Component {
	render() {
		return (
			<div className="photos-wrapper">
					{imgArr.map((img, index) => {
							return (
								<div className="photo-content" key={index}>
									<img
											className="photo"
											src={img.photo}
											alt={img.name}
											key={index}
									/>
								</div>
							)
						})
					}
			</div>
		)
	}
}

export default Photos;