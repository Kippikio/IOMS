(function AnnouncementArticleInit(){

    function GetAnnouncementJSON() {

        function GetAnnouncementJSON(_readyCallback) {

            let _xhr = new XMLHttpRequest();
    
            _xhr.responseType = "json";

            _xhr.onreadystatechange = function ReadyStateChanged() {

                if (this.readyState == 4 && this.status == 200) {
                
                    typeof _readyCallback === "function" ? _readyCallback(_xhr.responseXML) : 
                        console.error("TypeError: _readyCallback type not equal to function. Found type, " + typeof _readyCallback);

                }

            }

            _xhr.open("GET", "announcementsJSON.json", true);
            _xhr.send();
    
        }
    }

    class AnnouncementArticle extends HTMLElement {

        static get observedAttributes() {
            return [ "current" ];
        }
        constructor() {
            super();
            console.log("HELLO");
            GetAnnouncementJSON(function XHRAnnouncemntCallback(_data) {

                console.log(this);                

            });

        }
        connectedCallback() {

        }
        attributeChangedCallback(name, oldValue, newValue) {
            
            switch(name) {
                case "current":
                    console.log(newValue);
                    break;
            }

        }

        get current() {
            return this.getAttribute("current");
        }
        set current(_current) {
            this.setAttribute("current", _current);
        }

    }

    customElements.define("announcement-article", AnnouncementArticle);

})();
