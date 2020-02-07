// Importantes que esten
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
// Estas son las minimas importaciones de igx pero las de arriba tambien son importantes
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxLayoutModule,
	IgxNavigationDrawerModule,
	IgxRadioModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxToggleModule,
  IgxNavbarModule
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
		IgxToggleModule,
    IgxNavbarModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
