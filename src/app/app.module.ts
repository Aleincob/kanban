import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardNameComponent } from './components/board-name/board-name.component';
import { KanbanListComponent } from './components/kanban-list/kanban-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardNameComponent,
    KanbanListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
