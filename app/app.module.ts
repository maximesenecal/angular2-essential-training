import { NgModule }	from '@angular/core';
//Load browser support. Web application for the browser
import { BrowserModule }	from '@angular/platform-browser';
//Load component defines in app.component.ts
import { AppComponent }	from './app.component';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
