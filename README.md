# NEXT EVENTS

practice using Next and TypeScript

## Note

Styles and structures of this project are inconsistent and messy.

## Adopting Material UI into Next

To use Next with Material UI, there has been continuous mismatch of className props due to SSR features of Next.
<br />
`pages/_document.tsx` and settings of `_app.tsx` will solve the issue by

1. Remove SSR styles before rendering and then apply local styles
2. MUI styles will be rendered after the app and page styles are applied.

Check out this [link](https://www.youtube.com/watch?v=0rnVfshKqDI) for more information.
