import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PegaDados} from './../../providers/pega-dados/pega-dados';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController, public pegaDados: PegaDados) {

  }

  testaPegaDados() : void {
    this.pegaDados.getCep('13020060')
     .then( (res) => {
        let json = res.json();
        console.log(json);
        if(res.status == 200){
          console.log('status: '+ res.status+' localidade: '+json.localidade);
        }
     }).catch( (err) => {
        console.log('erro: ' + err);
     });
  }
}
