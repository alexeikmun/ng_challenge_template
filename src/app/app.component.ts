/**
 *                Cities List
 * Actions to take:
 * - When start the app should load the cities from json file
 * - Add new city name from a textfield
 * - Delete city name when you click the name
 * - Validate no repeat city names and display an error message
 * - The way to call JSON with axios is:
 *      axios.get('cities.json')
 *
 * Nice to have:
 *
 * Filter the cities by name
 * Unit tests
 */

import { Component } from "@angular/core";
import { CityService } from "./services/city.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cities: any;

  constructor(private service: CityService) {}

  ngOnInit() {}
}
