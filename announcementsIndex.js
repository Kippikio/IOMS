(function AnnouncementIndexInit() {

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
            
            let jsnData = xhrAnnouncementJSON(function announcmentDataCallback(data) {

                console.log(data);

            });

        }

        connectedCallback() {

            

        }

        get announcementContent() {
            return this.querySelector('announcement-article') || false;
        }

        get announcementHeader() {
            return this.querySelector("header[data-header='true']") || false;
        }

        get announcementList() {
            return this.querySelector("select[data-selection='true']") || false;
        }



    }

    document.onreadystatechange = function ArticleIndexReady(ev) {

        if(document.readyState === "complete") { 
            customElements.define("announcements-index", AnnouncementsIndex);
        }

    };

})();