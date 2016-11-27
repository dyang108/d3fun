from ..secret import os
import urllib3, json, base64, certifi

# Create a HTTP connection pool manager
twitter_manager = urllib3.PoolManager(cert_reqs='CERT_REQUIRED', ca_certs=certifi.where())
# Set the variable to Twitter OAuth 2 endpoint
oauth_url = 'https://api.twitter.com/oauth2/token' 

# Set the HTTP request headers, including consumer key and secret
http_headers = {'Authorization': "Basic %s" % base64.b64encode("%s:%s" % (os.environ['TWITTER_API_KEY'], os.environ['TWITTER_API_SECRET'])), 'Content-Type': 'application/x-www-form-urlencoded'} 

# Set the payload to the required OAuth grant type, in this case client credentials
request_body = "grant_type=client_credentials" 

# Send the request
response = twitter_manager.urlopen("POST", oauth_url, headers=http_headers, body=request_body)

# Read the response as JSON
app_token = json.loads(response.data)

twitter_header = {'Authorization': 'Bearer %s' % app_token['access_token']}
