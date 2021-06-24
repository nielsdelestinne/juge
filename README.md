# Juge

How can we display huge amounts of data in the UI while still achieving high performance & without negatively impacting
the user experience.

## Approach

_more or less_

1. Read in on some available resources
1. Denote the problems that exist
1. Validate the severity of the problems (e.g. how big of a json file is too big?)
1. Implement & experiment with (a subset) of solutions
1. Validate the effectiveness of the solution

## Existing problems

> Optimizing performance should be done on the back-end, front-end and the network as all three impact performance.

What are the main problems related to performance when displaying large amounts of data, and how severe are they?

Size of response object (e.g. JSON) is too large because it contains too many elements in its collection (e.g. array)

- Long download time

Size of response object (e.g. JSON) is too large because it contains a lot of data (e.g. fields) that are not required

- Long download time

Complex and heavy database queries in the back-end

- Long time-gap between request & response

## Experiments

**When does a response object become too big?** How does compression help (a band aid solution or is it more)?

1. Huge JSON downloaded & displayed (all data) by client
1. Compressed JSON downloaded & displayed (all data) by client

**Caching**

1. Client-side caching
1. Server-side caching

**Lazy loading**

1. Lazy loaded (subset) JSON & displayed (subset data) by client + prefetch all remaining data and keep locally

## Results & observations

### Experiment 1

**Given**

- An API that returns a JSON array of 25k elements
  - Each element contains 4 fields with primitive values (including string)
  - 1.4 Mb total size of JSON
  - The 25k elements created up front and kept in memory (zero effort for the API to 'collect' these results in order to
    return them)
- Throttled Network speed of 40Mbps
  - 1.4Mb should be downloaded in +- 300ms
- An Angular application that will loop over (ngFor) all 25k elements and display them in a table.

> Google Developer Tools > Performance: Profile `exp1_25k_40mbps.json` can be loaded in

**Results**

Total loading time of +-**4450ms** (until the results are shown on the page)
- _That's a lot... given we only have 1.4Mb of JSON and 'only' 25k elements._

The following steps are involved:
1. ✔️ Network call to API: **322ms**
   1. Waiting for the API to respond (Time Till First Byte): **27ms** 
      - (how long does it take for the API to send the first byte)
      - Complex mappings or heavy database calls made by the api, back-end will increase the TTFB
   1. Downloading the JSON: **295ms**
1. ❌ Scripting by the application: **2455ms**
   - The Angular code being executed (including looping over all the elements)
1. ❌ Browser rendering and painting (by the browser): **1700ms**
   - Blocked by scripting: waits on scripting, kicks in afterwards to properly render the HTML in the browser

By increasing the size of elements (n) by a factor x we increase the total loading time by that same factor (linear)
- Not surprisingly as our Angular code contains a for-loop, thus there will be x-time more scripting and rendering te be performed.
- Network download times will increase by factor x as well, as the JSON will become x-times bigger in size.

**Conclusions**

The network request & response time are not the issue. 
- We can still reduce the download-time by compressing the JSON
- We could easily reduce the amount of heavy (unnecessary) api calls by using ETags (and thus getting a very leightweight response back instead)

A simple for-loop without any additional mapping, filtering or other operations is already leading 
to execution times of 2 to 3 seconds.
- 25k elements is a rather large amount, but the elements are of a flat and simple element type...

A rather big surprise was to find out how slow the browser rendering & painting was: 1.5 to 2 seconds. 
- Plus, it has to fully wait for the scripting to be finished.

It's clear that we will have to limit the amount of elements to **process** (by Angular) and **render** (by the browser).
- Pagination can be a viable solution
- Lazy loading of data can be a viable solution
- Always filtering data can be a (somewhat) viable solution

However, it will be interesting to see how we can...
1. Limit the amount of data to process & render
2. But, at the same time, do make all data already available in the client
    - Via a second call maybe?
    


