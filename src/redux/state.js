let rerenderEntireTree = () => {
    console.log('state has changed');
}

let state = {
    profilePage: {
        posts: [{id: 1, post: 'Hi, how are you?', likes: 15}, 
            {id: 2, post: "It's my first post", likes: 15},
            {id: 3, post: "Belissimo", likes: 10},
            {id: 4, post: "Good to start something new", likes: 25}],
        newPostText: ''
    },
    
    dialogsPage: {
        messages: [{id: 0, text: 'Hello'}, 
               {id: 1, text: 'How is your programming'}, 
               {id: 2, text: 'Yo'}, 
               {id: 3, text: 'Yo'}, 
               {id: 4, text: 'Yo'}],

        dialogs: [{id: 1, name: 'Sanek'}, 
                {id: 2, name: 'Alyona'}, 
                {id: 3, name: 'Vovchik'}, 
                {id: 4, name: 'papa'},
                {id: 5, name: 'Vlad'},
                {id: 6, name: 'Vasya'},
                {id: 7, name: 'Dima'}]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likes: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state); 
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state); 
}

export default state;