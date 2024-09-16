import fetchService from "./FetchService";


export class CV {
    constructor(cv = {}) {
        this.name = null;
        this.birth = null;
        this.photo = null;
        this.poste = null;
        this.tel = null;
        this.adresse = null;
        this.permis = null;
        this.email = null;
        this.links = [];
        this.skills = [];
        this.xps = [];
        this.formations = [];
        this.loisirs = [];


        
        this.setProperties(cv);
    }

    setProperties(properties) {
        Object.assign(this, properties);
    }

    getFormFields() {
        return {
        };
    }
    filteredDatas(){
        const filtered = {};
        Object.keys(this.getFormFields()).forEach(key => {
            if (this[key] !== undefined) {
                filtered[key] = this[key];
            }
        });
        return filtered
    }

    async get(name){
        this.setProperties(await fetchService.get(name));
    }

    async create() {

    }
    async update(){
 
    }
    async delete(){

    }
}
