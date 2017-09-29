import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { StracatService} from "./stracat.service";
import { ComponentsComponent } from './components/components.component';
import { ResultsComponent } from './results/results.component';


@NgModule({


  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DescriptionComponent,
    ComponentsComponent,
    ResultsComponent
  ],
  providers: [StracatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
