import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenubarComponent } from './mainform/menubar/menubar.component';
import { AdvComponent } from './mainform/adv/adv.component';
import { QuizComponent } from './mainform/quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'menumain', component: MenubarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    AdvComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes, { enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
