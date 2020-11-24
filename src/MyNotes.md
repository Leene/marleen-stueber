# Common Breakpoits 2020

+   320px — 480px: Mobile devices.
+   481px — 768px: iPads, Tablets.
+   769px — 1024px: Small screens, laptops.
+   1025px — 1200px: Desktops, large screens.
+   1201px and more — Extra large screens, TV.
```css

// Small devices (landscape phones, 576px and up)  
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up) 
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up) //  992-up
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }


```

## Meine maße max-width AND min-width

```css

// Small devices (landscape phones, 270px upto 768px  ) 
@media (min-width: 270px) and (max-width: 768px) { ... }

// Medium devices (tablets, 768px upto 992px )  
@media (min-width: 768px) and (max-width: 992px) { ... }

// Large devices (desktops, 992px and up) 
@media (min-width: 992px) { ... }


```

 
## Meine maße max-width AND min-width mit VIEWPORT Variable

```css

// Small devices (landscape phones, 270px upto 768px  ) 
@media (min-width: ${VIEWPORT.smMin}) and (max-width: ${VIEWPORT.smMax}) { ... }

// Medium devices (tablets, 768px upto 992px )  
@media (min-width: ${VIEWPORT.mMin}) and (max-width: ${VIEWPORT.mMax}) { ... }

// Large devices (desktops, 992px and up) 
@media (min-width: ${VIEWPORT.lMin}) { ... }


```









## Meine maße min-width


```css
 
// Small devices (landscape phones, 270px and up)
@media (min-width: 270px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }


```



## Meine maße max-width

```css

// Small devices (landscape phones, 576px and down)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and down)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and down)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and down)
@media (min-width: 1200px) { ... }

```