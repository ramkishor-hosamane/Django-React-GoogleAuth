import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import fbLogin from './services/fbLogin';
import googleLogin from './services/googleLogin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

function App() {
  const responseFacebook = async (response) => {
    let fbResponse = await fbLogin(response.accessToken);
    console.log(fbResponse);
    console.log(response);
  };

  const responseGoogle = async (response) => {
    console.log("Got back from google ")
    console.log(response)
    let googleResponse = await googleLogin(response.accessToken);
    console.log(googleResponse);
    console.log(response);
  };
  return (
    <div className="App">
      <h1>Login with Facebook & Google</h1>

      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />
{/* 
      <GoogleLogin
        clientId="577351510494-mud73dpt6c9urfna06maak54ikps2bct.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        //Extra things
        redirectUri="http://localhost:8000/accounts/google/login/callback/"

      /> */}

<GoogleLogin
 clientId= "577351510494-mud73dpt6c9urfna06maak54ikps2bct.apps.googleusercontent.com"
 buttonText="LOGIN WITH GOOGLE"
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}

  redirectUri="http://localhost:8000/accounts/google/login/callback/"
  responseType="code"
  accessType="offline"
  scope="profile email"
  cookiePolicy={'single_host_origin'}
/>
    </div>
  );
}

export default App;
