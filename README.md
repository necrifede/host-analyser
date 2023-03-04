# host-analyser

Retrieve information about a host.

## Deploy

When deploting create a `config.js` file which contains the environment variables

```js
const URL = 'api url';
const API_KEY = 'api key';
const API_HOST = 'api host';

export { URL, API_KEY, API_HOST };
```

these values can be obtained from API: [https://rapidapi.com](https://rapidapi.com/Top-Rated/api/ip-reputation-geoip-and-detect-vpn)

## Dependency libraries

### Styles

PicoCSS is a small styles library [https://picocss.com/docs/](https://picocss.com/docs/)

## TODO: pending task to do

[x] use environment variables.
[] use a pattern on input to verify is a valid IP.
[] deploy on commit or merge on master.
[] format final results.

## Documentation

### Examples of output

Below is an output example

```json
{
    "ip": "142.251.36.142",
    "risk": 35,
    "risk_level": "low",
    "status": true,
    "message": "Looks okay, via datacenter in Czechia",
    "cidr": "142.251.36.0/24",
    "asn": "AS15169",
    "country": "Czechia",
    "country_code": "CZ",
    "country_calling_code": "420",
    "continent": "Europe",
    "continent_code": "EU",
    "in_eu": true,
    "city": "Prague",
    "postal_code": null,
    "region": "Hlavni mesto Praha",
    "region_code": "10",
    "currency": "Czech Republic Koruna",
    "currency_code": "CZK",
    "currency_native_short": "Kč",
    "languages": [
        {
            "name": "Czech",
            "native_name": "Česky"
        },
        {
            "name": "Slovak",
            "native_name": "Slovenčina"
        }
    ],
    "latitude": 50.088039398193,
    "longitude": 14.420760154724,
    "flag_image": "https://static.ip-reputation.org/flags/cz.svg",
    "flag_image_icon": "https://static.ip-reputation.org/flags/cz.png",
    "organization": "Google LLC",
    "domain": "google.com",
    "isp": null,
    "time_zone": "Europe/Prague",
    "time_zone_short": "CET",
    "time_zone_offset": "+0100",
    "time_zone_is_dst": false,
    "current_time": "2023-03-04T21:56:16+0100",
    "mobile_carrier": null,
    "mobile_carrier_mcc": null,
    "mobile_carrier_mnc": null,
    "is_datacenter": true,
    "is_isp": false,
    "is_educational": false,
    "is_military": false,
    "is_government": false,
    "is_business": true,
    "is_vpn_proxy": false,
    "is_tor": false,
    "is_malicious": false,
    "is_abusive": false,
    "is_bogon": false,
    "anonymizer": null
}
```
