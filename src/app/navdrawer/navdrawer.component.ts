import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxNavigationDrawerComponent } from "igniteui-angular";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-navdrawer",
  styleUrls: ["./navdrawer.component.scss"],
  templateUrl: "./navdrawer.component.html"
})
export class NavdrawerComponent {
  // Comprobar esta variable
  public navItems = [
    { name: "home", text: "Inico" },
    { name: "list", text: "Badge" },
    { name: "group_work", text: "Button Group" },
    { name: "home", text: "Card" },
    { name: "view_carousel", text: "Carousel" },
    { name: "date_range", text: "Date picker" },
    { name: "all_out", text: "Dialog" },
    { name: "web", text: "Forms" }
    // { name: "delete", text: "Borrar" },
    //  { name: "list", text: "List" },
    // { name: "arrow_back", text: "Navbar" },
    //{ name: "menu", text: "Navdrawer" },
    //{ name: "poll", text: "Progress Indicators" },
    // { name: "linear_scale", text: "Slider" },
    // { name: "swap_vert", text: "Scroll" },
    // { name: "feedback", text: "Snackbar" },
    // { name: "tab", text: "Tabbar" },
    //{ name: "android", text: "Toast" }
  ];

  public navItemsDerecha = [
  
    { name: "delete", text: "Borrar" },
      { name: "list", text: "List" },
     { name: "arrow_back", text: "Navbar" },
    { name: "menu", text: "Navdrawer" },
    { name: "poll", text: "Progress Indicators" },
    { name: "linear_scale", text: "Slider" },
    { name: "swap_vert", text: "Scroll" },
     { name: "feedback", text: "Snackbar" },
     { name: "tab", text: "Tabbar" },
    { name: "android", text: "Toast" }
  ];







  public selected = "Borrar";
public esAdmitido = true;
  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  // La instancia drawer nos devuelve todo lo que podemos hacer con
  // position
  public drawer: IgxNavigationDrawerComponent;

  /** Funcion espupenda para ver que nos devuelve la instancia drawer y que podemos
   hacer con ella
   */
  public navigate(item) {
    
    this.selected = item.text;
    //  this.drawer.position= 'right';

    this.drawer.close();
    console.log(item.text);

    // console.log("drawer instancia", this.drawer.isOpen);
  }
}
