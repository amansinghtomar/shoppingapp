import {
	emailValidate,
	mobileValidator,
	nameValidator,
	passwordValidator,
	rePasswordValidator,
} from '../../utils/index';

const signUpvalidations = {
	email: function ({ email }) {
		return emailValidate(email);
	},
	password: function ({ password }) {
		return passwordValidator(password);
	},
	repassword: function ({ repassword, password }) {
		return rePasswordValidator(repassword, password);
	},
	name: function ({ name }) {
		return nameValidator(name);
	},
	mobile: function ({ mobile }) {
		return mobileValidator(mobile);
	},
};

export default signUpvalidations;
