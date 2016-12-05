import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MenuSuperiorComponent } from './componentes/menu-superior/menu-superior.component';
import { MenuSuperiorMensagemComponent } from './componentes/menu-superior/menu-superior-mensagem.component';
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';

@NgModule({
  declarations: [
    AppComponent, MenuSuperiorComponent, MenuSuperiorMensagemComponent, ConteudoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
