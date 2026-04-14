---
title: Writing Vitepress Blogs
---

This is a reference document (intended for myself) for Vitepress markdown syntax.
More features here: https://vitepress.dev/guide/markdown and https://docs.transor.io/demo.html

## Callouts

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details Dropdown with custom name
This is a details block.
:::

```md
::: details Dropdown with custom name
This is a details block.
:::
```

## GitHub-flavored Alerts

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

```md
> [!NOTE]
> Highlights information that users should take into account, even when skimming.
```

## Code Blocks

```js:line-numbers {1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

```
```js:line-numbers {1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
...
```
<br>


```js
export default {
  data() {
    return { // [!code focus]
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    };
  },
};
```

```
```js
return { // [!code focus]
    msg: "Error", // [!code error]
    msg: "Warning", // [!code warning]
...
```

## Image Gallery
Uses [@miletorix/vitepress-gallery](https://www.npmjs.com/package/@miletorix/vitepress-gallery)
```
<Gallery 
  :images="[
    'demo-1.png',
    'demo-2.jpg',
    'demo-3.jpg',
    'demo-4.jpg'
  ]" 
  :captions="[
    'Image caption Nr.1 ...',
    'Image caption Nr.2 ...',
    'Image caption Nr.3 ...',
    'Image caption Nr.4 ...'
  ]"
/>
```
![image](https://cdn.hackclub.com/019d894a-52cc-7920-b75b-4e2552ddb794/paste-1776124841930.png)