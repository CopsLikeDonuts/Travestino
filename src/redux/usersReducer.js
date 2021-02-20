const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1,
        //  followed: false, 
        //  fullName: 'Dmitriy', 
        //  status: 'I am a boss', 
        //  location: {
        //     city: 'Minsk',
        //     country: 'Belarus'
        //     } 
        // },
        // {id: 2,
        //  followed: true, 
        //  fullName: 'Sasha', 
        //  status: 'I love porgramming', 
        //  location: {
        //     city: 'Kyiv',
        //     country: 'Ukraine'
        //        } 
        //    },
        // {id: 3,
        //  followed: true, 
        //  fullName: 'Petro', 
        //  status: 'Status', 
        //  location: {
        //     city: 'Odessa',
        //     country: 'Ukraine'
        //     } 
        //    },
        // {id: 4,
        //  followed: false, 
        //  fullName: 'John', 
        //  status: 'Want to meet new friends', 
        //  location: {
        //     city: 'New-York',
        //     country: 'USA'
        //        } 
        //    },
    ]

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { 
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                }),  
            }
        case UNFOLLOW:
            return { 
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                }),  
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS});

export default usersReducer;