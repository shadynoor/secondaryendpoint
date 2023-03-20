import { Component, OnInit } from "@angular/core";
import { LoggerService } from "shady-first-library";

@Component({
  selector: "lib-Another",
  template: ` <p>Another works!</p> `,
  styles: [],
})
export class AnotherComponent implements OnInit {
  constructor(private logger: LoggerService) {
    this.logger.log("Test");
  }

  ngOnInit(): void {}
}
