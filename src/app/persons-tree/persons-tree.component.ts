import { Component, OnInit } from '@angular/core';

import usersData from '../users.json';

interface Users {
  name: String,
  code: String,
  imagePath: String,

}

interface FinalUsers {
  name: String;
  imagePath: String;
  code: string[];
}[]

var outPutList = [];


@Component({
  selector: 'app-persons-tree',
  templateUrl: './persons-tree.component.html',
  styleUrls: ['./persons-tree.component.scss']
})
export class PersonsTreeComponent implements OnInit {
  constructor() { }

  users: Users[] = usersData;
  finalUserOut: FinalUsers[][] | undefined;
  Parent: any;
  FirstChild: any;
  secondChild: any;
  thirdChild: any;

  changeArr() {

    var ArrayCodeList = this.users.map(function (val, index) {
      return {
        "name": val.name,
        "imagePath": val.imagePath,
        "code": val.code.split(".")
      };
    })
    var ArrayCodeLength = this.users.map(function (val, index) { return (val.code.length - (val.code.length % 4)) / 4; })
    var max = 1;
    for (var i in ArrayCodeLength) {
      if (max <= ArrayCodeLength[i]) {
        max = ArrayCodeLength[i]
      }
    }

    outPutList = [];
    for (var k = 1; k <= max; k++) {
      var list = [];
      for (var m = 0; m < ArrayCodeList.length; m++) {
        if (ArrayCodeList[m].code.length == k) {
          list.push(ArrayCodeList[m])
        }
      }
      outPutList.push(list)
    }

    this.finalUserOut = outPutList;

    this.Parent = outPutList.slice(0, 1)
    this.FirstChild = outPutList.slice(1, 2)
    this.secondChild = outPutList.slice(2, 3)
    this.thirdChild = outPutList.slice(3, 4)


  }

  ngOnInit(): void {
    this.changeArr();
  }
}
