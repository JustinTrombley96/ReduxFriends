import {
	FETCH_DELETE,
	FETCH_FRIEND,
	FETCH_SUCCESS,
	FETCH_LOGIN,
	FETCH_SAVED,
	FETCH_UPDATED,
	FETCH_ERROR,
} from '../actions';
const initialState = {
	deletingFriend  : false,
	fetchingFriends : false,
	friends         : [],
	loggingIn       : false,
	savingFriends   : false,
	updatingFriend  : false,
	error           : null,
};
export const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DELETE:
			return {
				...state,
				deletingFriend: true,
				fetchingFriends: false,
				loggingIn: false,
				savingFriends: false,
				updatingFriend: false,
				error: null,
			};

		case FETCH_FRIEND:
			return {
				...state,
				deletingFriend: false,
				fetchingFriends: true,
				loggingIn: false,
				savingFriends: false,
				updatingFriend: false,
				error: null,
			};

		case FETCH_SUCCESS:
			return {
				...state,
				deletingFriend: false,
				fetchingFriends: false,
				friends: action.payload,
				loggingIn: false,
				savingFriends: false,
				updatingFriend: false,
				error: null,
			};

		case FETCH_LOGIN:
			return {
				...state,
				deletingFriend: false,
				fetchingFriends: false,
				loggingIn: true,
				savingFriends: true,
				updatingFriend: false,
				error: null,
			};

		case FETCH_SAVED:
			return {
				...state,
				deletingFriend: false,
				fetchingFriends: false,
				loggingIn: false,
				savingFriends: true,
				updatingFriend: false,
				error: null,
			};

		case FETCH_UPDATED:
			return {
				...state,
				deletingFriend: false,
				fetchingFriends: false,
				loggingIn: false,
				savingFriends: false,
				updatingFriend: true,
				error: null,
			};

		case FETCH_ERROR:
			return {
				...state,
				deletingFriend: false,
				fetchingFriends: false,
				loggingIn: false,
				savingFriends: false,
				updatingFriend: false,
				error: 'BAM! BAM! BAM! You broke me.',
			};

		default:
			return state;
	}
};
