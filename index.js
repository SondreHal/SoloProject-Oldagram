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

		const postImg = document.createElement('img');

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
		article.append(user, postImg, interactSection);

		// USER
		user.classList = 'post_user';
		user.append(userAvatar, userTextWrapper);
		// IMG AVATAR
		userAvatar.src = avatar;
		userAvatar.alt = 'post user avatar';
		userAvatar.width = '34';
		userAvatar.height = '34';
		userAvatar.classList = 'post_user_avatar img_avatar';
		// TEXT WRAPPER
		userTextWrapper.append(userTextName, userTextLocation);
		// TEXT
		userTextName.classList = 'text_bold';
		userTextName.textContent = name;
		userTextLocation.textContent = location;

		// POST IMG
		postImg.src = image;
		postImg.alt = 'post_image';
		postImg.classList = 'post_image';
		postImg.id = 'image_like' + id;

		// INTERACT SECTION
		interactSection.classList = 'interact_section';
		interactSection.append(interactIcons, postLikes, postComment);
		// ICONS WRAPPER
		interactIcons.classList = 'icons';
		interactIcons.append(interactIconHeart, interactIconChat, interactIconShare);
		// ICONS
		interactIconHeart.src = 'images/icon-heart.svg';
		interactIconHeart.alt = 'heart icon';
		interactIconHeart.width = '24';
		interactIconHeart.height = '24';
		interactIconHeart.id = 'icon_like' + id;

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
		const postImage = document.getElementById('image_like' + id);
		const postLikeIcon = document.getElementById('icon_like' + id);
		const postLikes = document.getElementById('post_likes' + id);

		// ADD LIKE WHEN DOUBLE-CLICKING POST
		postImage.addEventListener('dblclick', () => {
			if (liked === false) {
				liked = true;
				likes += 1;
				postLikes.textContent = likes + ' likes';
				postLikeIcon.classList = 'post_liked';
			} else {
				liked = false;
				likes -= 1;
				postLikes.textContent = likes + ' likes';
				postLikeIcon.classList = '';
			}
		});
		// ADD LIKE WHEN CLICKING LIKE
		postLikeIcon.addEventListener('click', () => {
			if (liked === false) {
				liked = true;
				likes += 1;
				postLikes.width = '30';
				postLikes.textContent = likes + ' likes';
				postLikeIcon.classList = 'post_liked';
			} else {
				liked = false;
				likes -= 1;
				postLikes.textContent = likes + ' likes';
				postLikeIcon.classList = '';
			}
		});
	}
};
document.addEventListener('DOMContentLoaded', initApp);
