import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { Devices } from '../device/device.service.provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,  private ble: BLE, public deviceProperties: Devices) {

  }

  Hello(){
    alert("Hello!");
  }

  //deviceProperties = [];

  StartScanning(){
    //this.deviceProperties.Reset();
    this.ble.scan([],30).subscribe(device => {
      //if(device.name == "MiniDx6-GCS103"){
      if(device.id){
        if(!device.name)
          device.name = "unknown";

        this.deviceProperties.AddDevice({'id': device.id, 'name': device.name});
      }
              console.log(this.deviceProperties.GetDevice());
    }, error => {
      console.log(error);
    });
    //this.navCtrl.push(HomePage);
  }

}
