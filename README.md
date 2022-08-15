# Simple chrome extension to block website

Making website greyscale!
-> research found that if we make a page into greyscale, the website become less attractive == less time wasting:w

# Installation
1. Clone the repo.
2. Open the Extension Management page by navigating to `chrome://extensions`.
3. Enable Developer Mode.
4. Click the LOAD UNPACKED button and select the extension directory (this repository, where it was cloned to).

## How it works?
This is implimented using an chrome API (declarativeNetRequest) that enables plugin developers to intercept, block without hamper of privacy 
by using manifest version 3.

e.g. if you want to block www.facebook.com:
edit the rules_2.json file adding these code - 
```
[
    {
      "id": 1,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {"urlFilter": "facebook.com", "resourceTypes": ["main_frame"] }
    }
]
```
if you add more website add id and write in between [ ], using , for seperation. 
