//External imports
import { useEffect, useRef } from 'react'

  const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })

const GoogleAuth = ({onSuccess}) => {

  const googleButton = useRef(null);

  useEffect(() => {
    const src = 'https://accounts.google.com/gsi/client'
    const google_client_id = process.env.GOOGLE_CLIENT_ID

    loadScript(src)
      .then(() => {
        /*global google*/
        console.log(google)
        google.accounts.id.initialize({
          client_id: google_client_id,
          callback: handleCredentialResponse,
        })
        google.accounts.id.renderButton(
          googleButton.current, 
          { theme: 'outline', size: 'large' } 
        )
      })
      .catch(console.error)

    return () => {
      const scriptTag = document.querySelector(`script[src="${src}"]`)
      if (scriptTag) document.body.removeChild(scriptTag)
    }
  }, [])

  function handleCredentialResponse(response) {    
    onSuccess(response);
  }

  return (
    <div ref={googleButton}></div>
  )
}

export default GoogleAuth


/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
export function oauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': process.env.GOOGLE_CLIENT_ID,
                  'redirect_uri': process.env.PUBLIC_URL,
                  'response_type': 'token',
                  'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                  'include_granted_scopes': 'true',
                  'state': 'pass-through value'};
  
    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

