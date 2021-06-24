# Juge

How can we display huge amounts of data in the UI while still achieving high performance & without negatively impacting the user experience.

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

  
