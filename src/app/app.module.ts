import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

// Importe os componentes
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component'; // HomeComponent importado aqui
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Certifique-se de importar as rotas aqui
    HomeComponent, // HomeComponent deve ser importado diretamente aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
