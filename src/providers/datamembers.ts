import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Datamembers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Datamembers {

  constructor(public http: Http) {
  }

  Iniciar(pass,email) {
    var url = 'http://cuneate-beacon.000webhostapp.com/login3.php?&email='+email+'&pass='+pass;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }


  InsertMember(nom,email,pass,edad)
  {
      var url = 'http://cuneate-beacon.000webhostapp.com/insert.php?&nom='+nom+'&email='+email+'&pass='+pass+'&edad='+edad;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  

  EditMember(id,firstname,lastename,email,mobile,city,state,country,postalcode)
  {
    var url = 'http://nipc.esy.es/nip/backend/index.php?r=members/editmembers&firstname='+firstname+'&lastname='+lastename+'&email='+email+'&mobile='+mobile+'&city='+city+'&state='+state+'&country='+country+'&postalcode='+postalcode+'&id='+id;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  searchMembers(name) {
    var url = 'http://nipc.esy.es/nip/backend/index.php?r=members/searchmembers&name='+name ;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
