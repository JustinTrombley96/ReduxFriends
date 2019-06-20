import axios from 'axios';

export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	axios.post('', creds).then(res => {
		local;
	});
};
