import { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from 'react-google-login';

export default function SocialLogin() {
    const handleFacebookLogin = (response: any) => {
        console.log(response);
    };
    const [userName, setUserName] = useState('');

    const handleGoogleLoginSuccess = (response: any) => {
        console.log(response);
        setUserName(response.profileObj.name);
    };

    const handleGoogleLoginFailure = (error: any) => {
        console.log(error);
    };
    const [profile, setProfile] = useState(null);
    console.log('profile', profile)
    return (
        <div>
            <ul className="flex justify-between mb-12 -mx-2">
                <li className="w-full px-2">
                    <a
                        href="#"
                        className="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
                    >
                        <img src="/images/fb.svg" />
                    </a>
                    {/* <FacebookLogin
                      appId="246500391469096" //APP ID NOT CREATED YET
                      fields="name,email,picture"
                      callback={responseFacebook}
                    /> */}
                    <FacebookLogin
                        appId="246500391469096"
                        // autoLoad={true}
                        fields="email"
                        callback={handleFacebookLogin}
                    />
                </li>
                <li className="w-full px-2">
                    <a
                        href="#"
                        className="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90"
                    >
                        <img src="/images/tw.svg" />
                    </a>
                </li>
                <li className="w-full px-2">
                    <a
                        href="#"
                        className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                    >
                        <img src="/images/tw.svg" />
                    </a>
                    <GoogleLogin
                        clientId="713814789034-175url5i9ld0ljvqllglvvmcbahl1741.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={handleGoogleLoginSuccess}
                        onFailure={handleGoogleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </li>
            </ul>
        </div>
    )
}
