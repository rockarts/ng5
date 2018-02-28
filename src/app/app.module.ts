import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, APP_INITIALIZER } from '@angular/core';

// Services.
import {DataService} from './data.service';
import { IndexedDBService } from './indexedDB.service'; // IndexedDBService class.
import { Entity, Todo } from './models/entity'; // Entity classes.

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConstructionformComponent } from './constructionform/constructionform.component';
import { TodoComponent } from './todo/todo.component';
import { MaterialModule } from './material.module';

@Injectable() export class IndexedDB {

  constructor(public indexedDB: IndexedDBService, public entity: Entity) { }

  load(): Promise<void> {

      // Opens the "Angular2IndexedDB" database. If it doesn't exist, it will be created.
      var promise: Promise<any> = new Promise((resolve: any) => {
          this.indexedDB.openDBAsync("Angular2IndexedDB", 1).forEach(
              (readyState: string) => {
                  console.log('IndexedDB service: opening db: ' + readyState);
              }, null
          ).then(
              () => {
                  // Gets all records from "TodoStore".
                  this.indexedDB.getAllRecordsAsync("TodoStore").forEach(
                      // Next.
                      (record: Todo) => {
                          // Adds next record to the Todos entity.
                          if (record != null) {
                              this.entity.addTodo(record);
                          }
                      }, null
                  ).then(() => {
                      resolve(true);
                      console.log('IndexedDB service: obtaining of all records completed.');
                  });
              });
      });
      return promise;
  }
}

export function initIndexedDB(indexedDB: IndexedDB): Function {
  return () => indexedDB.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ConstructionformComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), 
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule   
  ],
  providers: [DataService,
      IndexedDBService,
        Entity,
        IndexedDB,
        {
            provide: APP_INITIALIZER,
            useFactory: initIndexedDB,
            deps: [IndexedDB],
            multi: true
        }],
  bootstrap: [AppComponent]
})
export class AppModule { }
