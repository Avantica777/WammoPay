class Config {
    constructor() {
        this.config = {}
        this.configReady = false;
        this.BACKEND_API_URL = "https://api.wammopay.com/"

        // stripe
        this.STRIPE_PUBLIC_KEY = "pk_test_xxxx"
        this.STRIPE_SECRET_KEY = "sk_test_xxxx"

        // twilio
        this.TWILIO_ACCOUNT_SID = "AC0000"
        this.TWILIO_AUTH_TOKEN = "1c0000"
        this.TWILIO_PROJECT_NAME = "Wammopay"
        this.TWILIO_CHAT_SERVICE_SID = "IS0000"

        this.convertToHtml = (item)=>{
        	if(item){
	        	item = item.replace(/<italic>/g, "<i>");
	        	item = item.replace(/<\/italic>/g, "</i>");
	        	item = item.replace(/<bold>/g, "<b>");
	        	item = item.replace(/<\/bold>/g, "</b>");
	        	item = item.replace("__action__", "");
        	}
        	return item;
        }
    }
}

export default (new Config());