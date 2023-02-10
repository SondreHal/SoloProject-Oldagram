const posts = [
	{
		name: 'Vincent van Gogh',
		username: 'vincey1853',
		location: 'Zundert, Netherlands',
		avatar: 'images/avatar-vangogh.jpg',
		image: 'images/post-vangogh.jpg',
		comment: 'just took a few mushrooms lol',
		likes: 21,
		liked: false,
		id: 0,
	},
	{
		name: 'Gustave Courbet',
		username: 'gus1819',
		location: 'Ornans, France',
		avatar: 'images/avatar-courbet.jpg',
		image: 'images/post-courbet.jpg',
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
		liked: false,
		id: 1,
	},
	{
		name: 'Joseph Ducreux',
		username: 'jd1735',
		location: 'Paris, France',
		avatar: 'images/avatar-ducreux.jpg',
		image: 'images/post-ducreux.jpg',
		comment: 'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
		likes: 152,
		liked: false,
		id: 2,
	},
];

const initApp = () => {
	let main = document.querySelector('main');
	const fragment = document.createDocumentFragment();

	// DYNAMIC HTML
	for (let i = 0; i < posts.length; i++) {
		const { name, username, location, avatar, image, comment, likes, id } = posts[i];
		const article = document.createElement('article');

		const user = document.createElement('div');
		const userAvatar = document.createElement('img');
		const userTextWrapper = document.createElement('div');
		const userTextName = document.createElement('p');
		const userTextLocation = document.createElement('p');

		const postImgWrapper = document.createElement('div');
		const postImg = document.createElement('img');
		const postImgLike = document.createElement('img');

		const interactSection = document.createElement('div');
		const interactIcons = document.createElement('div');
		const interactIconHeart = document.createElement('img');
		const interactIconChat = document.createElement('img');
		const interactIconShare = document.createElement('img');
		const postLikes = document.createElement('p');
		const postComment = document.createElement('p');
		const postCommentSpan = document.createElement('span');

		// WRAPPER
		fragment.append(article);
		article.append(user, postImgWrapper, interactSection);

		// POST USER
		user.classList = 'post_user';
		user.append(userAvatar, userTextWrapper);
		// POST USER AVATAR
		userAvatar.src = avatar;
		userAvatar.alt = 'post user avatar';
		userAvatar.width = '34';
		userAvatar.height = '34';
		userAvatar.classList = 'user_avatar';
		// POST USER TEXT WRAPPER
		userTextWrapper.append(userTextName, userTextLocation);
		// POST USER NAME/LOCATION
		userTextName.classList = 'text_bold';
		userTextName.textContent = name;
		userTextLocation.textContent = location;

		// POST IMG WRAPPER
		postImgWrapper.classList = 'post_img_wrapper';
		postImgWrapper.append(postImg, postImgLike);
		// POST IMG
		postImg.src = image;
		postImg.alt = 'post image';
		postImg.classList = 'post_img';
		postImg.id = 'post_img' + id;
		// POST IMG HEART ICON
		postImgLike.src = 'images/icon-heart-filled.svg';
		postImgLike.alt = 'post image heart';
		postImgLike.classList = 'post_img_icon_heart';
		postImgLike.id = 'post_img_icon_heart' + id;

		// INTERACT SECTION
		interactSection.classList = 'post_interact_section';
		interactSection.append(interactIcons, postLikes, postComment);
		// ICONS WRAPPER
		interactIcons.classList = 'post_interact_icons';
		interactIcons.append(interactIconHeart, interactIconChat, interactIconShare);
		// ICONS
		interactIconHeart.src = 'images/icon-heart.svg';
		interactIconHeart.alt = 'heart icon';
		interactIconHeart.width = '24';
		interactIconHeart.height = '24';
		interactIconHeart.id = 'post_icon_like' + id;

		interactIconChat.src = 'images/icon-chat.svg';
		interactIconChat.alt = 'chat bubble icon';
		interactIconChat.width = '24';
		interactIconChat.height = '24';

		interactIconShare.src = 'images/icon-share.svg';
		interactIconShare.alt = 'paper plane icon';
		interactIconShare.width = '24';
		interactIconShare.height = '24';

		// LIKES
		postLikes.textContent = likes + ' likes';
		postLikes.classList = 'post_text text_bold';
		postLikes.id = 'post_likes' + id;

		// COMMENTS
		postComment.classList = 'post_text'; // DOESN'T DO ANYTHING, BUT IF THERE MORE THAN ONE COMMENT IT WOULD GIVE MARGIN BOTTOM TO ALL BUT LAST COMMENT
		postComment.append(postCommentSpan, ' ', comment);
		// BOLD SPAN COMMENT TEXT
		postCommentSpan.classList = 'text_bold';
		postCommentSpan.textContent = username;
	}
	main.append(fragment);

	for (let i = 0; i < posts.length; i++) {
		let { likes, liked, id } = posts[i];
		const postImage = document.getElementById('post_img' + id);
		const postImageIcon = document.getElementById('post_img_icon_heart' + id);

		const postLikeIcon = document.getElementById('post_icon_like' + id);
		const postLikes = document.getElementById('post_likes' + id);

		// WHEN POST IS LIKED
		const likePost = () => {
			if (liked === false) {
				liked = true;
				likes += 1;
				// ADD A LIKE
				postLikes.textContent = likes + ' likes';
				// TO SHOW USER THAT POST WAS LIKED
				postLikeIcon.classList = 'post_liked';
				postImageIcon.id = 'post_img_icon_heart';
			} else {
				liked = false;
				likes -= 1;
				// REMOVE THE USER LIKE + THE VISUAL ASPECT OF A LIKE
				postLikes.textContent = likes + ' likes';
				postLikeIcon.classList = '';
				postImageIcon.id = '';
			}
		};
		// ADD LIKE WHEN DOUBLE-CLICKING POST
		postImage.addEventListener('dblclick', () => {
			likePost();
		});
		// ADD LIKE WHEN CLICKING LIKE
		postLikeIcon.addEventListener('click', () => {
			likePost();
		});
	}
};
document.addEventListener('DOMContentLoaded', initApp);
