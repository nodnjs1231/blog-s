import { Link } from "react-router-dom";

export default function LoginForm(){
    
    return(
        <form action="/post" method="POST" className="form form--lg">
            <h1 className="form__title">로그인</h1>
            <div className="form__block">
                <label htmlFor="email">이메일</label>
                <input type="text" name="email" id="email" required />
            </div>
            <div className="form__block">
                <label htmlFor="password">비밀번호</label>
                <input type="text" name="password" id="password" required />
            </div>
            <div className="form__block">
                계정이없으신가요? 
                <Link to={"/signup"} className="form__link">
                    회원가입
                </Link>
            </div>
            <div className="form__block">
                <button type="submit" className="form__btn--submit">제출</button>
            </div>
        </form>
    );
}