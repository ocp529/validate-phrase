import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhrasesComponent } from './components/phrases/phrases.component';
import { NegativeSentencesComponent } from './components/phrases/negative-sentences/negative-sentences.component';
import { NegativeSentencesListComponent } from './components/phrases/negative-sentences-list/negative-sentences-list.component';
import { FooterComponent } from './components/phrases/footer/footer.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PhrasesComponent,
    NegativeSentencesComponent,
    NegativeSentencesListComponent,
    FooterComponent    
  ],
  imports: [
    CommonModule,
    BrowserModule,    
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
