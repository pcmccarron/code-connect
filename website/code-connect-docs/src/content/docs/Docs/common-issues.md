---
title: Common Issues
sidebar:
    order: 4
description: A list of common issues that we have encountered and are in the process of fixing

---

### Connectivity issues due to proxies or network security software

Some proxies or network security software can prevent Code Connect from communicating with Figma's servers. If you encounter issues, you may need to explicitly allow connections to `https://api.figma.com/`. Please reach out to [Figma support](https://help.figma.com/hc/en-us/requests/new) if you are still unable to use Code Connect.

### 413 errors due to too large uploads

Please rerun with the `--batch-size` parameter. This will upload the Code Connect in batches of documents of batch_size length. We suggest starting with 50 and decreasing until converging on a size that works for your Code Connect.
