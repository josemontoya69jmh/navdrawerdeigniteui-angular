import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxLayoutModule,
	IgxNavigationDrawerModule,
	IgxRadioModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxToggleModule
 } from "igniteui-angular";
import { NavdrawerComponent } from "./navdrawer/navdrawer.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		NavdrawerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
		IgxLayoutModule,
		IgxNavigationDrawerModule,
		IgxRadioModule,
		IgxRippleModule,
		IgxSwitchModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
