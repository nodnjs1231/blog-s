import { useState } from "react";
import { Link } from "react-router-dom";
import {app} from "firebaseApp";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

interface signFormData {
    email: string;
    password: string;
    password_confirm: string;
}

export default function SignupForm() {
    const [error, setError] = useState<string>("");
    const [signData, setSignData] = useState<signFormData>({
        email: "",
        password: "",
        password_confirm: ""
    });

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const auth = getAuth(app);
            await createUserWithEmailAndPassword(auth, signData.email, signData.password);
        } catch (error){
            console.log(error);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        //input validate
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
                setError("비밀번호는 8자리 이상으로 입력해주세요");
            }else if(signData.password_confirm?.length > 0 && value !== signData.password_confirm){
                setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요");
            }else{
                setError("");
            }
        }

        if(name == "password_confirm"){
            if(value?.length < 8){
                setError("비밀번호는 8자리 이상으로 입력해주세요");
            }else if(signData.password_confirm?.length > 0 && value !== signData.password_confirm){
                setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요");
            }else{
                setError("");
            }
        }

        setSignData({...signData,[name]: value});
    }

    return(
        <form onSubmit={onSubmit} className="form form--lg">
            <h1 className="form__title">회원가입</h1>
            <div className="form__block">
                <label htmlFor="email">이메일</label>
                <input type="text" name="email" id="email" required onChange={onChange}/>
            </div>
            <div className="form__block">
                <label htmlFor="password">비밀번호</label>
                <input type="text" name="password" id="password" required onChange={onChange}/>
            </div>
            <div className="form__block">
                <label htmlFor="password_confirm">비밀번호 확인</label>
                <input type="text" name="password_confirm" id="password_confirm" required onChange={onChange}/>
            </div>
            {error && error?.length > 0 && (
                <div className="form__block">
                    <div className="form__error">{error}</div>
                </div>
            )}
            <div className="form__block">
                계정이 이미 있으신가요?
                <Link to={"/login"} className="form__link">
                    로그인하기
                </Link>
            </div>
            <div className="form__block">
                <button type="submit" className="form__btn--submit" disabled={error?.length > 0}>제출</button>
            </div>
        </form>
    )
};