const posts = [
	{
		name: 'Vincent van Gogh',
		username: 'vincey1853',
		location: 'Zundert, Netherlands',
		avatar: 'images/avatar-vangogh.jpg',
		image: 'images/post-vangogh.jpg',
		comment: 'just took a few mushrooms lol',
		likes: 21,
	},
	{
		name: 'Gustave Courbet',
		username: 'gus1819',
		location: 'Ornans, France',
		avatar: 'images/avatar-courbet.jpg',
		image: 'images/post-courbet.jpg',
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: 'Joseph Ducreux',
		username: 'jd1735',
		location: 'Paris, France',
		avatar: 'images/avatar-ducreux.jpg',
		image: 'images/post-ducreux.jpg',
		comment: 'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
		likes: 152,
	},
];

const initApp = () => {
	let main = document.querySelector('main');
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < posts.length; i++) {
		const { name, username, location, avatar, image, comment, likes } = posts[i];
		const article = document.createElement('article');
		const postUser = document.createElement('div');
		const postImage = document.createElement('img');
		const postInteractSection = document.createElement('div');
		const postUserAvatar = document.createElement('img');
		const postUserTextWrapper = document.createElement('div');
		const postUserTextName = document.createElement('p');
		const postUserTextLocation = document.createElement('p');

		// DYNAMIC HTML
		// WRAPPER (ARTICLE)
		fragment.append(article);
		article.append(postUser, postImage, postInteractSection);
		postUser.classList = 'post_user';

		// POST USER
		postUser.append(postUserAvatar, postUserTextWrapper);
		// IMG AVATAR
		postUserAvatar.src = avatar;
		postUserAvatar.alt = 'post user avatar';
		postUserAvatar.width = '34';
		postUserAvatar.classList = 'post_user_avatar';
		// TEXT WRAPPER
		postUserTextWrapper.append(postUserTextName, postUserTextLocation);
		// TEXT
		postUserTextName.classList = 'text_bold';
		postUserTextName.textContent = name;
		postUserTextLocation.textContent = location;

		// POST IMAGE
		postImage.src = image;
		postImage.alt = 'post_image';
		postImage.classList = 'post_image';

		dynamicPost = `
    <article>
		<div class="post_interact_section_wrapper">
			<!-- INTERACT ICONS -->
			<div class="icons">
				<img
					src="images/icon-heart.png"
					alt="heart icon"
					width="28"
				/>
				<img
					src="images/icon-comment.png"
					alt="chat bubble icon"
					width="28"
				/>
				<img
					src="images/icon-dm.png"
					alt="paper plane icon"
					width="28"
				/>
			</div>

			<!-- POST LIKES -->
			<p class="post_text text_bold">${likes} likes</p>

			<!-- POST COMMENTS -->
			<p class="post_text">
				<span class="text_bold">${username}</span>
				${comment}
			</p>
		</div>
	</article>
    `;
	}
	main.append(fragment);
};
document.addEventListener('DOMContentLoaded', initApp);
