import { AuthContext } from "context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext } from "react";
import { toast } from "react-toastify";

const onSignOut = async () => {
    try {
        const auth = getAuth(app);
        await signOut(auth);
        toast.success("로그아웃 되었습니다.");
    } catch (error: any) {
        toast.error(error?.code);
        console.log(error);
    }
}

export default function Profile(){
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const name = user?.displayName || "사용자";

    return(
        <div className="profile__box">
            <div className="flex__box-lg">
                <div className="profile__image" />
                <div>
                    <div className="profile__email">{email}</div>
                    <div className="profile__name">{name}</div>
                </div>
            </div>
            <div 
                role="presentation"  
                className="profile__logout" 
                onClick={onSignOut}
            >
                로그아웃
            </div>
        </div>
    );
}
