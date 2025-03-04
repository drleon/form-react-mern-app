
const ValidateInfo = values => {
    let errors = {};
    if (!values.firstname) {
        errors.firstname = "Firstname required"
    } else if (values.firstname.length < 3) {
        errors.firstname = "first name need to be more than three characters "
    }

    //surname
    if (!values.surname) {
        errors.surname = "surname required"
    }
    //email
    if (!values.email) {
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    return errors;


}

export default ValidateInfo;
