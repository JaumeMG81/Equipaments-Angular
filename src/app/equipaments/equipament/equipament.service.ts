import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EquipamentService {

	apiurl = "http://demos.canigo.ctti.gencat.cat/demo-equipaments/AppJava/equipaments/";
	apiurl2 = "http://demos.canigo.ctti.gencat.cat/";
	//url = "http://equipaments-cscanigo.rhcloud.com/services/equipaments/";

  	constructor(private http: Http) { }

    // L L I S T A R   T O T S   E L S   R E G I S T R E S   D E   L A   B B D D
  	getAll(query, page, itemsperpage) {
  		page = isNaN(page) ? 1 : page;
  		query = query ? "&filter=" + query : "";

  		return this.http
  				   .get(this.apiurl + "?rpp=" + itemsperpage + "&page=" + page + query)
  				   .map(res => res.json());
  	}

    // C R E A R   U N   N O U   E Q U I P A M E N T
    add(equipament) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http
                 .post(this.apiurl, JSON.stringify(equipament), options)
                 .map(res => res.json());
    }

    // M O D I F I C A R   U N   E Q U I P A M E N T
    update(equipament) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.put(this.apiurl + equipament.id, equipament, {headers:headers}).map(res => res.json());
    }

    // E S B O R R A R   U N   E Q U I P A M E N T
    del(equipament) {
      return this.http.delete(this.apiurl + equipament.id)
                 .map(res => res.text());
    }
}