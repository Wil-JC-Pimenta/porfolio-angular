import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Certifique-se de que o caminho está correto

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeComponent, // HomeComponent deve ser importado aqui diretamente
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
