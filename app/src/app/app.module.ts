
//linking in all libraries/components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule }  from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';  
import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatNativeDateModule } from '@angular/material/core';  
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MoodComponent } from './mood/mood.component';
import { MoodLogComponent } from './mood-log/mood-log.component';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MoodPieComponent } from './mood-pie/mood-pie.component';
import {MatDividerModule} from '@angular/material/divider';
import { MoodVisualizerComponent } from './mood-visualizer/mood-visualizer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    MoodComponent,
    MoodLogComponent,
    MoodPieComponent,
    MoodVisualizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
