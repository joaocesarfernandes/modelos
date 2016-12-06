import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import { Usuario } from '../../usuario';

@Component({
    selector: 'conteudo',
    templateUrl: './conteudo.component.html'
})
export class ConteudoComponent {
    springUrl = 'http://localhost:8080/';
    conteudo;

    constructor(private _http:Http) { 
        this._http.get(this.springUrl)
                    .map(res => <Usuario>res.json())
                    .subscribe(usu => this.conteudo = usu,
                            error => console.log(error));
    }

}