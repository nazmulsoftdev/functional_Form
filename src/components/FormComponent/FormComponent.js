import React,{useRef} from 'react'
import InputComponent from '../InputComponent/InputComponent';
function FormComponent() {

    const userEmail = useRef(null);
    const userPass = useRef(null);


    const HandleSubmit = (even) => {
        
        even.preventDefault();

        console.log(userEmail.current.value);
        console.log(userPass.current.value)

        userEmail.current.value = null;
        userPass.current.value = null;

    }

    return (
        <div className="form_wrap">
            <form onSubmit={HandleSubmit}>
                <InputComponent type="email" ref={userEmail} placeholder="User Name" required="required" />
                <InputComponent type="password" ref={userPass} placeholder="Password" required="required" />
                <InputComponent type="submit" value="Login" />
            </form>
        </div>
    )
}

export default FormComponent
