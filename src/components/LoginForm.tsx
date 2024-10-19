import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface loginData {
    email: string;
    password: string;
}

export default function LoginForm(){
    const [error, setError] = useState<string>("");
    const [loginData, setLoginData] = useState<loginData>({email:"", password: ""});
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const auth = getAuth(app);
            await signInWithEmailAndPassword(auth, loginData.email, loginData.password);

            toast.success("로그인 성공했습니다");
            navigate("/");
        } catch (error: any) {
            toast.error(error?.code);
            console.log(error);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        //valdiate
        if(name === "email"){
            const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!value?.match(validRegex)){
                setError("이메일 형식이 올바르지 않습니다.");
            } else {
                setError("");
            }
        }

        if(name === "password"){
            if(value?.length < 8){
                setError("비밀번호는 8자리 이상입니다");
            }else{
                setError("");
            }
        }

        setLoginData({
            ...loginData,
            [name]: value
        });
    }
    
    return(
        <form onSubmit={onSubmit} className="form form--lg">
            <h1 className="form__title">로그인</h1>
            <div className="form__block">
                <label htmlFor="email">이메일</label>
                <input type="text" name="email" id="email" required value={loginData.email} onChange={onChange}/>
            </div>
            <div className="form__block">
                <label htmlFor="password">비밀번호</label>
                <input type="password" name="password" id="password" required value={loginData.password} onChange={onChange}/>
            </div>
            {error && error?.length > 0 && (
                <div className="form__block">
                    <div className="form__error">{error}</div>
                </div>
            )}
            <div className="form__block">
                계정이없으신가요? 
                <Link to={"/signup"} className="form__link">
                    회원가입
                </Link>
            </div>
            <div className="form__block">
                <button type="submit" className="form__btn--submit" disabled={error?.length > 0}>제출</button>
            </div>
        </form>
    );
}
