---
title: Query Performance Overview
---

# Query Performance in Apache Cloudberry

Apache Cloudberry dynamically eliminates irrelevant partitions in a table and optimally allocates memory for different operators in a query.These enhancements scan less data for a query, accelerate query processing, and support more concurrency.

- Dynamic partition elimination

    In Apache Cloudberry, values available only when a query runs are used to dynamically prune partitions, which improves query processing speed. Enable or deactivate dynamic partition elimination by setting the server configuration parameter `gp_dynamic_partition_pruning` to `ON` or `OFF`; it is `ON` by default.

- Memory optimizations

    Apache Cloudberry allocates memory optimally for different operators in a query and frees and re-allocates memory during the stages of processing a query.

:::info
Apache Cloudberry uses GPORCA by default. GPORCA extends the planning and optimization capabilities of the Postgres optimizer.
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
