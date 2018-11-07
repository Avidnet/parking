# Smart Parking
[![Travis branch](https://img.shields.io/travis/com/Avidnet/parking/master.svg?style=flat-square)](https://travis-ci.com/Avidnet/parking)

## Introduction
The parking module of I1820 platform in Avidnet. This module sends following data when sensor state changes.

```json
{
  "sensorID": "1194284120302",
  "condition": "0",
  "temperature": "23.625",
  "localTime": "2018-10-13 15:35:28",
  "Rawdata": "1",
  "X_axis": "-228",
  "Y_axis": "144",
  "Z_axis": "-271",
  "Battery": "3.39"
}
```

The parking module senses vehicles on top of it and can indicate that a parking spot is empty when the car leaves it.
This hardware module is implemented by Amin Saeedi and uses LoRa for its communication but
it cannot work with LoRaWAN so it cannot connect to standard LoRa servers like TTN and this code handles its data.
