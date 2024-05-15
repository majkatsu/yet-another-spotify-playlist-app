
 // OAuth Setup
 async function Auth() {

    
    const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }
  
    const codeVerifier  = generateRandomString(64);

      const sha256 = async (plain) => {
      const encoder = new TextEncoder()
      const data = encoder.encode(plain)
      return window.crypto.subtle.digest('SHA-256', data)
    }
  
    const base64encode = (input) => {
      return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    }
    
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);



    const clientId = 'ce95dd2f8b4e43e596dc09b7be0876d7';
    const redirectUri = 'http://localhost:8080';

    const scope = 'playlist-modify-public, playlist-modify-private';
    const authUrl = new URL("https://accounts.spotify.com/authorize")

    // generated in the previous step
    window.localStorage.setItem('code_verifier', codeVerifier);

    const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString()
  
 

}