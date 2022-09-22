(function IndexInit(){

    const xhrAnnouncementJSON = function GetAnnouncementJSON(_readyCallback) {

        let _xhr = new XMLHttpRequest();

            _xhr.responseType = "json";

            _xhr.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {
                
                    // Typical action to be performed when the document is ready:
                    typeof _readyCallback === "function" ? _readyCallback(_xhr.responseXML) : 
                        console.error("TypeError: _readyCallback type not equal to function. Found type, " + typeof _readyCallback);

                }

            };

            _xhr.open("GET", "announcementsJSON.json", true);
            _xhr.send();

    }

    class AnnouncementsIndex extends HTMLElement {
        constructor() {
            super();

            

        }
    }

})();