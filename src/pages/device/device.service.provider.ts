import { Component, Injectable } from '@angular/core';

@Injectable()
export class Devices {
  public devices = [];

  AddDevice(device){
    this.devices.push(device);
  }

  GetDevice(){
    return this.devices;
  }

  Reset(){
    this.devices = [];
  }
}
