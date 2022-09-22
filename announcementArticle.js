(function AnnouncementArticleInit(){

    const xhrAnnouncementJSON = function GetAnnouncementJSON() {

        

    }

    class AnnouncementArticle extends HTMLElement {

        static get observedAttributes() {
            return [ /*array of attribute names for change tracking*/ ];
        }

        constructor() {
            super();
        }

        connectedCallback() {

        }

        attributeChangedCallback(name, oldValue, newValue) {
            
        }

        get current() {
            return this.getAttribute("current");
        }
        set current(_current) {
            this.setAttribute("current", _current);
        }

    }

    customElements.define("announcement-article", announcementArticle);

})();